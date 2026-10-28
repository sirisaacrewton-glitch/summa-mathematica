# Verification tracker: `02-algebra/02-group-theory/01-groups/02-order-cyclic.html`

<!-- source: 02-algebra/02-group-theory/01-groups/02-order-cyclic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is the supplement's claim that a finite group with exactly one subgroup of each order dividing |G| must be cyclic, which is false (Q_8 is a counterexample); the correct statement uses 'at most one subgroup of each order'. Other supplements and facts checked out.

## Issues

### ISSUE-0001 [Open] Uniqueness of subgroup of each order does not characterize cyclic groups
- **Category:** Supplement/remark error
- **Location:** grp:subgroups-cyclic supplement
- **Detail:** The supplement claims that a finite group having exactly one subgroup of each order dividing |G| is necessarily cyclic. This is false: the quaternion group Q_8 has a unique subgroup of each order (1,2,4,8) yet is not cyclic. The correct characterization is that a finite group is cyclic iff for every m it has at most one subgroup of order m (equivalently, the subgroup lattice is distributive / the group is cyclic iff it has a unique subgroup of each order AND is abelian, etc.).
- **Proposed fix:** Replace with: 'A finite group is cyclic if and only if for every positive integer m it has at most one subgroup of order m (equivalently, for each divisor of |G| there is at most one subgroup of that order). The quaternion group Q_8 shows that having exactly one subgroup of each order dividing |G| is not sufficient for cyclicity.'
- **Reported:** 2026-10-28 (8ccef3d)
