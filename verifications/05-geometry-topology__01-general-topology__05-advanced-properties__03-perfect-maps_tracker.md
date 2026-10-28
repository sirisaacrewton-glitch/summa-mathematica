# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/03-perfect-maps.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/03-perfect-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Proper maps and one-point compactification equivalence
- **Category:** Supplement/remark error
- **Location:** supplement, second paragraph (似た定理), last sentence
- **Detail:** The supplement claims that perfect maps correspond to 'proper maps' in the category of compact Hausdorff spaces, and that the property of \ref{top:perfect-compact-preimage} (properness) and its equivalence in locally compact spaces (\ref{top:prob-pm-lc-criterion}) can be rephrased as extendability to the one-point compactification. This is imprecise: a continuous map between locally compact Hausdorff spaces is proper (preimages of compact sets compact) iff it extends continuously to the one-point compactifications sending the point at infinity to the point at infinity. But the statement as written conflates 'perfect' (which requires closedness and compact fibers, and the target need not be Hausdorff in the definition given) with 'proper'. In particular, properness (compact-preimage) alone does not imply closedness without hypotheses (as problem 3.7 shows, one needs the target locally compact Hausdorff and the map to be a surjection onto it, plus X Hausdorff). The claim that these are 'rephrased as extendability to the one-point compactification' is stated too loosely and is not literally correct for perfect maps in general (which may have non-locally-compact targets).
- **Proposed fix:** Replace with: 'For a continuous map between locally compact Hausdorff spaces, properness (the property that preimages of compact sets are compact) is equivalent to extendability to a continuous map of the one-point compactifications fixing the point at infinity; combined with the criterion of \ref{top:prob-pm-lc-criterion}, this characterizes when such a map is perfect.'
- **Reported:** 2026-10-28 (8ccef3d)
