# Verification tracker: `02-algebra/02-group-theory/07-representations/04-induced.html`

<!-- source: 02-algebra/02-group-theory/07-representations/04-induced.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definition, induced-character formula, Frobenius reciprocity, Mackey criterion for normal subgroups, dihedral example) is logically sound; the reciprocity proof's use of real-valuedness of dimensions is acceptable. The genuine problems are confined to the supplement: the definition of elementary subgroups in Brauer's theorem omits the coprimality condition, and the 'higher viewpoint' remark identifying induction with Hom_{C[H]}(C[G],-) as right adjoint is stated without the finiteness hypothesis that makes it valid.

## Issues

### ISSUE-0001 [Open] Brauer's theorem: basic subgroups mischaracterized
- **Category:** Supplement/remark error
- **Location:** supplement / ブラウアーの定理
- **Detail:** The supplement states that every character is an integer combination of induced 1-dimensional characters of elementary subgroups, and defines elementary subgroups as "the direct product of a cyclic group and a p-group" (巡回群と p 群の直積). This is wrong: an elementary subgroup is the direct product of a cyclic group and a p-group **of coprime orders** (equivalently cyclic × p-group with the cyclic part of order prime to p). Without the coprimality condition the class of such products is far too large (e.g. any p-group times a p-group is a p-group, and cyclic × p-group with overlapping primes includes many groups for which the statement is not the standard theorem). As stated the definition is imprecise/incorrect.
- **Proposed fix:** 基本部分群（初等部分群）とは、位数が互いに素な巡回群 $C$ と $p$ 群 $P$ の直積 $C\times P$ のことである（$\lvert C\rvert$ と $\lvert P\rvert$ は互いに素）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Induction is not the right adjoint via Hom_{C[H]}(C[G],-) in the stated form
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement claims that for finite groups induction is also right adjoint to restriction, writing $\operatorname{Ind}\cong\Hom_{\mathbb{C}[H]}(\mathbb{C}[G],-)$. As a functor on left $\mathbb{C}[H]$-modules, $\Hom_{\mathbb{C}[H]}(\mathbb{C}[G],-)$ is the coinduction functor; it is isomorphic to induction only because $\mathbb{C}[G]$ is finite free (hence Frobenius) over $\mathbb{C}[H]$. The bare identification $\operatorname{Ind}\cong\Hom_{\mathbb{C}[H]}(\mathbb{C}[G],-)$ is only correct up to this finiteness, and the parenthetical gives no indication that the isomorphism uses finiteness of $G/H$ (it fails for infinite-index subgroups). Stated as an unqualified identity it is imprecise.
- **Proposed fix:** 有限群では $\mathbb{C}[G]$ が $\mathbb{C}[H]$ 上有限自由（従って Frobenius 加群）なので、誘導は制限の右随伴でもある：$\operatorname{Ind}_{H}^{G}\cong\Hom_{\mathbb{C}[H]}(\mathbb{C}[G],-)$（この同型は $[G:H]<\infty$ によるところが本質的で、無限指数では一般に成り立たない）。
- **Reported:** 2026-10-28 (8ccef3d)
