# Verification tracker: `02-algebra/01-linear-algebra/02-determinants/04-exercises.html`

<!-- source: 02-algebra/01-linear-algebra/02-determinants/04-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a set of exercises with solutions; most solutions are correct. The main genuine issue is the wrong order of row operations in the min(i,j) determinant exercise (lin:ex-df-2), which as written does not produce the claimed triangular form. The block-matrix solution (lin:ex-dp-3) has a minor imprecision about which elementary matrix realizes the column operation. The adjugate-adjugate remark and the Gram determinant equality case are essentially correct but stated with slight imprecision; these are borderline and reported as minor remarks. No missing hypotheses or improper links were found.

## Issues

### ISSUE-0001 [Open] Row-reduction direction in min(i,j) determinant
- **Category:** Logical gap
- **Location:** lin:ex-df-2 / solution
- **Detail:** The solution says: subtract row $i-1$ from row $i$ for $i=n,n-1,\dots,2$. But if you process from $i=n$ downward, when you reach row $i$ the row $i-1$ has not yet been modified, so subtracting it does not produce the claimed row $(0,\dots,0,1,\dots,1)$. The correct order is $i=2,3,\dots,n$ (top to bottom), so that each row $i-1$ is already in its final form when used. As written the operation order is wrong.
- **Proposed fix:** Perform the row operation (row $i$) $\leftarrow$ (row $i$) $-$ (row $i-1$) for $i=2,3,\dots,n$ in this order (top to bottom). Then row $i$ becomes $(0,\dots,0,1,\dots,1)$ with the first $1$ in position $i$, giving an upper triangular matrix with all diagonal entries $1$, hence determinant $1$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Block operation description in symmetric block determinant
- **Category:** Logical gap
- **Location:** lin:ex-dp-3 / solution
- **Detail:** The solution says: add the second block column to the first block column, then subtract the first block row from the second block row, obtaining $\begin{pmatrix}A+B&B\\0&A-B\end{pmatrix}$. After the column operation the matrix is $\begin{pmatrix}A+B&B\\B+A&A\end{pmatrix}$; subtracting the first block row from the second gives $\begin{pmatrix}A+B&B\\0&A-B\end{pmatrix}$, which is correct. However the text's phrasing 'subtract the first block row from the second block row' is fine, but the claim that these operations 'do not change the determinant' via multiplying by $\begin{pmatrix}I&0\\I&I\end{pmatrix}$ is imprecise: the column operation corresponds to right-multiplication by $\begin{pmatrix}I&I\\0&I\end{pmatrix}$ (determinant 1) and the row operation to left-multiplication by $\begin{pmatrix}I&0\\-I&I\end{pmatrix}$ (determinant 1). The stated matrix $\begin{pmatrix}I&0\\I&I\end{pmatrix}$ has determinant 1 but is not the matrix actually used for the column step. This is a minor imprecision, not a fatal gap.
- **Proposed fix:** The column operation is right-multiplication by $\begin{pmatrix}I&I\\0&I\end{pmatrix}$ and the row operation is left-multiplication by $\begin{pmatrix}I&0\\-I&I\end{pmatrix}$; both have determinant $1$, so the determinant is unchanged, and the resulting block upper-triangular matrix has determinant $\det(A+B)\det(A-B)$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Density argument for adjugate identity needs care
- **Category:** Supplement/remark error
- **Location:** lin:ex-mi-3 / solution
- **Detail:** The parenthetical remark says the identity $\widetilde{\widetilde{A}}=(\det A)^{n-2}A$ extends to general $A$ 'as a polynomial identity: invertible matrices are dense, or work in a polynomial ring in indeterminates'. The density argument is valid over $\mathbb{R}$ or $\mathbb{C}$ but the statement is for a general (commutative) ring/field; over an arbitrary field the Zariski-density argument still works since invertible matrices are dense in $M_{n}$ over any field (the complement of the zero set of $\det$), so this is acceptable. However the phrase 'invertible matrices are dense' without specifying the topology (Zariski) is imprecise, and the polynomial-ring alternative is the cleaner justification. Not a mathematical error but an imprecise side remark.
- **Proposed fix:** For general $A$, regard the entries as indeterminates: both sides are polynomials in the entries that agree on the Zariski-dense set $\det A\neq0$, hence agree identically; specializing gives the identity for all $A$ over any commutative ring.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Equality case in Gram determinant
- **Category:** Unsupported fact
- **Location:** lin:ex-mi-4 / solution
- **Detail:** The solution claims $\det(AA^{\top})=0$ iff all $m$-th order minors vanish, i.e. $\mathrm{rank}A<m$. This is correct, but the citation is to 'the page on minors and rank' via \tref{lin:page-minors}; the argument that the sum of squares of $m$-th order minors vanishes iff each vanishes (over $\mathbb{R}$) is used implicitly. This is fine over $\mathbb{R}$ since squares are nonnegative. No error, but the equality characterization relies on the realness of $A$; over $\mathbb{C}$ the sum of squares could cancel. The problem statement restricts to real $A$, so this is consistent.
- **Proposed fix:** Since $A$ is real, each $(\det A_{J})^{2}\ge0$, so the sum vanishes iff every $m$-th order minor vanishes, which by the minor criterion is equivalent to $\mathrm{rank}A<m$.
- **Reported:** 2026-10-28 (10fede1)
