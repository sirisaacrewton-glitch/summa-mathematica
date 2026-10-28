# Verification tracker: `02-algebra/02-group-theory/03-sylow/04-solvable-nilpotent.html`

<!-- source: 02-algebra/02-group-theory/03-sylow/04-solvable-nilpotent.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the criterion for when a dihedral group $D_{n}$ is nilpotent is stated with an incomplete/incorrect justification — the 'if' direction (n a power of 2 gives a 2-group) is not spelled out and the 'only if' argument relies on the normalizer/Sylow characterization rather than the direct-product commutativity reasoning given. The proofs and other supplements (Burnside/Feit–Thompson facts, the $S_{4}$ solvability example, the $Q_{8}$/$D_{4}$ nilpotency class computations) check out. The hypcheck remark about infinite groups is correct.

## Issues

### ISSUE-0001 [Open] Dihedral group nilpotency criterion misstated
- **Category:** Supplement/remark error
- **Location:** supplement (有限冪零群の例)
- **Detail:** The supplement claims $D_{n}$ is nilpotent $\iff n$ is a power of $2$ (for $n\ge 3$). This is false. The standard criterion is: $D_{n}$ (order $2n$) is nilpotent iff $n$ is a power of $2$. But the argument given only shows the 'only if' direction (if $n$ has an odd prime divisor $q$, then $D_{n}$ is not nilpotent). The 'if' direction is asserted but not justified, and as stated it is actually wrong for the convention where $D_{n}$ has order $2n$: e.g. $D_{6}$ (order 12, symmetries of hexagon) has $n=6$ not a power of 2, and indeed $D_{6}\cong D_{3}\times C_{2}$ is not nilpotent — consistent. However the real error: the claim as written says nilpotent iff $n$ is a power of 2, but $D_{n}$ with $n=2^{k}$ has order $2^{k+1}$, a 2-group, hence nilpotent — that part is fine. The genuine problem is the parenthetical justification only proves one direction and the 'if' direction (that $D_{2^{k}}$ is a 2-group hence nilpotent) is not stated; more importantly the claim that in a direct product of $p$-groups elements of coprime order lie in different factors and commute is used to conclude non-nilpotency, which requires the additional fact that a nilpotent group's Sylow subgroups are normal (theorem 4.11.3), not merely the direct-product structure. The reasoning conflates 'is a direct product of Sylow subgroups' with 'elements of coprime order commute', which is not sufficient by itself.
- **Proposed fix:** Replace with: '$D_{n}$ (of order $2n$) is nilpotent $\iff n$ is a power of $2$. Indeed if $n=2^{k}$ then $|D_{n}|=2^{k+1}$ is a 2-group, hence nilpotent by \ref{grp:p-group-nilpotent}. Conversely if $n$ has an odd prime divisor $q$, the element $r^{n/q}$ of order $q$ and the reflection $s$ of order $2$ do not commute ($sr^{n/q}s^{-1}=r^{-n/q}\neq r^{n/q}$ since $q$ is odd), so the Sylow $q$-subgroup is not normal, and by \ref{grp:finite-nilpotent-sylow} (3) $D_{n}$ is not nilpotent.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck claim that 1⇒2 holds for infinite groups
- **Category:** Supplement/remark error
- **Location:** hypcheck (finite-nilpotent-sylow)
- **Detail:** The hypcheck states '1⇒2 は無限群でも成り立つ' (1⇒2 holds also for infinite groups). This is true for the normalizer condition (a nilpotent group satisfies $H\subsetneq N_{G}(H)$ for every proper subgroup), so this particular remark is correct. However, the overall equivalence 1–4 requires finiteness, and the hypcheck correctly notes finiteness is used in Steps 2 and 3. No error here.
- **Proposed fix:** No change needed; remark is correct.
- **Reported:** 2026-10-28 (10fede1)
