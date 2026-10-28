# Verification tracker: `01-foundations/04-set-theory/03-well-founded-sets/04-foundation.html`

<!-- source: 01-foundations/04-set-theory/03-well-founded-sets/04-foundation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Rieger–Bernays permutation method: wrong map and wrong claim about ∅∈_π∅
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると（基礎の公理の独立性）)
- **Detail:** The supplement says: take π swapping ∅ and {∅}; then ∅∈_π∅. But x∈_π y ⟺ x∈π(y). With π(∅)={∅}, we get x∈_π∅ ⟺ x∈{∅} ⟺ x=∅, so ∅∈_π∅ holds. That part is fine. However the general claim is imprecise: the permutation method (Rieger–Bernays) preserves the axioms of ZF⁻ only for permutations π that are definable and, crucially, the resulting structure satisfies ZF⁻ including Extensionality only when π is a permutation of V that is the identity on a large set (or one uses the more careful construction). More importantly, the stated conclusion '∅∈_π∅' does not by itself give a Quine atom x={x}; one needs to check that the permuted membership still satisfies Extensionality, which requires π to be a definable bijection of V (it is), but the text's phrasing 'π として ∅ と {∅} を入れ替える写像をとれば、∅∈_π∅ となる' suggests this alone yields the Quine atom, which is misleading: the Quine atom in the permuted model is the set whose π-image is {∅}... Actually the real issue: with π swapping ∅ and {∅}, the set {∅} in the new membership has as its unique element ∅ (since x∈_π{∅} ⟺ x∈π({∅})=x∈∅, none), so {∅} becomes empty, and ∅ becomes {∅} — this does not produce a self-singleton. The standard Quine atom is obtained by a different permutation (e.g., a permutation moving a set a to {a} consistently, which requires an infinite construction, not a simple 2-cycle). So the concrete example is wrong.
- **Proposed fix:** Replace the parenthetical with: 'For instance, taking π to be a definable permutation of V that is the identity off a suitably chosen set and satisfies π(a)={a} for some a (such a π is built by a back-and-forth / Fraenkel–Mostowski style construction) yields a model of ZF⁻ in which a={a}.' Do not claim that the simple transposition of ∅ and {∅} produces a Quine atom.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that ZF⁻−P−Inf cannot prove existence of transitive closure
- **Category:** Supplement/remark error
- **Location:** supplement (冪集合・無限を除くと)
- **Detail:** The supplement asserts that in ZF⁻−P−Inf the existence of the transitive closure cannot be proved, so Step 1 fails, and that ε-induction is then 'truly stronger'. The transitive closure trcl({a}) of a singleton is a finite set: trcl({a}) = {a} ∪ ⋃^n a ... but without Infinity, ⋃^n a for arbitrary a may not terminate; however for the specific use in Step 1 one only needs trcl({a}), which requires iterating union along ω. Without Infinity, ω may not exist, so indeed trcl may fail to exist as a set in general. But the statement 'the existence of the transitive closure cannot be proved' is too strong as stated: for well-founded a it can still be defined by recursion on rank if Foundation holds. The precise claim should be that the specific construction via ⋃_{n∈ω} needs Infinity. Also the attribution '(Kunen, Ch. III, Exercise 19)' should be checked; Kunen's exercise concerns ε-induction/recursion without Infinity, but the exact numbering may be off. This is a side remark; the mathematical content is essentially right but overstated.
- **Proposed fix:** Rephrase: 'In ZF⁻−P−Inf the construction trcl(A)=⋃_{n∈ω}⋃^n A is not available in general because ω need not exist; hence the proof of Step 1 does not go through, and ε-induction may be strictly stronger than Foundation in that system.' Remove or verify the precise Kunen reference.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck example for dropping transitivity of A is incorrect
- **Category:** Supplement/remark error
- **Location:** set:ordinal-foundation / hypcheck (A の推移性)
- **Detail:** The hypcheck says: 'A={1}={ {∅} } has ∈_A empty and transitive, but A is not transitive (∅∈1 but ∅∉A) and not an ordinal.' Check: A={1} where 1={∅}. Then ∈_A = {(y,z)∈A×A : y∈z}. The only element of A is 1={∅}; is 1∈1? 1={∅}, its only element is ∅, and ∅≠1, so 1∉1. So ∈_A=∅, which is transitive. A is not transitive since ∅∈1∈A but ∅∉A. A is not an ordinal. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
