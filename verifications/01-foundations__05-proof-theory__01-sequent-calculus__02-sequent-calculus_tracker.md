# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/02-sequent-calculus.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/02-sequent-calculus.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the four structural lemmas, their proofs, the soundness proof, and the worked examples check out, and the citations match their targets. The only genuine issue found is an imprecise causal claim in the supplement/remark about why the principal formula is retained in L∀ (it is for height-preserving invertibility, not for contraction admissibility).

## Issues

### ISSUE-0001 [Open] L∀ kept principal formula and inversion
- **Category:** Supplement/remark error
- **Location:** pt:lk-formulation-remark / supplement 前提の検討
- **Detail:** The supplement claims that keeping the principal formula ∀x A in the premise of L∀ is what makes contraction admissible, and that without it L∀ would not be invertible. This is imprecise: in G3-style systems the principal formula is kept in L∀ precisely so that the rule is height-preserving invertible (inversion lemma item 4 is literally weakening), and contraction admissibility is a separate matter. The stated causal link (keeping the formula → contraction admissibility; dropping it → L∀ not invertible) is backwards/misleading.
- **Proposed fix:** Keeping the principal formula ∀x A in the premise of L∀ makes the rule height-preserving invertible (Lemma 2.10(4) is then just weakening); contraction admissibility is proved separately and does not depend on this choice.
- **Reported:** 2026-10-28 (8ccef3d)
