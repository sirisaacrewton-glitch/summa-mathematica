# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/06-urysohn-tietze.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/06-urysohn-tietze.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page is largely correct. The previously reported improper-link issue is resolved by the corrected label table. The main genuine problem is in the supplement: the Sorgenfrey plane is listed as an example of a regular but non-normal space, which is false (it is not regular). All proofs, the Urysohn lemma construction, the Tietze extension argument, and the stated facts check out.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Reference to a non-existent label top:continuity-equivalents.3
- **Category:** Improper link
- **Location:** top:tietze-step proof
- **Detail:** The proof of the approximation lemma cites \ref{top:continuity-equivalents.3} to conclude that $A_{\pm}=f^{-1}[\cdots]$ are closed in $A$. But the label table lists only top:continuity-equivalents.5 (the preimage-of-subbasis characterization). Item 3 of that theorem is not among the cited labels, so the citation points to an item that is not available/verified on this page; the intended statement (preimage of a closed set under a continuous map is closed) is item 5's companion, not item 3 as listed.
- **Proposed fix:** Replace \ref{top:continuity-equivalents.3} with the correct reference to the closed-set characterization of continuity (or state directly: since $f$ is continuous and $[-c,-c/3]$, $[c/3,c]$ are closed in $\R$, their preimages $A_{-},A_{+}$ are closed in $A$).
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now quotes top:continuity-equivalents.3 as 'preimages of closed sets are closed', which is exactly what the proof uses, so the citation is correct.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). top:continuity-equivalents.3 is: preimages of closed sets are closed.

### ISSUE-0002 [Open] Sorgenfrey plane is not regular
- **Category:** Supplement/remark error
- **Location:** supplement / '正規性を弱めると'
- **Detail:** The supplement lists the Sorgenfrey plane as an example of a space that is regular but not normal. The Sorgenfrey plane is in fact not even regular (it is not normal, and regularity fails as well); the standard example of a regular non-normal space is the Sorgenfrey line squared is wrong — the correct standard example is the Niemytzki plane (which the text also lists) or the Sorgenfrey plane is a classic example of a non-normal space that is not regular. So the claim '正則だが正規でない空間（ゾルゲンフライ平面、ニェミツキ平面）' is false for the Sorgenfrey plane.
- **Proposed fix:** Replace 'ゾルゲンフライ平面、ニェミツキ平面' with 'ニェミツキ平面' (the Niemytzki plane is regular but not normal), or state that the Sorgenfrey plane is a standard example of a space that is not normal (and in fact not regular).
- **Reported:** 2026-10-28 (048145a)
