# Verification tracker: `02-algebra/02-group-theory/02-group-actions/04-symmetric-groups.html`

<!-- source: 02-algebra/02-group-theory/02-group-actions/04-symmetric-groups.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (cycle decomposition, order/type, conjugacy classes, class-size count, generators) is logically sound and its citations match the label table. The genuine problems are in side comments: the hypcheck criterion for when a transposition and an n-cycle generate S_n is mathematically wrong (a gcd condition instead of the adjacency condition), and the S_4 class-equation example has its summands in the wrong order relative to the listed class sizes.

## Issues

### ISSUE-0001 [Open] Incorrect claim about generating S_n by a transposition and an n-cycle
- **Category:** Supplement/remark error
- **Location:** grp:sn-generators / hypcheck
- **Detail:** The hypcheck states that a transposition (a b) and an n-cycle c generate S_n exactly when there is k with c^k(a)=b and gcd(k,n)=1. This is false. For example, in S_4 take (1 2) and c=(1 3 2 4). Here c^3(1)=2, and gcd(3,4)=1, so the stated condition holds, yet these generate only a group of order 8 (a dihedral group), not S_4. The correct criterion is that the transposition must join two points adjacent in the cycle, i.e. b=c(a) or b=c^{-1}(a); equivalently, (a b) and c generate S_n iff b=c^{\pm 1}(a). The stated gcd condition is neither necessary nor sufficient.
- **Proposed fix:** Replace the last sentence with: "A transposition $(a\\ b)$ and an $n$-cycle $c$ generate $S_{n}$ exactly when $b=c(a)$ or $b=c^{-1}(a)$ (i.e. $a,b$ are adjacent in the cycle); if $b=c^{k}(a)$ with $k\\not\\equiv\\pm 1 \\pmod{n}$, the generated group is a proper dihedral subgroup (here we do not prove this)."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Wrong order of the class-equation summands in the S_4 example
- **Category:** Supplement/remark error
- **Location:** grp:cycle-type-count / example item 2
- **Detail:** The example lists the class sizes as 1, 6, 3, 8, 6 (for types (1^4),(2,1,1),(2,2),(3,1),(4)) but then writes the class equation as 24=1+3+6+6+8, which does not match the listed values (the 6 and 3 are swapped). The correct sum is 24=1+6+3+8+6.
- **Proposed fix:** Write the class equation as $24=1+6+3+8+6$.
- **Reported:** 2026-10-28 (8ccef3d)
