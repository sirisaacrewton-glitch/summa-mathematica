# Verification tracker: `02-algebra/02-group-theory/07-representations/01-representations.html`

<!-- source: 02-algebra/02-group-theory/07-representations/01-representations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine error is in the supplement: the complex group algebras of $D_{4}$ and $Q_{8}$ are stated to be $\mathbb{C}^{4}\times M_{2}(\mathbb{C})$, but they are actually $\mathbb{C}^{4}\times M_{2}(\mathbb{C})$ with five simple components, i.e. $\mathbb{C}\times\mathbb{C}\times\mathbb{C}\times\mathbb{C}\times M_{2}(\mathbb{C})$, dimension 8. The parenthetical dimension list $1,1,1,1,2$ contradicts the displayed formula. All proofs, the Schur lemma applications, the permutation module decomposition, and the hypcheck counterexamples check out.

## Issues

### ISSUE-0001 [Open] D4 and Q8 group algebras are not isomorphic to C^4 × M_2(C)
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that the complex group algebras of $D_{4}$ and $Q_{8}$ are both isomorphic to $\mathbb{C}^{4}\times M_{2}(\mathbb{C})$. This is wrong. Both groups have 5 conjugacy classes (D4: {1}, {r^2}, {r,r^3}, {s,sr^2}, {sr,sr^3}; Q8: {1}, {-1}, {i,-i}, {j,-j}, {k,-k}), hence 5 irreducible representations. The dimensions are 1,1,1,1,2 for both, so $\mathbb{C}[D_{4}]\cong\mathbb{C}[Q_{8}]\cong\mathbb{C}^{4}\times M_{2}(\mathbb{C})$, not $\mathbb{C}^{4}\times M_{2}(\mathbb{C})$ with only 4 factors of $\mathbb{C}$. The stated algebra $\mathbb{C}^{4}\times M_{2}(\mathbb{C})$ has dimension $4+4=8$, but $|D_{4}|=|Q_{8}|=8$ requires dimension 8 with five simple components $1+1+1+1+4=8$. The parenthetical "次数 $1,1,1,1,2$" itself lists five components, contradicting the displayed formula.
- **Proposed fix:** Replace with: "$D_{4}$ と $Q_{8}$ の複素群環はともに $\mathbb{C}\times\mathbb{C}\times\mathbb{C}\times\mathbb{C}\times M_{2}(\mathbb{C})$ と同型である（\ref{mod:group-algebra-structure} と次数 $1,1,1,1,2$）。"
- **Reported:** 2026-10-28 (8ccef3d)
