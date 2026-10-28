# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/06-cellular.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/06-cellular.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the lens space homology formula is stated without the coprimality hypothesis on the $q_i$, and the accompanying claim about lens spaces being 'same homology but not homotopy equivalent' is misstated (the standard examples are homotopy equivalent but not homeomorphic). The spectral sequence remark is essentially correct. Proofs and other supplements check out.

## Issues

### ISSUE-0001 [Open] Lens space homology claim is wrong for general L(p;q_1,...,q_n)
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と注意)
- **Detail:** The supplement claims that every lens space $L(p;q_1,\dots,q_n)$ has $H_k=\mathbb{Z}/p$ for odd $k$ with $0<k<2n-1$. This is false in general. The standard lens space $L(p;q_1,\dots,q_n)$ has $H_k(L)\cong\mathbb{Z}/p$ for $k$ odd, $0<k<2n-1$, only when all the $q_i$ are coprime to $p$ (which is the usual convention) AND, more importantly, the homology depends on the $q_i$: for the homology to be $\mathbb{Z}/p$ in all odd degrees one needs the $q_i$ to be units; but the stated formula $H_k=\mathbb{Z}/p$ for all odd $k$ is only correct when the $q_i$ are pairwise such that the products are coprime to $p$. In fact for $L(p;q_1,\dots,q_n)$ with all $q_i$ coprime to $p$ the cellular boundary is multiplication by $q_1q_2\cdots q_k$ (up to sign) in degree $2k$, giving $H_{2k-1}=\mathbb{Z}/\gcd(p,q_1\cdots q_k)$, which equals $\mathbb{Z}/p$ only if $p$ divides none of the partial products—true when all $q_i$ are units mod $p$. So the formula is correct under the standard convention $\gcd(q_i,p)=1$, but the supplement states it without that hypothesis, and the accompanying claim that '$L(p;q)$ たちはホモロジー（や基本群）が同じでもホモトピー同値でない例を含む' is misleading: for 3-dimensional lens spaces $L(p;q)$ the homotopy type is determined by $q$ up to $q\equiv\pm q'^{\pm1}$, and homotopy equivalence does imply homeomorphism in dim 3, so the standard example is homotopy equivalent but not homeomorphic, not 'same homology but not homotopy equivalent'.
- **Proposed fix:** State the hypothesis explicitly: 'For $\gcd(q_i,p)=1$ for all $i$, the lens space $L(p;q_1,\dots,q_n)$ has one cell in each dimension $0,\dots,2n-1$ and $H_k\cong\mathbb{Z}/p$ for odd $k$, $0<k<2n-1$, and $H_k=0$ otherwise (except $H_0=H_{2n-1}=\mathbb{Z}$).' Replace the homotopy claim with: 'The 3-dimensional lens spaces $L(p;q)$ and $L(p;q')$ are homotopy equivalent iff $q'\equiv\pm q^{\pm1}\pmod p$, but are homeomorphic iff $q'\equiv\pm q^{\pm1}\pmod p$; there are examples that are homotopy equivalent but not homeomorphic.'
- **Reported:** 2026-10-28 (8ccef3d)
