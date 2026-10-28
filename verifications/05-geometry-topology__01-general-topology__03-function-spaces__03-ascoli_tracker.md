# Verification tracker: `05-geometry-topology/01-general-topology/03-function-spaces/03-ascoli.html`

<!-- source: 05-geometry-topology/01-general-topology/03-function-spaces/03-ascoli.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the corollary, and the problems are logically sound: the Ascoli–Arzelà equivalence is proved correctly, the classical corollary follows from Heine–Borel, and the counterexample x^n is handled properly. The only genuine issue is in the supplement: the claim that for non-compact X the same equivalence holds under the compact-open topology merely by assuming X locally compact (or a k-space) is overstated and lacks the necessary closedness/pointwise-compactness hypotheses; the reference to the general page does not justify the unqualified statement. The Peano remark is imprecise but not false enough to report.

## Issues

### ISSUE-0001 [Open] Locally compact / k-space claim for compact-open Ascoli needs extra hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that replacing the uniform topology by the compact-open topology and assuming X locally compact (or a k-space) gives the same equivalence. This is not correct as stated. For the compact-open topology on C(X,Y), relative compactness requires more than equicontinuity plus pointwise relative compactness: one needs, e.g., that the family be equicontinuous and that the pointwise closures be compact with the family pointwise relatively compact, and crucially the target/domain conditions must ensure the compact-open topology is the topology of uniform convergence on compacta and that the family is 'closed' enough. In particular, for locally compact X the standard Ascoli theorem requires the family to be equicontinuous and pointwise relatively compact AND that X be locally compact and the family be closed (or one works with the compact-open topology where the evaluation maps are continuous only under suitable conditions). The blanket statement 'the same equivalence holds for locally compact (or k-space) X' is overstated: for general locally compact X with the compact-open topology, equicontinuity + pointwise relative compactness does not by itself guarantee relative compactness unless additional hypotheses (e.g. the family is pointwise relatively compact and the space is a k-space with the compact-open topology coinciding with uniform convergence on compacta, plus closedness) are imposed. The reference to the general page does not justify the unqualified claim here.
- **Proposed fix:** Replace with: 'If X is not compact, the conclusion fails for the uniform topology (example given). If instead one uses the compact-open topology (uniform convergence on compacta) and assumes X is locally compact (or a k-space) and the family is equicontinuous and pointwise relatively compact, then the closure of the family is compact provided the family is also closed (or one passes to the closure); the precise statement and proof are given in \ref{top:page-ascoli-general}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Peano existence theorem attribution via Ascoli is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says the classical Ascoli–Arzelà theorem is used in the proof of Peano's existence theorem by extracting a uniformly convergent subsequence from approximate solutions. This is essentially correct, but the phrasing '\ref{top:ascoli-classical}' (which is stated for a compact domain X and requires uniform boundedness and equicontinuity) is applied without noting that the approximate solutions (Euler polygons) form a uniformly bounded and equicontinuous family on a compact interval, which is exactly the hypothesis needed. As stated it is not false, but it is imprecise about which hypotheses are verified. This is a minor imprecision rather than a genuine error; I would not report it as a hard error. (No report.)
- **Proposed fix:** Optionally add: 'the Euler polygons are uniformly bounded and uniformly Lipschitz, hence equicontinuous, so \ref{top:ascoli-classical} applies.'
- **Reported:** 2026-10-28 (10fede1)
