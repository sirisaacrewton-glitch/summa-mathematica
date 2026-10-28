# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/07-change-of-variables.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/07-change-of-variables.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Area formula stated without injectivity needs Lipschitz/C^1 and countability caveats
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement claims that when $\Phi$ is not injective, $\int_E (f\circ\Phi)|\det D\Phi| = \int f(y)\,\#\Phi^{-1}(y)\,dy$ holds. As stated this is imprecise: the counting formula requires $\Phi$ to be at least $C^{1}$ (or Lipschitz) on a suitable domain and $f\ge0$ (or integrability), and the equality is between Lebesgue integrals; moreover $\#\Phi^{-1}(y)$ must be the (essential) cardinality of the preimage, and the formula can fail for merely continuous or non-Lipschitz maps. The statement as written omits these hypotheses and asserts equality unconditionally.
- **Proposed fix:** For a $C^{1}$ (or Lipschitz) map $\Phi\colon U\to\mathbb{R}^{n}$ and a nonnegative (or integrable) $f$, the area formula reads $$\int_{U}(f\circ\Phi)|\det D\Phi|=\int_{\mathbb{R}^{n}}f(y)\,\#\Phi^{-1}(y)\,dy,$$ where $\#\Phi^{-1}(y)$ is the number of preimages (counted with multiplicity, $+\infty$ allowed); the equality is in the Lebesgue sense.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that change of variables extends to non-Jordan-measurable open sets as improper integral
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says the formula extends to $E$ a non-Jordan-measurable open set 'as an improper integral (or Lebesgue integral)'. For the improper Riemann version this requires $E$ to be exhausted by Jordan measurable compact sets and the integrals to converge absolutely; without such convergence hypotheses the improper integral need not exist, so the blanket claim is overstated.
- **Proposed fix:** If $E$ is open and $\Phi$ is a $C^{1}$ diffeomorphism onto $\Phi(E)$, the formula holds as an improper integral provided the integrals converge absolutely (e.g. $\int_E |(f\circ\Phi)|\det D\Phi||<\infty$); equivalently it holds for Lebesgue integrable functions.
- **Reported:** 2026-10-28 (8ccef3d)
