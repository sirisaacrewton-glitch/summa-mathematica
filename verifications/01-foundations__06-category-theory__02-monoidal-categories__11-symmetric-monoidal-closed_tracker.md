# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/11-symmetric-monoidal-closed.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/11-symmetric-monoidal-closed.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Trace of group representation is not the character value
- **Category:** Supplement/remark error
- **Location:** example (トレースと次元) item 2
- **Detail:** The example claims that for the representation category of a group $G$, the trace of the action of $g$ equals the character value $\chi_{V}(g)$. But the categorical trace is defined for an endomorphism $f\colon V\to V$ in the category, i.e. a $G$-equivariant map, and its value is an element of $\mathbf{V}(I,I)=k$. The action of $g$ is not an endomorphism in the representation category (it is not $G$-equivariant), so it has no categorical trace. The ordinary trace of the linear map $\rho(g)$ is indeed $\chi_{V}(g)$, but that is not the categorical trace of this definition. The statement conflates the two notions.
- **Proposed fix:** Replace with: 'For a finite-dimensional representation $V$ of $G$, the categorical trace of a $G$-equivariant endomorphism $f\colon V\to V$ is its ordinary trace, an element of $k=\mathbf{V}(I,I)$; in particular $\dim V=\dim_{k}V$. The character value $\chi_{V}(g)=\operatorname{tr}(\rho(g))$ is the ordinary trace of the linear map $\rho(g)$, which is not an endomorphism in the representation category, so it is not a categorical trace in the above sense.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Euler characteristic sign claim is imprecise
- **Category:** Supplement/remark error
- **Location:** example (トレースと次元) item 3
- **Detail:** The text says the dimension in the chain complex category is the alternating sum of dimensions, i.e. the Euler characteristic, and justifies this by 'the sign $(-1)^{pq}$ of the symmetry gives $-1$ on odd degrees'. The categorical trace of the identity of a chain complex $C$ (with the Koszul-sign symmetry) is $\sum_{n}(-1)^{n}\dim C_{n}$, which is the Euler characteristic only when the total dimension is finite (each $C_{n}$ finite-dimensional and finitely many nonzero). Without finiteness the alternating sum need not converge, and the categorical dimension is not defined. The parenthetical justification is also vague: the sign arises from the symmetry applied to homogeneous elements, not simply 'on odd degrees'.
- **Proposed fix:** State: 'For a chain complex $C$ of finite total dimension (each $C_{n}$ finite-dimensional and $C_{n}=0$ for all but finitely many $n$), the categorical dimension with the Koszul-sign symmetry is $\sum_{n}(-1)^{n}\dim C_{n}$, the Euler characteristic; the sign comes from the symmetry $x\otimes y\mapsto(-1)^{pq}y\otimes x$ applied to homogeneous elements.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Bicategory of bimodules is not a monoidal closed category example in the stated sense
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement lists 'biclosed categories (double closed categories), e.g. the tensor product of bimodules' as an example of a non-symmetric monoidal closed category. The tensor product of bimodules over a non-commutative ring is only associative up to coherent isomorphism and is not a monoidal structure on a single category of bimodules in the strict sense used here (it is a bicategory / the category of $R$-$R$-bimodules is monoidal but its left and right internal homs coincide by symmetry considerations only when $R$ is commutative). As stated, the example is imprecise: the standard example of a biclosed (non-symmetric) monoidal category is $R$-bimodules with $\otimes_{R}$, which is monoidal but not symmetric; however calling it 'the tensor product of bimodules' without specifying the ring and the monoidal structure is misleading, and for a commutative ring it is symmetric.
- **Proposed fix:** Replace with: 'For a non-commutative ring $R$, the category of $R$-$R$-bimodules with $\otimes_{R}$ is a monoidal (not symmetric) category that is biclosed, with left and right internal homs $[b,c]_{l}$ and $[b,c]_{r}$ generally distinct.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] 2d TQFT / Frobenius algebra correspondence attribution
- **Category:** Unsupported fact
- **Location:** supplement (ストリング図式)
- **Detail:** The supplement states that symmetric monoidal functors from the 2-dimensional cobordism category to vector spaces (topological field theories) correspond to commutative Frobenius algebras. This is a correct known theorem (Atiyah, Dijkgraaf, Abrams, and others), but it is stated without proof and without a citation, and the page marks it as 'not covered on this site'. Since it is a genuine theorem, this is not false; however the attribution 'is known' without reference is acceptable. No error.
- **Proposed fix:** No change needed; optionally add a reference (e.g. Kock, 'Frobenius Algebras and 2D Topological Quantum Field Theories').
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that compact closed categories are closed requires symmetry
- **Category:** Supplement/remark error
- **Location:** proposition 双対と内部 hom (statement)
- **Detail:** The proposition concludes 'compact closed categories are closed'. The definition of compact closed category given on this page is a symmetric monoidal category in which every object is dualizable. For a symmetric monoidal category this is correct: the duality gives $[a,c]\cong c\otimes a^{*}$, so it is closed. However the statement as written ('コンパクト閉圏は閉である') is fine under the page's definition (symmetric). No error, but note that for non-symmetric compact closed categories one only gets that the monoidal structure is closed on both sides (biclosed), which is still closed. So the claim is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
