# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/01-presheaves-sheaves.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/01-presheaves-sheaves.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Stalk functor does not preserve finite limits in general
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement claims that the stalk functor $F\mapsto F_{x}$ preserves finite limits and arbitrary colimits. The colimit part is correct (filtered colimits commute with finite limits in $\mathbf{Set}$), but the finite-limit part is false for a general topological space. The stalk functor is a filtered colimit of restriction functors, and filtered colimits do not preserve finite limits in the category of sheaves in general; the stalk functor preserves finite limits only when the point $x$ has a local base of open neighborhoods that is closed under finite intersections in a suitable sense (e.g. when $X$ is locally connected at $x$ or more precisely when the neighborhood filter is closed under finite intersections of open sets, which always holds for open neighborhoods, but the issue is that the colimit is over the poset of open neighborhoods and filtered colimits of sets do commute with finite limits). Actually, filtered colimits in $\mathbf{Set}$ do commute with finite limits, so the stalk functor, being a filtered colimit of the restriction functors $F\mapsto F(U)$, does preserve finite limits as a functor to $\mathbf{Set}$. However, the claim as stated in the context of sheaves and toposes is imprecise: the stalk functor is left exact as a functor on presheaves, but on sheaves the statement that it preserves finite limits requires care because the inverse image along $x\colon\{*\}\to X$ is the stalk functor only when one uses the appropriate topology. The claim that it preserves 'finite limits and arbitrary colimits' is the standard characterization of a point of a topos, and it is correct for the étale-space / sheaf setting. On reflection, filtered colimits in $\mathbf{Set}$ do commute with finite limits, so the stalk functor does preserve finite limits. The statement is essentially correct.
- **Proposed fix:** No change needed; the statement is correct because filtered colimits in $\mathbf{Set}$ commute with finite limits.
- **Reported:** 2026-10-28 (10fede1)
