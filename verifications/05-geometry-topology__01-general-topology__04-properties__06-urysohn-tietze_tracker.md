# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/06-urysohn-tietze.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/06-urysohn-tietze.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: Urysohn's lemma, the Tietze approximation lemma, the extension theorem, and the corollaries are proved with appropriate hypotheses and DC bookkeeping. The main concern is a citation to top:continuity-equivalents.3, an item not present in the supplied label table (only .5 is listed), which should be corrected to the closed-set characterization of continuity. The supplement's examples (Sorgenfrey plane, Niemytzki plane, Dugundji) are essentially accurate; the Sorgenfrey plane is indeed regular but not normal, so no correction is required there.

## Issues

### ISSUE-0001 [Open] Reference to a non-existent label top:continuity-equivalents.3
- **Category:** Improper link
- **Location:** top:tietze-step proof
- **Detail:** The proof of the approximation lemma cites \ref{top:continuity-equivalents.3} to conclude that $A_{\pm}=f^{-1}[\cdots]$ are closed in $A$. But the label table lists only top:continuity-equivalents.5 (the preimage-of-subbasis characterization). Item 3 of that theorem is not among the cited labels, so the citation points to an item that is not available/verified on this page; the intended statement (preimage of a closed set under a continuous map is closed) is item 5's companion, not item 3 as listed.
- **Proposed fix:** Replace \ref{top:continuity-equivalents.3} with the correct reference to the closed-set characterization of continuity (or state directly: since $f$ is continuous and $[-c,-c/3]$, $[c/3,c]$ are closed in $\R$, their preimages $A_{-},A_{+}$ are closed in $A$).
- **Reported:** 2026-10-28 (8ccef3d)
