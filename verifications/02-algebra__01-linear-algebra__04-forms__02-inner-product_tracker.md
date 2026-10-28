# Verification tracker: `02-algebra/01-linear-algebra/04-forms/02-inner-product.html`

<!-- source: 02-algebra/01-linear-algebra/04-forms/02-inner-product.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (Gram–Schmidt/QR, orthogonal projection, adjoint, Schur, spectral theorem, SVD, Hadamard, Courant–Fischer) is logically sound and the cited results are used consistently. The only genuine problems are in the closing remark: the identification of V with the dual is stated with the wrong linearity/direction, and the Gelfand–Naimark attribution conflates the commutative Gelfand–Naimark theorem with the general one. Both are side-comment imprecisions of medium severity.

## Issues

### ISSUE-0001 [Open] Incorrect identification V ≅ conjugate dual
- **Category:** Supplement/remark error
- **Location:** lin:sec-ip-viewpoint / remark
- **Detail:** The remark says the inner product gives an identification $V\cong\bar{V}^{*}$ via $v\mapsto\langle v,-\rangle$. But $\langle v,-\rangle$ is conjugate-linear in the second variable, so $v\mapsto\langle v,-\rangle$ is a conjugate-linear map $V\to V^{*}$, not an isomorphism onto $\bar{V}^{*}$ in the stated sense; more importantly the map $v\mapsto\langle v,-\rangle$ is conjugate-linear, so it is not a linear isomorphism $V\cong\bar{V}^{*}$ as written. The correct statement is that $v\mapsto\langle -,v\rangle$ (or $v\mapsto\langle v,-\rangle$) is a conjugate-linear isomorphism $V\to V^{*}$, i.e. a linear isomorphism $V\cong\bar{V}^{*}$ where $\bar{V}^{*}$ denotes the conjugate space; the direction/linearity is muddled.
- **Proposed fix:** The inner product gives a conjugate-linear isomorphism $V\to V^{*}$, $v\mapsto\langle v,-\rangle$ (equivalently a linear isomorphism $V\cong\bar{V}^{*}$ onto the conjugate dual space), and under this identification the adjoint corresponds to the transpose (conjugate transpose) of the operator.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Gelfand–Naimark attribution imprecise
- **Category:** Supplement/remark error
- **Location:** lin:sec-ip-viewpoint / remark
- **Detail:** The remark calls the finite-dimensional spectral theorem the finite-dimensional version of the Gelfand–Naimark theorem, described as 'commutative C*-algebras are continuous function algebras on a compact space'. That statement is the commutative Gelfand–Naimark (Gelfand) theorem; the Gelfand–Naimark theorem proper concerns the representation of arbitrary C*-algebras. Calling the finite-dimensional spectral theorem the finite-dimensional Gelfand–Naimark theorem is acceptable, but the parenthetical description conflates the two named theorems.
- **Proposed fix:** …is the finite-dimensional case of the commutative Gelfand–Naimark (Gelfand) theorem, which states that every commutative C*-algebra is isomorphic to the algebra of continuous functions on a compact space.
- **Reported:** 2026-10-28 (8ccef3d)
