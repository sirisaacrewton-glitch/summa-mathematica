# Verification tracker: `01-foundations/03-computation/02-computability/13-models-summary.html`

<!-- source: 01-foundations/03-computation/02-computability/13-models-summary.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The theorem, proof table, hypcheck and corollary are logically sound: each arrow is correctly attributed to the cited results, the restriction of lambda-definability to total functions is properly justified, and the language-level statement of part 2 matches the cited multitape/nondeterminism theorems. The genuine problems are confined to the supplement: the Post correspondence problem is misdescribed as a model of computation (should be Post tag/rewriting systems), cellular automata are claimed wholesale to define the same class when only specific Turing-complete ones do, and the Kleene attribution for the partial-function lambda-definability statement is imprecise.

## Issues

### ISSUE-0001 [Open] Post correspondence problem is not a model of computation
- **Category:** Supplement/remark error
- **Location:** supplement / 他の模型
- **Detail:** The supplement lists 「ポストの対応問題の体系」 (the Post correspondence problem) among systems that 'define the same class'. The Post correspondence problem is a specific undecidable decision problem, not a model of computation defining a class of computable functions. The intended notion is presumably Post's tag systems / Post systems (Post's rewriting systems), which are Turing complete. As written the claim is false/misattributed.
- **Proposed fix:** Replace 「ポストの対応問題の体系」 with 「ポストのタグ体系（ポストの書き換え体系）」, i.e. 'Post's tag systems (Post rewriting systems)'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Cellular automata do not all define the same class
- **Category:** Supplement/remark error
- **Location:** supplement / 他の模型
- **Detail:** The supplement says 'セル・オートマトン ... も同じクラスを定める'. Only specific cellular automata (e.g. Rule 110, Game of Life) are Turing complete; general cellular automata are not all computationally universal. The unqualified statement is overstated.
- **Proposed fix:** Say 'チューリング完全なセル・オートマトン（例えば Rule 110 やライフゲーム）' instead of 'セル・オートマトン' generally.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Kleene attribution for partial lambda-definability
- **Category:** Supplement/remark error
- **Location:** supplement / 部分関数のラムダ定義可能性
- **Detail:** The claim that partial lambda-definability (with 'no normal form when undefined') coincides with computability is attributed to Kleene. While Kleene established lambda-definability of recursive functions, the precise statement about partial functions via 'no normal form' is more naturally credited to later work; the bare attribution '(クリーネ)' to this exact partial-function formulation is imprecise. This is a minor attribution issue but the statement as given overstates the historical attribution.
- **Proposed fix:** Soften to '（クリーネの結果を部分関数に拡張したもの）' or remove the parenthetical attribution, stating only that the equivalence is known.
- **Reported:** 2026-10-28 (8ccef3d)
