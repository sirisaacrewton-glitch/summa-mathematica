# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/02-natural-deduction-completeness.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/02-natural-deduction-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kalmár's method is not fully mechanical / decision procedure claim
- **Category:** Supplement/remark error
- **Location:** supplement (二つの方法の比較)
- **Detail:** The supplement says the Lindenbaum method is non-constructive because it involves deciding 'whether it is contradictory', and contrasts it with Kalmár's method being 'completely mechanical'. This is imprecise: the Lindenbaum construction for countable PV is itself effective given a decision procedure for consistency (which exists for propositional logic via truth tables), so calling it non-constructive while calling Kalmár's method 'completely mechanical' overstates the contrast. Both rely on the same decidability of propositional consequence. The claim that the Lindenbaum method is 'non-constructive' is only accurate in the general (uncountable PV, Zorn) case.
- **Proposed fix:** Restrict the non-constructive remark to the general case: 'In the countable case the Lindenbaum extension is effective; in the general case (uncountable PV) it uses Zorn's lemma and is non-constructive. Kalmár's method, by contrast, gives an explicit derivation built from the truth table, though of exponential size.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] First-order completeness described as Lindenbaum extension with only Henkin axioms added
- **Category:** Supplement/remark error
- **Location:** supplement (一階述語論理へ)
- **Detail:** The supplement states that the first-order completeness theorem 'is an extension of the Lindenbaum method, the only new point being the addition of Henkin axioms for quantifiers'. This understates the difference: first-order completeness additionally requires extending the language with Henkin constants (witnesses) and proving the term model/term interpretation satisfies the Henkin axioms, which is a substantial new ingredient beyond merely 'adding Henkin axioms'. Calling it 'only' this is an overstatement.
- **Proposed fix:** Replace with: 'The first-order completeness theorem extends the Lindenbaum method; the genuinely new ingredients are the addition of Henkin (witness) axioms together with an expansion of the language by Henkin constants, and the construction of the term model.'
- **Reported:** 2026-10-28 (10fede1)
