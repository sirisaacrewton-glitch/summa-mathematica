# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/08-simplicial-singular.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/08-simplicial-singular.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the corollaries and the problems are logically sound; the identity-simplex lemma and the five-lemma induction are correctly structured, and the hypcheck's remark on infinite Δ-complexes is acceptable. The only genuine problems are in the '高い視点' supplement: the claim that the two chain complexes are chain homotopy equivalent (rather than quasi-isomorphic) is too strong and its parenthetical justification is false in general, and the description via the adjunction unit is imprecise. Both are correctable by rewording.

## Issues

### ISSUE-0001 [Open] Chain homotopy equivalence claim is too strong
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement claims that \ref{at:simplicial-singular-iso} asserts that the simplicial chain complex and the singular chain complex are chain homotopy equivalent. The theorem only gives homology isomorphisms (and relative isomorphisms). A homology isomorphism between chain complexes of free abelian groups is not in general a chain homotopy equivalence; it is only a quasi-isomorphism. The parenthetical justification 'a homology isomorphism between free chain complexes is a chain homotopy equivalence' is false in general (e.g. a quasi-isomorphism between free complexes need not be a homotopy equivalence unless the complexes are, say, bounded below and projective with extra conditions, or one invokes a specific argument). The correct statement is that θ induces homology isomorphisms, i.e. a quasi-isomorphism.
- **Proposed fix:** Replace with: '\ref{at:simplicial-singular-iso} says that the chain map θ: C(X) → S(|X|) induces isomorphisms on homology, i.e. it is a quasi-isomorphism between the combinatorial chain complex and the (huge) singular chain complex. It does not by itself assert that the two complexes are chain homotopy equivalent.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Adjunction/unit description is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The text says the result 'corresponds to the unit X → Sing|X| of the adjunction between realization |·| and Sing giving a weak equivalence at the level of chain complexes'. The unit of the adjunction is a map of Δ-complexes X → Sing|X|, not a chain map C(X) → S(|X|); the chain map θ is induced by the characteristic maps, and identifying it with the unit requires the Eilenberg–Zilber/adjunction comparison, which is not stated. As written the identification is imprecise/overstated.
- **Proposed fix:** Replace with: 'Categorically, the characteristic-map chain map θ is the chain-level manifestation of the unit X → Sing|X| of the adjunction between realization and Sing; the theorem says this unit induces isomorphisms on homology (a quasi-isomorphism).'
- **Reported:** 2026-10-28 (10fede1)
