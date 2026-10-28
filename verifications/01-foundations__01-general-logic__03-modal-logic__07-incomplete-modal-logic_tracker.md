# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/07-incomplete-modal-logic.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/07-incomplete-modal-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the Berk theorem proof, the Cresswell model lemmas, Magari's theorem, the Lob-rule failure and Lewis's theorem are all sound, and the supplements/remarks are mostly accurate. The genuine problems are improper/unverifiable citations to sub-items (logic:normality.5, logic:normality.1, logic:frame-correspondence.2) that are absent from the label table, and one overstated remark claiming H is simplest in variable count, which Lewis's theorem does not establish.

## Issues

### ISSUE-0001 [Open] Citation of normality.5 which is not in the label table
- **Category:** Improper link
- **Location:** logic:h-not-lob-closed / Step 1 and Step 3
- **Detail:** Step 1 and Step 3 cite \ref{logic:normality.5}, but the label table only lists logic:normality.3 (theorem 1.13, 正規性). The target logic:normality.5 is not among the cited labels, so the citation cannot be verified against the table and may point to a nonexistent or wrong item. The intended content (distribution of \Box over conjunctions / necessitation inside \Box) is presumably part of the normality theorem, but the specific item is unverified.
- **Proposed fix:** Replace \ref{logic:normality.5} with the correct label from the normality page (e.g. \ref{logic:normality.3} if the needed distributivity/necessitation facts are items of theorem 1.13), or add the missing label to the citation table so the reference resolves.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Citation of normality.1 in the solution of prob-incomp-hk4
- **Category:** Improper link
- **Location:** logic:prob-incomp-hk4 / solution
- **Detail:** The solution cites \ref{logic:normality.1}, which is not in the label table (only logic:normality.3 is listed). The step uses it to derive \Box C \to \Box(\Box p \leftrightarrow \Box\Box p) from (i), i.e. a monotonicity/necessitation-inside-\Box principle; the target is unverified.
- **Proposed fix:** Cite the correct label for the normality/monotonicity fact used (e.g. \ref{logic:normality.3} if it contains the rule A\to B \vdash \Box A\to\Box B), or add the referenced label to the table.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Citation of frame-correspondence.2 not in the label table
- **Category:** Improper link
- **Location:** logic:magari-theorem / proof and logic:prob-incomp-canonical / solution
- **Detail:** Both the Magari theorem proof and the canonical-model problem solution cite \ref{logic:frame-correspondence.2}, but the label table lists only logic:frame-correspondence.5 (theorem 3.11, フレームの対応). The item .2 is not verifiable; the text uses it for 'transitivity validates 4' and for the model-level direction, which may or may not be what item 2 states.
- **Proposed fix:** Replace \ref{logic:frame-correspondence.2} with the correct label (e.g. \ref{logic:frame-correspondence.5} if that theorem covers the 4/transitivity correspondence), or add the label to the citation table.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Claim that H is 'simplest' in number of propositional variables is imprecise
- **Category:** Supplement/remark error
- **Location:** remark after logic:lewis-theorem
- **Detail:** The remark asserts H is 'most simple' both in degree and in number of propositional variables among incomplete systems. Lewis's theorem only guarantees completeness for degree-1 axioms; it does not establish that no incomplete system with a single variable and degree 1 exists, nor that H is minimal in variable count. The claim '次数についても命題変数の個数についても、最も単純な不完全な体系' is stronger than what is proved (only that H has degree 2 and one variable, and that degree-1 axioms are complete).
- **Proposed fix:** Weaken to: 'H is an incomplete system whose axiom has degree 2 and uses a single propositional variable; by Lewis's theorem no degree-1 axiom can yield an incomplete normal logic, so H is minimal with respect to degree. Minimality with respect to the number of propositional variables is not claimed here.'
- **Reported:** 2026-10-28 (8ccef3d)
