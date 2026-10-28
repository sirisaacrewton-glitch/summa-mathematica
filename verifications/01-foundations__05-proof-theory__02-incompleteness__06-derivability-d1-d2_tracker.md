# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/06-derivability-d1-d2.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/06-derivability-d1-d2.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Converse of D1 needs Σ-soundness, not mere soundness of PA
- **Category:** Supplement/remark error
- **Location:** remark after pt:d1
- **Detail:** The remark claims the converse follows from 'Σ-soundness of PA (e.g. from N⊨PA)'. But N⊨PA only gives ordinary soundness, not Σ-soundness; Σ-soundness is a strictly stronger assumption. The remark's parenthetical 'たとえば N⊨PA から従う' is therefore wrong: soundness of PA does not yield Σ-soundness. (The subsequent sentence 'PA が健全であることに依存する' also conflates soundness with Σ-soundness.)
- **Proposed fix:** Replace with: 'The converse holds if one assumes Σ-soundness of PA (every Σ sentence provable in PA is true), which is strictly stronger than N⊨PA. Under Σ-soundness, PA⊢Bew(⌜φ⌝) gives N⊨Bew(⌜φ⌝), and by \ref{pt:bew-correct} this yields PA⊢φ. Unlike D1, this is not an internal inference of PA but depends on the Σ-soundness of PA.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] D1/D2 correspond to necessitation and K, not to the distribution axiom alone
- **Category:** Supplement/remark error
- **Location:** intuition (pt:sec-d2)
- **Detail:** The intuition says D1·D2 correspond to 'the necessitation rule and the distribution axiom'. D1 corresponds to necessitation, but D2 is the K axiom □(φ→ψ)→(□φ→□ψ), which is the distribution axiom; the phrase is acceptable, but the following sentence '1, 2 は正規性 (logic:normality.1) の算術版' is imprecise: item 1 (from PA⊢φ→ψ infer PA⊢Bew φ→Bew ψ) is a derived rule combining D1 and D2, and item 2 (Bew(φ∧ψ)↔Bew φ∧Bew ψ) is not literally 'normality' but a consequence of K and necessitation. This is a minor imprecision; the main logical content is fine.
- **Proposed fix:** Rephrase: 'D1 corresponds to the necessitation rule and D2 to the distribution axiom K; items 1 and 2 are arithmetic analogues of consequences of normality (\tref{logic:normality.1}).'
- **Reported:** 2026-10-28 (8ccef3d)
