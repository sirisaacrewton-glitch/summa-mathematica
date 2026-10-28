# Verification tracker: `01-foundations/06-category-theory/03-monads/02-kleisli.html`

<!-- source: 01-foundations/06-category-theory/03-monads/02-kleisli.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kleisli comparison functor being an isomorphism requires more than F bijective on objects
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると) / cat:sec-kl-words
- **Detail:** The supplement claims that the Kleisli comparison functor L is an isomorphism iff 'F is bijective on objects'. This is imprecise. L is full and faithful always (Step 4), so L is an isomorphism iff it is bijective on objects, i.e. iff F is bijective on objects AND every object of A is of the form Fx. But even with F bijective on objects, L need not be an isomorphism unless A's objects are exactly the Fx. More importantly, the example in the text (constant monad on Set) shows L is full and faithful but not injective on objects, and the text says 'F が対象で単射なら同型になる' — but F bijective on objects alone does not suffice: one also needs L essentially surjective, i.e. every object of A is (isomorphic to) some Fx. The correct condition is: L is an isomorphism iff F is bijective on objects and every object of A is of the form Fx (equivalently L is bijective on objects).
- **Proposed fix:** The Kleisli comparison functor $L$ is always full and faithful; it is an isomorphism iff it is bijective on objects, i.e. iff $F$ is bijective on objects and every object of $\mathbf{A}$ is of the form $Fx$ (equivalently, $L$ is bijective on objects).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Beck's theorem condition for K being an isomorphism is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると) / cat:sec-kl-words
- **Detail:** The supplement says 'the condition for the comparison functor K: A → X^T to be an isomorphism is Beck's theorem'. Beck's monadicity theorem gives a condition for K to be an equivalence (or for G to be monadic), not literally an isomorphism. The comparison functor K is an isomorphism only under the additional requirement that G is bijective on objects (or that A's objects are exactly the free algebras). Stating 'K is an isomorphism iff Beck's conditions' overstates the theorem.
- **Proposed fix:** The comparison functor $K\colon\mathbf{A}\to\mathbf{X}^{T}$ is an equivalence (and $G$ is monadic) under Beck's conditions (\ref{cat:beck-monadicity}); it is an isomorphism iff moreover $G$ is bijective on objects (so that every $T$-algebra is of the form $Fx$).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Kleisli arrows described as terms/substitutions is imprecise for general monads
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理) / cat:sec-kl-words
- **Detail:** The supplement says 'a Kleisli arrow x → Ty is a term with variables from y in which each element of x is written, i.e. a substitution'. This is only accurate for the word/free-semigroup (or Lawvere-type) monad. For a general monad T on Set (e.g. the powerset monad, the maybe monad), a Kleisli arrow x → Ty is not a term/substitution in this syntactic sense. The identification of Kleisli arrows with substitutions holds specifically for monads arising from algebraic theories (finitary monads / Lawvere theories), not for arbitrary monads.
- **Proposed fix:** For a monad arising from an algebraic theory (e.g. the word monad), a Kleisli arrow $x\to Ty$ can be read as a term with variables from $y$ in which each element of $x$ is substituted, and Kleisli composition is substitution. For a general monad this syntactic reading does not apply.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Löwe's theory / Lawvere theory statement about finitary monads is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から) / cat:sec-kl-words
- **Detail:** The supplement states that for finitary monads on Set, algebras can be represented as finite-product-preserving functors from the opposite of the subcategory of the Kleisli category on finite sets (Lawvere theory) to Set. This is essentially the Lawvere theory / finitary monad correspondence, but the phrasing 'the opposite of the subcategory of the Kleisli category on finite sets' is imprecise: the Lawvere theory is the opposite of the full subcategory of the Kleisli category on finite sets (or equivalently the category of finitely generated free algebras), and algebras are product-preserving functors from the Lawvere theory to Set. The statement as written is roughly correct but the identification of the Lawvere theory with 'the opposite of the subcategory of the Kleisli category on finite sets' should be stated as the opposite of the full subcategory on finite sets (which is the Kleisli category restricted to finite sets), and the functors are required to preserve finite products. This is borderline; the main imprecision is calling it 'the subcategory' without specifying full and finite.
- **Proposed fix:** For a finitary monad on $\mathbf{Set}$, the Lawvere theory is the opposite of the full subcategory of the Kleisli category on finite sets (equivalently, the category of finitely generated free algebras), and algebras are finite-product-preserving functors from this Lawvere theory to $\mathbf{Set}$.
- **Reported:** 2026-10-28 (10fede1)
