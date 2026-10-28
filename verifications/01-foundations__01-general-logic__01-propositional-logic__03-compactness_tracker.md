# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/03-compactness.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/03-compactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall. The three proofs are correct: Proof 1 correctly uses completeness plus syntactic compactness; Proof 2 correctly builds the binary tree and applies König's lemma without choice, with the finite-PV case handled in the remark; Proof 3 correctly uses an ultrafilter and the induction on formulas. The de Bruijn–Erdős corollary and the two problems are correct. The only issues are minor imprecisions in the supplement: the identification of Cantor space compactness with the König's lemma of Proof 2 is loose, and the BPI equivalence is hedged as unverified (though true). No serious logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Cantor space compactness is not König's lemma
- **Category:** Supplement/remark error
- **Location:** supplement (位相的な見方)
- **Detail:** The supplement claims that when PV is countable, the compactness of {0,1}^ω (Cantor space) 'corresponds to' the König's lemma used in Proof 2. This is imprecise: compactness of Cantor space is equivalent to the statement that every infinite binary tree has an infinite branch (weak König's lemma), but Proof 2's use of König's lemma is applied to a specific tree T built from finite satisfiability, not to the compactness of the whole space. More importantly, the claim that 'the proof of compactness of Cantor space is König's lemma' conflates two distinct statements: compactness of {0,1}^ω is a topological fact provable in ZF, while König's lemma for arbitrary infinite binary trees is also provable in ZF, but the identification is loose. The statement is overstated/imprecise.
- **Proposed fix:** Replace with: 'When PV is countable, {0,1}^ω is Cantor space; its compactness is equivalent (over ZF) to the statement that every infinite binary tree has an infinite branch, which is exactly the form of König's lemma used in Proof 2.'
- **Reported:** 2026-10-28 (8ccef3d)
