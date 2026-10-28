# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/05-crossed-modules.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/05-crossed-modules.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Crossed modules over general algebraic theories need not correspond to internal categories
- **Category:** Supplement/remark error
- **Location:** supplement, '前提を変えるとと' paragraph
- **Detail:** The supplement claims that replacing Grp by a general 'group-like' algebraic category (rings, Lie algebras, etc.) still gives a correspondence between internal categories and analogues of crossed modules. This is false as stated. The equivalence between internal categories and crossed modules relies on specific properties of groups (the split of $s$ by $i$, the semidirect product decomposition $C_{1}\cong\ker s\rtimes C_{0}$, and the Peiffer/commutator condition). For rings or Lie algebras the naive analogue fails: e.g. an internal category in the category of rings does not decompose as a semidirect product of the kernel with the object of objects in the same way, and the correct generalization (Janelidze's internal crossed modules / cat^1-algebras) requires additional structure (e.g. Smith/Pedicchio conditions, or restricting to the 'categories of interest' of Orzech). The blanket claim 'it is known to hold' is overstated.
- **Proposed fix:** Replace with: 'For a general algebraic category the naive analogue of a crossed module does not in general correspond to internal categories; the correct generalization requires additional hypotheses (e.g. Orzech's categories of interest, or Janelidze's internal crossed modules). We do not treat this here.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Postnikov k-invariant classification needs the action to be specified and is only for the strict/connected case
- **Category:** Supplement/remark error
- **Location:** supplement, '似た定理' paragraph
- **Detail:** The supplement states that strict 2-groups are classified by $\pi_{0}=P/\partial H$, $\pi_{1}=\ker\partial$, the action of $\pi_{0}$ on $\pi_{1}$, and a class $k\in H^{3}(\pi_{0},\pi_{1})$. This is imprecise: the third cohomology class is taken with coefficients in the $\pi_{0}$-module $\pi_{1}$ (the action must be part of the data, which the text does mention), but more importantly the classification 'up to weak equivalence' by $(\pi_{0},\pi_{1},\text{action},k)$ is the classification of connected 2-types / homotopy 2-types, and the correspondence to strict 2-groups up to weak equivalence requires care: not every such triple with a $k$-invariant arises from a strict 2-group in the naive sense without passing through the appropriate notion of equivalence, and the statement as written ('classified by ... up to weak equivalence') conflates the classification of 2-types with that of strict 2-groups. The attribution to 'Mac Lane-Whitehead 1950, Shin 1975' is also vague.
- **Proposed fix:** State precisely: 'Connected homotopy 2-types are classified by triples $(\pi_{0},\pi_{1},\text{action of }\pi_{0}\text{ on }\pi_{1},k\in H^{3}(\pi_{0};\pi_{1}))$; strict 2-groups model these up to the appropriate notion of weak equivalence.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Peiffer identity is not simply Eckmann-Hilton commutativity
- **Category:** Supplement/remark error
- **Location:** supplement, last paragraph ('高い視点から')
- **Detail:** The supplement says the Peiffer identity (CM2) is 'the commutativity imposed by the Eckmann-Hilton argument written in these coordinates'. This is an overstatement: the Eckmann-Hilton argument gives commutativity of two monoid structures on the same set (e.g. $\pi_{2}$), whereas the Peiffer identity ${}^{\partial h}h'=hh'h^{-1}$ expresses that the action of $H$ on itself via $\partial$ is by conjugation; it is the compatibility making the composition a homomorphism, not literally the Eckmann-Hilton commutativity. The connection is motivational at best and the identification is imprecise.
- **Proposed fix:** Soften to: 'The Peiffer identity is the compatibility condition that, together with (CM1), makes the composition a group homomorphism; it is the algebraic shadow of the interchange law in a 2-category (cf. the Eckmann-Hilton argument).'
- **Reported:** 2026-10-28 (8ccef3d)
