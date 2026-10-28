# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/06-nonsingular.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/06-nonsingular.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 12 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issue is in Step 1 of the proof that the singular locus is closed: the phrase 'locally closed, hence closed' is a logical gap, since local closedness does not imply closedness; the correct argument uses quasi-compactness (finite affine cover). All supplements, remarks, examples and stated facts were checked individually (projective Jacobian rank, Nagata example, regular vs smooth over imperfect fields, Fermat curves, cone, node, Hironaka) and are correct as stated. No previously reported issues exist.

## Issues

### ISSUE-0001 [Open] Projective Jacobian rank condition stated with wrong rank
- **Category:** Supplement/remark error
- **Location:** supplement (ag:page-nonsingular supplement)
- **Detail:** The supplement claims that for $Y=V(F_{1},\dots,F_{m})\subset\mathbb{P}^{n}$ nonsingularity is equivalent to the Jacobian matrix $(\partial F_{i}/\partial x_{j}(P))$ (with $n+1$ columns) having rank $n-\dim Y$. This is wrong: the correct condition is rank $=n+1-\dim Y$ (codimension in $\mathbb{P}^{n}$ is $n-\dim Y$, and the affine cone has dimension $\dim Y+1$ in $\mathbb{A}^{n+1}$, so the rank equals $n+1-(\dim Y+1)=n-\dim Y$... let us be careful). For the affine cone $C\subset\mathbb{A}^{n+1}$ of dimension $\dim Y+1$, the Jacobian criterion gives rank $=(n+1)-(\dim Y+1)=n-\dim Y$ for the cone. But the projective variety's nonsingularity is equivalent to the cone being nonsingular away from the origin, which is exactly rank $=n-\dim Y$ for the $(n+1)$-column matrix. So the stated rank $n-\dim Y$ is actually correct for the cone condition. However the text says 'the rank of the Jacobian matrix (with $n+1$ columns) being $n-\dim Y$' — this matches the cone criterion. The issue is the Euler formula justification: $\sum x_{j}\partial F/\partial x_{j}=(\deg F)F$ shows the rank is independent of the choice of homogeneous coordinates only when $\operatorname{char}k\nmid\deg F$; the text does state this caveat. So this is fine.
- **Proposed fix:** No change needed; the rank $n-\dim Y$ is correct for the affine-cone Jacobian criterion, and the Euler-formula caveat $\operatorname{char}k\nmid\deg F$ is stated.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Nagata example and openness of regular locus
- **Category:** Supplement/remark error
- **Location:** remark 正則と滑らか、そして永田の例, item 2
- **Detail:** The remark states that for a general Noetherian ring $A$ the set $\{\mathfrak{p}: A_{\mathfrak{p}} \text{ is regular}\}$ need not be open in $\operatorname{Spec}A$ (Nagata's example). This is a correct and standard statement. It also says excellent rings require (J-2) openness of the regular locus plus universally catenary plus regularity of formal fibers. This is the standard definition (Grothendieck's excellent rings: universally catenary, J-2, and G-ring/formal fiber condition). The claim that finitely generated algebras over a field or over $\mathbb{Z}$ are excellent is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Regular vs smooth over imperfect field
- **Category:** Supplement/remark error
- **Location:** remark 正則と滑らか、そして永田の例, item 1
- **Detail:** The example $\operatorname{Spec} k[x]/(x^{p}-a)$ with $a\in k\setminus k^{p}$: this ring is a field $k[x]/(x^{p}-a)\cong k(a^{1/p})$, which is a field hence regular (dimension 0 regular local ring). Over $\bar k$ it becomes $\bar k[x]/((x-a^{1/p})^{p})$, which is non-reduced, hence not regular (the local ring has nilpotents). This correctly illustrates that regular does not imply smooth (geometrically regular) over imperfect fields. The statement is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Step 3 of singular locus proof: local closed implies closed
- **Category:** Logical gap
- **Location:** ag:singular-locus-closed / Step 1
- **Detail:** Step 1 argues that since nonsingularity is local and varieties are covered by affine open sets, $\operatorname{Sing}Y$ is 'locally closed, hence closed'. Being locally closed does not imply closed in general. The correct argument: on each affine open $U$, $\operatorname{Sing}Y\cap U$ is closed in $U$; since $Y$ is covered by finitely many affine opens (quasi-compact), $\operatorname{Sing}Y$ is a finite union of sets closed in $Y$, hence closed. The text's phrasing 'locally closed, hence closed' is a genuine logical gap as written.
- **Proposed fix:** Replace '局所的に閉、したがって閉' with: 'Since $Y$ is quasi-compact, it is covered by finitely many affine open subsets $U_{i}$; on each $U_{i}$, $\operatorname{Sing}Y\cap U_{i}$ is closed in $U_{i}$ and hence in $Y$, so $\operatorname{Sing}Y=\bigcup_{i}(\operatorname{Sing}Y\cap U_{i})$ is a finite union of closed subsets of $Y$, hence closed.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 2: derivative vanishing argument in char p
- **Category:** Logical gap
- **Location:** ag:singular-locus-closed / Step 2
- **Detail:** Step 2 claims that if all $\partial f/\partial x_{i}$ vanish on $H$ then they lie in $(f)$, and since their degree is less than $\deg f$ they must be zero. This uses that $I(H)=(f)$ (true since $f$ irreducible and $k[x]$ UFD). Then in char $p$, if all partials vanish, $f$ is a polynomial in $x_{i}^{p}$; taking $p$-th roots of coefficients (using $k$ perfect) gives $f=g^{p}$, contradicting irreducibility. This is correct. However, the claim 'if all partials vanish then $f$ is a polynomial in $x_{i}^{p}$' requires that each $\partial f/\partial x_{i}=0$ as a polynomial, which follows since $\partial f/\partial x_{i}\in(f)$ and has smaller degree, hence is zero. This is fine. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 3: nonsingular locus of H meets V
- **Category:** Logical gap
- **Location:** ag:singular-locus-closed / Step 3
- **Detail:** Step 3 says the nonsingular locus of $H$ is a nonempty open set (from Steps 1-2) and meets $V$ because $H$ is irreducible. This requires that the nonsingular locus is dense (not just nonempty open) in the irreducible $H$, which holds since any nonempty open subset of an irreducible space is dense. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Fermat curve nonsingularity requires char not dividing d and also d not...
- **Category:** Unsupported fact
- **Location:** ag:singular-examples, item 5
- **Detail:** The Fermat curve $V(x^{d}+y^{d}+z^{d})\subset\mathbb{P}^{2}$ with $\operatorname{char}k\nmid d$ is nonsingular. The check on $z=1$: $J=(dx^{d-1}, dy^{d-1})$ vanishes only at $x=y=0$, where the point is $(0:0:1)$ and $0+0+1=1\neq0$, so not on the curve. This is correct provided $d\geq 1$ and $\operatorname{char}k\nmid d$. The statement is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Cone example singular locus
- **Category:** Unsupported fact
- **Location:** ag:singular-examples, item 4
- **Detail:** The cone $V(x^{2}+y^{2}-z^{2})\subset\mathbb{A}^{3}$ with $J=(2x,2y,-2z)$: $J=0$ only at origin, which lies on the cone. So origin is the only singular point, provided $\operatorname{char}k\neq2$. The example does not state $\operatorname{char}k\neq2$ explicitly for item 4, but the hypcheck says '$\operatorname{char}k\neq2$ is used only in examples 2, 3, 4'. So it is covered. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Node example char condition
- **Category:** Unsupported fact
- **Location:** ag:singular-examples, item 2
- **Detail:** The node $V(y^{2}-x^{2}(x+1))$ with $J=(-3x^{2}-2x, 2y)$: at origin $J=0$, singular. The derivative $\partial/\partial x = -3x^{2}-2x$; this is correct. The char condition $\operatorname{char}k\neq2$ is stated. However, for the node to be a node (ordinary double point) one also needs $\operatorname{char}k\neq 3$? Actually the singularity at origin is present regardless; the example only claims origin is singular, which holds in any characteristic. The char $\neq2$ is needed for $2y$ to not vanish identically. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Citation of ag:catenary.3 for dim of local ring
- **Category:** Improper link
- **Location:** notation, second bullet
- **Detail:** The notation cites \ref{ag:catenary.3} (theorem 4.5, 鎖状性/catenary) for the claim that $\dim\mathcal{O}_{Y,P}=\dim Y$. The catenary property gives that all maximal chains have the same length, which yields $\dim\mathcal{O}_{Y,P}=\dim Y$ for a variety. This is a legitimate use. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Jacobian criterion for varieties requires P to be a k-rational point
- **Category:** Missing hypothesis
- **Location:** ag:jacobian-criterion-varieties
- **Detail:** The theorem states the Jacobian criterion for $P\in Y$ without explicitly requiring $P$ to be a $k$-rational point. Since $k$ is algebraically closed, every closed point is $k$-rational, and $P\in Y$ means a closed point, so this is fine. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Hironaka resolution attribution
- **Category:** Supplement/remark error
- **Location:** remark 線形近似ができる点
- **Detail:** The remark says resolution of singularities (Hironaka's theorem, characteristic 0) turns 'almost all' into 'all'. Hironaka's theorem is indeed for characteristic 0 (and for excellent schemes/fields of char 0). The statement is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
