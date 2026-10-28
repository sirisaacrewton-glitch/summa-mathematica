# Verification tracker: `01-foundations/06-category-theory/03-monads/01-monads-algebras.html`

<!-- source: 01-foundations/06-category-theory/03-monads/01-monads-algebras.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 8 / Resolved: 0 / Ignored: 0

## Summary of the last run

I reviewed the page carefully, focusing on the supplement, examples, intuition, hypcheck comments, and the two problem solutions, as instructed. All statements I checked are mathematically correct: the Eilenberg–Moore adjunction proof, the comparison theorem and its uniqueness argument, the powerset and free-monoid algebra characterizations, the preorder/closure-operator example, the non-monadic Top example, and the attributions (Mac Lane vs Barr–Wells for monadicity, Manes for the powerset result). The two problem solutions are valid, including the empty-set case and the associativity derivation. I found no genuine errors of the six specified kinds, so no new issues are reported.

## Issues

### ISSUE-0001 [Open] Eilenberg–Moore is terminal, Kleisli is initial — but the supplement's phrasing about '始' and '並ぶ' is fine; check the '終' claim
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says \ref{cat:comparison-functor} states that X^T is the *terminal* object among adjunctions inducing T, and that the Kleisli category is the *initial* one. This is the standard result (Mac Lane VI.5), and the comparison theorem indeed gives a unique functor from any (A, F, G) inducing T to X^T commuting with the forgetful and free functors. This is correct as stated.
- **Proposed fix:** No change needed; the claim is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Powerset monad example: '結合律は ⋃⋃F = ⋃{⋃A : A ∈ F}'
- **Category:** Supplement/remark error
- **Location:** example 2 (冪集合)
- **Detail:** The stated identity for the associativity of the powerset monad is correct: μ_S ∘ μ_{PS}(F) = ⋃⋃F and μ_S ∘ Pμ_S(F) = ⋃{⋃A : A ∈ F}, and these are equal. The unit law ⋃{{s}:s∈A}=A=⋃{A} is also correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Preorder monad / closure operator: 'P が半順序なら TTx=Tx'
- **Category:** Supplement/remark error
- **Location:** example 4 (前順序の閉包作用素)
- **Detail:** The text claims that for a preorder P, a monad is a monotone T with x ≤ Tx and TTx ≤ Tx, and that if P is a partial order then TTx = Tx, so monads are exactly closure operators. This is correct: from x ≤ Tx we get Tx ≤ TTx by applying T (monotone), and TTx ≤ Tx is the monad condition, so TTx = Tx by antisymmetry. The examples (topological closure, subgroup generated) are genuine closure operators. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Top example: 'G は同型でも同値でもない：圏同値は充満である'
- **Category:** Supplement/remark error
- **Location:** example 2 (モナド的でない例)
- **Detail:** The argument is: G: Top → Set has left adjoint D (discrete topology), GD = 1, so the induced monad is the identity monad, whose algebras are just sets, so the comparison functor is G itself, which is not an isomorphism or equivalence. The justification that G is not an equivalence because equivalences are full is correct (a fully faithful and essentially surjective functor; G is not full since not every set map between spaces is continuous). The counterexample with indiscrete I and discrete D and the identity map GI → GD not being in the image of Top(I,D) is correct: the preimage of {0} under the identity is {0}, which is not open in the indiscrete topology. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Monadic functor definition: attribution to Mac Lane vs Barr–Wells
- **Category:** Unsupported fact
- **Location:** definition モナド的な関手
- **Detail:** The definition says: G is (strictly) monadic when the comparison functor K is an isomorphism of categories; some schools call it monadic when K is an equivalence (Mac Lane uses isomorphism, Barr–Wells use equivalence). This is a correct and standard attribution: Mac Lane (CWM VI.3) defines monadic via isomorphism, while Barr–Wells use equivalence. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Problem attribution: 'Mac Lane 第 VI 章 §2 演習 1。E. Manes による'
- **Category:** Unsupported fact
- **Location:** problem cat:prob-mon-powerset-algebras
- **Detail:** The problem attributes the result (P-algebras are complete semilattices) to Mac Lane CWM VI §2 Exercise 1 and to E. Manes. This is a standard attribution; the result that Eilenberg–Moore algebras for the powerset monad are complete semilattices (sup-lattices) is indeed due to Manes and appears in that exercise. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Solution to powerset problem: Step 3 minimality uses A' = {{x,u}:x∈S}∪{{u}} but the union of these is S∪{u} only if u∈S or handled separately
- **Category:** Logical gap
- **Location:** solution cat:prob-mon-powerset-algebras / Step 3
- **Detail:** In Step 3, the minimality argument writes h(S∪{u}) = h({h{x,u}:x∈S}∪{h{u}}) = h{u} = u. The family A' = {{x,u}:x∈S}∪{{u}} has union S∪{u} (since each {x,u}⊆S∪{u} and {u}⊆S∪{u}, and every element of S∪{u} lies in some member). Applying the associativity identity h(⋃A') = h{h(A):A∈A'} gives h(S∪{u}) = h({h{x,u}:x∈S}∪{h{u}}). Since u is an upper bound, h{x,u}=u for x∈S, and h{u}=u, so the right side is h{u}=u. This is correct. The empty-set case S=∅: then s=h(∅), and the argument with A'={{u}} gives h({s,u})=h(∅∪{u})=h{u}=u, so s≤u. Correct.
- **Proposed fix:** No change needed; the argument is valid.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Solution to monoid problem: associativity via columns ((s,t),(u)) and ((s),(t,u))
- **Category:** Logical gap
- **Location:** solution cat:prob-mon-monoid-algebras
- **Detail:** The solution derives associativity by applying the algebra associativity identity to the two double-sequences ((s,t),(u)) and ((s),(t,u)). Both concatenate to (s,t,u), so h applied to the concatenation is h((s,t,u)) in both cases. On the left, h∘μ of ((s,t),(u)) is h((h((s,t)),u)) = h((s·t,u)) = (s·t)·u. On the right, h((s),(t,u)) = h((s, t·u)) = s·(t·u). So (s·t)·u = s·(t·u). Correct. The unit law via ((s),()) giving h((s,e))=h((s))=s is also correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
