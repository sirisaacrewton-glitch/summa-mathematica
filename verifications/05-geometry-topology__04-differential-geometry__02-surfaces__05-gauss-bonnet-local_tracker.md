# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/05-gauss-bonnet-local.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/05-gauss-bonnet-local.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (structure equation, geodesic curvature/frame rotation lemma, triangle turning lemma, local Gauss–Bonnet, geodesic triangle corollary) is logically sound. The serious problem is in the supplement: the statement that parallel transport around the boundary rotates tangent vectors by $\iint_{P}K\,dA$ is only true for geodesic polygons, not for a general triangle with curved edges; it must include the geodesic-curvature term. The digon problem's angle argument is acceptable.

## Issues

### ISSUE-0001 [Open] Parallel transport rotation equals ∫K dA is false in general
- **Category:** Supplement/remark error
- **Location:** supplement / 平行移動との関係
- **Detail:** The supplement claims that parallel transport around the boundary rotates tangent vectors by exactly $\iint_{P}K\,dA$. This is false: the holonomy angle equals $\iint_{P}K\,dA$ only when the boundary is a geodesic polygon (so the geodesic-curvature term vanishes). For a general triangle with curved edges, Gauss–Bonnet gives $\iint K\,dA = 2\pi - \sum\alpha_{j} - \sum\int\kappa_{g}\,ds$, and the parallel-transport rotation is $2\pi - \sum\alpha_{j} - \sum\int\kappa_{g}\,ds$ minus the turning contribution, i.e. it equals $\iint K\,dA$ only up to the geodesic-curvature integral. The cited problem \ref{surf:prob-gd-parallel-geodesic} concerns geodesics ($\kappa_{g}=0$), so it does not justify the general claim.
- **Proposed fix:** Replace with: "境界に沿って一周する平行移動は、接ベクトルを $\iint_{P}K\,dA+\sum_{j}\int\kappa_{g}\,ds$ だけ回す（本定理の証明から）。とくに辺が測地線（$\kappa_{g}=0$）の測地三角形では、回転角は $\iint_{P}K\,dA$ に等しい。球面の緯線に沿った平行移動の回転（\ref{surf:parallel-latitude}）はその例である。"
- **Reported:** 2026-10-28 (8ccef3d)
