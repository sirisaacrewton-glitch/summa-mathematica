# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/04-natural-deduction.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/04-natural-deduction.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main concerns are two imprecise claims in remark logic:nd-formulation-remark: the assertion that the sequent-style eigenvariable condition breaks under weakening (requiring renaming) is not accurate, and the claim that the choice of which occurrences to discharge never affects derivability needs the eigenvariable caveat. Proofs and examples checked appear sound.

## Issues

### ISSUE-0001 [Open] Weakening claim about sequent-style eigenvariable condition is wrong
- **Category:** Supplement/remark error
- **Location:** logic:nd-formulation-remark, first bullet
- **Detail:** The remark claims that in sequent form (Σ⊢ψ to Σ⊢∀xψ with condition 'x not free in Σ'), adding an extra formula to Σ during weakening can break the condition, so renaming of the eigenvariable is needed. This is false: if x∉FV(Σ) and Σ⊂Σ', adding formulas to Σ' can indeed introduce x, but the standard sequent rule is applied with the actual context Σ' at that point, and weakening is done before applying ∀I, not after. The condition 'x∉FV(Σ')' is checked for the context actually used, so no renaming is required; weakening preserves derivability because one weakens first and then applies ∀I with the enlarged context (whose eigenvariable condition is verified directly). The stated 'condition breaks and renaming is needed' is an overstatement/false claim.
- **Proposed fix:** Replace with: 'In sequent form the eigenvariable condition is stated as x∉FV(Σ) for the context Σ actually occurring at that point; weakening is applied before ∀I, and the condition is then checked for the enlarged context, so no renaming of the eigenvariable is needed.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that all-occasions discharge has no effect on derivability needs the eigenvariable caveat
- **Category:** Supplement/remark error
- **Location:** logic:nd-formulation-remark, third bullet
- **Detail:** The remark says discharging all occurrences of φ at →I versus marking individual occurrences 'does not affect what is derivable'. This is imprecise: with the eigenvariable condition imposed on A(D), the two formulations can differ in intermediate derivations (discharging fewer occurrences leaves more assumptions, which can block ∀I). The claim is only true at the level of the set of derivable sequents, not for every derivation, and the remark states it without this qualification.
- **Proposed fix:** Add: 'This holds at the level of the derivable sequents Σ⊢φ; individual derivations may differ, and discharging fewer occurrences can leave assumptions that block an application of ∀I.'
- **Reported:** 2026-10-28 (8ccef3d)
