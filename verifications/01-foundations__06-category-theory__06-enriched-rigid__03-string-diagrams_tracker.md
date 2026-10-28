# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/03-string-diagrams.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/03-string-diagrams.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The core definitions, the interchange theorem and its proof, the End(I) commutativity theorem, and the dual/braid diagram material are logically sound and correctly cite the listed labels. The genuine problems are concentrated in the supplement and the closing remark: the claim that symmetric monoidal diagrams are 4-dimensional (and the E_{1}⊂E_{2}⊂E_{3} correspondence) is mathematically wrong, the 'boxes with no strings move freely' justification for End(I) commutativity is imprecise, and the solution's assertion that the bimodule counterexample survives strictification is stated without the needed (easy) argument.

## Issues

### ISSUE-0001 [Open] Dimension claim for symmetric monoidal diagrams is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると), first bullet
- **Detail:** The supplement says braided monoidal diagrams are 3-dimensional and symmetric monoidal ones are '4 dimensions or more, where the over/under of crossings cannot be distinguished'. This is incorrect: symmetric monoidal string diagrams live in 2 dimensions (the plane) with the extra relation that over- and under-crossings are equal (γ = γ^{-1}); they are not 4-dimensional. The dimension of the ambient space for the graphical calculus does not increase from braided to symmetric; rather the crossing is identified with its mirror. The correspondence with E_{1}⊂E_{2}⊂E_{3} is also misstated: symmetric monoidal corresponds to E_{∞} (or stable), not to a 4-dimensional E_{4} object.
- **Proposed fix:** Replace with: 'In a braided monoidal category the diagrams are 3-dimensional braid diagrams (the plane plus a depth direction), and the value is invariant under 3-dimensional isotopy fixing endpoints. In a symmetric monoidal category the over- and under-crossings are identified (γ = γ^{-1}), so the diagrams are again planar but with crossings that no longer distinguish over from under; this corresponds to E_{∞} (stable) rather than to a higher-dimensional E_{n}.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] End(I) elements 'have no strings' and 'move freely' is imprecise
- **Category:** Supplement/remark error
- **Location:** remark 次元が上がると可換になる
- **Detail:** The remark claims that elements of End(I) are 'boxes with no strings' that 'move freely in the plane, so order loses meaning'. But a box s: I→I does have an input and output string (the invisible unit string); it is precisely because the unit string is invisible that the two boxes can slide past each other. Saying they 'have no strings' and 'move freely' is a false justification: the interchange move still requires the boxes to be side by side with a string between them, which here is the empty (unit) string. The conclusion is right but the stated reason is wrong.
- **Proposed fix:** Replace with: 'An element of End(I) is a box whose input and output strings are the invisible unit string; since the unit string is invisible, two such boxes are always side by side with the empty string between them, so the interchange move lets their vertical order be swapped freely, making the order meaningless (commutative).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that strictification preserves the counterexample needs justification
- **Category:** Supplement/remark error
- **Location:** solution (一般の場合), cat:prob-str-scalar-action
- **Detail:** The solution asserts 'the category of bimodules is not strict, but the same holds after strictification' without argument. Strictification gives a monoidal equivalence, and one must check that s⊗1_{M} ≠ 1_{M}⊗s is preserved. This is true because a strong monoidal equivalence induces an isomorphism End(I) and is fully faithful, so inequality of the two maps a→a is preserved; but the text merely asserts it. As stated it is an unsupported claim in a solution.
- **Proposed fix:** Add: 'A strong monoidal equivalence F is fully faithful and induces an isomorphism End(I)≅End(FI), so it reflects equality of morphisms; hence s⊗1_{M}≠1_{M}⊗s in the strictification as well.'
- **Reported:** 2026-10-28 (8ccef3d)
