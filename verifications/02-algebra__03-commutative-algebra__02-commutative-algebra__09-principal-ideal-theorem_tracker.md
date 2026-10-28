# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/09-principal-ideal-theorem.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/09-principal-ideal-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the height theorem, principal ideal theorem, converse, UFD characterization, height-extension lemma and polynomial dimension theorem are all correctly proved with appropriate citations. The only point worth flagging is the supplement on the non-Noetherian case, where the inequality $\dim A+1\le\dim A[x]\le 2\dim A+1$ implicitly requires $\dim A<\infty$ to be meaningful; the catenary remark is correct. No serious logical gaps or improper links were found.

## Issues

### ISSUE-0001 [Open] Seidenberg's bound for dim A[x] is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (ネーターでない場合)
- **Detail:** The supplement claims that for non-Noetherian rings $\dim A+1\le\dim A[x]\le 2\dim A+1$, with the upper bound attained (Seidenberg). The correct classical result (Seidenberg 1954) is $\dim A+1\le\dim A[x]\le 2\dim A+1$ only when $\dim A$ is finite; in general the bound is $\dim A[x]\le 2\dim A+1$ with the convention that this holds for finite dimension, and more precisely Seidenberg proved $\dim A[x]\le 2\dim A+1$ and that this bound is sharp. However the lower bound $\dim A+1\le\dim A[x]$ can fail: if $\dim A=\infty$ the statement is vacuous, but more importantly for finite dimension the inequality $\dim A[x]\ge\dim A+1$ is correct. The genuine error is the attribution/statement that the upper bound $2\dim A+1$ is attained: Seidenberg showed $\dim A[x]$ can equal $2\dim A+1$, which is correct. The precise issue is that the lower bound requires $\dim A<\infty$; for infinite-dimensional $A$ the displayed chain of inequalities is not meaningful. State the hypothesis $\dim A<\infty$.
- **Proposed fix:** For a non-Noetherian ring $A$ with $\dim A<\infty$ one has $\dim A+1\le\dim A[x]\le 2\dim A+1$, and both bounds can be attained (Seidenberg).
- **Reported:** 2026-10-28 (8ccef3d)
