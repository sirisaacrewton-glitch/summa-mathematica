# Verification tracker: `04-analysis/01-real-analysis/04-vector-analysis/01-curves-line-integrals.html`

<!-- source: 04-analysis/01-real-analysis/04-vector-analysis/01-curves-line-integrals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong sign in gravitational potential/work computation
- **Category:** Supplement/remark error
- **Location:** example (万有引力) after vec:curl-free-condition
- **Detail:** The text states $F(x)=-x/|x|^{3}=\nabla(1/|x|)$ and then that the work is $\int_{\gamma}F\cdot dx=\frac{1}{|q|}-\frac{1}{|p|}$. But $\nabla(1/|x|)=-x/|x|^{3}=F$, so $f(x)=1/|x|$ is a potential and the work equals $f(q)-f(p)=\frac{1}{|q|}-\frac{1}{|p|}$. This part is actually correct. However, the standard gravitational force is $F=-GmM\,x/|x|^{3}$, whose potential energy is $-1/|x|$; the work done by the field moving from $p$ to $q$ is $\frac{1}{|q|}-\frac{1}{|p|}$, which is consistent. Re-examining: $\partial_{i}|x|^{-1}=-x_{i}|x|^{-3}$ is correct, $F=\nabla(1/|x|)$ is correct, and the work formula is correct. No error here.
- **Proposed fix:** No change needed; the computation is consistent.
- **Reported:** 2026-10-28 (10fede1)
