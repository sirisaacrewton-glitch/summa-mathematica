# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/06-density-commutativity.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/06-density-commutativity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Density theorem does not imply density in the finite topology in general
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that the 'density' in the density theorem means that the image of $R$ is dense in $\End_{D}(S)$ with respect to the finite topology (topology of pointwise convergence). This is false in general: the density theorem only says that for any finite $D$-independent set $v_{1},\dots,v_{n}$ and arbitrary $w_{1},\dots,w_{n}$ there is $r$ with $rv_{i}=w_{i}$. Density in the finite topology would require this for any finite set of points (not necessarily $D$-independent), i.e. that $R$ acts as the full endomorphism ring on every finite-dimensional subspace. For example, if $R$ is a division ring acting on itself ($\dim_{D}S=1$), the image is $R\subsetneq\End_{D}(S)=D$, which is not dense in the finite topology. The correct statement is that the image is dense in the finite topology only when $\dim_{D}S$ is finite (then it equals $\End_{D}(S)$), or more precisely the density theorem gives density on independent tuples, which is weaker than finite-topology density.
- **Proposed fix:** Replace with: 'The word "dense" refers to the following: for any finite $D$-independent $v_{1},\dots,v_{n}$ and arbitrary $w_{1},\dots,w_{n}$ there is $r\in R$ with $rv_{i}=w_{i}$. When $\dim_{D}S<\infty$ this says $R$ maps onto $\End_{D}(S)$, i.e. $R$ is dense in the finite topology; in general it only gives density on independent tuples.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Primitive ring definition and subdirect product claim imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says 'a ring acting faithfully on a simple module is called primitive, and a ring with zero radical is a subdirect product of primitive rings (the argument of Step 3)'. Two issues: (1) the standard definition of (left) primitive ring is a ring having a faithful simple left module, which matches, but the supplement's phrasing 'acting faithfully on a simple module' is acceptable; (2) the claim that a ring with $J(R)=0$ is a subdirect product of primitive rings is correct, but Step 3 embeds into $\prod_{S}R/\operatorname{Ann}(S)$ where each $R/\operatorname{Ann}(S)$ is primitive — this is fine. However the supplement also states the commutativity theorem is 'a combination of the decomposition into primitive rings and the finiteness of division rings', which overstates: the finiteness used is that $\mathbb{F}_{p}[a]$ is finite, not that the division ring is finite. This is a minor imprecision but the main false claim is the finite-topology density above.
- **Proposed fix:** Rephrase: 'A ring with a faithful simple module is called primitive; a ring with $J(R)=0$ embeds as a subdirect product of primitive rings $R/\operatorname{Ann}(S)$ (Step 3). The commutativity theorem combines this decomposition with the fact that each $a$ generates a finite field $\mathbb{F}_{p}[a]$ inside the division ring.'
- **Reported:** 2026-10-28 (8ccef3d)
