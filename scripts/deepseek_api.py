"""Shared DeepSeek API client for structure_ocr.py and verify.py.

Standard library only (no pip install needed locally or on GitHub Actions).
The API key is read from the environment variable DEEPSEEK_API_KEY and is
never printed or written anywhere.
"""

import atexit
import http.client
import json
import os
import re
import sys
import threading
import time
import urllib.error
import urllib.request

API_BASE = os.environ.get("DEEPSEEK_API_BASE", "https://api.deepseek.com")
DEFAULT_MODEL = "deepseek-chat"

# Mandatory for every DeepSeek system prompt in this project (user rule, 2026-10-28).
STRICT_LATEX_RULES = """Strict LaTeX Rules (Must Follow):
- ALL subscripts must be wrapped in curly braces, even single characters (e.g., use `a_{n}`, `P_{0}`, NOT `a_n`).
- Underscores `_` must ONLY be used with curly braces to avoid Markdown rendering conflicts.
- Always use `\\Vec` instead of `\\vect`.
- Complex formulas or those with multiple relational operators must be formatted as independent display math `$$ ... $$` on new lines, never inline.
- Simplify complex LaTeX commands to standard ones (e.g., use `\\subset` instead of `\\subsetneq`).
- Do NOT insert unnecessary spaces or line breaks before/after formulas."""


_SEEN_MODELS = set()
USAGE = {"calls": 0, "prompt_tokens": 0, "cache_hit_tokens": 0, "completion_tokens": 0, "reasoning_tokens": 0}
_USAGE_LOCK = threading.Lock()


def _report_usage():
    if USAGE["calls"]:
        print("DeepSeek usage: %(calls)d calls, %(prompt_tokens)d prompt tokens (%(cache_hit_tokens)d cache hits), "
              "%(completion_tokens)d completion tokens (%(reasoning_tokens)d reasoning)" % USAGE, file=sys.stderr)


atexit.register(_report_usage)


def is_reasoner(model):
    return "reasoner" in (model or "")


class DeepSeekError(RuntimeError):
    pass


class DeepSeekFatal(DeepSeekError):
    """Errors that no retry can fix (no balance, bad key): the whole run must stop instead of reporting 'no issues'."""


def api_key():
    key = os.environ.get("DEEPSEEK_API_KEY", "").strip()
    if not key:
        raise DeepSeekError("DEEPSEEK_API_KEY is not set")
    return key


def chat(system, user, *, model=DEFAULT_MODEL, temperature=0.0, max_tokens=8192,
         json_mode=False, retries=4, timeout=600):
    """Send one chat completion request and return the assistant text."""
    body = {
        "model": model,
        "messages": ([{"role": "system", "content": system}] if system else []) + [{"role": "user", "content": user}],
        "max_tokens": max_tokens,
        "stream": False,
    }
    if not is_reasoner(model):
        body["temperature"] = temperature   # the reasoning model ignores sampling parameters
    if json_mode and not is_reasoner(model):
        body["response_format"] = {"type": "json_object"}
    data = json.dumps(body).encode("utf-8")
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + api_key(),
    }
    delay = 2.0
    last = None
    for attempt in range(retries + 1):
        req = urllib.request.Request(API_BASE.rstrip("/") + "/chat/completions",
                                     data=data, headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                payload = json.loads(resp.read().decode("utf-8"))
            served = payload.get("model")
            if served and served not in _SEEN_MODELS:
                _SEEN_MODELS.add(served)
                print("DeepSeek served model: %s" % served, file=sys.stderr)
            u = payload.get("usage") or {}
            with _USAGE_LOCK:
                USAGE["calls"] += 1
                USAGE["prompt_tokens"] += u.get("prompt_tokens", 0)
                USAGE["cache_hit_tokens"] += u.get("prompt_cache_hit_tokens", 0)
                USAGE["completion_tokens"] += u.get("completion_tokens", 0)
                USAGE["reasoning_tokens"] += (u.get("completion_tokens_details") or {}).get("reasoning_tokens", 0)
            choice = payload["choices"][0]
            text = choice["message"].get("content") or ""
            if choice.get("finish_reason") == "length":
                # a cut-off answer must never be read as "no issues"
                raise DeepSeekError("answer cut off at max_tokens=%d (reasoning used %s tokens)" % (
                    max_tokens, (u.get("completion_tokens_details") or {}).get("reasoning_tokens", "?")))
            return text
        except urllib.error.HTTPError as e:
            last = "HTTP %d: %s" % (e.code, e.read().decode("utf-8", "replace")[:300])
            if e.code in (401, 402, 403):
                raise DeepSeekFatal("DeepSeek request failed: %s" % last)
            if e.code not in (429, 500, 502, 503, 504):
                break
        except (urllib.error.URLError, http.client.HTTPException, OSError, TimeoutError, KeyError, ValueError) as e:
            last = repr(e)
        if attempt < retries:
            time.sleep(delay)
            delay *= 2
    raise DeepSeekError("DeepSeek request failed: %s" % last)


def parse_json(text):
    """Parse a JSON object from a model answer (plain JSON, a ```json fence, or text around one object)."""
    text = (text or "").strip()
    m = re.search(r"```(?:json)?\s*(\{[\s\S]*\})\s*```", text)
    if m:
        text = m.group(1)
    try:
        return json.loads(text)
    except ValueError:
        i, j = text.find("{"), text.rfind("}")
        if i >= 0 and j > i:
            return json.loads(text[i:j + 1])
        raise


def chat_json(system, user, *, model=DEFAULT_MODEL, **kw):
    """chat() asking for one JSON object; the reasoning model gets more room (its reasoning is not counted in content)."""
    if is_reasoner(model):
        kw.setdefault("max_tokens", 32000)
        kw.setdefault("timeout", 1200)
    return parse_json(chat(system, user, model=model, json_mode=True, **kw))
