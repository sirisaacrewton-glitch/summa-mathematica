# Verification tracker: `01-foundations/06-category-theory/01-basics/05-yoneda.html`

<!-- source: 01-foundations/06-category-theory/01-basics/05-yoneda.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (universal arrows, representable functors, the Yoneda lemma and embedding, and the two problems) is logically sound: the proofs are correct, the cited results match their use, and the hypcheck remarks are accurate. The only genuine problems are in the supplement: the Cayley's-theorem remark conflates the left and right actions (the representable presheaf carries the left action, and its endomorphism group is $G^{\mathrm{op}}$), and the density statement omits the smallness hypothesis needed for the cited colimit notion. Both are minor and fixable by the proposed rewordings.

## Issues

### ISSUE-0001 [Open] Cayley's theorem via Yoneda: right action vs. left multiplication
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理 (Cayley)
- **Detail:** The supplement says that applying the Yoneda embedding to a group $G$ (a one-object category) makes $G$ isomorphic to the group of equivariant maps of the right action of $G$ on itself (multiplication from the right), and that Cayley's theorem is the simplest case of the Yoneda lemma. For a one-object category, the Yoneda embedding sends the single object to the (contravariant) hom functor $\mathbf{D}(-,*)$, which is the *left* action of $G$ on itself (the presheaf $G^{\mathrm{op}}\to\mathbf{Set}$ with $g\mapsto -\circ g$, i.e. left multiplication). The endomorphism group of this representable presheaf is $G^{\mathrm{op}}$ acting by right multiplication, and the full subcategory on the representable presheaf is $G^{\mathrm{op}}$, not $G$. So the stated 'right action (multiplication from the right)' is the opposite group, and the identification with Cayley's theorem is imprecise as written.
- **Proposed fix:** Applying the Yoneda embedding to a group $G$ regarded as a one-object category, the single object is sent to the representable presheaf $\mathbf{D}(-,*)$, which is the set $G$ with the *left* action of $G$ by left multiplication; the endomorphisms of this presheaf are the maps commuting with the left action, i.e. right multiplications, forming the opposite group $G^{\mathrm{op}}$. Equivalently, using the covariant embedding into $[\mathbf{D},\mathbf{Set}]$ one gets the right action. In either formulation, the resulting statement that $G$ embeds into the permutations of its underlying set is Cayley's theorem, the simplest case of the Yoneda lemma.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Density claim: 'any presheaf is a colimit of representables' needs the smallness/colimit context
- **Category:** Supplement/remark error
- **Location:** supplement / 前層の圏の性質
- **Detail:** The supplement states that any presheaf can be written as a colimit of representable presheaves (density), citing \ref{cat:colimit}. This is the correct density theorem, but the page's colimit definition \ref{cat:colimit} is for (co)limits over small index categories, and the density colimit is indexed by the comma category $(\mathbf{y}\downarrow P)$, which is small only when $\mathbf{D}$ is small. The supplement does not state this hypothesis, so as written the claim is asserted more strongly than the cited machinery supports.
- **Proposed fix:** For a small category $\mathbf{D}$, every presheaf $P\colon\mathbf{D}^{\mathrm{op}}\to\mathbf{Set}$ is a colimit of representable presheaves, indexed by the (small) comma category $(\mathbf{y}\downarrow P)$ (density; see Mac Lane Ch. III §7, using \ref{cat:colimit}).
- **Reported:** 2026-10-28 (10fede1)
