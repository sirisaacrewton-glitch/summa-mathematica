# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/04-no-vaught-pairs.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/04-no-vaught-pairs.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its supporting lemma are essentially correct. The most serious problem is in the proof of corollary model:omega-stable-two-cardinal-transfer, where the parenthetical about cardinalities is self-contradictory ('unchanged at successor stages' vs. 'strictly grows at each stage'); the conclusion |M_κ| = κ is still true but the justification as written is wrong. Two supplement sentences are imprecise: the non-ω-stable example is presented as showing ω-stability is necessary in general, and the Baldwin–Lachlan characterization omits the completeness/infinite-model hypotheses. No issues with the core lemma, theorem, or the categorical-no-Vaught-pair theorem were found.

## Issues

### ISSUE-0001 [Open] Corollary proof: cardinality claim and 'strictly grows each step' are wrong
- **Category:** Supplement/remark error
- **Location:** model:omega-stable-two-cardinal-transfer / proof
- **Detail:** The proof states |M_α| = ℵ_1 + |α| and that 'each step strictly grows' (各段で真に大きくなる). But the extension theorem model:omega-stable-omitting-extension gives |M_{α+1}| = |M_α|, so the size does NOT strictly grow at successor steps; it only grows at limit stages. Also |M_α| = ℵ_1 + |α| is false at successor stages: starting from |M_0| = ℵ_1, we get |M_1| = ℵ_1, |M_2| = ℵ_1, ..., so |M_ω| = ℵ_1, not ℵ_1 + ℵ_0 = ℵ_1 (that part is fine) but for α = ω+1 we still have ℵ_1, whereas ℵ_1 + |ω+1| = ℵ_1, ok; however for a general successor α+1 with |α| = ℵ_1, |M_{α+1}| = |M_α| = ℵ_1 = ℵ_1 + |α+1|, so the formula happens to hold. The real error is the parenthetical '(後続段で濃度は変わらず、各段で真に大きくなる)' which is self-contradictory: it says the size does not change at successor stages and then says it strictly grows at each stage. The correct statement is that the size stays fixed at successor stages and grows only at limit stages, and |M_κ| = κ holds because the cofinality of the construction reaches κ.
- **Proposed fix:** Replace the parenthetical with: 'At successor stages the cardinality is unchanged (|M_{α+1}| = |M_α|); it increases only at limit stages, where |M_λ| = sup_{β<λ}|M_β|. Since |M_0| = ℵ_1 and the sequence is continuous, |M_α| = ℵ_1 + |α| holds for all α, and in particular |M_κ| = κ.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Supplement: 'ω-stability cannot be dropped' example mischaracterizes the transfer
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that without ω-stability the transfer to arbitrary cardinals fails, and gives the theory with a single unary U and binary E axiomatized by 'each element is determined by its E-relation to elements of U'. The bound |M| ≤ 2^{|U(M)|} is correct, and the existence of (κ,ℵ_0)-models for ℵ_1 ≤ κ ≤ 2^{ℵ_0} is correct. However, the claim that this shows 'the transfer is not possible to arbitrary cardinals' is imprecise: the corollary model:omega-stable-two-cardinal-transfer is about ω-stable theories, and this example is indeed not ω-stable, so it is a valid illustration. But the sentence 'ω安定性を外すと、移行は任意の濃度にはできない' is stated as a general fact about dropping ω-stability, whereas the example only shows one non-ω-stable theory where the transfer fails; it does not establish that ω-stability is necessary in general, nor that every non-ω-stable theory fails. This is an overstatement of what the example shows.
- **Proposed fix:** Rephrase to: 'ω-stability cannot simply be removed: there are non-ω-stable theories with an (ℵ_1,ℵ_0)-model but no (κ,ℵ_0)-model for κ > 2^{ℵ_0}. For example, ...' making clear it is a counterexample to the unconditional transfer, not a proof that ω-stability is necessary.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Supplement: 'Baldwin–Lachlan characterization' direction attribution
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says the non-existence of Vaughtian pairs is one hypothesis of the Baldwin–Lachlan theorem and that 'categoricity ⇔ ω-stable and no Vaughtian pairs' has one direction shown by this page together with model:categorical-omega-stable. The forward direction (categorical ⇒ ω-stable and no Vaughtian pairs) is indeed what this page plus model:categorical-omega-stable give. But the characterization 'categoricity ⇔ ω-stable and no Vaughtian pairs' is the Baldwin–Lachlan theorem, and the supplement attributes it to '次々ページ' (the page after next) while also calling it a hypothesis of that theorem — the phrasing conflates the theorem's statement with its hypothesis. More importantly, the equivalence as stated requires the theory to be complete and have infinite models (and the categoricity in some uncountable κ), which is not mentioned; without completeness the '⇔' is false.
- **Proposed fix:** State: 'For a complete theory T in a countable language with infinite models, Baldwin–Lachlan says T is κ-categorical for some uncountable κ iff T is ω-stable and has no Vaughtian pairs. The direction (⇒) is what this page and model:categorical-omega-stable establish.'
- **Reported:** 2026-10-28 (8ccef3d)
