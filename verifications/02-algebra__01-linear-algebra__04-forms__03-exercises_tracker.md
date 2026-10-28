# Verification tracker: `02-algebra/01-linear-algebra/04-forms/03-exercises.html`

<!-- source: 02-algebra/01-linear-algebra/04-forms/03-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

I checked all problems and solutions. The Gram–Schmidt vectors, orthogonal projection matrix, diagonalization, singular values, and least-squares computation are all correct. The Pfaffian value $8$ and $\det A=64$ are correct. The Sylvester criterion solution is sketchy but essentially correct. No genuine logical errors, missing hypotheses, or false side claims were found.

## Issues

### ISSUE-0001 [Open] Gram–Schmidt third vector sign error
- **Category:** Logical gap
- **Location:** lin:ex-ip-1 / solution
- **Detail:** The stated $e_{3}=(-\frac{\sqrt{3}}{3},\frac{\sqrt{3}}{3},\frac{\sqrt{3}}{3})$ is not orthogonal to the first vector $(1,1,0)$: its inner product with $(1,1,0)$ is $-\frac{\sqrt3}{3}+\frac{\sqrt3}{3}=0$? Actually $(-1+1+0)/\sqrt3=0$, so it is orthogonal to $(1,1,0)$. Check against $e_{2}=(\frac{\sqrt6}{6},-\frac{\sqrt6}{6},\frac{\sqrt6}{3})$: inner product $=(-\frac{\sqrt6}{6}\cdot\frac{\sqrt3}{3})+(-\frac{\sqrt6}{6}\cdot\frac{\sqrt3}{3})+(\frac{\sqrt6}{3}\cdot\frac{\sqrt3}{3})$... let me recompute: $e_3\cdot e_2 = (-\frac{\sqrt3}{3})(\frac{\sqrt6}{6})+(\frac{\sqrt3}{3})(-\frac{\sqrt6}{6})+(\frac{\sqrt3}{3})(\frac{\sqrt6}{3}) = -\frac{\sqrt{18}}{18}-\frac{\sqrt{18}}{18}+\frac{\sqrt{18}}{9} = -\frac{\sqrt{18}}{9}+\frac{\sqrt{18}}{9}=0$. So $e_3$ is orthogonal to both. But is it the Gram–Schmidt output? The third vector $(0,1,1)$ minus projections: $w_3=(0,1,1)-\frac{1}{2}(1,1,0)-\frac{1}{2}(1,0,1)$... The correct normalized third vector is $\frac{1}{\sqrt3}(-1,1,1)$, which matches. So no error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
