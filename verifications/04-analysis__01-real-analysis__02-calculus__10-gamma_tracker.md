# Verification tracker: `04-analysis/01-real-analysis/02-calculus/10-gamma.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/10-gamma.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the assertion that monotonicity or continuity alone fails to give uniqueness is false—monotonicity plus the functional equation already forces Γ. Other supplements (complex extension, reflection/multiplication formulas, n-ball volume, asymptotic expansion) are stated as known facts and are acceptable. Proofs and citations check out.

## Issues

### ISSUE-0001 [Open] Monotonicity/continuity alone does not give uniqueness
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The claim that imposing only monotonicity or continuity (instead of log-convexity) leaves a periodic-function freedom is false. A function satisfying f(x+1)=xf(x), f(1)=1 that is monotone (or continuous) on (0,∞) is already uniquely Γ; the periodic factor 1+sin²(πx) is neither monotone nor continuous-free (it is continuous but not monotone, and multiplying destroys monotonicity). The stated counterexample only shows that the functional equation alone is insufficient, not that monotonicity/continuity is insufficient.
- **Proposed fix:** Replace with: '関数等式と f(1)=1 だけでは一意でない（Γ(x)(1+sin²πx) も満たす）。しかし単調性（または連続性と対数凸性の弱い仮定）を課せば一意性が回復する（ボーア–モレルップの定理の変種）。'
- **Reported:** 2026-10-28 (8ccef3d)
