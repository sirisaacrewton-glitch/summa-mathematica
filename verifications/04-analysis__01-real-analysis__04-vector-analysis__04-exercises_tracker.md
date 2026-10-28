# Verification tracker: `04-analysis/01-real-analysis/04-vector-analysis/04-exercises.html`

<!-- source: 04-analysis/01-real-analysis/04-vector-analysis/04-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mostly correct. The main genuine issue is in vec:ex-it-4: the flux of $x/|x|^{3}$ through the boundary of an arbitrary bounded region is not always $4\pi$; it requires the origin to be in the interior and outward orientation. The other exercises and solutions are correct. The direct computation in vec:ex-it-2 is terse but valid.

## Issues

### ISSUE-0001 [Open] Flux of F=x/|x|^3 through boundary of arbitrary region is not always 4π
- **Category:** Supplement/remark error
- **Location:** vec:ex-it-4 / solution
- **Detail:** The problem claims that for $F=x/|x|^{3}$ the flux through the boundary of *any* bounded region with smooth boundary enclosing the origin equals $4\pi$. This is false as stated: the flux equals $4\pi$ only when the outward normal is taken and the region contains the origin in its interior. If the origin lies on the boundary, or if the region does not contain the origin, the flux is $0$ (or undefined). Even with the origin interior, the sign depends on orientation (outward normal). The solution implicitly assumes the origin is interior and uses outward normal, but the statement '任意の有界領域' is too strong.
- **Proposed fix:** Restate: 'Let $\Omega$ be a bounded region with smooth boundary whose interior contains the origin, and take the outward unit normal. Then $\int_{\partial\Omega} F\cdot n\,dS = 4\pi$.' Add that if the origin is outside $\Omega$, the flux is $0$ by the divergence theorem since $\mathrm{div}F=0$ on $\Omega$.
- **Reported:** 2026-10-28 (8ccef3d)
