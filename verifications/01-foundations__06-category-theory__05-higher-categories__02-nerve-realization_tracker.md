# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/02-nerve-realization.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/02-nerve-realization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (adjunction, extension, free cocompletion, density theorem) is logically sound. The problems are concentrated in the example and supplement: the claim that geometric realization's defining cosimplicial space is not dense is false (it is dense), and two supplementary remarks about Dold–Kan and the fundamental category are imprecise/overstated.

## Issues

### ISSUE-0001 [Open] Geometric realization of simplicial sets is not dense
- **Category:** Supplement/remark error
- **Location:** example (item 2)
- **Detail:** The example claims that $K\colon\Delta_{+}\to\mathbf{Top}$, $n+1\mapsto\Delta^{n}$, is not dense, with the justification that a space cannot generally be recovered from its singular simplicial set. This is wrong: the standard cosimplicial space of simplices is dense (every space is the geometric realization of its singular simplicial set, i.e. the counit $|N_K(X)|\to X$ is a weak equivalence, and in fact the singular complex / geometric realization adjunction has the property that $K$ is dense in the sense of the density criterion). The claim that $K$ is not dense contradicts the density criterion applied to the singular complex functor. The parenthetical justification is also a non-sequitur: failure to recover $X$ up to homeomorphism does not imply failure of density (density concerns the canonical colimit formula, which holds here).
- **Proposed fix:** Replace with: "$K$ is dense: every space $X$ is the colimit of the diagram $(\Delta^{n}\to X)$ indexed by its singular simplicial set, i.e. $X\cong|N_{K}(X)|$ (the counit is an isomorphism in this case since $|\mathrm{Sing}(X)|\to X$ is a homeomorphism for the standard adjunction)." If instead a non-dense example is wanted, use a genuinely non-dense functor and justify it.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Dold–Kan correspondence is not of the same adjunction type
- **Category:** Supplement/remark error
- **Location:** supplement, 似た定理
- **Detail:** The supplement says the Dold–Kan correspondence (simplicial abelian groups and chain complexes) "is also obtained from an adjunction of the same type." The Dold–Kan correspondence is an equivalence of categories (between simplicial abelian groups and nonnegatively graded chain complexes), not an instance of the nerve/realization adjunction $|-|_K\dashv N_K$ for a functor $K$ into a cocomplete category. Calling it "the same type of adjunction" is imprecise/overstated.
- **Proposed fix:** Replace with: "The Dold–Kan correspondence is an equivalence between simplicial abelian groups and nonnegatively graded chain complexes; it is related to, but not an instance of, the nerve–realization adjunction."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Fundamental category claim for Cat-nerve realization
- **Category:** Supplement/remark error
- **Location:** supplement, 似た定理
- **Detail:** The supplement states that for the nerve of $\mathbf{Cat}$, the realization is the operation of building a category from a simplicial set by generators and relations (the fundamental category). This is only correct for the restricted case of the nerve of a category (where realization recovers the category), but the realization of an arbitrary simplicial set via the Cat-valued $K$ is not literally the fundamental category construction (which is the left adjoint to the nerve and requires the simplicial set to be treated with the appropriate generators/relations); the statement as written conflates the general realization with the fundamental category functor and is at best imprecise.
- **Proposed fix:** Replace with: "For the nerve of $\mathbf{Cat}$, the left adjoint to the nerve is the fundamental category functor, which builds a category from a simplicial set by generators and relations; this is the realization $|-|_{K}$ for $K\colon\Delta_{+}\to\mathbf{Cat}$."
- **Reported:** 2026-10-28 (8ccef3d)
