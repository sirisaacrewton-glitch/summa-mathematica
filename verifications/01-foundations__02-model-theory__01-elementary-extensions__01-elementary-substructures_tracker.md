# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/01-elementary-substructures.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/01-elementary-substructures.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (Tarski–Vaught, downward/upward LS, Łoś–Vaught, examples and problems) is logically sound: hypotheses of cited theorems are checked, the Skolem-function construction and closure argument are correct, and the counterexamples (N\{0} vs N, Q vs R, DAG not ℵ₀-categorical) are genuine. The problems are concentrated in the side remarks and supplement: the Skolemization claim that elementary substructures are 'exactly' the closed subsets is false with arbitrary Skolem functions; the 'countably many times' description of the closure is imprecise; the choice-remark's flat 'AC not needed' plus unverified DC attribution is overstated; and the ACF_p categoricity parenthetical should restrict to uncountable κ. These are supplement/remark-level corrections, not gaps in the proofs.

## Issues

### ISSUE-0001 [Open] Skolemization claim: elementary substructures are exactly closed subsets
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement claims that if all Skolem functions are added to the language, then elementary substructures are *exactly* the subsets closed under all operations (i.e. the algebraic substructures). This is false as stated. Closure under Skolem functions gives the Tarski–Vaught condition only when the subset is already a substructure of the original language and the Skolem functions are defined for all formulas of the *expanded* language consistently. More importantly, closure under the Skolem functions of the original language guarantees that a subset closed under them is an elementary substructure only if it is also closed under the original function symbols and contains the constants; and conversely an elementary substructure is closed under the Skolem functions only if the Skolem functions are chosen to be *definable* or at least to have values inside every elementary substructure — which arbitrary choice-function-based Skolem functions (as defined in Step 1 of the downward LS proof) need not satisfy. With the Skolem functions as literally defined via an arbitrary choice function ch, an elementary substructure N need not be closed under F_{φ,x}, because F_{φ,x}(ā) is ch(W(ā)), an arbitrary element of W(ā) that may lie outside N even though some element of W(ā) lies in N. So the 'exactly' (ちょうど) is wrong.
- **Proposed fix:** Replace with: 'If one adds Skolem functions to the language (Skolemization), then a subset that is closed under all the operations of the expanded language (and contains the constants) is an elementary substructure; conversely every elementary substructure is closed under the Skolem functions provided these are chosen definably (or chosen so that each elementary substructure is closed under them). Thus elementary substructures correspond to algebraic substructures of a suitable Skolem expansion.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Downward LS 'essence' as a combinatorial counting fact
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から), last sentence
- **Detail:** The sentence 'the essence of the downward theorem is the combinatorial fact that finitary operations applied countably many times do not make a set larger than κ' is imprecise/overstated. The closure lemma applies the operations transfinitely (up to ω, or iterating through all ordinals below κ⁺), not merely 'countably many times'; and the bound ≤κ uses |F|≤κ and |B|≤κ, not countability. Saying 'countably many times' misdescribes the actual construction (closure under a family of size ≤κ starting from a set of size ≤κ).
- **Proposed fix:** Replace with: 'the essence of the downward theorem is the combinatorial fact (the closure lemma) that closing a set of size ≤κ under a family of ≤κ finitary operations keeps the size ≤κ.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] DC remark: 'the claim needs no AC' for weak downward LS
- **Category:** Supplement/remark error
- **Location:** remark model:downward-ls-choice-remark
- **Detail:** The remark states that for the weak form (existence of *some* countable model) 'the axiom of choice is not needed'. This is stated too strongly/imprecisely. The weak downward Löwenheim–Skolem (existence of a countable model of a consistent countable theory) is provable in ZF for the *countable* case essentially because the completeness theorem for countable languages can be done without AC; but the remark as phrased ('選択公理は要らない') is a blanket claim. More importantly the remark contrasts it with the DC claim above, but the DC claim itself is flagged 'unverified on this site', so pairing an unverified DC statement with a flat 'AC not needed' is an unsupported assertion. The safe correct statement is that the countable weak form is provable in ZF (no choice), while the 'given A ⊂ M' form with arbitrary A generally uses choice.
- **Proposed fix:** State precisely: 'For a countable language and countable A, the existence of a countable elementary substructure can be proved in ZF (the countable case of completeness needs no choice); the version starting from an arbitrary A uses a choice function on P(M).' Remove the unverified DC attribution or mark it clearly as a conjecture.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] ACF_p κ-categoricity 'for uncountable κ' attributed vaguely
- **Category:** Unsupported fact
- **Location:** example (Łoś–Vaught), item 2
- **Detail:** The example says ACF_p is κ-categorical 'for uncountable κ' because the transcendence degree equals κ. This is correct for uncountable κ (Steinitz), but the parenthetical 'because the transcendence degree equals κ' needs the hypothesis that the field has transcendence degree κ, which holds for any uncountable κ for algebraically closed fields of characteristic p (since |field|=κ forces trdeg=κ when κ uncountable). The statement is essentially fine, but 'for uncountable κ' should exclude the case where κ < |L|; here |L|=ℵ₀ so any uncountable κ ≥ ℵ₀ is fine. No genuine error, but the phrase '超越次数が κ に等しいため' is only valid for uncountable κ and should say so explicitly to avoid the false impression it holds at ℵ₀ (it does not: ACF_p is not ℵ₀-categorical).
- **Proposed fix:** Add: '(for uncountable κ; at ℵ₀ it is not categorical, since there are algebraically closed fields of countable transcendence degree 0,1,2,…)'.
- **Reported:** 2026-10-28 (10fede1)
