# Verification tracker: `04-analysis/02-complex-analysis/03-global/02-mobius.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/02-mobius.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the proofs of the basic properties, circle preservation, cross-ratio, fixed points, Schwarz lemma, Blaschke factors, Aut(D), Schwarz–Pick, Aut(C), Aut(sphere) and Aut(H) are correct and the cited results are used appropriately. The only issues found are in the closing supplement: the statement that the plane, disk and sphere are 'all' simply connected Riemann surfaces is imprecise (it should be 'up to biholomorphism', and requires the uniformization theorem, not just the Riemann mapping theorem), and the description of the Euclidean case is slightly misleading about the relation between Aut(C) and the Euclidean isometry group. No logical gaps, missing hypotheses, overpowered theorems, improper links, or unsupported facts were found.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the plane, disk and sphere are all simply connected Riemann surfaces
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says that the plane, disk and sphere are, by the Riemann mapping theorem and the uniformization theorem, 'all' simply connected Riemann surfaces. The uniformization theorem states that every simply connected Riemann surface is biholomorphic to exactly one of the disk, the plane, or the sphere. The sentence as written ('平面・円板・球面は…単連結なリーマン面のすべてである') is imprecise: it should say that these three are the only simply connected Riemann surfaces up to biholomorphism, not that they are 'all' in a literal sense. Also, the Riemann mapping theorem alone does not give this classification; the uniformization theorem is needed. The claim is essentially correct but overstated/imprecise.
- **Proposed fix:** 平面・円板・球面は、リーマンの写像定理と一意化定理により、単連結なリーマン面の双正則同値類の代表元のすべてである（すなわち任意の単連結リーマン面はこの三つのいずれかに双正則である）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misleading identification of Euclidean isometries with a subgroup of az+b
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the automorphism group of the plane corresponds to Euclidean geometry, with 'the maps among az+b with |a|=1 being the isometries'. This is correct as far as it goes (z↦az+b with |a|=1 are the orientation-preserving Euclidean isometries), but the phrasing 'ユークリッド幾何（az+b のうち |a|=1 のものが等長変換）' could be read as saying the whole automorphism group Aut(C)={az+b} is the Euclidean isometry group, which is false since |a|≠1 gives dilations. The parenthetical does restrict to |a|=1, so this is borderline; however the sentence structure 'それぞれの自己同型群は、ユークリッド幾何…に対応する' suggests Aut(C) corresponds to Euclidean geometry, which is imprecise because Aut(C) is larger than the isometry group.
- **Proposed fix:** それぞれの自己同型群は、ユークリッド幾何（Aut(C) の部分群 {az+b : |a|=1} が向きを保つ等長変換）、双曲幾何、球面幾何（PGL_2(C) の部分群 PSU(2) が回転群）に対応する。
- **Reported:** 2026-10-28 (10fede1)
