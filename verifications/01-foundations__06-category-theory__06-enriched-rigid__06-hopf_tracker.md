# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/06-hopf.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/06-hopf.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect dimension count for Kronecker product in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement claims that for $k[G]$ with finite $G$, the action on $M\otimes N$ can be computed as a Kronecker product of $(\dim M)(\dim N)$-order matrices. The action of $g$ on $M\otimes N$ is $g\mapsto \rho_{M}(g)\otimes\rho_{N}(g)$, which is the Kronecker product of a $\dim M$-matrix and a $\dim N$-matrix, hence a matrix of order $(\dim M)(\dim N)$. That part is fine, but the phrasing '$(\dim M)(\dim N)$ 次の行列のクロネッカー積' is ambiguous; more importantly the claim that 'the action of the $R$-matrix is a product of matrices of the same size' is imprecise: for $k[G]$ the universal $R$-matrix is $1\otimes1$ (trivial), so there is no nontrivial $R$-matrix action. The statement is misleading rather than a clean mathematical error, but it overstates the role of an $R$-matrix for $k[G]$.
- **Proposed fix:** Replace with: 'For $k[G]$ with $G$ finite, the action on $M\otimes N$ is given by the Kronecker product $\rho_{M}(g)\otimes\rho_{N}(g)$, a matrix of order $(\dim M)(\dim N)$. For the group algebra $k[G]$ the universal $R$-matrix is $1\otimes1$, so the induced braiding is the ordinary symmetry $\tau$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated claim that infinite-dimensional modules have no dual
- **Category:** Supplement/remark error
- **Location:** hypcheck / 有限次元性
- **Detail:** The hypcheck says '無限次元の加群は双対をもたない' (infinite-dimensional modules have no dual). This is false as stated: an infinite-dimensional $H$-module can admit a right dual in $H\text{-}\mathbf{Mod}$ in some cases (e.g. when the module is finite-dimensional over $k$ it is fine, but the blanket claim about all infinite-dimensional modules is wrong; also the rigid structure requires finite-dimensionality of the dual object, and a module can have a dual even if infinite-dimensional provided the zig-zag equations hold with a suitable dual). At minimum the statement is imprecise: the correct statement is that the coev/ev construction via a $k$-basis requires finite-dimensionality, and the finite-dimensional modules form the rigid subcategory.
- **Proposed fix:** Replace with: 'The coev construction $\mathrm{coev}(1)=\sum_{i}e_{i}\otimes e^{i}$ uses a finite $k$-basis of $M$, so it requires $M$ finite-dimensional; the finite-dimensional $H$-modules form the rigid subcategory. (An infinite-dimensional module may still admit a dual in special cases, but the basis construction does not apply.)'
- **Reported:** 2026-10-28 (8ccef3d)
