# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/05-quadratic-cyclotomic.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/05-quadratic-cyclotomic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 2

## Summary of the last run

The proofs (Gauss sum, restriction of Frobenius, quadratic reciprocity, second supplementary law, two-squares example) are logically sound and the citations match the label table. The only genuine remaining problem is the previously reported supplement sentence claiming that splitting in quadratic fields is decided by the Legendre symbol alone, which ignores the ramified case p|d and the case p=2; it should be qualified. The two dangling-label issues are resolved by the corrected label table.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Reference to nonexistent label nt:euler-criterion.4
- **Category:** Improper link
- **Location:** nt:gauss-sum proof, Steps 3 and 4
- **Detail:** The proof cites \ref{nt:euler-criterion.4} twice (Step 3: "平方剰余と非剰余は同数（\ref{nt:euler-criterion.4}）"; Step 4: "平方の群、\ref{nt:euler-criterion.4}"). The label table lists only nt:euler-criterion.2 (proposition 5.2, Euler's criterion). Proposition nt:euler-criterion has four items, but the cited label nt:euler-criterion.4 is not in the table of cited labels, so the link is mechanically wrong / dangling. The intended content (squares and non-squares are equinumerous; the squares form the unique index-two subgroup) is item 4 of nt:euler-criterion.
- **Proposed fix:** Replace both occurrences of \ref{nt:euler-criterion.4} with \ref{nt:euler-criterion} (item 4), i.e. cite the proposition nt:euler-criterion whose item 4 states that the squares form the unique index-two subgroup of $\mathbb{F}_{p}^{\times}$.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now quotes nt:euler-criterion.4 as the unique index-two subgroup of squares, which is exactly what Steps 3 and 4 use.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). nt:euler-criterion.4 is: the squares in $\mathbb{F}_{p}^{\times}$ form the unique subgroup of index 2.

### ISSUE-0002 [Ignored: Valid Rebuttal] Reference to nonexistent label nt:euler-criterion.3
- **Category:** Improper link
- **Location:** nt:quadratic-reciprocity proof, Step 4
- **Detail:** Step 4 cites \ref[3]{nt:euler-criterion.3}, but the label table contains only nt:euler-criterion.2 (proposition 5.2). The label nt:euler-criterion.3 is not listed, so the citation is dangling. The multiplicativity of the Legendre symbol used here is item 2 of nt:euler-criterion, and the first supplementary law is item 3.
- **Proposed fix:** Replace \ref[3]{nt:euler-criterion.3} with \ref{nt:euler-criterion} (items 2 and 3), citing the proposition nt:euler-criterion for multiplicativity and the first supplementary law.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now quotes nt:euler-criterion.3 as the first supplementary law, which is what Step 4 uses.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). nt:euler-criterion.3 is the first supplementary law $(\frac{-1}{p})=(-1)^{(p-1)/2}$.

### ISSUE-0003 [Open] Overstated claim that splitting in quadratic fields is decided by the Legendre symbol alone
- **Category:** Supplement/remark error
- **Location:** supplement, 計算の観点
- **Detail:** The supplement says "2 次体での素数の分解（\ref{nt:quadratic-splitting}）はこれだけで決まる" (splitting of primes in quadratic fields is determined by this alone). But nt:quadratic-splitting also requires the case $p=2$ (governed by $d\bmod 8$, not by a Legendre symbol) and the ramified case $p\mid d$. The Legendre-symbol computation alone does not cover $p=2$ or ramification, so the statement is imprecise/overstated.
- **Proposed fix:** For odd primes $p\nmid d$ the splitting in $\mathbb{Q}(\sqrt{d})$ is determined by the Legendre symbol $(\tfrac{d}{p})$; the ramified primes are those dividing $d$, and $p=2$ is decided separately by $d\bmod 8$.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says splitting in quadratic fields 'is determined by this alone', but nt:quadratic-splitting also needs the ramified case p|d and the case p=2 (d mod 8), which the Legendre-symbol computation does not cover.
