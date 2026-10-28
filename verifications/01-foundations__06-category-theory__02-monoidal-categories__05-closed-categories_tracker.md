# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/05-closed-categories.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/05-closed-categories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The only genuine issue found is in the supplement: the claim that -×Y fails to preserve quotients for Y=Q is imprecise; the standard obstruction to cartesian closedness of Top is failure of continuity of the evaluation map, not failure of -×Y to preserve quotients. All definitions, lemmas, the main theorem and its proof, and the problem solutions were checked and found correct.

## Issues

### ISSUE-0001 [Open] Q is not a valid example of Y for which -×Y fails to preserve quotients
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that Top is not cartesian closed because there is a space Y (e.g. the rationals Q) for which -×Y does not preserve quotients. But Q is not locally compact, and the standard counterexample for failure of cartesian closedness of Top uses a non-locally-compact space such as Q, but the precise statement is that the evaluation map Cop(Y,X)×Y→X fails to be continuous for such Y, not that -×Y fails to preserve quotients. In fact -×Y always preserves colimits in Top because Top is cartesian closed as a monoidal category? No—Top is not cartesian closed, but -×Y does preserve colimits (quotients) in Top since Top is a cocomplete category and -×Y is a left adjoint? Actually -×Y is a left adjoint only if Top is cartesian closed. The claim that -×Y fails to preserve quotients for Y=Q is not the standard reason; the standard failure is that the evaluation map is not continuous. The statement as written is imprecise/overstated.
- **Proposed fix:** Replace with: 'Top itself is not cartesian closed: for a non-locally-compact space Y such as Q, the evaluation map Cop(Y,X)×Y→X fails to be continuous, so Cop(Y,X) is not an exponential.'
- **Reported:** 2026-10-28 (8ccef3d)
