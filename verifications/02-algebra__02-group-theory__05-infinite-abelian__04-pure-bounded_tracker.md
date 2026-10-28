# Verification tracker: `02-algebra/02-group-theory/05-infinite-abelian/04-pure-bounded.html`

<!-- source: 02-algebra/02-group-theory/05-infinite-abelian/04-pure-bounded.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of purity properties, Kulikov's criterion, Prüfer's countable theorem, and the bounded-structure and pure-bounded-summand theorems are sound, and the hypcheck comments give genuine counterexamples (Z(p^∞) for boundedness, pZ/p^2Z for purity, the product example for boundedness of the pure subgroup). The only genuine issue found is in the supplement on Ulm's theorem, where the description of which Ulm invariants are needed in the no-infinite-height case is imprecise/overstated. Everything else checked (the torsion-not-summand example, the cyclic-or-quasicyclic summand proposition, the Kulikov-subgroups corollary) is correct.

## Issues

### ISSUE-0001 [Open] Ulm's theorem stated for countable groups but invariant uses p^α G[p]
- **Category:** Supplement/remark error
- **Location:** supplement / ウルムの定理
- **Detail:** The supplement says countable reduced abelian p-groups are classified by the Ulm–Kaplansky invariant defined as the dimensions of $p^{\alpha}G[p]/p^{\alpha+1}G[p]$. The standard Ulm invariant is $f(\alpha)=\dim_{\mathbb{F}_p}(p^{\alpha}G[p]/p^{\alpha+1}G[p])$, which is correct, but the claim that this classifies *countable* reduced p-groups is the classical Ulm's theorem (which holds for all reduced p-groups, not only countable ones). More importantly, the parenthetical remark that \ref{grp:pruefer-countable} corresponds to the case where only $\alpha<\omega$ is needed is imprecise: having no nonzero element of infinite height means $\bigcap_n p^nG=0$, i.e. the Ulm invariants vanish for all $\alpha\ge\omega$, but the Ulm invariants for $\alpha<\omega$ need not be finite or eventually zero, so the classification still requires the full sequence $(f(\alpha))_{\alpha<\omega}$, not merely finitely many values. The statement overstates the simplification.
- **Proposed fix:** Replace the parenthetical with: "\ref{grp:pruefer-countable} corresponds to the case where the Ulm invariants vanish for all $\alpha\ge\omega$ (equivalently $\bigcap_{n}p^{n}G=0$); the invariants $f(\alpha)$ for $\alpha<\omega$ may still be nonzero for infinitely many $\alpha$, so the full sequence is needed."
- **Reported:** 2026-10-28 (8ccef3d)
