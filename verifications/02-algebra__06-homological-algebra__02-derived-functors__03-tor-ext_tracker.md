# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/03-tor-ext.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/03-tor-ext.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong direction cited for the long exact sequence in the first variable
- **Category:** Improper link
- **Location:** ha:ext-projective / proof (⇐)
- **Detail:** The proof applies \ref{ha:ext-long-exact.1} to the short exact sequence 0→K→P→a→0. But \ref{ha:ext-long-exact.1} is the long exact sequence in the *second* variable (short exact 0→b'→b→b''→0 with fixed a). The sequence needed here, with the short exact sequence in the first variable and fixed b, is \ref{ha:ext-long-exact.2}. The displayed exact sequence Hom(a,P)→Hom(a,a)→Ext¹(a,K) is indeed the one from part 2, not part 1.
- **Proposed fix:** Replace \ref{ha:ext-long-exact.1} with \ref{ha:ext-long-exact.2}: apply the long exact sequence in the first variable (part 2) to 0→K→P→a→0 with the fixed module b = K.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The proof (⇐) still cites \ref{ha:ext-long-exact.1}, which is the long exact sequence in the second variable (short exact 0→b'→b→b''→0 with fixed a). The sequence needed for 0→K→P→a→0 with fixed b is part 2 (\ref{ha:ext-long-exact.2}). The displayed sequence Hom(a,P)→Hom(a,a)→Ext¹(a,K) is indeed from part 2, so the citation is wrong.

### ISSUE-0002 [Open] Problem cites the second-variable long exact sequence for a first-variable sequence
- **Category:** Improper link
- **Location:** ha:prob-te-ext-z-z / problem statement and solution
- **Detail:** The problem asks to write down the sequence from \ref{ha:ext-long-exact.2} for the short exact sequence 0→ℤ→ℤ→ℤ/n→0 with fixed second variable ℤ. But \ref{ha:ext-long-exact.2} is the long exact sequence in the *first* variable (short exact 0→a'→a→a''→0 with fixed b). The sequence displayed (0→Hom(ℤ/n,ℤ)→Hom(ℤ,ℤ)→Hom(ℤ,ℤ)→Ext¹(ℤ/n,ℤ)→Ext¹(ℤ,ℤ)=0) is the one from part 1 (second variable), not part 2. So the citation is to the wrong part.
- **Proposed fix:** Replace \ref{ha:ext-long-exact.2} with \ref{ha:ext-long-exact.1} in the problem statement (the sequence in the second variable for 0→ℤ→ℤ→ℤ/n→0 with fixed a=ℤ/n).
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0003 [Open] Claim that every abelian group has a length-1 projective resolution is false
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states: 'ℤ 上では、自由アーベル群の部分群が自由であることから、どのアーベル群も長さ 1 の射影分解をもち、k≥2 で Ext^k_ℤ=0 となることが知られている。' This is false: only groups of projective dimension ≤1 (i.e. subgroups of free abelian groups, which are free) have length-1 projective resolutions. Groups like ℤ/4 have no length-1 projective resolution (a length-1 resolution 0→P₁→P₀→ℤ/4→0 would make ℤ/4 a quotient of a free group by a free subgroup, forcing ℤ/4 to be free, impossible). Indeed Ext²_ℤ(ℤ/4, B) need not vanish in general; the vanishing Ext^k_ℤ=0 for k≥2 holds only for groups of projective dimension ≤1, not for all abelian groups. (The specific computation Ext^k_ℤ(ℤ/n,B)=0 for k≥2 is correct, but the general claim is not.)
- **Proposed fix:** ℤ 上では、自由アーベル群の部分群は自由であるから、自由アーベル群の商として表されるアーベル群（たとえば ℤ/n や有限生成アーベル群）は長さ 1 の射影分解をもち、そのような群 A については k≥2 で Ext^k_ℤ(A,B)=0 となる。一般のアーベル群が長さ 1 の射影分解をもつわけではない。
- **Reported:** 2026-10-28 (048145a)
