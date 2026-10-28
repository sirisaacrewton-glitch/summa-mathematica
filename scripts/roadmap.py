#!/usr/bin/env python3
"""Roadmap refinement assist with DeepSeek (English output; Claude reflects it in Japanese).

For one field folder (e.g. 05-geometry-topology/05-differential-geometry) DeepSeek receives
  * every series in it (_meta.json: id, title, description, prereq with notes) and its pages in order,
    with the main definitions and theorems of each page (from labels.json),
  * the prerequisite series outside the field (title and description),
  * the actual cross-series citations that are not covered by the declared prereq (build.js DEP_REPORT),
  * the assignment tables of _claude/PROGRESS.md that mention the field (planned pages, 未着手 rows),
and writes verifications/roadmap/<field>_roadmap.md with suggestions on order, prerequisites, coverage gaps,
splits/merges, the planned pages and learning paths. Nothing is changed automatically: Claude reads the
suggestions, checks them, and proposes the changes to the user (roadmap changes need the user's approval).

Usage:
  python3 scripts/roadmap.py 05-geometry-topology/05-differential-geometry
  python3 scripts/roadmap.py all                           # whole site: gaps and order between fields
  python3 scripts/roadmap.py --git-range BEFORE..AFTER     # fields whose _meta.json changed (workflow)
  add --dry-run to see the prompt size, --mock-response FILE to test without the API
"""

import argparse
import datetime
import json
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import deepseek_api  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join("verifications", "roadmap")
MAX_PROMPT = 90000
MAIN_TYPES = ("definition", "theorem")

SYSTEM_PROMPT = """You are a curriculum architect for Summa Mathematica, a Japanese-language mathematics textbook website
for undergraduate and graduate students of mathematics and physics. The site is organized as
field -> series (a folder with _meta.json; "prereq" lists the series that must be read first) -> pages (one page is a bit
less than one textbook section). Titles are in Japanese; you answer in English.

You receive one field: its series with descriptions, declared prerequisites, pages in reading order and their main
definitions and theorems; the prerequisite series outside the field; citations that cross into series NOT covered by the
declared prerequisites; and the author's planning tables (rows marked 未着手 are planned but not yet written, 完了 are done).

Refine the roadmap. Specifically:
1. order: a series or page that uses material placed after it, or an order that would read better (give the concrete move).
2. prerequisites: declared prereq that is missing (judge from the undeclared citations and from the content) or superfluous;
   suggest the exact series id and a short note of what is used.
3. gaps: standard topics a student of this field is expected to know that are missing, with where they should go
   (new page in which series, after which page) and what they depend on. Prioritize: essential > useful > optional.
4. structure: pages or series that should be split, merged, renamed or moved to another field, with the reason.
5. planned pages (未着手 rows): refine their scope and order, point out dependencies that are not yet planned, and anything
   that will be needed for later planned pages.
6. learning paths: recommended entry points and short routes (e.g. for physics students, for a first course), using
   existing series ids and page titles.
Be concrete and conservative: do not suggest restructuring that is merely a matter of taste; prefer a few well-argued
suggestions. Do not invent references; mention a standard textbook only if you are sure it exists.

Answer with a single JSON object (json), no prose outside it:
{"order": [{"target": "...", "suggestion": "...", "reason": "..."}],
 "prerequisites": [{"series": "id", "action": "add" | "remove", "prereq": "id", "note": "...", "reason": "..."}],
 "gaps": [{"priority": "essential" | "useful" | "optional", "topic": "...", "placement": "...", "depends_on": "...", "reason": "..."}],
 "structure": [{"target": "...", "suggestion": "...", "reason": "..."}],
 "planned": [{"target": "row id or title", "suggestion": "...", "reason": "..."}],
 "learning_paths": [{"audience": "...", "route": "...", "comment": "..."}],
 "summary": "one paragraph overall assessment"}
All text fields must be written in English Markdown.

""" + deepseek_api.STRICT_LATEX_RULES


def git(*args):
    return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True)


def load_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def all_series():
    """series id -> (folder, meta) for every _meta.json in 0[1-5]-*."""
    out = {}
    for top in sorted(os.listdir(ROOT)):
        if not re.match(r"^0[1-5]-", top):
            continue
        for dirpath, dirnames, filenames in os.walk(os.path.join(ROOT, top)):
            dirnames.sort()
            if "_meta.json" in filenames:
                try:
                    meta = load_json(os.path.join(dirpath, "_meta.json"))
                except ValueError:
                    continue
                if meta.get("id"):
                    out[meta["id"]] = (os.path.relpath(dirpath, ROOT), meta)
    return out


def field_of(path):
    parts = path.split("/")
    return "/".join(parts[:2]) if len(parts) >= 3 else None


def labels_by_page():
    try:
        L = load_json(os.path.join(ROOT, "labels.json")).get("labels", {})
    except (OSError, ValueError):
        return {}, {}
    titles, mains = {}, {}
    for v in L.values():
        p = v.get("page")
        if not p:
            continue
        if v.get("type") == "page":
            titles[p] = v.get("title", "")
        elif v.get("type") in MAIN_TYPES and v.get("title"):
            mains.setdefault(p, []).append((v.get("num", ""), v["type"], v["title"]))
    return titles, mains


def num_key(n):
    return [int(x) if x.isdigit() else 0 for x in re.split(r"[.\-]", n or "0")]


def describe_field(field, series, with_mains=True):
    titles, mains = labels_by_page()
    inside = {sid: fm for sid, fm in series.items() if not field or fm[0] == field or fm[0].startswith(field + "/")}
    lines, outside = [], set()
    for sid, (folder, meta) in sorted(inside.items(), key=lambda x: x[1][0]):
        lines.append("### series `%s` — %s (%s) [%s]" % (sid, meta.get("title", ""), meta.get("en", ""), folder))
        if meta.get("description"):
            lines.append("Description: " + meta["description"])
        pre = meta.get("prereq") or []
        if pre:
            lines.append("Declared prereq: " + "; ".join("`%s` (%s)" % (p.get("dir"), p.get("note", "")) for p in pre))
            outside.update(p.get("dir") for p in pre if p.get("dir") not in inside)
        pages = sorted(f for f in os.listdir(os.path.join(ROOT, folder))
                       if f.endswith(".html") and f != "index.html" and not f.startswith("_"))
        for f in pages:
            rel = folder + "/" + f
            lines.append("- page `%s`: %s" % (f, titles.get(rel, "")))
            if with_mains:
                for n, t, title in sorted(mains.get(rel, []), key=lambda x: num_key(x[0]))[:12]:
                    lines.append("  - %s %s %s" % (t, n, title))
        lines.append("")
    ext = []
    for sid in sorted(x for x in outside if x):
        if sid in series:
            folder, meta = series[sid]
            ext.append("- `%s` — %s [%s]: %s" % (sid, meta.get("title", ""), folder, meta.get("description", "")))
        else:
            ext.append("- `%s` — (undefined series id)" % sid)
    return inside, "\n".join(lines), "\n".join(ext) or "(none)"


def undeclared_deps(ids):
    r = subprocess.run(["node", "tools/build.js", "--check", "--quiet"], cwd=ROOT, capture_output=True, text=True,
                       env=dict(os.environ, DEP_REPORT="1"))
    out, keep = [], False
    for line in (r.stdout + r.stderr).split("\n"):
        m = re.match(r"^  (\S+) → (\S+)（\d+）", line)
        if m:
            keep = m.group(1) in ids
        elif not line.startswith("      "):
            keep = False
        if keep:
            out.append(line)
    return "\n".join(out) or "(none)"


def planning_tables(field, ids):
    try:
        text = open(os.path.join(ROOT, "_claude", "PROGRESS.md"), encoding="utf-8").read()
    except OSError:
        return "(none)"
    secs = re.split(r"(?m)^(?=## )", text)
    keys = [field] + list(ids)
    picked = []
    for s in secs:
        head = s.split("\n", 1)[0]
        if "完了ログ" in head or "次の作業" in head:
            continue
        if any(k in s for k in keys) and "|" in s:
            picked.append(s.strip()[:15000])
    return "\n\n".join(picked) or "(none)"


def build_prompt(field):
    series = all_series()
    if field == "all":  # whole site: series and page titles only, no planning tables
        inside, body, ext = describe_field("", series, with_mains=False)
        return "\n".join(["Field: the whole site (all fields). Focus on gaps and order BETWEEN fields and series.", "",
                           "## Series and pages (reading order)", body, "",
                           "## Citations into series not covered by the declared prereq (from build.js)",
                           undeclared_deps(set(inside))])[:MAX_PROMPT * 2]
    inside, body, ext = describe_field(field, series)
    if not inside:
        raise SystemExit("no series under %s" % field)
    user = "\n".join(["Field: %s" % field, "", "## Series and pages (reading order)", body,
                      "## Prerequisite series outside this field", ext, "",
                      "## Citations into series not covered by the declared prereq (from build.js)",
                      undeclared_deps(set(inside)), "",
                      "## Planning tables (_claude/PROGRESS.md)", planning_tables(field, inside)])
    if len(user) > MAX_PROMPT:  # drop the per-page results to fit
        _, body, ext = describe_field(field, series, with_mains=False)
        user = user.replace(user[user.index("## Series and pages"):user.index("## Prerequisite series")],
                            "## Series and pages (reading order)\n" + body + "\n")
    return user[:MAX_PROMPT]


def render(field, res, meta):
    def items(key, fmt):
        rows = res.get(key) or []
        return [fmt(x) for x in rows] or ["(none)"]

    def g(x, k):
        return str(x.get(k) or "").strip()

    out = ["# Roadmap suggestions: `%s`" % field, "",
           "<!-- Regenerated by scripts/roadmap.py (not stateful). DeepSeek writes English; Claude checks the suggestions",
           "     and proposes accepted ones to the user in Japanese (roadmap changes need the user's approval). -->",
           "", "- Generated: %s (commit %s, %s)" % (meta["date"], meta["commit"], meta["model"]), "",
           "## Summary", "", g(res, "summary") or "(none)", "", "## Order", ""]
    out += items("order", lambda x: "- **%s**: %s — %s" % (g(x, "target"), g(x, "suggestion"), g(x, "reason")))
    out += ["", "## Prerequisites", ""]
    out += items("prerequisites", lambda x: "- **%s** %s `%s` (%s) — %s" % (
        g(x, "series"), g(x, "action") or "add", g(x, "prereq"), g(x, "note"), g(x, "reason")))
    out += ["", "## Gaps", ""]
    order = {"essential": 0, "useful": 1, "optional": 2}
    res["gaps"] = sorted(res.get("gaps") or [], key=lambda x: order.get(g(x, "priority"), 3))
    out += items("gaps", lambda x: "- [%s] **%s** — placement: %s; depends on: %s. %s" % (
        g(x, "priority"), g(x, "topic"), g(x, "placement"), g(x, "depends_on"), g(x, "reason")))
    out += ["", "## Structure", ""]
    out += items("structure", lambda x: "- **%s**: %s — %s" % (g(x, "target"), g(x, "suggestion"), g(x, "reason")))
    out += ["", "## Planned pages", ""]
    out += items("planned", lambda x: "- **%s**: %s — %s" % (g(x, "target"), g(x, "suggestion"), g(x, "reason")))
    out += ["", "## Learning paths", ""]
    out += items("learning_paths", lambda x: "- **%s**: %s. %s" % (g(x, "audience"), g(x, "route"), g(x, "comment")))
    return "\n".join(out).rstrip() + "\n"


def out_path(field):
    return os.path.join(OUT_DIR, field.replace("/", "__") + "_roadmap.md")


def fields_from_range(rng):
    before, _, after = rng.partition("..")
    if not before or set(before) == {"0"} or git("cat-file", "-e", before + "^{commit}").returncode:
        before = after + "^"
    r = git("diff", "--name-only", before, after)
    fs = []
    for rel in r.stdout.split():
        if rel.endswith("/_meta.json"):
            f = field_of(rel)
            if f and f not in fs and os.path.isdir(os.path.join(ROOT, f)):
                fs.append(f)
    return fs


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument("field", nargs="?", help="field folder, e.g. 05-geometry-topology/05-differential-geometry")
    g.add_argument("--git-range", help="BEFORE..AFTER: fields whose _meta.json changed")
    ap.add_argument("--max-fields", type=int, default=3)
    ap.add_argument("--model", default=deepseek_api.DEFAULT_MODEL)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--mock-response")
    args = ap.parse_args()

    fields = fields_from_range(args.git_range) if args.git_range else [args.field.strip("/")]
    if not fields:
        print("roadmap: nothing to do")
        return
    fields = fields[:args.max_fields]
    if not (args.dry_run or args.mock_response) and not os.environ.get("DEEPSEEK_API_KEY"):
        print("roadmap: DEEPSEEK_API_KEY is not set; skipping")
        return
    sha = os.environ.get("GITHUB_SHA") or git("rev-parse", "HEAD").stdout.strip()
    meta = {"date": datetime.date.today().isoformat(), "commit": sha[:7], "model": args.model}
    for field in fields:
        user = build_prompt(field)
        print("roadmap %s (%d chars) -> %s" % (field, len(user), out_path(field)))
        if args.dry_run:
            continue
        raw = open(args.mock_response, encoding="utf-8").read() if args.mock_response else \
            deepseek_api.chat(SYSTEM_PROMPT, user, model=args.model, json_mode=True, temperature=0.2)
        try:
            res = json.loads(raw)
        except ValueError:
            print("  invalid JSON; left unchanged")
            continue
        os.makedirs(os.path.join(ROOT, OUT_DIR), exist_ok=True)
        with open(os.path.join(ROOT, out_path(field)), "w", encoding="utf-8") as f:
            f.write(render(field, res, meta))


if __name__ == "__main__":
    try:
        main()
    except deepseek_api.DeepSeekError as e:
        sys.exit("error: %s" % e)
