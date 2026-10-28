# Verification tracker: `05-geometry-topology/01-general-topology/08-counterexamples/02-sorgenfrey.html`

<!-- source: 05-geometry-topology/01-general-topology/08-counterexamples/02-sorgenfrey.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body proofs (Lindelöf, regular-Lindelöf normal, compact subsets countable, Sorgenfrey plane non-normal via Jones's lemma) are logically sound and correctly cite the listed results. The genuine problems are concentrated in the supplement: (1) the Jones's-lemma bound on closed discrete sets in separable normal spaces is stated as strictly less than the continuum, whereas the lemma only gives at most the continuum (and the bound is attained); (2) the Sorgenfrey line is described as 'completely normal (every closed set is G_delta)', conflating complete normality with perfect normality, the latter being false for $\R_{\ell}$; (3) the claim that a paracompact space times a compact space is paracompact omits the required Hausdorff/regularity hypothesis. The remaining statements (hereditarily separable, upper-limit line, Dieudonné plank remark) are correct.

## Issues

### ISSUE-0001 [Open] Jones's lemma does not bound closed discrete sets in separable normal spaces by the continuum
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims: "可分正規空間の閉離散集合は連続体未満の濃度でしかありえない（ジョーンズの補題）". Jones's lemma gives, for a separable normal space with a closed discrete subset $D$, the inequality $2^{|D|}\le 2^{\aleph_{0}}$, i.e. $|D|\le\mathfrak{c}$ (at most the continuum), not strictly less than the continuum. The strict inequality is false in general: e.g. the Sorgenfrey plane is separable and has the closed discrete antidiagonal of cardinality $\mathfrak{c}$ (it is not normal, but the bound $|D|\le\mathfrak{c}$ is exactly what Jones's lemma yields and is attained). Even for normal spaces, the correct conclusion is $|D|\le\mathfrak{c}$, not $<\mathfrak{c}$.
- **Proposed fix:** 可分正規空間の閉離散集合の濃度は連続体以下である（ジョーンズの補題：$2^{|D|}\le 2^{\aleph_{0}}$ より $|D|\le\mathfrak{c}$）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] The Sorgenfrey line is not completely normal in the sense of closed sets being G_delta
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states "$\R_{\ell}$ は完全正規（閉集合がすべて $G_{\delta}$）でもある". This conflates two different notions: "completely normal" (hereditarily normal) and "perfectly normal" (every closed set is a $G_{\delta}$). The Sorgenfrey line is indeed hereditarily normal (completely normal), but it is NOT perfectly normal: the closed set $[0,1]$ (or any $[a,b)$) is not a $G_{\delta}$ in $\R_{\ell}$, since a countable intersection of open sets containing $[a,b)$ cannot exclude points approaching $b$ from the right in the required way (equivalently, $\R_{\ell}$ is not perfect). The parenthetical definition "閉集合がすべて $G_{\delta}$" defines perfect normality, which $\R_{\ell}$ fails.
- **Proposed fix:** $\R_{\ell}$ は完全正規（遺伝的正規）でもある。ただし「閉集合がすべて $G_{\delta}$」という意味での完全正規（perfectly normal）ではない。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Paracompact times compact is paracompact needs the Hausdorff/regularity hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says "パラコンパクト空間とコンパクト空間の直積はパラコンパクト（したがって正規）であることが知られている". The standard theorem (Michael, Morita) requires the paracompact factor to be Hausdorff (or at least regular); without regularity the product with a compact space need not be paracompact, and "したがって正規" additionally requires $T_{1}$/Hausdorff. As stated the claim is missing hypotheses. Also the preceding sentence "正規空間とコンパクト空間の直積は正規とは限らない" is correct (Dieudonné plank), so only the paracompact claim needs qualification.
- **Proposed fix:** ハウスドルフ（あるいは正則）パラコンパクト空間とコンパクト空間の直積はパラコンパクト（したがって、$T_{1}$ なら正規）であることが知られている。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Upper-limit topology does not have exactly the same properties as stated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says "半開区間を $(a,b]$ にした上限位相も同じ性質をもつ". The upper-limit (Sorgenfrey) line is indeed homeomorphic to $\R_{\ell}$ via $x\mapsto -x$, so it shares the topological properties (Lindelöf, normal, etc.). This is essentially correct, but the phrasing "同じ性質をもつ" is acceptable; no error here. (No report.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
