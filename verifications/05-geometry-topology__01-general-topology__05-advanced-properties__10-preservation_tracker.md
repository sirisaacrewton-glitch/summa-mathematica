# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/10-preservation.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/10-preservation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a large preservation table with supporting propositions, facts and a supplement. The proofs and most facts check out. Two side-comment issues in the supplement are worth flagging: the categorical remark overstates reflectivity (the $T_{1}$ subcategory is not reflective), and the $T_{1}$-free normality remark cites a $T_{4}$-level result. Both are medium-confidence supplement errors; no logical gaps or missing hypotheses were found in the proved propositions.

## Issues

### ISSUE-0001 [Open] T₀/T₁/Hausdorff/Tychonoff subcategories are not all reflective
- **Category:** Supplement/remark error
- **Location:** supplement (圏論の言葉で)
- **Detail:** The supplement claims that the full subcategories of $\mathbf{Top}$ consisting of $T_{0}$, $T_{1}$, Hausdorff and Tychonoff spaces are closed under products and subspaces and that the inclusion functor has a left adjoint (is reflective). This is false for $T_{1}$: the $T_{1}$-reflection of a space is its Kolmogorov quotient followed by... in fact there is no left adjoint to the inclusion of $T_{1}$ spaces into $\mathbf{Top}$ (the $T_{1}$-quotient construction is not functorial in the required way; the inclusion of $T_{1}$ spaces has no left adjoint). The $T_{0}$-reflection (Kolmogorov quotient) and the Hausdorff reflection exist, and Tychonoff spaces are reflective, but $T_{1}$ is not reflective. The blanket claim over all four classes is wrong.
- **Proposed fix:** Replace with: "$T_{0}$・ハウスドルフ・チコノフ空間のなす充満部分圏は直積と部分空間で閉じており、包含関手が左随伴をもつ（反射的部分圏である）。$T_{1}$ 空間のなす充満部分圏も直積と部分空間で閉じているが、包含関手は左随伴をもたない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Regular/normal without T₁ preserved by closed continuous surjections
- **Category:** Supplement/remark error
- **Location:** supplement (正則・正規を $T_{1}$ なしで考えると)
- **Detail:** The supplement states that "正規"(normal without $T_{1}$) is preserved by closed continuous surjections, citing \ref{top:perfect-preserves.2}. But \ref{top:perfect-preserves.2} concerns closed continuous surjections preserving normality together with $T_{1}$ (i.e. $T_{4}$), and the standard fact is that closed continuous images of normal spaces are normal. However the citation is to a result about $T_{4}$ (normal + $T_{1}$); using it to justify the $T_{1}$-free version is a misattribution. More importantly, the claim that the indiscrete space satisfies both regular and normal without $T_{1}$ is correct, but the assertion that the counterexample 28 is then unusable is fine. The genuine problem is the citation: \ref{top:perfect-preserves.2} is stated for $T_{4}$ (with $T_{1}$), not for $T_{1}$-free normality.
- **Proposed fix:** State the $T_{1}$-free fact with its own justification: "$T_{1}$ を仮定しない「正規」も閉な連続全射で保たれる（標準的事実；$T_{4}$ 版は \ref{top:perfect-preserves.2}）．"
- **Reported:** 2026-10-28 (8ccef3d)
