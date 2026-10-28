# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/04-normalization.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/04-normalization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page's proofs (decomposition lemma, head postponement, reach-head-normal-form, normalization theorem) are logically sound and the cited labels match their uses. The main genuine problem is in the supplement: the standardization theorem is described as reducing redexes 'in order from left to right', which mischaracterizes standardization (it concerns existence of a standard sequence consistent with the left-to-right ordering, of which leftmost reduction is the special normal-order case). The other supplement claims (strong normalization for typed calculi, the partial-function remark, the lazy-evaluation intuition) are acceptable. No issues in the proofs or hypcheck were found.

## Issues

### ISSUE-0001 [Open] Standardization theorem misstated as 'reduce redexes left to right'
- **Category:** Supplement/remark error
- **Location:** supplement / 標準化定理
- **Detail:** The supplement says the standardization theorem states that if $M\twoheadrightarrow_{\beta}N$ then one can reach $N$ by a 'standard' sequence that reduces redexes 'in order from left to right' (基を左から右へ順に簡約する). This is imprecise/incorrect. Standardization says there is a standard reduction sequence from $M$ to $N$, where a standard sequence is one in which the redexes are ordered consistently with the left-to-right (outside-in) ordering of the term, but it does NOT mean simply reducing redexes in left-to-right textual order. In particular, the leftmost-outermost (normal-order) strategy is the specific standard strategy that reaches the normal form; the general standardization theorem concerns the existence of some standard sequence, not 'reduce left-to-right'. The phrasing conflates standardization with the leftmost strategy.
- **Proposed fix:** より一般に、$M\twoheadrightarrow_{\beta}N$ なら、$M$ から $N$ への**標準的な**簡約列（各簡約が項の左から右への順序と整合する順序で行われる列）が存在する（**標準化定理**、カリー–フェイス）。最左簡約はこの標準的な列の特別な場合（最左最外戦略）であり、正規形が存在すればその標準列は正規形に達する。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that typed lambda calculi are strongly normalizing 'in any reduction order' needs the caveat about non-terminating constants
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that in typed lambda calculi (simply typed, System T, System F) 'any reduction order terminates' (強正規化). For the pure simply typed lambda calculus and System F this is correct (strong normalization holds). However System T (Gödel's T) as presented on the referenced page includes a recursion/iterator constant with its reduction rules; strong normalization of System T does hold for the well-typed terms, so the statement is essentially correct. This is not a genuine error and is left as is.
- **Proposed fix:** No change needed; the statement is correct for well-typed terms.
- **Reported:** 2026-10-28 (10fede1)
