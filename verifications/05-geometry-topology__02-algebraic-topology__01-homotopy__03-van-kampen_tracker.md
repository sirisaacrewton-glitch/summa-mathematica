# Verification tracker: `05-geometry-topology/02-algebraic-topology/01-homotopy/03-van-kampen.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/01-homotopy/03-van-kampen.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful and largely correct treatment of the Seifert–van Kampen theorem, its applications to wedges, cell attachment, presentation complexes and surfaces. Proofs are detailed and the cited results match their use. The main genuine problem is in the hypcheck of the van Kampen theorem: the remark about covers by three or more open sets states the hypothesis imprecisely (only triple intersections are mentioned, whereas all finite intersections must be path-connected), and the accompanying explanation about shifting squares misidentifies the real obstruction. All other supplements, remarks and stated-only facts (Brown's groupoid version, stack interpretation, Nielsen–Schreier, Novikov–Boone, Adian–Rabin, surface abelianizations, Hawaiian earring) were checked and found correct or appropriately hedged.

## Issues

### ISSUE-0001 [Open] Hypcheck claim on three open sets is imprecise
- **Category:** Supplement/remark error
- **Location:** at:van-kampen / hypcheck, last bullet
- **Detail:** The hypcheck says that for three or more open sets 'the same conclusion holds if the triple intersections are assumed path-connected'. The standard Seifert–van Kampen theorem for a general open cover requires that all nonempty finite intersections of the covering sets be path-connected (or, in the groupoid version, that the cover be closed under finite intersections up to suitable conditions). For a cover by three sets, the pairwise intersections and the triple intersection must all be path-connected; assuming only the triple intersections is insufficient. The parenthetical about 'shifting squares so that four squares do not meet at a vertex' is also misleading: the real issue is that a vertex may lie in three sets, so the intersection of the sets containing it need not be one of U, V, U∩V.
- **Proposed fix:** For three or more open sets the analogous statement holds provided that every nonempty finite intersection of the covering sets is path-connected (in particular the pairwise intersections and the triple intersection). With only two sets, the intersection of the sets containing any vertex is always one of U, V, U∩V, so the grid argument works as written.
- **Reported:** 2026-10-28 (8ccef3d)
