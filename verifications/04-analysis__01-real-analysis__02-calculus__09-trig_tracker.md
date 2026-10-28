# Verification tracker: `04-analysis/01-real-analysis/02-calculus/09-trig.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/09-trig.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect integral formula for circumference in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / first bullet
- **Detail:** The supplement claims that π equals the half-circumference of the unit circle, verified via the curve-length integral $\int_{0}^{2\pi}|p'(t)|\,dt/2\pi$. But $p(t)=e^{2\pi it}$ has $|p'(t)|=2\pi$, so $\int_{0}^{2\pi}|p'(t)|\,dt = 4\pi^{2}$, and dividing by $2\pi$ gives $2\pi$, not $\pi$. The correct half-circumference is $\int_{0}^{1}|p'(t)|\,dt = 2\pi$ divided by 2, i.e. $\pi = \frac12\int_{0}^{1}|p'(t)|\,dt$. The stated formula is numerically wrong.
- **Proposed fix:** Replace with: $\pi$ equals half the circumference of the unit circle, i.e. $\pi=\frac12\int_{0}^{1}|p'(t)|\,dt$ (since $|p'(t)|=2\pi$), and equals the area of the unit disk (verified via the length and area integrals).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Universal covering claim needs simple-connectivity of C
- **Category:** Supplement/remark error
- **Location:** supplement / third bullet
- **Detail:** The supplement states that the surjective homomorphism $\exp\colon\mathbb{C}\to\mathbb{C}^{\times}$ with kernel $2\pi i\mathbb{Z}$ 'is the universal covering of $\mathbb{C}^{\times}$'. A covering map is universal only if the total space is simply connected. $\mathbb{C}$ is contractible hence simply connected, so the claim is true, but the text gives no justification and the cited page \ref{at:page-covering-spaces} is only a pointer. More importantly, the statement as written asserts universality without noting the required simple-connectivity of $\mathbb{C}$; as a bare side remark it is acceptable but should mention this hypothesis to be precise. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** State: 'Since $\mathbb{C}$ is contractible (hence simply connected), $\exp\colon\mathbb{C}\to\mathbb{C}^{\times}$ is the universal covering map of $\mathbb{C}^{\times}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Niven's proof attribution and date
- **Category:** Unsupported fact
- **Location:** page header note
- **Detail:** The header note says the irrationality of π follows Niven's proof (1947). Niven's one-page proof appeared in 1947 ('A simple proof that π is irrational', Bull. AMS 53 (1947), 509). The attribution and date are correct, so this is not an error; noted only for completeness. No change needed.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
