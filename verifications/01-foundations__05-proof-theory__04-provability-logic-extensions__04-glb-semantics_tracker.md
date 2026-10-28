# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/04-glb-semantics.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/04-glb-semantics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions, D1/D2, Σ₃ completeness, soundness, IDzh completeness, generated submodel lemma) is largely correct and well-supported by the cited results. The genuine problems concentrate in the remark and example environments: the remark's claim that the ω-rule closure 'coincides with truth' (attributed to Hilbert) is false, and the example conflates the implication ¬□⊥→[1]¬□⊥ with the unconditional ω-provability of Con and uses an unjustified step from '□⊥ is false' to '¬□⊥ is ω-provable'. The supplement's GLS analogy is loose. No issues found in the proofs themselves.

## Issues

### ISSUE-0001 [Open] ω-rule closure equals truth: misattributed to Hilbert
- **Category:** Supplement/remark error
- **Location:** remark after pt:omega-provable-equiv
- **Detail:** The remark says that 'provability allowing the ω-rule any number of times' coincides with truth, attributing this to Hilbert. The ω-rule closure of PA (or even of pure logic) does not yield all arithmetical truths; it yields exactly the true Π₁ (and more generally the arithmetically sound) consequences, and in particular does not prove all true Σ₁ sentences or all true statements. The claim 'coincides with truth' is false, and the attribution to Hilbert is dubious (the ω-rule is due to Hilbert/Carnap, but the 'equals truth' claim is not a theorem).
- **Proposed fix:** Replace with: 「ω 規則を何回でも使ってよい証明可能性は、算術の真なる Π₁ 文（より一般に、すべてのモデルで真となる文）を特徴づけるが、真理全体とは一致しない（タルスキの定理）。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that ω-provability is not definable in arithmetic / Tarski comparison
- **Category:** Supplement/remark error
- **Location:** remark after pt:omega-provable-equiv
- **Detail:** The remark states 'ω 証明可能性は算術で定義できる（次の定義）ので、タルスキの定理より真理とは一致しない'. The inference is fine, but combined with the previous sentence it suggests the ω-rule closure equals truth while ω-provability (one use) does not. The real content is that ω-provability is arithmetically definable (Σ₃) whereas truth is not, so they differ. As written the first sentence is the false part; the second sentence's reasoning is acceptable but rests on the false premise. This is essentially the same defect as above; report the corrected combined statement.
- **Proposed fix:** 「ω 規則を何回でも使ってよい証明可能性は真なる Π₁ 文を特徴づけるが真理全体ではない。一方 ω 証明可能性（ω 規則を一回）は算術で定義できる（次の定義）ので、タルスキの定理より真理とは一致しない。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Example: 'Con is ω-provable but not provable, a true Π₁ sentence'
- **Category:** Supplement/remark error
- **Location:** example (pt:sec-glb)
- **Detail:** The example claims that from ¬□⊥→[1]¬□⊥ it follows that 'if PA is consistent then Con is ω-provable', and then asserts 'PA⊬Con, so it is an example of an ω-provable but not provable sentence (a true Π₁ sentence)'. Two problems: (1) ¬□⊥→[1]¬□⊥ is an instance of the axiom schema with A=⊥, giving [1]¬□⊥ under the assumption ¬□⊥; but the conclusion 'Con is ω-provable' requires that ¬□⊥ (i.e. Con) actually holds, which is true but not established here; more importantly (2) the sentence ¬□⊥ is Π₁ and true, and it is ω-provable, but the text conflates 'Con' with '¬□⊥' and asserts PA⊬Con as if it followed, which is the second incompleteness theorem and is fine, but the phrase 'ω 証明可能だが証明可能でない文の例（真の Π₁ 文）' is correct only for ¬□⊥, not for the displayed derivation. The derivation only shows GLB⊢¬□⊥→[1]¬□⊥, not that [1]¬□⊥ holds unconditionally. The claim that Con is ω-provable is true (since Con is true Π₁, hence ω-provable), but the justification given (the implication) does not establish it without the additional true premise Con.
- **Proposed fix:** 「¬□⊥→[1]¬□⊥ は公理の例である。Con（=¬□⊥）は真なので ω 証明可能であり、第二不完全性定理より PA⊬Con。よって Con は ω 証明可能だが証明可能でない真の Π₁ 文の例である。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] PA+□⊥ is consistent but not ω-consistent: justification
- **Category:** Supplement/remark error
- **Location:** example (pt:sec-glb)
- **Detail:** The example says 'PA+□⊥ is consistent but not ω-consistent: □⊥ is false so ¬□⊥ is ω-provable, i.e. PA+□⊥ is not ω-consistent'. The reasoning is: ¬□⊥ is ω-provable means PA+¬(¬□⊥)=PA+□⊥ is not ω-consistent. This is correct in substance (ω-provability of S means PA+¬S is not ω-consistent). However the phrase '□⊥ is false' is used to conclude ¬□⊥ is ω-provable; this requires that ¬□⊥ is true (which it is, by consistency of PA) and that true Π₁ sentences are ω-provable. The step '□⊥ is false ⟹ ¬□⊥ is ω-provable' is not justified by anything cited; it needs the fact that true Π₁ sentences are ω-provable (which follows from ω-provability of true sentences plus Σ₁/Π₁ closure, but is not stated). Minor gap.
- **Proposed fix:** Add: 「真なる Π₁ 文は ω 証明可能である（ω 公理 ∀v E で E を適切にとる）から、¬□⊥ は ω 証明可能。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] Supplement: 'GLS reflection principle moved to antecedent of A^S' analogy
- **Category:** Supplement/remark error
- **Location:** supplement, 前提の検討 second bullet
- **Detail:** The supplement claims that putting finitely many □B→[1]B into the antecedent U_A is 'the same idea as moving the reflection principle of GLS into the antecedent of A^S'. This is an imprecise/overstated analogy: in the standard Solovay-style argument for GL/GLS, one uses the fact that GLS proves A iff GL proves □A→A (or uses a suitable A^S), but the precise mechanism (the 'A-completeness' / U_A device) is specific to Ignatiev's IDzh and is not literally 'the same' as the GLS reflection trick. As a side comment it is loose but arguably acceptable; flag as imprecise.
- **Proposed fix:** Soften: 「これは GLS の完全性証明で反映原理を前件に組み込む発想に類似しているが、同一ではない。」
- **Reported:** 2026-10-28 (8ccef3d)
