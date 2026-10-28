# Verification tracker: `05-geometry-topology/01-general-topology/02-constructions/02-quotients.html`

<!-- source: 05-geometry-topology/01-general-topology/02-constructions/02-quotients.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

I checked the page carefully, focusing on the intuition, example, proposition and supplement environments. The intuition statements (quotient topology finest making q continuous; saturated sets; adjunction space) are correct. The example in '商写像の判定' (item 2) correctly exhibits a closed-but-not-open quotient map; the claim that [0,1] is open in X and its image is not open in Y is correct. The '円・トーラス・メビウスの帯' example correctly uses compactness to get a closed map and applies the homeomorphism corollary. The 'D^n/S^{n-1} ≈ S^n' example is standard and correct. The '商空間はハウスドルフとは限らない' proposition and its proof (R/Q and the line with two origins) are correct, including the local-homeomorphism-to-R claim. The supplement's statements on products of quotient maps (Whitehead's theorem requiring Z locally compact Hausdorff, counterexample reference), on A being closed for adjunction spaces, on coequalizers in Top, and on quotient topology as a colimit topology are all accurate. The two problems and their solutions are correct. I found no genuine logical gaps, missing hypotheses, overpowered theorems, improper links, or false stated-only claims.

## Issues

### ISSUE-0001 [Open] Adjunction space requires A closed for i to be a closed embedding; claim about losing 'good properties' is vague but the specific claim needs checking
- **Category:** Supplement/remark error
- **Location:** supplement (接着空間で A が閉であること)
- **Detail:** The supplement says: 'Even if A is not closed the quotient can be defined, but good properties such as i: Y → Y∪_f X being a closed embedding are lost.' This is essentially correct: when A is not closed, i need not be a closed embedding. However the phrasing 'などの良い性質が失われる' is acceptable. No genuine error here; the statement is true. Not reporting.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
