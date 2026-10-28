# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/07-herbrand.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/07-herbrand.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Skolemization direction for Herbrand's theorem is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that for general formulas one reduces to universal form by Skolemization (replacing ∃ by new function symbols) and then applies Herbrand's theorem. But Skolemization replaces ∃ by Skolem *functions* and ∀ by Skolem *constants*, producing a formula that is equisatisfiable, not equivalent, and the result is generally not a universal formula (it may still contain ∀ and the Skolem functions). Herbrand's theorem as stated here applies to universal formulas ∀x B with B quantifier-free; to use it one must Skolemize the *negation* (i.e., replace the existential quantifiers of the negated formula by Skolem functions) so that the resulting formula is universal, and then use equisatisfiability. As written, the claim that Skolemization 'reduces to universal form' and then Herbrand applies is imprecise/incorrect about which quantifiers are replaced and about the equivalence being only equisatisfiability.
- **Proposed fix:** For a general formula $F$, to test provability of $\Rightarrow F$ one considers the negation and Skolemizes the existential quantifiers of $\neg F$ (equivalently, replaces the existential quantifiers of $F$ by Skolem functions), obtaining a universal formula $\forall\vec{x}\,B$ with $B$ quantifier-free that is equisatisfiable with $F$; then Herbrand's theorem applied to $\forall\vec{x}\,B\Rightarrow$ yields a finite propositional (quantifier-free) refutation, and provability of $F$ is equivalent to unsatisfiability of the Skolemized universal formula.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Mid-sequent theorem attribution/statement is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that from cut elimination one obtains the mid-sequent theorem: 'a cut-free derivation of a prenex formula can be split at a quantifier-free mid-sequent into a propositional part and a quantifier part.' The mid-sequent theorem (Gentzen's Hauptsatz corollary) applies to derivations of *prenex* sequents and says the derivation can be rearranged so that no quantifier inference occurs below the mid-sequent and no propositional inference above it (up to the prenex form). The phrasing 'quantifier-free mid-sequent' is acceptable, but the claim as stated omits the essential hypothesis that the end-sequent consists of prenex formulas (and that the mid-sequent is quantifier-free only when the matrix is). As stated it reads as applying to arbitrary formulas, which is false.
- **Proposed fix:** The mid-sequent theorem applies to sequents whose formulas are in prenex form: any cut-free derivation of a prenex sequent can be transformed so that there is a 'mid-sequent' (with the same quantifier-free matrix) such that above it only propositional inferences occur and below it only quantifier inferences (and structural rules) occur.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Resolution 'starts from' Herbrand's theorem overstated
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says the resolution principle of automated theorem proving 'takes this theorem as its starting point.' Resolution (Robinson) is a refutation-complete calculus for clause logic; its completeness is proved independently, and while Herbrand's theorem provides a semantic justification (ground instances / Herbrand universes) for lifting ground resolution to first-order resolution, resolution is not derived from Herbrand's theorem as a starting point in the sense implied. This is an overstatement of the historical/logical dependence.
- **Proposed fix:** Herbrand's theorem provides a semantic foundation for automated theorem proving: it shows that first-order validity reduces to the unsatisfiability of finitely many ground (propositional) instances, and the completeness of resolution can be justified via Herbrand's theorem (ground resolution plus lifting).
- **Reported:** 2026-10-28 (10fede1)
