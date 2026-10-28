# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/13-hoare-logic.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/13-hoare-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the soundness proof, the wlp lemmas, and Cook's relative completeness proof are logically sound, and the assignment axiom with the existentially quantified fresh variable is handled correctly via the cited substitution and coincidence lemmas. The main genuine problem is a misattribution in the hypcheck: the existence of valid-but-unprovable triples for non-expressive structures is attributed to Wand (1978), whose incompleteness result concerns a different phenomenon (expressive assertion language but mismatch with the programming language). The remaining side remarks (intuition about PDL correspondence, the definability fact in the non-expressiveness problem) are correctly scoped. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Wand attribution for incompleteness example
- **Category:** Supplement/remark error
- **Location:** hypcheck (logic:cook-completeness) / first bullet
- **Detail:** The hypcheck says that for a non-expressive structure there are valid but unprovable triples, citing Wand, *A new incompleteness result for Hoare's system*, J. ACM 25 (1978). Wand's paper concerns a different phenomenon: it shows incompleteness of Hoare's system (with the usual assignment axiom and first-order assertions) even for a language/structure where the assertion language is expressive, arising from the mismatch between the assertion language and the programming language (e.g. aliasing/arrays or the assertion language being unable to express the needed invariants). The standard reference for 'valid but unprovable triples exist when the structure is not expressive' is Cook's relative completeness theorem (Cook 1978), which shows expressiveness is sufficient; the failure without expressiveness is the contrapositive/standard remark, not Wand's result. Attributing the non-expressive-structure example to Wand is a misattribution.
- **Proposed fix:** Replace with: "最弱事前条件が論理式で書けない構造では、表現性を欠くためクックの相対完全性の証明は通用せず、実際に妥当だが導けない三つ組が存在しうる（クックの定理の表現性の仮定は本質的である）。" Remove the Wand citation, or if a citation is desired, cite Cook (1978) for the necessity of expressiveness rather than Wand.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim about definable subsets of (N,0,S) needs the right qualification
- **Category:** Unsupported fact
- **Location:** problem logic:prob-hoare-not-expressive / solution
- **Detail:** The solution invokes the fact that subsets of N definable in (N,0,S) are finite or cofinite. This is correct for the structure with only 0 and S (no order, no addition), and the parenthetical acknowledges it is not proved here. However the statement as used ('定義できる N の部分集合は有限集合か補有限集合に限られる') is only true because the language has no < or +; with the standard language including <, the set of evens is definable. The problem statement does restrict the language to {0,S}, so the fact is correctly scoped. No error, but the solution's phrase 'x の値が偶数 2k なら k 周で止まり' implicitly uses that x is a standard numeral value; this is fine since states assign natural numbers. No genuine issue.
- **Proposed fix:** No change needed; optionally clarify that the definability fact relies on the language having only 0 and S (no order or addition).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Intuition: wlp(P,·) as [R_P] and while rule as PDL induction
- **Category:** Supplement/remark error
- **Location:** intuition block
- **Detail:** The intuition states wlp(P,ψ) = [R_P]⟦ψ⟧ and that the while rule corresponds to PDL's induction axiom, and that wlp's while property is the fixed-point property of [α*]. These are correct: wlp is the box modality for the relation R_P, and the while rule is indeed the Hoare analogue of the PDL induction/fixed-point axiom for iteration. The pointer to logic:pdl-to-mu-correct is used only via \ref for the meaning [R_α], which that theorem does establish. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
