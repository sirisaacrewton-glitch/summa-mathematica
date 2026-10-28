# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/01-regular-surfaces.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/01-regular-surfaces.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The only genuine problem is in the solution of surf:prob-rs-cone: the step asserting that an open neighborhood of the origin in the cone contains points with both z>0 and z<0 is not justified by the stated reasoning (it needs the neighborhood to be chosen as C∩W with W a small ball, which does contain both nappe points). All supplements, remarks, hypchecks and stated facts were checked and found correct.

## Issues

### ISSUE-0001 [Open] Cone example: f(B) need not contain points with both z>0 and z<0
- **Category:** Supplement/remark error
- **Location:** surf:prob-rs-cone / solution (first half)
- **Detail:** The argument claims that since f(B) is an open set of C containing the origin, it contains both (ε,0,ε) and (ε,0,-ε). But an open neighborhood of the origin in C need not contain points on both nappes: e.g. C ∩ {z > -|x|/2} is a relatively open set of C containing 0 but only points with z > -|x|/2, and for small ε the point (ε,0,-ε) has z = -ε < -ε/2, so it is excluded. The claim that f(B) contains points with z>0 and z<0 is therefore unjustified as stated.
- **Proposed fix:** Replace the argument: since f(B) is open in C and contains 0, there is ε>0 with (ε,0,ε)∈f(B) (the upper nappe point is in any sufficiently small relative neighborhood intersected with {z>0}). Then f(B)∖{0} contains a point with z>0. Also, because f(B) is open in C and 0∈f(B), and C∖{0} has points with z<0 arbitrarily close to 0, one cannot conclude z<0 points lie in f(B). Instead argue directly: f(B)∖{0} is connected (continuous image of the connected set B∖{u_0} when B is a small disk, since B∖{u_0} is connected for the disk minus a point in R^2 — actually it is connected), and z is continuous and nonzero on f(B)∖{0}, so z has constant sign on f(B)∖{0}; but f(B) open in C containing 0 must contain points of both signs of z (take (ε,0,ε) and (ε,0,-ε) for small ε, both in C∩W for W a small ball around 0 contained in the open set giving f(B)=C∩W). Contradiction. The fix is to choose W a small ball around 0 with C∩W⊂f(B), which does contain both (ε,0,±ε).
- **Reported:** 2026-10-28 (8ccef3d)
