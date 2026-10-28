# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/04-cartesian-closed.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/04-cartesian-closed.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound overall: the definition of cartesian closed category, the evaluation/universal-property proposition, the non-cartesian-closed examples (Grp, Ab), the isomorphism proposition, Lawvere's fixed point theorem and its corollaries (exponential form, Cantor) are all correctly proved and cited. The main concern is in the supplement: the reflexive-object bullet overstates the consequence to all endomorphisms in the category rather than endomorphisms of D, and the recursion-theorem bullet uses 'point-surjective' loosely (though hedged). No errors were found in the proofs or in the cited theorems' hypotheses.

## Issues

### ISSUE-0001 [Open] Reflexive object claim: every endomorphism of D has a fixed point requires D to be nontrivial / point-surjectivity
- **Category:** Supplement/remark error
- **Location:** supplement / 反射的対象 bullet
- **Detail:** The supplement claims that in a cartesian closed category with a reflexive object D ≅ D^{D}, Lawvere's theorem gives that every endomorphism of D has a fixed point. But Lawvere's theorem (cat:lawvere-ccc-form) requires a point-surjective morphism A → B^{A}. From D ≅ D^{D} one gets an isomorphism D → D^{D}, which is point-surjective only if it is surjective on points; an isomorphism is point-surjective (indeed any iso is), so this part is fine. However the conclusion 'every endomorphism of D has a fixed point' is correct only when the isomorphism D ≅ D^{D} is used as the point-surjective map; that is legitimate. The problematic sentence is the final one: 'Set にそのような D が一点集合しかないのは、カントールの定理による'. In Set, D ≅ D^{D} forces D to be a singleton (since |D| = |D|^{|D|} only for |D| = 1, or D empty—but D^{D} for D = ∅ is a singleton, so ∅ ≅ 1 fails). This is correct. The genuinely imprecise claim is 'そのような圏（スコットの領域の圏など）では、不動点をもたない自己射は存在しない': in a cartesian closed category with a reflexive object D, only endomorphisms of D are forced to have fixed points, not endomorphisms of arbitrary objects. The sentence as written ('そのような圏では、不動点をもたない自己射は存在しない') overstates this to all self-morphisms in the category.
- **Proposed fix:** Restrict the claim to D: 'In a cartesian closed category with a reflexive object D ≅ D^{D}, Lawvere's theorem applied to the point-surjective isomorphism D → D^{D} shows that every endomorphism of D has a fixed point (this is the categorical reason for the fixed-point combinator Y in the untyped lambda calculus). In particular, in such a category there is no endomorphism of D without a fixed point.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Weakening point-surjective to epimorphism: the stated counterexample is vague but the claim is essentially correct; however 'point-surjective' vs 'weakly point-surjective' distinction
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that weakening point-surjective to epimorphism makes the conclusion fail, citing 'point-poor categories'. This is true in general (e.g. in a presheaf category an epimorphism A → B^{A} need not be point-surjective, and endomorphisms of B need not have fixed points). The claim is correct but stated without a concrete example; it is not false. No error.
- **Proposed fix:** No change needed; optionally add a concrete example such as a presheaf category where an epimorphism A → B^{A} exists but some endomorphism of B has no fixed point.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Recursion theorem as 'positive side' of Lawvere: the enumeration is not literally point-surjective
- **Category:** Unsupported fact
- **Location:** supplement / 再帰定理 bullet
- **Detail:** The bullet says the enumeration of partial functions by indices is '(in a suitable sense of the category of partial functions) point-surjective', and that the recursion theorem is the 'positive side' of Lawvere's theorem. The text itself hedges ('対応は比喩として理解するのが安全である'), and the statement that the recursion theorem concludes extensional equality φ_{e} ≃ φ_{h(e)} rather than a fixed point is correct. The phrase '点全射であり' is an overstatement since the enumeration e ↦ φ_{e} is not a morphism in a cartesian closed category in the literal sense required by Lawvere's theorem; but the text immediately qualifies this. Borderline; the hedge makes it acceptable.
- **Proposed fix:** No change strictly required; if desired, replace '点全射であり' with '点全射に類似した性質をもち' to avoid implying a literal application.
- **Reported:** 2026-10-28 (10fede1)
