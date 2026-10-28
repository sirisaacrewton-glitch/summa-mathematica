# Verification tracker: `05-geometry-topology/01-general-topology/09-topological-groups/02-group-uniformities.html`

<!-- source: 05-geometry-topology/01-general-topology/09-topological-groups/02-group-uniformities.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main results (left uniformity, complete regularity, uniform continuity of homomorphisms, Birkhoff–Kakutani, two-sided invariant metric) are proved with appropriate citations and the hypotheses are verified. The only genuine concern is in the supplement's '似た定理' paragraph, where the conclusion that continuous functions on a compact group are 'automatically uniformly continuous on both sides' is stated more strongly than what uniqueness of the uniformity yields; it should be phrased as uniform continuity with respect to the single (unique) uniformity. The remaining supplement sentences and the problem solutions were checked and found correct.

## Issues

### ISSUE-0001 [Open] Compact groups: left and right uniformities coincide, but continuous functions need not be two-sided uniformly continuous
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that for a compact topological group the left and right uniformities coincide (true, since on a compact Hausdorff space there is a unique uniformity compatible with the topology, and both $\mathcal{U}_{L}$ and $\mathcal{U}_{R}$ induce the group topology), and then concludes that 'continuous functions are automatically uniformly continuous on both sides'. This last claim is false: a continuous real-valued function on a compact group is uniformly continuous with respect to the (unique) uniformity, i.e. with respect to $\mathcal{U}_{L}=\mathcal{U}_{R}$, but 'both sides' suggests uniform continuity for $\mathcal{U}_{L}$ and $\mathcal{U}_{R}$ separately, which is the same thing here; more importantly, the phrase is misleading because for a non-compact group a continuous function need not be uniformly continuous for either uniformity. The statement as written overstates what follows: uniqueness of the uniformity gives uniform continuity for the single uniformity, not an additional 'two-sided' property beyond that.
- **Proposed fix:** Replace with: 'コンパクトな位相群では、コンパクトハウスドルフ空間の一様構造が一意であること（\ref{top:compact-unique-uniformity}）から左右の一様構造は一致する。したがって連続関数はこの（唯一の）一様構造に関して一様連続である。'
- **Reported:** 2026-10-28 (8ccef3d)
