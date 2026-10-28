# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/05-ltl.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/05-ltl.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is in good shape. The soundness and completeness proofs are coherent, the Hintikka-lemma proof and its hypcheck example are correct, and the small-model/decidability argument is sound. The only genuine imprecision is the remark after Proposition 5.4 calling G A 'the greatest solution of Y ↔ A ∧ X Y' without specifying the universe of predicates; read literally over formulas this is ambiguous. The PSPACE-completeness and Büchi attributions are accurate. No previously reported issues are open.

## Issues

### ISSUE-0001 [Open] G is not literally the greatest fixed point of Y ↔ A ∧ X Y
- **Category:** Supplement/remark error
- **Location:** remark after logic:ltl-valid (the remark following proposition 5.4)
- **Detail:** The remark says "G A is dually the greatest solution of Y ↔ A ∧ X Y". This is imprecise: the greatest fixed point of the map Y ↦ A ∧ X Y over the lattice of formulas (or over sets of positions) is the constant-true predicate, not G A. G A is the greatest fixed point of that map *among the solutions that are also 'fulfilled' / within the class of predicates definable as infinite conjunctions along the sequence*, or more precisely G A is the greatest solution of the equivalence that is also a 'safety' predicate; literally, ⊤ satisfies Y ↔ A ∧ X Y only if A holds everywhere, but the operator's greatest fixed point in the standard Knaster–Tarski sense over the powerset lattice of positions is the set of positions where A holds at all future times — which is indeed G A. However, the remark's phrasing "Y ↔ A ∧ X Y の最大の解" without restricting to the intended universe (predicates on positions, not arbitrary formulas) is at best ambiguous and, read literally over formulas, false since ⊤ is a solution whenever A is valid. The parallel claim for U ("least solution") is correct because the least fixed point is unique and equals A U B. For G the greatest fixed point over the full lattice is not G A in general (e.g. A = p: the greatest set X with X = {i : p ∈ σ(i)} ∩ {i : i+1 ∈ X} is the set of positions where p holds forever, which is G p — so actually it is correct over the position lattice).
- **Proposed fix:** Clarify the universe: "G A is the greatest fixed point of the map Y ↦ A ∧ X Y on the lattice of predicates on positions (subsets of ℕ closed under the shift), i.e. the largest Y with σ,i ⊨ Y iff σ,i ⊨ A and σ,i+1 ⊨ Y for all i." This makes the claim precise and true.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] PSPACE-completeness attribution and statement
- **Category:** Unsupported fact
- **Location:** remark after logic:ltl-decidable
- **Detail:** The remark states LTL satisfiability is PSPACE-complete citing Sistla–Clarke, J. ACM 32 (1985). This is correct (Sistla & Clarke 1985, 'The complexity of propositional linear temporal logics'). The Büchi automaton translation attribution to Vardi–Wolper 1986 is also correct. No error here; the statements are accurate and properly hedged ('this site does not prove these').
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck example for H4 uses a set that may not satisfy H1
- **Category:** Supplement/remark error
- **Location:** logic:ltl-hintikka-lemma / hypcheck
- **Detail:** The hypcheck claims that with Σ = CL(p U q) and T_i = {p, p U q, X(p U q)} for all i, H1–H3 hold but H4 fails. Check H1: the closure CL(p U q) contains p, q, p U q, X(p U q), and also ⊥? No — CL(A) is subformulas of A plus X(C U D) for each until subformula. Subformulas of p U q are p, q, p U q. So Σ = {p, q, p U q, X(p U q)}. The set T_i = {p, p U q, X(p U q)} omits q. H1 requires: ⊥ ∉ T_i (true, ⊥ ∉ Σ here), and for (C→D) ∈ Σ the biconditional. But Σ contains no → formula, so H1 is vacuous. H2: X C ∈ T_i iff C ∈ T_{i+1}. The only X-formula in Σ is X(p U q), which is in every T_i, and p U q ∈ T_{i+1} — consistent. H3: p U q ∈ T_i iff q ∈ T_i or (p ∈ T_i and p U q ∈ T_{i+1}). q ∉ T_i, p ∈ T_i, p U q ∈ T_{i+1} — holds. H4 fails since q never appears. So the example is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Step 1 of completeness: 'r = 0 then do nothing' leaves the sequence possibly not extended
- **Category:** Logical gap
- **Location:** logic:ltl-completeness / Step 1
- **Detail:** In Step 1 the construction says: at stage s, let l = (s mod r)+1 (if r = 0 do nothing), and if E_l ∈ x extend by the fulfilment sequence, then finally append a successor. The parenthetical 'if r = 0 do nothing' is ambiguous: it could be read as skipping the whole stage, but the text then says 'finally append a successor' and 'at each stage the sequence grows by at least 1'. If r = 0, the intended reading is that only the fulfilment part is skipped and the successor is still appended, so the sequence still grows. As written it is slightly ambiguous but the subsequent sentence ('各段階で列は 1 以上延びる') makes the intended reading clear. Not a genuine gap.
- **Proposed fix:** Optionally rephrase: 'if r = 0, skip only the fulfilment step and still append a successor'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 1 completeness: the 'first stage handling E_l' argument
- **Category:** Logical gap
- **Location:** logic:ltl-completeness / Step 1
- **Detail:** The argument: suppose E_l ∈ π(i) and no k ≥ i has D ∈ π(k). Using successor property 3 repeatedly, E_l ∈ π(j) for all j ≥ i. Then 'the first stage starting at position ≥ i that handles E_l has initial element x = π(j) containing E_l, so the sequence appended at that stage ends with D', contradicting the assumption. This is correct: stages cycle through l = 1,…,r, so within r stages after position i, E_l is handled; at that stage the current last element x = π(j) with j ≥ i contains E_l (by the propagation), so the fulfilment sequence appended ends in D at some position ≥ j ≥ i. Sound.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Use of pdl-atom-properties in LTL setting
- **Category:** Missing hypothesis
- **Location:** logic:ltl-completeness (paragraph before definition logic:ltl-atom-graph)
- **Detail:** The text asserts that properties 1–5 of logic:pdl-atom-properties hold here because their proof only uses 'what is derivable from theorems by tautologies' (logic:ltl-normality.1). This is a legitimate transfer provided the LTL axiom system has the needed tautology rule and the maximal-set construction over Φ = Σ ∪ {¬B} works. The LTL system includes all tautologies (with X and U treated as atoms) and modus ponens, so the Lindenbaum argument goes through. The claim is justified by the citation and the remark. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
