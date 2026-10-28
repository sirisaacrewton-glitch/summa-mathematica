# Verification tracker: `01-foundations/06-category-theory/01-basics/05-yoneda.html`

<!-- source: 01-foundations/06-category-theory/01-basics/05-yoneda.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cayley's theorem via Yoneda: right action vs. left multiplication
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理 (Cayley)
- **Detail:** The supplement says that applying the Yoneda embedding to a group $G$ (a one-object category) makes $G$ isomorphic to the group of equivariant maps of $G$ acting on itself from the right (right multiplication), and that Cayley's theorem (embedding $G$ into its own permutation group) is the simplest case of the Yoneda lemma. This is imprecise: the Yoneda embedding of a one-object category $G$ sends the unique object to the representable presheaf $\mathbf{D}(-,*)$, which is the set $G$ with the *left* regular action (left multiplication), and the endomorphism monoid of this presheaf is $G^{\mathrm{op}}$ acting by right multiplication. The resulting statement is an anti-isomorphism $G\cong\mathrm{End}(G^{\mathrm{op}}\text{-set})$, not an isomorphism with the right-action equivariant maps. Cayley's theorem corresponds to the left regular action, so the description of the action is wrong.
- **Proposed fix:** Applying the Yoneda embedding to a group $G$ (a one-object category) sends the unique object to the representable presheaf $\mathbf{D}(-,*)$, which is the set $G$ with the left regular action (left multiplication). Its endomorphism monoid is $G^{\mathrm{op}}$ acting by right multiplication, so $G\cong\mathrm{End}(G^{\mathrm{op}}\text{-set})^{\mathrm{op}}$; equivalently, using the contravariant Yoneda embedding, $G$ embeds into the permutations of the underlying set of $G$ (the left regular action). Cayley's theorem is the simplest case of the Yoneda lemma.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Density: presheaves as colimits of representables requires smallness
- **Category:** Supplement/remark error
- **Location:** supplement / 前層の圏の性質
- **Detail:** The supplement states without qualification that every presheaf can be written as a colimit of representable presheaves (density). This is the density theorem, and it holds for presheaves on a small category (or more generally when the relevant colimits exist and the indexing is legitimate). On this page the Yoneda embedding $\mathbf{y}\colon\mathbf{D}\to[\mathbf{D}^{\mathrm{op}},\mathbf{Set}]$ is only constructed in part 2 of the corollary under the hypothesis that $\mathbf{D}$ is small, and the supplement does not repeat this hypothesis. Stated for an arbitrary locally small $\mathbf{D}$ it is not justified by the cited material.
- **Proposed fix:** When $\mathbf{D}$ is small, the image of the Yoneda embedding consists of the representable presheaves, and every presheaf is a colimit of representable presheaves (density; see Mac Lane Chapter III §7, using \ref{cat:colimit}).
- **Reported:** 2026-10-28 (8ccef3d)
