# Verification tracker: `02-algebra/03-commutative-algebra/03-homological-methods/01-koszul-depth.html`

<!-- source: 02-algebra/03-commutative-algebra/03-homological-methods/01-koszul-depth.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong dimension drop for a regular sequence in the supplement
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点：導来的な零点集合)
- **Detail:** The supplement says that a regular sequence is the case where 'the fiber dimension drops by exactly $n$'. This is wrong: a regular sequence $x_{1},\dots,x_{n}$ cuts out a fiber of codimension $n$, i.e. the dimension drops by $n$ relative to $\operatorname{Spec}A$ only when $\dim A = n$ (e.g. $A$ a regular local ring with $n=d$). In general the drop is $n$ only in the sense of codimension of the fiber inside $\operatorname{Spec}A$; the phrase 'the fiber dimension drops by exactly $n$' is imprecise/false as stated (e.g. $A=k[x,y]$, $x$ alone: fiber has dimension $1$, drop is $1=n$ here, but for $A=k[x,y,z]/(xy)$ and a regular element the drop need not equal $n$ in the naive reading). The intended correct statement is that the fiber has codimension $n$ (the equations are independent), not that its dimension is $\dim A - n$ in general.
- **Proposed fix:** Replace with: '正則列は「方程式が独立で、ファイバー $\{x_{1}=\cdots=x_{n}=0\}$ の余次元がちょうど $n$ になる」場合で、補正が消える。' (i.e. the fiber has codimension exactly $n$, not that its dimension drops by $n$).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck counterexample: order-independence does not give H_1=0 for the permuted sequence
- **Category:** Supplement/remark error
- **Location:** ring:koszul-h1-local / hypcheck
- **Detail:** The hypcheck claims that for $A=k[x,y,z]$ the sequence $y(1-x), z(1-x), x$ is not regular, yet 'since Koszul homology is independent of the order (\ref{ring:koszul-order-independent}), the permuted sequence also has $H_{1}=0$'. This is a misapplication: order-independence says $K$ of a permutation of the SAME tuple is isomorphic, so $H_{1}(y(1-x),z(1-x),x;A)\cong H_{1}(x,y(1-x),z(1-x);A)$. But $x, y(1-x), z(1-x)$ is NOT a regular sequence in $A=k[x,y,z]$ either: after killing $x$, the ring is $k[y,z]$ and $y(1-x)\equiv y$, $z(1-x)\equiv z$ are regular, but the original claim that '$x,y(1-x),z(1-x)$ is an $A$-regular sequence' is false because $y(1-x)$ is a zero divisor mod... actually $x$ is a non-zero-divisor, and mod $x$ the images $y,z$ form a regular sequence, so $x,y(1-x),z(1-x)$ IS regular. Hence the permuted sequence $y(1-x),z(1-x),x$ has the same Koszul homology, and since the original is regular, $H_{1}=0$ for BOTH — so this is not a counterexample to 3⇒1 at all. The example fails to demonstrate that 3⇒1 is false without the local hypothesis.
- **Proposed fix:** Use a genuine counterexample where $H_{1}=0$ but the sequence is not regular. For instance, in $A=k[x,y,z]$ take the sequence $x(1-x),\,y(1-x),\,z(1-x)$: mod the first element the ring is $k[x,y,z]/(x(1-x))$ which is not a domain, and the remaining elements are zero divisors, so the sequence is not regular; but the Koszul complex is a tensor product / one checks $H_{1}=0$ because the ideal $(x(1-x),y(1-x),z(1-x))$... Alternatively state the standard counterexample: $A=k[x,y,z]/(xy,xz)$ with the sequence $y,z$ (a regular sequence in the non-local setting where $y,z$ lie in a maximal ideal but $H_{1}$ vanishes while the ring is not Cohen–Macaulay). Provide a verified example or drop the parenthetical claim.
- **Reported:** 2026-10-28 (10fede1)
