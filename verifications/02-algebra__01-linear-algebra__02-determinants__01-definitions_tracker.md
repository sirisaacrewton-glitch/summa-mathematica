# Verification tracker: `02-algebra/01-linear-algebra/02-determinants/01-definitions.html`

<!-- source: 02-algebra/01-linear-algebra/02-determinants/01-definitions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, Weierstrass characterization, basis-free determinant, multiplicativity, cofactor expansion, elimination and multiplicative characterization) is logically sound and the proofs check out. The genuine problems are concentrated in the supplement and the closing remark: the claim that f(T_{ij}(c))=1 is automatic for |k|≥3 via a commutator argument is mathematically wrong, the Berkowitz complexity is stated too definitively, and the GL_n abelianization statement excludes too few small cases. These are reported; the permanent/Valiant remark is flagged only as a minor imprecision.

## Issues

### ISSUE-0001 [Open] Commutator claim for T_{ij} in (D6) is wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を弱めると
- **Detail:** The supplement claims that when |k|≥3 the condition f(T_{ij}(c))=1 follows automatically from multiplicativity, arguing that T_{ij}((a-1)b) is a commutator of D_i(a) and T_{ij}(b) and hence maps to 1 since k is commutative. This is false: the commutator of D_i(a) and T_{ij}(b) is T_{ij}((a^{-1}-1)b) (or T_{ij}((a-1)b) depending on convention), which is a transvection with a nonzero parameter, not the identity; its image under f is not forced to be 1 by multiplicativity alone. Multiplicativity only gives f(commutator)=1 for genuine commutators, and T_{ij}((a-1)b) is not a commutator in general. So the stated automaticity is unjustified.
- **Proposed fix:** Delete the claim that f(T_{ij}(c))=1 is automatic for |k|≥3, or replace it with the correct statement: multiplicativity gives f(T_{ij}((a-1)b))=f(D_i(a)T_{ij}(b)D_i(a)^{-1})/f(T_{ij}(b)) only when the relevant matrices are invertible and the conjugation identity holds; the condition f(T_{ij}(c))=1 is genuinely needed and is not implied by multiplicativity plus f(D_1(c))=c.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Berkowitz algorithm complexity overstated as O(n^4) without division
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement states that over a ring without division the Berkowitz algorithm computes the determinant in about O(n^4) ring operations. The Berkowitz algorithm is usually quoted as O(n^4) (some sources O(n^4) or O(n^5) depending on the accounting of the characteristic polynomial via the Samuelson–Berkowitz recursion); the precise exponent is contested and depends on the model. Stating it as a definite 'O(n^4)' fact is an overstatement of what is standardly supported.
- **Proposed fix:** Replace with: 'division-free algorithms such as the Berkowitz algorithm compute the determinant in polynomial time (roughly O(n^4) ring operations, depending on the accounting).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] GL_n commutator subgroup statement excludes only GL_2(F_2)
- **Category:** Supplement/remark error
- **Location:** remark 行列式は最高次の外冪
- **Detail:** The remark says det gives the abelianization of GL_n, 'except for GL_2(F_2)', i.e. GL_n(k)/[GL_n,GL_n] ≅ k^× for all n except GL_2(F_2). This is imprecise: the statement SL_n(k)=[GL_n,GL_n] fails in other small cases, notably GL_2(F_3) (and generally the identification of the commutator subgroup with SL_n requires care for small fields and n=2). The blanket 'except GL_2(F_2)' is an overstatement.
- **Proposed fix:** Replace with: 'for n≥3, or n=2 with |k|>3, one has GL_n(k)/[GL_n,GL_n] ≅ k^× via det; small exceptions such as GL_2(F_2) and GL_2(F_3) require separate treatment.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Permanent #P-hardness attribution to Valiant is fine but 'not multiplicative' phrasing
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the permanent is 'not multiplicative' and cites Valiant for #P-hardness. The #P-hardness (Valiant 1979) is correct. However the phrase 'not multiplicative' is stated as if it were the reason for hardness; more importantly the claim that the permanent is not multiplicative is true but the surrounding sentence implies this is why it is hard to compute, which is not a valid implication. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** Rephrase: 'the permanent is not multiplicative (per(AB)≠per(A)per(B) in general), and computing it is #P-hard (Valiant); the determinant's efficiency rests on alternation and multiplicativity.'
- **Reported:** 2026-10-28 (8ccef3d)
