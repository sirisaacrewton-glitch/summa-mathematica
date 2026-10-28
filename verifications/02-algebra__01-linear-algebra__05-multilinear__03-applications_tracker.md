# Verification tracker: `02-algebra/01-linear-algebra/05-multilinear/03-applications.html`

<!-- source: 02-algebra/01-linear-algebra/05-multilinear/03-applications.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 24 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect polarization formula (missing q(0) term / wrong sign convention)
- **Category:** Supplement/remark error
- **Location:** lin:polarization / proposition statement item 2
- **Detail:** The stated polarization formula $$\beta(v_{1},\dots,v_{d})=\frac{1}{d!}\sum_{\emptyset\neq S\subset[d]}(-1)^{d-|S|}q\Bigl(\sum_{i\in S}v_{i}\Bigr)$$ is not correct as written. The standard polarization identity requires summing over all subsets $S\subset[d]$ including $S=\emptyset$ (with $q(0)=0$ for homogeneous $q$ of degree $d\ge1$, so that term vanishes) and, more importantly, the sign convention must be $(-1)^{d-|S|}$ with the sum over all $S$ including the empty set; but the proof's counting argument $\sum_{S\supset T}(-1)^{d-|S|}$ over $\emptyset\neq S$ gives $0$ for $T\neq[d]$ only if the empty set is included (for $T=\emptyset$ the empty-set term contributes). Concretely, for $d=2$ the formula gives $\frac{1}{2}(-q(v_{1})-q(v_{2})+q(v_{1}+v_{2}))$, which equals $\beta(v_{1},v_{2})$ only when $q(0)=0$; but the counting in Step 2 as written (sum over $\emptyset\neq S\supset T$) fails for $T=\emptyset$, and the displayed formula omits the $S=\emptyset$ term needed for the counting to work. The formula is correct only if the sum runs over all $S\subset[d]$ (including $\emptyset$) with $q(0)=0$, or equivalently over $\emptyset\neq S$ with the convention that the $T=\emptyset$ case is handled separately.
- **Proposed fix:** State the polarization as $$\beta(v_{1},\dots,v_{d})=\frac{1}{d!}\sum_{S\subset[d]}(-1)^{d-|S|}q\Bigl(\sum_{i\in S}v_{i}\Bigr)$$ with the convention $q(0)=0$ (valid since $q$ is homogeneous of degree $d\ge1$), and in Step 2 note that the term $S=\emptyset$ vanishes and that the counting $\sum_{S\supset T}(-1)^{d-|S|}$ over all $S\subset[d]$ equals $0$ unless $T=[d]$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that rank-3 tensor w is a limit of rank-2 tensors is misstated
- **Category:** Supplement/remark error
- **Location:** remark 3 次以上のテンソルの階数 / item 1
- **Detail:** The remark states that $w=e_{1}\otimes e_{1}\otimes e_{2}+e_{1}\otimes e_{2}\otimes e_{1}+e_{2}\otimes e_{1}\otimes e_{1}$ is a limit of rank-$\le2$ tensors via $\varepsilon^{-1}((e_{1}+\varepsilon e_{2})^{\otimes3}-e_{1}^{\otimes3})$. Expanding, $(e_{1}+\varepsilon e_{2})^{\otimes3}-e_{1}^{\otimes3}=\varepsilon(e_{1}\otimes e_{1}\otimes e_{2}+e_{1}\otimes e_{2}\otimes e_{1}+e_{2}\otimes e_{1}\otimes e_{1})+\varepsilon^{2}(\cdots)+\varepsilon^{3}e_{2}^{\otimes3}$, so $\varepsilon^{-1}(\cdots)\to w$ as $\varepsilon\to0$. However, the expression $\varepsilon^{-1}((e_{1}+\varepsilon e_{2})^{\otimes3}-e_{1}^{\otimes3})$ is a difference of two pure tensors divided by $\varepsilon$, hence has rank at most $2$ (as a sum of two pure tensors), so the limit argument is correct. The issue is that the remark claims $w$ has rank $3$ over $k^2\otimes k^2\otimes k^2$ for a general field $k$; this is true over $\mathbb{R}$ and $\mathbb{C}$ but the rank of $w$ can drop over fields of small characteristic or special fields. The statement should specify the field (e.g. $\mathbb{R}$ or $\mathbb{C}$).
- **Proposed fix:** Restrict item 1 to $k=\mathbb{R}$ (or $\mathbb{C}$): 'Over $\mathbb{R}$ (or $\mathbb{C}$), the tensor $w=\dots\in(\mathbb{R}^{2})^{\otimes3}$ has rank $3$, exceeding the dimension $2$ of each factor, and is a limit of rank-$\le2$ tensors $\varepsilon^{-1}((e_{1}+\varepsilon e_{2})^{\otimes3}-e_{1}^{\otimes3})$, so the set of tensors of rank $\le2$ is not closed.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Strassen/Winograd attribution for rank of 2x2 matrix multiplication tensor
- **Category:** Supplement/remark error
- **Location:** remark 3 次以上のテンソルの階数 / item 3
- **Detail:** The remark states the rank of the $2\times2$ matrix multiplication tensor is $7$ and attributes this to 'Strassen's upper bound and Winograd's lower bound'. Strassen (1969) gave the upper bound $7$ (the algorithm using $7$ multiplications). The lower bound of $7$ (i.e. that rank is exactly $7$, not $\le6$) was proved by Winograd (1971) and independently by Landsberg, and also by Bläser. The attribution is essentially correct but the phrasing 'Strassen's upper bound and Winograd's lower bound' is acceptable. However, the claim that this 'gives a matrix multiplication algorithm with 7 multiplications' is correct. No error here beyond the field specification; the statement is standard. Not reporting.
- **Proposed fix:** No change needed; optionally specify the field is arbitrary (rank of $\langle2,2,2\rangle$ is $7$ over any field).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck claim about indefinite inner product on exterior powers
- **Category:** Supplement/remark error
- **Location:** hypcheck / 正定値な内積
- **Detail:** The hypcheck states '不定値の内積では外冪の内積も不定値になる' (for an indefinite inner product, the induced inner product on the exterior power is also indefinite). This is true for $k\ge1$: if $v$ is isotropic or negative, $v^{\wedge k}$ has the corresponding sign, and the induced form on $\Lambda^{k}V$ is nondegenerate of indefinite signature whenever $k\ge1$ and the original form is indefinite (the signature on $\Lambda^{k}$ is determined by the elementary symmetric functions of the signature). This is correct. Not reporting.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that symmetric tensors and polynomials do not coincide in characteristic p <= d
- **Category:** Supplement/remark error
- **Location:** hypcheck / 標数の条件
- **Detail:** The hypcheck states that in characteristic $p\le d$, symmetric tensors and polynomials (elements of the symmetric algebra) do not coincide, giving the example that over $\mathbb{F}_{2}$ the polynomial $x^{2}$ cannot be uniquely recovered from the symmetric bilinear form via $\beta(v,v)$. This is correct: in characteristic $2$, the polarization map from symmetric $d$-linear forms to homogeneous polynomials of degree $d$ fails to be an isomorphism when $d!\equiv0$, and $\operatorname{Sym}^{d}(V^{*})$ (the symmetric algebra) is not isomorphic to the space of polynomial functions in general (e.g. $x^{p}$ vanishes as a function but is nonzero in the symmetric algebra). The example is valid. Not reporting.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Claim that best low-rank approximation may fail to exist for order >= 3
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement states that for order $\ge3$ tensors, a best low-rank approximation may fail to exist (boundary rank phenomenon). This is a correct and well-known fact (de Silva–Lim 2008): the set of tensors of rank $\le r$ is not closed for $r\ge2$ and order $\ge3$, so the infimum of the approximation error may not be attained. Correct. Not reporting.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Claim that rank depends on the field: R^2 tensor R^2 tensor R^2 has rank 3 over R and rank 2 over C
- **Category:** Supplement/remark error
- **Location:** remark 3 次以上のテンソルの階数 / item 2
- **Detail:** The remark states that there is a tensor in $\mathbb{R}^{2}\otimes\mathbb{R}^{2}\otimes\mathbb{R}^{2}$ with rank $3$ over $\mathbb{R}$ and rank $2$ over $\mathbb{C}$. This is a standard example (e.g. the tensor $e_{1}\otimes e_{1}\otimes e_{2}+e_{1}\otimes e_{2}\otimes e_{1}+e_{2}\otimes e_{1}\otimes e_{1}$ has rank $3$ over $\mathbb{R}$ but rank $2$ over $\mathbb{C}$? Actually this specific tensor has rank $3$ over both $\mathbb{R}$ and $\mathbb{C}$). The correct standard example of field-dependent rank is a tensor whose rank drops over $\mathbb{C}$; for instance, the tensor $e_{1}\otimes e_{1}\otimes e_{1}+e_{1}\otimes e_{2}\otimes e_{2}+e_{2}\otimes e_{1}\otimes e_{2}+e_{2}\otimes e_{2}\otimes e_{1}$ (related to complex multiplication) has rank $3$ over $\mathbb{R}$ but rank $2$ over $\mathbb{C}$? This is a known example but the specific tensor is not given. The claim as stated is true (there exist such tensors), so it is not false, but it is imprecise because no example is given and the reader cannot verify. Since the claim is true, not reporting as an error.
- **Proposed fix:** Optionally give the explicit example: the tensor corresponding to the multiplication of complex numbers, $e_{1}\otimes e_{1}\otimes e_{1}-e_{1}\otimes e_{2}\otimes e_{2}-e_{2}\otimes e_{1}\otimes e_{2}-e_{2}\otimes e_{2}\otimes e_{1}$, has rank $3$ over $\mathbb{R}$ and rank $2$ over $\mathbb{C}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 4 of lin:det-volume: non-invertible case uses 'true subspace has measure zero' without full justification
- **Category:** Logical gap
- **Location:** lin:det-volume / Step 4
- **Detail:** Step 4 argues that if $T$ is not invertible, $T(\mathbb{R}^{n})$ is a proper subspace contained in a hyperplane of measure $0$, hence $\operatorname{vol}(T(S))=0$. This is correct but relies on the fact that a proper subspace is contained in a hyperplane and that hyperplanes have Lebesgue measure zero. The text says '超平面は回転で座標超平面に移り、座標超平面は測度 0' which is a valid justification. No gap.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Step 1 of lin:det-volume: c(T) > 0 requires T invertible and S of positive measure
- **Category:** Logical gap
- **Location:** lin:det-volume / Step 1
- **Detail:** Step 1 states $c(T)=\operatorname{vol}(T([0,1]^{n}))>0$ for invertible $T$. This is correct since $T([0,1]^{n})$ is a parallelepiped with nonempty interior. The measure uniqueness argument requires the measure $S\mapsto\operatorname{vol}(T(S))$ to be a Borel measure finite on compact sets and translation invariant, which holds. No gap.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Step 3 of lin:det-volume: c(T_{ij}(c))=1 via Cavalieri requires care with the shear
- **Category:** Logical gap
- **Location:** lin:det-volume / Step 3
- **Detail:** Step 3 argues that the shear $T_{ij}(c)$ preserves volume because for fixed $x_{j}$ each section is a translation. This is correct via Cavalieri/Fubini. No gap.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Citation of lin:det-special-matrices.3 in Step 4
- **Category:** Improper link
- **Location:** lin:det-volume / Step 4
- **Detail:** Step 4 cites \ref{lin:det-special-matrices.3} for the determinant values of elementary matrices. According to the label table, lin:det-special-matrices is '三角行列・置換行列・基本行列' (proposition 1.8), which presumably includes the determinant of elementary matrices. Item 3 likely covers this. The citation appears appropriate. No issue.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Citation of lin:exterior-universal.1 in Step 1 of lin:exterior-inner-product
- **Category:** Improper link
- **Location:** lin:exterior-inner-product / Step 1
- **Detail:** Step 1 cites \ref{lin:exterior-universal.1} twice to induce the bilinear map on $\Lambda^{k}V$. The universal property of exterior powers is indeed item 1 of lin:exterior-universal. Appropriate.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Citation of lin:exterior-basis in Step 2 of lin:exterior-inner-product
- **Category:** Improper link
- **Location:** lin:exterior-inner-product / Step 2
- **Detail:** Step 2 cites \ref{lin:exterior-basis} for the expansion $v_{1}\wedge\dots\wedge v_{k}=\sum_{I}\det X_{I,[k]}e_{I}$. The label lin:exterior-basis is '自由加群の外冪の基底' (theorem 2.3), which gives the basis $e_{I}$ and the expansion formula. Appropriate.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Citation of lin:det-volume in Step 3 of lin:exterior-inner-product
- **Category:** Improper link
- **Location:** lin:exterior-inner-product / Step 3
- **Detail:** Step 3 cites \ref{lin:det-volume} to conclude the $k$-dimensional volume is $|\det C|$. This is the theorem on the same page, appropriate.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Citation of lin:prob-ex-cross-product in Step 3 of lin:hodge-star
- **Category:** Improper link
- **Location:** lin:hodge-star / Step 3
- **Detail:** Step 3 cites \ref{lin:prob-ex-cross-product} for the correspondence with the usual cross product. The label is 'problem 2.10' on the exterior page, presumably establishing the cross product formula. Appropriate.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Citation of lin:symmetric-algebra.2 in Step 1 of lin:polarization
- **Category:** Improper link
- **Location:** lin:polarization / Step 1
- **Detail:** Step 1 cites \ref{lin:symmetric-algebra.2} for the identification $\operatorname{Sym}(V^{*})\cong k[x_{1},\dots,x_{n}]$. The label lin:symmetric-algebra is '対称代数' (theorem 2.7), item 2 presumably gives this identification. Appropriate.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Citation of lin:tensor-hom.3 in lin:tensor-rank
- **Category:** Improper link
- **Location:** lin:tensor-rank / definition
- **Detail:** The definition cites \ref{lin:tensor-hom.3} for $V_{1}\otimes V_{2}\cong\operatorname{Hom}(V_{1}^{*},V_{2})$ and the equality of tensor rank with matrix rank. The label lin:tensor-hom is 'テンソル積と Hom' (theorem 1.2), item 3 presumably gives this. Appropriate.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Claim that the rank of the 2x2 matrix multiplication tensor is 7
- **Category:** Unsupported fact
- **Location:** remark 3 次以上のテンソルの階数 / item 3
- **Detail:** The remark states the rank of the $2\times2$ matrix multiplication tensor is $7$, citing Strassen's upper bound and Winograd's lower bound. This is correct (Strassen 1969 upper bound 7; Winograd 1971 lower bound 7). The statement is a known fact and correctly attributed. No issue.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Claim that the exponent omega of matrix multiplication is undecided
- **Category:** Unsupported fact
- **Location:** remark 3 次以上のテンソルの階数 / item 3
- **Detail:** The remark states that determining the exponent $\omega$ of matrix multiplication complexity is an open problem. This is correct. No issue.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] Claim that the set of rank <= 2 tensors is not closed
- **Category:** Unsupported fact
- **Location:** remark 3 次以上のテンソルの階数 / item 1
- **Detail:** The remark states that the set of tensors of rank $\le2$ is not closed, via the boundary rank phenomenon. This is correct (de Silva–Lim). No issue.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] Claim that the Hodge star changes sign when orientation is reversed
- **Category:** Unsupported fact
- **Location:** hypcheck / 向き
- **Detail:** The hypcheck states that reversing the orientation changes $\star$ to $-\star$. This is correct: $\operatorname{vol}$ changes sign, and $\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\operatorname{vol}$, so $\star$ changes sign. No issue.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0022 [Open] Claim that the volume element on a Riemannian manifold is sqrt(det g) dx
- **Category:** Unsupported fact
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that the Gram determinant formula gives the volume element $\sqrt{\det g}\,dx$ on a manifold. This is correct. No issue.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0023 [Open] Claim that the change of variables formula follows from applying lin:det-volume to infinitesimal parallelepipeds
- **Category:** Unsupported fact
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that the change of variables formula $\int_{\phi(U)}f=\int_{U}(f\circ\phi)|\det D\phi|$ follows from applying \ref{lin:det-volume} to infinitesimal parallelepipeds. This is a heuristic statement, not a rigorous derivation, but it is a standard intuition and not false. No issue.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0024 [Open] Claim that the axiom of choice is not used
- **Category:** Unsupported fact
- **Location:** notation / 選択公理
- **Detail:** The notation states '選択公理：使わない' (the axiom of choice is not used). This is a claim about the whole page. The page uses Lebesgue measure theory, which typically requires some form of choice (e.g. countable choice for Fubini, or the existence of non-measurable sets). However, the page only cites measure theory results and does not construct non-measurable sets. The claim 'not used' is imprecise because the cited measure theory results (Lebesgue measure, Fubini) may themselves depend on choice. This is a side comment that could be misleading. However, the page explicitly says the measure theory is treated elsewhere, so the claim may refer to the linear algebra part. This is borderline; I will report it as a supplement/remark error because the claim is stated without qualification and the measure theory results cited do depend on choice (e.g. the existence of a translation-invariant measure on $\mathbb{R}^{n}$ finite on compact sets is provable in ZF+DC, but Fubini for general measurable functions may require more).
- **Proposed fix:** Qualify the statement: '選択公理：線形代数の部分では使わない（測度論の部分は測度論の系列に委ねる）。' (The axiom of choice is not used in the linear algebra part; the measure theory part is deferred to the measure theory series.)
- **Reported:** 2026-10-28 (10fede1)
