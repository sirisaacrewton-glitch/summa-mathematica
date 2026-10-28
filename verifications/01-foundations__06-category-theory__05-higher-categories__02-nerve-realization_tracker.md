# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/02-nerve-realization.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/02-nerve-realization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (adjunction, extension of K, free cocompletion, density criterion) are logically sound and the citations match their targets. The problems lie in the side remarks: the example on geometric realization gives a wrong reason for non-density of the standard-simplex functor (singular simplicial sets do determine weak homotopy type; the failure is that the counit is not a homeomorphism), and the supplement overstates the Dold-Kan correspondence as an instance of the same adjunction. These should be corrected.

## Issues

### ISSUE-0001 [Open] Singular simplicial sets do not determine the space; K is not dense
- **Category:** Supplement/remark error
- **Location:** example / item 2
- **Detail:** The example claims that the singular simplicial set functor is not dense because 'a space cannot in general be recovered from its singular simplicial set'. This is false: the singular simplicial set functor is the right adjoint of geometric realization, and geometric realization is left adjoint to it; the counit |Sing(X)| -> X is a weak homotopy equivalence but not generally a homeomorphism. Density of K:Delta_+ -> Top (standard simplices) is equivalent to the counit |N_K(X)| -> X being an isomorphism for all X, which fails for spaces not homeomorphic to a CW complex (e.g. the Cantor set, or a space with a non-discrete topology). So the conclusion 'K is not dense' is correct, but the stated reason is wrong: the singular simplicial set does determine the weak homotopy type, and the failure of density is due to the counit not being a homeomorphism, not to loss of information.
- **Proposed fix:** Replace the justification with: '$K$ is not dense: density would require the counit $\lvert N_{K}(X)\rvert\to X$ to be an isomorphism for every space $X$, but for a space that is not homeomorphic to a CW complex (e.g. the Cantor set) the counit is only a weak homotopy equivalence, not a homeomorphism.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Dold-Kan is not obtained from the same type of adjunction
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the Dold-Kan correspondence (simplicial abelian groups and chain complexes) 'is also obtained from the same type of adjunction'. The Dold-Kan correspondence is an equivalence of categories between simplicial abelian groups and connective chain complexes; it is not an instance of the nerve/realization adjunction |P| -| N_K for a functor K:C -> E. The realization-nerve adjunction is a general Kan-extension/colimit construction, whereas Dold-Kan is a Quillen equivalence / categorical equivalence with no such 'type paper gluing' realization form. This is an overstated analogy presented as a known fact.
- **Proposed fix:** Either delete the sentence, or weaken it to: 'The Dold-Kan correspondence (simplicial abelian groups and connective chain complexes) is a different kind of result (an equivalence of categories), not an instance of the realization-nerve adjunction.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Fundamental category claim for Cat nerve realization
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that for the nerve of Cat, realization is the fundamental category (generators-and-relations construction). This is correct for the composite 'simplicial set -> fundamental category' only when the simplicial set is the nerve of a category; for a general simplicial set the fundamental category is the left adjoint to the nerve, which is indeed the realization |P| for K:Delta_+ -> Cat. However, the realization here is with respect to K:Delta_+ -> Cat where Delta_+ includes the empty ordinal; the fundamental category of a general simplicial set is the realization along the same K, so the claim is essentially correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
