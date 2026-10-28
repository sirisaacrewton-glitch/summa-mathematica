# Verification tracker: `01-foundations/04-set-theory/03-well-founded-sets/01-cumulative-hierarchy.html`

<!-- source: 01-foundations/04-set-theory/03-well-founded-sets/01-cumulative-hierarchy.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is the supplement after set:rank-operations claiming $\rank(x\times y)=\mu$ whenever $\mu$ is a limit ordinal and $x,y$ nonempty; this fails when $\mu$ is attained as an element rank (e.g. $x=y=\{\omega\}$ gives rank $\omega+2$, not $\omega$). The Quine atom / AFA remark is slightly imprecise about the relationship between AFA and Foundation. Other checked items (rank of $R(\alpha)$, uncountability of $R(\omega+1)$, the union-rank computation) are correct.

## Issues

### ISSUE-0001 [Open] Rank of cartesian product at limit μ
- **Category:** Supplement/remark error
- **Location:** supplement after set:rank-operations
- **Detail:** The supplement claims: if $x,y$ nonempty and $\mu=\max(\rank x,\rank y)$ is a limit ordinal then $\rank(x\times y)=\mu$. But consider $x=\{\varnothing\}$ (rank 1), $y=\omega$ (rank $\omega$), so $\mu=\omega$. Then $x\times y=\{\langle\varnothing,n\rangle\mid n<\omega\}$, and $\rank(\langle\varnothing,n\rangle)=\max(0,n)+2=n+2$, whose sup over $n<\omega$ is $\omega$. So $\rank(x\times y)=\omega=\mu$ holds here. But take $x=y=\{\omega\}$? No, $\omega$ has rank $\omega$. Take $x=\{\omega\}$, $y=\{\omega\}$: $\mu=\omega$, $x\times y=\{\langle\omega,\omega\rangle\}$ has rank $\max(\omega,\omega)+2=\omega+2\neq\omega$. So the claim fails: $\mu$ limit but $\rank(x\times y)=\mu+2$ when the maximum rank $\mu$ is actually attained by an element. The correct statement requires that $\mu$ is not attained, i.e. $\sup\{\rank(a)+1:a\in x\}=\mu$ etc. with $\mu$ a limit not reached.
- **Proposed fix:** Replace with: If $x,y$ are nonempty and $\mu=\max(\rank x,\rank y)$ is a limit ordinal that is not attained as $\rank(a)+1$ for any $a\in x$ (resp. $\rank(b)+1$ for $b\in y$) — e.g. when $\rank x=\mu$ and $\mu$ is a limit ordinal with $\sup\{\rank(a)+1:a\in x\}=\mu$ — then $\rank(x\times y)=\mu$. In general $\rank(x\times y)=\sup\{\max(\rank a,\rank b)+2 : a\in x, b\in y\}$, which equals $\mu$ if $\mu$ is a limit ordinal not attained, and $\mu+2$ if $\mu$ is a successor or is attained as $\rank(a)+1$ (or $\rank(b)+1$).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Quine atom independence claim
- **Category:** Supplement/remark error
- **Location:** supplement after set:rank-basic
- **Detail:** The supplement states that $\ZF^{-}$ neither proves nor refutes the existence of a Quine atom $x=\{x\}$, and cites Aczel's AFA. This is essentially correct (AFA + ZF proves a unique Quine atom exists; $\ZF^{-}$ alone is consistent with both). However the parenthetical '基礎の公理と独立な公理は、たとえばアクゼルの反基礎の公理 AFA' is imprecise: AFA is not 'independent of the Foundation axiom' in the sense of being an alternative axiom independent over ZF; rather AFA is inconsistent with Foundation and is studied in ZF$^-$ + AFA. The phrasing could mislead. Minor.
- **Proposed fix:** Rephrase: 'AFA (Aczel's Anti-Foundation Axiom) is inconsistent with the Axiom of Foundation and is studied over $\ZF^{-}$; it implies the existence of a unique Quine atom.'
- **Reported:** 2026-10-28 (8ccef3d)
