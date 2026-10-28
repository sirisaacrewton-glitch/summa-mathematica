# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/01-syntax.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/01-syntax.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Polish notation weight of a true initial segment can be 0, contradicting the claim that terms are not true initial segments
- **Category:** Supplement/remark error
- **Location:** logic:prob-polish / Solution part 1 and 2
- **Detail:** In part 1 the solution proves w(u) >= 0 for true initial segments, and part 2 concludes 'any term is not a true initial segment of another term (true initial segments have weight >= 0, terms have weight -1)'. But the bound w(u) >= 0 is not strict: a true initial segment can have weight exactly 0. For example with a binary f, the term t = f x y has the true initial segment u = f x with w(u) = (2-1) + (-1) = 0. So the weight argument alone does not exclude a true initial segment of weight 0; the conclusion 'no term is a true initial segment of another' does not follow from w(u) >= 0. The correct argument needs strict positivity for proper initial segments that are themselves 'complete' prefixes, or a separate argument (e.g. that a true initial segment of weight 0 cannot be a term because a term has weight -1). As stated, the reasoning in part 2 is a non sequitur.
- **Proposed fix:** Replace part 2 with: 'By part 1, every term has weight -1. Suppose a term s is a true initial segment of a term t. Then w(s) = -1, but part 1 gives w(s) >= 0 for true initial segments, a contradiction. Hence no term is a true initial segment of another. Then compare components left to right as in \ref{logic:unique-readability-terms} Step 3.' (Note that the inequality w(u) >= 0 is not strict, so the contradiction must use w(s) = -1 for the term s, not merely w(u) >= 0.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that without unique readability the recursion equation has no solution is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement after logic:structural-recursion
- **Detail:** The supplement says that for the unparenthesized notation p -> q -> r, defining truth by 'F(alpha -> beta) is false iff F(alpha) true and F(beta) false' yields no map satisfying the definition. This is stated too strongly: the issue is that the recursion clause is not well-defined as a function of the string (the same string admits two readings giving different values), so no function F on strings can satisfy the clause for all decompositions simultaneously. But the phrasing 'a map satisfying this definition does not exist' can be misread; more importantly the example uses propositional symbols p,q,r which are not part of the first-order language as defined (no propositional letters, only relation symbols applied to terms). The counterexample should use atomic formulas of the language, e.g. P, Q, R (nullary-style via relation symbols applied to terms) or formulas like x=x.
- **Proposed fix:** Rephrase: 'Take the notation without parentheses, writing alpha -> beta for implication. Then the string P -> Q -> R (with P,Q,R atomic formulas) can be read both as (P -> Q) -> R and as P -> (Q -> R). If we try to define F by the clause "F(alpha -> beta) is false iff F(alpha) is true and F(beta) is false", the value assigned to the single string P -> Q -> R depends on which reading is used; when P,Q,R are all false the two readings give different values. Hence there is no function F on strings satisfying the clause for every decomposition, so structural recursion fails without unique readability.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck claim that finite variables would prevent expressing 'there are n distinct things' is misleading
- **Category:** Supplement/remark error
- **Location:** logic:fresh-variable / hypcheck
- **Detail:** The hypcheck says that if there were only finitely many variables, one could not write 'there are n distinct things' without n distinct variables. This is imprecise: with finitely many variables one can still express 'there are at least n distinct elements' using nested quantifiers that reuse variables (e.g. exists x_1 ... exists x_n with inequalities, reusing variables via shadowing is possible but requires care). The real use of infinitely many variables is to have fresh variables for renaming bound variables and eigenvariables, not the expressibility of finiteness conditions. The stated justification is therefore an overstatement.
- **Proposed fix:** Replace the comment with: 'The infinity of Var is essential: it guarantees fresh variables for renaming bound variables and choosing eigenvariables. (Finiteness conditions such as "there are at least n elements" can still be expressed with finitely many variables by reusing them, so the point is freshness, not expressibility of cardinality conditions.)'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Intuition that logical complexity equals number of arrows and quantifiers ignores abbreviations
- **Category:** Supplement/remark error
- **Location:** logic:sentence / definition remark
- **Detail:** The definition states c(phi) equals the number of -> and forall occurring in phi. This is true for the primitive formula as a string only if phi is written with primitive symbols; but formulas built with abbreviations (neg, wedge, vee, exists) contain derived symbols, and after expansion the count refers to the expanded string. The parenthetical 'confirmed by induction on formulas' is fine for primitive formulas, but the statement as written ('the number of -> and forall appearing in phi') is ambiguous for abbreviated formulas. This is a minor imprecision but could mislead.
- **Proposed fix:** Add: 'Here the count is taken in the formula written with primitive symbols only (after expanding all abbreviations); for an abbreviated formula the count refers to its expansion.'
- **Reported:** 2026-10-28 (10fede1)
