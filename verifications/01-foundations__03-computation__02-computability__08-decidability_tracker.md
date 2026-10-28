# Verification tracker: `01-foundations/03-computation/02-computability/08-decidability.html`

<!-- source: 01-foundations/03-computation/02-computability/08-decidability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (DFA/CFG decidability, universality of TM, undecidability of A_TM and HALT_TM, unrecognizability of the complement) are logically sound and correctly cite the label table. The genuine problems are confined to the exercise solution for INF_DFA, whose forward-direction argument is not rigorous as written (the loop-removal step does not guarantee the shortened string stays of length >= k), and to an overstated 'independence' claim in the supplement regarding the incompleteness-theorem route. Both are fixable with the proposed edits.

## Issues

### ISSUE-0001 [Open] INF_DFA characterization uses wrong length bound
- **Category:** Supplement/remark error
- **Location:** comp:prob-infinite-dfa / solution
- **Detail:** The solution claims L(B) is infinite iff B accepts some string of length in [k, 2k). The forward direction argument is flawed: it takes the shortest accepted string s with |s| >= k, and if |s| >= 2k it removes a loop of length <= k to get a shorter accepted string, but the resulting string may have length < k, so it does not contradict minimality among strings of length >= k. The correct standard characterization is: L(B) is infinite iff B accepts some string of length in [k, 2k) — this is true, but the given proof of the forward direction is incorrect as stated. Actually the correct statement is that L(B) is infinite iff there is an accepted string of length between k and 2k-1 (or up to 2k), and the proof needs the loop to be removable while keeping length >= k, which requires |s| >= 2k and the removed portion to be at most k, giving length >= k. The issue is the argument as written does not guarantee the shortened string still has length >= k unless the loop removed is chosen appropriately; more precisely, if |s| >= 2k, among the first k+1 states visited there is a repeat within the first k steps, so removing that loop yields a string of length >= |s| - k >= k, contradicting minimality. The text says 'the part of length <= k' but does not pin the loop to lie within the first k characters, so the shortened string could drop below k.
- **Proposed fix:** Replace the forward argument with: If |s| >= 2k, then while reading the first k+1 characters of s the automaton visits k+1 states among k states, so some state repeats within the first k+1 steps; the loop between the two visits has length at most k and lies within the first k+1 characters. Removing it (pumping with i=0) yields an accepted string of length >= |s| - k >= k, shorter than s, contradicting minimality. Hence the shortest accepted string of length >= k has length < 2k.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that incompleteness series is 'independent' of halting problem
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (incompleteness bullet)
- **Detail:** The supplement states that the site's incompleteness theorem series (via the diagonalization theorem) is 'independent' of the halting-problem route. This is an overstatement: the diagonalization/Lawvere fixed-point argument and the halting-problem argument are the same underlying diagonal argument, and the incompleteness results are derivable from undecidability of the halting problem (as the same bullet acknowledges). Calling the two proofs 'independent' is imprecise and potentially misleading.
- **Proposed fix:** Reword to: '本サイトの不完全性定理の系列（\ref{pt:page-diagonal-first-incompleteness}）は対角化定理（ローヴェアの不動点定理の特別な場合）による証明を与えており、停止問題の決定不能性を用いる導出とは異なる見かけの路線をとるが、両者は同じ対角線論法の骨格を共有している。'
- **Reported:** 2026-10-28 (8ccef3d)
