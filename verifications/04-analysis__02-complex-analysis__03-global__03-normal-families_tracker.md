# Verification tracker: `04-analysis/02-complex-analysis/03-global/03-normal-families.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/03-normal-families.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Step 1: Cauchy estimate radius mismatch
- **Category:** Logical gap
- **Location:** cx:montel / Step 1
- **Detail:** The text sets $K_{\delta}=\{z\mid \operatorname{dist}(z,K)\le 2\delta\}\subset U$ and $M=\sup_{f}\sup_{K_{\delta}}|f|$. For $a\in K$ it claims $\overline{D}(a,2\delta)\subset K_{\delta}$, which is true. But then for $|z-a|\le\delta$ it applies Cauchy's estimate with radius $\delta$ to get $|f'(z)|\le M/\delta$. Cauchy's estimate at $z$ with radius $\delta$ requires $\overline{D}(z,\delta)\subset U$ and bounds $|f'(z)|$ by $\sup_{D(z,\delta)}|f|/\delta$. Since $D(z,\delta)\subset D(a,2\delta)\subset K_{\delta}$, the bound $M/\delta$ is actually valid, but the text's stated justification ("$\overline{D}(a,2\delta)\subset K_{\delta}$ so with radius $\delta$...") is imprecise: the estimate is applied at $z$, not at $a$, and one needs $\overline{D}(z,\delta)\subset K_{\delta}$, which holds because $|z-a|\le\delta$ gives $D(z,\delta)\subset D(a,2\delta)$. The argument is repairable but the written reason is not exactly the hypothesis of the cited estimate.
- **Proposed fix:** For $z$ with $|z-a|\le\delta$ we have $\overline{D}(z,\delta)\subset D(a,2\delta)\subset K_{\delta}\subset U$, so Cauchy's estimate on $D(z,\delta)$ gives $|f'(z)|\le \sup_{D(z,\delta)}|f|/\delta\le M/\delta$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Vitali's theorem statement imprecise
- **Category:** Supplement/remark error
- **Location:** cx:sec-nf-hurwitz / supplement (類似の定理)
- **Detail:** The supplement states Vitali's theorem as: a locally bounded sequence that converges pointwise on a set with an accumulation point converges locally uniformly. As stated this is missing the essential hypothesis that the accumulation point lies in the domain $U$ (and that the set is contained in $U$). Without the accumulation point being in the domain, pointwise convergence on a set accumulating only at the boundary does not force local uniform convergence. The statement is stated more strongly than the theorem supports.
- **Proposed fix:** Vitali's theorem: if $(f_{n})\subset\mathcal{O}(U)$ is locally bounded and converges pointwise on a set $S\subset U$ having an accumulation point in $U$, then $(f_{n})$ converges locally uniformly on $U$ (to a holomorphic function).
- **Reported:** 2026-10-28 (10fede1)
