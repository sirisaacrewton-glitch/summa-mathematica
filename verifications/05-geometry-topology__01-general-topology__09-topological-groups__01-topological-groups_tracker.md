# Verification tracker: `05-geometry-topology/01-general-topology/09-topological-groups/01-topological-groups.html`

<!-- source: 05-geometry-topology/01-general-topology/09-topological-groups/01-topological-groups.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions, theorem on cosets/quotient groups, separation theorem, and the two problems) is logically sound: citations match their targets, the hypcheck correctly notes that openness of the projection is what makes $\pi\times\pi$ a quotient map, and the separation proof correctly derives regularity and $T_0\Rightarrow$ Hausdorff. The genuine problem lies in the supplement: the Sorgenfrey-line example is misdescribed — the lower-limit topology makes addition discontinuous as a map on the product, so it is not a paratopological group with only the inverse failing. The Haar-measure sentence is essentially correct but imprecise about Radon measures and uniqueness; flagged at medium confidence.

## Issues

### ISSUE-0001 [Open] Lower-limit topology on R is not a semitopological group under addition
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that R with the lower-limit (Sorgenfrey) topology has continuous addition but discontinuous inverse. Addition is indeed continuous (it is continuous even jointly), but the claim that only the inverse fails is misleading: the Sorgenfrey line is not a paratopological group, because addition is not continuous as a map $\mathbb{R}\times\mathbb{R}\to\mathbb{R}$ when the domain carries the *product* of two Sorgenfrey topologies. The set $[0,1)$ is open, but its preimage under addition contains $(x,y)$ with $x+y<1$ and no product-basic rectangle $[a,b)\times[c,d)$ around such a point is contained in it (take $x'\uparrow b$, $y'\uparrow d$ with $x'+y'\ge 1$). So the example does not establish what is claimed (a semitopological/paratopological group where only inverse continuity fails).
- **Proposed fix:** Replace the example with a correct one, e.g.: 'たとえば、加法群 $\mathbb{R}$ に下限位相を入れると、逆元 $x\mapsto -x$ は連続でない（$[0,1)$ の逆像 $(-1,0]$ は開でない）。さらに加法 $\mathbb{R}\times\mathbb{R}\to\mathbb{R}$ も直積位相に関して連続でなく、これは準位相群にすらならない。' Or cite a genuine paratopological group that is not a topological group.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Haar measure existence needs local compactness; uniqueness needs more care
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The statement '局所コンパクトなハウスドルフ位相群には、平行移動で不変な測度（ハール測度）がただ一つ（定数倍を除いて）存在する' is essentially correct for the existence part (Haar's theorem), but the uniqueness 'up to constant multiple' requires the group to be locally compact Hausdorff (which is stated) — this is fine — yet the phrasing omits that the measure is a Radon (regular Borel) measure and that uniqueness holds among nonzero Radon measures. As stated it is acceptable but slightly imprecise; more importantly it is a stated-only fact with no proof and no citation. This is borderline; the main genuine error on the page is the Sorgenfrey claim above.
- **Proposed fix:** Make precise: '局所コンパクトハウスドルフ位相群には、左平行移動不変な非零ラドン測度（左ハール測度）が存在し、非零スカラー倍を除いて一意である。'
- **Reported:** 2026-10-28 (8ccef3d)
