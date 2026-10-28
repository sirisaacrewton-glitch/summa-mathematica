# Verification tracker: `02-algebra/01-linear-algebra/05-multilinear/02-exterior.html`

<!-- source: 02-algebra/01-linear-algebra/05-multilinear/02-exterior.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong claim about dividing by m⊗n+n⊗m in characteristic 2
- **Category:** Supplement/remark error
- **Location:** hypcheck / 交代性の定義
- **Detail:** The hypcheck says that dividing only by $m\otimes n+n\otimes m$ gives, in characteristic 2, the same thing as the symmetric algebra. This is false: in characteristic 2, $m\otimes n+n\otimes m=m\otimes n-n\otimes m$, so the quotient by these relations is exactly the symmetric algebra in every characteristic, not only in characteristic 2. The intended point (that the exterior algebra needs $m\otimes m=0$, which is stronger than skew-symmetry when 2 is not invertible) is correct, but the stated reason is wrong.
- **Proposed fix:** Replace with: "外積代数は $m\otimes m$（$m\wedge m=0$）で割って定義する。$m\otimes n+n\otimes m$ を $0$ とする（反対称性）だけでは、標数 $2$ でない環では $m\wedge m=0$ を導けない（$2m\wedge m=0$ しか出ない）。標数 $2$ では $m\otimes n+n\otimes m=m\otimes n-n\otimes m$ なので、この関係で割ると対称代数になってしまい、外積代数は得られない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Λ²(Z/2⊕Z/2) is not Z/2
- **Category:** Supplement/remark error
- **Location:** hypcheck / 自由であること
- **Detail:** The hypcheck claims $\Lambda^{2}(\mathbb{Z}/2\oplus\mathbb{Z}/2)\cong\mathbb{Z}/2$. But $\mathbb{Z}/2$ is a field, so $\mathbb{Z}/2\oplus\mathbb{Z}/2$ is a 2-dimensional free (hence free) module over $\mathbb{Z}/2$; by \ref{lin:exterior-basis}, $\Lambda^{2}$ of it is free of rank $\binom{2}{2}=1$, i.e. $\cong\mathbb{Z}/2$ as a $\mathbb{Z}/2$-module. This is not an example of a non-free module giving a complicated exterior power; the example is misapplied (the module is free over its base ring).
- **Proposed fix:** Replace the example with a genuine non-free case, e.g.: "自由でない加群では $\Lambda^{k}M$ は一般に複雑で、たとえば $\mathbb{Z}$ 加群として $\Lambda^{2}(\mathbb{Z}/2\oplus\mathbb{Z}/2)$ は $\mathbb{Z}/2$ 加群として階数 $1$ だが $\mathbb{Z}$ 加群としては自由でなく、$\Lambda^{2}(\mathbb{Q})=0$ である。" (or simply delete the $\mathbb{Z}/2\oplus\mathbb{Z}/2$ example).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Plücker relations do not cut out Gr(k,V) as a projective variety in the stated generality
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that the set of decomposable elements of $\Lambda^{k}V$ (the cone over $\mathrm{Gr}(k,V)$) is defined by the Plücker relations (quadrics) and is a projective variety. The Plücker relations are quadratic in the Plücker coordinates and do define the Grassmannian in its Plücker embedding, but the statement as phrased ("プリュッカー関係式（2 次式）で定まる") is imprecise: the relations are not a single quadratic but a specific set of quadratic relations (the Plücker relations), and the cone statement requires the full set. As written it reads as if one quadratic equation suffices, which is only true for $\mathrm{Gr}(2,4)$.
- **Proposed fix:** Replace with: "一般の $k$ について、$\Lambda^{k}V$ の分解可能な元の全体（$\mathrm{Gr}(k,V)$ のアフィン錐）は、プリュッカー座標に関する 2 次関係式（プリュッカー関係式の全体）で定義され、$\mathrm{Gr}(k,V)$ はプリュッカー埋め込みにより射影多様体になることが知られている。"
- **Reported:** 2026-10-28 (8ccef3d)
