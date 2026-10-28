# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/05-nullstellensatz.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/05-nullstellensatz.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Ideal membership over Q is not EXPSPACE-complete
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement says the ideal membership problem over $\Q[x_{1},\dots,x_{n}]$ is EXPSPACE-complete (Mayr–Mayr 1982). Mayr–Mayr's EXPSPACE-completeness result concerns the *word problem for commutative semigroups* / the ideal membership problem for *integer* polynomial rings or the solvability of polynomial equations, not ideal membership over $\Q[x]$. Ideal membership over a field (with generators given explicitly) is decidable by Gröbner bases and is EXPSPACE-hard in the worst case, but the precise complexity class is not simply 'EXPSPACE-complete' as stated; the attribution conflates distinct problems.
- **Proposed fix:** The ideal membership problem over $\Q[x_{1},\dots,x_{n}]$ is decidable via Gröbner bases, but its worst-case complexity is doubly exponential in the number of variables (EXPSPACE-hard); Mayr and Mayr (1982) showed EXPSPACE-completeness for the related problem of the word problem for commutative semigroups.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Effective Nullstellensatz degree bound attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The text attributes a single-exponential-in-the-number-of-variables degree bound for $1=\sum h_{i}g_{i}$ to Kollár (1988) 'など'. Kollár's 1988 bound is doubly exponential in the number of variables in general; the single-exponential bound in the number of variables (for the degrees of the $h_{i}$) is due to others (e.g. Brownawell, or the more refined results), and the precise statement '単指数の上限' attributed to Kollár is imprecise/overstated.
- **Proposed fix:** Effective Nullstellensatz bounds (Kollár 1988 and others) give explicit upper bounds on the degrees of the $h_{i}$ in $1=\sum h_{i}g_{i}$; these bounds are doubly exponential in the number of variables in general, reducing the problem to the solvability of a large linear system.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Krull dimension equals transcendence degree needs finite generation and integrality
- **Category:** Supplement/remark error
- **Location:** supplement / 次元への応用
- **Detail:** The supplement states that the $d$ of Noether normalization equals the transcendence degree of the fraction field and equals the Krull dimension of $A$ (if $A$ is a domain). This is correct for a finitely generated domain over a field, but the sentence omits the hypothesis that $A$ is a finitely generated $k$-algebra and a domain; as stated ('$A$（整域なら）') it is slightly imprecise since $d$ from normalization depends on the chosen normalization and equals transcendence degree only because $A$ is a finitely generated domain. The claim is essentially correct but the hypothesis 'finitely generated' should be explicit.
- **Proposed fix:** For a finitely generated $k$-algebra $A$ that is a domain, the integer $d$ in Noether normalization equals the transcendence degree of the fraction field of $A$ over $k$, and this equals the Krull dimension of $A$.
- **Reported:** 2026-10-28 (10fede1)
