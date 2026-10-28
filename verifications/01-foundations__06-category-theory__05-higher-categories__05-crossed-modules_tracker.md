# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/05-crossed-modules.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/05-crossed-modules.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Crossed modules over general algebraic theories need not correspond to internal categories
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that replacing Grp by a general 'group-like' algebraic category (rings, Lie algebras, etc.) still gives a correspondence between internal categories and crossed-module analogues. This is false as stated. The equivalence between internal categories and crossed modules relies on specific properties of groups (the split of the reflexive graph, the Peiffer identity encoding the Eckmann–Hilton commutativity). For rings or Lie algebras the naive 'crossed module' analogue does not generally classify internal categories; the correct general framework (internal crossed modules in the sense of Janelidze, or the equivalence via internal groupoids in a semi-abelian/Mal'tsev category) requires additional hypotheses and is not simply 'the same correspondence'. The blanket claim '成り立つことが知られている' for rings and Lie algebras is overstated.
- **Proposed fix:** Restrict the claim: 'For a semi-abelian (or Mal'tsev) category with suitable properties, internal groupoids correspond to internal crossed modules in the sense of Janelidze; the naive analogue for arbitrary group-like algebraic theories such as rings or Lie algebras does not in general give such a correspondence (here we do not treat this).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Classification of strict 2-groups by pi_0, pi_1, action and H^3 class
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that Cat-internal groups (strict 2-groups) are classified, up to weak equivalence, by pi_0 = P/∂H, pi_1 = ker ∂, the action of pi_0 on pi_1, and a class k in H^3(pi_0, pi_1). This is imprecise: the standard classification (Sinh 1975, following Mac Lane–Whitehead) of strict 2-groups up to equivalence uses the data of pi_0, pi_1, the action, AND a cohomology class in H^3(pi_0, pi_1) only when pi_1 is abelian (which it is, since ker ∂ is central by the problem). However the attribution 'Mac Lane–Whitehead 1950' is for the classification of crossed modules / homotopy 2-types, and the precise statement requires pi_1 abelian and the action to be given; also the class lives in H^3 with coefficients in the pi_0-module pi_1. The statement as written is essentially correct but the attribution and the exact hypotheses (abelian pi_1, module structure) are not made explicit, and 'weak equivalence' for strict 2-groups should be specified as equivalence of the corresponding crossed modules. This is borderline; the main concern is the loose attribution.
- **Proposed fix:** State precisely: 'Strict 2-groups (crossed modules) are classified up to equivalence by the data (pi_0, pi_1, action of pi_0 on the abelian group pi_1, and a class in H^3(pi_0, pi_1)); this is the Mac Lane–Whitehead / Sinh classification of homotopy 2-types.'
- **Reported:** 2026-10-28 (10fede1)
