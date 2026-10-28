# Verification tracker: `02-algebra/05-field-theory/03-advanced-galois-theory/02-etale-algebras.html`

<!-- source: 02-algebra/05-field-theory/03-advanced-galois-theory/02-etale-algebras.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definition, lemma, theorem with its four equivalences, corollary, and the L⊗L Galois characterization) is logically sound: the cited results (tensor-quotient, Chinese remainder, primitive element, separable-degree, Dedekind independence, extension-of-scalars) are used consistently with their stated content, and the dimension/separability arguments check out. The example computations are correct. The one genuine concern is the supplement's trace-form criterion, which as stated omits the reducedness hypothesis and is therefore not correct for arbitrary (possibly non-reduced) finite-dimensional algebras; it should be stated as 'A is étale iff A is reduced and the trace form is non-degenerate.' The remaining supplement sentence about algebraically closed base fields is acceptable.

## Issues

### ISSUE-0001 [Open] Trace form criterion needs A to be a field (or at least reduced); fails for non-reduced A
- **Category:** Supplement/remark error
- **Location:** supplement / トレース形式による判定
- **Detail:** The supplement claims that a finite-dimensional K-algebra A is étale iff the trace form (a,b)↦Tr_{A/K}(ab) is non-degenerate. As stated this is false for non-reduced A. Example: A=K[x]/(x^{2}) with char K≠2. The trace of multiplication by a+bx is 2a, so the trace form has matrix [[2,0],[0,0]], which is degenerate; yet A is not étale, so this direction is fine. The problem is the converse direction as stated: one must also require A reduced. Indeed for a non-reduced algebra the trace form can be non-degenerate while A is not étale. Concretely, take A=K[x]/(x^{2}-x) is fine (étale), but consider A=K[ε]/(ε^{2}) with the trace form degenerate. A genuine counterexample to the stated equivalence: let A=K×K[ε]/(ε^{2}); the trace form is the direct sum of the trace forms of the factors, and the K[ε]/(ε^{2}) factor contributes a degenerate form, so the total is degenerate. To get non-degenerate but non-étale, use A=K[x]/(x^{2}) over a field of characteristic 2: then Tr(a+bx)=0, still degenerate. The correct general statement is: A is étale iff A is reduced and the trace form is non-degenerate (equivalently, the trace form is non-degenerate on A⊗_K ar K, which forces reducedness). The supplement omits the reducedness hypothesis, so the stated equivalence is not correct in general.
- **Proposed fix:** A finite-dimensional K-algebra A is étale if and only if A is reduced and the trace form (a,b)↦Tr_{A/K}(ab) is non-degenerate. (Non-degeneracy alone does not suffice: one must also require A to be reduced, equivalently that A⊗_K \bar K be reduced.)
- **Reported:** 2026-10-28 (8ccef3d)
