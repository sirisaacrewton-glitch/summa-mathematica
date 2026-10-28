# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/07-wedderburn-principal.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/07-wedderburn-principal.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its supporting lemmas (separable cocycle, constructions, central division algebra, transitivity, perfect-field semisimplicity) are logically sound; the proofs check out, including the reduction to J^{2}=0 and the induction. The only genuine problems are in the closing supplement: the claim that a separable algebra has vanishing Hochschild cohomology H^{n}(S,M) for all n≥1 is stated without the necessary qualification on the coefficient bimodule and is stronger than what the cited n=2 lemma supports, and the Maschke analogy is imprecise about coefficients. No issues in the theorem, lemmas, proofs, hypcheck, or problem/solution.

## Issues

### ISSUE-0001 [Open] Hochschild cohomology vanishing for all n≥1 is false
- **Category:** Supplement/remark error
- **Location:** supplement (mod:sec-wp-problems supplement)
- **Detail:** The supplement claims that \ref{mod:separable-cocycle} is the n=2 case of the statement that the Hochschild cohomology H^{n}(S,M) of a separable algebra vanishes for all n≥1. This is false. For a separable algebra S, H^{n}(S,M)=0 holds for n≥1 only when M is a bimodule that is symmetric (i.e. the left and right actions coincide, so M is a module over S⊗S^{op}); in general H^{n}(S,M) need not vanish. Concretely, for S=k a field (separable) and M=S=k as a bimodule, H^{1}(k,k)=0, but for a general bimodule the vanishing fails. The correct statement is that H^{n}(S,M)=0 for n≥1 for every S-bimodule M only in the special case where the coefficient module is symmetric; the general theorem is that S is separable iff every bimodule is relatively projective, which gives vanishing of H^{n}(S,M) for n≥1 for all bimodules M — but this requires the full separability (relative projectivity of all modules), not merely the existence of a separability idempotent applied naively. The claim as stated ("H^{n}(S,M) vanishes for n≥1") is stated more strongly than what the cited lemma (n=2 cocycle) supports and is imprecise about the coefficient module.
- **Proposed fix:** Replace with: "\ref{mod:separable-cocycle} is the n=2 case of the fact that for a separable algebra S the Hochschild cohomology H^{n}(S,M) vanishes for all n≥1 and every S-bimodule M (equivalently, every S-bimodule is relatively projective)."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Maschke analogy: group cohomology vanishing needs symmetry of coefficients
- **Category:** Supplement/remark error
- **Location:** supplement (mod:sec-wp-problems supplement)
- **Detail:** The supplement says the situation is "the same shape as Maschke's theorem for group rings (if |G| is invertible then group cohomology vanishes)". Maschke's theorem gives semisimplicity of kG when |G| is invertible in k, hence vanishing of group cohomology H^{n}(G,M) for n≥1 for all kG-modules M. This part is essentially correct, but the analogy is stated loosely: the separability idempotent \frac{1}{|G|}\sum_{g} g\otimes g^{-1} is indeed the standard separability idempotent for kG, so the analogy is fine. However, the phrase "group cohomology vanishes" should specify that it is cohomology with coefficients in any kG-module, and that this requires |G| invertible in k. As written it is acceptable but imprecise; the main genuine error is the H^{n} claim above. This item is reported only to flag the imprecision.
- **Proposed fix:** State: "...the same shape as Maschke's theorem (if |G| is invertible in k then kG is semisimple and H^{n}(G,M)=0 for all n≥1 and every kG-module M); the separability idempotent is the generalization of \frac{1}{|G|}\sum_{g} g\otimes g^{-1}."
- **Reported:** 2026-10-28 (10fede1)
