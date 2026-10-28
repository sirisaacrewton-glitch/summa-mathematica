# Verification tracker: `05-geometry-topology/01-general-topology/09-topological-groups/02-group-uniformities.html`

<!-- source: 05-geometry-topology/01-general-topology/09-topological-groups/02-group-uniformities.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Compact groups: left and right uniformities coincide, but not because of uniqueness of uniformity
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that for a compact topological group the left and right uniformities coincide, justified by 'the uniformity of a compact Hausdorff space is unique (\ref{top:compact-unique-uniformity})'. The conclusion is true, but the stated reason is wrong: uniqueness of the uniformity on a compact Hausdorff space only says that each of the left and right uniformities equals the unique compatible one; it does not by itself identify them, and the cited theorem says nothing about left/right uniformities. The correct reason is that on a compact group left and right uniformities both equal the unique compatible uniformity (equivalently, inversion is uniformly continuous, or the group is SIN). As written the justification is a non sequitur.
- **Proposed fix:** コンパクトな位相群では、左一様構造も右一様構造もコンパクトハウスドルフ空間の唯一の一様構造に一致する（\ref{top:compact-unique-uniformity}）ので、両者は一致する。したがって連続関数は自動的に両側で一様連続になる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Birkhoff–Kakutani distance is not 'automatically' left-invariant
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The sentence 'the metric carved out by the metrization lemma is also carried by translations, so the distance is automatically left-invariant' overstates the situation. The metrization lemma (\ref{top:unif-metrization-lemma}) applied to an arbitrary uniformity produces a metric compatible with that uniformity; it is left-invariant only because the specific uniformity used is the left uniformity, whose entourages are invariant under left translations (this is the content of Step 4 of the proof). The lemma alone does not yield left-invariance; the group structure and the choice of the left uniformity are essential. Stated as 'automatically', the claim is imprecise/misleading.
- **Proposed fix:** 距離化補題が刻む目盛りは、左一様構造の近縁が左平行移動で不変であることから、平行移動で運ばれる。すなわち距離は左不変になる（左一様構造を選んだことが本質的である）。
- **Reported:** 2026-10-28 (10fede1)
