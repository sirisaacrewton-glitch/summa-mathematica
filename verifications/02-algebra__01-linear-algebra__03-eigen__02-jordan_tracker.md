# Verification tracker: `02-algebra/01-linear-algebra/03-eigen/02-jordan.html`

<!-- source: 02-algebra/01-linear-algebra/03-eigen/02-jordan.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Generalized Jordan block description is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を弱めると
- **Detail:** The supplement says that for each power $q^{e}$ of an irreducible polynomial one obtains a 'generalized Jordan cell' by arranging $C(q)$ on the diagonal and putting $1$ below. This is imprecise: the elementary divisor $q^{e}$ corresponds to the companion matrix $C(q^{e})$ of the single polynomial $q^{e}$ (a single block of size $e\deg q$), not to a chain of $e$ copies of $C(q)$ joined by subdiagonal $1$'s. The latter description (a 'Jordan block over $q$') is a different, non-canonical presentation and does not match the elementary divisor $q^{e}$.
- **Proposed fix:** For each irreducible $q$ and exponent $e$, the elementary divisor $q^{e}$ corresponds to the companion block $C(q^{e})$ (of size $e\deg q$); the rational canonical form is the direct sum of these $C(q^{e})$ over all elementary divisors.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Schur decomposition requires inner product / real or complex field
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement states that instead of the Jordan form one uses the Schur decomposition (unitary triangularization, citing \ref{lin:page-inner-product}). The Schur decomposition requires an inner product space over $\mathbb{R}$ or $\mathbb{C}$ (and the field to be complete/closed enough for eigenvalues); it is not available over an arbitrary field, whereas the surrounding discussion is about arbitrary fields. The claim as stated is overstated.
- **Proposed fix:** Over $\mathbb{R}$ or $\mathbb{C}$ (with the standard inner product), numerical practice replaces the Jordan form by the Schur decomposition (unitary triangularization); over a general field this is not available.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Jordan–Chevalley over perfect fields: 'S diagonalizable over algebraic closure' needs care
- **Category:** Supplement/remark error
- **Location:** hypcheck / 完全体
- **Detail:** The hypcheck claims that over a perfect field the Jordan–Chevalley decomposition holds in the form 'S is diagonalizable over the algebraic closure' even when $\chi_{X}$ does not split. This is correct for the additive (multiplicative) Jordan–Chevalley decomposition of an endomorphism of a finite-dimensional vector space over a perfect field, but the statement as phrased ('$S$ diagonalizable over the algebraic closure') is the semisimple part; this is fine. However the accompanying claim 'over a non-perfect field there are counterexamples' is stated without any example or reference, and the precise statement (that $S,N$ are polynomials in $X$ with coefficients in $k$) is not addressed. The claim is essentially correct but the 'counterexample over non-perfect field' is asserted without justification.
- **Proposed fix:** Over a perfect field $k$, every endomorphism $X$ has a unique decomposition $X=S+N$ with $S$ semisimple (diagonalizable over $\overline{k}$), $N$ nilpotent, $SN=NS$, and $S,N$ polynomials in $X$ with coefficients in $k$. Over a non-perfect field this can fail; e.g. for $k=\mathbb{F}_{p}(u)$ and $X$ the multiplication-by-$t$ map on $k[t]/(t^{p}-u)$, the semisimple and nilpotent parts do not exist over $k$.
- **Reported:** 2026-10-28 (10fede1)
