# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/01-bisimulation.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/01-bisimulation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Van Benthem characterization misstated as 'modal logic exactly expresses bisimulation-invariant first-order properties'
- **Category:** Supplement/remark error
- **Location:** supplement (関連する結果)
- **Detail:** The supplement says: '一つの自由変数をもつ一階の論理式が様相論理式の標準翻訳と同値であることと、双模倣で不変であることは同値である（ファン・ベンセムの特徴付け定理）' and then concludes '様相論理は「双模倣で不変な一階の性質」をちょうど表す言葉である'. The van Benthem characterization theorem is about *local* (pointed-model) equivalence: a first-order formula α(x) is (locally) equivalent to the standard translation of a modal formula iff α is invariant under bisimulation. The final sentence overstates this as if modal logic captured all bisimulation-invariant first-order *properties* (frame/global properties), which is false — e.g. irreflexivity is a first-order property invariant under bisimulation (bisimulations preserve the zig-zag structure but a frame property like irreflexivity is not preserved by bounded morphisms, so it is not bisimulation-invariant in the relevant sense, but the phrasing 'properties' is ambiguous and the claim as stated is too strong). The precise statement must be restricted to formulas with one free variable, evaluated locally.
- **Proposed fix:** Restrict the claim: 'A first-order formula α(x) with one free variable is equivalent (on pointed models) to the standard translation of a modal formula if and only if α is invariant under bisimulation (van Benthem's characterization theorem).' Delete or qualify the concluding sentence '様相論理は「双模倣で不変な一階の性質」をちょうど表す言葉である' to make clear this concerns local (pointed) properties, not global frame properties.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Coalgebra remark: bounded morphisms are coalgebra homomorphisms — needs the right functor and direction
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The remark says Kripke models are coalgebras for the powerset functor via W → P(W)×P(PV), and that 'bounded morphisms are exactly coalgebra homomorphisms'. For the functor F(W)=P(W)×P(PV), a coalgebra homomorphism f:(W,γ)→(W',γ') requires γ'∘f = F(f)∘γ, i.e. the *image* of successors under f equals the successors of f(w) — this is the 'forth + surjectivity-on-successors' condition, which is stronger than a bounded morphism (a bounded morphism only requires f(w)R'f(v) for wRv and the back condition, not that every successor of f(w) is the image of a successor of w). So 'exactly' is imprecise: bounded morphisms correspond to coalgebra homomorphisms only after restricting to the appropriate notion (e.g. for the functor with the 'weak pullback' / using the covariant powerset and requiring the morphism to be a 'p-morphism' which is a coalgebra homomorphism only in the sense of a lax/op-lax morphism, or for a different functor). The identification as stated is not literally correct.
- **Proposed fix:** Soften to: 'In this view a bounded morphism is closely related to a coalgebra homomorphism (a p-morphism); precisely, bounded morphisms are the coalgebra morphisms for a suitable (e.g. neighbourhood/predicate-lifting) presentation of the powerset functor, and bisimilarity is the span/topos-theoretic notion of behavioural equivalence.' Avoid the flat assertion that bounded morphisms are *exactly* coalgebra homomorphisms for F(W)=P(W)×P(PV).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck of irreflexivity-undefinable: claim about finite irreflexive frames is imprecise
- **Category:** Supplement/remark error
- **Location:** logic:irreflexivity-undefinable / hypcheck
- **Detail:** The hypcheck says '有限の非反射的なフレームからは反射的な一点へ全射な有界射は作れない（後続のない点で戻りの条件が破れる）'. This is true only when the finite irreflexive frame has a point with no successor (a dead end). A finite irreflexive frame in which every point has a successor (e.g. a directed cycle of length ≥2, which is irreflexive) *does* admit a surjective bounded morphism onto the reflexive one-point frame: the constant map satisfies the back condition because every point has a successor. So the parenthetical justification is wrong as stated; the correct statement is that a finite irreflexive frame with a dead end admits no such morphism, but a cycle does.
- **Proposed fix:** Replace with: 'A finite irreflexive frame that has a point with no successor admits no surjective bounded morphism onto the reflexive one-point frame (the back condition fails at the dead end). (A finite irreflexive frame in which every point has a successor, such as a directed cycle, does admit such a morphism.)'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Ladner's theorem fact: 'T and S4 are PSPACE-complete' — correct, but the parenthetical about provability needs care
- **Category:** Unsupported fact
- **Location:** logic:modal-complexity-fact
- **Detail:** The fact states K, T, S4 satisfiability (hence provability) are PSPACE-complete. This is correct (Ladner 1977). However the phrase 'したがって証明可能性問題' (hence the provability problem) is stated without noting that provability is the *complement* problem; PSPACE is closed under complement so the complexity class is the same, but the sentence as written could be read as claiming provability and satisfiability are the same problem. This is a minor imprecision rather than a falsehood, but since the fact is stated without proof and the complement step is nontrivial, it should be made explicit.
- **Proposed fix:** Add: 'Here provability is the complement of satisfiability (A is provable iff ¬A is not satisfiable); since PSPACE is closed under complement, the provability problem is also PSPACE-complete.'
- **Reported:** 2026-10-28 (8ccef3d)
