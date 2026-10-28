# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/02-fundamental-theorem.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/02-fundamental-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that the category of intermediate fields is contravariantly equivalent to the category of transitive G-sets G/H
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement states that the category of intermediate fields of a finite Galois extension L/K is contravariantly equivalent to the category of transitive G-sets G/H. This is false as a statement about categories: the intermediate fields form a poset (a thin category), whereas the category of transitive G-sets G/H with G-equivariant maps is not thin (e.g. for G=S_3, there are multiple G-maps between coset sets, and endomorphisms of G/H need not be identity). The Galois correspondence is an anti-isomorphism of posets (order-reversing bijection), not a categorical equivalence. Only the underlying sets/poset of subgroups correspond.
- **Proposed fix:** The fundamental theorem says that the Galois connection between the poset of intermediate fields and the poset of subgroups is an anti-isomorphism (an order-reversing bijection) for Galois extensions. Categorically, the poset of intermediate fields is anti-isomorphic (as a poset) to the poset of subgroups of G, equivalently to the poset of transitive G-sets G/H under G-equivariant maps; this poset anti-isomorphism, extended to all finite separable algebras, is the content of Grothendieck's Galois theory.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated claim that Galois groups of polynomials over Q can be computed algorithmically (as permutation groups)
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The supplement asserts that the Galois group of a polynomial over Q, including its action as a permutation group, 'is known to be computable by algorithm'. While the Galois group as an abstract group (and the splitting field) is computable in principle, computing the action on the roots as a permutation group requires factoring the polynomial (or resolving the roots), which is not known to be polynomial-time and in general the statement as written is imprecise/overstated: the standard algorithms (e.g. Stauduhar, van der Waerden) compute the Galois group as a permutation group only after choosing a suitable ordering of roots and require factoring; the claim as stated ('can be computed') is acceptable in principle but the parenthetical '(including the action as a permutation group)' overstates what is straightforwardly algorithmic. This is a borderline remark; the main issue is the imprecision.
- **Proposed fix:** The Galois group of a polynomial over Q can in principle be computed by algorithms (e.g. via factoring and Stauduhar's method), including its action on the roots once the roots are suitably ordered; however these algorithms are not efficient in general and require factoring the polynomial.
- **Reported:** 2026-10-28 (8ccef3d)
