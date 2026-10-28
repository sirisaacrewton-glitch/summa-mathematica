# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/04-no-vaught-pairs.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/04-no-vaught-pairs.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cardinality bound in the non-ω-stable example is misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that in the example theory (each element determined by its E-relation to U) the model injects into the power set of U, giving |M| ≤ 2^{|U(M)|}, and hence (κ,ℵ₀)-models exist only for κ ≤ 2^{ℵ₀}. The injection direction is correct, but the conclusion is wrong: the map x ↦ {u ∈ U : E(u,x)} is injective into P(U), so |M| ≤ 2^{|U(M)|}. For a (κ,ℵ₀)-model we have |U(M)| = ℵ₀, so |M| ≤ 2^{ℵ₀}. This is a bound on |M|, not a lower bound, so it does NOT restrict κ to κ ≤ 2^{ℵ₀}. Indeed, taking U countable and letting the rest of the model be an arbitrary subset of P(U) of size κ (with E defined accordingly) gives (κ,ℵ₀)-models for every κ ≤ 2^{ℵ₀}, and in fact the construction works for any κ with ℵ₀ ≤ κ ≤ 2^{ℵ₀}; the statement 'only for κ ≤ 2^{ℵ₀}' is a misreading of the inequality. The parenthetical remark is consistent with the correct reading (models exist for ℵ₁ ≤ κ ≤ 2^{ℵ₀}), but the preceding sentence 'so (κ,ℵ₀)-models exist only for κ ≤ 2^{ℵ₀}' is false as a restriction: it should say that |M| ≤ 2^{ℵ₀} for any (κ,ℵ₀)-model, i.e. no (κ,ℵ₀)-model exists with κ > 2^{ℵ₀}.
- **Proposed fix:** Replace 'so (κ,ℵ₀)-models exist only for κ ≤ 2^{ℵ₀}' with: 'so any (κ,ℵ₀)-model satisfies κ = |M| ≤ 2^{ℵ₀}; in particular there is no (κ,ℵ₀)-model with κ > 2^{ℵ₀}. Conversely, taking U countable and the remaining elements to be an arbitrary subset of P(U) of size κ gives (κ,ℵ₀)-models for every κ with ℵ₀ ≤ κ ≤ 2^{ℵ₀}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that countable models cannot be handled by the same argument is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that if M is countable in \ref{model:omega-stable-omitting-extension}, 'φ(M) cannot be taken uncountable and the argument fails', and that for countable models one must use the back-and-forth method of the previous page. This is misleading: the minimal-formula lemma \ref{model:uncountable-minimal-formula} genuinely requires |M| uncountable (it produces a formula with uncountably many solutions), so the specific construction does not apply to countable M. But the statement 'the argument fails' overstates the situation: the omitting-extension theorem itself is a statement about uncountable models, and for countable M the relevant transfer is a different (Vaught-pair) argument, not a failure of the present argument. The sentence is not false in its conclusion but is stated more strongly/imprecisely than warranted, since it suggests the theorem's method is somehow deficient for countable models rather than simply inapplicable.
- **Proposed fix:** Rephrase as: 'If M is countable, the minimal-formula lemma cannot be applied (it requires an uncountable model), so this particular construction does not yield a proper elementary extension of the same size omitting the same countable types. For countable models the transfer to (ℵ₁,ℵ₀)-models must instead be carried out by the back-and-forth argument of the previous page.'
- **Reported:** 2026-10-28 (10fede1)
