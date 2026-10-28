# Verification tracker: `02-algebra/02-group-theory/01-groups/05-homomorphism-theorems.html`

<!-- source: 02-algebra/02-group-theory/01-groups/05-homomorphism-theorems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are correct and well-supported by the cited results. The genuine problems are concentrated in the supplements: the categorical remark misstates the direction of the abelianization adjunction (it is a functor Grp→Ab left adjoint to the inclusion Ab↪Grp, not 'from Ab to Grp'), and the 'coequalizer' description is imprecise. The hypcheck counterexample in the correspondence theorem has an incorrect value for π(K) (it should be {0+2Z, 2+2Z}), though the conclusion is right. Everything else checked out.

## Issues

### ISSUE-0001 [Open] Abelianization is left adjoint to the inclusion Ab→Grp, not from Ab to Grp
- **Category:** Supplement/remark error
- **Location:** supplement (圏論の言葉で) after grp:abelianization-universal
- **Detail:** The supplement says the abelianization $G\mapsto G/[G,G]$ is the left adjoint of the inclusion functor from $\Ab$ to $\Grp$. The abelianization is a functor $\Grp\to\Ab$, and it is left adjoint to the inclusion $\Ab\hookrightarrow\Grp$ (which goes the other way). As written, the direction of the functor is wrong: the abelianization does not go from $\Ab$ to $\Grp$.
- **Proposed fix:** 可換化 $G\mapsto G/[G,G]$ は関手 $\Grp\to\Ab$ であって、包含関手 $\Ab\hookrightarrow\Grp$ の左随伴である（すなわち $\Hom_{\Ab}(G^{\mathrm{ab}},A)\cong\Hom_{\Grp}(G,A)$ が $A\in\Ab$ について自然）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Factorization theorem is not an equalizer/coequalizer
- **Category:** Supplement/remark error
- **Location:** supplement (圏論の言葉で) after grp:abelianization-universal
- **Detail:** The supplement calls $G/N$ with its universal property 'a kind of coequalizer (余等化子の一種)'. The factorization theorem is a coequalizer only in a loose sense: $G/N$ is the coequalizer of the pair $N\rightrightarrows G$ (the inclusion and the trivial map) in $\Grp$, but the universal property stated in \ref{grp:factor-through-quotient} (factoring homomorphisms that kill $N$) is the universal property of the quotient, not literally a coequalizer statement. Calling it 'a kind of coequalizer' is imprecise/overstated.
- **Proposed fix:** \ref{grp:factor-through-quotient} は、剰余群 $G/N$ が「$N$ を潰す準同型」の中で普遍的なもの（$N$ の $G$ への包含と自明写像の余等化子）であることを言っている。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck counterexample: π(K) is not {0+2Z}
- **Category:** Supplement/remark error
- **Location:** grp:correspondence / hypcheck
- **Detail:** The hypcheck claims that for $G=\Z$, $N=2\Z$, $K=4\Z$, one has $\pi(K)=\{0+2\Z\}$ and $\pi^{-1}(\pi(K))=2\Z\neq 4\Z$. But $\pi(K)=4\Z/2\Z=\{0+2\Z, 2+2\Z\}$, not $\{0+2\Z\}$; the conclusion $\pi^{-1}(\pi(K))=2\Z$ is correct, but the stated value of $\pi(K)$ is wrong (it omits the coset $2+2\Z$).
- **Proposed fix:** $G=\Z$, $N=2\Z$, $K=4\Z$ なら $\pi(K)=4\Z/2\Z=\{0+2\Z,\,2+2\Z\}$ で、その逆像は $2\Z\neq 4\Z$。
- **Reported:** 2026-10-28 (8ccef3d)
