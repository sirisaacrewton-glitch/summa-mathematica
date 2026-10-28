# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/07-sturm.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/07-sturm.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the transfer theorem, and the problems are logically sound; the Sturm–Sylvester proof correctly handles gcd removal, intermediate zeros, and the sign change at roots. The only genuine problems are in the supplement: the complex-root counting remark ignores multiplicity (false for non-squarefree polynomials), and the Ben-Or–Kozen–Reif attribution for the tensor-product sign-condition method is imprecise. No issues in the proofs or cited theorems were found.

## Issues

### ISSUE-0001 [Open] Complex roots count via algebraic closure is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 複素根
- **Detail:** The supplement says: the number of roots in the algebraic closure $R(\sqrt{-1})$ (counted with multiplicity, $\deg P$) minus the number of real roots gives the number of non-real roots. But the real root count from Sturm's theorem is without multiplicity, while $\deg P$ counts with multiplicity. So the subtraction is only correct when $P$ is squarefree; otherwise the count of non-real roots (with multiplicity) is not obtained. The statement as written is false for non-squarefree $P$.
- **Proposed fix:** Restrict to squarefree $P$ (or replace $\deg P$ by the degree of the squarefree part $P/\gcd(P,P')$): for squarefree $P$, the number of non-real roots equals $\deg P - (\text{number of real roots})$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Ben-Or–Kozen–Reif attribution for sign-condition counting
- **Category:** Supplement/remark error
- **Location:** supplement / 符号の組の個数を一度に求める
- **Detail:** The supplement attributes to Ben-Or–Kozen–Reif a method of solving a $3\times3$ tensor-product Tarski-query matrix to get counts for all $3^{l}$ sign conditions. BKR is about deciding the theory of real closed fields / root counting complexity, not specifically this tensor-product inversion. The claim is an imprecise/misattributed side remark.
- **Proposed fix:** Either drop the attribution or state it more carefully: 'the counts for all sign conditions can be recovered by inverting the Tarski-query matrix (a $3\times3$ tensor product); this is related to, but not identical with, the Ben-Or–Kozen–Reif decision procedure.'
- **Reported:** 2026-10-28 (8ccef3d)
