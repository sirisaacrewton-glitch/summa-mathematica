# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/13-diamond-plus.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/13-diamond-plus.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] ◇! counterexample argument conflates the two sets' club sets
- **Category:** Supplement/remark error
- **Location:** supplement in set:sec-diamond-plus-def (「予想を 1 つにすると矛盾する」)
- **Detail:** The argument writes $\{\alpha\mid A\cap\alpha=A_{\alpha}\}\cap\{\alpha\mid B\cap\alpha=A_{\alpha}\}\subseteq\delta+1$ and then says that if both sets contain clubs $C_{A},C_{B}$ then $C_{A}\cap C_{B}$ is club and nonempty, giving a contradiction. But $C_{A}\subseteq\{\alpha\mid A\cap\alpha=A_{\alpha}\}$ and $C_{B}\subseteq\{\alpha\mid B\cap\alpha=A_{\alpha}\}$ are different sets; $C_{A}\cap C_{B}$ being nonempty only shows that some $\alpha$ lies in both $C_{A}$ and $C_{B}$, which is not by itself a contradiction. The correct conclusion is that $C_{A}\cap C_{B}$ is club, hence unbounded, so it contains some $\alpha>\delta$; at such an $\alpha$ both $A\cap\alpha=A_{\alpha}$ and $B\cap\alpha=A_{\alpha}$ hold, forcing $A\cap\alpha=B\cap\alpha$, which contradicts $\alpha>\delta$. The stated inclusion is also imprecise: the intersection is contained in $\delta+1$ only because for $\alpha>\delta$ the two conditions are incompatible, which is exactly the point that must be spelled out.
- **Proposed fix:** Replace the last sentence by: 「一方、両者がそれぞれ閉非有界集合 $C_{A},C_{B}$ を含むなら、$C_{A}\cap C_{B}$ は閉非有界（\ref{set:club-filter-complete}）で特に非有界だから $\alpha>\delta$ となる $\alpha\in C_{A}\cap C_{B}$ がとれる。この $\alpha$ では $A\cap\alpha=A_{\alpha}=B\cap\alpha$ となり $\alpha>\delta$ に矛盾する。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Kunen exercise numbers for the equivalences of ◇ are misattributed
- **Category:** Supplement/remark error
- **Location:** supplement in set:sec-diamond-minus (「符号化の技法」, 「一般の正則基数」)
- **Detail:** The supplement attributes to Kunen (Set Theory) the statements that ◇ is equivalent to the versions predicting subsets of $\omega_{1}\times\omega_{1}$ and functions $\omega_{1}\to\omega_{1}$ as 「第 II 章演習 51」, and the $\Diamond_{\kappa}$ characterization as 「第 II 章演習 53」. In Kunen's *Set Theory* (1980) the relevant exercises on $\Diamond$ and its variants are not numbered 51 and 53 in Chapter II; the numbering cited does not match the actual exercises, so the attribution is unreliable. The mathematical content (the equivalences themselves) is correct, but the specific exercise references are wrong.
- **Proposed fix:** Either remove the parenthetical attributions, or replace them with a correct reference, e.g. 「(Kunen, *Set Theory*, 第 II 章の $\Diamond$ に関する演習を参照)」 without specific numbers, or cite the standard source (e.g. Devlin, *Constructibility*, or Jech, *Set Theory*, where these equivalences are stated) instead of Kunen exercises 51 and 53.
- **Reported:** 2026-10-28 (10fede1)
