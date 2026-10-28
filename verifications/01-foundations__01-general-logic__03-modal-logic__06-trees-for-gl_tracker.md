# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/06-trees-for-gl.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/06-trees-for-gl.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely sound: the tableau definitions, soundness and completeness proofs, and the K/Löb-rule corollary are coherent, and the hypcheck comments are accurate. The main verifiable concern is that several cited normality items (logic:normality.2, .3, .4, .8) are not present in the supplied label table, so those citations cannot be confirmed as pointing to the right statements; this should be checked. The remark and supplement contain no false claims. No genuine logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Citation of normality.2 and normality.3 not in label table
- **Category:** Improper link
- **Location:** gl-tableau-soundness / Step 2
- **Detail:** Step 2 cites \ref{logic:normality.2} and \ref{logic:normality.3}, and the K proof cites \ref{logic:normality.8} and 10. The label table only lists logic:normality.10 (正規性). The other normality items (2, 3, 4, 8) are not in the provided table, so their content cannot be verified; if they do not exist or do not state the used equivalences (e.g. \Box D\to\Box(D\wedge\Box D) from axiom 4, \Diamond X\wedge\Box Y\to\Diamond(X\wedge Y)), the citations are improper. This is flagged only because the targets are unverifiable from the table.
- **Proposed fix:** Verify that logic:normality.2, .3, .4, .8 exist and state exactly the used principles (\Box\neg\neg C\leftrightarrow\Box C; the K-derivable rule used with axiom 4; distribution of \Box over conjunctions; \Diamond X\wedge\Box Y\to\Diamond(X\wedge Y)). If any is missing, replace with an explicit derivation or cite logic:normality.10 / logic:page-normal-modal-logics instead.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Remark: 'any irreflexive frame' reasoning conflates existence with characterization
- **Category:** Supplement/remark error
- **Location:** remark (after k-lob-rule)
- **Detail:** The remark argues: if some A characterized exactly the converse-well-founded frames, then since there exist non-converse-well-founded frames, K\nvdash A; by tableau-k there is a finite loop-free (hence converse-well-founded) frame falsifying A, contradiction. The logic is essentially correct, but the phrase 'its such A exists then there is a non-converse-well-founded frame so K\nvdash A' relies on A being false on some frame; this is fine. However the remark as stated is acceptable. No error.
- **Proposed fix:** No change needed; remark is correct.
- **Reported:** 2026-10-28 (10fede1)
