# Verification tracker: `04-analysis/01-real-analysis/02-calculus/09-trig.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/09-trig.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the parenthetical formula for the circumference of the unit circle divides by $2\pi$ and thus computes $1$ rather than $\pi$, contradicting the stated fact that $\pi$ is half the circumference. All proofs, the definition of $\pi$, the periodicity theorem, the arctangent/Leibniz series, polar form, and the Niven irrationality proof check out, and the cited labels match their uses.

## Issues

### ISSUE-0001 [Open] π equals half the circumference, not the circumference
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化と関連する事実, first bullet
- **Detail:** The bullet says 'π は単位円の周長の半分、単位円板の面積に等しい' and then parenthetically writes the length as $\int_{0}^{2\pi}|p'(t)|\,dt/2\pi$. This is inconsistent: the unit circle's circumference is $\int_{0}^{2\pi}|p'(t)|\,dt = 2\pi$, so half of it is $\pi$ (correct as a statement), but the displayed formula divides by $2\pi$ and would give $1$, not $\pi$. The formula as written computes the circumference divided by $2\pi$, which equals $1$. So the parenthetical justification is wrong.
- **Proposed fix:** Replace with: '$\pi$ is half the circumference of the unit circle and equals the area of the unit disk (verified by $\tfrac12\int_{0}^{2\pi}|p'(t)|\,dt = \pi$ for the length and by the area integral).'
- **Reported:** 2026-10-28 (8ccef3d)
