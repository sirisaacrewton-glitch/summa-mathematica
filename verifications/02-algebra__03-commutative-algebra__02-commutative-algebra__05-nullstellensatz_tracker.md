# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/05-nullstellensatz.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/05-nullstellensatz.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Ideal membership over Q is not EXPSPACE-complete
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement claims that deciding ideal membership $f\in(g_{1},\dots,g_{r})$ in $\Q[x_{1},\dots,x_{n}]$ is EXPSPACE-complete (attributed to Mayr–Mayr 1982). Mayr–Mayr proved that the *ideal membership problem* (and the syzygy/triviality problem) is EXPSPACE-complete in general, but the precise statement is about the membership problem for polynomial ideals over a field, and the complexity is measured in the size of the input; the claim as phrased ("指数領域（EXPSPACE）完全") is essentially right for the general ideal membership problem, but the sentence conflates it with Buchberger's algorithm being EXPSPACE-complete. Buchberger's algorithm itself is not EXPSPACE-complete; the *problem* is EXPSPACE-complete. Also the attribution "マイヤーとマイヤー、1982年" is correct for the problem, but the sentence structure implies the algorithm's worst-case complexity is EXPSPACE-complete, which is imprecise.
- **Proposed fix:** The ideal membership problem for polynomial ideals over a field (e.g. $\Q[x_{1},\dots,x_{n}]$) is EXPSPACE-complete (Mayr–Mayr, 1982); Buchberger's algorithm solves it but its worst-case running time is doubly exponential in the number of variables, so the problem is computationally very hard.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Effective Nullstellensatz degree bound attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement states that the effective Nullstellensatz gives a single-exponential bound (in the number of variables) on the degrees of the $h_{i}$ in $1=\sum h_{i}g_{i}$, citing Kollár 1988. Kollár's bound is of the form $\deg h_{i}\le D^{2^{n}}$ type (doubly exponential in $n$ in general), and the sharp single-exponential-in-$n$ bound is due to others; the precise statement "変数の数について単指数の上限" is not what Kollár 1988 established in general (Kollár's result is doubly exponential in $n$ but with a better dependence on the degrees). The claim is overstated/imprecise.
- **Proposed fix:** The effective Nullstellensatz gives explicit degree bounds for the $h_{i}$ in $1=\sum h_{i}g_{i}$; for example Kollár (1988) proved bounds that are doubly exponential in the number of variables $n$ in general, with better dependence on the degrees of the $g_{i}$.
- **Reported:** 2026-10-28 (8ccef3d)
