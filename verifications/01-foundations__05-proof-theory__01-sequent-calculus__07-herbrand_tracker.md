# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/07-herbrand.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/07-herbrand.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, lemma, corollary and their proofs are logically sound: the cut-elimination citation, the induction on height, the inversion and weakening/contraction uses are all appropriate, and the hypcheck comments are accurate. The only genuine concern is in the supplement, where the claim that Skolemization reduces general formulas to universal form and then Herbrand's theorem applies is stated too strongly; it should be phrased in terms of equisatisfiability and the refutation form of Herbrand's theorem. The mid-sequent theorem and resolution remarks are acceptable as informal pointers.

## Issues

### ISSUE-0001 [Open] Skolemization does not reduce general formulas to universal form for Herbrand's theorem
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that for general formulas, Skolemization (replacing ∃ by new function symbols) reduces to universal form and then Herbrand's theorem can be applied. This is imprecise/overstated. Skolemization produces an equisatisfiable formula, not an equivalent one, and it does not by itself yield a universal *antecedent* of the form ∀x B with B quantifier-free whose derivability is equivalent to the original. Herbrand's theorem in the stated form applies to universal antecedents; extending to arbitrary formulas requires Herbrand disjunctions for existential conclusions (the corollary) or Skolemization combined with a satisfiability/refutation formulation, not a direct application of the theorem as stated. As written the sentence suggests a straightforward reduction that is not correct.
- **Proposed fix:** For general formulas one first puts the formula in prenex form and Skolemizes: replacing each existential quantifier by a new function symbol yields an equisatisfiable universal formula ∀x B (B quantifier-free). Herbrand's theorem (in the refutation/satisfiability form) then says the original formula is unsatisfiable iff finitely many open instances B(t_1),...,B(t_n) are propositionally unsatisfiable. This is a reduction to a propositional unsatisfiability question, not a direct application of the derivability equivalence stated above.
- **Reported:** 2026-10-28 (8ccef3d)
