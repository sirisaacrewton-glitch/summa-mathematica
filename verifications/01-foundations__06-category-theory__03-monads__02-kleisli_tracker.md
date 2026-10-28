# Verification tracker: `01-foundations/06-category-theory/03-monads/02-kleisli.html`

<!-- source: 01-foundations/06-category-theory/03-monads/02-kleisli.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kleisli comparison functor is not an equivalence onto FX in general
- **Category:** Supplement/remark error
- **Location:** cat:kleisli-comparison (statement) and supplement '前提を変えると'
- **Detail:** The supplement says the Kleisli comparison functor L is an isomorphism iff 'F is bijective on objects'. This is wrong: L is full and faithful with image the full subcategory on objects Fx, so L is an equivalence onto FX whenever FX is replete (e.g. always when A is a full subcategory closed under isomorphism, or in the example given). L is an isomorphism only when F is bijective on objects AND FX is replete; more precisely L is an isomorphism iff F is bijective on objects and every object of A isomorphic to some Fx is itself of the form Fx. The example in the text (constant monad on Set) confirms L is an equivalence but not an isomorphism, so 'F bijective on objects' is not the right criterion for isomorphism. Also the problem cat:prob-kl-ff-free states X_T is equivalent to FX, which is consistent with equivalence, not isomorphism.
- **Proposed fix:** Replace with: 'The Kleisli comparison functor L is always full and faithful with image the full subcategory on objects Fx, hence an equivalence onto FX; it is an isomorphism iff F is bijective on objects and FX is replete (closed under isomorphism in A).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Beck's theorem condition stated too vaguely
- **Category:** Supplement/remark error
- **Location:** supplement '前提を変えると'
- **Detail:** The supplement says 'the condition for the comparison functor K: A -> X^T to be an isomorphism is Beck's theorem'. Beck's monadicity theorem gives conditions for K to be an equivalence (or for G to be monadic), not an isomorphism. Stating it as 'isomorphism' is imprecise/overstated.
- **Proposed fix:** Replace with: 'The condition for the comparison functor K: A -> X^T to be an equivalence (i.e. for G to be monadic) is given by Beck's monadicity theorem (\ref{cat:beck-monadicity}).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Kleisli arrows described as terms in variables from y is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement '類似の定理'
- **Detail:** The supplement says a Kleisli arrow x -> Ty is 'a term with elements of y as variables in which each element of x is written', i.e. a substitution. This is imprecise: a Kleisli arrow x -> Ty corresponds to a substitution assigning to each variable of x a term (an element of Ty) in the variables y; it is not itself 'a term in variables y with elements of x written'. The direction of the substitution is misdescribed.
- **Proposed fix:** Replace with: 'A Kleisli arrow x -> Ty corresponds to a substitution assigning to each element of x a term (element of Ty) in the variables y, and Kleisli composition is composition of substitutions.'
- **Reported:** 2026-10-28 (8ccef3d)
