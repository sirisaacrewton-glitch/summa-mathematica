#!/usr/bin/env python3
"""Check the automatic term links with DeepSeek, one small question at a time.

For each (series, term, chosen definition) — one representative sentence per series —
  1. send the sentence and the full text of the DEFAULT definition card; ask OK / NG;
  2. only if NG, send the next candidate card, and so on; stop at the first OK.
The report (verifications/termlinks/<name>.md) lists only the links where the default was NG:
the candidate that fits (fix: \\term[語]{label} or a rule in tools/terms.json), or "none fits".

    node tools/term-links.js > /tmp/units.json
    python3 scripts/termcheck.py /tmp/units.json --dirs 01-foundations/01-general-logic --ambiguous --limit 200
"""

import argparse
import datetime
import json
import os
import re
import sys
import threading
from concurrent.futures import ThreadPoolExecutor

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import deepseek_api  # noqa: E402
import verify  # noqa: E402  (label lookup and definition-card text)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Fixed text first so that DeepSeek's prefix cache can reuse it across calls.
QUESTION = deepseek_api.STRICT_LATEX_RULES + """

A Japanese mathematics textbook links a term to a definition card automatically. Decide whether the term,
as used in the sentence, has the meaning defined by the card (same notion; a special case or the obvious
plural/variant of it is fine). Answer only <ok/> or <ng>one short English sentence why</ng>."""


def card(label):
    verify.label_table("")  # loads labels.json
    L = verify._LABELS.get(label) or {}
    body = re.sub(r"\s+", " ", verify._env_body(label)).strip()[:2000]
    return "%s %s「%s」 (%s)\n%s" % (L.get("type", ""), L.get("num", ""), L.get("title", ""), L.get("page", ""), body)


def ask(term, sentence, label, model):
    q = QUESTION + "\n\n<card>\n" + card(label) + "\n</card>\n\n<term>" + term + "</term>\n<sentence>" + sentence + "</sentence>"
    a = deepseek_api.chat(None, q, model=model, max_tokens=120, temperature=0.0)
    if re.search(r"<ok\s*/?>", a or ""):
        return True, ""
    m = re.search(r"<ng>([\s\S]*?)</ng>", a or "")
    return False, (m.group(1).strip() if m else (a or "").strip()[:200])


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("units", help="output of node tools/term-links.js")
    ap.add_argument("--dirs", nargs="*", default=[], help="only pages under these folders")
    ap.add_argument("--ambiguous", action="store_true", help="only terms with more than one candidate definition")
    ap.add_argument("--limit", type=int, default=100, help="max (series, term, label) groups to check")
    ap.add_argument("--model", default=os.environ.get("DEEPSEEK_MODEL") or "deepseek-chat")
    ap.add_argument("--out", default="verifications/termlinks/report.md")
    ap.add_argument("--workers", type=int, default=8, help="parallel questions")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    units = json.load(open(args.units, encoding="utf-8"))
    groups, order = {}, []
    for u in units:
        if args.dirs and not any(u["page"].startswith(d) for d in args.dirs):
            continue
        if args.ambiguous and not u["others"]:
            continue
        k = (u["page"].rsplit("/", 1)[0], u["term"], u["label"])
        if k not in groups:
            groups[k] = {"unit": u, "pages": []}
            order.append(k)
        groups[k]["pages"].append(u["page"])
    order = order[:args.limit]
    print("termcheck: %d groups (of %d units)" % (len(order), len(units)), file=sys.stderr)
    if args.dry_run:
        n = sum(len(card(groups[k]["unit"]["label"])) + len(groups[k]["unit"]["context"]) + len(QUESTION) for k in order)
        print("termcheck: about %d characters for the first questions" % n, file=sys.stderr)
        return
    if not os.environ.get("DEEPSEEK_API_KEY"):
        sys.exit("DEEPSEEK_API_KEY is not set")

    problems, ok_default, done, stopped = [], [0], [0], []
    lock = threading.Lock()

    def check(k):
        if stopped:
            return
        u = groups[k]["unit"]
        chain = []
        fit = None
        try:
            for lab in [u["label"]] + u["others"]:
                ok, why = ask(u["term"], u["context"], lab, args.model)
                chain.append((lab, ok, why))
                if ok:
                    fit = lab
                    break
        except deepseek_api.DeepSeekFatal as e:   # e.g. the balance ran out: keep what we have
            stopped.append(str(e))
            return
        except deepseek_api.DeepSeekError as e:
            print("  skipped %s 「%s」: %s" % (k[0], u["term"], e), file=sys.stderr)
            return
        with lock:
            done[0] += 1
            if fit == u["label"]:
                ok_default[0] += 1
                return
            problems.append({"series": k[0], "term": u["term"], "default": u["label"], "fit": fit,
                             "pages": groups[k]["pages"], "context": u["context"], "chain": chain})
        print("  NG %s 「%s」 %s -> %s" % (k[0], u["term"], u["label"], fit or "(none)"), file=sys.stderr)

    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        list(ex.map(check, order))
    problems.sort(key=lambda p: (p["series"], p["term"]))

    os.makedirs(os.path.dirname(os.path.join(ROOT, args.out)), exist_ok=True)
    lines = ["# Term-link check", "",
             "- Date: %s, model %s; groups checked: %d of %d; default fits: %d; problems: %d%s" % (
                 datetime.date.today().isoformat(), args.model, done[0], len(order), ok_default[0], len(problems),
                 ("; STOPPED: " + stopped[0]) if stopped else ""),
             "- Usage: %(calls)d calls, %(prompt_tokens)d prompt tokens (%(cache_hit_tokens)d cache hits), "
             "%(completion_tokens)d completion tokens" % deepseek_api.USAGE, "",
             "Each entry: the term, the series, the definition the linker chose (NG), and the first candidate that fits "
             "(fix with \\term[語]{label} or a rule in tools/terms.json), or none.", ""]
    for p in problems:
        lines.append("## 「%s」 in %s" % (p["term"], p["series"]))
        lines.append("- Default: `%s` → **%s**" % (p["default"], "fits: `%s`" % p["fit"] if p["fit"] else "no candidate fits"))
        lines.append("- Pages: " + ", ".join(x.rsplit("/", 1)[1] for x in p["pages"]))
        lines.append("- Sentence: " + p["context"].replace("\n", " "))
        for lab, ok, why in p["chain"]:
            lines.append("  - `%s`: %s%s" % (lab, "OK" if ok else "NG", (" — " + why) if why else ""))
        lines.append("")
    with open(os.path.join(ROOT, args.out), "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print("termcheck: wrote %s" % args.out, file=sys.stderr)


if __name__ == "__main__":
    try:
        main()
    except deepseek_api.DeepSeekError as e:
        sys.exit("error: %s" % e)
