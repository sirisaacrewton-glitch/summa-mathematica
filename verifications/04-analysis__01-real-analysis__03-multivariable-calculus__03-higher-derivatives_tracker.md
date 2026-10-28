# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/03-higher-derivatives.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/03-higher-derivatives.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proofs (Schwarz, symmetry, multivariable Taylor, second derivative test) are sound and hypotheses are verified. The only borderline issue is the Morse lemma sentence in the supplement, which should explicitly require a critical point; otherwise supplements and stated facts are accurate.

## Issues

### ISSUE-0001 [Open] Morse lemma stated for C^∞ but nondegeneracy alone insufficient wording
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that if the Hessian at a critical point is nondegenerate, then f is equivalent to the quadratic form via a C^∞ change of coordinates (Morse lemma, when f is C^∞). This is essentially correct, but the phrase '臨界点でヘッセ行列が正則（非退化）なら' omits that a is a critical point (∇f(a)=0) is required; as written it could be read as applying at any point. Also the standard Morse lemma requires f ∈ C^{k} with k≥3 (or C^∞); stating it only for C^∞ is fine but the critical-point hypothesis should be explicit.
- **Proposed fix:** At a critical point a (∇f(a)=0) of a C^∞ function f, if the Hessian Hf(a) is nondegenerate, then there is a C^∞ change of coordinates near a bringing f to the normal form -y_1^2-...-y_p^2+y_{p+1}^2+...+y_n^2 (Morse lemma).
- **Reported:** 2026-10-28 (8ccef3d)
