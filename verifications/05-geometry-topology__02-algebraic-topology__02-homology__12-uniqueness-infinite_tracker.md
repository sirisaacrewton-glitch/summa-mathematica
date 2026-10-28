# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/12-uniqueness-infinite.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/12-uniqueness-infinite.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cohomology telescope: lim^1 need not vanish for ordinary cohomology
- **Category:** Supplement/remark error
- **Location:** supplement (コホモロジーでは)
- **Detail:** The supplement claims that for an ordinary cohomology theory the groups $h^{k-1}(X^{i})$ stabilize for large $i$, so $\varprojlim{}^{1}$ vanishes and uniqueness holds. This is false in general. For singular cohomology with coefficients, $H^{k-1}(X^{i};G)$ need not stabilize: e.g. $X = \bigvee_{n} S^{n}$ (or $\mathbb{C}P^{\infty}$ with suitable coefficients) has $H^{k-1}(X^{i})$ changing with $i$ infinitely often, and $\varprojlim{}^{1}$ can be nonzero. The Milnor exact sequence itself shows that $h^{k}(X)$ is not determined by the $h^{k}(X^{i})$ alone when $\varprojlim{}^{1}\neq 0$. The correct statement is that the cohomology uniqueness requires an additional Mittag-Leffler/vanishing condition on the inverse system, not that it holds automatically for ordinary cohomology.
- **Proposed fix:** Replace with: "同じ望遠鏡の議論をコホモロジー理論（加法性は直積）に使うと、帰納極限の代わりに射影極限とその導来関手 $\varprojlim{}^{1}$ が現れ、ミルナーの完全列 $$0\to\varprojlim{}^{1}h^{k-1}(X^{i})\to h^{k}(X)\to\varprojlim h^{k}(X^{i})\to0$$ が得られる。通常のコホモロジーでも $\varprojlim{}^{1}$ は一般には消えない（例えば $X=\bigvee_{n}S^{n}$ では $H^{k-1}(X^{i})$ が安定しない）。$\varprojlim{}^{1}$ が消える（ミッタグ–レフラー条件が成り立つ）場合に限り、一意性が同じように成り立つ。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Additivity used only for disjoint unions is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (加法性の役割)
- **Detail:** The supplement says additivity is used only for the disjoint unions of infinitely many cells and of the $T_{i}$. But in Step 1 of the proof of Milnor's lemma, additivity is applied to $h_{k}(Y^{j},Y^{j-1})\cong\bigoplus_{\alpha}h_{k}(D^{j},\partial D^{j})$ for an arbitrary (possibly infinite) set of cells, and also to $h_{k}(Y^{0})$ for infinitely many 0-cells. These are disjoint unions of pairs, not literally of the spaces $T_{i}$ or cells alone; the phrasing '無限個の胞体と無限個の $T_{i}$ の非交和だけ' is at best imprecise and could mislead. More importantly, the claim that weakening additivity to finite disjoint unions leaves finite CW uniqueness intact is correct, but the sentence '無限 CW 複体での結論は保証されない' is fine; the imprecision is the enumeration of uses.
- **Proposed fix:** Replace with: "このページの議論で加法性を使ったのは、無限個の胞体からなる骨格の対 $(Y^{j},Y^{j-1})$ のホモロジー（$\bigoplus_{\alpha}h_{k}(D^{j},\partial D^{j})$ および $h_{k}(Y^{0})$）と、無限個の $T_{i}$ の非交和（$A$, $B$, $C$ の計算）である。"
- **Reported:** 2026-10-28 (10fede1)
