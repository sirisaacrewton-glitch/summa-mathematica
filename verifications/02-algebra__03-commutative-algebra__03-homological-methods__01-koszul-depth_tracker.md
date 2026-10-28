# Verification tracker: `02-algebra/03-commutative-algebra/03-homological-methods/01-koszul-depth.html`

<!-- source: 02-algebra/03-commutative-algebra/03-homological-methods/01-koszul-depth.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems, proofs, and hypchecks are logically sound: the mapping-cone construction, the annihilation proposition, the acyclicity theorem, the depth-sensitivity theorem, and the local criterion are all correctly argued, and the cited labels match their uses. The only genuine problem found is in the supplement, where the geometric interpretation states that a regular sequence corresponds to the fiber's dimension dropping by exactly $n$; this conflates the number of equations with the dimension drop and should instead say the fiber has codimension $n$ (equations are independent).

## Issues

### ISSUE-0001 [Open] Wrong dimension drop in the supplement's geometric interpretation
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点：導来的な零点集合)
- **Detail:** The supplement says that a regular sequence corresponds to the case where 'the fiber dimension drops by exactly $n$'. But $n$ here is the number of equations $x_{1},\dots,x_{n}$, not the dimension of $\operatorname{Spec}A$. For a regular sequence of length $n$ the fiber over the origin has codimension $n$ in $\operatorname{Spec}A$, i.e. its dimension is $\dim A-n$ (when $A$ is equidimensional/CM), not 'drops by $n$' in the sense of the ambient dimension. As written ('ファイバーの次元がちょうど $n$ 下がる') it is dimensionally wrong: the drop is $n$ only if one means codimension, but the phrase says the fiber's dimension drops by $n$, which would require $\dim A$ to be irrelevant. The correct statement is that the codimension of the fiber equals $n$ (the number of equations), i.e. the equations are independent.
- **Proposed fix:** Replace with: '正則列は「方程式が独立で、ファイバーの余次元がちょうど $n$（方程式の個数）になる」場合で、補正が消える。' (i.e. the codimension of the fiber equals the number $n$ of equations, not that the fiber's dimension drops by $n$.)
- **Reported:** 2026-10-28 (8ccef3d)
