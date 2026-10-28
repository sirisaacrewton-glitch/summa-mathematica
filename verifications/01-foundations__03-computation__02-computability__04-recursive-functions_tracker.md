# Verification tracker: `01-foundations/03-computation/02-computability/04-recursive-functions.html`

<!-- source: 01-foundations/03-computation/02-computability/04-recursive-functions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Misattribution of structured program theorem to Böhm–Jacopini
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (構造化定理)
- **Detail:** The supplement states that \ref{comp:one-while} is the L-form of the Böhm–Jacopini theorem, described as "goto を使う流れ図は、逐次・分岐・繰り返しの組み合わせで書ける". The Böhm–Jacopini theorem (1966) is about expressing flowcharts with goto using only sequencing, selection and iteration (it does not by itself give a single while loop). The claim that every computable function can be computed by a program with exactly one while loop (all else for-loops) is the structured program theorem / Kleene normal form result, not Böhm–Jacopini. Attributing the one-while-loop statement to Böhm–Jacopini overstates/misattributes the result.
- **Proposed fix:** Replace with: "*構造化定理.* \ref{comp:one-while} は、任意の計算可能関数が while ループ一つ（他は for ループ）で計算できるという主張で、クリーネの標準形定理の L についての形である。これはベーム–ヤコピーニの定理（goto を含む流れ図が逐次・分岐・繰り返しで書ける）を精密化したものである。L の場合は、補助の変数（燃料、状態の組）を使ってよいことが本質的である。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Kleene's first recursion theorem mischaracterized as 'least fixed point of computable functionals is computable'
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (クリーネの不動点定理)
- **Detail:** The supplement says "計算可能な汎関数の最小不動点は計算可能であることが知られている" as the content of Kleene's first recursion theorem. The first recursion theorem states that the least fixed point of a computable functional is itself computable (and is the limit of iterating the functional from bottom), which is roughly right, but the phrasing "計算可能な汎関数の最小不動点は計算可能" is imprecise: it holds for functionals that are computable (recursive) and monotone on the appropriate domain; without monotonicity/continuity the least fixed point need not be computable. Also the connection drawn to while-loop least-fixed-point semantics is loose. As stated it is an overstatement.
- **Proposed fix:** Replace with: "*クリーネの第一再帰定理.* 計算可能（再帰的）で単調な汎関数 $\Phi$ に対し、その最小不動点は計算可能であり、$\bot$ から $\Phi$ を繰り返し適用した極限として得られる。while ループの意味が最小不動点であること（\ref{comp:page-language-L} の補足）は、この定理の一例である。"
- **Reported:** 2026-10-28 (10fede1)
