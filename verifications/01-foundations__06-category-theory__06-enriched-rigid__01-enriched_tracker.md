# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/01-enriched.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/01-enriched.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] π₀ on CGHaus does not preserve products in general
- **Category:** Supplement/remark error
- **Location:** example 基礎の変換の例, item 3
- **Detail:** The claim that π₀ preserves products because 'a path in X×Y is a path in each component' only gives a map π₀(X×Y)→π₀(X)×π₀(Y); it is not generally a bijection. For general compactly generated Hausdorff spaces, path components of a product need not be products of path components (e.g. the topologist's sine curve phenomenon: a point in the product of two path-connected spaces can fail to be joined to a base point by a path, since a path in the product would give compatible paths in each factor). So π₀: CGHaus → Set is not product-preserving in general, and the derived 'homotopy category' construction is not justified as stated.
- **Proposed fix:** Replace with: 'π₀: CGHaus → Set is only lax monoidal in general (there is always a map π₀(X×Y) → π₀(X)×π₀(Y), but it need not be bijective). It is strong monoidal when restricted to, e.g., locally contractible spaces or CW complexes, where path components of a product are products of path components. In that setting the change of base along π₀ yields the homotopy category.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Self-enrichment of V need not have underlying category V without closedness/extra hypotheses
- **Category:** Supplement/remark error
- **Location:** proposition 台の圏 (cat:underlying-category), final sentence and Step 4
- **Detail:** The statement 'the underlying category of the self-enrichment of V is V itself' relies on V(I,[a,b]) ≅ V(a,b), which requires the closed structure and the coherence of the internal hom with the monoidal structure. This is fine for a symmetric monoidal closed V, but the hypcheck claims the whole page (including the underlying-category proposition) works for non-symmetric monoidal V; the self-enrichment statement then needs the closed structure and the symmetry/braiding to identify V(I,[a,b]) with V(a,b). As stated without the closed hypothesis in the proposition itself, the final sentence is not justified by the cited cat:self-enrichment alone in the non-symmetric case.
- **Proposed fix:** Add the hypothesis explicitly: 'Assume V is symmetric monoidal closed. Then the underlying category of the self-enrichment of V (cat:self-enrichment) is V itself, via V(I,[a,b]) ≅ V(a,b).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck overstates that all constructions work for non-symmetric V
- **Category:** Supplement/remark error
- **Location:** hypcheck, second bullet (対称性 γ)
- **Detail:** The hypcheck says 'enriched categories, enriched functors, the underlying category, and change of base can be defined for non-symmetric monoidal V and the proofs go through unchanged (so do V-natural transformations)'. The underlying-category proposition's final claim about self-enrichment uses the closed structure and the identification V(I,[a,b]) ≅ V(a,b), which in the non-symmetric case requires a braiding or at least the closed structure plus coherence; and the tensor product of V-categories (item 2 of cat:enriched-opposite-tensor) genuinely needs the symmetry. The blanket claim is thus imprecise.
- **Proposed fix:** Restrict the claim: 'Enriched categories, enriched functors, V-natural transformations, the underlying category, and change of base are defined for any monoidal V (not necessarily symmetric) and the proofs go through. The opposite category and the tensor product of V-categories, and the identification of the underlying category of the self-enrichment with V, use the symmetry (and closedness).'
- **Reported:** 2026-10-28 (8ccef3d)
