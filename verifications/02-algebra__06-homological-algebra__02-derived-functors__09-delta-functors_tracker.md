# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/09-delta-functors.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/09-delta-functors.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (derived functors form a delta functor, effaceable delta functors are universal, Tor balancing) and their proofs are logically sound, and the hypcheck correctly identifies where each hypothesis is used. The only genuine issue is a slightly imprecise remark in the supplement about Tor balancing over non-commutative rings, where the stated mechanism ('interchanging right and left modules') does not accurately describe the actual argument.

## Issues

### ISSUE-0001 [Open] Non-commutative Tor balancing claim is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると (Tor の平衡性)
- **Detail:** The supplement says that for non-commutative rings the same argument with right and left modules interchanged gives balancing. But the argument in the proof uses commutativity essentially: it identifies $-\otimes_{R}N\cong N\otimes_{R}-$ and uses that a projective module is flat on the relevant side. For a non-commutative ring, $\mathrm{Tor}^{R}_{n}(M,N)$ with $M$ a right module and $N$ a left module is computed by a projective resolution of $M$ (in right modules) or of $N$ (in left modules); the two computations agree, but this is not obtained by 'interchanging right and left modules' in the naive sense, and the statement as phrased (that the same argument works) is misleading. The parenthetical '(ここでは確かめていない)' softens it but the claim about the mechanism is still imprecise.
- **Proposed fix:** Non-commutative case: for a ring $R$, a right module $M$ and a left module $N$, $\mathrm{Tor}^{R}_{n}(M,N)$ can be computed either by a projective resolution of $M$ in the category of right $R$-modules or by a projective resolution of $N$ in the category of left $R$-modules; the two agree. This is proved by the same universality argument applied to the two $\delta$-functors $N\mapsto H_{n}(P\otimes_{R}N)$ and $M\mapsto H_{n}(M\otimes_{R}Q)$, not by literally interchanging right and left modules.
- **Reported:** 2026-10-28 (8ccef3d)
