# Verification tracker: `04-analysis/02-complex-analysis/03-global/05-analytic-continuation.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/05-analytic-continuation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, uniqueness, stability, monodromy, global branch, natural boundary) is logically sound; the proofs correctly invoke the cited results and the hypcheck counterexample is valid. The only genuine problems are in the supplement: the description of the Riemann surface of $\sqrt z$ as a '2-fold covering' is misleading (the natural projection is $z\mapsto z^{2}$), and the statement of Hadamard's gap theorem is imprecise about the gap condition.

## Issues

### ISSUE-0001 [Open] Riemann surface of sqrt z is not a 2-fold covering of C\{0}
- **Category:** Supplement/remark error
- **Location:** supplement (層と被覆空間の言葉で)
- **Detail:** The supplement says the Riemann surface of $\sqrt z$ is a 2-fold covering. The Riemann surface of $\sqrt z$ is the germ space of $\sqrt z$, which is homeomorphic to $\C\setminus\{0\}$ itself (the map germ $\mapsto$ value is a homeomorphism), and the projection to $\C\setminus\{0\}$ is $z\mapsto z^{2}$, which is a 2-to-1 covering. So the phrase '2重被覆' is ambiguous/incorrect as stated: the surface is not a 2-fold cover in the sense of being a 2-sheeted cover of $\C\setminus\{0\}$ by the natural projection $\sqrt z\mapsto z$; rather the projection is $z\mapsto z^{2}$. Also the parallel claim that the Riemann surface of $\operatorname{Log}$ is the universal cover of $\C\setminus\{0\}$ is correct, but the $\sqrt z$ statement as written is misleading.
- **Proposed fix:** The Riemann surface of $\operatorname{Log}$ is the universal cover of $\C\setminus\{0\}$; the Riemann surface of $\sqrt z$ is $\C\setminus\{0\}$ itself, and the natural projection to $\C\setminus\{0\}$ is $z\mapsto z^{2}$, a 2-sheeted covering (so it is a 2-fold cover in that sense).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hadamard gap theorem statement: 'ratio at least constant' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement states Hadamard's gap theorem as: a power series whose nonzero exponents have gaps 'growing at a constant ratio or more' has the circle of convergence as natural boundary. The standard hypothesis is that the ratios of consecutive exponents $n_{k+1}/n_{k}$ are bounded below by some $q>1$ (a Hadamard gap condition), not merely that gaps are 'at least a constant ratio'. As worded ('間隔が一定の比以上で広がる') it is vague and could be read as gaps growing without a uniform ratio bound, which is not sufficient. The lacunary series $\sum z^{2^{n}}$ does satisfy the gap condition, so the example is fine, but the general statement is imprecise.
- **Proposed fix:** Hadamard's gap theorem: if the exponents $n_{k}$ of the nonzero terms of a power series satisfy $n_{k+1}/n_{k}\ge q>1$ for some fixed $q$ and all $k$, then the circle of convergence is a natural boundary.
- **Reported:** 2026-10-28 (8ccef3d)
