# Verification tracker: `05-geometry-topology/01-general-topology/02-constructions/02-quotients.html`

<!-- source: 05-geometry-topology/01-general-topology/02-constructions/02-quotients.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the claim that closedness of A is needed for i: Y → Y∪_f X to be a closed embedding is false—i is always a closed embedding; closedness of A is what makes j: X → Y∪_f X a closed embedding. The rest of the proofs, examples and the counterexample propositions (R/Q and the line with two origins) check out.

## Issues

### ISSUE-0001 [Open] Closedness of A in adjunction space: claimed good property is not what closedness gives
- **Category:** Supplement/remark error
- **Location:** supplement (接着空間で A が閉であること)
- **Detail:** The supplement says that if A is not closed, 'good properties such as i: Y → Y∪_f X being a closed embedding are lost'. This is imprecise: the map i: Y → Y∪_f X is always a closed embedding regardless of whether A is closed in X (the image of a closed set in Y is saturated and its preimage in X⊔Y is closed, so it is closed in the quotient; injectivity and continuity are automatic). What closedness of A actually buys is that j: X → Y∪_f X is a closed embedding (and that the quotient is well behaved, e.g. X embeds). So the stated justification is wrong.
- **Proposed fix:** Even if A is not closed, the quotient can be defined, but good properties are lost: for instance j: X → Y∪_f X need not be a closed embedding (X need not embed as a closed subspace). (Note that i: Y → Y∪_f X is a closed embedding regardless of whether A is closed.)
- **Reported:** 2026-10-28 (8ccef3d)
