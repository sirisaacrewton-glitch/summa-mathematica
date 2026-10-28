# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/05-flasque-cech.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/05-flasque-cech.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (flasque lemma, acyclicity, acyclic resolutions, Cech basics, Leray) is logically sound and the citations match their targets. The genuine problems are confined to the supplement and the viewpoint remark: the claim that Cech H^1 always equals sheaf H^1 is false without paracompactness-type hypotheses, the Smith-normal-form computability claim is overstated (products, non-free modules, and the need to handle a whole complex), and the nerve/cosimplicial description conflates the unnormalized Cech complex with its alternating/normalized version.

## Issues

### ISSUE-0001 [Open] Cech H^1 equals H^1 only for paracompact (or similar) spaces
- **Category:** Supplement/remark error
- **Location:** supplement / 被覆の細分と Cech(X,F)
- **Detail:** The supplement claims 'つねに $\check{H}^{1}(X,F)\cong H^{1}(X,F)$' for arbitrary topological spaces. This is false in general: the isomorphism $\check{H}^{1}\cong H^{1}$ requires hypotheses (e.g. $X$ paracompact, or at least that the space admits 'good' refinements / is a 'Cech-acyclic' situation). For general spaces the comparison map $\check{H}^{1}(X,F)\to H^{1}(X,F)$ need not be an isomorphism. The statement as written is overstated.
- **Proposed fix:** Replace with: 'If $X$ is paracompact and Hausdorff, then $\check{H}^{p}(X,F)\cong H^{p}(X,F)$ for all $p$ (in particular for $p=1$). For general spaces only the comparison map $\check{H}^{1}(X,F)\to H^{1}(X,F)$ exists and need not be an isomorphism.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Smith normal form does not compute cohomology of a complex of products of free modules in general
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The claim that Cech cohomology 'は整数行列のスミス標準形で計算できる（原始再帰的）' is imprecise. Smith normal form computes the homology of a complex of *finitely generated free* abelian groups only when the complex is a chain complex of free modules with the differentials given by matrices; but the Cech complex here is a product $\prod_{\sigma}F(U_{\sigma})$ over possibly infinitely many $\sigma$, and even for a finite cover the modules $F(U_{\sigma})$ are only assumed finitely generated, not free. Smith normal form applies to a single matrix, not directly to computing the homology of a complex (one needs to put the whole complex in Smith form simultaneously, which requires the modules to be free and the complex bounded). The parenthetical '原始再帰的' (primitive recursive) is also unjustified.
- **Proposed fix:** Restate as: 'If the cover is finite and each $F(U_{\sigma})$ is a finitely generated free abelian group, then the Cech complex is a bounded complex of finitely generated free abelian groups and its cohomology can be computed by integer linear algebra (e.g. Smith normal form of the differential matrices).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Remark: Cech complex as alternating sum on the nerve is imprecise
- **Category:** Supplement/remark error
- **Location:** remark 被覆の神経と単体的な見方
- **Detail:** The remark says '$p\mapsto\prod F(U_{\sigma})$ は余単体的アーベル群で、チェック複体はその交代和の複体にあたる'. This is loose: the Cech complex with all $(i_{0},\dots,i_{p})\in I^{p+1}$ (not just nonempty intersections, and not the alternating/ordered subcomplex) is the *unnormalized* cochain complex associated to the cosimplicial abelian group; the '交代和' (alternating sum) description corresponds to the normalized (or ordered) subcomplex, which is quasi-isomorphic but not literally equal. Also the nerve uses only $\sigma$ with $U_{\sigma}\neq\emptyset$, whereas the Cech complex here sums over all $\sigma$. The identification is only up to the usual normalization, so the statement as written is imprecise.
- **Proposed fix:** Say: 'The assignment $p\mapsto\prod_{\sigma}F(U_{\sigma})$ is a cosimplicial abelian group, and the Cech complex is its associated (unnormalized) cochain complex; passing to the normalized subcomplex (or restricting to nonempty intersections) gives a quasi-isomorphic complex.'
- **Reported:** 2026-10-28 (8ccef3d)
