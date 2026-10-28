# Verification tracker: `01-foundations/06-category-theory/01-basics/11-adjoints-topology.html`

<!-- source: 01-foundations/06-category-theory/01-basics/11-adjoints-topology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (propositions, theorems and their proofs) is logically sound: the adjunctions $D\dashv U\dashv D'$, the slice adjunction for initial/final topologies, the equalizer construction, completeness/cocompleteness of Top, the $X/A$ adjunction, and the Haus reflection argument are all correct, and the hypchecks are accurate. The genuine problems are concentrated in the supplement: the claim that locally connected spaces give an adjunction of the stated reflective form is misstated, and the claim that compact Hausdorff spaces are reflective in Top with Stone–Čech as reflector is false (they are reflective only inside Tychonoff spaces). A minor imprecision concerns the separate listing of regular and $T_{3}$ spaces.

## Issues

### ISSUE-0001 [Open] Locally connected spaces do not form a reflective subcategory via the components functor
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that in the category of locally connected spaces, the discrete-topology functor has the connected-components functor as a left adjoint, giving an adjunction of that shape. This is wrong as stated: the connected-components functor is a left adjoint to the discrete functor on the category of *all* topological spaces (or on the category of locally connected spaces it is not even well-behaved as a left adjoint to the discrete functor in the claimed direction). The standard Mac Lane exercise concerns the adjunction between the discrete functor and the components functor on Top, not a reflective-subcategory statement for locally connected spaces. As written the sentence asserts a false adjunction.
- **Proposed fix:** Replace with: "また、すべての位相空間の圏では、離散位相の関手 $D\colon\mathbf{Set}\to\mathbf{Top}$ は連結成分の集合をとる関手 $\pi_{0}\colon\mathbf{Top}\to\mathbf{Set}$ を左随伴にもつ（$D\dashv\pi_{0}$）。局所連結空間の圏は $\mathbf{Top}$ の反射的部分圏ではない（反射子が存在しない）ので、この形の随伴を反射部分圏の議論と混同してはならない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Compact Hausdorff spaces are not a reflective subcategory of Top
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says the category of compact Hausdorff spaces is reflective in Top and that its reflector is the Stone–Čech compactification. This is false: compact Hausdorff spaces are closed under products and closed subspaces but NOT under arbitrary subspaces, so the criterion of \ref{cat:top-reflective-criterion} does not apply, and indeed there is no left adjoint to the inclusion $\mathbf{CHaus}\hookrightarrow\mathbf{Top}$ (the Stone–Čech compactification $\beta$ is left adjoint to the forgetful functor $\mathbf{CHaus}\to\mathbf{Top}$ only when restricted to Tychonoff spaces, i.e. $\beta$ is a left adjoint to the inclusion $\mathbf{CHaus}\hookrightarrow\mathbf{Tych}$, not to $\mathbf{CHaus}\hookrightarrow\mathbf{Top}$). The claim as stated is a false statement about reflectivity.
- **Proposed fix:** Replace with: "コンパクトハウスドルフ空間の圏は $\mathbf{Top}$ の反射的部分圏では**ない**（任意の部分空間で閉じないため）。ただしチコノフ空間の圏 $\mathbf{Tych}$ の中では反射的部分圏であり、その反射子がストーン–チェックのコンパクト化 $\beta$ である（\ref{top:page-stone-cech}）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Regular and T3 spaces: closure under products/subspaces needs care
- **Category:** Supplement/remark error
- **Location:** supplement / proposition cat:top-reflective-criterion (例)
- **Detail:** The proposition lists 正則空間 and $T_{3}$ 空間 as reflective subcategories, citing \ref{top:regular-hereditary} for closure under subspaces. This is acceptable for regularity (regular spaces are closed under arbitrary products and subspaces), but the supplement's blanket statement that "直積と部分空間で閉じた性質であれば同じように通る" combined with listing both 正則 and $T_{3}$ separately is imprecise: $T_{3}$ is usually defined as regular + $T_{1}$, and the empty product (one-point space) is $T_{1}$, so both are fine, but the text should note that regularity alone (without $T_{1}$) is closed under products and subspaces while the one-point space is regular, so the criterion applies. This is a minor imprecision rather than a hard error; flagging only the potential confusion between 正則 and $T_{3}$.
- **Proposed fix:** Clarify: "正則空間（$T_{1}$ を仮定しない正則性）も $T_{3}$ 空間（正則 $+T_{1}$）も、任意の直積と部分空間で閉じ、一点空間を含むので判定法が使える（\ref{top:regular-hereditary}）。"
- **Reported:** 2026-10-28 (8ccef3d)
