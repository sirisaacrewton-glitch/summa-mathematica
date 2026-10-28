# Verification tracker: `05-geometry-topology/01-general-topology/03-function-spaces/05-ascoli-general.html`

<!-- source: 05-geometry-topology/01-general-topology/03-function-spaces/05-ascoli-general.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] k-space claim: local compactness is not needed but the gluing argument is misdescribed
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that for a k-space X the gluing in \ref{top:restriction-embedding} becomes continuous and the same theorem holds. The parenthetical definition given ('a set is closed iff its intersection with every compact set is closed') is the correct characterization of a k-space (for Hausdorff spaces / compactly generated spaces), and the Ascoli theorem for compactly generated (k-)spaces with the compact-open topology is indeed a known result, so the mathematical content is essentially right. However, the stated reason is imprecise: continuity of the glued function f is not what fails for non-locally-compact X (the gluing argument in the lemma uses only that each point has a compact neighborhood to conclude continuity at a point); what actually fails is that the compact-open topology need not coincide with the topology induced by the embedding into the product, i.e. the map \Phi need not be an embedding/open onto its image. The justification '貼り合わせが連続になり' is therefore not the correct mechanism. Since the claim is hedged with '知られている（ここでは確かめていない）', this is a minor imprecision rather than a false statement, but the stated reason is misleading.
- **Proposed fix:** Replace the justification with: 'For a k-space (compactly generated) X the compact-open topology on C(X,Y) coincides with the topology induced by the restriction map into \prod_{K} C_{u}(K,Y), so the embedding argument still applies and the same characterization holds (not verified here).' Do not attribute the point to continuity of the gluing, which already holds whenever each point has a compact neighborhood.
- **Reported:** 2026-10-28 (10fede1)
