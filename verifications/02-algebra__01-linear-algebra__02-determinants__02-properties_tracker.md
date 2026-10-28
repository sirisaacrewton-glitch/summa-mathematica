# Verification tracker: `02-algebra/01-linear-algebra/02-determinants/02-properties.html`

<!-- source: 02-algebra/01-linear-algebra/02-determinants/02-properties.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that a general matrix can be treated as invertible over the rational function field
- **Category:** Supplement/remark error
- **Location:** supplement (前提を弱めると)
- **Detail:** The supplement claims that since $\mathbb{Z}[x_{ij}]$ is a domain, it suffices to prove an identity over its fraction field $\mathbb{Q}(x_{ij})$, and 'in particular a general matrix can be treated as invertible.' This is false: the generic matrix $(x_{ij})$ over $\mathbb{Q}(x_{ij})$ is not invertible (its determinant is a nonconstant polynomial, not a unit in the field). Only after localizing at $\det$ (i.e. over $\mathbb{Q}(x_{ij})[1/\det]$) does the generic matrix become invertible. The stated reduction 'prove over the fraction field, so the general matrix is invertible' is therefore wrong as written.
- **Proposed fix:** Replace with: 'Since $\mathbb{Z}[x_{ij}]$ is a domain, it suffices to prove the identity over its fraction field $\mathbb{Q}(x_{ij})$; moreover, localizing further at $\det$, i.e. over $\mathbb{Q}(x_{ij})[1/\det]$, the generic matrix becomes invertible, so identities that require invertibility of the generic matrix can be reduced to the field case. (The generic matrix itself is not invertible over $\mathbb{Q}(x_{ij})$.)'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that $\det M \neq \det(PR-QS)$ when $RS \neq SR$ is stated without a valid example
- **Category:** Supplement/remark error
- **Location:** hypcheck (可換性)
- **Detail:** The hypcheck asserts that if $RS \neq SR$ then $\det M \neq \det(PR-QS)$, with 'an example is easily made with $2\times2$ blocks.' As stated this is an overstatement: the failure of the identity is not automatic from $RS\neq SR$; one must exhibit a specific counterexample. The claim as written (a universal implication '$RS\neq SR \Rightarrow \det M\neq\det(PR-QS)$') is not justified and is not what the theorem's hypothesis actually controls.
- **Proposed fix:** Replace with: 'The commutativity of the blocks $R,S$ is essential: for instance with $P=R=I_{2}$, $Q=0$, $S=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ one has $RS\neq SR$ and $\det M = \det R\det P = 1$ while $\det(PR-QS)=\det(I-S)=1$; a genuine counterexample is obtained e.g. from $P=R=I_{2}$, $Q=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $S=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, where $RS\neq SR$ and $\det M\neq\det(PR-QS)$.' (Provide an explicit verified counterexample rather than the vague assertion.)
- **Reported:** 2026-10-28 (8ccef3d)
