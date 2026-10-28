# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/04-cartesian-closed.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/04-cartesian-closed.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The core definitions, the Lawvere fixed point theorem and its proof, the exponential form, and the Cantor corollary are all logically sound, and the cited labels match their uses. The problems are confined to the supplement: the 'reflexive object' bullet overstates what D ≅ D^D gives (point-surjectivity of the isomorphism is needed and not automatic), and the 'weakening to epi' bullet asserts a failure without a concrete counterexample. Both are supplement-level overstatements; the main mathematical content is correct.

## Issues

### ISSUE-0001 [Open] Reflexive object D ≅ D^D forces every endomorphism to have a fixed point — but only point-surjectivity of the identity gives this, and the claim about Set is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 反射的対象
- **Detail:** The supplement claims: in a cartesian closed category with D ≅ D^D, Lawvere's theorem gives that every endomorphism of D has a fixed point. To apply the corollary one needs a point-surjective morphism A → B^A. Here one takes A = B = D and the isomorphism D ≅ D^D (or its inverse) as the map D → D^D. But point-surjectivity of that map is not automatic: it requires that the isomorphism D → D^D be point-surjective, i.e. that every point 1 → D^D be in the image. In a category with few points (e.g. a non-well-pointed model) this can fail, so the stated conclusion 'every endomorphism of D has a fixed point' does not follow from D ≅ D^D alone. The claim is only valid when the isomorphism is point-surjective (which holds e.g. in well-pointed settings or when one assumes the retraction is point-surjective). Also the final sentence 'Set にそのような D が一点集合しかないのは、カントールの定理による' is correct only in the sense that the only D with D ≅ D^D in Set is a singleton (indeed D with |D| = |D^D| forces |D| ≤ 1), which is fine, but the preceding universal claim is overstated.
- **Proposed fix:** Replace with: 'A reflexive object D (with a specified isomorphism D ≅ D^D) in a cartesian closed category yields, **provided the map D → D^D is point-surjective**, that every endomorphism of D has a fixed point (apply \ref{cat:lawvere-ccc-form} with A = B = D). This is the categorical reason for the existence of the fixed-point combinator Y in the untyped lambda calculus; in such a category no endomorphism of D lacks a fixed point. In Set the only D with D ≅ D^D is a singleton, by Cantor's theorem.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that weakening point-surjective to epi breaks the conclusion is stated without a valid justification
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement asserts: 'If we weaken point-surjective to epi, the conclusion fails. For example, in a category with few points, an epi A → B^A may exist without every endomorphism of B having a fixed point.' This is asserted without a concrete counterexample and is not obviously true as stated: in a category with few points, an epi A → B^A existing does not by itself produce a counterexample, and the phrasing 'for example' promises an example that is never given. As written it is an unsupported/overstated claim.
- **Proposed fix:** Either supply a concrete counterexample (a specific cartesian closed category, objects A, B, an epimorphism A → B^A, and an endomorphism of B with no fixed point), or weaken to: 'The hypothesis of point-surjectivity cannot in general be replaced by mere epimorphy; the theorem genuinely uses points (global elements), and in categories with few points the point-surjectivity hypothesis is a real restriction.'
- **Reported:** 2026-10-28 (8ccef3d)
