# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/02-sequent-calculus.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/02-sequent-calculus.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] L∀ inversion claim in supplement is imprecise
- **Category:** Supplement/remark error
- **Location:** pt:lk-formulation-remark / supplement 前提の検討
- **Detail:** The supplement says that if L∀ did not keep the principal formula ∀x A in the premise, then L∀ would not be invertible and contraction would have to be an explicit rule. But the inversion lemma (pt:lk-inversion.4) states that L∀ is invertible precisely because the principal formula is retained; the claim that dropping it makes L∀ non-invertible is correct in spirit but the supplement's phrasing '残さない形では L∀ が反転可能でなくなり' is fine. However the remark pt:lk-formulation-remark says '両者が同じシーケントを導出することは、以下の補題（弱化・縮約の許容性）から従う、と一般に言われている' — this is a hedged claim and acceptable. The real issue: the supplement claims the four lemmas are 'all by induction on height without cut', which is true, but the substitution lemma (pt:lk-substitution) uses the induction hypothesis twice in the R∀ case (steps 1 and 2), each at height ≤ n−1, which is legitimate. No error there.
- **Proposed fix:** No change needed; the supplement statements are accurate.
- **Reported:** 2026-10-28 (10fede1)
