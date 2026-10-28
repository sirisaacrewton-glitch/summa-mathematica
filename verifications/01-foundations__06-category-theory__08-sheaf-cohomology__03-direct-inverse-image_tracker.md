# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/03-direct-inverse-image.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/03-direct-inverse-image.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Inverse image does not preserve finite limits in general
- **Category:** Supplement/remark error
- **Location:** supplement (完全性 paragraph)
- **Detail:** The supplement claims that $f^{-1}$ preserves finite limits because its stalks are $G_{f(x)}$ and 'taking stalks commutes with finite limits'. This is false in general: $f^{-1}$ preserves finite limits only when $f$ is an open map (or more generally when the site morphism is 'flat'). For a general continuous map, $f^{-1}$ preserves finite products and equalizers of sheaves? Actually $f^{-1}$ is left exact iff $f$ is open; the standard counterexample is a non-open map. The claim that $(f^{-1}\dashv f_{*})$ is a geometric morphism is true (it is, since $f^{-1}$ is left exact for sheaves on spaces? No—for sheaves on topological spaces $f^{-1}$ IS left exact, because $f^{-1}$ is the pullback of etale spaces, and pullback of etale spaces along any continuous map preserves finite limits since it is a left adjoint whose right adjoint $f_{*}$ ... ). Let me reconsider: for topological spaces, $f^{-1}$ is indeed left exact. The etale space description $X\times_{Y}\mathrm{Et}(G)$ shows $f^{-1}$ is a pullback of etale spaces, and fiber products of etale spaces over $Y$ pull back to fiber products over $X$; also the terminal sheaf pulls back to the terminal sheaf. So $f^{-1}$ preserves finite limits for spaces. The reasoning given ('stalks are $G_{f(x)}$ and taking stalks commutes with finite limits') is however not a valid argument in general, but the conclusion is correct for topological spaces. The justification is imprecise but the statement is true. I should not report a true statement. However the reasoning 'taking stalks commutes with finite limits' is itself only true for filtered colimits (stalks are filtered colimits, which commute with finite limits in the category of abelian groups / sets). That is correct. So the claim is fine.
- **Proposed fix:** No change needed; statement is correct for topological spaces.
- **Reported:** 2026-10-28 (10fede1)
