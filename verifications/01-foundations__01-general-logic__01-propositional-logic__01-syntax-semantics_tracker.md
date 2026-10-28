# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/01-syntax-semantics.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/01-syntax-semantics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the definitions, unique readability, structural recursion, semantics, coincidence lemma, uniform substitution, functional completeness and normal forms are all correctly argued, and the hypcheck references are accurate. The only genuine concern is a mild imprecision in the supplement, where a truth assignment is described as a homomorphism from the Boolean algebra of equivalence classes; strictly, $v$ lives on variables and its extension $\bar{v}$ acts on formulas and descends to the quotient. This is a side-remark imprecision rather than a mathematical error affecting the main results.

## Issues

### ISSUE-0001 [Open] Truth assignment is not a Boolean-algebra homomorphism
- **Category:** Supplement/remark error
- **Location:** supplement (logic:sec-prop-normal-forms)
- **Detail:** The supplement claims that a truth assignment $v$ is a homomorphism from the Boolean algebra of equivalence classes of formulas to the two-element Boolean algebra $\{0,1\}$. But $v$ is defined on propositional variables $\mathrm{PV}\to\{0,1\}$, and its extension $\bar{v}$ is defined on formulas, not on equivalence classes modulo truth-equivalence. More importantly, $\bar{v}$ does not preserve the Boolean operations as a homomorphism on the algebra of classes: the algebra's operations are induced by $\wedge,\vee,\neg$ on classes, and while $\bar{v}$ does respect these on formulas, the map on classes is well-defined only because truth-equivalence is defined via all valuations. The statement as written conflates the evaluation map on formulas with a homomorphism on the quotient algebra; the quotient algebra is isomorphic to $\{0,1\}^{\{0,1\}^{n}}$ and evaluation at $v$ is one of the projection homomorphisms, which is correct, but the phrasing 'truth assignment $v$ is a homomorphism from this Boolean algebra' is imprecise since $v$ itself is only on variables. This is a genuine imprecision in a side remark.
- **Proposed fix:** Replace with: 'Each truth assignment $v$ extends to a Boolean-algebra homomorphism $\bar{v}$ from the algebra of formulas (with operations $\wedge,\vee,\neg$) to $\{0,1\}$, and this descends to the quotient by truth-equivalence; the quotient algebra is isomorphic to the power set Boolean algebra $\mathcal{P}(\{0,1\}^{n})$, and the maps $\bar{v}$ correspond to the projections (evaluations at a point).'
- **Reported:** 2026-10-28 (8ccef3d)
