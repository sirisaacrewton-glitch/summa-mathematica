# Verification tracker: `01-foundations/06-category-theory/01-basics/09-adjoints-limits.html`

<!-- source: 01-foundations/06-category-theory/01-basics/09-adjoints-limits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main concerns are in the supplement: the filtered-colimit commutation statement is stated too narrowly and its attribution/reasoning is imprecise, and the alternative RAPL proof via adjunction composition is terse but essentially valid. Example 3's surjectivity argument is acceptable. No serious logical gaps found in the proofs.

## Issues

### ISSUE-0001 [Open] Filtered colimits commute with finite limits: wrong attribution and scope
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The claim that finite limits commute with filtered colimits 'in Set' is stated too narrowly and the attribution to Mac Lane Ch. IX §2 is imprecise. The correct general statement is that filtered colimits commute with finite limits in Set (and more generally in any locally finitely presentable category / category of algebras), not merely 'in Set'. Also the reason given for forgetful functors of algebraic categories preserving filtered colimits ('this is why') is a non-sequitur: preservation of filtered colimits by forgetful functors is a separate fact (they create them), not a consequence of commutation in Set.
- **Proposed fix:** Finite limits commute with filtered colimits in $\mathbf{Set}$ (and more generally in any category of algebras over a finitary monodromy / locally finitely presentable category). The forgetful functor from a category of algebras preserves filtered colimits because it creates them, not because of this commutation.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Alternative proof via adjunction composition misuses uniqueness
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The supplement claims $G\circ\lim\cong\lim\circ G^{\mathbf{J}}$ follows from 'uniqueness of composition of adjunctions' citing cat:adjoint-unique and cat:adjunction-composition. But $\Delta\circ F$ and $F^{\mathbf{J}}\circ\Delta$ being equal gives right adjoints $G\circ\lim$ and $\lim\circ G^{\mathbf{J}}$; uniqueness of adjoints gives an isomorphism, which is fine, but the text says 'the right adjoints are isomorphic' as if this reproves RAPL — it does, but the citation to cat:adjoint-unique is used for uniqueness of the right adjoint of a fixed left adjoint, which is legitimate. The real gap: it must be checked that $\Delta\circ F = F^{\mathbf{J}}\circ\Delta$ as functors (true) and that both composites are actually adjunctions (composition of adjunctions, cat:adjunction-composition). This is essentially correct but the phrase '左随伴の合成 $\Delta\circ F$ と $F^{\mathbf{J}}\circ\Delta$ は等しい' needs the note that $G^{\mathbf{J}}$ is right adjoint to $F^{\mathbf{J}}$ (functor-category lifting), which is stated. Minor imprecision, not a serious error.
- **Proposed fix:** Add: '$F^{\mathbf{J}}\dashv G^{\mathbf{J}}$ and $\Delta\dashv\lim$; since $\Delta\circ F=F^{\mathbf{J}}\circ\Delta$, composing adjunctions gives $\Delta\circ F\dashv G\circ\lim$ and $F^{\mathbf{J}}\circ\Delta\dashv\lim\circ G^{\mathbf{J}}$; uniqueness of right adjoints yields $G\circ\lim\cong\lim\circ G^{\mathbf{J}}$.'
- **Reported:** 2026-10-28 (8ccef3d)
