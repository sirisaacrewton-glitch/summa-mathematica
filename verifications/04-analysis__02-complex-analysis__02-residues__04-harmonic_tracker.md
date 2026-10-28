# Verification tracker: `04-analysis/02-complex-analysis/02-residues/04-harmonic.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/04-harmonic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that the example map is used via reflection across a boundary segment
- **Category:** Supplement/remark error
- **Location:** example (after cx:schwarz-reflection)
- **Detail:** The example says the conformal map (z-i)/(z+i) from the upper half-plane to the unit disk is used in arguments extending it across a boundary line segment. But this map is not real-valued on any segment of the real axis (it has a pole at z=-i and is not real on R), so the Schwarz reflection principle as stated does not apply to it. The statement is misleading/imprecise as an illustration of the reflection principle.
- **Proposed fix:** Replace with a correct illustration, e.g.: 'For instance, if f is holomorphic on the upper half-disk and real on the diameter, reflection extends it across the diameter; the Cayley map (z-i)/(z+i) itself is not real on the real axis, so reflection does not apply to it directly.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck claim that non-continuous boundary data fails to approach boundary values at discontinuity points
- **Category:** Supplement/remark error
- **Location:** cx:dirichlet-disk / hypcheck
- **Detail:** The hypcheck states that for a discontinuous φ (e.g. a step function) the Poisson integral is harmonic but 'does not approach the boundary value continuously at discontinuity points'. This is imprecise: at a point of discontinuity the boundary value is not even defined, and more importantly at points where φ is continuous the Poisson integral does converge to φ (the proof of Step 2 only uses continuity at the point plus boundedness). The blanket statement overstates the failure.
- **Proposed fix:** Rewrite as: 'If φ is merely bounded (not continuous), P[φ] is still harmonic on D, and it converges to φ(ζ) at every point ζ where φ is continuous; however at a genuine discontinuity the limit need not exist, so the continuous extension to the closed disk fails.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Liouville statement for harmonic functions requires lower boundedness, stated correctly but 'positive' in keywords
- **Category:** Unsupported fact
- **Location:** cx:harnack / theorem statement and keywords
- **Detail:** The theorem correctly states that a harmonic function on all of C that is bounded below is constant. The keyword/index text says 'Liouville theorem for positive harmonic functions', which is a special case; this is not false but the statement 'bounded below' is the correct general form and is what is proved. No error in the theorem itself; the only concern is that the proof's Step 3 uses u-m≥0 requiring m finite, which is fine. No genuine issue.
- **Proposed fix:** No change needed; the theorem statement is correct.
- **Reported:** 2026-10-28 (10fede1)
