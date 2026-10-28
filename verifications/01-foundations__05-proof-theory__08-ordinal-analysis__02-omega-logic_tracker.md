# Verification tracker: `01-foundations/05-proof-theory/08-ordinal-analysis/02-omega-logic.html`

<!-- source: 01-foundations/05-proof-theory/08-ordinal-analysis/02-omega-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that the asymmetry of X-literals measures limits of transfinite induction
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says: "$X$ のリテラルは真偽が決まらないので、$n\notin X,n\in X$ の対だけを始件にした。この非対称性が、次ページで超限帰納法の限界を測るのに使われる（$X$ が「任意の集合」を表す）。" This is misleading. The reason $n\in X$ and $n\notin X$ are not treated as true/false is simply that $X$ is an uninterpreted set variable, not that there is an "asymmetry" between the two literals. Moreover, the pair $n\notin X, n\in X$ is treated symmetrically (both are initial sequents together), so there is no asymmetry at all. The claim that this "asymmetry" is used on the next page to measure the limits of transfinite induction is unsupported and mathematically imprecise: the ordinal bound $\varepsilon_{0}$ comes from the closure of $\varepsilon_{0}$ under $\alpha\mapsto 2^{\alpha}$ and the embedding of PA-proofs at height $\omega+m$, not from any asymmetry between $\in X$ and $\notin X$.
- **Proposed fix:** Replace with: "$X$ は未定の集合を表す変数なので、$n\in X$, $n\notin X$ の真偽は決まらない。そこで両方を同時に含むシーケント（$n\notin X$ と $n\in X$ の対）だけを始件とした。この扱いは次ページの埋め込みでそのまま用いられる。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated attribution of collapsing functions to Arai and Pohlers
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The supplement states that for systems with stronger induction, cut elimination requires collapsing functions, citing "新井、ポーラース". Collapsing functions (Buchholz's $\psi$, Rathjen's functions) are indeed used in ordinal analysis of strong systems, but attributing this specifically and exclusively to Arai and Pohlers is imprecise: the technique originates with Buchholz (and Takeuti's earlier work), and Pohlers' work is more associated with the general ordinal analysis framework. The sentence is a historical attribution that is stated more strongly than the literature supports.
- **Proposed fix:** Replace with: "実数の集合やより強い帰納法を含む体系の順序数解析では、ω 規則に加えて崩壊関数（Buchholz の $\psi$ など、大きな順序数の情報を可算順序数に圧縮する関数）を用いたカット除去が必要になる。$\varepsilon_{0}$ を超える順序数表記系がそこで本質的に使われる。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Imprecise claim that cut elimination makes proofs exponentially longer
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says cut elimination increases height by $\alpha\mapsto 2^{\alpha}$, which in logical terms is "the transfinite version of 'removing detours (cuts) makes proofs exponentially longer'." This is imprecise: the $2^{\alpha}$ bound is a bound on the height (ordinal rank) of the infinitary derivation, not on the length of a finite proof. For finite proofs, cut elimination can make proofs super-exponentially longer (the Statman lower bound is super-exponential, not merely exponential), and the $2^{\alpha}$ growth here concerns ordinal heights, not proof lengths. Calling it "the transfinite version of exponential blow-up of proof length" conflates height with length.
- **Proposed fix:** Replace with: "カット除去が高さを $\alpha\mapsto2^{\alpha}$ と増やすことは、有限の証明でカット（補題を立てる近道）を除くと証明の長さが超指数的に増えうることの、無限導出の高さに関する対応物である。"
- **Reported:** 2026-10-28 (10fede1)
