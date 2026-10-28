# Verification tracker: `04-analysis/01-real-analysis/01-real-numbers/05-series.html`

<!-- source: 04-analysis/01-real-analysis/01-real-numbers/05-series.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Dvoretzky–Rogers: unconditional convergence implies absolute convergence in finite dimensions
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, first bullet)
- **Detail:** The supplement says: 'In $\mathbb{R}$, every rearrangement converging (unconditional convergence) is equivalent to absolute convergence (\ref{calc:absolute-rearrangement} and Riemann's rearrangement theorem). In infinite-dimensional Banach spaces, unconditionally convergent but not absolutely convergent series always exist (Dvoretzky–Rogers theorem, known).' The first sentence is correct. The second is misstated: the Dvoretzky–Rogers theorem says that in every infinite-dimensional Banach space there exists an unconditionally convergent series that is not absolutely convergent. The phrase 'always exist' (必ず存在する) is ambiguous but, read literally, suggests that in every infinite-dimensional Banach space every unconditionally convergent series fails to be absolutely convergent, which is false (e.g. any absolutely convergent series is unconditionally convergent). The statement should be corrected to 'there exists at least one such series'.
- **Proposed fix:** In infinite-dimensional Banach spaces there always exists at least one unconditionally convergent series that is not absolutely convergent (Dvoretzky–Rogers theorem). Equivalently, the equivalence 'unconditional convergence $\iff$ absolute convergence' characterizes finite-dimensional Banach spaces.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Fubini–Tonelli for double series requires absolute convergence (nonnegative or integrable)
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, second bullet)
- **Detail:** The supplement says 'the interchange of sums in a double series is a special case of the Fubini–Tonelli theorem for counting measure'. But the theorem \ref{calc:double-series} assumes $\sum_m\sum_n|a_{mn}|<\infty$, i.e. absolute convergence, which corresponds to the Fubini (integrable) hypothesis, not to Tonelli (which needs nonnegativity). Stating it as 'Fubini–Tonelli' without the integrability/absolute-convergence hypothesis is imprecise: Tonelli alone does not justify interchanging sums for a general (not necessarily nonnegative) double series, and without absolute convergence the interchange can fail. The correct statement is that it is a special case of Fubini's theorem (or of Tonelli for nonnegative terms).
- **Proposed fix:** The interchange of sums for a double series with $\sum_m\sum_n|a_{mn}|<\infty$ is a special case of Fubini's theorem for counting measure (for nonnegative terms it is the Tonelli theorem). Absolute convergence (integrability) is essential; without it the interchange can fail.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Ratio test 'cannot decide' example: limsup of ratio is 2, not 1
- **Category:** Supplement/remark error
- **Location:** hypcheck of calc:root-ratio-tests (second bullet)
- **Detail:** The hypcheck says: 'The statement "$\limsup\ge1$ implies divergence" for the ratio test is false: for a sequence of the form $a_{2m}=a_{2m+1}=2^{-m}$ the ratio alternates between $1$ and $\frac12$, but the series converges.' For this sequence the ratio $a_{n+1}/a_{n}$ is $1$ (even $n$) or $\frac12$ (odd $n$), so $\limsup=1$, not $\ge1$ in the strict sense; the example does show that $\limsup=1$ does not force divergence, which is the intended point. However, the phrasing 'the ratio alternates between $1$ and $\frac12$' combined with 'limsup $\ge1$' is misleading: the limsup equals exactly $1$, and the ratio test's divergence criterion in the theorem is '$\ge1$ eventually', so the example correctly illustrates that '$\limsup\ge1$' (with equality) is insufficient. The claim is essentially correct but the wording should make clear that $\limsup=1$ here, so the example shows only that $\limsup=1$ does not imply divergence, not that $\limsup>1$ fails.
- **Proposed fix:** The statement '$\limsup|a_{n+1}/a_{n}|\ge1$ implies divergence' is false: for $a_{2m}=a_{2m+1}=2^{-m}$ the ratio alternates between $1$ and $\frac12$, so $\limsup=1$, yet the series converges. Divergence requires the stronger condition that $|a_{n+1}/a_{n}|\ge1$ for all sufficiently large $n$.
- **Reported:** 2026-10-28 (10fede1)
