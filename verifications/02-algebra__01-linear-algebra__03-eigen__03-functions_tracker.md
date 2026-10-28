# Verification tracker: `02-algebra/01-linear-algebra/03-eigen/03-functions.html`

<!-- source: 02-algebra/01-linear-algebra/03-eigen/03-functions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (polynomial functional calculus, matrix exponential, Newton identities, Jacobi's formula, Gershgorin, power method) are logically sound and correctly cite the referenced results. The genuine problems are confined to side remarks and the supplement: the Gershgorin connected-component statement omits the necessary disjointness hypothesis, the BCH formula is stated without a convergence caveat, the QR-method remark overstates unconditional convergence and misattributes the O(n^3) cost, and the hypcheck's rounding-recovery comment is a heuristic presented too strongly.

## Issues

### ISSUE-0001 [Open] Gershgorin connected-component claim needs disjointness
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that the number of eigenvalues in each connected component equals the number of discs in that component. This is only true when the components are disjoint (no disc overlaps another component). As stated without the disjointness hypothesis it is false: overlapping discs can merge into one component containing more eigenvalues than the number of discs in it.
- **Proposed fix:** The Gershgorin theorem also holds for columns (transpose). Moreover, if the union of the discs splits into connected components that are pairwise disjoint, then the number of eigenvalues in each component equals the number of discs forming that component (continuity argument).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] BCH formula stated without convergence/domain caveat
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を弱めると
- **Detail:** The supplement says the Baker–Campbell–Hausdorff formula expresses Z with e^{X}e^{Y}=e^{Z} in terms of commutators. This is only valid when the series converges (e.g. for small X,Y, or in a suitable complete normed algebra with convergence). For arbitrary X,Y the BCH series may diverge and Z may not exist as a convergent series, so the statement as written is overstated.
- **Proposed fix:** In the noncommutative case, the Baker–Campbell–Hausdorff formula gives Z with e^{X}e^{Y}=e^{Z} as a series in iterated commutators of X and Y; this series converges (e.g. for sufficiently small X,Y in a complete normed algebra), though it need not converge for arbitrary X,Y.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] QR method convergence claim overstated
- **Category:** Supplement/remark error
- **Location:** remark 実用的な固有値計算
- **Detail:** The remark says the shifted QR iteration converges to Schur form yielding all eigenvalues in O(n^3). Shifted QR converges under genericity conditions (e.g. equal-modulus eigenvalues or special shift choices can prevent/preclude convergence to triangular form); the O(n^3) figure is per iteration, not the total cost. Stated as an unconditional fact it is imprecise.
- **Proposed fix:** In practice, after reducing to Hessenberg form by orthogonal transformations, the shifted QR iteration (X_k=Q_kR_k, X_{k+1}=R_kQ_k) is used to drive the matrix toward Schur (triangular) form; under genericity assumptions on the eigenvalue moduli it converges, each iteration costing O(n^3), and all eigenvalues are obtained. QR can be viewed as applying the power method simultaneously to all subspaces.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck: c_1=0 set is measure zero but recovery claim imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck / 支配的な固有値
- **Detail:** The hypcheck says the set of v with c_1=0 is a measure-zero subspace but that rounding errors usually recover convergence. This is a heuristic, not a theorem; if v is exactly orthogonal to u_1 (or nearly so), rounding may not reliably recover the dominant direction, and the statement as a factual claim is overstated.
- **Proposed fix:** The power method requires |\lambda_1|>|\lambda_2| and c_1\neq0. The set of v with c_1=0 is a proper subspace (measure zero); in floating-point arithmetic rounding errors often reintroduce a component in the dominant eigendirection, but this is heuristic and not guaranteed.
- **Reported:** 2026-10-28 (10fede1)
