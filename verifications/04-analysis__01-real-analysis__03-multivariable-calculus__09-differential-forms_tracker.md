# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/09-differential-forms.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/09-differential-forms.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definitions via minors, the wedge product, exterior derivative, pullback, Poincaré lemma and Stokes' theorem for chains are all proved with appropriate citations, and the hypchecks are accurate. The only genuine concern is the remark on parametrization invariance of the integral over a cube, whose hypothesis (injective C^1 map with p(I^k)=I^k and det Dp>0) is weaker than what the change-of-variables theorem requires; it should require p to be a C^1 diffeomorphism of a neighborhood of I^k. Everything else checked (the example computing ∂ι_2, the closed-but-not-exact example, the supplement on de Rham cohomology and the adjunction between d and ∂) is correct as stated.

## Issues

### ISSUE-0001 [Open] Pullback invariance remark omits the requirement that p maps the boundary compatibly / is a bijection onto I^k
- **Category:** Supplement/remark error
- **Location:** remark (after calc:chain-integral)
- **Detail:** The remark claims that if p: I^k -> I^k is a C^1 injective map defined on a neighborhood of I^k with det Dp > 0 and p(I^k) = I^k, then ∫_{c∘p} ω = ∫_c ω. The change-of-variables formula requires p to be a C^1 diffeomorphism between open sets (or at least a bijection with the appropriate Jacobian condition on the whole domain). Injectivity plus p(I^k)=I^k does not guarantee that p maps the interior onto the interior or that the boundary is mapped to the boundary in an orientation-preserving way; a C^1 injective map on a neighborhood with p(I^k)=I^k can still fail to be a diffeomorphism onto its image on the relevant open set (e.g. the derivative may degenerate on the boundary, or the image of the interior need not be the interior). The conclusion ∫_{c∘p}ω = ∫_c ω requires p to be a C^1 diffeomorphism of a neighborhood of I^k onto a neighborhood of I^k with det Dp > 0 (or the standard formulation of the change-of-variables theorem with p a diffeomorphism). As stated the hypothesis is insufficient.
- **Proposed fix:** Replace the hypothesis by: 'p is a C^1 diffeomorphism of a neighborhood of I^k onto a neighborhood of I^k with det Dp > 0 and p(I^k) = I^k'. Then the change-of-variables formula applies on the open set and gives ∫_{c∘p}ω = ∫_c ω; if det Dp < 0 the sign is reversed.
- **Reported:** 2026-10-28 (8ccef3d)
