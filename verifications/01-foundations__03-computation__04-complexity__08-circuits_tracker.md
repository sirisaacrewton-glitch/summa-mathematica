# Verification tracker: `01-foundations/03-computation/04-complexity/08-circuits.html`

<!-- source: 01-foundations/03-computation/04-complexity/08-circuits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] P/poly remark: constant circuits for undecidable language and 'converse fails' framing
- **Category:** Supplement/remark error
- **Location:** remark after comp:time-to-size
- **Detail:** The remark claims that the language $\{1^{n}: n \text{ codes a machine that halts on empty tape}\}$ is decided by a circuit family of constant circuits (0 or 1). This is correct as stated (the family may be non-uniform and non-computable), so the example itself is fine. However the sentence '逆は成り立たない' (the converse does not hold) is justified only by exhibiting a non-computable circuit family; this is acceptable. The real imprecision: the remark says '大きさの小さい回路族は、入力の長さごとに任意の情報（「助言」）を埋め込める' — this is fine. No genuine error here; the example is valid because the family is allowed to be arbitrary. Not reporting.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
