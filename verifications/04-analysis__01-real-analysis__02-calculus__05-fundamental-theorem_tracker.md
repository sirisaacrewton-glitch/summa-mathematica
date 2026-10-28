# Verification tracker: `04-analysis/01-real-analysis/02-calculus/05-fundamental-theorem.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/05-fundamental-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hypcheck claim about x^2 sin(1/x^2) being non-Riemann-integrable derivative
- **Category:** Supplement/remark error
- **Location:** calc:fundamental-theorem / hypcheck, first bullet
- **Detail:** The hypcheck says that for a function like $x^{2}\sin(1/x^{2})$ the derivative $F'$ is not Riemann integrable. But $F(x)=x^{2}\sin(1/x^{2})$ (with $F(0)=0$) has derivative $F'(x)=2x\sin(1/x^{2})-\frac{2}{x}\cos(1/x^{2})$ for $x\neq0$, which is unbounded near $0$. An unbounded function is not Riemann integrable on a closed interval containing $0$, so the example does illustrate that dropping integrability of $F'$ breaks the conclusion. However, the parenthetical attribution to the trig page is a non-logical pointer and the claim itself (that $F'$ is not Riemann integrable) is correct. The real issue: the statement '外すと偽' (removing integrability makes it false) is correct, but the example as written is fine. On closer inspection this bullet is actually correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
