# Verification tracker: `04-analysis/02-complex-analysis/01-basics/02-line-integrals.html`

<!-- source: 04-analysis/02-complex-analysis/01-basics/02-line-integrals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions, the fundamental theorem, the primitive-existence theorem and its proof) is logically sound and the citations match their targets. The genuine problems are concentrated in the supplement and hypcheck: the claim that simple connectivity suffices is stated without the holomorphy hypothesis on f, the gradient-field characterization of having a primitive is imprecise (it omits the Cauchy–Riemann relation between the two potentials), and the hypcheck comment overstates that the equivalence 1–4 survives on disconnected open sets.

## Issues

### ISSUE-0001 [Open] Star-shaped/simply connected claim about Cauchy theorem
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that on star-shaped domains condition 3 always holds (citing cx:page-cauchy-theorem) and that in general it holds on simply connected domains (citing cx:page-winding-number). The first part is fine for holomorphic f, but the sentence is placed in a context where f is only assumed continuous; more importantly the claim '一般には単連結な領域で成り立つ' is stated without the hypothesis that f is holomorphic. For merely continuous f, simple connectivity does not suffice (e.g. f = \bar z on a disk). The statement is only true for holomorphic f.
- **Proposed fix:** Restrict the sentence to holomorphic $f$: 「$f$ が正則であれば、星形の領域ではつねに 3 が成り立ち（\ref{cx:page-cauchy-theorem}）、一般に単連結な領域でも成り立つ（\ref{cx:page-winding-number}）。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Gradient-field characterization of having a primitive
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement claims that, via cx:contour-integral-real, f having a primitive is equivalent to both real vector fields (u,-v) and (v,u) being gradient fields. This is imprecise: f having a primitive F=P+iQ means (u,-v) = grad P and (v,u) = grad Q, i.e. the two fields are gradient fields *with the specific relation* that their potentials P,Q satisfy the Cauchy–Riemann equations (equivalently F=P+iQ holomorphic). Merely both being gradient fields is weaker and does not give a holomorphic primitive. Also the identification of the fields with the real line integrals of u dx - v dy and v dx + u dy is correct, but the 'equivalent' claim as stated is false.
- **Proposed fix:** 「$f$ が原始関数 $F=P+iQ$ をもつことは、$(u,-v)=\nabla P$ かつ $(v,u)=\nabla Q$ となる $C^{1}$ 級関数 $P,Q$ でコーシー–リーマンの方程式を満たすものが存在することと同値である。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck comment on connectedness
- **Category:** Supplement/remark error
- **Location:** cx:primitive-existence / hypcheck
- **Detail:** The hypcheck says that without connectedness one argues component by component and 'the equivalence of 1–4 itself holds for open sets (only uniqueness in Step 6 breaks down)'. But condition 2 (path independence) and condition 1 (existence of a primitive) are not equivalent on a disconnected open set: on a disconnected set a primitive can exist while path-independence fails, or vice versa, because the constant on each component can be chosen independently. So the equivalence genuinely requires connectedness, not just for uniqueness.
- **Proposed fix:** 「連結でなければ 1–4 の同値性は一般には成り立たない（成分ごとに定数を独立に選べるため 1 と 2 がずれる）。連結成分ごとに議論すれば各成分で同値になり、原始関数は成分ごとに定数の差を除いて一意である。」
- **Reported:** 2026-10-28 (8ccef3d)
