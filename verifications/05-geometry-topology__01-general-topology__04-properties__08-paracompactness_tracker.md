# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/08-paracompactness.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/08-paracompactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (Dieudonné, σ-compact exhaustion, shrinking lemma, partition of unity, product theorem) is logically sound. The serious problem is in the supplement: the Engelking characterization (i) is stated without the local-finiteness requirement on the partition of unity, which makes the claimed equivalence false. The remaining supplements and the intuition paragraph are acceptable.

## Issues

### ISSUE-0001 [Open] Engelking equivalence (i) misstated: partition of unity without local finiteness is not equivalent to paracompactness
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると), item (i)
- **Detail:** The supplement claims paracompactness is equivalent to (i) 'Hausdorff and every open cover admits a subordinate partition of unity (without assuming local finiteness of supports)'. This is false as stated. A partition of unity whose supports are not locally finite is essentially no constraint: e.g. on any space one can often produce a subordinate partition of unity by non-locally-finite means, and conversely the standard Engelking characterization requires the partition of unity to be locally finite (or at least the covering to be locally finite / the family of supports to be locally finite). Without local finiteness the condition does not characterize paracompactness. The parenthetical '(台の局所有限性を仮定しない形はここでは証明しない)' does not rescue it: the statement as an equivalence is wrong.
- **Proposed fix:** Replace (i) with the correct Engelking characterization: '(i) $X$ is Hausdorff and every open cover of $X$ admits a locally finite partition of unity subordinate to it (i.e. the supports form a locally finite family).' If a version without local finiteness is intended, it must be stated as a strictly weaker/different condition, not as an equivalent one.
- **Reported:** 2026-10-28 (8ccef3d)
