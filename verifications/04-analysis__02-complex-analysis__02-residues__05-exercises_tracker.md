# Verification tracker: `04-analysis/02-complex-analysis/02-residues/05-exercises.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/05-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 0 / Resolved: 1 / Ignored: 0

## Summary of the last run

I checked every problem/solution and all side remarks. The residue computations (ex-rt-1, ex-di-1, ex-di-2, ex-di-3, ex-di-4), the winding-number computations, the Rouché applications (ex-rt-2, ex-rt-4 including the simple-root argument), the logarithm branch argument (ex-wn-3), and the harmonic-function exercises (ex-hm-1, ex-hm-2, ex-hm-3) are all correct. The cited labels match what they are used for. The previously reported gap in ex-di-4 has been fixed. No genuine logical, hypothesis, link, or remark errors remain.

## Issues

### ISSUE-0001 [Resolved] Residue at 0 of π/(z² sin πz) miscomputed
- **Category:** Logical gap
- **Location:** cx:ex-di-4 / solution
- **Detail:** The solution writes π/sin πz = (1/z)(1 + π²z²/6 + ⋯) and concludes the residue of π/(z² sin πz) at 0 is π²/6. But π/(z² sin πz) = (1/z²)·(1/z)(1 + π²z²/6 + ⋯) = 1/z³ + π²/(6z) + ⋯, so the residue (coefficient of 1/z) is π²/6. That part is actually correct. However the displayed expansion is for π/sin πz, not for π/(z² sin πz); as written the computation of the residue of π/(z² sin πz) from the expansion of π/sin πz skips the division by z². The stated value π²/6 is right, but the derivation as written is incomplete/misleading. Also the sign convention: the sum formula gives Σ_{n≠0}(-1)^n/n² + Res = 0, so Σ_{n≠0}(-1)^n/n² = -π²/6, hence 2Σ_{n≥1}(-1)^n/n² = -π²/6, giving Σ = -π²/12, consistent. The only genuine gap is the missing division by z² in the expansion step.
- **Proposed fix:** Replace with: Since $$\frac{\pi}{z^{2}\sin\pi z}=\frac{1}{z^{2}}\cdot\frac{1}{z}\Bigl(1+\frac{\pi^{2}z^{2}}{6}+\cdots\Bigr)=\frac{1}{z^{3}}+\frac{\pi^{2}}{6z}+\cdots,$$ the residue at $0$ is $\pi^{2}/6$.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Resolved — The solution now explicitly divides by z^2: it writes π/(z^2 sin πz) = (1/z^3) + π^2/(6z) + ⋯ and correctly reads off the residue π^2/6, so the previously missing step is present.
