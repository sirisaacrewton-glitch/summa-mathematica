# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/03-analysis.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/03-analysis.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a faithful rendering of Boolos Chapter 14. The main theorem, the Π¹₁-completeness argument, the prewellordering fact, the simultaneous diagonalization lemmas and the embedding lemma are all logically coherent, and the hypcheck attributions of (P1)–(P4) match their actual uses. The only points worth flagging are minor imprecisions in side remarks: the justification that Θ is Π¹₁ is stated too loosely (an intersection of sets is not per se Π¹₁; the correct reason is the arithmetic nature of the closure condition), and I could not substantiate any genuine error in the hypcheck. No serious logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Claim that Θ is Π¹₁ via intersection of all closed sets
- **Category:** Supplement/remark error
- **Location:** pt:sec-ma-analysis (text after definition pt:an-omega)
- **Detail:** The text states 'Θ is the intersection of all sets satisfying an arithmetic condition (containing axioms, closed under rules), hence Π¹₁.' Being an intersection of Π¹₁-definable sets of reals is not automatically Π¹₁; the correct reason is that 'F is a theorem of An_ω' can be expressed as 'F belongs to every set of sentences that contains the axioms and is closed under the (arithmetic) rules and the ω-rule', and this universal second-order quantification over sets of naturals yields a Π¹₁ formula. The phrasing 'intersection ... hence Π¹₁' is imprecise but the conclusion is standard. This is borderline; the reasoning as stated ('intersection of all such sets is Π¹₁') is not literally valid without noting the defining condition is arithmetic.
- **Proposed fix:** Replace with: 'Θ is defined as the set of sentences belonging to every set X of sentences that contains the axioms of analysis and is closed under the logical rules and the ω-rule; since this condition on X is arithmetic, Θ is Π¹₁.'
- **Reported:** 2026-10-28 (8ccef3d)
