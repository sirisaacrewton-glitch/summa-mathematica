# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/03-tor-ext.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/03-tor-ext.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong direction cited for Ext long exact sequence in first variable
- **Category:** Improper link
- **Location:** ha:ext-projective / proof (⇐)
- **Detail:** The proof applies \ref{ha:ext-long-exact.1} to the short exact sequence 0→K→P→a→0 with first variable a. But ha:ext-long-exact.1 is the long exact sequence in the SECOND variable (short exact sequence 0→b'→b→b''→0 with fixed a). The sequence needed here (varying the first variable, with the short exact sequence 0→K→P→a→0) is ha:ext-long-exact.2. The cited item does not say what it is used for.
- **Proposed fix:** Replace the citation with \ref{ha:ext-long-exact.2}: apply the long exact sequence in the first variable to 0→K→P→a→0 with coefficient b=a, giving the exact sequence Hom(a,P)→Hom(a,a)→Ext^{1}(a,K)=0.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Tor_1 over Z misstated as n-torsion subgroup
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims Tor_1^Z(Z/n,B) ≅ {b∈B : nb=0}. This is false: the correct value is Tor_1^Z(Z/n,B) ≅ B/nB (the n-torsion subgroup {b : nb=0} is actually Ext^1_Z(Z/n,B), as stated in ha:ext-z). For example with B=Z, Tor_1(Z/n,Z)≅Z/n while {b∈Z:nb=0}=0.
- **Proposed fix:** Tor_1^{\mathbb{Z}}(\mathbb{Z}/n,B)\cong B/nB (and Tor_0^{\mathbb{Z}}(\mathbb{Z}/n,B)\cong \mathbb{Z}/n\otimes B, Tor_k=0 for k≥2).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Every abelian group has a length-1 projective resolution is false
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that because subgroups of free abelian groups are free, every abelian group has a projective resolution of length 1, hence Ext^k_Z=0 for k≥2. This is false: a length-1 projective resolution 0→P_1→P_0→A→0 requires A to have projective (free) dimension ≤1, i.e. A to be a subgroup of a free group. Groups like Z/2 (or any group of projective dimension 2, e.g. Z/2 over a suitable setting) do not admit such a resolution; indeed Z/n has the length-1 resolution 0→Z→Z→Z/n→0, but a general abelian group such as a non-free subgroup-quotient need not. The vanishing Ext^k_Z=0 for k≥2 is true (global dimension of Z is 1), but the stated reason (every abelian group has a length-1 projective resolution) is wrong.
- **Proposed fix:** Since subgroups of free abelian groups are free, every abelian group A admits a presentation 0→K→F→A→0 with F free and K⊂F free, i.e. a projective resolution of length 1; hence Ext^{k}_{\mathbb{Z}}=0 for k≥2 (the global dimension of \mathbb{Z} is 1).
- **Reported:** 2026-10-28 (10fede1)
