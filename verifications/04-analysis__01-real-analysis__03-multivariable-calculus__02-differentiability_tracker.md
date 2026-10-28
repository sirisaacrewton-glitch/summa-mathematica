# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/02-differentiability.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/02-differentiability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Gâteaux differentiability claim in supplement is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says that \ref{calc:partials-not-sufficient} is an example showing that Gâteaux differentiability does not even guarantee linearity. But the standard definition of Gâteaux differentiability requires the map v ↦ D_{v}f(a) to be linear and bounded (as the supplement itself states just before). Under that definition, the example g in \ref{calc:partials-not-sufficient.2} is NOT Gâteaux differentiable (its directional derivative map is not linear), so it cannot be an example of 'Gâteaux differentiable but not linear'. The example only shows that existence of all directional derivatives (a weaker property) does not imply linearity.
- **Proposed fix:** Replace with: '方向微分がすべて存在しても、写像 $v\mapsto D_{v}f(a)$ が線形になるとは限らない（\ref{calc:partials-not-sufficient.2}）。ガトー微分可能性はこの線形性（および有界性）を定義に含むので、同例はガトー微分可能でない例である。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hypcheck claim about weakening continuity of partials is misstated
- **Category:** Supplement/remark error
- **Location:** calc:continuous-partials-differentiable / hypcheck (third bullet)
- **Detail:** The hypcheck states that 'if all but one partial derivative are continuous at a and the remaining one merely exists at a, the conclusion holds', with the parenthetical '(in Step 3 use the definition of partial derivative instead of the mean value theorem for k=1 only)'. This is not correct as stated: the argument requires the remaining partial derivative to exist in a neighbourhood of a (so that the one-variable functions φ_{k} are defined and differentiable on the relevant segments), not merely at the single point a. Also the parenthetical justification is inaccurate: the mean value theorem is applied to each φ_{k} on a segment, so existence at a single point does not suffice for the other coordinates' segments either. The correct standard statement is: if all partial derivatives exist in a neighbourhood of a and all but one are continuous at a, then f is differentiable at a.
- **Proposed fix:** Rewrite: '実は「$a$ の近傍で 1 つを除くすべての偏導関数が存在して $a$ で連続で、残りの 1 つが $a$ の近傍で存在する」でも結論が成り立つ（残りの 1 つについては Step 3 で平均値の定理の代わりに偏微分の定義を用いる。ただし近傍での存在は必要である）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Intuition for gradient overstates 'steepest ascent' without qualification
- **Category:** Supplement/remark error
- **Location:** calc:gradient / intuition
- **Detail:** The intuition says the gradient 'points in the direction in which the function increases fastest and its length is the rate of increase'. This is only true among unit vectors and only when ∇f(a) ≠ 0; if ∇f(a)=0 there is no steepest direction, and the statement as written is unqualified. The precise statement is given later in \ref{calc:steepest-ascent}, but the intuition asserts it unconditionally.
- **Proposed fix:** Add the qualification: 'ただし $\nabla f(a)\neq0$ のとき、単位ベクトルの中で最速に増える向きを指し、その長さがその増え方の速さである（\ref{calc:steepest-ascent}）。$\nabla f(a)=0$ のときは最急方向は定まらない。'
- **Reported:** 2026-10-28 (8ccef3d)
