# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/01-arithmetical-soundness.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/01-arithmetical-soundness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong citation for the modal version of the second incompleteness theorem
- **Category:** Improper link
- **Location:** pt:gl-consequence-consistency / proof, Step 1
- **Detail:** The proof of item 1 cites \ref{logic:gl-second-incompleteness} for the modal formula $\neg\Box\bot\to\neg\Box\neg\Box\bot$. According to the label table, logic:gl-second-incompleteness is "第二不完全性定理の様相的な形" (the modal form of the second incompleteness theorem), which is the statement $\mathsf{GL}\vdash\neg\Box\bot\to\neg\Box\neg\Box\bot$? Actually the modal form of G2 is typically $\mathsf{GL}\vdash\neg\Box\bot\to\neg\Box\neg\Box\bot$ or the unprovability of Con. If the cited theorem indeed states this formula, the citation is fine. However, the more standard reference for this specific derived formula is the fixed-point/derived rule. Since the label title matches the formula used, this is likely correct and should not be reported.
- **Proposed fix:** No change needed; the citation matches the stated modal form of the second incompleteness theorem.
- **Reported:** 2026-10-28 (10fede1)
