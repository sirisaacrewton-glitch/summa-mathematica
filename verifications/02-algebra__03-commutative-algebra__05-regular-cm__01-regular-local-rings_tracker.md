# Verification tracker: `02-algebra/03-commutative-algebra/05-regular-cm/01-regular-local-rings.html`

<!-- source: 02-algebra/03-commutative-algebra/05-regular-cm/01-regular-local-rings.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Zariski tangent space dual description and tangent cone claim
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says the dual $(\mathfrak{m}/\mathfrak{m}^{2})^{*}$ is the Zariski tangent space and that \ref{ring:regular-gr} says 'at a regular point the tangent cone becomes the whole tangent space (a linear space)'. The identification of $(\mathfrak{m}/\mathfrak{m}^{2})^{*}$ with the Zariski tangent space is correct, but the phrasing '接錐が接空間全体（線形空間）になる' is imprecise: the tangent cone is $\operatorname{Spec}(\operatorname{gr}_{\mathfrak{m}}(A))$, and regularity means $\operatorname{gr}_{\mathfrak{m}}(A)$ is a polynomial ring, i.e. the tangent cone is the affine space $\mathbb{A}^{d}$ (a linear cone), not 'the tangent space itself'. This is a minor imprecision but the statement as written conflates the tangent cone (a scheme) with the tangent space (a vector space).
- **Proposed fix:** At a regular point $\operatorname{gr}_{\mathfrak{m}}(A)\cong k[X_{1},\dots,X_{d}]$, so the tangent cone $\operatorname{Spec}(\operatorname{gr}_{\mathfrak{m}}(A))$ is the affine space $\mathbb{A}^{d}_{k}$, i.e. a linear cone; at a singular point the tangent cone is a non-linear cone.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Separability corresponds to Omega_{L/k}=0
- **Category:** Supplement/remark error
- **Location:** supplement / このサイトでの続き (last bullet)
- **Detail:** The supplement states that '分離性は $\Omega_{L/k}=0$ に対応する' (separability corresponds to $\Omega_{L/k}=0$). For a finite extension $L/k$, $\Omega_{L/k}=0$ holds iff $L/k$ is separable, so in the finite case this is correct. However the sentence is placed in a context where $L=R/P$ is a finite extension of $k$ (Zariski's lemma), so it is fine. But the cotangent exact sequence quoted, $P/P^{2}\to\Omega_{R/k}\otimes L\to\Omega_{L/k}\to 0$, is the second fundamental exact sequence, and the map $P/P^{2}\to\Omega_{R/k}\otimes L$ is the one induced by $\bar D$; this is correct. No error here; the statement is acceptable.
- **Proposed fix:** No change needed; the statement is correct for finite $L/k$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck counterexample: f'=0 but rank J = 0 vs n - dim B = 1
- **Category:** Unsupported fact
- **Location:** hypcheck / 前提「L/k が分離的」
- **Detail:** The hypcheck claims that for $k=\mathbb{F}_{p}(t)$, $n=1$, $f=x^{p}-t$, $P=(f)$, $B=R/P=L$ is a field (regular of dimension 0) but $f'=0$ so $\operatorname{rank}J=0\neq n-\dim B=1$. This is correct: $R=k[x]$, $P=(x^{p}-t)$ is maximal since $x^{p}-t$ is irreducible over $\mathbb{F}_{p}(t)$ (purely inseparable), $B=L$ is a field, $\dim B=0$, $n-\dim B=1$, and $J(P)=(f'\bmod P)=(0)$, so rank $=0$. The counterexample is valid. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Jacobian criterion usable at all closed points over a perfect field
- **Category:** Supplement/remark error
- **Location:** supplement / このサイトでの続き (third bullet)
- **Detail:** The supplement says '\ref{ring:jacobian-criterion} は、完全体上の閉点（極大イデアル）すべてで使える'. The theorem's hypothesis is that $L=R/P$ is separable over $k$. Over a perfect field $k$, every finitely generated field extension is separably generated, and in particular every finite extension $L/k$ (which $R/P$ is, by Zariski's lemma) is separable. So indeed over a perfect field the criterion applies at every maximal ideal. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Tangent cone examples y^2=x^2 and y^2=0
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement gives examples of non-linear tangent cones: '$y^{2}=x^{2}$ の二本の直線、$y^{2}=0$ の重直線'. For $A=k[[x,y]]/(y^{2}-x^{2})$, the tangent cone is $\operatorname{Spec}(k[X,Y]/(Y^{2}-X^{2}))$, which is two lines $Y=\pm X$ — correct. For $A=k[[x,y]]/(y^{2})$, the associated graded is $k[X,Y]/(Y^{2})$, whose spectrum is a double line — correct. These are valid examples.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Regular local ring is Cohen-Macaulay and regular system of parameters is a regular sequence
- **Category:** Supplement/remark error
- **Location:** supplement / このサイトでの続き (third bullet)
- **Detail:** The supplement states '正則局所環は\ref{ring:page-cohen-macaulay}。正則なパラメーター系は正則列である。' A regular local ring is Cohen-Macaulay, and a regular system of parameters is a regular sequence. Both are standard and correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 4 of regular-quotient: converse direction uses edim A/(x_1..x_i) = edim A - r without justification
- **Category:** Logical gap
- **Location:** ring:regular-quotient / Step 4
- **Detail:** In Step 4, the converse direction claims 'Step 1 と同様に $\operatorname{edim}A/(x_{1},\dots,x_{i})=\operatorname{edim}A-r$ ($r$ は $\bar x_{j}$ の張る次元)'. Step 1 only handles the case of a single element $x\notin\mathfrak{m}^{2}$. For several elements, one needs that the images of $x_{1},\dots,x_{i}$ in $\mathfrak{m}/\mathfrak{m}^{2}$ span an $r$-dimensional subspace and that $\operatorname{edim}A/(x_{1},\dots,x_{i})=\operatorname{edim}A-r$. This follows by iterating Step 1 provided each successive $x_{j}$ is not in $\mathfrak{m}^{2}+(x_{1},\dots,x_{j-1})$, which holds when the images are linearly independent; but in the converse direction one does not yet know independence. The argument is sketched but the equality $\operatorname{edim}A/(x_{1},\dots,x_{i})=\operatorname{edim}A-r$ requires the linear independence of the $\bar x_{j}$, which is exactly what is being proved. This is a mild circularity/gap in the converse.
- **Proposed fix:** In the converse, let $r=\dim_{L}(\bar x_{1},\dots,\bar x_{i})$ where $L=\mathfrak{m}/\mathfrak{m}^{2}$. Then $\operatorname{edim}A/(x_{1},\dots,x_{i})=\operatorname{edim}A-r$ by the same argument as Step 1 applied to the subspace spanned by the $\bar x_{j}$ (the kernel of $\mathfrak{m}/\mathfrak{m}^{2}\to\bar{\mathfrak{m}}/\bar{\mathfrak{m}}^{2}$ is exactly the span of the $\bar x_{j}$). Since $A/(x_{1},\dots,x_{i})$ is regular of dimension $\dim A-i$, we get $\dim A-i=\operatorname{edim}A-r=\dim A-r$, hence $r=i$, so the $x_{j}$ are linearly independent modulo $\mathfrak{m}^{2}$.
- **Reported:** 2026-10-28 (10fede1)
