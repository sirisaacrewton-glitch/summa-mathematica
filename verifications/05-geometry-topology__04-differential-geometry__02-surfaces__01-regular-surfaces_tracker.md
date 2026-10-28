# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/01-regular-surfaces.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/01-regular-surfaces.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cone hypcheck: F=z^2 level set is not a regular surface
- **Category:** Supplement/remark error
- **Location:** surf:regular-value-surface / hypcheck
- **Detail:** The hypcheck says that even if there are points with ∇F=0, the level set can still be a regular surface, citing F=z^{2}, a=0, which gives the plane z=0. But the plane z=0 is not a regular surface in the sense of this page: it is not a subset of R^{3} covered by surface patches that are homeomorphisms onto open subsets of the plane (it is not locally homeomorphic to R^{2} as a subset of R^{3}; it has empty interior and is not open in R^{3}). So this is a false counterexample to the claim that the hypothesis cannot be dropped.
- **Proposed fix:** Replace the example with a genuine one: e.g. F(x,y,z)=z^{2}, a=0 gives S={z=0}, which is not a regular surface (it is not locally homeomorphic to R^{2} as a subset of R^{3}); a correct example where ∇F=0 on S but S is still a regular surface is F(x,y,z)=x^{2}+y^{2}, a=0, S={x=y=0} (a line, also not a surface). A valid example: F(x,y,z)=z^{2}, a=1 gives S={z=±1}, two planes, still not a surface. In fact, if ∇F=0 at a point of S, S need not be a regular surface; the correct statement is that the hypothesis ∇F≠0 is sufficient but not necessary in general, and the given example should be removed or replaced by a correct one such as F(x,y,z)=x^{2}+y^{2}+z^{2}, a=0 (S={0}, not a surface).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Torus example: ∇F=0 only at z=0, ρ=R, but F=0≠r^2 there
- **Category:** Unsupported fact
- **Location:** example (torus) / item 2
- **Detail:** The computation says ∇F=0 only when z=0 and ρ=R, and there F=0≠r^{2}. This is correct, but the conclusion that S⊂O (ρ=0 implies F≥R^{2}>r^{2}) is stated without checking that ρ=0 is excluded from S; this is fine. However, the claim that ∇F=0 only at z=0, ρ=R is correct. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
