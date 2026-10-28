#!/usr/bin/env python3
"""Part 2: on-demand summarize/structure of raw OCR Markdown with DeepSeek.

Run only when the user explicitly asks ("このファイルを要約して").

    python3 scripts/structure_ocr.py ../math_books/raw_ocr/foo.md ../math_books/drafts/foo.md
    python3 scripts/structure_ocr.py IN OUT --start-line 1200 --end-line 1900   # one section only

raw_ocr/ and drafts/ contain book text, so they live in the PRIVATE repository
math_books. Writing the output inside this public repository is refused unless
--allow-public is given.
"""

import argparse
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import deepseek_api  # noqa: E402

PUBLIC_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SYSTEM_PROMPT = """You are an assistant that structures mathematical textbook material for the Summa Mathematica platform.
You receive raw OCR Markdown (it may contain OCR noise, broken formulas and page artifacts).

Your tasks:
1. Identify every definition, theorem, lemma, proposition and corollary, and their proofs. Keep the original numbering of the book (chapter/section/theorem numbers) exactly as it appears.
2. Split every proof into semantic chunks (Steps). Each Step is one logically self-contained move of the argument.
3. For each Step, extract a Short Claim: one sentence stating what that Step establishes, without the justification.
4. List the conceptually required defined terms (with where they are defined, if visible) and the prerequisite knowledge (earlier results, standard facts, background theory) that the passage depends on.
5. Point out places where the book skips an argument ("clearly", "it is easy to see", left to the reader) so that they can be filled in later.
6. Repair obvious OCR errors in formulas only when the intended formula is unambiguous; otherwise mark the spot with [OCR?].

Output rules:
- The output MUST be written in English Markdown, regardless of the language of the input.
- Do not invent content that is not in the input. Do not add proofs the book does not give; only structure and summarize.
- Use this layout for each result:
  ### <Kind> <original number>: <name if any>
  **Statement (summary):** ...
  **Defined terms used:** ...
  **Prerequisites:** ...
  **Proof structure:**
  - Step 1 — Short Claim: ... (uses: ...)
  - Step 2 — Short Claim: ...
  **Gaps in the source:** ...

""" + deepseek_api.STRICT_LATEX_RULES


def read_lines(path, start, end):
    with open(path, encoding="utf-8") as f:
        lines = f.read().split("\n")
    s = max(1, start or 1)
    e = min(len(lines), end or len(lines))
    return lines[s - 1:e], s


def split_chunks(lines, max_chars):
    """Split at Markdown headings (or blank lines) into chunks of at most max_chars."""
    chunks, cur, size = [], [], 0
    for line in lines:
        boundary = re.match(r"^#{1,4} ", line) or line.strip() == ""
        if cur and size + len(line) + 1 > max_chars and boundary:
            chunks.append(cur)
            cur, size = [], 0
        if cur and size + len(line) + 1 > max_chars * 1.5:  # no boundary found: hard cut
            chunks.append(cur)
            cur, size = [], 0
        cur.append(line)
        size += len(line) + 1
    if cur:
        chunks.append(cur)
    return chunks


def inside(path, root):
    path, root = os.path.realpath(path), os.path.realpath(root)
    return path == root or path.startswith(root + os.sep)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("input", help="raw OCR markdown (raw_ocr/...)")
    ap.add_argument("output", help="output markdown (drafts/...)")
    ap.add_argument("--start-line", type=int, help="first line to process (1-based)")
    ap.add_argument("--end-line", type=int, help="last line to process (inclusive)")
    ap.add_argument("--max-chars", type=int, default=40000, help="max characters per request (default 40000)")
    ap.add_argument("--model", default=deepseek_api.DEFAULT_MODEL)
    ap.add_argument("--allow-public", action="store_true", help="allow writing inside the public repository")
    ap.add_argument("--dry-run", action="store_true", help="show the chunk plan without calling the API")
    args = ap.parse_args()

    if inside(args.output, PUBLIC_ROOT) and not args.allow_public:
        sys.exit("refused: %s is inside the public repository; write drafts to ../math_books/drafts/" % args.output)

    lines, first = read_lines(args.input, args.start_line, args.end_line)
    chunks = split_chunks(lines, args.max_chars)
    print("%s: lines %d-%d, %d chunk(s)" % (args.input, first, first + len(lines) - 1, len(chunks)), file=sys.stderr)
    if args.dry_run:
        line_no = first
        for i, c in enumerate(chunks, 1):
            print("  chunk %d: lines %d-%d (%d chars)" % (i, line_no, line_no + len(c) - 1, sum(len(x) + 1 for x in c)), file=sys.stderr)
            line_no += len(c)
        return

    parts = []
    line_no = first
    for i, c in enumerate(chunks, 1):
        rng = "lines %d-%d" % (line_no, line_no + len(c) - 1)
        print("  chunk %d/%d (%s) ..." % (i, len(chunks), rng), file=sys.stderr)
        user = ("Source file: %s (%s, chunk %d of %d).\n"
                "If a proof is cut off at the chunk boundary, structure the visible part and note that it continues.\n\n"
                "----- RAW OCR START -----\n%s\n----- RAW OCR END -----") % (
                    os.path.basename(args.input), rng, i, len(chunks), "\n".join(c))
        parts.append("<!-- chunk %d: %s -->\n\n%s" % (i, rng, deepseek_api.chat(SYSTEM_PROMPT, user, model=args.model).strip()))
        line_no += len(c)

    os.makedirs(os.path.dirname(os.path.abspath(args.output)), exist_ok=True)
    header = "<!-- generated by scripts/structure_ocr.py from %s (%s); DeepSeek %s; review before use -->\n\n" % (
        os.path.basename(args.input), "lines %d-%d" % (first, first + len(lines) - 1), args.model)
    with open(args.output, "w", encoding="utf-8") as f:
        f.write(header + "\n\n".join(parts) + "\n")
    print("wrote %s" % args.output, file=sys.stderr)


if __name__ == "__main__":
    try:
        main()
    except deepseek_api.DeepSeekError as e:
        sys.exit("error: %s" % e)
