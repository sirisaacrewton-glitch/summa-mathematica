# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/10-preservation.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/10-preservation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the tables, the numbered remarks, and the proofs are consistent with the cited results. The main problems are in the supplement: (1) the categorical claim that $T_{0}$, $T_{1}$, Hausdorff and Tychonoff spaces are all reflective subcategories of $\mathbf{Top}$ is false for $T_{1}$ and Hausdorff; (2) the claim that normality without $T_{1}$ is preserved by closed continuous surjections is both unsupported by the cited result and false in general. The proofs and the stated facts (HMP, Michael, Morita–Hanai–Stone, Čech-completeness) are correctly stated.

## Issues

### ISSUE-0001 [Open] Incorrect claim that T0/T1/Hausdorff/Tychonoff form a reflective subcategory
- **Category:** Supplement/remark error
- **Location:** supplement (表の読み方の注意 / 圏論の言葉で)
- **Detail:** The supplement states that the full subcategories of $T_{0}$, $T_{1}$, Hausdorff and Tychonoff spaces are closed under products and subspaces and that the inclusion functor has a left adjoint (is reflective). This is false for $T_{1}$ and Hausdorff: the full subcategory of Hausdorff spaces is not reflective in $\mathbf{Top}$ (the Hausdorff reflection does not exist for all spaces; e.g. the universal Hausdorff quotient of an arbitrary space need not exist). Likewise $T_{1}$ spaces are not a reflective subcategory. Only $T_{0}$ (Kolmogorov quotient) and Tychonoff (Stone–Čech / complete regularization) admit reflections. So the blanket claim is wrong.
- **Proposed fix:** Restrict the claim: 'The full subcategories of $T_{0}$ spaces and of Tychonoff spaces are closed under products and subspaces, and the inclusion functor has a left adjoint (they are reflective: the $T_{0}$-reflection is the Kolmogorov quotient, the Tychonoff reflection is the complete regularization). The subcategories of $T_{1}$ and of Hausdorff spaces are closed under products and subspaces but are NOT reflective in $\mathbf{Top}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that normal (without T1) is preserved by closed continuous surjections
- **Category:** Supplement/remark error
- **Location:** supplement (正則・正規を $T_{1}$ なしで考えると)
- **Detail:** The supplement says that 'normal' (without $T_{1}$) is preserved by closed continuous surjections, citing \ref{top:perfect-preserves.2}. But \ref{top:perfect-preserves.2} concerns $T_{4}$ (normal + $T_{1}$) and $T_{1}$, not normality without $T_{1}$. Moreover, normality without $T_{1}$ is in fact NOT preserved by closed continuous images in general: the standard counterexample is that a closed continuous image of a normal (non-$T_{1}$) space need not be normal. The claim as stated is unsupported by the cited result and is false.
- **Proposed fix:** Replace with: 'The rows $T_{3}$ and $T_{4}$ include $T_{1}$. Without $T_{1}$, the indiscrete space satisfies both regularity and normality, so counterexample 28 does not apply to the $T_{1}$-free versions. Note that normality without $T_{1}$ is not in general preserved by closed continuous surjections, so the $T_{4}$ row cannot simply be transferred to the $T_{1}$-free notion.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck claim about collapsing a finite set is imprecise
- **Category:** Supplement/remark error
- **Location:** top:pres-r-mod-z / hypcheck
- **Detail:** The hypcheck says that collapsing a finite set such as $\{0,1\}$ yields 'a circle with two half-lines attached at one point', which is first countable and locally compact. Collapsing $\{0,1\}$ in $\R$ gives a circle (the interval $[0,1]$ with endpoints identified) with two half-lines $(-\infty,0]$ and $[1,\infty)$ attached at the collapsed point — this is correct as a description, but the phrase '円周の一点に半直線を二本つないだ空間' is accurate. However the statement that this is first countable and locally compact is correct. No error here on re-reading; but the claim that the space is 'first countable and locally compact' is fine. (No issue.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
