# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/05-rational-maps.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/05-rational-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions, theorem, corollary, proofs) is logically sound: the anti-equivalence, the agreement lemma, and the birational equivalence corollary are correctly argued, and citations match their targets. The genuine problems concentrate in the supplement and remark: the Lüroth statement omits the finite-generation hypothesis, the Zariski example overstates 'positive characteristic' (needs non-perfect field), the historical attributions are lumped with a single year, the curve-model uniqueness is stated without 'up to isomorphism', and the Cremona example misdescribes which loci collapse. These are all fixable by tightening the statements.

## Issues

### ISSUE-0001 [Open] Lüroth's theorem statement uses k ⊊ L ⊂ k(t) without requiring L/k finitely generated / k algebraically closed
- **Category:** Supplement/remark error
- **Location:** supplement (リュロートの定理)
- **Detail:** The supplement states Lüroth's theorem as: if $k\subsetneq L\subset k(t)$ then $L\cong k(s)$. As stated this is not correct in full generality: the standard Lüroth theorem requires $L/k$ to be finitely generated (or equivalently $L$ is the function field of a curve, i.e. $\operatorname{trdeg}_{k}L=1$ with $L/k$ finitely generated). Without that hypothesis the claim can fail (e.g. over a non-perfect field, or for subfields that are not finitely generated). The subsequent sentence 'therefore a curve dominated by a rational curve is rational' implicitly uses the finitely generated case, but the displayed statement is stronger than the literature supports.
- **Proposed fix:** State it as: **Lüroth's theorem**: let $k$ be a field and $L$ a subfield with $k\subsetneq L\subset k(t)$ and $L/k$ finitely generated (equivalently $\operatorname{trdeg}_{k}L=1$). Then $L=k(s)$ for some $s$. Consequently a curve that is the image of a dominant rational map from a rational curve is rational.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Zariski's example: 'positive characteristic' alone is insufficient; needs non-perfect / specific conditions
- **Category:** Supplement/remark error
- **Location:** supplement (ザリスキの例)
- **Detail:** The supplement says 'in positive characteristic there exist unirational but not rational surfaces'. Zariski's examples of unirational non-rational surfaces require more than just positive characteristic (they are over non-perfect fields / specific constructions). Over an algebraically closed field of positive characteristic, unirational surfaces are rational (the Castelnuovo-type statement holds for surfaces over algebraically closed fields in any characteristic). So the bare phrase 'in positive characteristic' is imprecise and can be read as false.
- **Proposed fix:** Replace with: **Zariski's example**: over a non-perfect field of positive characteristic there exist unirational but not rational surfaces. (Over an algebraically closed field, unirational surfaces are rational in every characteristic.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Clemens–Griffiths / Iskovskikh–Manin / Artin–Mumford attribution lumped together with a single year
- **Category:** Supplement/remark error
- **Location:** supplement (カステルヌオーヴォの定理)
- **Detail:** The text lists 'Clemens–Griffiths, Iskovskikh–Manin, Artin–Mumford, 1972' as if a single joint result with one date. These are distinct results: Clemens–Griffiths (cubic threefolds, 1972), Iskovskikh–Manin (quartic threefolds, 1971), Artin–Mumford (1972). Presenting them as one 1972 attribution is a misattribution of dates/authors.
- **Proposed fix:** Replace with: '...there exist unirational but not rational varieties of dimension $\ge 3$ (Artin–Mumford 1972; Clemens–Griffiths 1972 for cubic threefolds; Iskovskikh–Manin 1971 for quartic threefolds).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Remark: 'each birational class of curves has a unique nonsingular projective model' — uniqueness only up to isomorphism, and existence needs quasi-projective
- **Category:** Supplement/remark error
- **Location:** remark 「ほとんどどこでも」の幾何
- **Detail:** The remark says 'for curves, each birational class has exactly one nonsingular projective model'. This is true only up to (unique) isomorphism; literally 'just one' is false since any curve is isomorphic to many models. Also the statement presupposes the curve is a variety (quasi-projective) so that smooth projective models exist. The claim as worded ('ただ一つの') is overstated.
- **Proposed fix:** Replace with: 'For curves, each birational class contains a nonsingular projective model, unique up to isomorphism.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] Example 4 (Cremona): 'collapses the three coordinate lines to three points' is imprecise
- **Category:** Supplement/remark error
- **Location:** ag:birational-examples / item 4
- **Detail:** The map $(x:y:z)\mapsto(yz:xz:xy)$ is undefined exactly at the three coordinate points $(1:0:0),(0:1:0),(0:0:1)$ (where two coordinates vanish), not on the three coordinate lines. On a coordinate line such as $z=0$ with $x,y\neq0$, the image is $(0:0:xy)=(0:0:1)$, so the line (minus its two coordinate points) maps to a single point. The phrase '3 本の座標直線を 3 点に潰す' (collapses the three coordinate lines to three points) is thus imprecise: each coordinate line (punctured) collapses to one point, and the map is undefined at the three coordinate points, not 'at 3 points' in the sense of the lines. The parenthetical '(射としては 3 点で定義されない)' is correct, but the preceding sentence misdescribes which sets collapse.
- **Proposed fix:** Replace with: 'Each coordinate line (with its two coordinate points removed) is mapped to a single point, and the map is undefined at the three coordinate points $(1:0:0),(0:1:0),(0:0:1)$; hence it is not an isomorphism on any open set.'
- **Reported:** 2026-10-28 (8ccef3d)
