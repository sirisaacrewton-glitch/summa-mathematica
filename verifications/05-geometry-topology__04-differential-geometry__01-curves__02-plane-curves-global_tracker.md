# Verification tracker: `05-geometry-topology/04-differential-geometry/01-curves/02-plane-curves-global.html`

<!-- source: 05-geometry-topology/04-differential-geometry/01-curves/02-plane-curves-global.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is the supplement's formula for piecewise-smooth simple closed curves, which needs the signed exterior angle (allowing $\pm\pi$) rather than an angle in $(-\pi,\pi)$; the convex-polygon remark is then a special case. The Whitney–Graustein remark and the limacon vertex count are correct. The hypcheck comment on compactness in the lifting lemma is imprecise but its conclusion is true.

## Issues

### ISSUE-0001 [Open] Incorrect formula for piecewise-smooth turning tangents
- **Category:** Supplement/remark error
- **Location:** supplement (一般化) after surf:total-curvature-simple
- **Detail:** The supplement states that for a piecewise smooth simple closed curve, adding exterior angles $\alpha_{j}\in(-\pi,\pi)$ gives $\sum_{j}\int\kappa\,ds+\sum_{j}\alpha_{j}=\pm2\pi$. This is wrong: the turning of the tangent at a corner is the *signed* angle between the incoming and outgoing tangent vectors, which lies in $(-\pi,\pi)$ only when the corner is not a cusp/reversal; more importantly, the total turning is $\pm2\pi$ only when the signed exterior angles are used with the correct sign convention, and the stated range $(-\pi,\pi)$ fails for a curve with a sharp spike where the tangent reverses (the signed turn is $\pm\pi$, not in the open interval). Also the claim that 'for a convex polygon $\kappa=0$ so the sum of exterior angles is $2\pi$' is only true for the *signed* exterior angles summing to $2\pi$ with the correct orientation; as stated with $\alpha_{j}\in(-\pi,\pi)$ it is fine for convex polygons but the general formula needs the signed turn, which can equal $\pm\pi$.
- **Proposed fix:** State: for a piecewise $C^{2}$ simple closed curve with corner tangent directions $e_{1}^{-}(t_{j}),e_{1}^{+}(t_{j})$, let $\alpha_{j}\in(-\pi,\pi]$ be the signed angle from $e_{1}^{-}(t_{j})$ to $e_{1}^{+}(t_{j})$ (with $\alpha_{j}=\pi$ allowed when the tangent reverses). Then $\sum_{j}\int\kappa\,ds+\sum_{j}\alpha_{j}=\pm2\pi$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Whitney–Graustein attribution and statement
- **Category:** Unsupported fact
- **Location:** supplement (類似の定理)
- **Detail:** The supplement says 'conversely two regular closed curves with equal rotation number can be deformed into each other through regular closed curves (known as the Whitney–Graustein theorem)'. The Whitney–Graustein theorem classifies regular closed curves up to regular homotopy by their rotation number, which is correct, but the statement as written omits that the curves must be *immersed* (regular) closed curves and that the homotopy is through immersions; more seriously, the phrase '回転数の等しい二つの正則閉曲線は正則なまま変形し合える' is true for the rotation number as the complete invariant, which is indeed the Whitney–Graustein theorem. This is essentially correct, so no error.
- **Proposed fix:** No change needed; the statement matches Whitney–Graustein.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck claim that compactness is inessential
- **Category:** Supplement/remark error
- **Location:** surf:angle-lifting / hypcheck
- **Detail:** The hypcheck says compactness is 'not essential' and sketches an argument for open convex sets. The sketch is essentially correct (one can choose $\delta$ locally and patch), but the claim as stated ('開集合のような凸集合でも...同じ議論が通る') is imprecise: the lifting exists for any convex set, compact or not, which is true. However the specific reduction given ('$x$ の近くの $y$ と $x_{0}$ を結ぶ線分の和は...コンパクト') is not a complete argument for all of $K$ at once; it only gives local uniform continuity. Since the conclusion (lifting exists on any convex set) is true, this is at most imprecise, not false.
- **Proposed fix:** Replace with: 'Compactness is used only to get uniform continuity; for a general convex set one argues locally: every point has a neighborhood on which $e$ is uniformly continuous, and the construction of Step 3–4 is local, so the lifting exists on any convex set.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Four-vertex hypcheck: limacon vertex count
- **Category:** Supplement/remark error
- **Location:** surf:four-vertex / hypcheck
- **Detail:** The hypcheck states that for the limacon $\kappa=(9+6\cos t)/(5+4\cos t)^{3/2}$ has extrema only when $\sin t=0$, hence exactly 2 vertices. Computing $\kappa'$: the numerator derivative gives a condition that is not simply $\sin t=0$; in fact $\kappa'(t)=0$ requires $\sin t\,(\text{something})=0$, and the 'something' can vanish. Let us check: $\kappa = N D^{-3/2}$ with $N=9+6\cos t$, $D=5+4\cos t$. $\kappa' = (-6\sin t)D^{-3/2} - \tfrac32 N D^{-5/2}(-4\sin t) = \sin t\, D^{-5/2}[-6D+6N] = \sin t\,D^{-5/2}\cdot 6(N-D) = \sin t\,D^{-5/2}\cdot 6(4+2\cos t)$. Since $4+2\cos t>0$, indeed $\kappa'=0\iff\sin t=0$. So the claim is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
