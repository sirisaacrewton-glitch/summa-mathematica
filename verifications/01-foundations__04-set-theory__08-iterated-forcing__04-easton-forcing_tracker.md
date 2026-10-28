# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/04-easton-forcing.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/04-easton-forcing.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Easton support only matters at weakly inaccessible cardinals
- **Category:** Supplement/remark error
- **Location:** set:sec-easton-po, remark after definition set:easton-po ("3 の (c) がなければ...")
- **Detail:** The text claims that since dom(E) contains only cardinals, condition (c) only says something new when λ is weakly inaccessible. This is false. Condition (c) is imposed for every regular λ, including successor cardinals λ = μ^{+}. For a successor cardinal λ = μ^{+}, the set λ∩dom(E) can contain many cardinals below μ (e.g. all ω_{n}), and (c) requires that fewer than λ = μ^{+} of them (i.e. at most μ many) have p(κ) ≠ 0. Without (c) one could have p(κ) ≠ 0 for all κ < μ, which is μ many, still < μ^{+}, so actually for successor λ the requirement |{κ<λ : p(κ)≠0}| < λ is automatically satisfied whenever each individual support is small... but the point is the claim as stated is imprecise: (c) is a genuine restriction at every regular λ where λ∩dom(E) has size ≥ λ, which can happen at successor cardinals too if dom(E) contains λ many cardinals below λ. The statement "(c) が新しいことを言うのは λ が弱到達不能のときだけ" is therefore not correct in general.
- **Proposed fix:** Replace with: "Condition (c) is automatically satisfied at a regular λ when |λ∩dom(E)| < λ. It is a genuine restriction precisely when λ∩dom(E) has size at least λ; in particular this always happens at weakly inaccessible λ (where λ∩dom(E) can be all of λ), which is the case the text emphasizes."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Case I claim cf(f(λ))>λ and 2^λ=f(λ)
- **Category:** Supplement/remark error
- **Location:** set:sec-easton-remarks, Case I bullet
- **Detail:** The bullet states: if cf(f(λ)) ≠ cf(λ) then ∃κ_{0}<λ ∀κ(κ_{0}≤κ<λ → 2^{κ}=2^{κ_{0}}) and "実際 cf(f(λ))>λ", and then 2^{λ}=f(λ). The assertion cf(f(λ))>λ does not follow from cf(f(λ))≠cf(λ); one only gets that f(λ) is eventually constant below λ, giving cf(f(λ)) = 1 (or a successor), not >λ. Also the conclusion 2^{λ}=f(λ) requires the additional hypothesis that f(λ) is eventually constant (which is what cf(f(λ))≠cf(λ) with f nondecreasing gives), but the stated intermediate claim "cf(f(λ))>λ" is wrong as written (e.g. f(λ) could be a successor cardinal with cofinality ω).
- **Proposed fix:** Replace "実際 cf(f(λ))>λ" with: "実際 f(λ) は λ 未満で最終的に定数（ある κ_{0}<λ で κ_{0}≤κ<λ なら 2^{κ}=2^{κ_{0}}）であり、したがって 2^{λ}=f(λ) が成り立つ（Kunen 第 VIII 章の演習 H1）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Silver's theorem attribution and hypotheses
- **Category:** Supplement/remark error
- **Location:** set:sec-easton-remarks, last paragraph
- **Detail:** The text attributes Silver's theorem to "Galvin–Hajnal 1975". Silver's theorem on the singular cardinal hypothesis (if λ is singular with cf(λ)>ω and 2^{κ}=κ^{+} for all κ<λ, then 2^{λ}=λ^{+}) is due to Silver (1974/1975); the Galvin–Hajnal result is a different (related) theorem on the number of subsets. The attribution "Galvin–Hajnal 1975" is a misattribution of Silver's theorem.
- **Proposed fix:** Change the attribution to "Silver 1974/1975" (シルヴァー 1974/75), removing "Galvin–Hajnal 1975".
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Magidor result statement
- **Category:** Supplement/remark error
- **Location:** set:sec-easton-remarks, paragraph on Prikry–Silver / Magidor
- **Detail:** The text says Magidor showed that if M has "巨大基数より少し強いもの" (something slightly stronger than a huge cardinal) one can force ∀n(2^{ω_{n}}=ω_{n+1}) ∧ 2^{ω_{ω}}=ω_{ω+2}. The known Magidor result requires a supercompact cardinal (or at least a strong cardinal), not merely "slightly stronger than huge"; and the precise pattern 2^{ω_{n}}=ω_{n+1} with 2^{ω_{ω}}=ω_{ω+2} is the standard Magidor example obtained from a supercompact. Stating "slightly stronger than huge" is an imprecise/understated hypothesis.
- **Proposed fix:** Replace "$M$ が巨大基数より少し強いものをもてば" with "$M$ が超コンパクト基数をもてば" (if M has a supercompact cardinal).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] 0# equivalence with failure of covering
- **Category:** Unsupported fact
- **Location:** set:sec-easton-remarks, paragraph on 0#
- **Detail:** The text states "$0^{\#}$ の定義から、\eqref{set:eq-covering} の否定は実は「$0^{\#}$ が存在する」と同値である". This is not correct as stated: the failure of the covering property (for all uncountable X there is Y⊇X in L with |Y|=|X|) is equivalent to the existence of 0# only under additional care; more precisely, the failure of covering for L is equivalent to "0# exists" only when one restricts to sets of ordinals and uses the standard formulation, and even then the equivalence requires that the failure happens at some uncountable cardinal. The blanket equivalence as stated is stronger than what is standard (covering failure is equivalent to 0# existing, but the precise formulation with |X|=|Y| and X⊆Y∈L needs X to be a set of ordinals of size ≥ ω_{1}, which is what is written, so the equivalence is essentially the standard Jensen covering theorem). However the phrase "$0^{\#}$ の定義から" (from the definition of 0#) is misleading: the equivalence is the content of Jensen's covering lemma, not a direct consequence of the definition of 0#.
- **Proposed fix:** Replace "$0^{\#}$ の定義から、... と同値である" with "ジェンセンの被覆補題により、\eqref{set:eq-covering} の否定は「$0^{\#}$ が存在する」と同値である".
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Shelah pcf bound statement
- **Category:** Supplement/remark error
- **Location:** set:supplement (関連する結果), pcf remark
- **Detail:** The supplement states Shelah's pcf result as "$2^{\aleph_{\omega}}<\aleph_{\omega_{4}}$（$\aleph_{\omega}$ が強極限のとき）". Shelah's theorem (the bound in the pcf theory) states that if $\aleph_{\omega}$ is a strong limit then $2^{\aleph_{\omega}}<\aleph_{\omega_{4}}$ — this is correct as the standard bound $\aleph_{\omega}^{\aleph_{0}}<\aleph_{\omega_{4}}$. However the parenthetical "$\aleph_{\omega}$ が強極限のとき" is the correct hypothesis. This appears correct; no issue.
- **Proposed fix:** No change needed (statement is correct).
- **Reported:** 2026-10-28 (10fede1)
