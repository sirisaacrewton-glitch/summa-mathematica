# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/08-diagonal-first-incompleteness.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/08-diagonal-first-incompleteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Remark on extensions: PA+G is claimed incomplete but the argument only gives incompleteness of the base theory
- **Category:** Supplement/remark error
- **Location:** pt:first-incompleteness-extensions
- **Detail:** The remark says that for any extension T of PA with a Δ-definable axiom set the same theorem holds, and gives PA+G as an example of an incomplete theory. But the first incompleteness theorem applied to T=PA+G only yields a Gödel sentence G_T independent of T; it does not show that G (the Gödel sentence of PA) is independent of PA+G. Indeed PA+G proves G, so G is decided in PA+G. The claim that 'PA+G is also incomplete' is true but requires the theorem applied to T=PA+G (with its own Gödel sentence), not the sentence G. As written the example suggests G remains undecidable in PA+G, which is false.
- **Proposed fix:** Replace the example with: 'For example, for any theory T obtained by adding finitely many sentences to PA (such as PA+G), the axiom set is still Δ-definable, so applying the theorem to T yields a sentence G_T independent of T; hence PA+G is also incomplete (though it proves G itself).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Remark on the shape of G: 'incompleteness first appears one level up' is imprecise
- **Category:** Supplement/remark error
- **Location:** remark ゲーデル文の形
- **Detail:** The remark states that since true Σ sentences are all provable, incompleteness 'first appears at this one-level-higher complexity'. But the unprovability of G (a Π sentence) is not a complexity phenomenon: there are true Π sentences that are provable, and the failure is about the specific sentence, not about Π complexity in general. Moreover the claim that incompleteness 'first appears' at Π level is misleading because Σ-completeness only guarantees provability of true Σ sentences, not that every true Π sentence is unprovable; the statement overstates the role of complexity.
- **Proposed fix:** Rephrase: 'Since Bew is Σ, G is equivalent to a Π sentence. Σ-completeness guarantees that all true Σ sentences are provable, so a true sentence that is unprovable cannot be Σ (it must be at least Π); G is an example of such a true but unprovable Π sentence.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck comment on ω-consistency: 'if PA is consistent then PA+¬G is consistent' attributed to the contrapositive of 1
- **Category:** Supplement/remark error
- **Location:** pt:godel-first / hypcheck
- **Detail:** The hypcheck says 'if PA is consistent then PA+¬G is consistent (the contrapositive form of 1)'. The contrapositive of statement 1 (Con(PA) ⇒ PA⊬G) is PA⊢G ⇒ ¬Con(PA), which is not the same as the consistency of PA+¬G. The consistency of PA+¬G follows from PA⊬G via the deduction theorem, not directly as a contrapositive of 1. The parenthetical mischaracterizes the logical relationship.
- **Proposed fix:** Replace '(1 の対偶の形)' with '(deduction theorem from 1: if PA+¬G were inconsistent then PA⊢G)'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Supplement: Cantor's theorem described as contrapositive of the fixed-point non-existence, and 'negation has no fixed point'
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says Cantor's theorem is 'the contrapositive form' derived from the fact that the fixed point does not exist ('the negation has no fixed point'), and that incompleteness derives 'provability does not coincide with truth' from existence of a fixed point. This is imprecise: in Lawvere's framework, Cantor's theorem follows from the absence of a surjection A→2^A, which is shown by applying the fixed-point theorem to the negation map on the power object; the 'negation has no fixed point' is the key input, but calling Cantor's theorem 'the contrapositive' of the fixed-point theorem is loose. Also 'the fixed point does not exist' is stated as if the diagonal lemma's fixed point fails, which conflates the arithmetic and set-theoretic settings.
- **Proposed fix:** Rephrase: 'Cantor's theorem is obtained by applying Lawvere's fixed-point theorem to the negation map on the power object (which has no fixed point), yielding the non-existence of a surjection A→2^A; the incompleteness theorem applies the same fixed-point mechanism to the substitution map to obtain a sentence asserting its own unprovability.'
- **Reported:** 2026-10-28 (8ccef3d)
