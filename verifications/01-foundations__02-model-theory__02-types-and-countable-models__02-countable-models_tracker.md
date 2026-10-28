# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/02-countable-models.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/02-countable-models.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are sound. The most serious problem is in the supplement: the example attributed to Vaught's theorem ('DLO plus an increasing sequence of constants gives exactly 3 countable models') is false. A secondary imprecision concerns the justification of the converse (countable prime ⇒ atomic), which silently relies on the omitting types theorem. No issues found in the core proofs.

## Issues

### ISSUE-0001 [Open] Vaught's theorem misstated as 'never exactly 2'
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (Vaught's theorem)
- **Detail:** The supplement says the number of isomorphism classes of countable models of a complete theory in a countable language is 'never exactly 2' (ちょうど 2 にはならない). Vaught's theorem (Vaught never two) states the number is never exactly 2 — that part is fine — but the parenthetical example is wrong: 'DLO with an increasing sequence of constants added' does not give exactly 3 countable models. Adding an increasing ω-sequence of constants to DLO forces the constants to be cofinal-unbounded below/above; the resulting theory has more than 3 countable models (the constants can be bounded above or unbounded, and the position of the constants relative to the dense order gives infinitely many possibilities). So the claimed 'exactly 3' example is false.
- **Proposed fix:** Replace the parenthetical with a correct example, e.g.: '（例えば、可算言語で可算モデルの同型類がちょうど 3 個になる完全な理論が存在する。）' or simply delete the parenthetical example, keeping only the statement that the number is never exactly 2.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Converse 'countable prime ⇒ atomic' stated without the countability/omitting caveat
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 (素モデルの逆)
- **Detail:** The supplement asserts that a countable prime model is atomic, justified by 'an elementary embedding into a model omitting a non-isolated type is forbidden'. This is correct for countable prime models, but the phrasing '可算な素モデルは原子的' is fine; however the justification as written ('孤立していない型の実現を、それを省略するモデルへの初等埋め込みが許さない') implicitly requires that such an omitting model exists, which needs the omitting types theorem and countability of the language. As stated it is acceptable but the reasoning is imprecise about needing the omitting-types theorem. This is borderline; flagging the imprecision.
- **Proposed fix:** Make the dependence explicit: '可算な素モデルは原子的である：孤立していない型 q を実現するなら、型の省略定理で q を省略する可算モデルがとれ、素モデルからの初等埋め込みが q の実現を強いるので矛盾。'
- **Reported:** 2026-10-28 (8ccef3d)
