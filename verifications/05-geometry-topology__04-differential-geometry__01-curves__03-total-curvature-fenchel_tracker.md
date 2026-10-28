# Verification tracker: `05-geometry-topology/04-differential-geometry/01-curves/03-total-curvature-fenchel.html`

<!-- source: 05-geometry-topology/04-differential-geometry/01-curves/03-total-curvature-fenchel.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the spherical distance bound, Horn's lemma, the indicatrix-hemisphere lemma, Fenchel's theorem and the plane equality proposition) is logically sound and the citations match their targets. The genuine problems concentrate in the stated-only facts and the supplement: the Fenchel equality statement for R^n omits/obscures the rotation-number condition (a doubly-traced convex curve is a counterexample to the 'only if' as phrased), the Fáry–Milnor bound is stated non-strictly (should be >4π), the Gluck converse is loosely stated, and the description of Milnor's integral-geometry argument is imprecise about proportionality and the strictness of the inequality.

## Issues

### ISSUE-0001 [Open] Fenchel equality in R^n: 'convex in that plane' needs the rotation number condition and is imprecise for n>3
- **Category:** Supplement/remark error
- **Location:** surf:fenchel-equality-fary-milnor / item 1
- **Detail:** The fact states that κ_tot(c)=2π holds exactly when c lies in a plane and is convex (with rotation number ±1) in that plane. For a closed curve in R^n, lying in a plane and being convex does not by itself force κ_tot=2π: a convex plane curve traversed twice (e.g. a circle run around twice) is convex and planar but has κ_tot=4π. The parenthetical '(で回転数 ±1)' is ambiguous and, as written, the 'only if' direction is false without the rotation-number condition. Also for n≥3 a closed curve with κ_tot=2π must lie in a 2-plane, which is correct, but the statement should make the rotation-number requirement explicit rather than parenthetical.
- **Proposed fix:** κ_tot(c)=2π holds if and only if c lies in a 2-plane and, as a plane curve, is convex with rotation number n_c=±1 (equivalently, its signed curvature does not change sign and |n_c|=1).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Fáry–Milnor: '4π以上' should be strict '>4π' for a knotted curve
- **Category:** Supplement/remark error
- **Location:** surf:fenchel-equality-fary-milnor / item 2
- **Detail:** The Fáry–Milnor theorem states that a knotted simple closed curve has total curvature strictly greater than 4π. The equality κ_tot=4π is attained by unknotted curves (e.g. a doubly-traversed circle, or a curve on a round sphere), so '4π以上' (≥4π) is weaker than the true statement and is stated more weakly than the literature; more importantly the boundary case 4π is not knotted, so the correct claim is strict inequality.
- **Proposed fix:** If a simple closed curve in R^3 is knotted, then κ_tot(c) > 4π (strict inequality).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Four-vertex fact: Gluck converse condition misstated
- **Category:** Supplement/remark error
- **Location:** surf:four-vertex-simple
- **Detail:** The stated converse (Gluck) says a positive continuous periodic function that is constant, or has two maxima and two minima with max value greater than min value, is the curvature of a simple closed curve. As stated this is imprecise: the standard Gluck result requires the function to have at least two maxima and two minima (the 'two maxima and two minima' phrasing with strict max>min is a common but slightly loose rendering). More seriously, the claim that a *constant* positive curvature function gives a simple closed curve is trivially true (a circle), so including 'constant' is harmless, but the 'two maxima and two minima (max value greater than min value)' condition as written does not capture the precise hypothesis and could be read as sufficient in cases where it is not. This is a stated-only fact and should match the literature exactly.
- **Proposed fix:** Conversely (Gluck), any positive continuous periodic function that is either constant or has at least two local maxima and two local minima is the curvature of some simple closed plane curve.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Milnor's proof description: 'average number of maxima proportional to total curvature' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says Milnor's proof uses that 'the average over directions v of the number of maxima of the height function <c,v> is proportional to the total curvature (integral geometry), and for a knot at least 2 maxima are needed to get 4π.' The integral-geometry identity is that the average number of maxima equals (1/2π)∫κ ds = κ_tot/(2π) (Crofton-type formula), i.e. the average number of maxima equals κ_tot/(2π), not merely 'proportional'. Combined with 'at least 2 maxima for a knot' this gives κ_tot/(2π) ≥ 2, i.e. κ_tot ≥ 4π; but the strict inequality >4π requires that the set of directions with exactly 2 maxima has measure zero for a knot, which is the subtle point omitted. As stated the argument only yields ≥4π, not the strict Fáry–Milnor bound.
- **Proposed fix:** Milnor's proof uses the integral-geometry identity that the average over directions v of the number of maxima of the height function <c,v> equals κ_tot(c)/(2π). A knotted curve has at least 2 maxima for almost every direction, and the directions attaining exactly 2 maxima form a set of measure zero, so the average is strictly greater than 2, giving κ_tot(c) > 4π.
- **Reported:** 2026-10-28 (8ccef3d)
