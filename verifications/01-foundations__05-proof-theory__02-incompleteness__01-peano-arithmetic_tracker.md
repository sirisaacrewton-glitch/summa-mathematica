# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/01-peano-arithmetic.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/01-peano-arithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definition of PA, the basic theorems (addition, multiplication, order, strong induction), the standard-part lemma, the Σ-upward theorem and Σ-completeness are all sound, and the hypchecks are accurate. The only genuine concern is in the closing supplement, where the analogy between Σ-upward preservation and set-theoretic upward absoluteness of Σ₁ formulas is overstated (the mechanisms differ: initial-segment property vs. transitivity, and the preservation here is only from the standard model). The Goldbach remark was checked and is essentially correct. No logical gaps, missing hypotheses, or improper links were found in the proofs.

## Issues

### ISSUE-0001 [Open] Σ-upward preservation is not the same as set-theoretic upward absoluteness
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement claims that \ref{pt:sigma-upward} (Σ formulas preserved from the standard model $\mathcal{N}$ to an arbitrary model $\mathcal{M}$ via the embedding $d$) is 'the same form' as the set-theoretic absoluteness of Σ₁ formulas under extensions of transitive structures. These are different phenomena. Set-theoretic upward absoluteness of Σ₀/Σ₁ formulas holds for *all* Σ₁ formulas and relies on transitivity (bounded quantifiers range over the same set). Here the preservation is only from the standard model to its end-extension, and crucially it *fails* for unbounded $\forall$ but also the mechanism is the initial-segment property (\ref{pt:standard-part.4}), not transitivity. Moreover the claim 'bounded quantifiers only inspect the already visible range, so truth is not lost when the structure is enlarged' is imprecise: in a general (non-end-)extension bounded quantifiers can change meaning. The analogy is overstated.
- **Proposed fix:** Replace with: 'This is analogous to (but not identical with) the upward absoluteness of Σ₁ formulas between transitive structures in set theory: there transitivity guarantees that bounded quantifiers range over the same elements, whereas here the corresponding role is played by the fact that the standard part is an initial segment (\ref{pt:standard-part.4}). In both cases the point is that an existential witness found in the smaller structure survives in the larger one, while an unbounded universal quantifier can be falsified by newly added elements.'
- **Reported:** 2026-10-28 (8ccef3d)
