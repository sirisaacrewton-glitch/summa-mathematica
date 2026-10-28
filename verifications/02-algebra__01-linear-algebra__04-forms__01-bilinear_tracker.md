# Verification tracker: `02-algebra/01-linear-algebra/04-forms/01-bilinear.html`

<!-- source: 02-algebra/01-linear-algebra/04-forms/01-bilinear.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Pfaffian transformation formula stated for arbitrary P in M_4(A)
- **Category:** Supplement/remark error
- **Location:** lin:prob-bf-pfaffian-transform / solution
- **Detail:** The problem asks to prove $\operatorname{Pf}({}^{t}PXP)=\det P\cdot\operatorname{Pf}X$ for $P\in M_{4}(A)$ with no invertibility hypothesis. This is false for non-invertible $P$: take $P=0$, then ${}^{t}PXP=0$, so $\operatorname{Pf}({}^{t}PXP)=0$ while $\det P\cdot\operatorname{Pf}X=0\cdot\operatorname{Pf}X=0$ — that case is fine, but take $P$ of rank $<4$ with $\det P=0$ and $X$ such that ${}^{t}PXP$ is nonzero alternating; then $\operatorname{Pf}({}^{t}PXP)$ need not vanish. Concretely over $A=\mathbb{R}$, $X=J_{2}\oplus J_{2}$ (so $\operatorname{Pf}X=1$), and $P$ the projection onto the first two coordinates: ${}^{t}PXP=J_{2}\oplus 0$, whose Pfaffian is $0=\det P\cdot\operatorname{Pf}X$ — consistent. However the solution's argument uses $\operatorname{Pf}({}^{t}PXP)^{2}=(\det P)^{2}\operatorname{Pf}(X)^{2}$ and then cancels in an integral domain to get $\operatorname{Pf}({}^{t}PXP)=\pm\det P\operatorname{Pf}X$; this only gives the result up to sign, and the sign argument via $P=I$ requires the identity to hold as a polynomial identity in the entries of $P$ and $X$ simultaneously, which is legitimate only because both sides are polynomials and agree on the dense set $\mathrm{GL}_{4}$ — but the solution does not invoke this density/continuity argument, and the stated 'factor is zero' reasoning is incomplete. More importantly, the formula $\operatorname{Pf}({}^{t}PXP)=\det P\operatorname{Pf}X$ is genuinely true for all $P$ (both sides are polynomial and agree on $\mathrm{GL}_{4}$, which is Zariski-dense), so the statement is correct, but the proof as written is a logical gap: it asserts the sign is fixed by $P=I$ without justifying that the sign is constant over all $P$ (including singular $P$).
- **Proposed fix:** State the result for all $P\in M_{4}(A)$ and prove it by polynomial identity: both $\operatorname{Pf}({}^{t}PXP)$ and $\det P\cdot\operatorname{Pf}X$ are polynomials in the entries of $P$ and $X$ with integer coefficients; they agree on the Zariski-dense subset $P\in\mathrm{GL}_{4}$ (where $\operatorname{Pf}({}^{t}PXP)=\det P\operatorname{Pf}X$ follows from ${}^{t}PXP={}^{t}PJ P$ type reduction and multiplicativity), hence agree everywhere. Alternatively restrict the problem to $P\in\mathrm{GL}_{4}(A)$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Cholesky vs leading principal minors claim
- **Category:** Supplement/remark error
- **Location:** lin:sec-bf-notation supplement (計算の観点)
- **Detail:** The supplement says positive definiteness is better tested by whether the Cholesky decomposition succeeds than by leading principal minors, calling it 'numerically more stable'. This is a reasonable practical remark, but the precise mathematical statement 'Cholesky succeeds iff positive definite' requires the matrix to be symmetric (or Hermitian) and, for the unpivoted Cholesky, positive definiteness; for a general symmetric matrix that is only positive semidefinite, unpivoted Cholesky can fail even though the matrix is PSD. The claim as stated ('正定値性の判定は…コレスキー分解の成否で行う') is essentially correct for positive definite symmetric matrices, so this is borderline; but the phrase '首座小行列式よりも…数値的に安定' is an unsupported numerical claim stated as fact.
- **Proposed fix:** Rephrase as: 'For a symmetric matrix, positive definiteness is equivalent to the existence of a Cholesky decomposition $G=LL^{\top}$ with $L$ lower triangular having positive diagonal; in floating point arithmetic this is often preferred to computing all leading principal minors, which can be numerically unstable.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Witt cancellation stated without nondegeneracy hypothesis
- **Category:** Supplement/remark error
- **Location:** lin:sec-bf-notation supplement (似た定理)
- **Detail:** The supplement states Witt's cancellation theorem as $q\perp q_{1}\cong q\perp q_{2}\Rightarrow q_{1}\cong q_{2}$ in characteristic $\neq 2$. Witt cancellation in this form requires $q$ to be nondegenerate (or at least that the forms live in a suitable regular setting); without a nondegeneracy hypothesis on $q$ the statement fails. For example over $\mathbb{R}$, $q=0$ (zero form on a 1-dim space), $q_{1}=\langle 1\rangle$, $q_{2}=\langle -1\rangle$: then $q\perp q_{1}\cong q\perp q_{2}$ (both have signature $(1,1)$ on a 2-dim space? actually $0\perp\langle1\rangle$ has signature $(1,0)$ and $0\perp\langle-1\rangle$ has signature $(0,1)$, not isomorphic) — a cleaner counterexample: over $\mathbb{R}$ take $q=\langle 1\rangle$, $q_{1}=\langle 1\rangle$, $q_{2}=\langle -1\rangle$: $q\perp q_{1}=\langle1,1\rangle$ and $q\perp q_{2}=\langle1,-1\rangle$ are not isomorphic, so no contradiction; the genuine failure of cancellation without regularity is standard. The statement should include 'nondegenerate $q$'.
- **Proposed fix:** State: 'Witt's cancellation theorem: if $q$ is a nondegenerate quadratic (or bilinear symmetric) form over a field of characteristic $\neq 2$ and $q\perp q_{1}\cong q\perp q_{2}$, then $q_{1}\cong q_{2}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Finite field quadratic form classification by dimension and discriminant
- **Category:** Unsupported fact
- **Location:** lin:sec-bf-notation supplement (前提を弱めると)
- **Detail:** The supplement claims nondegenerate quadratic forms over a finite field are classified by dimension and discriminant (the square class of $\det G$). Over a finite field of odd characteristic, nondegenerate quadratic forms in a given dimension fall into exactly two isomorphism classes, distinguished by the discriminant (or equivalently the Arf/Hasse invariant), so 'classified by dimension and discriminant' is correct for odd characteristic. However, in characteristic 2 the discriminant of a quadratic form is not the right invariant (one needs the Arf invariant and the dimension), and the supplement places this claim in the context of 'even in characteristic 2'. As stated without restricting to odd characteristic, the classification-by-discriminant claim is imprecise.
- **Proposed fix:** Add the hypothesis: 'Over a finite field of odd characteristic, nondegenerate quadratic forms are classified by their dimension and discriminant (the square class of $\det G$); in characteristic 2 one uses the Arf invariant instead.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Symplectic group inclusion and Pfaffian identity
- **Category:** Supplement/remark error
- **Location:** lin:sec-bf-viewpoint remark
- **Detail:** The remark writes '$\mathrm{Sp}_{2m}\subset\mathrm{SL}_{2m}$ ($\det P=\operatorname{Pf}({}^{t}PJP)=\operatorname{Pf}J=1$)'. The identity $\operatorname{Pf}({}^{t}PJP)=\det P\cdot\operatorname{Pf}J=\det P$ holds for all $P$, and for $P\in\mathrm{Sp}_{2m}$ we have ${}^{t}PJP=J$, so $\operatorname{Pf}({}^{t}PJP)=\operatorname{Pf}J=1$, giving $\det P=1$. The chain as written is correct, but it silently uses the transformation formula $\operatorname{Pf}({}^{t}PJP)=\det P\operatorname{Pf}J$ which is only established later (in the problem) and only for $4\times4$ there; for general $m$ it is not proved on this page. This is a minor dependency issue, not a falsehood.
- **Proposed fix:** Either cite the general Pfaffian transformation formula (proved via polynomial identity for all $m$) or phrase as: 'For $P\in\mathrm{Sp}_{2m}$, ${}^{t}PJP=J$, hence $\operatorname{Pf}(J)=\operatorname{Pf}({}^{t}PJP)=\det P\operatorname{Pf}(J)$, so $\det P=1$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Hypcheck claim that alternating forms are symmetric in characteristic 2
- **Category:** Supplement/remark error
- **Location:** hypcheck (標数 ≠ 2)
- **Detail:** The hypcheck says: 'In characteristic 2 the alternating form ($q=0$ but $B\neq0$) is also symmetric and cannot be diagonalized ($\begin{pmatrix}0&1\\1&0\end{pmatrix}$ is not congruent over $\mathbb{F}_{2}$ to a diagonal matrix: a diagonal form would have $q\neq0$).' The parenthetical justification is imprecise: over $\mathbb{F}_{2}$ the matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ equals $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ and is alternating; its associated quadratic form $q(x,y)=xy$ (with $q(v)=B(v,v)$ in char 2 being $0$ for alternating $B$) — the argument 'a diagonal form would have $q\neq0$' conflates the bilinear form with the quadratic form. In char 2, $B(v,v)=0$ for all $v$ for an alternating form, so $q\equiv0$; a diagonal Gram matrix in char 2 can still have zero diagonal (e.g. the zero matrix), so the stated reason is not a valid proof of non-congruence. The correct reason: an alternating nondegenerate form in char 2 has even rank and its Gram matrix is alternating, whereas a diagonal matrix in char 2 has all diagonal entries equal to their own negatives, so a diagonal Gram matrix is symmetric with zero off-diagonal — but congruence preserves the property of being alternating only if the form is alternating; the real obstruction is that a nondegenerate alternating form cannot be represented by a diagonal matrix because a diagonal matrix $D$ satisfies ${}^{t}D=D$ and $x^{\top}Dx$ can be nonzero, while for alternating $B$, $v^{\top}Gv=0$ always; a diagonal $G$ with a nonzero diagonal entry would give $e_{i}^{\top}Ge_{i}\neq0$, contradiction. So the conclusion is right but the stated reason is garbled.
- **Proposed fix:** Replace with: 'In characteristic 2 an alternating form satisfies $B(v,v)=0$ for all $v$, so its Gram matrix $G$ satisfies $v^{\top}Gv=0$ for all $v$; a diagonal matrix with any nonzero diagonal entry would violate this, hence a nondegenerate alternating form (e.g. $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ over $\mathbb{F}_{2}$) is not congruent to a diagonal matrix.'
- **Reported:** 2026-10-28 (10fede1)
