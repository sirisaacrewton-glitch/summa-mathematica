# Verification tracker: `01-foundations/06-category-theory/01-basics/11-adjoints-topology.html`

<!-- source: 01-foundations/06-category-theory/01-basics/11-adjoints-topology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Locally connected spaces do not form a reflective subcategory via the discrete functor
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that in the category of locally connected spaces, the discrete-topology functor has the connected-components functor as a left adjoint, giving an adjunction of that shape. This is wrong as stated. The connected-components functor $\pi_{0}\colon\mathbf{Top}\to\mathbf{Set}$ is left adjoint to the discrete functor $D\colon\mathbf{Set}\to\mathbf{Top}$ on all of $\mathbf{Top}$, not specifically on locally connected spaces, and the restriction to locally connected spaces does not produce a new adjunction of the claimed form. Moreover, locally connected spaces are not closed under arbitrary products or subspaces, so they are not a reflective subcategory of $\mathbf{Top}$ in the sense discussed. The sentence is imprecise and misattributes the adjunction.
- **Proposed fix:** Replace with: "The connected-components functor $\pi_{0}\colon\mathbf{Top}\to\mathbf{Set}$ is left adjoint to the discrete-topology functor $D\colon\mathbf{Set}\to\mathbf{Top}$ (this holds on all of $\mathbf{Top}$, not only on locally connected spaces)."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Compact Hausdorff spaces are not a reflective subcategory of Top
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that the category of compact Hausdorff spaces is reflective in $\mathbf{Top}$ and that its reflector is the Stone–Čech compactification. This is false: compact Hausdorff spaces are not closed under arbitrary products in $\mathbf{Top}$ (an infinite product of compact Hausdorff spaces need not be compact without the Tychonoff theorem applied correctly—actually it is compact, but the issue is that the inclusion does not have a left adjoint because compact Hausdorff spaces are not closed under quotients in the required way; more precisely, the Stone–Čech compactification $\beta$ is left adjoint to the inclusion of compact Hausdorff spaces into Tychonoff spaces, not into all of $\mathbf{Top}$). The reflector $\beta$ exists only on the subcategory of Tychonoff spaces, not on all of $\mathbf{Top}$. Hence the claim that compact Hausdorff spaces form a reflective subcategory of $\mathbf{Top}$ with reflector $\beta$ is incorrect.
- **Proposed fix:** Replace with: "The Stone–Čech compactification $\beta$ is left adjoint to the inclusion of compact Hausdorff spaces into the category of Tychonoff spaces (not into all of $\mathbf{Top}$); compact Hausdorff spaces are not reflective in $\mathbf{Top}$."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Normal spaces are not closed under products—example attribution
- **Category:** Supplement/remark error
- **Location:** text after cat:top-reflective-criterion (正規空間は直積で閉じない...)
- **Detail:** The text says normal spaces are not closed under products, citing the Sorgenfrey plane (the square of the Sorgenfrey line). This is correct: the Sorgenfrey line is normal (indeed perfectly normal), but its square is not normal. However, the citation \ref{top:sorgenfrey-plane} is to a theorem titled "ゾルゲンフライ平面" which presumably establishes the Sorgenfrey plane is not normal. This is a valid citation. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
