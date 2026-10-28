# Verification tracker: `02-algebra/05-field-theory/01-extensions/01-degree.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/01-degree.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the proofs of the prime-field proposition, the tower law, the minimal-polynomial properties, the simple-extension structure theorem, Kronecker's theorem, the degree corollary and both problems are correct, and all citations match their targets. The only genuine issue is a slightly overstated analogy in the supplement between the tower law and the multiplicativity of group index; it is imprecise rather than false, so confidence is medium.

## Issues

### ISSUE-0001 [Open] Tower law analogy with group index is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the tower law is 'very similar to' the multiplicativity of group index $(G:K)=(G:H)(H:K)$ and that 'in Galois theory these two correspond'. The group-index formula $(G:K)=(G:H)(H:K)$ holds for arbitrary subgroups $H\subset K\subset G$ (finite index), but the field tower law $[M:K]=[M:L][L:K]$ is not analogous in general: for a Galois extension $M/K$ with $L$ intermediate, the correspondence is $[M:K]=|\mathrm{Gal}(M/K)|$ and $[L:K]=[\mathrm{Gal}(M/K):\mathrm{Gal}(M/L)]$, so the field degree corresponds to a group *index*, not to the group order, and the 'multiplicativity' being matched is that of indices, which is trivially true for any subgroups. Stated as 'these two correspond' it is misleading: the tower law is not the field-theoretic analogue of the index formula in the naive sense; rather both are instances of multiplicativity of dimensions/indices. As written it overstates a structural analogy.
- **Proposed fix:** Replace with: '塔の公式 $[M:K]=[M:L][L:K]$ は、ガロア拡大 $M/K$ と中間体 $L$ に対し $[M:K]=|\mathrm{Gal}(M/K)|$, $[L:K]=[\mathrm{Gal}(M/K):\mathrm{Gal}(M/L)]$ を通じて、群の指数の乗法性 $(G:H)=(G:K)(K:H)$ に対応する（\ref{fld:page-fundamental-theorem}）。'
- **Reported:** 2026-10-28 (8ccef3d)
