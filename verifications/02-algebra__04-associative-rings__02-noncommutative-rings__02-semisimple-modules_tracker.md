# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/02-semisimple-modules.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/02-semisimple-modules.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound overall: the proofs of Schur's lemma, the complement lemma, the equivalence of semisimplicity conditions, and the multiplicity theorem are correct, and the cited labels match their uses. The only genuine issue is a slightly imprecise justification in the supplement for the finiteness of the decomposition of a semisimple ring into simple left ideals; the conclusion is true but the stated reason needs the finite-support argument made explicit.

## Issues

### ISSUE-0001 [Open] Semisimple ring as finite direct sum of simple left ideals
- **Category:** Supplement/remark error
- **Location:** supplement / 次のページへ
- **Detail:** The supplement claims that a semisimple ring $R$ is a direct sum of finitely many simple left ideals, justified by '$1$ が有限個の成分にしか分かれないので'. This is imprecise: the decomposition of $R$ as a sum of simple left ideals may a priori involve infinitely many summands, and the argument that only finitely many are needed requires that $1$ lies in a finite subsum (since $1$ is a finite sum of elements from the summands). The statement is true, but the stated reason is not a valid argument as written; the finite-support argument must be made explicit.
- **Proposed fix:** Since $R$ is semisimple, $R=\sum_{i\in I}L_{i}$ with each $L_{i}$ simple. As $1\in R$, we have $1\in L_{i_{1}}+\dots+L_{i_{k}}$ for finitely many indices, hence $R=R\cdot 1\subset L_{i_{1}}+\dots+L_{i_{k}}$, so $R$ is a finite direct sum of simple left ideals.
- **Reported:** 2026-10-28 (8ccef3d)
