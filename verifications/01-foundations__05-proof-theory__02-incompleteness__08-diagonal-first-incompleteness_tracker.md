# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/08-diagonal-first-incompleteness.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/08-diagonal-first-incompleteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Claim that PA+G is incomplete is not established by the stated hypotheses
- **Category:** Supplement/remark error
- **Location:** pt:first-incompleteness-extensions (remark 拡張についての注意)
- **Detail:** The remark says the proof only uses (a) Ax_T is Δ and (b) T ⊇ PA, and concludes that for any Δ-axiomatized extension T of PA the same theorem holds, giving PA+G as an example of an incomplete theory. But the first incompleteness theorem as proved requires consistency (and ω-consistency for the ¬G half). For T = PA+G, the theorem's conclusion 'T ⊬ G_T' needs Con(T); indeed if PA+G were inconsistent then it proves everything. The remark omits the consistency hypothesis, so 'PA+G is incomplete' is asserted without the needed hypothesis. (Also the Gödel sentence of PA+G is not literally G, though that is a minor point.)
- **Proposed fix:** State the extension with the consistency hypothesis: 'For any extension T of PA whose axioms are defined by a Δ formula, if T is consistent then T ⊬ G_T, and if T is ω-consistent then T ⊬ ¬G_T. In particular, if PA+G is consistent then it is incomplete (its Gödel sentence differs from G).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Imprecise claim that incompleteness first appears at the Π level
- **Category:** Supplement/remark error
- **Location:** remark ゲーデル文の形
- **Detail:** The remark says 'since all true Σ sentences are provable, incompleteness first appears at this "one level higher" complexity'. This is imprecise: Σ-completeness only says true Σ sentences are provable, not that every provable Σ sentence is true, and it does not by itself show PA is complete for Σ sentences (i.e., decides every Σ sentence). The correct statement is that a true Π sentence can fail to be provable (G is such), while true Σ sentences are always provable; it is not that incompleteness 'first appears' exactly at Π, since the remark gives no argument that PA decides all Σ sentences.
- **Proposed fix:** Replace with: 'Since Bew is Σ, G is equivalent to a Π sentence. By Σ-completeness every true Σ sentence is provable in PA, so a true Π sentence (namely G) can fail to be provable; this is where the incompleteness manifests.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck comment on ω-consistency and Rosser is slightly overstated
- **Category:** Supplement/remark error
- **Location:** pt:godel-first / hypcheck (ω 無矛盾性 bullet)
- **Detail:** The hypcheck says 'mere consistency alone cannot show PA ⊬ ¬G. Indeed if PA is consistent then PA+¬G is consistent (the contrapositive form of 1), but PA+¬G proves ¬G. Weakening this hypothesis to consistency is Rosser's theorem.' The claim that consistency alone cannot yield PA ⊬ ¬G is correct, but the justification given is muddled: the consistency of PA+¬G shows only that ¬G is not refuted by consistency, not that PA ⊬ ¬G. The sentence 'this hypothesis cannot be weakened to consistency' is correct only in the sense that the argument via ω-consistency does not go through; Rosser's theorem uses a different sentence, not G. As written it can be read as claiming Rosser proves PA ⊬ ¬G for the same G, which is false (Rosser's sentence is different).
- **Proposed fix:** Rewrite: 'Step 2 uses ω-consistency. With mere consistency the argument fails, and in fact PA ⊬ ¬G cannot be derived from Con(PA) alone by this route. Rosser's theorem replaces G by a different sentence R and shows, assuming only consistency, that neither R nor ¬R is provable.'
- **Reported:** 2026-10-28 (10fede1)
