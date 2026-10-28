# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/07-completeness.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/07-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful and largely correct treatment of the completeness theorem via Henkin's method. The proofs (Henkin extension, Lindenbaum, term model, truth lemma, compactness, Löwenheim–Skolem) are logically sound and the citations match their targets. The main genuine problems are in the side remarks: the claim that first-order completeness is equivalent to the Boolean prime ideal theorem overstates the known result (it is strictly stronger than BPI), and the Skolem paradox remark's parenthetical about avoiding choice is not supported by the cited (choice-using) corollary. These are supplement/remark errors of kind 5.

## Issues

### ISSUE-0001 [Open] Completeness theorem is not equivalent to the Boolean prime ideal theorem
- **Category:** Supplement/remark error
- **Location:** logic:completeness-choice-remark
- **Detail:** The remark claims that the completeness theorem for arbitrary languages is equivalent (over ZF) to the Boolean prime ideal theorem (BPI). This is not correct as stated. The completeness theorem for arbitrary languages is equivalent to the *compactness* theorem, and the compactness theorem is strictly stronger than BPI: the compactness theorem for arbitrary languages implies BPI but is not provable from it (the compactness theorem is equivalent to the statement that every filter... more precisely, the compactness theorem for first-order logic is strictly stronger than BPI; BPI is equivalent to the completeness theorem only for languages of size at most... in fact BPI corresponds to compactness for propositional logic / Stone representation, while first-order compactness requires more). The standard result (Henkin, and later work) is that the first-order compactness theorem is not provable from BPI alone; it is equivalent to a stronger choice principle. So the attribution 'equivalent to BPI' is an overstatement.
- **Proposed fix:** The completeness theorem for arbitrary languages is equivalent (over ZF) to the compactness theorem for first-order logic, which is strictly stronger than the Boolean prime ideal theorem (BPI). BPI corresponds to the propositional case (Stone representation). The precise choice principle equivalent to first-order compactness is stronger than BPI.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Skolem paradox remark: 'this argument uses no choice' is imprecise
- **Category:** Supplement/remark error
- **Location:** logic:skolem-paradox
- **Detail:** The remark says the argument that ZFC has a countable model 'can be carried out without the axiom of choice'. But the downward Löwenheim–Skolem corollary cited (logic:ls-downward-weak) is proved via the model existence theorem, whose proof uses the axiom of choice (Lindenbaum via Zorn, cardinal estimates). The parenthetical claim that 'this discussion itself can be done without choice' is therefore not justified by the cited result; the countable-language case does avoid choice only via the König's lemma alternative proof, which is not what is cited here.
- **Proposed fix:** Replace the parenthetical with: '(for a countable language this can be done without the axiom of choice, via the alternative proof using König's lemma; see \ref{logic:completeness-via-konig})'.
- **Reported:** 2026-10-28 (8ccef3d)
