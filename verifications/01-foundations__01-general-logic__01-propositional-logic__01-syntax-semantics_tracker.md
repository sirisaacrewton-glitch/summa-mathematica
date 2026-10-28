# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/01-syntax-semantics.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/01-syntax-semantics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Truth assignment is not a Boolean-algebra homomorphism
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that a truth assignment $v$ corresponds to a homomorphism from the Boolean algebra of equivalence classes of formulas to the two-element Boolean algebra $\{0,1\}$. This is imprecise: $v$ is a map on propositional variables, and the induced map $\bar{v}$ on formulas is only defined on the quotient (the Lindenbaum algebra) after passing to equivalence classes. Moreover, as stated, $v$ itself is a map $\mathrm{PV}\to\{0,1\}$, not a map on the algebra of formula classes, so calling it a homomorphism is not literally correct. The intended statement is that the induced map on the quotient is a Boolean-algebra homomorphism.
- **Proposed fix:** A truth assignment $v$ induces, via $\bar{v}$, a well-defined map on the set of equivalence classes of formulas (formulas with the same truth value under every assignment), and this induced map is a homomorphism of Boolean algebras from the Lindenbaum algebra to the two-element Boolean algebra $\{0,1\}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Lindenbaum algebra identification requires completeness, not just the algebra
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says that the algebra obtained by quotienting by derivability (the Lindenbaum algebra) 'becomes the same thing' as the algebra of truth functions, and that this is the content of the completeness theorem. The identification of the Lindenbaum algebra (formulas modulo provable equivalence) with the algebra of truth functions is indeed equivalent to semantic completeness, but the phrasing 'the same thing' is slightly overstated: the Lindenbaum algebra is the algebra of formulas modulo provable equivalence, while the algebra of truth functions is the algebra of formulas modulo semantic equivalence; completeness says these two congruences coincide. This is essentially correct but the statement should be precise about which quotient is being identified.
- **Proposed fix:** The Lindenbaum algebra (formulas modulo provable equivalence) coincides with the algebra of truth functions (formulas modulo semantic equivalence); this identification is exactly the content of the completeness theorem (\ref{logic:page-prop-completeness}).
- **Reported:** 2026-10-28 (10fede1)
