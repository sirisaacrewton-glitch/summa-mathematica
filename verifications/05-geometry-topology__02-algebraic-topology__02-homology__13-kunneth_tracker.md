# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/13-kunneth.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/13-kunneth.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Alexander–Whitney formula uses restrictions to faces of the simplex, not projections
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement writes the Alexander–Whitney map as $\sigma\mapsto\sum_{p+q=n}\sigma\restriction[e_{0},\dots,e_{p}]\otimes\sigma\restriction[e_{p},\dots,e_{n}]$ and describes the restrictions as '成分ごとに射影したもの' (projections onto components). This is wrong: the Alexander–Whitney map is the front $p$-face followed by the projection $\Delta^{p}\to\Delta^{n}$ (i.e. $\sigma\circ\delta^{p+1}\cdots\delta^{n}$) tensored with the back $q$-face followed by the projection $\Delta^{q}\to\Delta^{n}$ (i.e. $\sigma\circ\delta^{0}\cdots\delta^{p}$). The notation $\sigma\restriction[e_{0},\dots,e_{p}]$ alone denotes the front face, which is a map $\Delta^{p}\to X$, not a singular $p$-simplex of $X$ in the sense needed; the 'projection onto components' description is also incorrect (the components are $X$ and $Y$, not the faces).
- **Proposed fix:** Replace with: the Alexander–Whitney map is $\sigma\mapsto\sum_{p+q=n}(\sigma\circ\delta^{p+1}\cdots\delta^{n})\otimes(\sigma\circ\delta^{0}\cdots\delta^{p})$, where $\delta^{i}$ are the face maps and the front/back faces are reparametrized by the canonical projections $\Delta^{p}\to\Delta^{n}$, $\Delta^{q}\to\Delta^{n}$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Prism operator is not the q=1 shuffle map
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement claims 'プリズム作用素 \ref{at:singular-homotopy-invariance} は $q=1$ のシャッフル写像にあたる'. The prism operator used in homotopy invariance is a chain homotopy $S(X)\to S(X\times I)$ (or $S(X)\to S(X)$ after composing with a projection), not a chain map $S(X)\otimes S(I)\to S(X\times I)$ of the shuffle type. The shuffle map for $q=1$ is a chain map $S(X)\otimes S(\Delta^{1})\to S(X\times\Delta^{1})$; the prism operator is a homotopy, not a chain map, and the two are different objects (the prism operator is not a shuffle).
- **Proposed fix:** Replace with: 'the prism operator is a chain homotopy, not a chain map; the $q=1$ shuffle map is the chain map $S(X)\otimes S(\Delta^{1})\to S(X\times\Delta^{1})$ given by the standard triangulation of $\Delta^{p}\times\Delta^{1}$, which is related to but distinct from the prism operator.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Eilenberg–Zilber does not make S a monoidal functor even up to homotopy in the naive sense
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says Eilenberg–Zilber states that $S\colon\mathbf{Top}\to\mathrm{Ch}$ is 'up to homotopy' a monoidal functor. This is imprecise: the EZ maps $\psi$ and $\theta$ are only inverse chain homotopy equivalences, and the monoidal coherence (associativity, unit) holds only up to coherent homotopy, not on the nose. Stating it as 'up to homotopy a monoidal functor' without mentioning coherence is an overstatement; the correct statement is that $S$ is a homotopy-coherent (weak) monoidal functor, and the $E_{\infty}$-coalgebra structure requires the full coherence data.
- **Proposed fix:** Replace with: 'Eilenberg–Zilber gives natural chain maps $\psi,\theta$ inverse up to natural chain homotopy, making $S$ a homotopy-coherent (weak) monoidal functor; the coherence data (associativity, unit up to coherent homotopy) is needed to obtain the $E_{\infty}$-coalgebra structure.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Field-coefficient Künneth requires no Tor but the statement about naturality of the splitting is imprecise
- **Category:** Supplement/remark error
- **Location:** theorem at:kunneth (statement)
- **Detail:** The theorem states the integral Künneth sequence splits (non-naturally) and that for field coefficients $H_{n}(X\times Y;k)\cong\bigoplus H_{p}(X;k)\otimes_{k}H_{q}(Y;k)$ naturally. The field-coefficient isomorphism is indeed natural, but the phrase '分裂する（分裂は自然ではない）' applied to the integral sequence is correct; however the statement does not note that the integral splitting requires $H_{*}(X),H_{*}(Y)$ to be free (or at least one side), which is not automatic for arbitrary spaces. In fact the algebraic Künneth splitting requires $D$ free; here $S(X),S(Y)$ are free chain complexes, so the splitting does hold, but the statement should make clear the splitting comes from freeness of the singular chain complexes, not from the homology groups.
- **Proposed fix:** Add: 'the splitting exists because $S(X)$ and $S(Y)$ are free chain complexes (the hypothesis of \ref{at:algebraic-kunneth} Step 7), not because $H_{*}$ is free.'
- **Reported:** 2026-10-28 (8ccef3d)
