# Verification tracker: `02-algebra/02-group-theory/03-sylow/01-sylow-theorems.html`

<!-- source: 02-algebra/02-group-theory/03-sylow/01-sylow-theorems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The proofs (existence by induction, conjugacy, count, corollary, Frattini argument, and the three problems) are logically sound and the cited labels match their use. The main problems are in the supplement: the claim that n_p=1 makes the group non-simple is false for groups of prime order (needs the proper-subgroup hypothesis), and the attribution of the subset-action proof to 雪江 contradicts the page's own header. The examples and hypcheck comments are otherwise correct.

## Issues

### ISSUE-0001 [Open] Incorrect claim that n_p=1 forces the group to be non-simple
- **Category:** Supplement/remark error
- **Location:** supplement (応用)
- **Detail:** The supplement says that if n_p=1 is forced, the Sylow subgroup is normal and "the group is non-simple" (群は単純でない). This is false as stated: a group of prime order (e.g. Z/pZ) has n_p=1 and its Sylow subgroup is the whole group, yet it is simple. The conclusion "non-simple" only holds when the Sylow subgroup is proper, i.e. when p^a < |G| (equivalently m>1).
- **Proposed fix:** 個数の条件 $n_{p}\equiv 1\pmod p$, $n_{p}\mid m$ から $n_{p}=1$ が強制されれば、シロー部分群は正規になる。さらに $p^{a}<\abs{G}$（すなわち $m>1$）なら、この正規部分群は自明でない真の部分群なので、群は単純でない。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misleading attribution of the subset-action proof to 雪江
- **Category:** Supplement/remark error
- **Location:** supplement (別証明) / page header blockquote
- **Detail:** The supplement states that the proof of existence via the action on p^a-element subsets (using that the binomial coefficient is not divisible by p) is 雪江's method (「雪江はこの方法」). But the page's own header blockquote says the opposite: 「雪江は存在を部分集合への作用で示しているが、ここでは類等式とコーシーの定理を使う帰納法で示し」. The two statements contradict each other, so at least one attribution is wrong. (The mathematical content of the subset-action proof itself is correct.)
- **Proposed fix:** Remove the parenthetical attribution, or make it consistent with the header, e.g.: 存在には、$p^{a}$ 元の部分集合全体への左からの積の作用を使う証明（二項係数 $\binom{p^{a}m}{p^{a}}$ が $p$ で割り切れないことを使う）もよく知られている。
- **Reported:** 2026-10-28 (10fede1)
