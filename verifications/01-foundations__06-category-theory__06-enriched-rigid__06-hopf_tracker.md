# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/06-hopf.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/06-hopf.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, lemma on antipode anti-homomorphism, theorems on bialgebra-monoidal correspondence and antipode-duals, and the R-matrix braiding theorem) is logically sound. The problems concentrate in the side remarks: the supplement's dimension count for the Kronecker product is imprecise, the hypcheck's claim that infinite-dimensional modules have no dual is overstated, the quasitriangular example's symmetry argument is phrased too weakly, and the Drinfeld double statement omits the conjugation action. These are all fixable by tightening the statements.

## Issues

### ISSUE-0001 [Open] Incorrect dimension count for Kronecker product in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement claims that for $k[G]$ the action on $M\otimes N$ can be computed as a Kronecker product of matrices of size $(\dim M)(\dim N)$. The action of $g$ on $M\otimes N$ is $g\mapsto g_M\otimes g_N$, which is indeed a Kronecker product, but the resulting matrix has size $(\dim M)(\dim N)\times(\dim M)(\dim N)$, i.e. it is a square matrix of order $(\dim M)(\dim N)$, not a matrix 'of order $(\dim M)(\dim N)$' in the sense of the factors. The phrasing '$(\dim M)(\dim N)$ 次の行列のクロネッカー積' is ambiguous/imprecise: the Kronecker product is of the $\dim M$- and $\dim N$-matrices, giving a matrix of order $(\dim M)(\dim N)$. Also the claim that the $R$-matrix action is 'a product of matrices of the same size' is imprecise since for $k[G]$ with $R=1\otimes1$ the braiding is just the swap, and in general the $R$-matrix acts as a sum of Kronecker products, not a single product.
- **Proposed fix:** For $k[G]$, the action of $g$ on $M\otimes N$ is $g_{M}\otimes g_{N}$, the Kronecker product of the matrices of $g$ on $M$ and on $N$; the resulting matrix has order $(\dim M)(\dim N)$. The $R$-matrix acts as $\sum_{i} (t_{i})_{N}\otimes(s_{i})_{M}$ composed with the swap, i.e. a sum of Kronecker products, not a single matrix product.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim that infinite-dimensional modules have no dual
- **Category:** Supplement/remark error
- **Location:** hypcheck / 有限次元性
- **Detail:** The hypcheck states '無限次元の加群は双対をもたない' (infinite-dimensional modules have no dual). This is false as stated: an infinite-dimensional $H$-module can admit a right dual in $H\text{-}\mathbf{Mod}$ in special cases (e.g. when the module is finite-dimensional over $k$ but the category is taken with all modules, or more relevantly, dualizability depends on the module, not merely on dimension). More precisely, the standard statement is that the finite-dimensional modules form a rigid category, and the coev/ev construction via a basis requires finite dimension; but it is not true that *every* infinite-dimensional module fails to have a dual. The correct statement is that the construction given requires finite dimension, and the category of all modules is not rigid.
- **Proposed fix:** The basis-dependent construction of $\mathrm{coev}$ requires $M$ to be finite dimensional; the category of all $H$-modules is not rigid in general, while the full subcategory of finite-dimensional modules is.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Imprecise claim about braided vs symmetric in example 2
- **Category:** Supplement/remark error
- **Location:** example (quasitriangular) item 2
- **Detail:** The example states '$n\ge3$ なら $c_{W,V}c_{V,W}\neq1$ となりうるので対称でない' (if $n\ge3$ then $c_{W,V}c_{V,W}\neq1$ can occur, so it is not symmetric). This is imprecise: whether the braiding is symmetric depends on $\zeta$ and on the specific objects. For $\zeta$ a primitive $n$-th root with $n\ge3$, the braiding on the category of $\mathbb{Z}/n$-graded vector spaces is indeed non-symmetric (e.g. on objects concentrated in degrees $1$ and $1$, $c^2=\zeta^{2}\neq1$ when $n\nmid 2$), but the phrasing 'can occur' ($\neq1$ となりうる) is too weak and the conclusion 'so not symmetric' does not follow from 'can occur'. Symmetry requires $c_{W,V}c_{V,W}=1$ for *all* $V,W$; a single failure suffices, but the text should assert existence of a failing pair, not mere possibility.
- **Proposed fix:** For $n\ge3$ and $\zeta$ a primitive $n$-th root of unity, taking $V=W=k$ concentrated in degree $1$ gives $c_{W,V}c_{V,W}=\zeta^{2}\neq1$ (since $n\nmid 2$), so the braiding is not symmetric.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that Drinfeld double module category is equivalent to equivariant vector bundles
- **Category:** Unsupported fact
- **Location:** example (quasitriangular) item 3
- **Detail:** The example states that the representation category of the Drinfeld double $D(G)$ is equivalent to the category of $G$-equivariant vector bundles on $G$. The standard result is that $D(G)\text{-}\mathbf{Mod}$ is equivalent to the category of $G$-equivariant vector bundles on $G$ *with the conjugation action* (or equivalently, the Drinfeld center of $\mathbf{Rep}(G)$), which is correct, but the statement as written omits the crucial specification that the $G$-action on the base $G$ is by conjugation. Without this, the claim is imprecise. Since it is marked '本サイト未収録' (not covered on this site) and stated as known, it should be stated precisely.
- **Proposed fix:** The Drinfeld double $D(G)=k^{G}\rtimes k[G]$ is quasitriangular, and $D(G)\text{-}\mathbf{Mod}$ is equivalent to the category of $G$-equivariant vector bundles on $G$ (with $G$ acting on itself by conjugation), equivalently the Drinfeld center of $\mathbf{Rep}(G)$.
- **Reported:** 2026-10-28 (10fede1)
