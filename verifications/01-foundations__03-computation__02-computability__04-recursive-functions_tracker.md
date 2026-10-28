# Verification tracker: `01-foundations/03-computation/02-computability/04-recursive-functions.html`

<!-- source: 01-foundations/03-computation/02-computability/04-recursive-functions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definitions, the computability of partial recursive functions, the fuel semantics and its primitive-recursiveness, the normal form theorem and the corollaries are all sound, and the hypcheck comments are accurate. The genuine problems are confined to the supplement: the attribution of the one-while corollary to Böhm–Jacopini overstates that theorem (it concerns structured programming, not a single loop), and the description of Kleene's first recursion theorem omits the essential monotonicity/computability hypotheses on the functional. A third candidate about the Σ₁ characterization was checked and found acceptable, so it is not reported.

## Issues

### ISSUE-0001 [Open] Böhm–Jacopini attribution for one-while corollary
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (構造化定理)
- **Detail:** The supplement says that \ref{comp:one-while} (every L-computable partial function is computed by a program with exactly one while loop, whose inside and outside are for-programs) is the L-form of the Böhm–Jacopini theorem. Böhm–Jacopini (the structured program theorem) states that every flowchart using goto can be expressed using sequencing, selection and iteration; it does not assert that a single while loop suffices. The one-while result is closer to the Kleene normal form theorem (a single unbounded search/minimization suffices). Attributing the 'exactly one while loop' claim to Böhm–Jacopini overstates that theorem.
- **Proposed fix:** Replace with: '*構造化定理（ベーム–ヤコピーニ）との関係.* ベーム–ヤコピーニの定理は、goto を使う流れ図が逐次・分岐・繰り返しの組み合わせで書けることを述べる。\ref{comp:one-while} はそれをさらに進め、繰り返しを一つの while ループに集約できることを述べるもので、本質はクリーネの標準形（最小化一回で足りる）にある。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Kleene's first recursion theorem mischaracterized
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (クリーネの不動点定理)
- **Detail:** The supplement states '計算可能な汎関数の最小不動点は計算可能である' as Kleene's first recursion theorem. The first recursion theorem says that the least fixed point of a computable functional is itself computable (indeed the least fixed point is the limit of iterating the functional from the empty function, and is computable), but the phrasing '最小不動点は計算可能' is acceptable only for functionals on partial functions that are computable in the appropriate sense; more importantly, the claim that the while-loop semantics being a least fixed point 'generalizes' to general recursive definitions is imprecise: the first recursion theorem concerns monotone computable functionals on partial functions, and the least fixed point is computable, but the statement as written ('計算可能な汎関数の最小不動点は計算可能') is false for arbitrary computable functionals (e.g. on total functions or without monotonicity/continuity). The unstated hypothesis (monotone/continuous computable functional on partial functions) is essential.
- **Proposed fix:** Replace with: '*クリーネの第一再帰定理.* 部分関数上の単調かつ計算可能な汎関数 $\Phi$ の最小不動点は計算可能である。while ループの意味が最小不動点として定まること（\ref{comp:page-language-L} の補足）は、この定理の特別な場合にあたる。'
- **Reported:** 2026-10-28 (8ccef3d)
