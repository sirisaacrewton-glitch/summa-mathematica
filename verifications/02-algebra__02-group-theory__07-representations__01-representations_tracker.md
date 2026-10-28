# Verification tracker: `02-algebra/02-group-theory/07-representations/01-representations.html`

<!-- source: 02-algebra/02-group-theory/07-representations/01-representations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] D4 and Q8 group algebras are not isomorphic as algebras
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that the complex group algebras of $D_{4}$ and $Q_{8}$ are both isomorphic to $\mathbb{C}^{4}\times M_{2}(\mathbb{C})$, and uses this to argue that the category of $k[G]$-modules (forgetting tensor product) cannot recover $G$. The dimension count $1,1,1,1,2$ is correct for both groups, so both group algebras are isomorphic as $\mathbb{C}$-vector spaces of the same dimension, but they are NOT isomorphic as algebras. Indeed $D_{4}$ has five conjugacy classes (so $\mathbb{C}[D_{4}]\cong\mathbb{C}^{4}\times M_{2}(\mathbb{C})$), while $Q_{8}$ has five conjugacy classes too, but the two groups are non-isomorphic and their group algebras are non-isomorphic as algebras (e.g. $Q_{8}$ has a unique element of order 2, $D_{4}$ has five; the number of 1-dimensional representations is $|G/[G,G]|$, which is 4 for both, but the algebras differ: $\mathbb{C}[Q_{8}]$ has a different Wedderburn decomposition pattern in terms of which simples appear with which multiplicity structure—more concretely, the two are not Morita equivalent since Morita equivalence preserves the number of simple modules and their dimensions, which coincide, but the actual algebra isomorphism fails because the groups are not isomorphic and $\mathbb{C}[G]\cong\mathbb{C}[H]$ implies $G\cong H$ for finite groups). The correct statement is that $D_{4}$ and $Q_{8}$ are the classical example of non-isomorphic groups with isomorphic complex representation rings / same character table data in terms of dimensions, but their group algebras are not isomorphic.
- **Proposed fix:** Replace with: "一方、$k[G]$ 加群の圏だけ（テンソル積を忘れたもの）からは $G$ は一般に復元できない。例えば $D_{4}$ と $Q_{8}$ は同型でない群だが、複素表現の次数の多重集合はともに $\{1,1,1,1,2\}$ で一致する（\ref{mod:group-algebra-structure}）。ただし両者の複素群環は代数として同型ではない（$\mathbb{C}[G]\cong\mathbb{C}[H]$ ならば有限群 $G,H$ は同型）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Tannaka–Krein attribution and 'stronger than Morita equivalence' claim
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says that knowing the tensor category of representations recovers $G$ ('淡中＝クラインの双対性'), and parenthetically claims this is 'stronger information than Morita equivalence' (森田同値より強い情報). This is imprecise: Morita equivalence of $k[G]$-mod and $k[H]$-mod is a statement about the module categories, and Tannaka–Krein reconstruction recovers $G$ from the tensor category, which is indeed more data than the plain module category. However, the phrase 'stronger than Morita equivalence' is misleading because Morita equivalence is an equivalence of module categories, not a comparison of the amount of information in the tensor structure; the correct contrast is that the module category alone (without tensor structure) does not determine $G$ up to isomorphism, whereas the tensor category does. Also the attribution '淡中＝クライン' (Tannaka–Krein) is standard and acceptable, but the claim that the module category alone cannot recover $G$ is only illustrated by the (incorrect) $D_{4}/Q_{8}$ example above.
- **Proposed fix:** Rewrite: "表現の圏にテンソル積の構造まで込めて考えれば $G$ が復元できる（淡中＝クラインの双対性）。一方、テンソル積を忘れて $k[G]$ 加群の圏（あるいは森田同値類）だけを見ると $G$ は一般に復元できない。"
- **Reported:** 2026-10-28 (10fede1)
