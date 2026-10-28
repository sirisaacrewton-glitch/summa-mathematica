#!/usr/bin/env python3
"""Print a benchmark run next to the ground truth, for scoring by hand.

    python3 scripts/bench/show.py verifications/bench/deepseek-chat-run12
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    run = sys.argv[1]
    bench = json.load(open(os.path.join(HERE, "benchmark.json"), encoding="utf-8"))
    n_cand = n_kept = 0
    for p in bench["pages"]:
        f = os.path.join(run, p["page"].replace("/", "__").replace(".html", ".json"))
        print("=" * 100)
        print(p["page"])
        for t in p["true"]:
            print("  [TRUE ] " + t)
        for t in p["false"]:
            print("  [FALSE] " + t)
        if not os.path.exists(f):
            print("  (no result)")
            continue
        r = json.load(open(f, encoding="utf-8"))
        for c in r["candidates"]:
            v = c.get("second_opinion", {}).get("verdict", "?")
            n_cand += 1
            n_kept += v == "valid"
            print("  -> %-7s %s | %s" % (v, c.get("location", ""), c.get("title", "")))
            print("             quote: %s" % (c.get("quote") or "")[:160])
            print("             problem: %s" % (c.get("problem") or "")[:400].replace("\n", " "))
            print("             2nd: %s" % c.get("second_opinion", {}).get("reason", "")[:300].replace("\n", " "))
    print("=" * 100)
    print("candidates %d, confirmed %d" % (n_cand, n_kept))


if __name__ == "__main__":
    main()
