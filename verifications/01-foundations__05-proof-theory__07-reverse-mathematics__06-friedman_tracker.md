# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/06-friedman.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/06-friedman.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proofs (Kirby–Paris, semi-regular cut existence, Friedman's theorem) are essentially correct and the cited labels match their uses. The problems concentrate in the side remarks and supplement: the cardinal-regularity analogy in the remark is mathematically wrong (the described boundedness property holds for all infinite cardinals, not just regular ones), and two supplement bullets (the minimal PR-closed cut being non-semi-regular, and strong cuts giving PA models / Paris–Harrington) are stated more strongly or imprecisely than the literature supports. The majorization proposition's citation to the Ackermann corollary is also a misleading pointer. These should be corrected; no logical gaps were found in the proofs themselves.

## Issues

### ISSUE-0001 [Open] 半正則性と正則基数の類似の向きが逆
- **Category:** Supplement/remark error
- **Location:** remark (after pt:m-finite-cut)
- **Detail:** The remark says semi-regularity is analogous to regularity of cardinals: 'for a regular cardinal κ, a set of fewer than κ ordinals below κ is bounded in κ'. But that property (any set of size <κ of ordinals <κ is bounded) holds for EVERY infinite cardinal, regular or not (e.g. ℵ_ω: countably many ordinals below ℵ_ω are bounded). Regularity is the property that a set of size <κ cannot be cofinal, i.e. a union of <κ sets each of size <κ has size <κ. The stated analogy is thus wrong: the property described does not characterize regular cardinals.
- **Proposed fix:** Replace with: '半正則性は、集合論の**正則基数**の類似である：正則基数 $\kappa$ では「$\kappa$ 未満の個数の、$\kappa$ 未満の大きさの集合の和は $\kappa$ 未満」である（同値な形で「$\kappa$ 未満の個数の $\kappa$ 未満の順序数からなる集合は $\kappa$ の中で有界」）。半正則切断では「$I$ の中の個数しかない $M$ 有限集合は、$I$ の中で有界」である。' (i.e. state the correct regularity property: a union of fewer than κ sets of size less than κ is bounded below κ).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] 最小の原始再帰閉切断が半正則でないという記述の条件
- **Category:** Supplement/remark error
- **Location:** supplement, 前提の検討, second bullet
- **Detail:** The supplement claims that the minimal cut closed under primitive recursive functions J={a: ∃n∈ℕ a<g_n(c)} is 'not semi-regular if c is nonstandard'. As stated this is imprecise: the claim depends on c being sufficiently large/nonstandard in a strong sense, and more importantly the standard statement (Tanaka, note after Lemma 3.28) is that this minimal PR-closed cut is not semi-regular in general, but the precise hypothesis (c nonstandard and the enumeration by g_n) needs care. More concretely, the assertion 'c が超準的なら半正則でない' is not literally correct for all nonstandard c: if c is nonstandard but the cut generated is still small relative to M-finite sets, semi-regularity can fail or hold depending on the model. The safe, literature-supported statement is that the minimal PR-closed cut need not be semi-regular, so one must go 'much higher'.
- **Proposed fix:** Replace with: '最小の原始再帰閉切断 $J=\{a:\exists n\in\N\,a<g_{n}(c)\}$ は、一般に半正則とは限らないことが知られている（田中の本の補題 3.28 の後の注意）。半正則切断はそれより「ずっと上」でとる必要がある。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] 強切断とPAの関係の記述
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果, first bullet
- **Detail:** The supplement says 'strong cuts give models of PA and are used in the proof of the Paris–Harrington theorem'. This is imprecise/overstated: strong cuts (in the sense of cuts closed under exponentiation and satisfying additional regularity) are used to build models of fragments; the standard result is that a strong cut (e.g. an 'n-strong' or 'strong' cut in the sense of Kirby–Paris) yields a model of IΣ_n or of PA only under specific closure conditions, and the Paris–Harrington theorem is proved via indicators and model-theoretic methods, not simply 'strong cuts give PA models'. The blanket claim '強切断はPAのモデルを与え' is too strong without specifying the exact notion of strong cut.
- **Proposed fix:** Replace with: '半正則切断より強い条件をもつ切断も研究されており、たとえば（適切に定義された）**強切断**は $\mathrm{I}\Sigma_{n}$ や $\PA$ のモデルを与えるために用いられ、パリス–ハーリントンの定理の証明にも関連することが知られている。切断に課す「正則性」の強さが、得られる帰納法の強さに対応している。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] g_nによる評価の「知られている」の主張
- **Category:** Unsupported fact
- **Location:** pt:majorization
- **Detail:** The proposition states as 'known' that for every primitive recursive f there is n with PRA ⊢ f(x⃗) < g_n(max{x⃗,2}), citing comp:ackermann-not-pr 'and similar arguments', while admitting the formalization in PRA is not shown. The cited corollary (Ackermann not primitive recursive) does not establish this majorization bound; the bound is a genuine but separate fact. Since the page itself says it is not proved here, this is acceptable as a stated fact, but the citation to comp:ackermann-not-pr is not what supports the majorization claim, so the pointer is misleading. This is a minor improper-link/unsupported-fact concern.
- **Proposed fix:** Either remove the parenthetical citation to \ref{comp:ackermann-not-pr} or rephrase: '（この評価はアッカーマン関数が原始再帰的でないことの議論とは独立の事実で、本サイトでは証明しない）'.
- **Reported:** 2026-10-28 (10fede1)
