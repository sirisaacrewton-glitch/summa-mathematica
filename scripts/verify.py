#!/usr/bin/env python3
"""Part 3: logical verification of deployed pages with DeepSeek (stateful tracker).

For each target page, verifications/<path>_tracker.md is read and updated:
  1. previously [Open] issues that are fixed      -> [Resolved]
  2. [Open] issues with an "**Opus Rebuttal:**"   -> [Ignored: Valid Rebuttal] if DeepSeek accepts it
  3. new logical gaps / missing hypotheses / overpowered theorems / improper links /
     errors in supplements, remarks and stated-only facts -> new [Open] issues, each with a Proposed fix
With --assist (on by default in the workflow) a second request writes verifications/<path>_assist.md:
  short-claim suggestions for proof steps without 【主張：…】, alternative proofs, alternative definitions.
DeepSeek writes everything in English; Claude reads it and reflects it into the Japanese pages.

Targets:
  * site pages  NN-*/**/*.html (not index.html); the Markdown source inside <script id="source"> is checked
  * src/**/*.md, src/**/*.tex
  * a changed tracker file re-verifies its page (so a new rebuttal gets judged)

Usage:
  python3 scripts/verify.py --git-range BEFORE..AFTER     # used by .github/workflows/verify.yml
  python3 scripts/verify.py --files 05-geometry-topology/.../01-curves-frenet.html
  add --assist for authoring suggestions, --dry-run to print the plan,
  --mock-response / --mock-assist FILE to test without the API
"""

import argparse
import datetime
import json
import os
import re
import subprocess
import sys
import threading
from concurrent.futures import ThreadPoolExecutor

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import deepseek_api  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TRACKER_DIR = "verifications"
PAGE_RE = re.compile(r"^0[1-5]-[^/]+/(?:[^/_][^/]*/)*(?!index\.html$)[^/_][^/]*\.html$")
SRC_RE = re.compile(r"^src/.+\.(?:md|tex)$")
TRACKER_RE = re.compile(r"^verifications/.+_tracker\.md$")
SOURCE_RE = re.compile(r'<script type="text/markdown" id="source">([\s\S]*?)</script>')
REF_RE = re.compile(r"\\(?:ref|tref|nameref|fullref|eqref|numref|see|term)(?:\[[^\]]*\])?\{([^}]+)\}")
CATEGORIES = ["Logical gap", "Missing hypothesis", "Overpowered theorem", "Improper link",
              "Supplement/remark error", "Unsupported fact"]
STATUSES = ["Open", "Resolved", "Ignored: Valid Rebuttal"]
REBUTTAL = "**Opus Rebuttal:**"

SYSTEM_PROMPT = """You are a strict but fair referee for Summa Mathematica, a Japanese-language mathematics textbook website.
You check ONE page for logical correctness. The page source is a custom Markdown dialect:
- Environments are written as `::: theorem Title {#label ...}` ... `:::` (definition, theorem, lemma, proposition, corollary, fact, proof, hypcheck, intuition, example, supplement, remark, problem, solution).
- `::: fact` states a known result WITHOUT proof on purpose; citing a fact is legitimate.
- `\\ref{label}`, `\\tref{label}` etc. cite results from other pages; a table of the cited labels (kind, title, page) is given. `\\see{label}` is a non-logical pointer (guidance only) and must not be used as a logical dependency. A label with a suffix like `label.2` means item 2 of that result.
- Proof steps look like `**Step N.** 【主張：claim】 reason`; 【主張：...】 is the short claim of the step.
- `::: hypcheck` lists where each hypothesis is used.

Report ONLY genuine problems of these six kinds:
1. "Logical gap": a step that does not follow from what precedes it and the cited results, or an essential case that is skipped.
2. "Missing hypothesis": a cited theorem whose hypotheses are not verified, or a statement that is false without an unstated hypothesis.
3. "Overpowered theorem": a proof that invokes a much stronger theorem than needed, or a theorem that depends on the result being proved (circularity).
4. "Improper link": a citation whose target (according to the label table) does not say what the text uses it for, or a mechanically inserted link to the wrong definition or theorem.
5. "Supplement/remark error": a false, overstated or imprecise claim inside `::: supplement`, `::: remark`, `::: intuition`, a hypcheck comment, or any side comment (e.g. "the hypothesis X cannot be dropped", "this generalizes to Y", "the converse fails", historical attributions, counterexamples).
6. "Unsupported fact": a `::: fact` or a sentence stated without proof that is false, misattributed, missing hypotheses, or stated more strongly than the literature supports.

PRIORITY: errors are known to concentrate in supplements, remarks and stated-only facts (kinds 5 and 6), because they are not protected by a proof. Check EVERY such sentence individually: verify the exact hypotheses, quantifiers, dimensions and edge cases, and that each counterexample really is one. Spend more effort there than on the proofs.
For every issue give a concrete "proposed_fix": the corrected statement or the missing argument, written so that it can be inserted directly (in English).
Do not report style, wording, typography, translation choices, or missing intuition. Do not report something that the text justifies by a citation unless the citation is wrong. Prefer no report over a speculative one. Locate each issue by the environment label or title and the Step number.

You also re-evaluate previously reported OPEN issues:
- "Resolved" if the current text fixes the problem (or the problem no longer exists).
- "Ignored: Valid Rebuttal" ONLY if an Opus Rebuttal is attached AND its argument is mathematically correct. Read the rebuttal carefully; if it is wrong or incomplete, keep "Open" and explain why in the note.
- otherwise "Open".
Never re-report an issue that is listed as closed (Resolved or Ignored) unless the text has clearly re-introduced it.

Answer with a single JSON object (json), no prose outside it:
{"existing": [{"id": "ISSUE-0001", "status": "Open" | "Resolved" | "Ignored: Valid Rebuttal", "note": "one or two sentences"}],
 "new_issues": [{"category": "Logical gap" | "Missing hypothesis" | "Overpowered theorem" | "Improper link" | "Supplement/remark error" | "Unsupported fact", "title": "short title", "location": "label / Step", "detail": "explanation", "proposed_fix": "corrected text or missing argument"}],
 "summary": "one paragraph overall assessment"}
All text fields must be written in English Markdown.

""" + deepseek_api.STRICT_LATEX_RULES


ASSIST_PROMPT = """You are an assistant author for Summa Mathematica, a Japanese-language mathematics textbook website.
You receive ONE page in a custom Markdown dialect (`::: theorem Title {#label}` ... `:::` environments; proof steps are `**Step N.** 【主張：claim】 reason`, where 【主張：...】 is the short claim of the step).
You do NOT edit the page. You write English suggestions that a human-supervised author (Claude) will translate into Japanese and insert.

Produce three kinds of suggestions:
1. step_claims: for every proof step of a theorem, lemma, proposition or corollary that has NO 【主張：...】, propose a short claim: one sentence stating what the step establishes, without the justification. Also flag existing claims that do not match what the step actually proves (put the corrected claim and set "existing": true).
2. alternative_proofs: for the main results, an essentially different proof (different method, not a rewording). Give the idea, the full step structure with a short claim per step, and the prerequisites it needs. Say why it is instructive. Avoid proofs that rely on results proved later than this one or that are circular; say which prerequisites are heavier than in the given proof. Only propose a proof you are confident is correct.
3. alternative_definitions: for the definitions on the page, equivalent (or commonly used non-equivalent) definitions from the standard literature, with the precise statement, the hypotheses under which they are equivalent, and a sketch of the equivalence proof. Mark clearly if a variant is NOT equivalent.

Rules: be mathematically precise; prefer fewer, correct suggestions over many speculative ones; cite standard references (author, title) only if you are sure they exist; locate everything by environment label and Step number.

Answer with a single JSON object (json), no prose outside it:
{"step_claims": [{"location": "label / Step N", "existing": false, "claim": "..."}],
 "alternative_proofs": [{"target": "label", "title": "short name of the method", "idea": "...", "steps": ["Step 1 — Short Claim: ... (reason)", "..."], "prerequisites": "...", "why_instructive": "..."}],
 "alternative_definitions": [{"target": "label", "statement": "...", "equivalent": true, "conditions": "...", "equivalence_sketch": "...", "reference": "..."}],
 "notes": "anything else worth improving, briefly"}
All text fields must be written in English Markdown.

""" + deepseek_api.STRICT_LATEX_RULES


# ---------------------------------------------------------------- tracker I/O

def tracker_path(rel, suffix="_tracker.md"):
    stem = re.sub(r"\.(html|md|tex)$", "", rel)
    return os.path.join(TRACKER_DIR, stem.replace("/", "__") + suffix)


def assist_path(rel):
    return tracker_path(rel, "_assist.md")


def parse_tracker(text):
    issues = []
    blocks = re.split(r"(?m)^(?=### ISSUE-\d+ )", text)
    for b in blocks:
        m = re.match(r"### (ISSUE-\d+) \[([^\]]+)\] ?(.*)", b)
        if not m:
            continue
        it = {"id": m.group(1), "status": m.group(2).strip(), "title": m.group(3).strip(), "fields": {}, "rebuttal": ""}
        body = b[m.end():].split("\n")
        key = None
        for i, line in enumerate(body):
            if line.startswith(REBUTTAL):
                it["rebuttal"] = "\n".join(body[i:]).strip()
                break
            fm = re.match(r"^- \*\*(.+?):\*\* ?(.*)$", line)
            if fm:
                key = fm.group(1)
                it["fields"][key] = fm.group(2)
            elif key and line.startswith("  "):
                it["fields"][key] += "\n" + line[2:]
            elif line.strip() == "":
                if key:
                    it["fields"][key] += "\n"
        for k in it["fields"]:
            it["fields"][k] = it["fields"][k].strip()
        issues.append(it)
    return issues


def render_tracker(rel, issues, meta, summary):
    counts = {s: sum(1 for i in issues if i["status"] == s) for s in STATUSES}
    out = ["# Verification tracker: `%s`" % rel, "",
           "<!-- source: %s -->" % rel,
           "<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with",
           "     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->",
           "",
           "- Last verified: %s (commit %s, %s)" % (meta["date"], meta["commit"], meta["model"]),
           "- Open: %d / Resolved: %d / Ignored: %d" % (counts["Open"], counts["Resolved"], counts["Ignored: Valid Rebuttal"]),
           "", "## Summary of the last run", "", summary.strip() or "(none)", "", "## Issues", ""]
    if not issues:
        out += ["(no issues)", ""]
    for it in issues:
        out.append("### %s [%s] %s" % (it["id"], it["status"], it["title"]))
        for k in ["Category", "Location", "Detail", "Proposed fix", "Reported", "History"]:
            v = it["fields"].get(k)
            if v:
                lines = v.split("\n")
                out.append("- **%s:** %s" % (k, lines[0]))
                out += [("  " + x) if x else "" for x in lines[1:]]
        if it["rebuttal"]:
            out.append(it["rebuttal"])
        out.append("")
    return "\n".join(out).rstrip() + "\n"


# ---------------------------------------------------------------- sources

def git(*args):
    return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True)


def extract_source(rel, text):
    if rel.endswith(".html"):
        m = SOURCE_RE.search(text)
        return m.group(1).strip() + "\n" if m else None
    return text


def source_at(rev, rel):
    r = git("show", "%s:%s" % (rev, rel))
    return extract_source(rel, r.stdout) if r.returncode == 0 else None


_LABELS = None


def label_table(src):
    global _LABELS
    if _LABELS is None:
        try:
            with open(os.path.join(ROOT, "labels.json"), encoding="utf-8") as f:
                _LABELS = json.load(f).get("labels", {})
        except (OSError, ValueError):
            _LABELS = {}
    labels = _LABELS
    if not labels:
        return "(labels.json not available)"
    rows, seen = [], set()
    for lab in REF_RE.findall(src):
        base = lab.split(".")[0] if lab.split(".")[0] in labels else lab
        if base in seen:
            continue
        seen.add(base)
        L = labels.get(base)
        if L:
            rows.append("| %s | %s %s | %s | %s |" % (lab, L.get("type", ""), L.get("num", ""), L.get("title", ""), L.get("page", "")))
        else:
            rows.append("| %s | (undefined or planned) | | |" % lab)
    return "| label | kind | title | page |\n|---|---|---|---|\n" + "\n".join(rows) if rows else "(no citations)"


def targets_from_range(rng):
    before, _, after = rng.partition("..")
    if not before or set(before) == {"0"} or git("cat-file", "-e", before + "^{commit}").returncode:
        before = after + "^"
    r = git("diff", "--name-only", "--diff-filter=AMR", before, after)
    out = []
    for rel in r.stdout.split():
        if TRACKER_RE.match(rel):
            try:
                head = open(os.path.join(ROOT, rel), encoding="utf-8").read(400)
            except OSError:
                continue
            m = re.search(r"<!-- source: (.+?) -->", head)
            if m:
                out.append((m.group(1), "tracker changed"))
        elif PAGE_RE.match(rel) or SRC_RE.match(rel):
            new = source_at(after, rel)
            if new is None:
                continue
            if new == source_at(before, rel):
                continue  # only the generated wrapper changed
            out.append((rel, "source changed"))
    seen, uniq = set(), []
    for rel, why in out:
        if rel not in seen:
            seen.add(rel)
            uniq.append((rel, why))
    return uniq


def render_assist(rel, res, meta):
    def block(text):
        return (text or "").strip() or "(none)"
    out = ["# Authoring suggestions: `%s`" % rel, "",
           "<!-- source: %s -->" % rel,
           "<!-- Regenerated by scripts/verify.py --assist on every run (not stateful). DeepSeek writes English;",
           "     Claude checks each suggestion and reflects the accepted ones into the Japanese page. -->",
           "", "- Generated: %s (commit %s, %s)" % (meta["date"], meta["commit"], meta["model"]), "",
           "## Short claims for proof steps", ""]
    claims = res.get("step_claims") or []
    out += ["- **%s**%s: %s" % ((c.get("location") or "?").strip(), " (replace existing)" if c.get("existing") else "",
                                (c.get("claim") or "").strip()) for c in claims] or ["(none)"]
    out += ["", "## Alternative proofs", ""]
    alts = res.get("alternative_proofs") or []
    for a in alts:
        out += ["### %s — %s" % ((a.get("target") or "?").strip(), (a.get("title") or "").strip()), "",
                "**Idea.** " + block(a.get("idea")), ""]
        out += ["%d. %s" % (i, str(st).strip()) for i, st in enumerate(a.get("steps") or [], 1)]
        out += ["", "**Prerequisites.** " + block(a.get("prerequisites")), "",
                "**Why instructive.** " + block(a.get("why_instructive")), ""]
    if not alts:
        out += ["(none)", ""]
    out += ["## Alternative definitions", ""]
    defs = res.get("alternative_definitions") or []
    for d in defs:
        eq = "equivalent" if d.get("equivalent", True) else "NOT equivalent"
        out += ["### %s (%s)" % ((d.get("target") or "?").strip(), eq), "",
                block(d.get("statement")), "",
                "**Conditions.** " + block(d.get("conditions")), "",
                "**Equivalence.** " + block(d.get("equivalence_sketch")), ""]
        if (d.get("reference") or "").strip():
            out += ["**Reference.** " + d["reference"].strip(), ""]
    if not defs:
        out += ["(none)", ""]
    out += ["## Other notes", "", block(res.get("notes")), ""]
    return "\n".join(out).rstrip() + "\n"


def assist(rel, src, args, meta):
    ap = os.path.join(ROOT, assist_path(rel))
    if args.dry_run:
        print("  would write suggestions -> %s" % assist_path(rel))
        return
    user = "Page: %s\n\n----- SOURCE START -----\n%s\n----- SOURCE END -----" % (rel, src)
    if args.mock_assist:
        raw = open(args.mock_assist, encoding="utf-8").read()
    else:
        raw = deepseek_api.chat(ASSIST_PROMPT, user, model=args.model, json_mode=True, temperature=0.3)
    try:
        res = json.loads(raw)
    except ValueError:
        print("  %s: assist returned invalid JSON; suggestions left unchanged" % rel)
        return
    os.makedirs(os.path.dirname(ap), exist_ok=True)
    with open(ap, "w", encoding="utf-8") as f:
        f.write(render_assist(rel, res, meta))
    print("  %s: %d claim(s), %d alt proof(s), %d alt definition(s) -> %s" % (
        rel, len(res.get("step_claims") or []), len(res.get("alternative_proofs") or []),
        len(res.get("alternative_definitions") or []), assist_path(rel)))


# ---------------------------------------------------------------- verification

def next_id(issues):
    n = max([int(i["id"].split("-")[1]) for i in issues] or [0])
    return "ISSUE-%04d" % (n + 1)


def verify(rel, args, meta, do_assist=False):
    path = os.path.join(ROOT, rel)
    with open(path, encoding="utf-8") as f:
        src = extract_source(rel, f.read())
    if not src:
        print("  skip %s: no source" % rel)
        return False
    tp = os.path.join(ROOT, tracker_path(rel))
    issues = parse_tracker(open(tp, encoding="utf-8").read()) if os.path.exists(tp) else []
    open_issues = [i for i in issues if i["status"] == "Open"]
    closed = [i for i in issues if i["status"] != "Open"]

    def brief(i, with_rebuttal):
        d = {"id": i["id"], "category": i["fields"].get("Category", ""), "title": i["title"],
             "location": i["fields"].get("Location", ""), "detail": i["fields"].get("Detail", "")}
        if with_rebuttal:
            d["opus_rebuttal"] = i["rebuttal"][len(REBUTTAL):].strip() if i["rebuttal"] else ""
        return d

    user = "\n".join([
        "Page: %s" % rel, "",
        "## Cited labels", label_table(src), "",
        "## Previously reported OPEN issues (re-evaluate each)",
        json.dumps([brief(i, True) for i in open_issues], ensure_ascii=False, indent=1), "",
        "## Closed issues (do not re-report)",
        json.dumps([{"id": i["id"], "status": i["status"], "title": i["title"]} for i in closed], ensure_ascii=False, indent=1), "",
        "## Page source", "----- SOURCE START -----", src, "----- SOURCE END -----"])

    if do_assist:
        assist(rel, src, args, meta)
    if args.dry_run:
        print("  would verify %s (%d chars, %d open, %d closed) -> %s" % (rel, len(src), len(open_issues), len(closed), tracker_path(rel)))
        return False
    if args.mock_response:
        raw = open(args.mock_response, encoding="utf-8").read()
    else:
        raw = deepseek_api.chat(SYSTEM_PROMPT, user, model=args.model, json_mode=True)
    try:
        res = json.loads(raw)
    except ValueError:
        print("  %s: DeepSeek returned invalid JSON; tracker left unchanged" % rel)
        return False

    stamp = "%s (%s)" % (meta["date"], meta["commit"])
    by_id = {i["id"]: i for i in issues}
    for e in res.get("existing", []) or []:
        it = by_id.get(str(e.get("id")))
        if not it or it["status"] != "Open":
            continue
        st = e.get("status", "Open")
        if st not in STATUSES:
            st = "Open"
        if st == "Ignored: Valid Rebuttal" and not it["rebuttal"]:
            st = "Open"  # only a written rebuttal can close an issue this way
        note = (e.get("note") or "").strip()
        if st != "Open" or note:
            hist = it["fields"].get("History", "")
            it["fields"]["History"] = (hist + "\n" if hist else "") + "%s: %s%s" % (stamp, st, (" — " + note) if note else "")
        it["status"] = st
    for n in res.get("new_issues", []) or []:
        cat = n.get("category") if n.get("category") in CATEGORIES else "Logical gap"
        it = {"id": next_id(issues), "status": "Open", "title": (n.get("title") or "issue").strip().replace("\n", " "),
              "fields": {"Category": cat, "Location": (n.get("location") or "").strip(),
                         "Detail": (n.get("detail") or "").strip(),
                         "Proposed fix": (n.get("proposed_fix") or "").strip(), "Reported": stamp}, "rebuttal": ""}
        issues.append(it)
    os.makedirs(os.path.dirname(tp), exist_ok=True)
    with open(tp, "w", encoding="utf-8") as f:
        f.write(render_tracker(rel, issues, meta, res.get("summary") or ""))
    print("  %s: %d open, %d new -> %s" % (rel, sum(1 for i in issues if i["status"] == "Open"),
                                            len(res.get("new_issues", []) or []), tracker_path(rel)))
    return True


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument("--git-range", help="BEFORE..AFTER commit range (push event)")
    g.add_argument("--files", nargs="+", help="explicit target files (repository-relative)")
    g.add_argument("--all", action="store_true", help="every page and src file (full audit; use with --shard)")
    ap.add_argument("--max-files", type=int, default=15, help="cap per run to bound API cost (default 15)")
    ap.add_argument("--model", default=deepseek_api.DEFAULT_MODEL)
    ap.add_argument("--shard", default="1/1", help="K/N: take every N-th target starting at K (parallel jobs)")
    ap.add_argument("--workers", type=int, default=1, help="parallel API requests in this process")
    ap.add_argument("--skip-verified", action="store_true", help="skip targets that already have a tracker (resume)")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--mock-response", help="read the DeepSeek JSON answer from this file (testing)")
    ap.add_argument("--assist", action="store_true",
                    help="also write verifications/<path>_assist.md (step claims, alternative proofs/definitions)")
    ap.add_argument("--mock-assist", help="read the assist JSON answer from this file (testing)")
    args = ap.parse_args()

    if args.git_range:
        targets = targets_from_range(args.git_range)
    elif args.all:
        files = git("ls-files").stdout.split()
        targets = [(f, "full audit") for f in sorted(files) if PAGE_RE.match(f) or SRC_RE.match(f)]
    else:
        targets = [(f, "requested") for f in args.files]
    k, _, n = args.shard.partition("/")
    k, n = int(k), int(n or 1)
    targets = targets[k - 1::n]
    if args.skip_verified:
        targets = [t for t in targets if not os.path.exists(os.path.join(ROOT, tracker_path(t[0])))]
    if not targets:
        print("verify: nothing to check")
        return
    if len(targets) > args.max_files:
        print("verify: %d targets, checking the first %d (rest skipped: %s)" % (
            len(targets), args.max_files, ", ".join(t for t, _ in targets[args.max_files:])))
        targets = targets[:args.max_files]
    if not (args.dry_run or args.mock_response) and not os.environ.get("DEEPSEEK_API_KEY"):
        print("verify: DEEPSEEK_API_KEY is not set; skipping (set the repository secret to enable)")
        return
    sha = os.environ.get("GITHUB_SHA") or git("rev-parse", "HEAD").stdout.strip()
    meta = {"date": datetime.date.today().isoformat(), "commit": sha[:7], "model": args.model}
    failures = []
    lock = threading.Lock()

    def one(t):
        rel, why = t
        print("verify %s (%s)" % (rel, why), flush=True)
        try:
            # a tracker-only change (new rebuttal) does not need new suggestions
            verify(rel, args, meta, args.assist and why != "tracker changed")
        except (deepseek_api.DeepSeekError, OSError) as e:
            with lock:
                failures.append(rel)
            print("  error %s: %s" % (rel, e), flush=True)

    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as ex:
        list(ex.map(one, targets))
    if failures:
        print("verify: %d failure(s): %s" % (len(failures), " ".join(failures)))
        sys.exit(1)


if __name__ == "__main__":
    main()
