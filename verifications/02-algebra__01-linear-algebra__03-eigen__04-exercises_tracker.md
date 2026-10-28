# Verification tracker: `02-algebra/01-linear-algebra/03-eigen/04-exercises.html`

<!-- source: 02-algebra/01-linear-algebra/03-eigen/04-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Rank formula for Jordan block counts misapplied
- **Category:** Logical gap
- **Location:** lin:ex-jd-2 / solution
- **Detail:** The solution states that the number of cells of size $\ge k$ is $\mathrm{rank}(A-2I)^{k-1}-\mathrm{rank}(A-2I)^{k}$. The correct formula is $\mathrm{rank}(A-2I)^{k-1}-\mathrm{rank}(A-2I)^{k}$ counting cells of size $\ge k$ only when using $\dim\ker$ differences; with ranks the number of cells of size exactly $k$ is $\mathrm{rank}(A-2I)^{k-1}-2\,\mathrm{rank}(A-2I)^{k}+\mathrm{rank}(A-2I)^{k+1}$, and the number of cells of size $\ge k$ is $\mathrm{rank}(A-2I)^{k-1}-\mathrm{rank}(A-2I)^{k}$ only if one uses nullities. Concretely, with the given ranks $2,1,0$: the formula gives size $\ge1$: $\mathrm{rank}(A-2I)^{0}-\mathrm{rank}(A-2I)^{1}=4-2=2$ (correct), size $\ge2$: $\mathrm{rank}(A-2I)^{1}-\mathrm{rank}(A-2I)^{2}=2-1=1$ (correct), size $\ge3$: $\mathrm{rank}(A-2I)^{2}-\mathrm{rank}(A-2I)^{3}=1-0=1$ (correct). So the numbers happen to be right here, but the stated general formula is wrong: the number of cells of size $\ge k$ equals $\mathrm{rank}(A-\lambda I)^{k-1}-\mathrm{rank}(A-\lambda I)^{k}$ is false in general. For example, a single cell $J_{3}(0)$ has ranks $\mathrm{rank}(N^{0})=3$, $\mathrm{rank}(N^{1})=2$, $\mathrm{rank}(N^{2})=1$, $\mathrm{rank}(N^{3})=0$; the formula gives size $\ge2$: $3-2=1$ (correct) but size $\ge1$: $\mathrm{rank}(N^{0})-\mathrm{rank}(N^{1})=3-2=1$ (correct here). However for two cells $J_{2}(0)\oplus J_{1}(0)$: ranks $3,1,0$; formula gives size $\ge1$: $3-1=2$ (correct), size $\ge2$: $1-0=1$ (correct). The formula actually is correct: number of cells of size $\ge k$ equals $\mathrm{rank}(N^{k-1})-\mathrm{rank}(N^{k})$ where $N=A-\lambda I$. This is a standard identity. So no error.
- **Proposed fix:** No change needed; the rank-difference formula is correct.
- **Reported:** 2026-10-28 (10fede1)
