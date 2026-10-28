# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/07-ext-injective.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/07-ext-injective.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page's main theorem (Ext balance) is essentially correct in strategy, but the n=1 step and the induction step gloss over the compatibility of the connecting maps between the projective-resolution and injective-resolution long exact sequences, which is the crux of the argument; these should be made explicit. The corollary and the problems are correct. The supplement contains a slightly imprecise statement about hereditary rings / subgroups of free abelian groups and a loose heuristic description of Ext; these are minor but worth correcting. No issues with citations to other pages were found: ha:ext-vanish-injective, ha:ext-long-exact, ha:ext-basic.2, ha:ext-z, ha:injective-divisible, ha:embed-divisible, ha:ext-balance, ha:ext-projective, ha:tor-balanced, ha:page-delta-functors all appear to be used consistently with their titles.

## Issues

### ISSUE-0001 [Open] n=1 step: the two connecting maps are not shown to agree
- **Category:** Logical gap
- **Location:** ha:ext-balance / proof, Step n=1
- **Detail:** In the n=1 step the proof asserts that the left maps of the two exact sequences coincide with Hom(a,E)→Hom(a,C) 'through the 0-th isomorphism', and concludes Ext^1(a,b) ≅ Coker ≅ Ext^1_inj(a,b). But the two sequences are different: the projective-side sequence is Hom(a,E)→Hom(a,C)→Ext^1(a,b)→0 (the map Hom(a,E)→Hom(a,C) is induced by E→C), while the injective-side sequence comes from the long exact sequence of R^n Hom(a,-) applied to 0→b→E→C→0, whose connecting map is δ: Hom(a,C)→Ext^1_inj(a,b). The proof never verifies that the two connecting maps δ (one from the projective-resolution long exact sequence, one from the injective-resolution long exact sequence) agree, nor that the identification of the two Hom(a,C) is compatible. Without this, the conclusion Ext^1(a,b) ≅ Ext^1_inj(a,b) does not follow from the displayed sequences alone. This is the essential content of the n=1 case and is skipped.
- **Proposed fix:** Add the missing argument: both Ext^1(a,b) and Ext^1_inj(a,b) are computed as the cokernel of the same map Hom(a,E)→Hom(a,C). For the projective side this is the standard dimension-shifting identification Ext^1(a,b) ≅ Coker(Hom(a,E)→Hom(a,C)) coming from the long exact sequence of 0→b→E→C→0 and Ext^1(a,E)=0. For the injective side, Ext^1_inj(a,b) = H^1(Hom(a,I)) where I is the injective resolution 0→b→E→C→0 (length 1 since C is a quotient of an injective, hence injective in this step—or use the long exact sequence of R^n Hom(a,-)), giving Ext^1_inj(a,b) ≅ Coker(Hom(a,E)→Hom(a,C)) with the same map. Hence the two cokernels coincide.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Injective-side long exact sequence requires C to have an injective resolution of the same shape; the vanishing Ext^n_inj(a,E)=0 for n≥1 is asserted but the identification of the connecting maps is not justified
- **Category:** Logical gap
- **Location:** ha:ext-balance / proof, '次元ずらしの列' and n→n+1
- **Detail:** The proof states that 'for the injective-resolution Ext the same shaped exact sequence holds' using Ext^n_inj(a,E)=0 for n≥1. This is fine for E injective (E itself is an injective resolution of length 0). However, the induction step n→n+1 uses Ext^n(a,C) ≅ Ext^n_inj(a,C) ≅ Ext^{n+1}_inj(a,b), which requires that the connecting map δ: Ext^n_inj(a,C)→Ext^{n+1}_inj(a,b) be an isomorphism. This is true because Ext^n_inj(a,E)=0, but the proof must also confirm that the boundary map in the injective-resolution long exact sequence is the one induced by the chosen injective resolution 0→b→E→C→0, i.e. that C's injective resolution can be taken as I^{≥1} of b's resolution. This compatibility (that the long exact sequence used is the one for the specific short exact sequence) is asserted, not verified.
- **Proposed fix:** State explicitly: take the injective resolution of b as 0→b→E→I^1→I^2→…; then 0→C→I^1→I^2→… is an injective resolution of C, so the long exact sequence of R^n Hom(a,-) for 0→b→E→C→0 is the one obtained from the short exact sequence of complexes 0→Hom(a,I_b)→Hom(a,I_E)→Hom(a,I_C)→0 (where I_E is concentrated in degree 0). Since Hom(a,I_E) has cohomology only in degree 0, the connecting maps δ: Ext^n_inj(a,C)→Ext^{n+1}_inj(a,b) are isomorphisms for n≥1, giving the displayed sequence.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that Ext^n over Z vanishes for n≥2 'follows from subgroups of free abelian groups being free' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, '似た定理'
- **Detail:** The supplement says that the vanishing of Ext^n_Z (n≥2) 'is a manifestation of Z having global dimension 1, and on the projective-resolution side the same conclusion is obtained from the fact that subgroups of free abelian groups are free.' The fact that subgroups of free abelian groups are free gives that Z has global dimension ≤1 (projective dimension of every module ≤1), which yields Ext^n(a,b)=0 for n≥2 via projective resolutions. This is correct in substance, but the phrasing 'the same conclusion is obtained from subgroups of free abelian groups being free' is slightly overstated: one needs the stronger statement that every abelian group embeds into a free... actually every subgroup of a free abelian group is free, so every module has a projective resolution of length 1 only if it embeds into a free module, which is false for Z/n. The correct statement is that every submodule of a free module is free (hereditary ring), giving projective dimension ≤1 for modules that are submodules of free modules, and more generally gl.dim Z = 1. The supplement's phrasing conflates these.
- **Proposed fix:** Replace with: 'Z is a hereditary ring: every submodule of a free abelian group is free, equivalently every ideal is projective, which gives gl.dim Z ≤ 1; combined with Ext^1_Z(Z/n,Z) ≅ Z/n ≠ 0 this gives gl.dim Z = 1, hence Ext^n_Z = 0 for n ≥ 2.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] The 'bridge length' analogy and the claim that 'on injective E both measurements vanish in higher degree' is loose but the substantive claim about dimension shifting is fine; however the statement that Ext(a,b) is 'the collection of maps from a to b with shifts' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, '高い視点から'
- **Detail:** The supplement describes Ext(a,b) as 'the collection of maps from a to b including shifts (ずれを込めた集まり)'. This is a heuristic; Ext^1 classifies extensions, not 'shifted maps'. As a side comment it is not literally a mathematical claim, but it could mislead. The rest of the paragraph (dimension shifting moves b into C=E/b, and on injective E higher values vanish in both measurements) is correct.
- **Proposed fix:** Rephrase: 'Ext^n(a,b) measures the obstruction to extending maps, or equivalently classes of n-fold extensions; Ext^1 classifies short exact sequences 0→b→?→a→0.' Keep the dimension-shifting description as is.
- **Reported:** 2026-10-28 (10fede1)
