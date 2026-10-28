# Verification tracker: `02-algebra/06-homological-algebra/01-abelian-categories/02-abelian.html`

<!-- source: 02-algebra/06-homological-algebra/01-abelian-categories/02-abelian.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, image factorization, short-exact characterization, left-exact criterion, hom left-exact) is logically sound and citations match their targets. The problems concentrate in the supplement: the Freyd-axiom generalization misstates the hypotheses needed for uniqueness of the additive structure, and the claim that the category of Hilbert spaces is an additive category lacking axiom 4 is false (it is not additive). The free-abelian-group example is correct.

## Issues

### ISSUE-0001 [Open] Freyd's abelian-category axioms and uniqueness of additive structure
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The supplement claims that starting from 'zero object, products and coproducts of two objects, kernels and cokernels, monic is kernel and epi is cokernel' without assuming an additive structure, an additive structure enters uniquely. This is imprecise: the standard Freyd axioms already include the existence of a biproduct (or the requirement that finite products and coproducts exist and coincide), and the uniqueness of the additive/enrichment structure requires the category to be pointed and to have finite biproducts. As stated ('products and coproducts' separately, no mention of the canonical comparison being an iso), the axioms do not force additivity. The attribution to Freyd 1964 is fine, but the exact hypothesis is misstated.
- **Proposed fix:** Replace with: 'The abelian-category axioms can be formulated without presupposing an additive structure: start with a pointed category having finite biproducts (equivalently, finite products and coproducts that coincide), kernels and cokernels, where every monic is a kernel and every epi a cokernel. Then the enrichment in abelian groups is unique (Freyd 1964; Mac Lane omits the proof).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hilbert spaces as example of additive category failing axiom 4
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement lists 'the category of Hilbert spaces' as an example of an additive category (without axiom 4) where monic-and-epi need not be iso. The category of Hilbert spaces with bounded linear maps is not additive: it has no biproducts in the categorical sense (the algebraic direct sum is not complete, and the $"\ell^2$"-sum is not a product/coproduct in the categorical sense for bounded maps), and it is not enriched over abelian groups in a way giving finite biproducts. So it is not a valid example of an additive category.
- **Proposed fix:** Remove 'Hilbert spaces' and keep only valid examples, e.g.: 'Additive categories without axiom 4 (e.g. the category of free abelian groups, or the category of torsion-free abelian groups) can have monic epis that are not isomorphisms, and image factorizations need not be unique.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Free abelian groups: cokernel computed in the subcategory
- **Category:** Supplement/remark error
- **Location:** example (item 2)
- **Detail:** The example says the monomorphism $2\colon\mathbb{Z}\to\mathbb{Z}$ 'has a cokernel (within free abelian groups the cokernel is $0$)'. In the category of free abelian groups the cokernel of $2$ is indeed $0$ (since $\mathbb{Z}/2$ is not free, the only free group receiving a map killing the image is $0$), so the parenthetical is correct; however the surrounding phrasing 'モノ射 2 は余核をもつものの…核にならない' is consistent. This is fine and not an error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
