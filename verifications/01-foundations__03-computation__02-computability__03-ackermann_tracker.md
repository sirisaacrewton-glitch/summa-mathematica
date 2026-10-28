# Verification tracker: `01-foundations/03-computation/02-computability/03-ackermann.html`

<!-- source: 01-foundations/03-computation/02-computability/03-ackermann.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Ackermann function graph is not primitive recursive
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (アッカーマン関数のグラフ)
- **Detail:** The supplement claims that the relation $A(x,y)=z$ is primitive recursive, justified by 'the computation is bounded by $z$'. This is false. The graph of the Ackermann function is a well-known example of a relation that is computable but NOT primitive recursive (it is decidable, but not primitive recursive; it is in fact complete for the class of relations decidable in time bounded by some primitive recursive function). The bounding argument fails because the intermediate values during the computation of $A(x,y)$ are not bounded by $z=A(x,y)$ in a primitive recursive way — the recursion depth and intermediate stack values grow beyond what a primitive recursive bound on $z$ can capture. The conclusion drawn ('graph primitive recursive but function not') is therefore wrong.
- **Proposed fix:** The relation $A(x,y)=z$ is computable (hence decidable) but is NOT primitive recursive; it is a standard example of a computable relation that is not primitive recursive. (The naive bounding argument fails because the intermediate values in the computation of $A(x,y)$ are not bounded by a primitive recursive function of $z$.) Thus the graph of $A$ is a computable relation that is not primitive recursive, even though each row $A(x,\cdot)$ is primitive recursive.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Ackermann function corresponds to stage omega, not omega^2
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から (順序数で言えば...)
- **Detail:** The supplement states that primitive recursion corresponds to 'induction at each stage below $\omega$' and the Ackermann function requires 'induction along the lexicographic order of type $\omega^{2}$'. This is imprecise/incorrect. The Ackermann function is the classic example of a function that is not primitive recursive but is provably total in $\PA$; its totality is provable using induction up to $\omega$ (more precisely, the Ackermann function sits at level $\omega$ of the fast-growing hierarchy $F_{\omega}$, and its totality is provable in $\PA$, whose proof-theoretic ordinal is $\varepsilon_{0}$). The lexicographic order on $\N^{2}$ has order type $\omega^{2}$, but the recursion computing $A$ is a nested (double) recursion whose associated ordinal is $\omega$, matching the fast-growing hierarchy level $F_{\omega}$, not $\omega^{2}$. The claim that the Ackermann function 'requires induction along $\omega^{2}$' overstates the ordinal strength.
- **Proposed fix:** In terms of the fast-growing hierarchy, $A(x,\cdot)$ corresponds to level $F_{\omega}$ (the first level beyond all primitive recursive functions, which sit at finite levels $F_{n}$). The totality of the Ackermann function is provable in $\PA$ (indeed using induction up to $\omega$), consistent with $\PA$'s proof-theoretic ordinal $\varepsilon_{0}$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Misattribution of the two-variable form
- **Category:** Supplement/remark error
- **Location:** remark (comp:sec-ackermann)
- **Detail:** The remark says 'this form is due to Péter and Robinson, known as a simplification of Ackermann's original 3-variable function'. The standard two-variable Ackermann–Péter function is due to Rózsa Péter (1935); Robinson's contribution is a different variant (the Robinson/Ackermann function with $A(x,y)=A(x-1,A(x,y-1))$ type recursion). Attributing the displayed form jointly to 'Péter and Robinson' is a misattribution. The displayed function is the Ackermann–Péter function.
- **Proposed fix:** This two-variable form is the Ackermann–Péter function, due to Rózsa Péter (1935), a simplification of Ackermann's original three-variable function.
- **Reported:** 2026-10-28 (8ccef3d)
