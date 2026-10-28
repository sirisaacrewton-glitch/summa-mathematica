# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/06-derivability-d1-d2.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/06-derivability-d1-d2.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The proofs of D1, D2, the concatenation lemma, the closed-term substitution lemma, and the Bew[·] versions are logically sound and cite appropriate results. The main problems are in the side remarks: the remark on the converse of D1 mislabels the needed hypothesis (it invokes Σ-soundness but the argument only needs ordinary soundness, and the closing sentence conflates the two), and the intuition slightly misattributes which normality property items 1–2 correspond to. No unsupported facts or improper links were found.

## Issues

### ISSUE-0001 [Open] Converse of D1 requires Σ-soundness, not mere soundness
- **Category:** Supplement/remark error
- **Location:** remark after pt:d1 (D1 section)
- **Detail:** The remark claims the converse `PA ⊢ Bew(⌜φ⌝) ⇒ PA ⊢ φ` follows from Σ-soundness, and then says "this depends on PA being sound". But Σ-soundness is strictly stronger than soundness (consistency). The argument given (N ⊨ Bew(⌜φ⌝) then use pt:bew-correct to get N ⊨ φ, hence PA ⊢ φ by completeness) actually only needs ordinary soundness of PA (N ⊨ PA), not Σ-soundness. The final sentence conflates the two: it says the dependence is on "PA being sound", while the stated hypothesis is Σ-soundness. This is imprecise/overstated.
- **Proposed fix:** Replace with: "The converse `PA ⊢ Bew(⌜φ⌝) ⇒ PA ⊢ φ` holds provided PA is sound (N ⊨ PA): from N ⊨ Bew(⌜φ⌝) and \ref{pt:bew-correct} we get N ⊨ φ, hence PA ⊢ φ by completeness. Unlike D1, this is not an internal inference of PA but depends on the soundness of PA." (Σ-soundness is not needed; ordinary soundness suffices.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] D1/D2 correspond to necessitation and K, not to the distribution axiom alone
- **Category:** Supplement/remark error
- **Location:** intuition (pt:sec-bew-bracket / after pt:d12-consequences)
- **Detail:** The intuition says D1 and D2 "correspond exactly to the necessitation rule and the distribution axiom" of normal modal logic. D1 corresponds to necessitation (N), and D2 corresponds to the K/distribution axiom □(φ→ψ)→(□φ→□ψ). This pairing is correct, but the phrasing "D1・D2 は…必然化則と分配公理にちょうど対応する" is acceptable. However the claim that "1, 2 are the arithmetic version of normality (logic:normality.1)" is slightly off: item 1 (closure under →) is the rule/monotonicity and item 2 (□ distributes over ∧) is a derived normality property, but normality (logic:normality.1) is specifically □(φ→ψ)→(□φ→□ψ), which is D2 itself, not items 1–2. This is an imprecise attribution.
- **Proposed fix:** State: "D1 corresponds to the necessitation rule and D2 to the distribution axiom K (\ref{logic:normal-modal-logic}). Item 1 is the derived monotonicity rule and item 2 the distributivity over ∧, both consequences of K and necessitation in a normal modal logic (\tref{logic:normality.1})."
- **Reported:** 2026-10-28 (10fede1)
