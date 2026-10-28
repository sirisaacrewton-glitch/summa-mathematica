# Verification tracker: `02-algebra/03-commutative-algebra/05-regular-cm/01-regular-local-rings.html`

<!-- source: 02-algebra/03-commutative-algebra/05-regular-cm/01-regular-local-rings.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the gr-polynomial theorem, the domain/DVR corollary, the quotient and completion propositions, the cotangent lemma and Jacobian criterion) is logically sound. The one genuine problem is in the supplement's 'higher viewpoint' remark: the tangent-cone examples are mislabeled — $y^{2}=x^{2}$ is two distinct lines (a linear/reduced cone), not a non-linear cone, while $y^{2}=0$ is a double line; the intended non-linear examples are the cusp and node. This should be corrected.

## Issues

### ISSUE-0001 [Open] Tangent cone examples mislabeled: y^2=x^2 is a double line, not two lines
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says that at a singular point the tangent cone becomes a non-linear cone, giving examples "$y^{2}=x^{2}$ の二本の直線" (two lines) and "$y^{2}=0$ の重直線" (a double line). But $y^{2}=x^{2}$ factors as $(y-x)(y+x)=0$, i.e. the union of the two distinct lines $y=x$ and $y=-x$; this is a reduced (linear) cone, not a non-linear one. Conversely $y^{2}=0$ is the double line $y=0$ (a non-reduced linear cone). The example intended for "two lines" (a reducible but linear cone) is mislabeled as non-linear, and the pairing is confused. The genuine non-linear tangent cone example is the cusp $y^{2}=x^{3}$ (cone $Y^{2}=0$, a double line) or the node $y^{2}=x^{2}+x^{3}$ (cone $Y^{2}=X^{2}$, two lines).
- **Proposed fix:** Replace with: "特異点では接錐が線形空間にならない（例：$y^{2}=x^{3}$ の接錐は $Y^{2}=0$ という重直線、$y^{2}=x^{2}+x^{3}$ の接錐は $Y^{2}=X^{2}$ という二本の直線）。"
- **Reported:** 2026-10-28 (8ccef3d)
