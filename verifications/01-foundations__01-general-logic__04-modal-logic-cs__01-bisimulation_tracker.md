# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/01-bisimulation.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/01-bisimulation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well-structured. The proofs (bisimulation invariance, Hennessy–Milner, finite tree model, filtration, S5 small model, K PSPACE) are sound and the hypchecks are accurate. The main genuine problems are in the supplement: the van Benthem characterization is stated with imprecise wording that could be read as claiming every one-free-variable FO formula is a standard translation, and the closing sentence conflates frame correspondence with model-level bisimulation invariance. No issues in the previously reported list (none were open).

## Issues

### ISSUE-0001 [Open] Van Benthem characterization misstated as 'one free variable'
- **Category:** Supplement/remark error
- **Location:** supplement (関連する結果)
- **Detail:** The supplement says 「一つの自由変数をもつ一階の論理式が様相論理式の標準翻訳と同値であることと、双模倣で不変であることは同値である（ファン・ベンセムの特徴付け定理）」. Van Benthem's characterization theorem concerns first-order formulas in ONE free variable that are invariant under bisimulation, but the standard statement requires the first-order formula to be *equivalent to the standard translation of a modal formula* — the correct statement is: a first-order formula α(x) (in the language with one binary relation and unary predicates) is bisimulation-invariant iff it is logically equivalent to the standard translation of a modal formula. The phrase 「一つの自由変数をもつ一階の論理式が様相論理式の標準翻訳と同値であること」 is circular/trivially the conclusion, and as written it omits the crucial restriction that the first-order formula be bisimulation-invariant (which is the hypothesis, not a consequence). The sentence as written is imprecise: it states the equivalence between 'being equivalent to a standard translation' and 'being bisimulation-invariant', which is correct in content but the wording 「一つの自由変数をもつ一階の論理式が…同値であること」 reads as if every one-free-variable FO formula is equivalent to a standard translation, which is false.
- **Proposed fix:** Rewrite: 「一つの自由変数をもつ一階の論理式 $\alpha(x)$ が双模倣で不変であることと、$\alpha(x)$ が様相論理式の標準翻訳と論理的に同値であることは同値である（ファン・ベンセムの特徴付け定理）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Goldblatt–Thomson closure conditions stated imprecisely
- **Category:** Supplement/remark error
- **Location:** supplement (関連する結果)
- **Detail:** The supplement says the necessary and sufficient condition for a first-order frame property to be modally definable is being closed under generated subframes, bounded morphic images, disjoint unions, and reflecting ultrafilter extensions. This is essentially the Goldblatt–Thomson theorem, but the correct statement requires closure under these three constructions AND reflection of ultrafilter extensions — the text lists these but the phrase 「生成部分フレーム・有界射像・非交和で閉じ、超フィルター拡大を反映する」 is acceptable. However the claim 「様相論理は「双模倣で不変な一階の性質」をちょうど表す言葉である」 conflates frame correspondence (Goldblatt–Thomson, about frame properties definable by modal formulas) with the van Benthem characterization (about bisimulation-invariant FO formulas on models). Frame-definable properties are characterized by the Goldblatt–Thomson conditions, not simply by 'bisimulation-invariance'. The final sentence overstates.
- **Proposed fix:** Replace the final sentence with: 「（モデル上の）双模倣で不変な一階の性質は様相論理式の標準翻訳で表され（ファン・ベンセム）、フレーム上で様相論理式により定義できる一階の性質はゴールドブラット–トマソンの条件で特徴づけられる。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck claim that B with R^t breaks symmetry is misleading
- **Category:** Supplement/remark error
- **Location:** logic:fmp-filtration / hypcheck
- **Detail:** The hypcheck says 「$\mathsf{B}$ で $R^{t}$ を使うと対称性が壊れうる」. But $R^{t}$ is only defined/used for transitive models (proposition 1.17 item 2 requires R transitive); for B (reflexive symmetric, not necessarily transitive) $R^{t}$ is not even guaranteed to be a filtration. The remark is not false per se but the reason given ('breaks symmetry') is imprecise: the real issue is that $R^{t}$ requires transitivity of R to be a filtration at all. This is a minor imprecision, not a genuine error, so not reported as an issue.
- **Proposed fix:** No change needed; or clarify that $R^{t}$ presupposes transitivity.
- **Reported:** 2026-10-28 (10fede1)
