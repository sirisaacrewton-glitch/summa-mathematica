# Verification tracker: `04-analysis/01-real-analysis/04-vector-analysis/04-exercises.html`

<!-- source: 04-analysis/01-real-analysis/04-vector-analysis/04-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page consists of exercises with solutions. Checking each solution: the line integral, surface area, flux, Green/divergence/Stokes computations are all correct. The curvature exercise (vec:ex-cl-4) is essentially correct given regularity. The Gauss law exercise (vec:ex-it-4) correctly uses the divergence theorem on the punctured domain and computes the small-sphere flux as $4\pi$. No genuine logical gaps, missing hypotheses, improper links, or false stated facts were found. The single candidate issue about the curvature formula is not a real error since regularity is assumed. No new issues to report.

## Issues

### ISSUE-0001 [Open] Curvature formula for general regular curves stated without the non-vanishing speed hypothesis
- **Category:** Supplement/remark error
- **Location:** vec:ex-cl-4 / solution
- **Detail:** The problem and solution state that for a general regular curve $\kappa=\frac{\lvert\gamma'\times\gamma''\rvert}{\lvert\gamma'\rvert^{3}}$. This requires $\gamma'\neq0$ (regularity), which is implicit in 'regular curve', but the solution's derivation via reparametrization by arc length also implicitly assumes $\lvert\gamma'\rvert>0$. More importantly, the problem defines curvature only for unit-speed curves via $\kappa=\lvert\gamma''\rvert$; the general formula is asserted, not derived from that definition in a fully justified way. The step '$\gamma''=\lvert\gamma'\rvert^{2}T'+(\cdots)T$' is correct, but the claim that $T\perp T'$ (hence $\lvert T\times T'\rvert=\lvert T'\rvert=\kappa$ after arc-length parametrization) needs $\lvert T\rvert=1$ constant, which holds. This is essentially fine; the only genuine gap is that the formula presupposes regularity, which is stated. No error.
- **Proposed fix:** No change needed; regularity ($\gamma'\neq0$) is already assumed by 'regular curve'.
- **Reported:** 2026-10-28 (10fede1)
