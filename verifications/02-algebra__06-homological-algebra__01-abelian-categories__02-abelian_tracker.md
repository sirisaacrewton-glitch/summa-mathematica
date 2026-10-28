# Verification tracker: `02-algebra/06-homological-algebra/01-abelian-categories/02-abelian.html`

<!-- source: 02-algebra/06-homological-algebra/01-abelian-categories/02-abelian.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the category of Hilbert spaces is cited as an example of an additive category with kernels and cokernels failing axiom 4, but it is not additive (no finite biproducts) and lacks cokernels, so it is not a valid example. The Freyd attribution is acceptable. All proofs, the hom-functor left-exactness theorem, and the short-exact-sequence characterization check out.

## Issues

### ISSUE-0001 [Open] Hilbert space category is not an additive category with kernels/cokernels
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that dropping axiom 4 gives additive categories such as the category of free abelian groups and the category of Hilbert spaces, in which monic+epi need not be iso and image factorization need not be unique. The category of Hilbert spaces (with bounded linear maps) is not additive: Hom-sets are not abelian groups under addition in a way compatible with composition in the required sense? Actually bounded linear maps do form an abelian group under addition and composition is bilinear, so it is preadditive; but it has no zero object issue? It does have zero object {0}. However it fails to be additive because it lacks finite biproducts (the direct sum of Hilbert spaces is not a product in the category of Hilbert spaces with bounded maps — the canonical map is not an isomorphism). More importantly it does not have kernels/cokernels in the categorical sense (cokernels do not exist: the cokernel of a bounded map need not exist as a bounded map with the universal property). So citing it as an example of an 'additive category with kernels and cokernels but failing axiom 4' is false.
- **Proposed fix:** Replace the Hilbert space example with a correct one, e.g.: 「公理 4 を外した加法圏（例：自由アーベル群の圏）では、モノかつエピな射が同型とは限らず、像の分解が一意でない。」 (remove ヒルベルト空間の圏, or replace with another genuine additive category with kernels and cokernels failing axiom 4, such as the category of torsion-free abelian groups is not good either; the free abelian group example suffices).
- **Reported:** 2026-10-28 (8ccef3d)
