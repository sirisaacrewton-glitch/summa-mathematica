# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/05-closed-categories.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/05-closed-categories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Q is not a valid example of Y for which -×Y fails to preserve quotients
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that Top is not cartesian closed because there is a space Y (e.g. the rationals Q) for which -×Y does not preserve colimits (in particular quotient maps). This is false for Q: Q is second-countable and hence locally compact? No—Q is not locally compact, but the relevant point is that for Y = Q, the functor -×Y does preserve quotient maps. Indeed, a standard fact: -×Y preserves quotient maps whenever Y is locally compact Hausdorff, but Q is not locally compact. However, the actual criterion for failure is different: -×Y fails to preserve quotients for spaces Y that are not "core-compact" / not exponentiable. Q is in fact exponentiable in Top? The correct statement: a space Y is exponentiable in Top iff it is core-compact (Day–Kelly); Q is not core-compact (it is not locally compact and not core-compact), so Q actually IS a valid example. But the supplement's phrasing "商写像を保存しない Y（たとえば有理数の空間 Q）" asserts that -×Q does not preserve quotient maps. This is a known true fact (Q is not exponentiable, and one can exhibit a quotient map q: A → B such that q×id_Q is not a quotient map). So the example is correct. However, the parenthetical "範囲外" and the claim that for locally compact Hausdorff Y, Cop(Y,-) is right adjoint to -×Y in Top is correct. So no error here.
- **Proposed fix:** No change needed; the statement is correct.
- **Reported:** 2026-10-28 (10fede1)
