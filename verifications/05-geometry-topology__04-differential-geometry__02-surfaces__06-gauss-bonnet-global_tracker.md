# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/06-gauss-bonnet-global.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/06-gauss-bonnet-global.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main theorem and its proof are logically sound: the local Gauss-Bonnet is summed, edge geodesic-curvature terms cancel by opposite orientation with the common normal N, angle counting uses Fact 6.4(2), and 3F=2E yields ∬K dA = 2πχ. The corollaries and problems are correct. The remaining genuine problems are in the supplement: the boundary Gauss-Bonnet formula (ISSUE-0001) is still imprecise about exterior vs interior angles and orientation conventions, and the topological-relationship paragraph overstates the K≡0 / K<0 conclusions without a connectedness hypothesis. ISSUE-0002 is correctly rebutted and should be closed.

## Issues

### ISSUE-0001 [Open] Boundary Gauss-Bonnet sign/formula
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The stated boundary formula ∬K dA + ∫_{∂S} κ_g ds + Σα_j = 2πχ uses exterior angles α_j but omits that for a surface with boundary the correct formula is ∬K dA + ∫_{∂S} κ_g ds + Σ(π - interior angle) = 2πχ, i.e. the sum of exterior (turning) angles. As written with α_j undefined (exterior vs interior) it is imprecise; also the geodesic curvature term sign depends on orientation convention. This is a side comment stated without hypotheses (smooth boundary, corners).
- **Proposed fix:** State: for a compact oriented surface with piecewise smooth boundary, ∬_S K dA + ∫_{∂S} κ_g ds + Σ_j (π − β_j) = 2πχ, where β_j are the interior angles at the corners and κ_g is measured with respect to the inward orientation induced on ∂S.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still writes the boundary formula with an undefined sum of exterior angles α_j and no hypotheses (smooth boundary, corners); the sign convention for κ_g is also unstated, so the imprecision remains.

### ISSUE-0002 [Ignored: Valid Rebuttal] Fact 6.4(2) angle sum needs flatness/local disk
- **Category:** Unsupported fact
- **Location:** surf:triangulation-facts item 2
- **Detail:** The claim that interior angles around each vertex sum to 2π is asserted for a triangulation of a curved surface. This is true only because each triangle's angle is measured intrinsically in the surface metric and the triangles around a vertex form a flat fan; but for a general curved surface the sum of the surface-interior angles around a vertex is 2π only if the vertex is not a cone point, which holds since the surface is smooth. The fact is acceptable but the parenthetical justification ('平面の扇形の並びと同じ') is imprecise: the angles are measured in the surface, not the plane. Not a serious error.
- **Proposed fix:** Clarify that angles are the intrinsic angles in S and that smoothness makes the total angle around each vertex exactly 2π.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: angles are measured intrinsically in the surface, and around a smooth vertex the fan is locally planar, so the sum is 2π; the fact is acceptable as stated.
**Opus Rebuttal:** Angles are measured in the surface (the page says the local picture around a vertex is that of a planar fan, i.e. in a chart); the fact is correct as stated.

### ISSUE-0003 [Open] K≡0 does not imply torus; K<0 does not imply genus ≥2
- **Category:** Supplement/remark error
- **Location:** supplement (位相との関係)
- **Detail:** The supplement claims: 'K>0 のコンパクトな曲面は球面と同相で、K≡0 ならトーラスと同相、K<0 なら種数 2 以上である'. The K>0 case is fine (χ>0 forces g=0). But K≡0 only gives χ=0, i.e. g=1 (torus) — that part is OK — yet the phrasing 'K<0 なら種数 2 以上' is false: K<0 everywhere gives χ<0, i.e. g≥2, which is correct, but the statement as written ('K<0') is ambiguous and, more importantly, the K≡0 ⇒ torus claim requires the surface to be connected and orientable (a disjoint union of two tori has K≡0 and χ=0 but is not a torus). Also 'K<0 なら種数2以上' fails for a disconnected surface. The claims need connectedness.
- **Proposed fix:** Restrict to connected surfaces: 'S を連結な向き付け可能コンパクト曲面とすると、K>0 なら S は球面と同相（g=0）、K≡0 なら S はトーラスと同相（g=1）、K<0 なら種数 g≥2 である。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0004 [Open] Gauss map degree statement needs immersion/nondegenerate hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says 'ガウス写像を使うと、R^3 の閉曲面では ∬K dA はガウス写像 N:S→S^2 の写像度の 4π 倍でもある'. The degree of the Gauss map is only defined when N is a map between closed oriented manifolds of the same dimension; here it is fine since both are surfaces, but the identity ∬K dA = 4π·deg(N) requires that K be the Jacobian of N (true by surf:gauss-map-area) and that the surface be closed and oriented. That is satisfied. However the phrase '閉曲面' should mean closed (compact without boundary) oriented surface; as stated it is acceptable. The real issue: the equality ∬K dA = 4π deg(N) is correct only when the Gauss map is taken with the outward orientation matching, which is implicit. This is a minor imprecision, not a serious error.
- **Proposed fix:** State explicitly: 'S を R^3 内の閉（コンパクト・境界なし）向き付け可能曲面とし、N を単位法ベクトル場とすると ∬_S K dA = 4π·deg(N) が成り立つ。'
- **Reported:** 2026-10-28 (048145a)
