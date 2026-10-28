# Verification tracker: `02-algebra/01-linear-algebra/03-eigen/01-eigenvalues.html`

<!-- source: 02-algebra/01-linear-algebra/03-eigen/01-eigenvalues.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: Cayley–Hamilton over commutative rings, the minimal polynomial, kernel decomposition, diagonalizability criteria, triangularization and the nilpotent-trace proposition are all sound, and the hypcheck examples are genuine. The only genuine issue is in the 'high viewpoint' remark, where eigenvalues are identified with the support of the k[t]-module V on Spec k[t]; strictly the support also contains the generic point, so eigenvalues correspond only to the closed points in the support.

## Issues

### ISSUE-0001 [Open] Eigenvalues are not the support of V over Spec k[t]
- **Category:** Supplement/remark error
- **Location:** lin:sec-ev-viewpoint (remark 行列は k[t] 加群)
- **Detail:** The remark says the roots of χ_X (eigenvalues) are the support of the k[t]-module V on Spec k[t]. The support of a module is the set of primes with nonzero localization; for V = k[t]/(t-λ) the support is the closed point (t-λ), so eigenvalues correspond to points in the support, but the support also contains the generic point (0) whenever V≠0 (since V⊗k(t)≠0). So 'support = eigenvalues' is imprecise/false as stated.
- **Proposed fix:** The eigenvalues correspond to the closed points (maximal ideals (t-λ)) in the support of V; the support is the set of primes containing the annihilator (the minimal polynomial), so it also contains the generic point (0).
- **Reported:** 2026-10-28 (8ccef3d)
