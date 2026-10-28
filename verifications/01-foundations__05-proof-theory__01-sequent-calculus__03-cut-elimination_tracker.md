# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/03-cut-elimination.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/03-cut-elimination.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proofs (cut admissibility by double induction, cut elimination, subformula property, consistency) are logically sound and the cited lemmas are used consistently with their stated content. The only genuine problems are in the supplement: an overstated/imprecise description of the growth rate of cut-free derivations, and an imprecise list of consequences that includes a non-standard 'intermediate sequent theorem' alongside Craig interpolation. Both are minor and confined to side remarks.

## Issues

### ISSUE-0001 [Open] Incorrect claim about cut-free proof size growth
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：回り道の除去
- **Detail:** The supplement says cut elimination makes derivations grow 'generally (to the order of a tower of exponentials)'. This is overstated: for first-order LK the standard cut-elimination bound is a tower of exponentials whose height is bounded by the cut complexity, but the growth is not in general a tower of exponentials; the elementary (hyperexponential) bound is the usual statement. The earlier sentence in the main text says 'super-exponentially', which is consistent, but the parenthetical '指数関数の塔の程度に' is a stronger and imprecise claim.
- **Proposed fix:** Replace with: 'カットを除くと導出は一般に超指数関数的に（最悪の場合、カット論理式の複雑さに比例した高さの指数関数の塔の程度に）大きくなりうることが知られている。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that intermediate sequent theorem follows from cut elimination
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement lists '中間シーケント定理' (intermediate sequent theorem / interpolation-type result) among consequences of cut elimination 'as is generally known'. The standard consequence of cut elimination is Craig interpolation (via Maehara), which is mentioned separately. The 'intermediate sequent theorem' is not a standard named consequence of cut elimination in this generality, and grouping it with interpolation as a direct corollary is imprecise.
- **Proposed fix:** Remove '中間シーケント定理' from the list, or state it precisely: 'カット除去の帰結として、クレイグの補間定理（前原の方法、\ref{pt:maehara-interpolation}）やエルブランの定理（\ref{pt:herbrand}）が得られることが一般に知られている。'
- **Reported:** 2026-10-28 (8ccef3d)
