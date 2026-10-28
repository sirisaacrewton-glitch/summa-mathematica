# Verification tracker: `05-geometry-topology/02-algebraic-topology/01-homotopy/03-van-kampen.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/01-homotopy/03-van-kampen.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main van Kampen theorem, the amalgamated product proposition, the attaching-cell theorem, the wedge theorem, the presentation-complex corollary and the surface-distinction corollary are all sound, and the cited labels match their use. The only genuine problem found is in the hypcheck of the van Kampen theorem: the remark about covers by three or more open sets states an insufficient hypothesis (arc-connectedness of triple intersections alone) and gives a misleading reason (shifting the grid), whereas the correct requirement is that all nonempty finite intersections be path-connected. All other supplements, remarks and stated-only facts (Brown's groupoid theorem, the stack/sheaf remark, the Novikov–Boon and Adian–Rabin undecidability remarks, the Nielsen–Schreier remark, the Hawaiian earring remark) were checked and are accurate.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the 3-open-set van Kampen needs triple intersections arc-connected
- **Category:** Supplement/remark error
- **Location:** at:van-kampen / hypcheck, last bullet
- **Detail:** The hypcheck says that for three or more open sets 'the analogous conclusion holds if one assumes the arc-connectedness of the triple intersections'. This is not the correct hypothesis. The standard statement for a cover by open sets requires that every nonempty intersection of members of the cover be path-connected (for a 3-fold cover, this includes the triple intersection, but also the pairwise intersections, which are already assumed). More importantly, the parenthetical claim that one must 'shift the squares so that no grid vertex is surrounded by four squares' is misleading: the real issue for a 3-fold cover is that a grid vertex may lie in three sets whose common intersection is not one of the listed sets, and the fix is to assume all nonempty finite intersections are path-connected (or use the groupoid version), not merely to shift the grid. As stated, the hypothesis 'triple intersections arc-connected' alone is insufficient unless the pairwise intersections are also path-connected, which is not stated.
- **Proposed fix:** For a cover by open sets $U_{1},\dots,U_{n}$, the analogous conclusion holds if every nonempty intersection $U_{i_{1}}\cap\cdots\cap U_{i_{k}}$ is path-connected (and each contains $x_{0}$). For three sets this requires the pairwise intersections and the triple intersection to be path-connected; the grid argument then works because each grid vertex lies in an intersection of sets that is one of these path-connected intersections.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hawaiian earring fundamental group claim
- **Category:** Supplement/remark error
- **Location:** at:wedge-circles-free / hypcheck
- **Detail:** The hypcheck states that the Hawaiian earring 'is a union of countably many circles but with a different topology, and its fundamental group is not free (known)'. This is correct as a statement (the fundamental group of the Hawaiian earring is not free), so this is not an error. However, the phrasing 'the wedge of infinitely many circles (quotient topology)' having free fundamental group is correct. No issue here; flagging only to confirm it was checked.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
