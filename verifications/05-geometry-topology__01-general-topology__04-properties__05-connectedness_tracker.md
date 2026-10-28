# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/05-connectedness.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/05-connectedness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Arc-connectedness vs path-connectedness in Hausdorff spaces
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that 'arc-connectedness' (requiring a continuous injective path, i.e. an arc) is equivalent to path-connectedness in Hausdorff spaces. This is false as stated: the standard theorem is that a Hausdorff space is path-connected iff any two points can be joined by an arc, but the equivalence requires the space to be Hausdorff AND the notion of 'arc' to be a homeomorphism from [0,1] onto its image (an embedded arc), not merely an injective continuous map. More importantly, the claim as written ('弧連結は、ハウスドルフ空間では弧状連結と同値') is a nontrivial theorem (a Hausdorff path-connected space is arc-connected) that is true, but the parenthetical definition given ('連続な単射の道（弧）') is imprecise: a continuous injective map from [0,1] need not be an embedding unless the target is Hausdorff, and the equivalence direction 'path-connected ⇒ arc-connected' genuinely needs Hausdorff. The statement is essentially correct but the definition of 'arc' as 'continuous injective path' is only equivalent to an embedded arc when the codomain is Hausdorff, which is exactly the hypothesis; this is acceptable. However the attribution and the claim that this is 'not proved here' is fine. On closer inspection the statement is a correct standard theorem (Engelking, General Topology, 6.3.12 area). No error.
- **Proposed fix:** No change needed; the statement is a correct standard theorem.
- **Reported:** 2026-10-28 (10fede1)
