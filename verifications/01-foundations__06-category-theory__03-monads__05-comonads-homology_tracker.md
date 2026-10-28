# Verification tracker: `01-foundations/06-category-theory/03-monads/05-comonads-homology.html`

<!-- source: 01-foundations/06-category-theory/03-monads/05-comonads-homology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the comonad-to-simplicial-object theorem, the chain complex proposition, the bar resolution exactness proof, and the low-degree cohomology computation) is logically sound: the contracting homotopy is correctly written down and the exactness argument is valid. The problems are confined to the supplement. The claim that the contracting homotopy literally equals the unit component $\eta_{UB_{n}}$ is false as stated (the two maps differ by the leftmost-factor identification), and the general remark about splitting via $\eta G$ is overstated. The $H^{2}$ classification remark also needs the abelian and fixed-action hypotheses made explicit.

## Issues

### ISSUE-0001 [Open] Contracting homotopy is not literally the unit η
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that the contracting homotopy $h_{n}$ is 'nothing but' the component $\eta_{UB_{n}}\colon u\mapsto 1\otimes u$ of the unit. But $\eta_{UB_{n}}$ is a map $B_{n}\to L B_{n}=B_{n+1}$ given by $u\mapsto 1\otimes u$, i.e. $x[x_{1}|\cdots|x_{n}]\mapsto 1\otimes x\otimes x_{1}\otimes\cdots$, which inserts $1$ in the leftmost factor and shifts $x$ to the second position. The actual $h_{n}$ in the proof is $x[x_{1}|\cdots|x_{n}]\mapsto 1[x|x_{1}|\cdots|x_{n}]$, which inserts $1$ at the front and keeps $x$ in the first slot. These are different maps (they differ by the $\Pi$-action / the identification of the leftmost factor), so the stated identity is false as written.
- **Proposed fix:** Replace with: 'The contracting homotopy $h_{n}$ is obtained from the unit $\eta$ of the adjunction: on the underlying abelian group, $h_{n}(u)=1\otimes u$ after identifying the leftmost factor $\mathbb{Z}\Pi$ with $\mathbb{Z}$ via the augmentation (i.e. $h_{n}$ inserts the unit $1$ in a new leftmost slot). It is not a $\Pi$-module map precisely because this identification forgets the $\Pi$-action.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that the standard construction splits after applying G is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The text says that applying the right adjoint $G$ to the standard construction of a comonad $FG$ makes $\eta G$ give 'extra degeneracies' so that the augmented simplicial object splits and its chain complex becomes contractible 'on the $G$ side'. This is not correct in general: applying $G$ to the simplicial object $L^{\bullet+1}x$ yields an augmented simplicial object in the other category, and the extra degeneracy $\eta G$ gives a contraction only after passing to the associated (additive) chain complex and only when the relevant category is additive; the simplicial object itself does not split in general, and the statement as phrased (splitting of the augmented simplicial object) is stronger than what holds. The example here works only because $G=U$ lands in $\mathbf{Ab}$.
- **Proposed fix:** Replace with: 'In general, for a comonad $L=FG$ coming from an adjunction, applying $G$ and using the unit $\eta G$ produces extra degeneracies, which yield a contracting homotopy of the associated (augmented) chain complex whenever the target category is additive; this is why the bar complex is contractible as a complex of abelian groups. The simplicial object itself need not split.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] H^2 classification requires abelian A and stated action
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that $H^{2}(\Pi,A)$ corresponds to equivalence classes of group extensions of $A$ by $\Pi$ 'with given action'. This is only correct when $A$ is abelian and the action of $\Pi$ on $A$ is the prescribed one; moreover the correspondence is with extensions inducing the given action (and, for the bijection with $H^{2}$, one fixes the action). As stated without the abelian hypothesis on $A$ and without specifying that the extensions are those inducing the given $\Pi$-module structure, the claim is imprecise.
- **Proposed fix:** Replace with: 'For an abelian group $A$ with a prescribed $\Pi$-module structure, $H^{2}(\Pi,A)$ classifies equivalence classes of extensions $0\to A\to E\to\Pi\to1$ that induce the given action of $\Pi$ on $A$.'
- **Reported:** 2026-10-28 (8ccef3d)
