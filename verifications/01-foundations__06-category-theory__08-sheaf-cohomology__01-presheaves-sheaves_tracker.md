# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/01-presheaves-sheaves.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/01-presheaves-sheaves.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main concern is the supplement's claim that the stalk functor preserves finite limits, which is not true in general (filtered colimits need not commute with finite limits). The comparison with commutative algebra localization is essentially correct. Proofs and examples check out.

## Issues

### ISSUE-0001 [Open] Stalk functor does not preserve finite limits in general
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement claims that the stalk functor $F\mapsto F_{x}$ preserves finite limits and arbitrary colimits. The colimit part is correct (filtered colimits commute with finite limits in Set/Ab), but the finite-limit part is false in general: the stalk functor is a filtered colimit, and filtered colimits do not preserve finite limits (e.g. products) in general. For instance, for the sheaf of continuous functions, $(F\times G)_{x}\cong F_{x}\times G_{x}$ happens to hold, but this is not a general fact for arbitrary presheaves/sheaves; the stalk functor preserves finite limits only when the indexing category is such that the colimit is exact, which is not the case for the neighborhood filter in general. Actually the correct statement: the stalk functor preserves all colimits and finite limits *when restricted to sheaves* is also not automatic. The safe correct statement is that it preserves arbitrary colimits (being a left adjoint, the inverse image $x^{-1}$), and finite limits only under additional hypotheses.
- **Proposed fix:** Replace with: 「茎をとる関手 $F\mapsto F_{x}$ は点 $x\colon\{*\}\to X$ に沿った逆像（\ref{cat:page-direct-inverse-image}）であり、左随伴として任意の余極限を保つ。有限極限については、層の圏に制限した場合でも一般には保たれない（近傍系上のフィルター付き余極限は有限極限と可換とは限らない）。」
- **Reported:** 2026-10-28 (8ccef3d)
