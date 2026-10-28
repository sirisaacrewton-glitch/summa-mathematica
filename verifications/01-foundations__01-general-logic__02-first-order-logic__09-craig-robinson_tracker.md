# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/09-craig-robinson.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/09-craig-robinson.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that the original Robinson theorem is a special case of the 'consequences agree' variant
- **Category:** Supplement/remark error
- **Location:** logic:prob-robinson-counterexample / solution
- **Detail:** The solution claims that the original Robinson theorem (with a complete T contained in both T_1 and T_2) is a special case of the modified condition 'the L_0-consequences of T_1 and T_2 coincide'. This is false. If T is complete and T ⊂ T_1, T_2, then the L_0-consequences of T_1 and T_2 both equal the deductive closure of T, so the modified condition holds. However, the modified condition does not require T_1 and T_2 to share a common complete theory; it only requires that their L_0-consequences coincide. For example, take L_0 = {P}, T_1 = {∀x P(x)} and T_2 = {∀x P(x), Q} where Q is a new symbol in L_2 \ L_0. The L_0-consequences of T_1 and T_2 both equal the closure of {∀x P(x)}, so the modified condition holds, but there is no complete L_0-theory T contained in both T_1 and T_2 (since T_1 does not decide Q, and T_2 does). Thus the original theorem is not a special case of the modified condition; rather, the modified condition is a weakening of the original hypothesis. The final sentence of the solution is therefore incorrect.
- **Proposed fix:** Replace the final sentence with: 'The original theorem is not a special case of this modified condition; rather, the modified condition is a weakening of the original hypothesis. When T is complete and T ⊂ T_1, T_2, the L_0-consequences of T_1 and T_2 both equal the closure of T, so the modified condition holds; but the converse fails in general (e.g. T_1 = {∀x P(x)}, T_2 = {∀x P(x), Q} with Q a new symbol).'
- **Reported:** 2026-10-28 (10fede1)
