# Verification tracker: `01-foundations/06-category-theory/03-monads/05-comonads-homology.html`

<!-- source: 01-foundations/06-category-theory/03-monads/05-comonads-homology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Contracting homotopy is not literally the unit η
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that the contracting homotopy $h_{n}$ of \ref{cat:bar-resolution-exact} "is nothing but" the component $\eta_{UB_{n}}\colon u\mapsto 1\otimes u$ of the unit. But $\eta_{UB_{n}}$ is a map $B_{n}\to U\mathbb{Z}\Pi\otimes U B_{n}=L B_{n}=B_{n+1}$ that inserts $1$ in the *leftmost* tensor factor, i.e. $x[x_{1}|\cdots|x_{n}]\mapsto 1[x|x_{1}|\cdots|x_{n}]$ in the notation of \ref{cat:bar-faces}. The homotopy $h_{n}$ inserts $1$ in the leftmost position and shifts $x$ to the second position, which is the same formula only because the leftmost factor is the acting group ring; the identification is not the bare unit but the unit composed with the canonical isomorphism $\mathbb{Z}\Pi\otimes B_{n}\cong B_{n+1}$ (and the identification $U B_{n}\cong B_{n}$). More importantly, the sentence "$\eta G$ gives extra degeneracy operators and splits the augmented simplicial object" is stated for a general comonad $FG$; this is only true when the adjunction is such that $G$ applied to the standard construction yields a split augmented simplicial object, which requires the unit to be a section in the appropriate sense (e.g. $G\varepsilon$ split, as in the forgetful/free case). As stated for an arbitrary comonad it is false: a general comonad's standard construction need not be split, and the chain complex need not be contractible. The claim is thus overstated.
- **Proposed fix:** Replace with: "The contracting homotopy $h_{n}$ of \ref{cat:bar-resolution-exact} is, up to the canonical isomorphism $\mathbb{Z}\Pi\otimes B_{n}\cong B_{n+1}$, the unit component $\eta_{UB_{n}}\colon u\mapsto 1\otimes u$ of the adjunction. In general, if the adjunction $(F,G)$ has the property that $G\varepsilon$ (or $\varepsilon G$) is a split epimorphism, then applying $G$ to the standard construction $L^{\bullet+1}x$ yields a split augmented simplicial object and the associated chain complex is contractible; here $G=U$ is the forgetful functor, so contractibility holds at the level of abelian groups."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] H^2 classification requires abelian A and given action
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that $H^{2}(\Pi,A)$ corresponds to equivalence classes of group extensions of $A$ by $\Pi$ "with given action". This is correct only when $A$ is abelian and the action of $\Pi$ on $A$ is the prescribed one; the statement as written omits that $A$ must be abelian (it is a $\Pi$-module here, so this is implicit) and, more substantively, that the correspondence is with extensions inducing the *given* action and that equivalence is of extensions compatible with the action. As written it is essentially correct but slightly imprecise about the role of the action; the more serious issue is the following sentence.
- **Proposed fix:** Replace with: "Mac Lane によれば、$A$ がアーベル群で $\Pi$ が $A$ に与えられた作用で作用するとき、$H^{2}(\Pi,A)$ は、この作用を誘導する $A$ による $\Pi$ の群拡大の、作用を保つ同値類と一対一に対応する。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Free group / set adjunction does not give a comonad on a category of algebras in the stated way
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that "from the adjunction between groups and sets (free group) another resolution is obtained". The free-group adjunction $F\colon\mathbf{Set}\rightleftarrows\mathbf{Grp}:U$ gives a monad on $\mathbf{Set}$ (the free-group monad), not a comonad on $\mathbf{Grp}$; to get a comonad one needs the adjunction in the other direction, i.e. $U\colon\mathbf{Grp}\to\mathbf{Set}$ as left adjoint, which does not exist. So the standard construction from this adjunction is a simplicial *set* (the bar construction on the monad), not a chain complex of modules, and it does not yield "another resolution" of the kind computed on this page. The claim is misleading/false as stated.
- **Proposed fix:** Replace with: "たとえば可換環 $k$ 上の多元環の圏と加群の圏の随伴からはホッホシルトのコホモロジーの標準複体が得られる。また集合と群の随伴（自由群）は $\mathbf{Set}$ 上のモナドを与え、その標準構成は単体的集合（棒構成）を与えるが、これは本ページのような加群の鎖複体ではない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hochschild complex from algebra/module adjunction: direction of comonad
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that "from the adjunction between algebras over a commutative ring $k$ and modules, the standard complex of Hochschild cohomology is obtained". The relevant adjunction is $k\text{-}\mathbf{Alg}\rightleftarrows k\text{-}\mathbf{Mod}$ with left adjoint the tensor algebra $T$ and right adjoint the forgetful functor; this gives a *monad* on $k\text{-}\mathbf{Mod}$, and the Hochschild complex arises from the resulting simplicial module (the monadic bar construction), not from a comonad on $k\text{-}\mathbf{Alg}$. To get a comonad one would need the forgetful functor to be a left adjoint, which it is not. So the phrase "from the adjunction ... the standard complex of Hochschild cohomology is obtained" via a comonad is inaccurate: the construction is monadic, and the resulting complex computes Hochschild homology/cohomology only after applying appropriate Hom/tensor, not directly as a comonad resolution in the sense of this page.
- **Proposed fix:** Replace with: "たとえば可換環 $k$ 上の多元環の圏と加群の圏の随伴（左随伴はテンソル代数、右随伴は忘却関手）は $k\text{-}\mathbf{Mod}$ 上のモナドを与え、その標準構成（モナドの棒構成）からホッホシルト複体が得られる。"
- **Reported:** 2026-10-28 (10fede1)
