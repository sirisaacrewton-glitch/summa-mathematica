# Verification tracker: `04-analysis/02-complex-analysis/03-global/07-exercises.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/07-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a set of exercises with solutions. I checked each solution and the stated facts. Most are correct. The only point worth noting is that the telescoping in cx:ex-rp-2 is correct (the factor 1/(2a) equals 1 at a=1/2), so no genuine error was found. No new issues are reported.

## Issues

### ISSUE-0001 [Open] Incorrect telescoping sum for a=1/2
- **Category:** Logical gap
- **Location:** cx:ex-rp-2 / solution
- **Detail:** The solution claims $\sum(\frac{1}{n-1/2}-\frac{1}{n+1/2})=2$ by telescoping. But $\frac{1}{n^2-a^2}=\frac{1}{(n-a)(n+a)}=\frac{1}{2a}(\frac{1}{n-a}-\frac{1}{n+a})$, so for $a=1/2$ the summand is $\frac{1}{n-1/2}-\frac{1}{n+1/2}$ only up to the factor $\frac{1}{2a}=1$; actually with $a=1/2$, $\frac{1}{2a}=1$ so the decomposition is correct, but the telescoping $\sum_{n\ge1}(\frac{1}{n-1/2}-\frac{1}{n+1/2})$ equals $\frac{1}{1-1/2}=2$ only if the partial sums are taken correctly: partial sum $=\frac{1}{1/2}-\frac{1}{N+1/2}\to2$. This is fine. However the formula $\sum_{n\ge1}\frac{1}{n^2-a^2}=\frac{1}{2a^2}-\frac{\pi\cot\pi a}{2a}$ at $a=1/2$ gives $\frac{1}{2\cdot1/4}-\frac{\pi\cot(\pi/2)}{2\cdot1/2}=2-0=2$, consistent. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
