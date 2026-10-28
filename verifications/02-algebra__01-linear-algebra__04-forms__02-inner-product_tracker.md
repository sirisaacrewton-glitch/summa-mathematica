# Verification tracker: `02-algebra/01-linear-algebra/04-forms/02-inner-product.html`

<!-- source: 02-algebra/01-linear-algebra/04-forms/02-inner-product.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. Proofs of Cauchy–Schwarz, Gram–Schmidt/QR, orthogonal projection, adjoint existence, Schur, spectral theorem, SVD, polar decomposition, Hadamard and Courant–Fischer are sound, and the hypcheck comments are accurate (non-normal example, real rotation not diagonalizable over R, Minkowski lightlike vector, infinite-dimensional caveat). The only genuine issue found is in the closing remark: the finite-dimensional commutative structure theorem for $\mathbb{C}[X,X^{*}]$ is attributed to 'Gelfand–Naimark' with a parenthetical that describes the commutative Gelfand–Naimark (Gelfand duality) theorem, conflating it with the noncommutative GNS theorem; the attribution should be corrected to Gelfand duality / commutative Gelfand–Naimark. All other supplements (simultaneous diagonalization of commuting normal family, spectral measure for bounded normal operators, Eckart–Young, Weyl/interlacing from min-max, numerical stability of Gram–Schmidt vs Householder/Givens, Golub–Kahan) are stated correctly and with appropriate hypotheses.

## Issues

### ISSUE-0001 [Open] Gelfand–Naimark misattribution for finite-dimensional commutative C*-algebra
- **Category:** Supplement/remark error
- **Location:** remark 正規作用素は「対角」の不変な書き方 (lin:sec-ip-viewpoint)
- **Detail:** The remark says the spectral theorem shows that the commutative $*$-subalgebra $\mathbb{C}[X,X^{*}]$ is isomorphic to $\mathbb{C}^{r}$, i.e. a function algebra on a finite set (the spectrum), and calls this 'the finite-dimensional version of the Gelfand–Naimark theorem (commutative C* algebras are continuous function algebras on a compact space)'. The correct attribution is the **Gelfand–Naimark theorem** for commutative C*-algebras is usually called the **Gelfand–Naimark theorem** only in the commutative case via Gelfand duality; more importantly the finite-dimensional statement that a commutative finite-dimensional C*-algebra is $\cong\mathbb{C}^{r}$ is the elementary structure theorem, and the cited 'Gelfand–Naimark' is normally the *noncommutative* GNS representation theorem. Calling the finite-dimensional commutative result 'the finite-dimensional version of Gelfand–Naimark' is imprecise: the finite-dimensional commutative statement is Gelfand duality / the Gelfand–Naimark *commutative* theorem, and the parenthetical description ('commutative C* algebras are continuous function algebras on a compact space') is the Gelfand–Naimark theorem only in its commutative form (Gelfand–Naimark). The claim as stated conflates the two and is at best misleading.
- **Proposed fix:** Replace with: 'This is the finite-dimensional case of Gelfand duality (the commutative Gelfand–Naimark theorem): a commutative C*-algebra is isomorphic to the algebra of continuous functions on its compact spectrum; here the spectrum is the finite set of eigenvalues.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hadamard inequality stated only for square matrices but proof uses QR of invertible matrix — fine, but the equality case is omitted; more importantly the claim 'if X not invertible trivial' is correct. No error. (checked, no report)
- **Category:** Supplement/remark error
- **Location:** corollary lin:hadamard-minmax Step 1
- **Detail:** placeholder
- **Proposed fix:** placeholder
- **Reported:** 2026-10-28 (10fede1)
