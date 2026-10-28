# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/04-presheaf-heyting.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/04-presheaf-heyting.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong adjoint description of conjunction
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：論理結合子は随伴
- **Detail:** The supplement states that $\wedge$ is the right adjoint of the diagonal. In fact the diagonal $\Delta\colon X\to X\times X$ is left adjoint to $\wedge$ (i.e. $\wedge$ is right adjoint to $\Delta$), which is what the text says... but the phrasing '∧ は対角の右随伴' means '$\wedge$ is the right adjoint of the diagonal', i.e. $\Delta\dashv\wedge$. This is actually correct: $\Delta\dashv\wedge$ since $\Delta(x)\le(y,z)\iff x\le y\wedge z$. So this is fine. However, the claim '$\Rightarrow$ は $-\wedge A$ の右随伴' is correct ($-\wedge A\dashv(A\Rightarrow-)$). No error here.
- **Proposed fix:** No change needed; the adjunction descriptions are correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Boolean presheaf topos iff C is a groupoid
- **Category:** Supplement/remark error
- **Location:** supplement / ブール性
- **Detail:** The supplement claims that the presheaf topos is Boolean iff $\mathbf{C}$ is a groupoid. This is a standard result and is correctly stated as 'known, not verified here'. However, the precise statement requires that $\mathbf{C}$ be a small category (given) and the equivalence is: $\widehat{\mathbf{C}}$ Boolean $\iff$ every morphism of $\mathbf{C}$ is an isomorphism. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hyperdoctrine attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 一般のトポス
- **Detail:** The supplement attributes the structure 'each object gets a Heyting algebra, each morphism gets a left/right adjoint pair' to Lawvere's hyperdoctrine. This is essentially correct: a hyperdoctrine (Lawvere) assigns to each object a Heyting algebra (or more generally a category) and to each morphism adjoint triples. The statement is appropriately hedged ('known, not verified here'). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Sheaf topos open-set Heyting algebra correspondence
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the Heyting algebra $\Omega_{X}(X)$ of open sets with $V\Rightarrow W=\mathrm{int}((X\setminus V)\cup W)$ is a special case of the subobject lattice of a sheaf topos, and that 'all restrictions' corresponds to 'taking interior'. This is correct: for the sheaf topos on a space, subobjects of the terminal sheaf are open sets, and implication is computed via interior. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Set case of quantifiers
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that in $\mathbf{Set}$, $f^{\ast}$ is inverse image, $\exists_{f}$ is image, $\forall_{f}A=\{y:f^{-1}(y)\subseteq A\}$, and that this is the case $\mathbf{C}=\mathbf{1}$ of the theorem. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Kripke semantics reading of negation
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says '$A$ でない' means 'not $A$ now' but 'no matter how knowledge grows, $A$ never holds', which matches the definition $\neg A(c)=\{x:\forall h,\, x\cdot h\notin A(d)\}$. This is correct for the presheaf (Kripke) semantics. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Remark on pointwise complement not being a subpresheaf
- **Category:** Supplement/remark error
- **Location:** remark (after theorem cat:presheaf-sub-heyting)
- **Detail:** The remark claims the pointwise set $(P(c)\setminus A(c))\cup B(c)$ is generally not a subpresheaf, and that the given definition is the largest subpresheaf contained in it. The first claim is correct. The second claim ('the largest subpresheaf contained in it') is imprecise: $A\Rightarrow B$ is the largest subpresheaf $C$ with $C\cap A\le B$, not the largest subpresheaf contained in the pointwise set $(P(c)\setminus A(c))\cup B(c)$. These differ in general. For example, take $P=\mathbf{y}1$ on the arrow category with $A(1)=\emptyset$, $A(0)=\{a\}$, $B=\emptyset$. Then the pointwise set is $\{1_{1}\}$ at $1$ and $\emptyset$ at $0$; the largest subpresheaf contained in it is $\emptyset$ (since $1_{1}\cdot a=a\notin\emptyset$), and $A\Rightarrow B=\neg A=\emptyset$ here, so they coincide in this example. But in general the largest subpresheaf contained in the pointwise set need not satisfy the Heyting property. The correct characterization is: $A\Rightarrow B$ is the largest subpresheaf $C$ such that $C\cap A\le B$.
- **Proposed fix:** Replace '上の定義はその中で制限で閉じている最大の部分前層である' with '上の定義は $C\cap A\le B$ を満たす最大の部分前層 $C$ である（各点の集合 $(P(c)\setminus A(c))\cup B(c)$ に含まれる最大の部分前層とは一般に一致しない）'.
- **Reported:** 2026-10-28 (10fede1)
