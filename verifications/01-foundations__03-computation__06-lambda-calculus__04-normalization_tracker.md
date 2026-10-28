# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/04-normalization.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/04-normalization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (head/internal decomposition, postponement, reach-head-normal-form, normalization theorem, corollary, problems) is logically sound: the induction on term size in the decomposition lemma is justified by the hypcheck, the good-sequence condition is used correctly, and the leftmost-reduction argument is valid. The genuine problems are confined to the supplement: the standardization theorem is described imprecisely as 'reducing redexes left to right', and the strong-normalization remark attributes the result for System F to the System T page. Both are side-comment (kind 5) issues of medium confidence; no proof-level gaps were found.

## Issues

### ISSUE-0001 [Open] Standardization theorem misstated as 'reduce redexes left to right'
- **Category:** Supplement/remark error
- **Location:** supplement / 標準化定理
- **Detail:** The supplement says the standardization theorem states that if $M\twoheadrightarrow_{\beta}N$ then one can reach $N$ by a 'standard' sequence that reduces redexes 'in order from left to right' (基を左から右へ順に簡約する). This is not the content of the standardization theorem. Standardization says every reduction can be reorganized into a standard reduction, where redexes are ordered by a nesting/position criterion (a redex may not be contracted if it is 'to the left of' or 'inside' a previously contracted redex in the appropriate sense), not simply 'left to right'. The informal phrase 'reduce redexes left to right' is imprecise and, taken literally, is false (e.g. reducing the leftmost redex first is leftmost reduction, which is a different, stronger statement).
- **Proposed fix:** Replace with: 'より一般に、$M\twoheadrightarrow_{\beta}N$ なら、$M$ から $N$ への簡約列を「標準形」の簡約列（各簡約が直前の簡約に対して標準的な順序条件を満たす列）に組み替えることができる（標準化定理、カリー–フェイス）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that typed calculi (simply typed, System T, System F) are strongly normalizing 'for any reduction order'
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that in typed lambda calculi (simply typed, System T, System F) every reduction order terminates (strong normalization). This is true for the simply typed lambda calculus and System T and System F (all strongly normalizing). However the phrasing lumps them together as if the same theorem covers all; more importantly, the citation \ref{logic:page-system-t} is given as if System T's strong normalization is established there, but the claim 'any reduction order terminates' for System F is a deep result (Girard) not covered by the System T page. The statement itself is correct, but the attribution/citation is imprecise: strong normalization of System F is not established on the System T page.
- **Proposed fix:** Either restrict the citation to System T ('体系 T については \ref{logic:page-system-t}') and note that System F's strong normalization is a separate deeper result, or remove the parenthetical citation and state the fact without attributing all three to the System T page.
- **Reported:** 2026-10-28 (8ccef3d)
