# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/06-gauss-bonnet-global.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/06-gauss-bonnet-global.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine concerns are minor: the boundary Gauss-Bonnet formula in the supplement is stated without specifying interior vs exterior angles and orientation conventions, and the justification of the angle-sum fact is imprecise. The core theorem and proof (Steps 1–4) are sound, and the corollaries and problems check out. No serious logical gaps or missing hypotheses were found.

## Issues

### ISSUE-0001 [Open] Boundary Gauss-Bonnet sign/formula
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The stated boundary formula ∬K dA + ∫_{∂S} κ_g ds + Σα_j = 2πχ uses exterior angles α_j but omits that for a surface with boundary the correct formula is ∬K dA + ∫_{∂S} κ_g ds + Σ(π - interior angle) = 2πχ, i.e. the sum of exterior (turning) angles. As written with α_j undefined (exterior vs interior) it is imprecise; also the geodesic curvature term sign depends on orientation convention. This is a side comment stated without hypotheses (smooth boundary, corners).
- **Proposed fix:** State: for a compact oriented surface with piecewise smooth boundary, ∬_S K dA + ∫_{∂S} κ_g ds + Σ_j (π − β_j) = 2πχ, where β_j are the interior angles at the corners and κ_g is measured with respect to the inward orientation induced on ∂S.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Fact 6.4(2) angle sum needs flatness/local disk
- **Category:** Unsupported fact
- **Location:** surf:triangulation-facts item 2
- **Detail:** The claim that interior angles around each vertex sum to 2π is asserted for a triangulation of a curved surface. This is true only because each triangle's angle is measured intrinsically in the surface metric and the triangles around a vertex form a flat fan; but for a general curved surface the sum of the surface-interior angles around a vertex is 2π only if the vertex is not a cone point, which holds since the surface is smooth. The fact is acceptable but the parenthetical justification ('平面の扇形の並びと同じ') is imprecise: the angles are measured in the surface, not the plane. Not a serious error.
- **Proposed fix:** Clarify that angles are the intrinsic angles in S and that smoothness makes the total angle around each vertex exactly 2π.
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** Angles are measured in the surface (the page says the local picture around a vertex is that of a planar fan, i.e. in a chart); the fact is correct as stated.
