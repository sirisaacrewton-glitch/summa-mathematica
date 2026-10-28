# Verification tracker: `05-geometry-topology/01-general-topology/03-function-spaces/03-ascoli.html`

<!-- source: 05-geometry-topology/01-general-topology/03-function-spaces/03-ascoli.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the classical corollary, and the worked problems are logically sound; the equicontinuity definition, the uniform-equicontinuity lemma, and the hypcheck are correct. The one genuine problem is in the supplement: the claim that for non-compact locally compact (or k-) spaces the same equivalence holds in the compact-open topology is false as stated, since equicontinuity plus pointwise relative compactness does not yield relative compactness (counterexample f_n(x)=x+n on R). The Peano-application remark is acceptable.

## Issues

### ISSUE-0001 [Open] Non-compact X: equicontinuous + pointwise bounded does not give relative compactness in compact-open topology without extra hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that when X is locally compact (or a k-space), replacing the uniform topology by the compact-open topology gives the same equivalence (Ascoli). This is false as stated. The compact-open topology is not even metrizable in general, and relative compactness requires more than equicontinuity plus pointwise relative compactness. For example, on X = R with the compact-open topology, the family f_n(x) = x + n (or f_n(x) = n) is equicontinuous and pointwise relatively compact (each F(x) is a single point or a translate), yet {f_n} has no compact closure in C(R,R) with the compact-open topology, since on the compact set [0,1] the values f_n grow without bound and no subsequence converges uniformly. The general Ascoli theorem for locally compact X requires the family to be pointwise relatively compact AND the topology to be the compact-open one with additional tightness/even continuity conditions; the naive equivalence fails. The cited page top:page-ascoli-general presumably states the correct hypotheses, but the supplement's summary is overstated.
- **Proposed fix:** Replace with: 'When X is not compact, the conclusion fails for the uniform topology. If instead one uses the compact-open topology and X is locally compact (or a k-space), a correct general Ascoli theorem requires, in addition to equicontinuity and pointwise relative compactness, that the family be closed under the appropriate limit (or that one works with a suitable even-continuity/closedness condition); equicontinuity plus pointwise relative compactness alone does not suffice (e.g. f_n(x)=x+n on R is equicontinuous and pointwise relatively compact but has no compact closure in the compact-open topology). See \ref{top:page-ascoli-general} for the precise statement.'
- **Reported:** 2026-10-28 (8ccef3d)
