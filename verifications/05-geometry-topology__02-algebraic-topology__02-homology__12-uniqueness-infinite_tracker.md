# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/12-uniqueness-infinite.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/12-uniqueness-infinite.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (excision for subcomplexes, Mayer-Vietoris for a general homology theory, the telescope lemma, Milnor's additivity lemma, cellular computation for infinite CW complexes, and the uniqueness theorem) is logically sound: the exact sequences, the injectivity of Φ', the coker computation, and the naturality arguments check out, and the cited labels match their stated uses. The genuine problems are confined to the supplement: the claim that for ordinary cohomology the lim^1 term always vanishes (and hence uniqueness holds) is overstated, since this requires a Mittag-Leffler/vanishing condition that does not follow from the axioms alone; and the description of where additivity is used is imprecise.

## Issues

### ISSUE-0001 [Open] Cohomology telescope: lim^1 need not vanish for ordinary cohomology
- **Category:** Supplement/remark error
- **Location:** supplement (コホモロジーでは)
- **Detail:** The supplement claims that for an ordinary cohomology theory the groups h^{k-1}(X^{i}) stabilize for large i, so lim^1 vanishes and uniqueness holds. This is false in general. For X = CP^∞ (or any infinite-dimensional CW complex with cells in unboundedly many dimensions), h^{k-1}(X^{i}) = 0 for i < k-1 and equals h^{k-1}(X) for i ≥ k-1, so the tower is constant from some point on and lim^1 does vanish. But for X = an infinite wedge ⋁_n S^n (or a countable wedge of spheres of increasing dimension), the tower h^{k-1}(X^{i}) is not eventually constant in a way that guarantees vanishing; more importantly, for a general ordinary cohomology theory the Milnor exact sequence's lim^1 term can be nonzero, e.g. for X = ⋁_{n} S^{n} with k chosen so that infinitely many spheres contribute, the inverse system need not satisfy the Mittag-Leffler condition. The blanket assertion 'stabilizes so lim^1 vanishes, uniqueness holds the same way' is overstated: uniqueness for cohomology on all CW complexes requires the Mittag-Leffler/vanishing condition, which does not follow merely from being an ordinary cohomology theory.
- **Proposed fix:** Replace with: 'For an ordinary cohomology theory the Milnor exact sequence reads $$0\to\varprojlim{}^{1}h^{k-1}(X^{i})\to h^{k}(X)\to\varprojlim h^{k}(X^{i})\to0.$$ The lim^1 term vanishes whenever the inverse system $\{h^{k-1}(X^{i})\}_{i}$ satisfies the Mittag-Leffler condition (e.g. when it is eventually constant, as happens for finite-dimensional $X$ or for $X=\mathbb{R}P^{\infty}$, $\mathbb{C}P^{\infty}$). In general lim^1 need not vanish, so uniqueness for cohomology on arbitrary CW complexes requires this additional condition and does not follow from the axioms alone.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Additivity weakened to finite sums: claim about this page's use is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (加法性の役割)
- **Detail:** The supplement says 'this page's argument used additivity only for the disjoint unions of infinitely many cells and of infinitely many T_i.' But additivity is also used in Step 1 of Milnor's lemma to identify h_k(Y^j,Y^j-1) with the direct sum over all cells, and in the excision lemma Step 1 for the case C=∅ (K=A⊔B). More importantly the statement 'if additivity is weakened to finite disjoint unions, uniqueness on finite CW pairs still holds but the infinite conclusion is not guaranteed' is correct, yet the accompanying sentence 'the argument used additivity only for ...' understates that the wedge/additivity for countably infinite wedges is exactly what fails. This is a minor imprecision rather than a falsehood; the main substantive error is the cohomology claim above.
- **Proposed fix:** Rephrase: 'In this page additivity is used for the countably infinite disjoint unions appearing in Step 1 (the cells of a skeleton) and Step 2 (the T_i), and in the C=∅ case of the excision lemma. With only finite additivity these steps fail, and indeed uniqueness on infinite CW complexes can fail.'
- **Reported:** 2026-10-28 (8ccef3d)
