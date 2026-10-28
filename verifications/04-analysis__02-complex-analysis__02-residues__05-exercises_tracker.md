# Verification tracker: `04-analysis/02-complex-analysis/02-residues/05-exercises.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/05-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a set of exercises with solutions. Most solutions are correct: winding numbers, partial fractions, Rouché, tangent residues, the standard real integrals, the harmonic-function exercises, and the Dirichlet problem all check out. The only genuine issue is a minor gap in the series exercise cx:ex-di-4, where the residue of π/(z² sin πz) at 0 is read off from the expansion of π/sin πz without explicitly dividing by z²; the numerical value is correct but the derivation as written is incomplete.

## Issues

### ISSUE-0001 [Open] Residue at 0 of π/(z² sin πz) miscomputed
- **Category:** Logical gap
- **Location:** cx:ex-di-4 / solution
- **Detail:** The solution writes π/sin πz = (1/z)(1 + π²z²/6 + ⋯) and concludes the residue of π/(z² sin πz) at 0 is π²/6. But π/(z² sin πz) = (1/z²)·(1/z)(1 + π²z²/6 + ⋯) = 1/z³ + π²/(6z) + ⋯, so the residue (coefficient of 1/z) is π²/6. That part is actually correct. However the displayed expansion is for π/sin πz, not for π/(z² sin πz); as written the computation of the residue of π/(z² sin πz) from the expansion of π/sin πz skips the division by z². The stated value π²/6 is right, but the derivation as written is incomplete/misleading. Also the sign convention: the sum formula gives Σ_{n≠0}(-1)^n/n² + Res = 0, so Σ_{n≠0}(-1)^n/n² = -π²/6, hence 2Σ_{n≥1}(-1)^n/n² = -π²/6, giving Σ = -π²/12, consistent. The only genuine gap is the missing division by z² in the expansion step.
- **Proposed fix:** Replace with: Since $$\frac{\pi}{z^{2}\sin\pi z}=\frac{1}{z^{2}}\cdot\frac{1}{z}\Bigl(1+\frac{\pi^{2}z^{2}}{6}+\cdots\Bigr)=\frac{1}{z^{3}}+\frac{\pi^{2}}{6z}+\cdots,$$ the residue at $0$ is $\pi^{2}/6$.
- **Reported:** 2026-10-28 (8ccef3d)
