# Verification tracker: `01-foundations/06-category-theory/01-basics/09-adjoints-limits.html`

<!-- source: 01-foundations/06-category-theory/01-basics/09-adjoints-limits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main theorem (RAPL) and its proof are sound, as are the hom-functor preservation, pointwise limits, and creation of limits by the forgetful functor from Grp. The only genuine issues are in the supplement: (1) the causal attribution that forgetful functors of algebraic categories preserve filtered colimits 'because' finite limits commute with filtered colimits in Set is imprecise; (2) the alternative proof via composition of adjoints states equality where only natural isomorphism holds. The example item 3 is essentially correct and not reported.

## Issues

### ISSUE-0001 [Open] Filtered colimits commute with finite limits: missing finiteness/condition
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement claims that finite limits commute with filtered colimits in Set. This is true, but the statement as written ("有限の極限とフィルター余極限は Set の中で交換する") is correct for Set. However the following sentence claims that forgetful functors of algebraic categories preserve filtered colimits "for this reason". This is imprecise: the preservation of filtered colimits by forgetful functors from varieties of algebras is a separate fact (filtered colimits are computed on underlying sets because the algebraic theory is finitary), not a consequence of the commutation of finite limits with filtered colimits in Set. The commutation result is about interchange of two limit/colimit constructions, not about a functor preserving filtered colimits. So the causal attribution "このためである" is wrong.
- **Proposed fix:** Replace with: "極限と余極限は一般には交換しないが、$
  \mathbf{Set}$ において有限極限はフィルター余極限と交換する（Mac Lane 第 IX 章 §2）。代数系の圏の忘却関手がフィルター余極限を保存するのは、代数系の圏のフィルター余極限が台集合上で計算できる（理論が有限項である）ことによる。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Alternative proof via composition of adjoints: F^J ∘ Δ vs Δ ∘ F identification
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The supplement claims that composing F^J ⊣ G^J with Δ ⊣ lim gives G∘lim ≅ lim∘G^J as an alternative proof of RAPL. The argument says "左随伴の合成 Δ∘F と F^J∘Δ は等しい". But Δ∘F and F^J∘Δ are functors C^J→X^J and C^J→X^J respectively; they are not literally equal but only naturally isomorphic (Δ∘F sends an object to the constant diagram at F(c), while F^J∘Δ sends it to the constant diagram at F(c) too — actually these are equal on objects and morphisms since F^J applied to a constant diagram is constant at F applied). More importantly, the conclusion G∘lim ≅ lim∘G^J requires that the right adjoint of Δ∘F equals G∘lim and the right adjoint of F^J∘Δ equals lim∘G^J, and that these left adjoints are isomorphic. This is correct in outline, but the statement "等しい" (equal) is too strong: they are naturally isomorphic, and the uniqueness of adjoints (cat:adjoint-unique) gives only an isomorphism, not equality. The claim as stated is imprecise.
- **Proposed fix:** Replace "左随伴の合成 $\Delta\circ F$ と $F^{\mathbf{J}}\circ\Delta$ は等しいので" with "左随伴の合成 $\Delta\circ F$ と $F^{\mathbf{J}}\circ\Delta$ は自然同型であり、随伴の一意性によりその右随伴 $G\circ\lim$ と $\lim\circ G^{\mathbf{J}}$ も自然同型になる".
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Example 3: U(Z*Z) vs UZ ⊔ UZ — the standard map is not surjective, but the reasoning about 'ab' is imprecise
- **Category:** Supplement/remark error
- **Location:** example / item 3
- **Detail:** The example claims U: Grp→Set does not preserve coproducts because the canonical map UZ ⊔ UZ → U(Z*Z) is not surjective, with the justification that elements of the form 'ab' are not in the image. This is essentially correct (the free product Z*Z is the free group on two generators, whose underlying set is countably infinite, while UZ ⊔ UZ is a two-element disjoint union; the canonical map sends the two generators and is far from surjective). However the phrase "$ab$ の形の元は像に入らない" is slightly off: the image consists of the two generators (and their images), so indeed words like ab are not in the image. The claim is correct but the wording "可算無限集合" for U(Z*Z) is fine. No genuine error, but the statement that UZ ⊔ UZ → U(Z*Z) is the relevant map and that it is not surjective is correct. This is not an error; skip.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
