# Verification tracker: `04-analysis/01-real-analysis/02-calculus/03-taylor.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/03-taylor.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Borel's theorem misattributed to exp-log page and stated without needed smoothness context
- **Category:** Supplement/remark error
- **Location:** supplement (second one) / 一般化と関連する事実
- **Detail:** The supplement says that a C^∞ function with an arbitrary prescribed sequence as Taylor coefficients (Borel's theorem) is treated in the exp-log page. Borel's theorem is a nontrivial result about C^∞ functions on R (or on an interval) and is not a consequence of defining the exponential; it is not plausibly established on the exp-log page. Also the statement '任意の数列をテイラー係数にもつ C^∞ 級関数' is only true when the coefficients are interpreted as a_k = f^{(k)}(a)/k! (any sequence works), which is fine, but the attribution/link is the problem.
- **Proposed fix:** Replace with: '任意の数列 $(a_{k})$ に対し、$f^{(k)}(0)/k!=a_{k}$ を満たす $C^{\infty}$ 級関数 $f$ が存在する（ボレルの定理）。これは $C^{\infty}$ 級関数が一般には解析的でないことを示す標準的な例を与える。' and remove the \ref to the exp-log page for Borel's theorem (keep it only for $e^{-1/x^{2}}$ if that is actually treated there).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that all-derivatives-zero functions can be min, max, or neither is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (second one) / 前提を変えると
- **Detail:** The text says: 'すべての導関数が 0 の関数は、極小・極大・どちらでもない、のいずれもありうる'. For a function with f^{(k)}(a)=0 for all k, the higher-derivative test indeed says nothing, and examples exist for each case (e.g. x^{2} type behavior via e^{-1/x^{2}} variants, x^{3} type, and oscillatory). However the phrasing 'すべての導関数が 0 の関数' is ambiguous: it should be 'a で全ての高階導関数が 0 となる関数' (at a point), since a function whose derivatives all vanish everywhere is constant. As written it is imprecise/false for the everywhere reading.
- **Proposed fix:** Rewrite: '高階導関数による判定は、ある $n$ で $f^{(n)}(a)\neq0$ となる場合にしか使えない。$a$ においてすべての高階導関数が $0$ となる関数（例：$e^{-1/x^{2}}$ の変形）では、$a$ が狭義極小・狭義極大・極値でない、のいずれの場合も起こりうる。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Newton iteration example x^3-2x+2 from x_0=0: claim of 2-cycle is correct but 'convergence fails' framing needs care
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement states that starting from x_0=0 for f(x)=x^3-2x+2 gives 0,1,0,1,... which is correct (x_1=1, x_2=0). This is fine. However the surrounding claim '初期値が根から遠いと収束しないことがあり' is illustrated by a 2-cycle, which is a genuine non-convergence; this is acceptable. No error here on re-checking; the arithmetic 0→1→0 is verified. (No issue.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
