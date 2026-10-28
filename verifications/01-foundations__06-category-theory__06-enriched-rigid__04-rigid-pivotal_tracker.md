# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/04-rigid-pivotal.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/04-rigid-pivotal.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, sliding lemma, uniqueness of duals, rigid-implies-closed, cyclicity of the trace) is logically sound and the citations match their targets. The genuine problems are confined to the supplement and example side remarks: the claim that quantum dimensions in a fusion category are positive reals (true only for the Frobenius–Perron dimension, and only equal to the pivotal dimension in the pseudo-unitary case), the claim that the trace is computable from fusion rules alone (it depends on the pivotal structure), and the imprecise Hopf-algebra parenthetical about pivotal-but-not-spherical categories.

## Issues

### ISSUE-0001 [Open] Quantum dimensions in a fusion category need not be positive reals
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that in a fusion category the quantum dimensions can be taken to be positive real numbers (Perron–Frobenius dimension). This is false in general: the quantum dimension of a simple object is the Perron–Frobenius eigenvalue of the fusion matrix only when the category is pseudo-unitary (e.g. unitary fusion categories), and even then it is the Frobenius–Perron dimension, which need not equal the categorical (pivotal) dimension. For a general fusion category over $\mathbb{C}$ the quantum dimension $\dim(a)$ can be zero, negative, or non-real (e.g. the Ising category has $\dim(\sigma)=\sqrt{2}$ but Fibonacci-type categories have $\dim$ equal to the golden ratio, and non-pseudo-unitary examples give non-real or zero dimensions). The statement as written is overstated.
- **Proposed fix:** In a fusion category the Frobenius–Perron dimension $\mathrm{FPdim}(a)$ (the Perron–Frobenius eigenvalue of the fusion matrix $N_{a}$) is a positive real algebraic integer, and $\mathrm{FPdim}$ is multiplicative. The pivotal quantum dimension $\dim(a)$ equals $\mathrm{FPdim}(a)$ when the category is pseudo-unitary; in general $\dim(a)$ can be zero, negative or non-real.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Trace computation in a fusion category is not just finite linear algebra from fusion rules
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The claim that in a general fusion category the trace value can be computed by finite linear algebra using only the fusion rules (multiplicities of the tensor product decomposition) is imprecise. The fusion rules determine the fusion matrices and hence the Frobenius–Perron dimensions, but the categorical trace/quantum dimension depends on the pivotal structure (the specific $\delta$), not only on the fusion rules; different pivotal structures on the same fusion rules can give different quantum dimensions. So the trace is not determined by the fusion rules alone.
- **Proposed fix:** In a fusion category the fusion rules determine the Frobenius–Perron dimensions via the fusion matrices, but the pivotal quantum dimension $\dim(a)$ depends on the chosen pivotal structure, not on the fusion rules alone; it is computed from the pivotal structure together with the fusion data.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Example 3: 'pivotal but not spherical' via Hopf algebras needs precise hypothesis
- **Category:** Supplement/remark error
- **Location:** example (item 3)
- **Detail:** The example states that there exist pivotal but non-spherical categories, citing 'the representation category of a Hopf algebra where $S^{2}$ is not an inner automorphism'. This is imprecise: for the finite-dimensional modules over a finite-dimensional Hopf algebra, the representation category is pivotal iff it admits a pivotal structure, and the standard pivotal structure exists when $S^{2}$ is inner (via the ribbon/pivotal element). The correct statement is that pivotal-but-not-spherical categories exist, e.g. the category of finite-dimensional modules over a finite-dimensional Hopf algebra whose square of the antipode is not inner (so no pivotal structure of the standard form), or more standardly certain non-spherical pivotal categories. As written the parenthetical is a non-sequitur: '$S^{2}$ not inner' obstructs being pivotal (in the standard way), not being spherical.
- **Proposed fix:** Pivotal but non-spherical categories exist; for instance, the category of finite-dimensional modules over a finite-dimensional Hopf algebra whose square of the antipode is not inner admits no pivotal structure of the standard (ribbon) form, and there are pivotal categories whose left and right traces differ.
- **Reported:** 2026-10-28 (8ccef3d)
