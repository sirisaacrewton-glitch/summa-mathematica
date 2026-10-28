# Verification tracker: `04-analysis/01-real-analysis/02-calculus/10-gamma.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/10-gamma.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, Bohr–Mollerup, Beta function, Wallis, Stirling) is logically sound; the proofs and citations check out. The one genuine problem is in the supplement's '前提を変えると' paragraph: it claims that continuity or monotonicity alone (without log-convexity) fails to give uniqueness, which is false — continuity (indeed monotonicity) together with the functional equation already forces f = Γ via the Gauss limit. The other supplement bullets (complex continuation, reflection/multiplication formulas, Stirling series, ball volume) are correct as stated. No previously reported issues exist.

## Issues

### ISSUE-0001 [Open] Incorrect claim that continuity/monotonicity alone leaves a periodic freedom
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that imposing only monotonicity or continuity (instead of log-convexity) leaves a freedom of multiplying by a period-1 function. This is false. If f(x+1)=xf(x), f(1)=1 and f is continuous on (0,∞), then f is uniquely determined: on (0,1], f(x) = f(x+n)/[x(x+1)···(x+n-1)] and f(x+n) = (x+n-1)···(x+1)x f(x), and continuity plus the functional equation force f(x) = lim_{n} n! n^{x}/(x(x+1)···(x+n)) (the Gauss limit), which is Γ. Likewise monotonicity (even just log-concavity or monotonicity of f) forces uniqueness. The freedom to multiply by a period-1 function g with g(1)=1 exists only if no regularity at all is assumed (or only at a single point). The example Γ(x)(1+sin²πx) is correct as a non-uniqueness example without regularity, but the sentence about continuity/monotonicity is wrong.
- **Proposed fix:** Replace with: 「関数等式 f(x+1)=xf(x) と f(1)=1 だけでは f は決まらない：Γ(x)(1+\sin^{2}\pi x) も満たす（周期性 g(x+1)=g(x), g(1)=1 をもつ任意の g を掛けてよい）。しかし (0,\infty) 上で連続（あるいは単調）という条件を加えるだけで一意性は回復する：連続性と関数等式から f はガウスの積公式の極限 \lim_{n} n!\,n^{x}/(x(x+1)\cdots(x+n)) に一致することが従う。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Stirling asymptotic expansion stated with wrong leading term / imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化と関連する事実 (second bullet)
- **Detail:** The supplement writes the asymptotic expansion of logΓ(x) as (x-1/2)log x - x + (1/2)log 2π + 1/(12x) - ···. This is the correct Stirling series for logΓ(x). However the sentence says 'スターリングの公式は…漸近展開…の最初の項である', which is fine, but the displayed series is stated as if exact equality with '...' — it is a divergent asymptotic series, which the text does note ('発散級数'). The claim itself is correct. No error here; the leading terms match the standard expansion. (No issue.)
- **Proposed fix:** No change needed; the expansion (x-1/2)log x - x + (1/2)log 2π + 1/(12x) - ... is the standard Stirling series for logΓ(x).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] n-dimensional ball volume formula uses Γ(n/2+1) — correct, but stated for all n without noting n≥1 integer
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化と関連する事実 (third bullet)
- **Detail:** The formula V_n = π^{n/2}/Γ(n/2+1) for the volume of the unit ball in R^n is correct for all integers n≥1. The statement is accurate and not overstated. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
