# Verification tracker: `02-algebra/06-homological-algebra/01-abelian-categories/03-diagram-lemmas.html`

<!-- source: 02-algebra/06-homological-algebra/01-abelian-categories/03-diagram-lemmas.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (five lemma, snake lemma, pullback-epi) and their proofs are essentially correct. The genuine problems are confined to the supplement and example: the short five lemma is misdescribed as a special case of the five lemma, a specific Mac Lane exercise is cited for naturality without verification, the Yoneda/'flat cover' analogy is overstated, and the example's wording about right exactness is imprecise. No issues in the core proofs were found.

## Issues

### ISSUE-0001 [Open] Short five lemma mislabeled as special case of five lemma
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement calls the short five lemma a special case of the five lemma. The short five lemma (both ends iso ⇒ middle iso) is a consequence of the snake lemma or proved directly; it is not literally a special case of the five lemma statement as given (which concerns 5-term rows). The claim is imprecise.
- **Proposed fix:** Replace with: 'The short five lemma (for a map of short exact sequences with f and h isomorphisms, g is an isomorphism) follows from the snake lemma (or is proved directly); it is used in the theory of group extensions and Ext.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Mac Lane attribution for naturality of connecting morphism
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The text attributes naturality of the connecting morphism to 'Mac Lane Ch. VIII §4 Exercise 4'. The precise exercise number/attribution is not verifiable and Mac Lane's treatment of the snake lemma there is partial (as the page itself notes). Stating a specific exercise number as the source is an unsupported attribution.
- **Proposed fix:** Replace with: 'The connecting morphism is natural (this follows from its construction via pullback and pushout).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Yoneda description of members is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The claim that a member x: s→a is 'a family of elements of a parametrized by s' via the Yoneda lemma is loose: Yoneda identifies Hom(s,a) with natural transformations, not with a 'family of elements'. The identification with 'flat cover localization' is only an analogy and is stated as if it were the same structure.
- **Proposed fix:** Soften to: 'A member x: s→a can be viewed, via Yoneda, as an element of a after applying Hom(s,−); identifying by epimorphisms is analogous to (but not the same as) passing to a flat/fppf localization.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Example claim about kernel-only sequence
- **Category:** Supplement/remark error
- **Location:** example
- **Detail:** The example asserts e_{0}: Kg→Kh is not epi and that 'the kernel-only sequence is not right exact, and δ fills the gap'. In this example Kg=0, so e_{0}=0: 0→Kh is not epi, which is correct, but the phrasing 'the kernel-only sequence is not right exact' is imprecise since the sequence 0→Kf→Kg→Kh is left exact and the failure is at Kh→Cf, not 'right exactness' of the kernel sequence.
- **Proposed fix:** Rephrase: 'e_{0}: Kg→Kh is not an epimorphism (here Kg=0, Kh=Z), so the sequence of kernels alone is not exact at Kh; the connecting morphism δ supplies the missing map.'
- **Reported:** 2026-10-28 (8ccef3d)
