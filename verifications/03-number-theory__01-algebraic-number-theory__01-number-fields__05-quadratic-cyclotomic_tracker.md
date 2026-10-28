# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/05-quadratic-cyclotomic.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/05-quadratic-cyclotomic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are logically sound: the Gauss sum computation, the restriction-of-Frobenius argument, the reciprocity proof, the second supplementary law, and the two-squares example all check out, and the cited theorems are used with their hypotheses satisfied. The genuine problems are two dangling citations (nt:euler-criterion.4 and nt:euler-criterion.3, neither of which appears in the label table; the intended target is nt:euler-criterion) and one overstated sentence in the supplement claiming that the Legendre symbol alone decides splitting in quadratic fields, which ignores the cases p=2 and ramified primes.

## Issues

### ISSUE-0001 [Open] Reference to nonexistent label nt:euler-criterion.4
- **Category:** Improper link
- **Location:** nt:gauss-sum proof, Steps 3 and 4
- **Detail:** The proof cites \ref{nt:euler-criterion.4} twice (Step 3: "平方剰余と非剰余は同数（\ref{nt:euler-criterion.4}）"; Step 4: "平方の群、\ref{nt:euler-criterion.4}"). The label table lists only nt:euler-criterion.2 (proposition 5.2, Euler's criterion). Proposition nt:euler-criterion has four items, but the cited label nt:euler-criterion.4 is not in the table of cited labels, so the link is mechanically wrong / dangling. The intended content (squares and non-squares are equinumerous; the squares form the unique index-two subgroup) is item 4 of nt:euler-criterion.
- **Proposed fix:** Replace both occurrences of \ref{nt:euler-criterion.4} with \ref{nt:euler-criterion} (item 4), i.e. cite the proposition nt:euler-criterion whose item 4 states that the squares form the unique index-two subgroup of $\mathbb{F}_{p}^{\times}$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Reference to nonexistent label nt:euler-criterion.3
- **Category:** Improper link
- **Location:** nt:quadratic-reciprocity proof, Step 4
- **Detail:** Step 4 cites \ref[3]{nt:euler-criterion.3}, but the label table contains only nt:euler-criterion.2 (proposition 5.2). The label nt:euler-criterion.3 is not listed, so the citation is dangling. The multiplicativity of the Legendre symbol used here is item 2 of nt:euler-criterion, and the first supplementary law is item 3.
- **Proposed fix:** Replace \ref[3]{nt:euler-criterion.3} with \ref{nt:euler-criterion} (items 2 and 3), citing the proposition nt:euler-criterion for multiplicativity and the first supplementary law.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Overstated claim that splitting in quadratic fields is decided by the Legendre symbol alone
- **Category:** Supplement/remark error
- **Location:** supplement, 計算の観点
- **Detail:** The supplement says "2 次体での素数の分解（\ref{nt:quadratic-splitting}）はこれだけで決まる" (splitting of primes in quadratic fields is determined by this alone). But nt:quadratic-splitting also requires the case $p=2$ (governed by $d\bmod 8$, not by a Legendre symbol) and the ramified case $p\mid d$. The Legendre-symbol computation alone does not cover $p=2$ or ramification, so the statement is imprecise/overstated.
- **Proposed fix:** For odd primes $p\nmid d$ the splitting in $\mathbb{Q}(\sqrt{d})$ is determined by the Legendre symbol $(\tfrac{d}{p})$; the ramified primes are those dividing $d$, and $p=2$ is decided separately by $d\bmod 8$.
- **Reported:** 2026-10-28 (8ccef3d)
