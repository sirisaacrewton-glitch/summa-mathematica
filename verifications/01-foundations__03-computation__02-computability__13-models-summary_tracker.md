# Verification tracker: `01-foundations/03-computation/02-computability/13-models-summary.html`

<!-- source: 01-foundations/03-computation/02-computability/13-models-summary.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Post's correspondence problem is not a model of computation
- **Category:** Supplement/remark error
- **Location:** supplement / 他の模型
- **Detail:** The supplement lists 「ポストの対応問題の体系」 (Post's correspondence problem) among systems that 'define the same class' as the models of computation. PCP is a decision problem (a combinatorial problem over dominoes), not a model of computation that defines a class of computable functions. It is undecidable, but it is not a computational model equivalent to L/TM/recursive functions. This is a false/misleading claim in a supplement.
- **Proposed fix:** Replace 「ポストの対応問題の体系」 with a genuine model, e.g. 「ポストのタグ体系（Post tag systems）やポスト機械（Post–Turing machines）」, or remove the item. For example: 「セル・オートマトン、ポストのタグ体系、型なしの組合せ論理（\ref{logic:cl-lambda-translation}）、多くのプログラミング言語なども同じクラスを定めることが知られている（\ref{comp:turing-complete-examples}）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Kleene's result needs the 'no normal form' convention, and the attribution is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 部分関数のラムダ定義可能性
- **Detail:** The supplement says partial-function lambda-definability (with the convention that undefined means no normal form) coincides with computability and attributes this to Kleene. The statement itself is essentially correct, but the phrasing 「クリーネ」 as the sole attribution is imprecise: the standard result (Kleene's normal form theorem / the equivalence of partial recursive functions and lambda-definable partial functions) is usually stated for partial recursive functions, and the 'no normal form' convention is a definitional choice, not part of Kleene's original theorem. Also the claim that the proof 'requires the normalization theorem' is overstated: the equivalence can be shown via the second recursion theorem / Kleene's T-predicate without invoking normalization; normalization is one route, not a necessity.
- **Proposed fix:** Rewrite as: 「部分関数についても、定義されないとき正規形をもたないという規約を置けば、ラムダ定義可能な部分関数はちょうど部分再帰関数と一致する（クリーネ）。これはクリーネの標準形定理を用いて示せる；最左簡約による正規化定理（\tref{logic:page-normalization}）を用いる証明もある（\ref{logic:page-partial-lambda-definability}）。」
- **Reported:** 2026-10-28 (10fede1)
