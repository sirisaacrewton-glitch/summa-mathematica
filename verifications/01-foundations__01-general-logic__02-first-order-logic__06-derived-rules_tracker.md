# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/06-derived-rules.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/06-derived-rules.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hypcheck counterexample for dropping x∉FV(χ) is not a counterexample
- **Category:** Supplement/remark error
- **Location:** logic:derived-quantifier / hypcheck, first bullet
- **Detail:** The hypcheck claims that dropping the condition x∉FV(χ) is false, giving the counterexample `{∃x P(x)} ⊢ P(x)` and asserting `{∃x P(x)} ⊭ P(x)`. But the ∃E rule as stated in item 2 has conclusion χ and requires x∉FV(χ); the derivation `{∃x P(x)} ⊢ P(x)` would require taking χ = P(x), which indeed violates the condition. However, the stated justification is wrong: the claim `{∃x P(x)} ⊭ P(x)` is not a valid semantic counterexample in the sense used, because P(x) with x free is satisfiable under some assignments (e.g. v(x)=1 with P^M={1}), so the semantic argument as phrased is imprecise. More importantly, the counterexample does not actually demonstrate unsoundness of the rule without the condition: the rule without x∉FV(χ) would allow deriving `{∃x P(x)} ⊢ P(x)`, and this is genuinely unsound (there is an assignment falsifying it), so the example is essentially correct but the semantic statement `{∃x P(x)} ⊭ P(x)` should be qualified as 'not valid' (fails under the assignment v(x)=0 with P^M={1}), not stated as an unqualified non-entailment.
- **Proposed fix:** Replace the justification with: '外すと偽：$\{\exists x\,P(x)\}\vdash P(x)$ が導けてしまうが、これは妥当でない（領域 $\{0,1\}$、$P^{\mathcal{M}}=\{1\}$、$v(x)=0$ の下で $\exists x\,P(x)$ は真だが $P(x)$ は偽）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck counterexample for Γ-condition uses χ=⊥ which violates x∉FV(χ) trivially but the example is mislabeled
- **Category:** Supplement/remark error
- **Location:** logic:derived-quantifier / hypcheck, first bullet (Γ condition)
- **Detail:** The hypcheck says dropping the Γ-condition is false, with Γ={¬P(x)}, φ=P(x), χ=⊥, giving `{¬P(x), ∃x P(x)} ⊢ ⊥`, claimed satisfiable in domain {0,1}, P^M={1}, v(x)=0. Check: with v(x)=0, ¬P(x) is true (since 0∉P^M), and ∃x P(x) is true (1∈P^M). So the set is indeed satisfiable, and the example is correct. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
