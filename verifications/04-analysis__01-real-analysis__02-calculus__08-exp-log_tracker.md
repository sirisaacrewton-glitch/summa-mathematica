# Verification tracker: `04-analysis/01-real-analysis/02-calculus/08-exp-log.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/08-exp-log.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (exp as power series, addition theorem, log, real powers, growth rates, irrationality of e, log series, smooth non-analytic function, Borel's theorem) are logically sound and the citations match their targets. The only genuine problems are in the supplement: the characterization of continuous homomorphisms ℝ → (0,∞) is stated imprecisely (omitting the constant map / requiring a ≠ 1), and the historical attributions in the irrationality/transcendence bullet are imprecise. No issues in the proofs, hypcheck, or stated facts were found.

## Issues

### ISSUE-0001 [Open] Incorrect claim that continuous homomorphisms R -> (0,∞) are only x ↦ a^x
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化と関連する事実 (first bullet)
- **Detail:** The supplement states that every continuous homomorphism from the additive group ℝ to the multiplicative group (0,∞) is of the form x ↦ a^{x}. This is false: the constant map x ↦ 1 is a continuous group homomorphism (it is x ↦ a^{x} only in the degenerate sense a = 1, which the phrasing 'a^{x}' with a > 0 does technically include, but the intended reading is a ≠ 1). More importantly, the parenthetical '連続性を外すと、選択公理のもとで病的な解がある' is correct, but the main statement should be stated as: the nonconstant continuous homomorphisms are exactly x ↦ a^{x} with a > 0, a ≠ 1. As written it is imprecise/overstated.
- **Proposed fix:** Replace with: '$exp$ は加法群 $mathbb{R}$ から乗法群 $(0,infty)$ への連続な同型である。連続な準同型 $mathbb{R}to(0,infty)$ は定値写像 $xmapsto1$ か、または $xmapsto a^{x}$（$a>0$, $aneq1$）の形に限る（知られている。連続性を外すと、選択公理のもとで病的な解がある）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misattribution: transcendence of e is Hermite, but the bullet conflates irrationality/transcendence of π and e^π
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化と関連する事実 (second bullet)
- **Detail:** The bullet lists 'π や e^{π} の無理性・超越性、e の超越性（エルミート）、π の超越性（リンデマン）'. The irrationality of π is due to Lambert, its transcendence to Lindemann; the transcendence of e is Hermite. The phrasing 'π や e^{π} の無理性・超越性' attributes both irrationality and transcendence to π and e^{π} without attribution, and the parenthetical attributions (エルミート for e, リンデマン for π) are correct but the sentence structure suggests the attributions cover the whole list. This is a historical attribution imprecision.
- **Proposed fix:** Rewrite as: '$e$ の無理性（オイラー）、$e$ の超越性（エルミート）、$π$ の無理性（ランベルト）、$π$ の超越性（リンデマン）、$e^{π}$ の超越性（ゲルフォント–シュナイダー）は知られている（本サイト未収録）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that exp is 'the unique function with y'=y, y(0)=1' is stated without the differentiability/existence qualifier but is fine; however 'time-translation invariance' phrasing is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The statement 'exp is the unique function with y'=y, y(0)=1' is correct (and proved in the problem). The phrase '加法定理はその「時間の平行移動に対する不変性」の表れ' is a loose metaphor, not a mathematical error. No genuine error here; not reporting as an issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
