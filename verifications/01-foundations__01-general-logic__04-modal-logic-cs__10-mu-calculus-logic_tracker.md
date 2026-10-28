# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/10-mu-calculus-logic.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/10-mu-calculus-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that Kozen 1983 proved completeness for non-conjunctive formulas
- **Category:** Supplement/remark error
- **Location:** remark (sec-mul-facts) / item 1
- **Detail:** The remark states that Kozen 1983 proved completeness for a restricted class of formulas, described as 'non-conjunctive formulas' (非連言的な論理式). Kozen's 1983 paper 'Results on the propositional μ-calculus' proved completeness only for a restricted class of *programs* (the 'conjunctive' vs 'non-conjunctive' distinction concerns the μ-calculus with a single program / the 'conjunctive μ-calculus' and its fragments), and the standard attribution of the restricted completeness result is to Kozen's later work / to the class of formulas whose fixpoints are 'conjunctive'. As stated, the attribution is imprecise: the restricted completeness Kozen established is for the *conjunctive* fragment (or, in the single-action setting, for formulas without certain conjunctions of diamonds), and describing it as 'non-conjunctive formulas' is at best ambiguous and at worst the opposite of the actual class. This is a stated-only historical claim not protected by proof.
- **Proposed fix:** Replace with: 'Kozen (1983) proved completeness for the restricted fragment of *conjunctive* formulas (equivalently, for the single-action μ-calculus without arbitrary conjunctions of diamond formulas); the full result is due to Walukiewicz (2000).' If the intended class is genuinely the non-conjunctive fragment, state it precisely and cite the correct source.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Alternation hierarchy attribution: Lenzi 1996 not independent of Bradfield
- **Category:** Supplement/remark error
- **Location:** remark (sec-mul-facts) / item 4
- **Detail:** The remark says Bradfield (1998) proved strictness of the alternation hierarchy and that 'Lenzi 1996 also independently showed it' (Lenzi 1996 も独立に示した). Lenzi's 1996 result concerns a *different* hierarchy (the 'Lenci' / 'Lenzini'? — in fact D. Lenzi, 'A hierarchy of formulas for the modal μ-calculus', 1996) and is not an independent proof of the same Bradfield strictness theorem; the standard attribution of strictness of the modal μ-calculus alternation hierarchy is Bradfield (1998), building on Bradfield's earlier work, and Lenzi's contribution is a related but distinct result about a formula hierarchy. Presenting Lenzi 1996 as an independent proof of the same theorem overstates the literature.
- **Proposed fix:** Replace with: 'Strictness of the alternation hierarchy is due to Bradfield (Theoret. Comput. Sci. 195 (1998)); Lenzi (1996) obtained a related hierarchy result for μ-calculus formulas, but not an independent proof of the same strictness theorem.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Intuition: Park's rule described as 'weaker than the semantics' and completeness bridging the gap
- **Category:** Supplement/remark error
- **Location:** intuition (sec-mul-facts)
- **Detail:** The intuition says Park's rule 'only says something weaker than the semantics' because the semantic lfp is below *all* pre-fixpoints while the rule only handles pre-fixpoints *definable by a formula*, and that Walukiewicz's completeness theorem guarantees all valid formulas are derivable. This is essentially correct as intuition, but the phrase '規則は意味論より弱いことしか言っていない' (the rule says only something weaker than the semantics) is imprecise: Park's rule is *sound* and, together with the other axioms, complete, so it is not weaker in the sense of proving fewer valid formulas; it is only 'weaker' in that it quantifies over definable pre-fixpoints rather than all sets. As written it can be read as claiming the rule is semantically incomplete on its own, which is misleading. This is a side comment, so it falls under kind 5.
- **Proposed fix:** Rephrase: 'Park's rule only ranges over pre-fixpoints that are definable by a formula, whereas the semantic lfp is below every pre-fixpoint; nevertheless, by Walukiewicz's completeness theorem, this restricted form suffices to derive every valid formula.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] EXPTIME-hardness 'same as PDL' claim
- **Category:** Unsupported fact
- **Location:** remark (sec-mul-facts) / item 3
- **Detail:** The remark states satisfiability is EXPTIME-complete, with membership via Emerson–Jutla 1988 tree automata and EXPTIME-hardness 'the same as in the PDL case' (PDL の場合と同じ). The membership attribution is correct (Emerson–Jutla, 'The complexity of tree automata and logics of programs', 1988). The hardness claim is stated without citation and the reduction from PDL is not the standard one: EXPTIME-hardness of μ-calculus satisfiability is usually obtained by reduction from alternating polynomial-space / from PDL satisfiability, but the parenthetical 'same as PDL' is too casual and, as a stated-only fact, should carry the correct reference (e.g., the standard reduction showing PDL ≤ μ-calculus, or Emerson–Jutla). It is not false, but it is stated more strongly/casually than the literature supports without a citation.
- **Proposed fix:** Replace with: 'Satisfiability is EXPTIME-complete: membership is shown by Emerson–Jutla (1988) via tree automata, and EXPTIME-hardness follows by reduction from PDL satisfiability (PDL is EXPTIME-hard and translates into the μ-calculus).'
- **Reported:** 2026-10-28 (10fede1)
