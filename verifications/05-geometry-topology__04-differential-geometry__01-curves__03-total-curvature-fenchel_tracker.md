# Verification tracker: `05-geometry-topology/04-differential-geometry/01-curves/03-total-curvature-fenchel.html`

<!-- source: 05-geometry-topology/04-differential-geometry/01-curves/03-total-curvature-fenchel.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit aecb22d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Fary–Milnor stated with ≥ 4π instead of > 4π
- **Category:** Supplement/remark error
- **Location:** surf:fenchel-equality-fary-milnor / item 2
- **Detail:** The Fáry–Milnor theorem states that a knotted simple closed curve has total curvature strictly greater than 4π. Equality κ_tot = 4π is attained by unknotted curves (e.g. a doubly-traced circle, or a curve lying in a plane traversed twice), and more importantly the standard statement is strict: a knot cannot have total curvature exactly 4π. Stating '≥ 4π' is weaker than the true theorem and is imprecise; the strict inequality is the correct claim.
- **Proposed fix:** If a simple closed curve in R^3 is knotted (cannot be mapped to a circle by a homeomorphism of R^3), then its total curvature is strictly greater than 4π: κ_tot(c) > 4π.
- **Reported:** 2026-10-28 (aecb22d)

### ISSUE-0002 [Open] Equality case in Fenchel stated without excluding the degenerate 'plane convex' reading
- **Category:** Supplement/remark error
- **Location:** surf:fenchel-equality-fary-milnor / item 1
- **Detail:** The statement 'κ_tot(c)=2π iff c lies in a plane and is convex there (with rotation number ±1)' is correct, but the parenthetical '(で回転数 ±1)' is essential and must not be read as optional: a plane convex curve traversed twice has κ_tot = 4π, so convexity alone does not give equality. As written the phrase is ambiguous about whether the rotation-number condition is part of the hypothesis. This is a precision issue in a stated-only fact.
- **Proposed fix:** For a closed curve in R^n, κ_tot(c) = 2π holds if and only if c is contained in a plane, is convex in that plane, and has rotation number ±1 (the rotation-number condition is essential: a convex plane curve traversed twice has total curvature 4π).
- **Reported:** 2026-10-28 (aecb22d)

### ISSUE-0003 [Open] Gluck converse misstated (condition on extrema)
- **Category:** Supplement/remark error
- **Location:** surf:four-vertex-simple
- **Detail:** The stated converse (Gluck) says a positive continuous periodic function that is constant, or has two maxima and two minima with max value > min value, is the curvature of some simple closed curve. The precise Gluck condition is that the function be either constant or have at least two local maxima and at least two local minima (with the maximum value exceeding the minimum value); the phrasing 'exactly two maxima and two minima' is too restrictive/imprecise and the 'at least' quantifier matters. Also the attribution to Klingenberg 2.4.6 should be checked, but the main issue is the quantifier.
- **Proposed fix:** Conversely (Gluck), a positive continuous periodic function is the curvature of some simple closed plane curve if it is constant, or if it has at least two local maxima and at least two local minima with the maximum value strictly larger than the minimum value.
- **Reported:** 2026-10-28 (aecb22d)

### ISSUE-0004 [Open] Milnor's proof description: 'at least 2 maxima for knots' gives 4π only via the average count
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says Milnor's proof uses that the average over directions of the number of maxima of the height function ⟨c,v⟩ is proportional to total curvature, and that for a knot at least 2 maxima are needed, yielding 4π. The logic as stated is imprecise: the correct argument is that for almost every direction the height function has at least two maxima (for a knot), so the average number of maxima is ≥ 2, and Crofton-type integral geometry gives κ_tot = π × (average number of maxima). The sentence omits the factor π and the 'almost every direction' caveat, so 'proportional' plus 'at least 2' does not by itself give 4π.
- **Proposed fix:** In Milnor's proof, for almost every direction v the height function ⟨c,v⟩ has at least two local maxima when c is knotted; integral geometry gives κ_tot(c) = π · (average over v of the number of maxima of ⟨c,v⟩), so the average being ≥ 2 yields κ_tot ≥ 2π·2 = 4π (strictly, > 4π for genuine knots).
- **Reported:** 2026-10-28 (aecb22d)

### ISSUE-0005 [Open] Claim that a closed curve with constant tangent has ∫c'=0 contradiction is fine, but Step 2's 'no closed curve with constant e_1' needs regularity
- **Category:** Unsupported fact
- **Location:** surf:plane-fenchel-equality / Step 2
- **Detail:** Step 2 concludes that if e_1 is constant then 'there is no closed curve' because ∫c'=0 would be violated. This is correct only because c is regular (|c'|>0) and C^∞, so e_1 constant forces c' = λ e_1 with λ>0 constant direction, giving c(L)-c(0) = e_1 ∫|c'| ≠ 0. The argument as written ('∫c'=0 に反する') is terse but valid given regularity; however the reliance on |c'|>0 (regularity) is not stated, and without it a closed curve could have e_1 constant on a subset. This is a minor gap in a proof step rather than a false statement.
- **Proposed fix:** Since c is regular, |c'|>0; if e_1 ≡ u is constant then c' = |c'| u with |c'|>0, so c(L)-c(0) = u ∫_0^L |c'| dt ≠ 0, contradicting c(L)=c(0).
- **Reported:** 2026-10-28 (aecb22d)
