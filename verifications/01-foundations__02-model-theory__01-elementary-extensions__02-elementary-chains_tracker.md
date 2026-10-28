# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/02-elementary-chains.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/02-elementary-chains.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The proofs (Łoś–Tarski, Tarski–Vaught, Chang–Łoś–Suszko) and the auxiliary lemmas are logically sound, and the citations match their targets. The genuine problems are confined to the supplement: the claim that closure under unions of ω-chains alone yields universal-existential axiomatizability is false, the 'finite structures' illustration of failure of compactness is imprecise, and the 'equations ↔ HSP' correspondence is stated too loosely. No issues in the main theorem statements or proofs were found.

## Issues

### ISSUE-0001 [Open] ω型の鎖への制限では Chang–Łoś–Suszko の 1 は従わない
- **Category:** Supplement/remark error
- **Location:** supplement「前提の検討」第2項目
- **Detail:** 「ω 型の鎖の和で閉じる」だけで 1（全称存在文による公理化）が従うという主張は偽である。Chang–Łoś–Suszko の 2 ⇒ 1 の証明は、与えられた任意のモデル M から ω 型の互い違いの鎖を作るものであり、仮定として必要なのは「T のモデルからなる任意の（全順序・上に有向な）鎖の和が T のモデル」という閉包性であって、ω 型に制限した閉包性からは Step 1 で使う鎖の構成（B ⊂ A^{+} で A ≼ A^{+} という一段の拡大）を導けない。ω 型鎖閉包性は一般に全称存在公理化を特徴づけない。
- **Proposed fix:** Replace with: 「鎖の添字は全順序（あるいは上に有向）なら何でもよい。チャン–ウォシュ–スシコの定理の証明では、与えられたモデルから ω 型の互い違いの鎖を構成しており、仮定 2 は任意の鎖についての閉包性を要する。ω 型の鎖の和についての閉包性だけでは 1 は従わない。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 「有限構造だけを考える場合」はコンパクト性の反例になっていない
- **Category:** Supplement/remark error
- **Location:** supplement「前提の検討」第1項目
- **Detail:** 「コンパクト性の成り立たない論理（たとえば有限構造だけを考える場合）」という例示は不正確である。有限構造のみを領域とする「論理」は一階の言語の論理ではなく、コンパクト性定理が適用される対象ではない。また Łoś–Tarski の 2 ⇒ 1 は本質的にコンパクト性（および AC）を用いるが、「有限構造だけを考える場合に Łoś–Tarski が成り立たない」というタイトの例の記述は、この文脈での主張として曖昧で、そのままでは誤解を招く。
- **Proposed fix:** Replace with: 「両定理とも 2 ⇒ 1 の向きでコンパクト性定理（および選択公理）を使う。コンパクト性が成り立たない文脈ではこれらの保存定理は一般に成立しない。」（有限構造の例示は削除するか、コンパクト性の反例ではないことを明記する。）
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 等式 ↔ HSP の対応の記述が不正確
- **Category:** Supplement/remark error
- **Location:** supplement「高い視点から」
- **Detail:** 「等式 ↔ HSP」と並列に書かれているが、バーコフの HSP 定理は「等式で公理化できるクラス = 準同型像・部分代数・直積で閉じたクラス」であり、閉包性の側は部分構造だけでなく準同型像と直積を含む。前段の「全称 ↔ 部分構造、全称存在 ↔ 鎖の和」と同列に「等式 ↔ HSP」と書くと、閉包性の対応が一対一であるかのように読め、不正確である。
- **Proposed fix:** Replace with: 「全称 ↔ 部分構造、全称存在 ↔ 鎖の和、そして等式で公理化できるクラス ↔ 準同型像・部分代数・直積での閉包性（HSP）が対応する。」
- **Reported:** 2026-10-28 (8ccef3d)
