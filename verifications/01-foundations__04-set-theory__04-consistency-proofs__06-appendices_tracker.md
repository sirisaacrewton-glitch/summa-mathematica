# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/06-appendices.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/06-appendices.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problems are in the stated-only facts and side remarks: Fact 6.13(3) misattributes the construction of a non-well-founded ω-model elementary extension to the omitting types theorem (compactness is the right tool), and the metatheory discussion overstates what the reflection theorem gives (a single R(β) modeling all of ZFC requires an inaccessible-like assumption, not just "ZFC is true in V"). The remaining remarks are hedged and mostly acceptable; the large-cardinal linearity remark is an overstatement but already qualified. No issues in the proofs themselves were found.

## Issues

### ISSUE-0001 [Open] ω モデルの基本事項 3 の「省略型定理による」は過剰・不正確
- **Category:** Supplement/remark error
- **Location:** set:omega-model-facts / item 3
- **Detail:** Fact 6.13(3) states that every countable ω-model has an ω-model elementary extension that is not well-founded, citing the omitting types theorem. The standard construction (Kunen) uses compactness: add a new constant c together with the axioms c∈ω and c≠n for each standard n, and take a countable elementary extension; this yields an ω-model that is not well-founded (the interpretation of c is a nonstandard natural number, and the model cannot be well-founded). The omitting types theorem is not the natural or correct tool here (it is used for other purposes, e.g. omitting a type to get models with prescribed properties), and the claim as stated attributes the result to the wrong theorem. This is a misattribution in a stated-only fact.
- **Proposed fix:** Replace the parenthetical "(省略型定理による)" with "(コンパクト性定理による)": add a new constant c with axioms c∈ω and c≠n for all standard n, and take a countable elementary extension; the element interpreting c is nonstandard, so the extension is an ω-model that is not well-founded.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 「ZFC は V で真なので、おそらく ZFC は整礎なモデルをもつ」の含意が不正確
- **Category:** Supplement/remark error
- **Location:** set:sec-metatheory-model-theory / paragraph after example
- **Detail:** The text says: "ZFC は V で真なので、おそらく ZFC は整礎なモデルをもつ。すなわち反映定理の議論をメタの理論ですべての論理式について同時に行えば、ZFC のモデルである R(β) が得られる". The reflection argument applied to all formulas simultaneously requires the existence of a limit ordinal β with R(β) satisfying all of ZFC, which is not derivable in ZFC alone (it is equivalent to the existence of an inaccessible, or at least to Con(ZFC) plus more). The phrase "おそらく" hedges this, but the sentence "すなわち…R(β) が得られる" presents it as following from the reflection theorem, which is misleading: the reflection theorem only gives, for each finite set of axioms, some β, not a single β for all axioms. This is an overstated claim in a side remark.
- **Proposed fix:** Rewrite as: "ZFC が V で真であると信じるなら、ZFC は整礎なモデルをもつと期待される。しかし反映定理は各有限個の公理に対して R(β) の存在を与えるだけで、すべての公理を同時に満たす単一の β の存在は ZFC からは導けず、到達不能基数の存在（あるいはそれに類する強い仮定）を要する。Kunen はこの議論を「プラトン主義的」と呼んでいる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 「ZFC−Inf はペアノ算術の中で解釈でき」の記述
- **Category:** Supplement/remark error
- **Location:** set:sec-metatheory-model-theory / paragraph on R(ω)
- **Detail:** The text states "ZFC−Inf はペアノ算術の中で解釈でき（Kunen 第 IV 章の演習 30）". Kunen's exercise concerns interpreting ZFC−Inf (or a suitable finite fragment) in PA via the hereditarily finite sets, but the direction and content should be stated carefully: it is ZFC−Inf (with the axiom of infinity negated, i.e. the theory of hereditarily finite sets) that is interpretable in PA, and this is what yields Con(PA)→Con(ZFC−Inf). The sentence as written is essentially correct in direction but the parenthetical attribution to "演習 30" and the surrounding claim that "ペアノ算術は直観主義的に無矛盾だから" Con(ZFC−Inf) is intuitionistically acceptable needs the caveat that this uses the interpretation plus the intuitionistic consistency of PA. This is borderline; the main issue is the imprecise attribution.
- **Proposed fix:** Clarify: "ZFC−Inf（無限公理の否定を加えた、遺伝的有限集合の理論）はペアノ算術 PA の中で解釈できる（Kunen 第 IV 章の演習）。したがって PA の無矛盾性が直観主義的に受け入れられるなら、ZFC−Inf の無矛盾性も受け入れられる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] 「大きな基数の公理は無矛盾性の強さによってほぼ線形に並ぶ」の過度な一般化
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says large cardinal axioms are observed to line up almost linearly by consistency strength. This is a widely repeated heuristic, but it is stated as an empirical observation and hedged with "一般にはこう言われている". However, the claim that they are "ほぼ線形" is an oversimplification: there are known incomparable large cardinal notions (e.g. via the hierarchy there are statements whose consistency strength is not known to be comparable), and the linearity is conjectural, not established. Since the text already hedges, this is a minor overstatement but still worth correcting to avoid asserting a false general picture.
- **Proposed fix:** Soften to: "大きな基数の公理の多くは無矛盾性の強さによって比較的きれいに並ぶことが観察されているが、すべてが線形に並ぶかは知られておらず、比較不能なものもありうる。これは定理ではなく経験的な観察である。"
- **Reported:** 2026-10-28 (8ccef3d)
