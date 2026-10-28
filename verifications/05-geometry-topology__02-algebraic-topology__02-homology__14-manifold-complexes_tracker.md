# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/14-manifold-complexes.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/14-manifold-complexes.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well-organized. The most serious genuine error is in the CW remark: the dunce hat's non-manifold point is the 0-cell, not a point on the 1-cell, and the 'three-page book' description of the 1-cell neighborhood is wrong (the 2-cell wraps once, giving a disk). A secondary issue is the hypcheck in at:link-local-homology claiming locally finite complexes reduce to finite stars, which is false since a simplex can have infinitely many cofaces in a locally finite complex. The stated facts about the Poincaré sphere, double suspension, and Manolescu are essentially correct. No previously reported issues exist.

## Issues

### ISSUE-0001 [Open] Dunce hat is not a manifold, but the stated reason (three-page-book shape) is wrong
- **Category:** Supplement/remark error
- **Location:** remark (CW 複体の場合 section)
- **Detail:** The remark claims that in the dunce hat (one 0-cell, one 1-cell a, one 2-cell attached by aaa^{-1}), the neighborhood of a point on the 1-cell 'has the same shape as the three-page book' and hence is not a manifold. This is false. In the dunce hat the 2-cell is attached along a closed loop that traverses the 1-cell three times, but the attaching map is a degree-1 map onto the 1-cell (the word aaa^{-1} is homotopic to a), so the 2-cell wraps once around the 1-cell. A point in the interior of the 1-cell has a neighborhood homeomorphic to R^2 (a half-disk from the 2-cell glued to a half-disk, giving a full disk), not a three-page book. The three-page book arises from three distinct 2-cells sharing an edge, which is not the case here. The dunce hat is indeed not a manifold, but the non-manifold points are the 0-cell (the vertex), whose link is not a circle; the interior points of the 1-cell are manifold points.
- **Proposed fix:** Replace the sentence with: 'For example, the dunce hat (one 0-cell, one 1-cell a, one 2-cell attached by the word aaa^{-1}) is contractible but not a manifold: at the 0-cell the link is not a circle (the three occurrences of a make the link a single edge traversed with identifications, giving a non-manifold point), so it is not a manifold.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Suspension of Poincaré sphere is a homology 4-manifold but the link argument via three-manifold-complex is misapplied
- **Category:** Unsupported fact
- **Location:** fact 14.20, item 2
- **Detail:** The fact claims that for the suspension Sigma P, links of simplices containing a suspension vertex are P or links in P (spheres by theorem 14.17), and other links are suspensions of spheres, 'all homology spheres', hence Sigma P is a homology 4-manifold. But theorem 14.17 (at:three-manifold-complex) is an iff criterion for a complex to be a 3-manifold, and it requires ALL vertex links to be S^2; it does not by itself say that links of simplices in a triangulated 3-manifold are spheres. More importantly, the claim that Sigma P is a homology 4-manifold is correct (double suspension is needed for the manifold structure, single suspension is only a homology manifold), but the justification 'links are homology spheres' must use the homology-sphere property (reduced homology of S^{k}), not homeomorphism to spheres. The text conflates 'homology sphere' with 'sphere' when invoking theorem 14.17, which gives homeomorphism to S^2, not just homology. For the single suspension to be a homology manifold one only needs the links to be homology spheres, which holds, but citing 14.17 (a homeomorphism criterion) overstates what is available for links in P.
- **Proposed fix:** State instead: 'For the suspension Sigma P, the link of a simplex not containing a suspension vertex is the suspension of the corresponding link in P, and the link of a simplex containing exactly one suspension vertex is the corresponding link in P; since P is a 3-manifold, links in P are homology 2-spheres (by \ref{at:manifold-link-conditions}.1), and suspensions of homology spheres are homology spheres, so all links are homology spheres and Sigma P is a homology 4-manifold.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck claim that locally finite complexes reduce to finite stars in link-local-homology
- **Category:** Supplement/remark error
- **Location:** at:link-local-homology, hypcheck
- **Detail:** The hypcheck says 'for locally finite complexes, Step 1 reduces to the star (a finite subcomplex) so the same conclusion holds.' But Step 1 uses at:local-homology-open-nbhd, which requires the open set U = intersection of st v over v in sigma; for a locally finite complex this is still open, and the star of a simplex is finite (a simplex has finitely many cofaces in a locally finite complex? No — in a locally finite complex, a simplex can have infinitely many cofaces, e.g., infinitely many triangles sharing an edge). So the star is NOT necessarily finite, and the reduction to a finite subcomplex fails. The claim that the result extends to locally finite complexes via 'finite star' is false in general; the star of a simplex in a locally finite complex can be infinite. The conclusion may still hold but not by this argument.
- **Proposed fix:** Remove the claim or replace with: 'For locally finite complexes the same argument works provided one uses that the open star is open and applies the local homology neighborhood lemma directly; the star need not be finite, so the reduction to a finite subcomplex is not valid in general.'
- **Reported:** 2026-10-28 (8ccef3d)
