# Verification tracker: `02-algebra/02-group-theory/05-infinite-abelian/04-pure-bounded.html`

<!-- source: 02-algebra/02-group-theory/05-infinite-abelian/04-pure-bounded.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Ulm's theorem stated for countable groups but Ulm–Kaplansky invariant classifies all reduced p-groups
- **Category:** Supplement/remark error
- **Location:** supplement / ウルムの定理
- **Detail:** The supplement says '可算な被約アーベル p 群は、ウルム–カプランスキー不変量で分類される（ウルムの定理）'. Ulm's theorem (Ulm 1933; Kaplansky) classifies *all* reduced abelian p-groups (of arbitrary cardinality) up to isomorphism by their Ulm–Kaplansky invariants; countability is not needed. Restricting to countable groups understates the theorem. Also the parenthetical '無限の高さの元がない場合（α<ω だけで済む場合）にあたる' is imprecise: having no nonzero element of infinite height means the Ulm length is ≤ ω, but the invariants still require all α < ω (i.e. all finite α), and the classification statement itself is not restricted to countable groups.
- **Proposed fix:** **ウルムの定理.** 被約アーベル $p$ 群（可算である必要はない）は、ウルム–カプランスキー不変量（$p^{\alpha}G[p]/p^{\alpha+1}G[p]$ の次元、$\alpha$ は順序数）で同型を除いて分類される（ウルムの定理）。\ref{grp:pruefer-countable} は、$0$ でない無限の高さの元がない場合（ウルム不変量が $\alpha<\omega$ の範囲で尽きる場合）に、巡回群の直和という具体的な形を与えるものである。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that basic subgroups are 'mutually isomorphic' needs the reduced/qualifying hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement / 基本部分群の一意性
- **Detail:** The supplement states 'アーベル p 群の基本部分群は一意ではないが、互いに同型であることが知られている'. For a divisible p-group (e.g. Prüfer group) the only basic subgroup is 0, and for a general p-group G = D ⊕ R with D divisible, a basic subgroup is a basic subgroup of the reduced part R; the isomorphism type of basic subgroups is indeed independent of choice (Kulikov–Fuchs theorem), so the statement is essentially correct. However, as stated without noting that the divisible part contributes nothing, and given the surrounding context, it is acceptable. No change strictly required; but to be safe the statement should clarify it holds for all abelian p-groups (including divisible ones, where B=0).
- **Proposed fix:** **基本部分群の一意性.** アーベル $p$ 群の基本部分群は一意ではないが、その同型型は基本部分群の取り方によらない（クリコフ–フックスの定理。可除部分は寄与せず、可除群では基本部分群は $0$ のみ）。基本部分群は群の「巡回群の直和で近似できる部分」を測る不変量である。
- **Reported:** 2026-10-28 (10fede1)
