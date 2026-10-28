# Verification tracker: `04-analysis/01-real-analysis/02-calculus/02-derivatives.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/02-derivatives.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issue is in the supplement: the justification that a convex function is differentiable except at countably many points is a non sequitur (countability applies to discontinuities of the monotone one-sided derivative, not directly to differentiability). The Rolle counterexample is valid. No serious logical gaps found in the proofs.

## Issues

### ISSUE-0001 [Open] Convex function differentiability: 'except countably many points' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (凸関数 bullet)
- **Detail:** The supplement says a convex function is differentiable except at countably many points of $I^{\circ}$, citing that $f'_{-}$ is monotone with countably many discontinuities. But the countability argument applies to the monotone function $f'_{-}$ (or $f'_{+}$), not directly to differentiability: $f$ fails to be differentiable exactly where $f'_{-}\neq f'_{+}$, and this set is countable because it injects into the discontinuities of the monotone $f'_{-}$. As stated the justification is a non sequitur; the claim is true but the given reason is wrong.
- **Proposed fix:** A convex function is differentiable on $I^{\circ}$ except at countably many points: $f'_{-}$ is monotone increasing on $I^{\circ}$, hence has at most countably many discontinuities, and $f$ is non-differentiable only at points where $f'_{-}\neq f'_{+}$, which are among the discontinuities of $f'_{-}$.
- **Reported:** 2026-10-28 (8ccef3d)
