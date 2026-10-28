# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/02-compactness.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/02-compactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] ω₁ is not sequentially compact
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると / 点列コンパクト性)
- **Detail:** The supplement claims that the ordinal space ω₁ is sequentially compact but not compact. ω₁ is indeed not compact (the cover by initial segments [0,α) has no finite subcover), but it is NOT sequentially compact: a strictly increasing sequence α₀<α₁<... in ω₁ has supremum α<ω₁, and the sequence (αₙ) has no convergent subsequence in ω₁ (any subsequence increases to α, which is not in ω₁; the sequence has no cluster point in ω₁). So the example is wrong.
- **Proposed fix:** Replace with a correct example: e.g. "ω₁ is countably compact (indeed every countable subset is bounded below ω₁) but not compact; note ω₁ is not sequentially compact either." Or use the standard example: the space ω₁ is countably compact but not compact. Alternatively use [0,ω₁) vs. a genuinely sequentially compact non-compact space such as a suitable product {0,1}^{2^{ℵ₀}}.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Intersection of two compact sets need not be compact — needs Hausdorff
- **Category:** Supplement/remark error
- **Location:** supplement (ハウスドルフ性を外すと)
- **Detail:** The supplement says that without Hausdorff, "the intersection of two compact sets need not be compact." This is true in general, but the parenthetical example given is only the cofinite topology, where compact subsets are closed and intersections of compact sets ARE compact (in the cofinite topology every subset is compact, so any intersection is compact). The claim as illustrated is misleading: the cofinite topology does not witness failure of compactness of intersections. A correct counterexample requires a non-Hausdorff space where compact sets are not closed, e.g. the particular point topology or the Sierpiński-like examples.
- **Proposed fix:** Either drop the intersection claim or give a correct example: "In a non-Hausdorff space the intersection of two compact sets need not be compact; e.g. in the particular point topology on an infinite set, ..." (or state that in the cofinite topology every subset is compact, so intersections are compact, and the failure requires a different non-Hausdorff example).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Tychonoff equivalent to AC — overstated
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement states that the infinite-product generalization of 1 (Tychonoff's theorem) "is equivalent to the axiom of choice." Tychonoff's theorem for arbitrary products of compact spaces is indeed equivalent to AC (Kelley), but the statement as written is imprecise: the equivalence holds for the full Tychonoff theorem (arbitrary products), not for the finite-product statement 1. Also, the equivalence requires the products to be over arbitrary index sets of compact spaces; the claim should specify this.
- **Proposed fix:** State precisely: "The full Tychonoff theorem (arbitrary products of compact spaces are compact) is equivalent to the axiom of choice (Kelley); the finite-product statement 1 does not require AC."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Stone space compactness attribution
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says the propositional/first-order compactness theorem (\ref{logic:compactness}) "coincides with this sense of compactness as compactness of the Stone space." This is essentially correct for propositional logic (Stone space of the Boolean algebra), but for first-order logic the compactness theorem corresponds to compactness of the Stone space of the Lindenbaum algebra, which requires the completeness theorem; the phrasing conflates the two and is imprecise about what is being identified.
- **Proposed fix:** Clarify: "The compactness theorem of propositional logic is exactly the compactness of the Stone space of the corresponding Boolean algebra; the first-order compactness theorem follows from it via the completeness theorem."
- **Reported:** 2026-10-28 (10fede1)
