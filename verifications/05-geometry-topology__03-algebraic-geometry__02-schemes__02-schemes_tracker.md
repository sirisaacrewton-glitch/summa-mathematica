# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/02-schemes.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/02-schemes.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Spec is a left adjoint, not a right adjoint, of Γ
- **Category:** Supplement/remark error
- **Location:** remark 局所的に環、大域的に貼り合わせ
- **Detail:** The remark states that Spec is the right adjoint of Γ: LRS → Ring^{op}. But theorem ag:morphisms-to-affine gives Hom_{LRS}(X, Spec A) ≅ Hom_{Ring}(A, Γ(X, O_X)), i.e. Hom_{LRS}(X, Spec A) ≅ Hom_{Ring^{op}}(Γ(X,O_X), A). This exhibits Spec as the LEFT adjoint of Γ (viewed as a functor LRS → Ring^{op}), not the right adjoint. The claim 'Spec は Γ の右随伴' is the opposite of what the theorem proves.
- **Proposed fix:** Spec is the left adjoint of the global-sections functor $\Gamma:\mathrm{LRS}\to\mathbf{Ring}^{\mathrm{op}}$ (equivalently, $\Gamma$ is right adjoint to $\operatorname{Spec}$): the adjunction is $\operatorname{Hom}_{\mathrm{LRS}}(X,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathbf{Ring}^{\mathrm{op}}}(\Gamma(X,\mathcal{O}_{X}),A)$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] h_X(R) = {a : f(a)=0} only for a single equation in n variables
- **Category:** Supplement/remark error
- **Location:** remark 点の関手, item 1
- **Detail:** The remark writes 'for a system of equations X = Spec Z[x]/(f) we have h_X(R) = {a ∈ R^n : f(a)=0}'. This is imprecise: for a general ideal (f_1,...,f_m) the set is {a ∈ R^n : f_i(a)=0 for all i}, and the notation Z[x]/(f) with a single f and R^n is inconsistent (n variables vs one polynomial). As stated it is only correct for a principal ideal in one variable.
- **Proposed fix:** For $X=\operatorname{Spec}\mathbb{Z}[x_{1},\dots,x_{n}]/(f_{1},\dots,f_{m})$ we have $h_{X}(R)=\{(a_{1},\dots,a_{n})\in R^{n} : f_{i}(a_{1},\dots,a_{n})=0\ \text{for all}\ i\}$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Noetherian/finite-type hypotheses are not merely to avoid Nagata pathologies
- **Category:** Supplement/remark error
- **Location:** remark 点の関手, item 3
- **Detail:** The remark claims that assuming Noetherian and finite type is 'to avoid Nagata's pathological examples while covering number theory and geometry'. Nagata's examples (infinite Krull dimension, non-Noetherian normalization) are counterexamples showing Noetherian hypotheses cannot be dropped in certain theorems, but the standard reason for Noetherian/finite-type hypotheses is that they make the category well-behaved (Noetherian induction, coherence, finite generation of ideals, dimension theory, finiteness theorems). Attributing the hypotheses primarily to 'avoiding Nagata's examples' overstates and misrepresents the role of these examples.
- **Proposed fix:** Noetherian and finite-type hypotheses are imposed because they make the category well-behaved (Noetherian induction, coherence, dimension theory, finiteness theorems). Nagata's examples (\ref{ring:nagata-infinite-dimension}, \ref{ring:nagata-examples}) show that these hypotheses cannot simply be dropped: without them even basic finiteness statements fail.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] P^1_A non-affine argument only valid when A is a field (or has few points)
- **Category:** Supplement/remark error
- **Location:** example スキームの例, item 1
- **Detail:** The example argues P^1_A is not affine because 'if A is a field the points are not a single point'. But the statement 'P^1_A is not affine' is asserted for a general ring A, while the justification given (Γ = A and Spec A has more than one point) only works when Spec A has more than one point. For A = 0 (the zero ring) P^1_A is Spec 0, which is affine; more generally the argument as written is incomplete for arbitrary A. The claim should be restricted or the argument completed (e.g. via the existence of two distinct global sections / non-isomorphism).
- **Proposed fix:** For a nonzero ring $A$, $\Gamma(\mathbb{P}^{1}_{A},\mathcal{O})=A$, and $\mathbb{P}^{1}_{A}$ is not affine: if it were, \ref{ag:morphisms-to-affine} would give $\mathbb{P}^{1}_{A}\cong\operatorname{Spec}A$, but (e.g. when $A$ is a field) $\mathbb{P}^{1}_{A}$ has more than one point while $\operatorname{Spec}A$ has one.
- **Reported:** 2026-10-28 (8ccef3d)
