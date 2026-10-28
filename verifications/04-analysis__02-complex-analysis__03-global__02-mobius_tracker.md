# Verification tracker: `04-analysis/02-complex-analysis/03-global/02-mobius.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/02-mobius.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Euclidean isometries of the plane misidentified
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says that in the Euclidean geometry case the isometries are 'those among $az+b$ with $|a|=1$'. But $\operatorname{Aut}(\C)=\{az+b\mid a\neq0\}$ consists of all complex-affine maps, and among these the Euclidean isometries are exactly $z\mapsto az+b$ with $|a|=1$ — that part is correct — yet the sentence as written attaches '$|a|=1$' to the automorphism group of the plane, which is wrong: $\operatorname{Aut}(\C)$ contains dilations $z\mapsto az$ with $|a|\neq1$, which are not Euclidean isometries. The claim conflates the full automorphism group with its isometry subgroup.
- **Proposed fix:** Rewrite: 'For the plane, the Euclidean isometries are the maps $z\mapsto az+b$ with $|a|=1$ (a proper subgroup of $\operatorname{Aut}(\C)=\{az+b\mid a\neq0\}$); for the disk, the hyperbolic isometries are $\operatorname{Aut}(\mathbb{D})$; for the sphere, the spherical (rotational) isometries form the subgroup $\mathrm{PSU}(2)\subset\mathrm{PGL}_{2}(\C)$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] PSL_2(R) is not the full isometry group of the hyperbolic plane
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement states that the automorphism group $\mathrm{PSL}_{2}(\R)$ 'is the orientation-preserving isometry group' of the hyperbolic plane. This is correct for orientation-preserving isometries, but the sentence '自己同型群 $\mathrm{PSL}_{2}(\R)$ はその向きを保つ等長変換群である' is fine; however the surrounding claim that 'the automorphism groups correspond to Euclidean/hyperbolic/spherical geometry' is imprecise because the full isometry group of $\mathbb{H}$ is $\mathrm{PSL}_{2}(\R)\rtimes\mathbb{Z}/2$ (including $z\mapsto-\bar z$), and the full isometry group of $\mathbb{D}$ includes anti-holomorphic maps. The identification of the automorphism group with the isometry group holds only after restricting to orientation-preserving (holomorphic) isometries.
- **Proposed fix:** State explicitly: '$\operatorname{Aut}(\mathbb{H})=\mathrm{PSL}_{2}(\R)$ is the group of orientation-preserving isometries of the hyperbolic plane; the full isometry group also contains the anti-holomorphic reflection $z\mapsto-\bar z$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Uniformization attribution to Riemann mapping theorem overstated
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says 'the plane, disk and sphere are, as will be seen later (the Riemann mapping theorem and the uniformization theorem), all simply connected Riemann surfaces.' The Riemann mapping theorem alone only concerns simply connected proper domains of $\C$; the classification of all simply connected Riemann surfaces (up to biholomorphism: sphere, plane, disk) is precisely the uniformization theorem. Attributing the classification jointly to 'the Riemann mapping theorem and the uniformization theorem' is acceptable, but the phrasing suggests the Riemann mapping theorem is needed for the sphere/plane cases, which it is not. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** Rewrite: 'By the uniformization theorem, every simply connected Riemann surface is biholomorphic to exactly one of $\widehat{\C}$, $\C$, or $\mathbb{D}$; the Riemann mapping theorem is the special case for simply connected proper domains of $\C$.'
- **Reported:** 2026-10-28 (8ccef3d)
