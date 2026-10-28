# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/02-prefix-free-complexity.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/02-prefix-free-complexity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that H(n) ≥ log n holds for infinitely many n
- **Category:** Supplement/remark error
- **Location:** comp:prob-H-numbers / solution
- **Detail:** The problem asks to show that $H(n)\ge\log n$ holds for infinitely many $n$, and the solution argues: if $H(n)<\log n$ for all $n\ge n_{0}$, then $\sum_{n\ge n_{0}}2^{-H(n)}>\sum_{n\ge n_{0}}1/n=\infty$, contradicting $\sum_{n}2^{-H(n)}\le1$. This only shows that $H(n)\ge\log n$ holds for infinitely many $n$ in the weak sense that it cannot fail eventually; but the argument as stated is fine for that. However, the strict inequality $2^{-H(n)}>1/n$ requires $H(n)<\log n$, which is the negation, so the logic is: if $H(n)<\log n$ for all large $n$ then divergence, contradiction, hence $H(n)\ge\log n$ infinitely often. This is correct. But there is a subtlety: the problem statement says '$H(n)\ge\log n$ for infinitely many $n$', and the solution's contradiction shows that it is not the case that $H(n)<\log n$ for all sufficiently large $n$, which indeed yields infinitely many $n$ with $H(n)\ge\log n$. So this is actually correct. No issue here.
- **Proposed fix:** No change needed; the argument is valid.
- **Reported:** 2026-10-28 (10fede1)
