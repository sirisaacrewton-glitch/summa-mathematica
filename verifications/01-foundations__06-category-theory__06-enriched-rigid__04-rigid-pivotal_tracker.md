# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/04-rigid-pivotal.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/04-rigid-pivotal.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Fusion category quantum dimensions need not be positive reals
- **Category:** Supplement/remark error
- **Location:** supplement (cat:sec-rig-pivotal supplement)
- **Detail:** The supplement claims that in a fusion category the quantum dimensions can be taken to be positive real numbers (Perron–Frobenius dimension). This is false as stated: the Perron–Frobenius dimension is positive real only for the *fusion* (Grothendieck) ring / based on the Frobenius–Perron eigenvector, and it coincides with the categorical quantum dimension only when the category is *pseudo-unitary* (or spherical with a suitable normalization). For a general fusion category the categorical (pivotal) dimension can be zero, negative, or non-real (e.g. the Ising-type categories with non-unitary twists, or categories where dim of a simple object is 0). The statement conflates the Perron–Frobenius dimension of the fusion ring with the categorical quantum dimension.
- **Proposed fix:** In a fusion category the *Frobenius–Perron dimension* (from the fusion rules) is a positive real number, but the categorical quantum dimension $\dim(a)$ need not be positive real; the two coincide when the category is pseudo-unitary (e.g. unitary fusion categories).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that a pivotal but non-spherical category exists via a Hopf algebra with S^2 not inner is imprecise
- **Category:** Supplement/remark error
- **Location:** example 3 (cat:sec-rig-pivotal example)
- **Detail:** The example says 'there exist pivotal but non-spherical categories (e.g. the representation category of a Hopf algebra whose $S^{2}$ is not an inner automorphism)'. For the finite-dimensional Hopf algebra $H$, the representation category is pivotal iff $S^{2}$ is inner (via a group-like element $g$), and it is spherical iff additionally $g$ is central / the pivotal structure is spherical. The phrasing 'S^2 not inner' would give a non-pivotal category, not a pivotal non-spherical one; the correct condition for pivotal-but-not-spherical is that $S^{2}$ is inner but the implementing group-like element is not central (or the trace is not symmetric). As written the parenthetical counterexample is wrong.
- **Proposed fix:** There exist pivotal but non-spherical categories, e.g. the representation category of a finite-dimensional Hopf algebra for which $S^{2}$ is inner (so the category is pivotal) but the implementing group-like element is not central, so the pivotal structure is not spherical.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Trace in symmetric monoidal category equals right trace of standard pivotal structure
- **Category:** Unsupported fact
- **Location:** hypcheck (cat:sec-rig-pivotal hypcheck)
- **Detail:** The hypcheck states that in a symmetric monoidal category the trace of \ref{cat:trace-dimension} coincides with the right trace of the standard pivotal structure coming from $\gamma$. This is only true when the symmetric monoidal category is *rigid* (has duals) and the symmetry is used to build the pivotal structure; moreover the identification requires the symmetry to be compatible (the standard pivotal structure $a\to a^{**}$ uses the braiding/symmetry). For a general symmetric monoidal category without duals the trace of \ref{cat:trace-dimension} is not defined via duals, and even with duals the equality holds only for the specific pivotal structure built from the symmetry. The statement is stated too strongly without the rigidity hypothesis.
- **Proposed fix:** In a *rigid* symmetric monoidal category, the trace of \ref{cat:trace-dimension} coincides with the right trace of the standard pivotal structure determined by the symmetry $\gamma$ (this uses rigidity; without duals the comparison is not defined).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Step 2 of trace-cyclic uses sliding lemma with h=g^* but the transpose direction is not justified
- **Category:** Logical gap
- **Location:** cat:trace-cyclic / Step 2
- **Detail:** Step 2 applies the second sliding identity of \ref{cat:sliding-lemma} to $h=g^{*}:a^{*}\to b^{*}$. The sliding lemma is stated for a morphism $h:c\to d$ with right duals of $c,d$; here $c=a^{*}$, $d=b^{*}$, and one needs that $a^{*},b^{*}$ have right duals (namely $a^{**},b^{**}$) and that the transpose $(g^{*})^{*}$ used in the lemma equals $g^{**}$. This is correct but the text does not note that $a^{*}$ and $b^{*}$ indeed have right duals (their double duals) and that the transpose of $g^{*}$ is $g^{**}$; the step silently identifies these. It is a minor gap but the identification $(g^{*})^{*}=g^{**}$ and the existence of right duals for $a^{*},b^{*}$ should be stated.
- **Proposed fix:** Since $a$ and $b$ have right duals, so do $a^{*}$ (with right dual $a^{**}$) and $b^{*}$ (with right dual $b^{**}$); applying the second sliding identity to $h=g^{*}:a^{*}\to b^{*}$ gives $\mathrm{ev}_{a^{*}}(g^{**}\otimes1_{a^{*}})=\mathrm{ev}_{b^{*}}(1_{b^{**}}\otimes g^{*})$, using $(g^{*})^{*}=g^{**}$.
- **Reported:** 2026-10-28 (10fede1)
