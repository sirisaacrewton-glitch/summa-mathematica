# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/02-ccc-spaces.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/02-ccc-spaces.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (finite-product criterion via Δ-system, the two-to-all corollary, separable products, HMP theorem, non-separability of large Cantor cubes, c.c.c.-but-not-separable example) are logically sound and the citations match. The genuine problems are confined to supplements: the box-product counterexample is wrong (the countable box product on 2 is the Cantor set, not discrete), the CH bullet overstates a result that actually needs ◇/Suslin line, and the 'best possible' remark in the generalization is imprecise about which factors are allowed.

## Issues

### ISSUE-0001 [Open] Box product of 2^ω is not discrete
- **Category:** Supplement/remark error
- **Location:** supplement after set:ccc-product-finite (台の有限性)
- **Detail:** The supplement claims that the box product on {}^{\omega}2 is the discrete topology with $2^{\aleph_{0}}$ pairwise disjoint open sets. This is false: in the box product on ${}^{\omega}2$, the set of all $f$ with $f(0)=0$ is a nonempty open set that is not a singleton (it contains many points), so the topology is not discrete. Indeed the box product of countably many 2-point spaces is homeomorphic to the Cantor set, which is compact, Hausdorff, second countable and hence c.c.c. (and separable). So it is not a counterexample to the theorem. A correct counterexample to the box-product analogue is ${}^{\kappa}2$ with the box topology for uncountable $\kappa$ (e.g. $\kappa=\omega_{1}$): there the box topology is discrete (each point is the intersection of the box-open sets fixing its coordinates), giving $2^{\kappa}$ disjoint open singletons, while every finite subproduct is finite hence c.c.c.
- **Proposed fix:** Replace the example: 'For uncountable $\kappa$ (e.g. $\kappa=\omega_{1}$), the box product ${}^{\kappa}2$ (all $\prod_{i}U_{i}$ as a base) is discrete: for each $f$, $\{f\}=\bigcap_{\xi<\kappa}\{g\mid g(\xi)=f(\xi)\}$ is an intersection of box-open sets, and since the box topology on ${}^{\kappa}2$ is closed under arbitrary intersections of this form each singleton is open. Hence the $2^{\kappa}$ singletons are pairwise disjoint nonempty open sets, so the box product is not c.c.c., while every finite subproduct $2^{n}$ is finite and c.c.c. The Δ-system lemma applies only because the supports are finite.' (Note the countable box product ${}^{\omega}2$ is the Cantor set and is c.c.c., so it cannot serve as the counterexample.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] CH does not give a c.c.c. non-productive pair; that needs MA-failure/◇-type hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement after set:ccc-product-finite (2 個の積で決まる), third bullet
- **Detail:** The bullet states 'CH のもとでも、積が c.c.c. でない 2 つの c.c.c. 空間が存在する (Kunen, Set Theory, VIII章の演習)'. This is misleading: under CH alone one cannot conclude the existence of two c.c.c. spaces with non-c.c.c. product; the standard construction of such a pair (e.g. via a Suslin line or via ◇, or via a c.c.c. non-ccc-productive pair) requires ◇ or a Suslin line, which is not a consequence of CH. Kunen's exercise is about ◇ (or about the consistency), not CH. As stated the claim is false/overstated.
- **Proposed fix:** Replace with: 'Under $\Diamond$ (which holds e.g. in $L$), there exist two c.c.c. spaces whose product is not c.c.c. (equivalently, a Suslin line exists); this is consistent with CH. The statement that the product of two c.c.c. spaces is always c.c.c. is itself independent of ZFC.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Generalization to arbitrary factors needs each factor to have two disjoint nonempty open sets, and the '2-point Hausdorff' example is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement after set:cantor-cube-not-separable (一般化)
- **Detail:** The generalization says: if $|I|>2^{\aleph_{0}}$ and each $X_{i}$ has disjoint nonempty open sets $G_{i}^{0},G_{i}^{1}$ (e.g. any Hausdorff space with at least two points), then $\prod X_{i}$ is not separable. The parenthetical is imprecise: a Hausdorff space with at least two points does have two disjoint nonempty open sets, so that part is fine, but the fingerprint argument as written uses $G_{\alpha}^{0}$ and $G_{\beta}^{1}$ for possibly different coordinates $\alpha,\beta$, and the basic open set '$\alpha$-coordinate in $G_{\alpha}^{0}$, $\beta$-coordinate in $G_{\beta}^{1}$' is indeed nonempty and avoids $D$ — this is correct. However the claim that this shows the bound $2^{\aleph_{0}}$ in the HMP theorem is 'best possible' is overstated: it shows the bound cannot be increased for such factors, but the HMP theorem's sharpness for separable factors is a separate matter (a product of $>2^{\aleph_{0}}$ separable spaces can still be separable if the factors are trivial, e.g. one-point spaces). The statement should restrict to factors with at least two points / two disjoint nonempty opens.
- **Proposed fix:** State: 'If $|I|>2^{\aleph_{0}}$ and every $X_{i}$ contains two disjoint nonempty open sets (e.g. every $X_{i}$ is Hausdorff with at least two points), then $\prod_{i\in I}X_{i}$ is not separable. Hence in the HMP theorem the hypothesis $|I|\le 2^{\aleph_{0}}$ cannot be relaxed to allow factors each having two disjoint nonempty open sets.'
- **Reported:** 2026-10-28 (8ccef3d)
