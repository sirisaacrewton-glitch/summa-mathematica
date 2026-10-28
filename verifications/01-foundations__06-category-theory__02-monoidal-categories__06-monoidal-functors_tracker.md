# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/06-monoidal-functors.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/06-monoidal-functors.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definition, composition, preservation of monoids, strictification proof, problems) is logically sound; the strictification construction and its verification via multivariable coherence are correct. The genuine issues are concentrated in the supplement: the claim that no assumption (even local smallness) is used is overstated, the converse characterization attributed to Mac Lane XI.3 Thm 2 is stated loosely, and the 'similar theorems' paragraph contains imprecise/uncertain attributions (bicategory strictification attributed to Mac Lane–Paré 1985, and an overstated 'only semi-strictification' claim for tricategories). These are medium-confidence wording/precision problems rather than fatal errors.

## Issues

### ISSUE-0001 [Open] Claim that strictification uses no smallness assumption is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提について
- **Detail:** The supplement says the proof of the strictification theorem uses no assumption on $\mathbf{M}$ (such as smallness). But the construction forms $\mathbf{S}$ whose objects are finite lists of objects of $\mathbf{M}$ and whose hom-sets are those of $\mathbf{M}$; for $\mathbf{S}$ to be a genuine category (with a set/class of objects and well-defined hom-collections) and for the equivalence to be stated in the usual foundational setting, one needs $\mathbf{M}$ to be at least locally small (and the list construction to be legitimate). The statement 'no assumption at all' is overstated; the honest claim is that no size assumption beyond local smallness is needed, and the coherence theorem is the only nontrivial input.
- **Proposed fix:** Replace with: 'The proof uses no assumption on $\mathbf{M}$ beyond local smallness (so that $\mathbf{S}(s,t)=\mathbf{M}(F(s),F(t))$ is a set); in particular no strictness or size hypothesis on $\mathbf{M}$ itself is needed. The only non-trivial input is the coherence theorem.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Mac Lane XI.3 Theorem 2 characterization stated loosely
- **Category:** Supplement/remark error
- **Location:** supplement / 前提について
- **Detail:** The supplement states Mac Lane XI §3 Theorem 2 as 'if a monoidal category is monoidally equivalent to a strict monoidal category via strong monoidal functors, then associativity coherence holds'. As stated this is imprecise: the theorem concerns the coherence of the associativity (and unit) constraints, i.e. that the pentagon (and triangle) diagrams commute, and the equivalence must be a monoidal equivalence in the appropriate sense. The phrasing 'associativity coherence holds' without specifying the pentagon/triangle conditions is too vague and could be read as a triviality.
- **Proposed fix:** Replace with: 'Mac Lane XI §3 Theorem 2 shows conversely that if $\mathbf{M}$ is monoidally equivalent to a strict monoidal category, then the pentagon and triangle axioms hold in $\mathbf{M}$ (i.e. the associativity and unit constraints are coherent).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Bicategory strictification attribution and statement
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says every bicategory is biequivalent to a 2-category, attributed to 'Mac Lane–Paré, 1985'. The standard reference for strictification of bicategories is Mac Lane's coherence for bicategories and, for the general strictification result, the work of Gordon–Power–Street (1995) and earlier Mac Lane; the attribution 'Mac Lane–Paré 1985' is not the standard citation for bicategory strictification (Mac Lane–Paré is associated with coherence for monoidal categories / symmetric monoidal). Since the text itself flags it as unverified, the attribution is at least suspect and should not be asserted.
- **Proposed fix:** Replace with: 'every bicategory is biequivalent to a 2-category (strictification of bicategories; see e.g. Gordon–Power–Street 1995, and Mac Lane's coherence theorem for the one-object case)'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Tricategory 'semi-strictification only' claim overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement asserts that for tricategories 'complete strictification is impossible and only semi-strictification is possible (Gordon–Power–Street 1995)'. Gordon–Power–Street indeed show that not every tricategory is triequivalent to a strict 3-category, and they introduce the notion of a Gray-category (semi-strict) and prove every tricategory is triequivalent to a Gray-category. However, the blanket phrase 'only semi-strictification is possible' is imprecise: strictification is possible for special classes (e.g. those triequivalent to strict 3-categories), and the precise statement is that Gray-categories form a strictification target, not that nothing stricter than semi-strict is ever achievable.
- **Proposed fix:** Replace with: 'for tricategories, not every tricategory is triequivalent to a strict 3-category; Gordon–Power–Street (1995) show that every tricategory is triequivalent to a Gray-category (a semi-strict structure), and this is the sharp general strictification result.'
- **Reported:** 2026-10-28 (8ccef3d)
