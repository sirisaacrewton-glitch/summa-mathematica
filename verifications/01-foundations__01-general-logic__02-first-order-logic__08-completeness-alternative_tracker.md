# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/08-completeness-alternative.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/08-completeness-alternative.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Step 2 of alt-axioms-consistent: adding derivable Q axioms does not preserve consistency as stated
- **Category:** Logical gap
- **Location:** logic:alt-axioms-consistent / Step 2
- **Detail:** Step 2 argues: since every element of Q_{L*} is derivable, adding Q_{L*} does not change the derivable sentences (cut), hence A is consistent. But derivability of each q in Q_{L*} in the empty theory only gives that if A ⊢ ⊥ then Γ_{0} ∪ {H^∀_k} ⊢ ⊥ (replacing each use of q by its derivation). This is correct in substance, but the text's phrasing 'the derivable sentences do not change' is imprecise: adding axioms that are theorems of the base system does preserve the set of consequences, so the argument is fine, but the step should explicitly say that a derivation of ⊥ from A can be transformed into one from Γ_{0} ∪ {H^∀_k} by substituting derivations of the Q axioms. As written it is a minor gap in rigor rather than a falsehood.
- **Proposed fix:** Replace with: 'Each q ∈ Q_{L*} is derivable in the empty theory. Given a derivation of ⊥ from A, replace every occurrence of an axiom q ∈ Q_{L*} by its fixed derivation; the result is a derivation of ⊥ from Γ_{0} ∪ {H^∀_k : k ∈ ω}, contradicting Step 1. Hence A is consistent.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Remark on Gödel's original proof is vague and partly inaccurate
- **Category:** Supplement/remark error
- **Location:** logic:goedel-original-remark
- **Detail:** The remark claims Gödel's original proof proceeded 'by converting sentences to prenex normal form and introducing witnesses as new variables in stages, building a sequence of finitely many propositional formulas'. Gödel's 1929/1930 proof does not use prenex normal form as an essential device, nor does it introduce witnesses as 'new variables'; it reduces to a propositional satisfiability question via a different combinatorial argument. The remark hedges with 'とされる' and '細部は本サイトでは確認していない', but the specific claims about prenex form and new variables are not supported by the literature and are stated as if factual.
- **Proposed fix:** Soften to: 'Gödel's original completeness proof (1929 dissertation, 1930 paper) reduced first-order satisfiability to a propositional satisfiability problem by a combinatorial argument; the present page achieves the same reduction using Henkin witnesses instead. The details of Gödel's original argument are not reproduced here.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Tableau completeness fact: attribution and 'König's lemma implies the tree is finite' are imprecise
- **Category:** Unsupported fact
- **Location:** logic:tableau-completeness
- **Detail:** The fact states that if every branch closes then 'by König's lemma the tree is finite'. König's lemma gives that a finitely branching infinite tree has an infinite branch; applied contrapositively, if there is no infinite branch and the tree is finitely branching, then the tree is finite. This is correct only if the tableau is finitely branching, which requires that each formula be decomposed only finitely often (fairness plus the fact that a formula is never decomposed twice on the same branch). The fact does not state this finitely-branching condition, so the appeal to König's lemma is incomplete. Also the attribution 'Beth and Hintikka ... Smullyan's First-Order Logic' is broadly right but the claim that the finite tree 'yields a proof of σ' presupposes a proof system for tableaux that the page explicitly says it does not define.
- **Proposed fix:** Add: 'Because each formula on a branch is decomposed at most once, the tableau is finitely branching; hence, if it has no infinite branch (every branch closes), König's lemma gives that it is finite.' And note that the finite closed tableau is converted into a proof in the corresponding tableau proof system.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Supplement claim that the general case uses ultrafilters is overstated
- **Category:** Supplement/remark error
- **Location:** supplement (三つの証明の比較)
- **Detail:** The supplement says that in the general (uncountable) case the reduction uses ultrafilters, citing the proof 3 of logic:page-prop-compactness. Propositional compactness for arbitrary sets of propositional variables can be proved by the compactness theorem via Lindenbaum/Tychonoff or ultrafilters, but the reduction of first-order satisfiability to propositional satisfiability via Henkin witnesses plus propositional compactness does not itself require ultrafilters beyond whatever proves propositional compactness; the phrasing suggests the reduction method specifically needs ultrafilters, which is misleading.
- **Proposed fix:** Rephrase: 'In the general case one uses the propositional compactness theorem (provable e.g. via ultrafilters or Tychonoff, cf. proof 3 of logic:page-prop-compactness).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Problem solution: 'equality axioms can also be satisfied appropriately' is not justified
- **Category:** Logical gap
- **Location:** logic:prob-alt-no-axioms / solution
- **Detail:** The solution asserts that with V(∀x P(x))=1 and V(P(c))=0, the universal Henkin axioms and equality axioms can 'appropriately' be satisfied. But the equality axioms include t=t for all closed terms and the substitution axioms; with the given assignment on the prime sentences ∀x P(x) and P(c), one must check that the equality axioms (which are themselves prime-sentence combinations) can consistently be assigned 1. Since the example has no function symbols and only the predicate P, the equality axioms are all instances of t=t and s=t→(φ[s/x]→φ[t/x]); these can indeed be set to 1 by taking V(s=t)=1 iff s and t are syntactically identical, but the solution does not say this, leaving a gap.
- **Proposed fix:** Add: 'Take V(s=t)=1 iff s and t are the same closed term; then all equality axioms receive value 1, and the Henkin axioms receive value 1 because their consequent ∀x P(x) is true under V.'
- **Reported:** 2026-10-28 (10fede1)
