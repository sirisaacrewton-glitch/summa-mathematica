# Verification tracker: `04-analysis/01-real-analysis/02-calculus/01-continuity.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/01-continuity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Continuity points are G_delta: wrong example of a non-realizable set
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, second bullet)
- **Detail:** The supplement claims that a function continuous exactly on the rationals and discontinuous on the irrationals does not exist, citing Baire. This is correct as far as it goes (the rationals are not $G_{\delta}$), but the sentence is stated as if it were the sharp statement. The precise theorem is: the set of continuity points of any real function is a $G_{\delta}$ set, and conversely every $G_{\delta}$ set is the continuity set of some function. The supplement omits the converse, and the example chosen (rationals) is only one instance. More importantly, the claim as written ("有理数の上でちょうど連続で無理数の上で不連続な関数は存在しない") is true but the reason given ("ベールのカテゴリー定理による") is imprecise: the non-existence follows because $\mathbb{Q}$ is not $G_{\delta}$ (a countable dense set that is $G_{\delta}$ would be comeager, contradicting that $\mathbb{R}\setminus\mathbb{Q}$ is dense and $\mathbb{Q}$ is meager). The statement is not false, but it is stated more narrowly than the actual theorem and the attribution is loose.
- **Proposed fix:** Replace with: "一般の関数 $f\\colon D\\to\\mathbb{R}$ について、$f$ の連続点の集合は必ず $G_{\\delta}$ 集合になる。逆に、任意の $G_{\\delta}$ 集合はある関数の連続点の集合として実現できる（知られている）。とくに $\\mathbb{Q}$ は $G_{\\delta}$ でない（$\\mathbb{Q}$ が $G_{\\delta}$ なら $\\mathbb{R}\\setminus\\mathbb{Q}$ が疎集合の可算和となり、$\\mathbb{R}$ が痩せた集合の可算和になってベールのカテゴリー定理に反する）ので、有理数の上でちょうど連続な関数は存在しない。トマエ関数は連続点が無理数全体（$G_{\\delta}$）となる例である。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Monotone functions are differentiable a.e.: attribution to Lebesgue is fine but the parenthetical is misleading
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, third bullet)
- **Detail:** The statement "単調関数はほとんど至る所微分可能である（ルベーグの定理）" is correct (Lebesgue's theorem). However, the parenthetical "\ref[測度論]{meas:lebesgue-measure} の後で扱える" links to a page whose label table entry has an empty kind and empty page, i.e. the target is not a well-defined result on this site. As a logical pointer this is harmless, but the claim that it "can be treated after the measure theory page" is an unsupported forward reference: the cited label does not resolve to a concrete theorem. This is a side comment whose content (the forward reference) is not justified.
- **Proposed fix:** Either remove the forward reference, or state it precisely: "単調関数はほとんど至る所微分可能である（ルベーグの定理。測度論のページで扱う）。" and ensure the cited label actually exists.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Zermelo-Fraenkel claim about global theorems is stronger than justified
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると, second sentence)
- **Detail:** The supplement asserts "このページの大域的な定理（中間値・最大値・一様連続性・不連続点の可算性）はすべて $\ZF$ で証明できた". The countability of the discontinuity set of a monotone function is proved in the text using the fixed injection $e\colon\mathbb{Q}\to\omega$ and choosing "the first rational" in each interval $(f(c-),f(c+))$; this is a legitimate $\ZF$ argument because $e$ is a fixed well-ordering of $\mathbb{Q}$ (no choice needed). That part is fine. But the intermediate value theorem and extreme value theorem are cited from the general topology pages (\ref{top:intermediate-value}, \ref{top:extreme-value}, \ref{top:heine-cantor}); whether those are proved in $\ZF$ is not established on this page, and the text itself says the global properties are used "合わせて" with (HB) and (Conn) from \ref{calc:continuity-axioms-equivalent}. The blanket claim that all of them are $\ZF$-provable is therefore not supported by what is shown here. (The claim is in fact true for these particular theorems, but the page does not verify the hypotheses of the cited general theorems in $\ZF$; the assertion as a summary of "what was proved on this page" overstates the page's own content.)
- **Proposed fix:** Weaken to: "このページで $\\ZF$ のみを用いて証明したのは、単調関数の不連続点の可算性と、連続関数の演算・逆関数の連続性である。中間値・最大値・一様連続性は一般位相の定理（\ref{top:intermediate-value}, \ref{top:extreme-value}, \ref{top:heine-cantor}）を (HB)・(Conn) とともに用いて導いた。"
- **Reported:** 2026-10-28 (10fede1)
