# Verification tracker: `02-algebra/01-linear-algebra/05-multilinear/04-exercises.html`

<!-- source: 02-algebra/01-linear-algebra/05-multilinear/04-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

I checked all problems and solutions. The Kronecker product computations (trace 0, det 1), the Z/m⊗Z/n ≅ Z/gcd argument, the indecomposable tensor and 2-form examples, the exterior power determinant example (Λ²A matrix and det 49), the parallelogram area √29, tetrahedron volume 13/6, Hilbert determinant 1/2160, and Hadamard's inequality proof all appear correct. The only borderline point is the parenthetical remark in lin:ex-ma-3 about the Gram determinant being the squared volume, which is accurate. No genuine logical, hypothesis, link, or factual errors were found; no new issues are reported.

## Issues

### ISSUE-0001 [Open] Gram determinant sign/independence argument mislabeled
- **Category:** Logical gap
- **Location:** lin:ex-ma-3 / solution
- **Detail:** The solution says the Gram determinant is 1/2160 > 0, hence 1,x,x^2 are linearly independent, adding that the Gram determinant is the square of the volume. This is fine, but the parenthetical 'グラム行列式は張る平行体の体積の 2 乗' is correct only for the determinant of the Gram matrix of the given vectors; here it is consistent. No error. (No issue.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
