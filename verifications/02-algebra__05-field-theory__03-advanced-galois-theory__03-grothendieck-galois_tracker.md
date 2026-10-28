# Verification tracker: `02-algebra/05-field-theory/03-advanced-galois-theory/03-grothendieck-galois.html`

<!-- source: 02-algebra/05-field-theory/03-advanced-galois-theory/03-grothendieck-galois.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Covering-space analogy: wrong category of π₁-sets and missing connectedness condition
- **Category:** Supplement/remark error
- **Location:** supplement (被覆空間との類似)
- **Detail:** The supplement states that for an arcwise connected, locally nice space X the category of covering spaces is equivalent to the category of sets acted on by π₁(X,x). This is imprecise: the correct statement is that the category of covering spaces of a connected, locally path-connected, semilocally simply connected space is equivalent to the category of (left) π₁(X,x)-sets, but only after restricting to the appropriate subcategory, and more importantly the equivalence is with the category of π₁-sets whose corresponding covering is connected only for transitive actions; the full category of covering spaces (including disconnected ones) corresponds to all π₁-sets, which is fine, but the standard statement requires the covering to be over a connected base and the functor is the fiber functor. The main genuine error is that the equivalence as stated (all covering spaces ↔ all π₁-sets) is correct only when one uses the fiber functor and the base is connected, locally path-connected and semilocally simply connected; the phrase 'locally nice' is vague but the substantive issue is that the correspondence 'fiber over the basepoint' gives an equivalence only for the category of covering spaces, which is correct. However, the claim that 'the Galois group is the fundamental group of the point' and the identification of Spec A → Spec K fiber with geometric points is a heuristic, not a precise statement, and is acceptable as intuition. The genuinely checkable error: the supplement says the category of covering spaces is equivalent to the category of π₁-sets — this is correct for connected, locally path-connected, semilocally simply connected X. So this is not clearly false.
- **Proposed fix:** No change needed; the statement is the standard classification of covering spaces for connected, locally path-connected, semilocally simply connected spaces.
- **Reported:** 2026-10-28 (10fede1)
