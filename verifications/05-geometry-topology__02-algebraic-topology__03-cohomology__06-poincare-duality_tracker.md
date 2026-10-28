# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/06-poincare-duality.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/06-poincare-duality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (cap product, compactly supported cohomology, duality map, Mayer-Vietoris compatibility, and the induction proof of Poincare duality) is logically sound, and the applications (nondegeneracy, odd-dimensional Euler characteristic, projective space cohomology rings) are correctly argued. The genuine problem is in the supplement's '交叉形式' paragraph: it asserts the intersection form on a closed oriented $4m$-manifold is symmetric, which fails for $m$ odd (dimensions $4,12,\dots$), where it is alternating. The Borsuk-Ulam sketch and the $4m+2$ remark are acceptable.

## Issues

### ISSUE-0001 [Open] Intersection form symmetry claim for 4m-manifolds
- **Category:** Supplement/remark error
- **Location:** supplement (交叉形式)
- **Detail:** The supplement states that for an oriented closed 4m-manifold the pairing on $H^{2m}/\text{torsion}$ is symmetric. This is only true when $2m$ is even, i.e. $m$ even (dimension $8,16,\dots$). For $m$ odd (dimension $4m$ with $2m\equiv 2 \pmod 4$, e.g. dimension 4, 12), the cup product on $H^{2m}$ is graded-commutative with $a\cup b = (-1)^{(2m)^2}b\cup a = -b\cup a$, so the intersection form is alternating (skew-symmetric), not symmetric. The statement as written is false for $m$ odd.
- **Proposed fix:** For an oriented closed $4m$-manifold, the pairing $\langle a\cup b,[M]\rangle$ on $H^{2m}(M;\mathbb{Z})/\text{torsion}$ is symmetric when $m$ is even and alternating (skew-symmetric) when $m$ is odd; in the symmetric case it is unimodular with signature a cobordism invariant.
- **Reported:** 2026-10-28 (8ccef3d)
