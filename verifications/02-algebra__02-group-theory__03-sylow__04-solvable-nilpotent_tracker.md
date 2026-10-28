# Verification tracker: `02-algebra/02-group-theory/03-sylow/04-solvable-nilpotent.html`

<!-- source: 02-algebra/02-group-theory/03-sylow/04-solvable-nilpotent.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is in good shape: the definitions, the equivalence theorem for solvability, the closure theorem, the central-series equivalence, the finite nilpotent characterization and the problems are all correctly argued, and the cited labels match their stated uses. The only genuine issue found is in the supplement: the characterization '$D_{n}$ nilpotent iff $n$ is a power of 2' is correct, but the justification as written only explicitly excludes odd prime divisors of $n$ and does not spell out the even non-power-of-2 case, so the 'only if' direction is stated incompletely.

## Issues

### ISSUE-0001 [Open] D_n nilpotent iff n is a power of 2: the argument for odd n is incomplete
- **Category:** Supplement/remark error
- **Location:** supplement / 有限冪零群の例
- **Detail:** The supplement claims $D_{n}$ is nilpotent iff $n$ is a power of 2 ($n\ge 3$). The 'if' direction is fine (a 2-group is nilpotent). For the 'only if' direction the text argues: if an odd prime $q$ divides $n$, then $r^{n/q}$ (order $q$) and $s$ (order 2) do not commute, and in a direct product of $p$-groups elements of coprime order lie in different factors and hence commute. This reasoning is correct as far as it goes, but it only rules out odd prime divisors of $n$; it does not address the case where $n$ is even but not a power of 2, i.e. $n=2^{a}m$ with $m>1$ odd. In that case $r^{n/q}$ and $s$ still do not commute, so the same argument does apply — but the text never states that the argument covers all $n$ that are not powers of 2 (it phrases the condition as 'if an odd prime $q$ divides $n$', which is not the negation of '$n$ is a power of 2'). As written the proof of the 'only if' direction is incomplete for even $n$ with an odd factor.
- **Proposed fix:** Replace the parenthetical with: 'If $n$ is not a power of $2$, then $n$ has an odd prime divisor $q$; the element $r^{n/q}$ has order $q$ and $s$ has order $2$, and $sr^{n/q}s^{-1}=r^{-n/q}\neq r^{n/q}$ since $q$ is odd, so they do not commute. In a direct product of $p$-groups, elements of coprime order lie in different direct factors and therefore commute; hence $D_{n}$ is not nilpotent.'
- **Reported:** 2026-10-28 (8ccef3d)
