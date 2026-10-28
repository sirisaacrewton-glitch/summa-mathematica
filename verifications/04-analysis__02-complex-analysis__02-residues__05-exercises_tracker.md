# Verification tracker: `04-analysis/02-complex-analysis/02-residues/05-exercises.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/05-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

On careful rechecking, all solutions and stated facts on this exercises page are correct: winding numbers, partial fractions, Rouché counts, residue computations, the Fourier integral, the cosecant series, and the harmonic-function exercises all check out. The only item flagged was re-examined and found consistent, so no genuine issues are reported.

## Issues

### ISSUE-0001 [Open] Residue at 0 of π/(z² sin πz) miscomputed
- **Category:** Logical gap
- **Location:** cx:ex-di-4 / solution
- **Detail:** The solution writes π/sin πz = (1/z)(1 + π²z²/6 + ⋯) and concludes Res(π/(z² sin πz), 0) = π²/6. But π/(z² sin πz) = (1/z²)·(1/z)(1 + π²z²/6 + ⋯) = 1/z³ + π²/(6z) + ⋯, so the residue (coefficient of 1/z) is π²/6. That part is actually correct. However the displayed expansion π/sin πz = (1/z)(1 + π²z²/6 + ⋯) is the expansion of π/(sin πz) itself, and multiplying by 1/z² gives the residue π²/6 correctly. The real gap: the residue-series argument requires the sum over n≠0 of (-1)^n/n² plus the residue at 0 to vanish; the solution states this but the sign/factor is consistent. No error here on rechecking.
- **Proposed fix:** No change needed; the computation is consistent.
- **Reported:** 2026-10-28 (10fede1)
