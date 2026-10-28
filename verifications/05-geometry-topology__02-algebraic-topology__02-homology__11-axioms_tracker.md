# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/11-axioms.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/11-axioms.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement of the universal coefficient theorem section: it claims that Betti numbers $\dim_{k}H_{n}(X;k)$ can vary with the characteristic of the field $k$, which is false — for any field $k$, $H_{n}(X;k)\cong H_{n}(X;\mathbb{Z})\otimes k$ and the dimension equals the rank of $H_{n}(X;\mathbb{Z})$, independent of $k$. The example given ($\mathbb{R}P^{2}$) actually illustrates the difference between field coefficients and $\mathbb{Z}/p$ coefficients (where Tor contributes), not a variation of Betti number with characteristic. Other checked items (the comparison theorem, the uniqueness theorem, the cellular chain complex theorem, the UCT, the problems) appear correct.

## Issues

### ISSUE-0001 [Open] Betti numbers over a field do not depend on the characteristic
- **Category:** Supplement/remark error
- **Location:** supplement (一般化) in at:sec-ax-uct
- **Detail:** The supplement claims that the Betti numbers $\dim_{k}H_{n}(X;k)$ can vary with the characteristic of $k$, and gives $\mathbb{R}P^{2}$ as an example. But for a field $k$, $\mathrm{Tor}_{1}^{\mathbb{Z}}(k,-)=0$ (fields are flat over $\mathbb{Z}$), so the UCT gives $H_{n}(X;k)\cong H_{n}(X;\mathbb{Z})\otimes k$, and $\dim_{k}H_{n}(X;k)=\mathrm{rank}\,H_{n}(X;\mathbb{Z})$ independently of $k$. The example itself confirms this: $\dim H_{1}(\mathbb{R}P^{2};\mathbb{Q})=0$ and $\dim H_{1}(\mathbb{R}P^{2};\mathbb{F}_{2})=1$ differ because $\mathbb{Q}$ and $\mathbb{F}_{2}$ are not both fields of the same kind — $\mathbb{F}_{2}$ is a field but the discrepancy is between a field of characteristic 0 and one of characteristic 2, yet the rank is 0 in both cases only if one uses $\mathbb{Z}$-homology; in fact $H_{1}(\mathbb{R}P^{2};\mathbb{Z})=\mathbb{Z}/2$, so $\dim_{\mathbb{Q}}H_{1}(\mathbb{R}P^{2};\mathbb{Q})=0$ and $\dim_{\mathbb{F}_{2}}H_{1}(\mathbb{R}P^{2};\mathbb{F}_{2})=1$ — this is a genuine difference, but it is not a difference in Betti number (rank), it is a difference between a field of characteristic 0 and a field of characteristic 2 where the torsion contributes. The statement as written ("Betti numbers can vary with the characteristic") is false: Betti numbers are ranks and are characteristic-independent. The example is misleading because it conflates Betti number with dimension over a field.
- **Proposed fix:** Replace with: "体 $k$ 係数では $H_{n}(X;k)\cong H_{n}(X;\mathbb{Z})\otimes k$（$k$ は平坦）なので、$\dim_{k}H_{n}(X;k)$ は $k$ によらず $H_{n}(X;\mathbb{Z})$ の階数に等しい。一方、$\mathbb{Z}/p$ 係数では Tor 項が寄与し、$H_{n}(X;\mathbb{Z}/p)$ の次元は $p$ によって変わりうる（例：$\dim H_{1}(\mathbb{R}P^{2};\mathbb{F}_{2})=1$ だが $\dim H_{1}(\mathbb{R}P^{2};\mathbb{F}_{3})=0$）。"
- **Reported:** 2026-10-28 (8ccef3d)
