# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/08-simplicial-singular.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/08-simplicial-singular.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are essentially correct: the identity-simplex generator lemma, the skeleton induction via the five lemma, and the relative version are sound, and the corollaries on topological invariance and Euler's formula are properly justified. The genuine problems lie in the supplement and hypcheck side remarks: the claim that the comparison is a chain homotopy equivalence (false for quasi-isomorphisms of free chain complexes), the imprecise identification with the adjunction unit, the overstated 'almost no subdivision' claim, and the terse infinite-complex remark. No issues were found in the proofs themselves.

## Issues

### ISSUE-0001 [Open] Chain homotopy equivalence claim is false
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement claims that \ref{at:simplicial-singular-iso} asserts that the simplicial chain complex and the singular chain complex are chain homotopy equivalent, justifying this by 'a homology isomorphism between free chain complexes is a chain homotopy equivalence'. This is false in general: a quasi-isomorphism between bounded-below free chain complexes need not be a chain homotopy equivalence (e.g. the map from a free resolution of \mathbb{Z}/2 to the complex concentrated in degree 0 is a quasi-isomorphism but not a homotopy equivalence). The theorem only gives homology isomorphisms, not a chain homotopy equivalence of C(X) and S(|X|).
- **Proposed fix:** Replace with: '\ref{at:simplicial-singular-iso} shows that the chain map \theta\colon C(X)\to S(|X|) induces isomorphisms on homology. It does not in general assert that C(X) and S(|X|) are chain homotopy equivalent; only the induced homology groups agree.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Adjunction unit claim is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The text says the result 'corresponds to the unit X\to\operatorname{Sing}|X| of the adjunction between realization and Sing giving a weak equivalence at the level of chain complexes'. The unit of the adjunction is a map of \Delta-complexes X\to\operatorname{Sing}|X|, not a chain map between C(X) and S(|X|); the comparison map \theta is not literally this unit. The statement conflates two different constructions and is not justified.
- **Proposed fix:** Replace with: 'Categorically, the comparison map \theta is related to (but not identical with) the unit X\to\operatorname{Sing}|X| of the adjunction between realization and the singular \Delta-complex functor; \theta induces homology isomorphisms, which is the precise content of the theorem.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Overstated claim about avoiding subdivision
- **Category:** Supplement/remark error
- **Location:** supplement / 歴史と比較
- **Detail:** The claim that the singular-homology proof 'requires almost no combinatorial subdivision argument (barycentric subdivision was used only once, on singular chains, in the proof of excision)' is overstated: the proof of excision itself relies on barycentric subdivision of singular chains iterated to arbitrary depth (the subdivision operator and its chain homotopy to the identity), which is a substantial combinatorial argument, not a single use.
- **Proposed fix:** Replace with: 'The singular-homology proof uses only homotopy invariance and excision; the combinatorial subdivision work is hidden inside the proof of excision, where iterated barycentric subdivision of singular chains is essential.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Hypcheck claim on infinite Delta-complexes
- **Category:** Supplement/remark error
- **Location:** hypcheck
- **Detail:** The hypcheck states that the result also holds for infinite \Delta-complexes, citing compact-support arguments and \ref{at:cw-finite-subcomplex}. This is true but the parenthetical is imprecise: the comparison for infinite X requires a direct limit/colimit argument over finite subcomplexes (homology commutes with filtered colimits of inclusions of subcomplexes), not merely 'compact support'. As stated it is a sketch, but the claim that compact subsets meet only finitely many cells alone does not establish the homology isomorphism without the colimit step.
- **Proposed fix:** Replace with: 'For infinite \Delta-complexes the result also holds: write X as the filtered union of its finite subcomplexes; homology commutes with this filtered colimit, and each finite stage is handled above (compact subsets of |X| meet only finitely many cells, \ref{at:cw-finite-subcomplex}).'
- **Reported:** 2026-10-28 (8ccef3d)
