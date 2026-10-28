# Verification tracker: `05-geometry-topology/04-differential-geometry/01-curves/03-total-curvature-fenchel.html`

<!-- source: 05-geometry-topology/04-differential-geometry/01-curves/03-total-curvature-fenchel.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 8 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (Fenchel's theorem, Horn's lemma, the sphere-distance bound, and the plane equality proposition) is essentially sound. The previously reported issues all remain open: the Fáry–Milnor inequality is still non-strict, the equality-case parenthetical is still ambiguous, Gluck's converse still says 'two maxima and two minima' instead of 'at least two', the Milnor-proof sketch still omits the factor π and the almost-every-direction caveat, and Step 2 of the plane equality proposition still relies on regularity without saying so. New problems are concentrated in side material: the sphere-curve problem solution misleadingly suggests κ_tot can be below 2π, the hypcheck calls a doubly-traced circle 'convex' contrary to the page's definition of convex curve, and the knot definition in the Fáry–Milnor fact omits the ambient-homeomorphism requirement.

## Issues

### ISSUE-0001 [Open] Fary–Milnor stated with ≥ 4π instead of > 4π
- **Category:** Supplement/remark error
- **Location:** surf:fenchel-equality-fary-milnor / item 2
- **Detail:** The Fáry–Milnor theorem states that a knotted simple closed curve has total curvature strictly greater than 4π. Equality κ_tot = 4π is attained by unknotted curves (e.g. a doubly-traced circle, or a curve lying in a plane traversed twice), and more importantly the standard statement is strict: a knot cannot have total curvature exactly 4π. Stating '≥ 4π' is weaker than the true theorem and is imprecise; the strict inequality is the correct claim.
- **Proposed fix:** If a simple closed curve in R^3 is knotted (cannot be mapped to a circle by a homeomorphism of R^3), then its total curvature is strictly greater than 4π: κ_tot(c) > 4π.
- **Reported:** 2026-10-28 (aecb22d)
- **History:** 2026-10-28 (10fede1): Open — The fact still states Fáry–Milnor as '全曲率は $4\pi$ 以上である' (≥ 4π), whereas the correct statement is strict > 4π for a knotted curve; the text has not been changed.

### ISSUE-0002 [Open] Equality case in Fenchel stated without excluding the degenerate 'plane convex' reading
- **Category:** Supplement/remark error
- **Location:** surf:fenchel-equality-fary-milnor / item 1
- **Detail:** The statement 'κ_tot(c)=2π iff c lies in a plane and is convex there (with rotation number ±1)' is correct, but the parenthetical '(で回転数 ±1)' is essential and must not be read as optional: a plane convex curve traversed twice has κ_tot = 4π, so convexity alone does not give equality. As written the phrase is ambiguous about whether the rotation-number condition is part of the hypothesis. This is a precision issue in a stated-only fact.
- **Proposed fix:** For a closed curve in R^n, κ_tot(c) = 2π holds if and only if c is contained in a plane, is convex in that plane, and has rotation number ±1 (the rotation-number condition is essential: a convex plane curve traversed twice has total curvature 4π).
- **Reported:** 2026-10-28 (aecb22d)
- **History:** 2026-10-28 (10fede1): Open — Item 1 still reads '平面で凸（で回転数 $\pm1$）' with the rotation-number condition in a parenthetical, so the ambiguity about whether it is part of the hypothesis remains.

### ISSUE-0003 [Open] Gluck converse misstated (condition on extrema)
- **Category:** Supplement/remark error
- **Location:** surf:four-vertex-simple
- **Detail:** The stated converse (Gluck) says a positive continuous periodic function that is constant, or has two maxima and two minima with max value > min value, is the curvature of some simple closed curve. The precise Gluck condition is that the function be either constant or have at least two local maxima and at least two local minima (with the maximum value exceeding the minimum value); the phrasing 'exactly two maxima and two minima' is too restrictive/imprecise and the 'at least' quantifier matters. Also the attribution to Klingenberg 2.4.6 should be checked, but the main issue is the quantifier.
- **Proposed fix:** Conversely (Gluck), a positive continuous periodic function is the curvature of some simple closed plane curve if it is constant, or if it has at least two local maxima and at least two local minima with the maximum value strictly larger than the minimum value.
- **Reported:** 2026-10-28 (aecb22d)
- **History:** 2026-10-28 (10fede1): Open — The four-vertex fact still says '二つの極大と二つの極小' (exactly two maxima and two minima), not Gluck's 'at least two maxima and at least two minima'; unchanged.

### ISSUE-0004 [Open] Milnor's proof description: 'at least 2 maxima for knots' gives 4π only via the average count
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says Milnor's proof uses that the average over directions of the number of maxima of the height function ⟨c,v⟩ is proportional to total curvature, and that for a knot at least 2 maxima are needed, yielding 4π. The logic as stated is imprecise: the correct argument is that for almost every direction the height function has at least two maxima (for a knot), so the average number of maxima is ≥ 2, and Crofton-type integral geometry gives κ_tot = π × (average number of maxima). The sentence omits the factor π and the 'almost every direction' caveat, so 'proportional' plus 'at least 2' does not by itself give 4π.
- **Proposed fix:** In Milnor's proof, for almost every direction v the height function ⟨c,v⟩ has at least two local maxima when c is knotted; integral geometry gives κ_tot(c) = π · (average over v of the number of maxima of ⟨c,v⟩), so the average being ≥ 2 yields κ_tot ≥ 2π·2 = 4π (strictly, > 4π for genuine knots).
- **Reported:** 2026-10-28 (aecb22d)
- **History:** 2026-10-28 (10fede1): Open — The supplement still says only that the average number of maxima is 'proportional' to total curvature and that a knot needs at least 2 maxima, giving 4π, without the factor π or the 'almost every direction' caveat; unchanged.

### ISSUE-0005 [Open] Claim that a closed curve with constant tangent has ∫c'=0 contradiction is fine, but Step 2's 'no closed curve with constant e_1' needs regularity
- **Category:** Unsupported fact
- **Location:** surf:plane-fenchel-equality / Step 2
- **Detail:** Step 2 concludes that if e_1 is constant then 'there is no closed curve' because ∫c'=0 would be violated. This is correct only because c is regular (|c'|>0) and C^∞, so e_1 constant forces c' = λ e_1 with λ>0 constant direction, giving c(L)-c(0) = e_1 ∫|c'| ≠ 0. The argument as written ('∫c'=0 に反する') is terse but valid given regularity; however the reliance on |c'|>0 (regularity) is not stated, and without it a closed curve could have e_1 constant on a subset. This is a minor gap in a proof step rather than a false statement.
- **Proposed fix:** Since c is regular, |c'|>0; if e_1 ≡ u is constant then c' = |c'| u with |c'|>0, so c(L)-c(0) = u ∫_0^L |c'| dt ≠ 0, contradicting c(L)=c(0).
- **Reported:** 2026-10-28 (aecb22d)
- **History:** 2026-10-28 (10fede1): Open — Step 2 of surf:plane-fenchel-equality still argues 'e_1 が一定の閉曲線はない（$\int c'=0$ に反する）' without explicitly invoking regularity (|c'|>0); the terse argument remains as before.

### ISSUE-0006 [Open] Problem solution claims the ℓ/r bound is stronger than Fenchel only when ℓ>2πr
- **Category:** Supplement/remark error
- **Location:** surf:prob-tc-sphere-curve / solution
- **Detail:** The solution says 'the lower bound ℓ/r is stronger than Fenchel only when ℓ>2πr'. But the two bounds are on the same quantity κ_tot: Fenchel gives κ_tot ≥ 2π and the sphere bound gives κ_tot ≥ ℓ/r. The sphere bound is the stronger (larger) lower bound exactly when ℓ/r > 2π, i.e. ℓ > 2πr, and for ℓ < 2πr it is weaker. The sentence as written is actually correct in its inequality direction, but it is stated as if the comparison were between different quantities; more importantly the preceding sentence '大円以外の閉曲線では、全曲率と 2π のどちらが大きいとは限らない' is misleading: by Fenchel κ_tot ≥ 2π always, so κ_tot is never smaller than 2π; the intended point (that ℓ/r can be below 2π) is about the bound, not about κ_tot. As written it suggests κ_tot can be less than 2π, contradicting Fenchel.
- **Proposed fix:** Replace with: 'By Fenchel's theorem $\kappa_{\mathrm{tot}}\ge 2\pi$ always, so $\kappa_{\mathrm{tot}}$ is never below $2\pi$. The bound $\ell/r$ can be smaller than $2\pi$ (e.g. a small circle of radius $\rho<r$ has $\ell/r=2\pi\rho/r<2\pi$ while $\kappa_{\mathrm{tot}}=2\pi$); the bound $\ell/r$ is stronger than Fenchel's $2\pi$ exactly when $\ell>2\pi r$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Hypcheck of surf:plane-fenchel-equality: 'a curve going twice around a circle is convex but has total curvature 4π'
- **Category:** Supplement/remark error
- **Location:** surf:plane-fenchel-equality / hypcheck
- **Detail:** The hypcheck says '円を 2 回まわる曲線は凸だが全曲率は $4\pi$'. A curve that traverses a circle twice is not a convex curve in the sense of surf:convex-curve (a convex curve is a simple closed curve bounding a convex region); the doubly-traced circle is not simple, so calling it '凸' is false under the definition used on this page. The intended point (that convexity alone without n_c=±1 does not force κ_tot=2π) is valid, but the example must be described as a non-simple closed curve whose image is a circle, not as a convex curve.
- **Proposed fix:** Replace with: 'The condition $n_{c}=\pm1$ cannot be dropped: the closed curve that traverses a circle twice has image equal to a circle (so its signed curvature has constant sign) but $n_{c}=2$ and $\kappa_{\mathrm{tot}}=4\pi$; it is not a convex curve in the sense of Definition 2.8 because it is not simple.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Fáry–Milnor attribution to Klingenberg 2.4.9 and 'knot' definition
- **Category:** Unsupported fact
- **Location:** surf:fenchel-equality-fary-milnor / item 2
- **Detail:** Item 2 defines '結ばれている' as 'not mapped to a circle by a homeomorphism of R^3'. This is imprecise: a simple closed curve is unknotted if there is a homeomorphism of R^3 carrying it onto a round circle; the phrase '写せない' omits that the homeomorphism must be of the ambient space R^3 (an arbitrary homeomorphism of the curve onto a circle always exists). As stated, every simple closed curve would be 'knotted' since no curve is literally a circle under the identity. The ambient-homeomorphism requirement is essential for the statement to be meaningful.
- **Proposed fix:** State: 'A simple closed curve in $\mathbb{R}^{3}$ is knotted if there is no homeomorphism $\Phi\colon\mathbb{R}^{3}\to\mathbb{R}^{3}$ with $\Phi(c)$ equal to a round circle in a plane.'
- **Reported:** 2026-10-28 (10fede1)
