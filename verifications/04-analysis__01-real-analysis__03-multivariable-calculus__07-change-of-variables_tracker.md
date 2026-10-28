# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/07-change-of-variables.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/07-change-of-variables.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Area formula stated without injectivity needs more hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement claims that when $\Phi$ is not injective, $\int_{E}(f\circ\Phi)|\det D\Phi|=\int f(y)\,\#\Phi^{-1}(y)\,dy$ holds. As stated this is false/imprecise: the area formula requires $\Phi$ to be at least locally Lipschitz (or $C^{1}$) and, crucially, the counting must be over the inverse image within $E$ (i.e. $\#(\Phi^{-1}(y)\cap E)$), and $f\ge0$ (or integrability). Without restricting the count to $E$ and without $f\ge0$, the identity fails. Also the left side must be over $E$ while the right counts preimages in $E$ only.
- **Proposed fix:** If $\Phi$ is not injective, then for $f\ge0$ (or $f$ integrable) $$\int_{E}(f\circ\Phi)|\det D\Phi|=\int_{\Phi(E)}f(y)\,\#(\Phi^{-1}(y)\cap E)\,dy,$$ where the count is over preimages lying in $E$ (the area formula).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that change of variables extends to non-Jordan-measurable open sets as improper integral
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The statement '変数変換公式は、$E$ をジョルダン可測でない開集合に広げても、広義積分として成り立つ' is imprecise: for an improper (Riemann) integral over a general open set one needs the function to be absolutely integrable / the improper integral to converge, and $\Phi$ to be a $C^{1}$ diffeomorphism onto its image with the Jacobian nonvanishing. As written it asserts the identity unconditionally for any open $E$, which is false (e.g. conditionally convergent improper integrals can fail to transform correctly).
- **Proposed fix:** The formula extends to open (not necessarily Jordan measurable) $E$ provided the improper integral $\int_{E}(f\circ\Phi)|\det D\Phi|$ converges absolutely (or in the Lebesgue sense), with $\Phi$ a $C^{1}$ diffeomorphism and $\det D\Phi\neq0$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Orientation remark on one-variable substitution
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The remark says the one-variable substitution has no absolute value because $\int_{a}^{b}=-\int_{b}^{a}$ uses oriented integration. This is essentially correct but slightly overstated: the standard one-variable formula $\int_{\varphi(a)}^{\varphi(b)}f=\int_{a}^{b}f(\varphi(t))\varphi'(t)\,dt$ requires $\varphi$ monotone $C^{1}$; if $\varphi$ is not monotone the formula with $\varphi'$ (no absolute value) fails, and the correct unoriented version uses $|\varphi'|$. The remark does not mention the monotonicity requirement, which is the actual reason the absolute value is absent.
- **Proposed fix:** In one variable the substitution $\int_{\varphi(a)}^{\varphi(b)}f=\int_{a}^{b}f(\varphi(t))\varphi'(t)\,dt$ holds for monotone $C^{1}$ $\varphi$; the absence of $|\varphi'|$ reflects oriented integration ($\int_{a}^{b}=-\int_{b}^{a}$), and the oriented multivariable analogue is the integral of differential forms.
- **Reported:** 2026-10-28 (10fede1)
