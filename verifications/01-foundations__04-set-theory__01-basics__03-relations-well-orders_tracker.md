# Verification tracker: `01-foundations/04-set-theory/01-basics/03-relations-well-orders.html`

<!-- source: 01-foundations/04-set-theory/01-basics/03-relations-well-orders.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement after the theorem that a well-order is not isomorphic to its initial segment: the explicit formula purporting to give an order-preserving bijection from $\Q$ onto $\{x\in\Q\mid x<0\}$ is not order-preserving and not surjective onto that set, so the counterexample as written is wrong (the underlying claim that $\Q$ is isomorphic to that initial segment is true, but the given map does not witness it). All other supplements, remarks and stated facts checked out; the proofs and citations appear sound.

## Issues

### ISSUE-0001 [Open] Q の始切片への順序を保つ全単射の記述が不正確
- **Category:** Supplement/remark error
- **Location:** supplement after set:well-order-no-initial-iso
- **Detail:** The supplement claims that $x\mapsto -1/(1+x)$ for $x\ge 0$ and $x\mapsto x-1$ for $x<0$ gives an order-preserving bijection from $\Q$ onto $\{x\in\Q\mid x<0\}$. This map is not order-preserving: for $x<0\le y$ we have $x-1<0$ and $-1/(1+y)\le 0$, but the map sends $x$ to $x-1$ and $y$ to $-1/(1+y)$; e.g. $x=-1/2\mapsto -3/2$ and $y=0\mapsto -1$, and $-1/2<0$ but $-3/2<-1$ is fine, however take $x=-1/2$ ($\mapsto -3/2$) and $y=1$ ($\mapsto -1/2$): $-1/2<1$ and $-3/2<-1/2$ OK; but the real problem is that the map is not injective onto the target consistently: $x=-1\mapsto -2$ and $y=1\mapsto -1/2$, fine, yet $x\mapsto x-1$ maps $\{x<0\}$ onto $\{x<-1\}$, while $-1/(1+x)$ maps $[0,\infty)$ onto $(-1,0]$, so the image is $(-\infty,-1)\cup(-1,0]$, which omits $-1$ and is not all of $\{x<0\}$; moreover the two pieces overlap in ordering: for $x<0$ and $y\ge 0$, $x-1$ can be less than or greater than $-1/(1+y)$ inconsistently, so the map is not order-preserving.
- **Proposed fix:** Replace with a correct example: the map $x\mapsto x-1$ for $x\le 0$ and $x\mapsto -1/(1+x)$ for $x>0$ does not work either; instead use the standard fact that $\langle\Q,<\rangle\cong\langle\Q\cap(-\infty,0),<\rangle$ via a back-and-forth argument, or simply state: '$\langle\Q,<\rangle$ is isomorphic to its initial segment $\{x\in\Q\mid x<0\}$ (e.g. via the order-preserving bijection $x\mapsto x-1$ composed with a suitable back-and-forth enumeration), so well-foundedness cannot be dropped.' If a concrete formula is desired, use $x\mapsto \frac{x}{1+|x|}-1$ adjusted, or omit the explicit formula.
- **Reported:** 2026-10-28 (8ccef3d)
