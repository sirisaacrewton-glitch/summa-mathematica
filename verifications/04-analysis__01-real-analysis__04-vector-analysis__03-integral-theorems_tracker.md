# Verification tracker: `04-analysis/01-real-analysis/04-vector-analysis/03-integral-theorems.html`

<!-- source: 04-analysis/01-real-analysis/04-vector-analysis/03-integral-theorems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that the Helmholtz decomposition is non-unique by swapping in ∇h with Δh=0
- **Category:** Supplement/remark error
- **Location:** vec:helmholtz-decomposition / remark
- **Detail:** The remark says the decomposition is not unique because one can replace ∇φ by ∇h for h with Δh=0. But if Δh=0 then div(∇h)=0, so ∇h is itself solenoidal and can be absorbed into the rot A part; more importantly, replacing ∇φ with ∇h changes the gradient part to a field with zero divergence, which is not a legitimate 'gradient part' of the same decomposition unless one also adjusts A. The correct statement of non-uniqueness is: if F=∇φ+rot A and h is harmonic (Δh=0), then F=∇(φ+h)+rot(A-∇g) where rot(∇g)=∇h... this is muddled. The standard correct statement: the decomposition is unique up to adding a harmonic gradient: F=∇(φ+h)+rot(A) with Δh=0 gives another decomposition since div(∇h)=0 means ∇h can be moved into the curl part, i.e. F=∇φ+rot(A+∇g) requires rot∇g=∇h which needs ∇h to be a curl. The clean correct statement is that φ is determined up to a harmonic function and A up to a gradient, and the decomposition is unique only under boundary conditions.
- **Proposed fix:** The decomposition is not unique: if $h$ is harmonic ($\Delta h=0$) on $U$, then $\nabla h$ is both a gradient and solenoidal, so it can be assigned to either part; more precisely $\varphi$ is determined only up to a harmonic function and $A$ only up to a gradient field, and uniqueness requires boundary conditions (e.g. $\operatorname{div}A=0$ and $A\cdot n=0$ on $\partial U$).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Gauss theorem argument for x/|x|^3 being non-rotational is misapplied
- **Category:** Supplement/remark error
- **Location:** vec:irrotational-solenoidal / supplement (前提を変えると)
- **Detail:** The supplement claims that F=x/|x|^3 on R^3\{0} is divergence-free but not a curl, citing 'Gauss's theorem (the 2-chain ∂c version: ∫_{∂c}ω^2_{rot A}=∫_{∂∂c}ω^1_A=0)'. The displayed identity ∫_{∂c}ω^2_{rot A}=∫_{∂∂c}ω^1_A=0 is correct (since ∂∂c=0), but the argument as written is confused: to conclude F is not a curl one must apply it to a closed surface (the unit sphere) enclosing the origin, which is NOT of the form ∂c for a 2-chain c lying in R^3\{0} (the ball it bounds contains the removed origin). So the cited 'Gauss theorem 2-chain version' does not directly apply to the sphere in the punctured domain; the correct argument is that if F=rot A on R^3\{0}, then the flux of F=rot A through the unit sphere would be ∫_{S^2}ω^2_{rot A}=∫_{∂(ball)}ω^2_{rot A}=∫_{ball}dω^2_A=0 by Gauss applied to the ball (where A is defined on the ball minus origin—but A is only given on R^3\{0}, so this needs care). The stated reasoning is at best imprecise and the parenthetical identity does not establish the claim.
- **Proposed fix:** If $F=\operatorname{rot}A$ on $\mathbb{R}^{3}\setminus\{0\}$ with $A$ of class $C^{1}$, then applying the divergence theorem to $A$'s curl on the annulus $\{0<\varepsilon\le|x|\le1\}$ and letting $\varepsilon\to0$ (the flux of $\operatorname{rot}A$ through the small sphere tends to $0$ since $A$ is bounded near $0$) gives $\int_{S^{2}}\omega^{2}_{F}=0$, contradicting $\int_{S^{2}}\omega^{2}_{F}=4\pi$. Hence $F$ is not a curl on $\mathbb{R}^{3}\setminus\{0\}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that the three integral theorems are 'special cases' of the manifold Stokes theorem is overstated for the chain formulation
- **Category:** Supplement/remark error
- **Location:** vec:page-integral-theorems / supplement (一般化)
- **Detail:** The supplement states the three theorems are special cases of the oriented manifold Stokes theorem ∫_M dω=∫_{∂M}ω, with the cancellation check replaced by 'the general theory of boundary orientation'. This is fine as motivation, but the page's theorems are stated for chains (images of cubes) in R^n, not for manifolds with boundary; the supplement's phrasing '特別な場合で' (special cases) is acceptable as a heuristic but the precise relation (chains vs. manifolds) is glossed. This is borderline; the more concrete issue is the following sentence about the (n-1)-form: the form Σ_i (-1)^{i-1} F_i dx_1∧...∧dx_i-hat∧...∧dx_n has exterior derivative equal to div F dx_1∧...∧dx_n — this is correct. So only the 'special case' framing is imprecise, not false. I will not report this as it is essentially correct.
- **Proposed fix:** No change needed; the statement that the (n-1)-form's exterior derivative is $\operatorname{div}F\,dx_{1}\wedge\cdots\wedge dx_{n}$ is correct.
- **Reported:** 2026-10-28 (10fede1)
