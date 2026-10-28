# Verification tracker: `02-algebra/01-linear-algebra/04-forms/01-bilinear.html`

<!-- source: 02-algebra/01-linear-algebra/04-forms/01-bilinear.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Pfaffian transformation formula stated for arbitrary P in M_4(A)
- **Category:** Supplement/remark error
- **Location:** lin:prob-bf-pfaffian-transform / solution
- **Detail:** The problem asks to prove $\operatorname{Pf}({}^{t}PXP)=\det P\cdot\operatorname{Pf}X$ for $P\in M_{4}(A)$ with no invertibility hypothesis. This is false for non-invertible $P$ in general: e.g. over $A=\mathbb{Z}$, take $P=2I$ and $X=J_{2}$; then ${}^{t}PXP=4J_{2}$, so $\operatorname{Pf}(4J_{2})=4$, while $\det(2I)\operatorname{Pf}(J_{2})=16\cdot1=16$. The identity $\operatorname{Pf}({}^{t}PXP)=\det P\operatorname{Pf}X$ holds only for $P\in\mathrm{GL}_{4}(A)$ (or, more precisely, requires $\det P$ to be a unit / $P$ invertible). The solution's argument also silently assumes invertibility when it invokes the uniqueness/normalization discussion (which was set up for $P\in\mathrm{GL}_{n}(F)$).
- **Proposed fix:** Restrict to invertible $P$: 'For a $4\times4$ alternating matrix $X$ and $P\in\mathrm{GL}_{4}(A)$, show $\operatorname{Pf}({}^{t}PXP)=\det P\cdot\operatorname{Pf}X$.' (Equivalently, state it over a field with $P$ invertible.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Cholesky decomposition claimed numerically more stable than leading principal minors
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The claim that testing positive definiteness via Cholesky is 'numerically more stable' than via leading principal minors is an overstatement presented as fact. Sylvester's criterion via leading principal minors is itself a standard, backward-stable test; the real issue with minors is cost ($O(n^{3})$ determinants naively, though they can be computed in $O(n^{3})$ total) and overflow, not instability per se. The blanket comparison 'more stable' is imprecise and not a theorem.
- **Proposed fix:** Replace with: 'For numerical computation, the Cholesky decomposition is often preferred because it is cheaper (about half the work of an LU factorization) and detects positive definiteness directly, whereas evaluating all leading principal minors is more costly; both are backward stable in practice.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Witt cancellation stated without the nondegeneracy/regularity hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** Witt's cancellation theorem is stated as '$q\perp q_{1}\cong q\perp q_{2}\Rightarrow q_{1}\cong q_{2}$ (標数 $\neq2$)'. As written this is false without a regularity (nondegeneracy) hypothesis on $q$: e.g. over $\mathbb{R}$ take $q=0$ (the zero form on a $1$-dimensional space), $q_{1}=\langle1\rangle$, $q_{2}=\langle-1\rangle$; then $q\perp q_{1}\cong q\perp q_{2}$ (both have signature $(1,1)$ on a $2$-dimensional space? no—) more simply, cancellation fails for degenerate forms. The standard statement requires $q$ to be nondegenerate (regular).
- **Proposed fix:** State: 'Witt's cancellation theorem: if $q$ is a nondegenerate quadratic (or symmetric bilinear) form over a field of characteristic $\neq2$ and $q\perp q_{1}\cong q\perp q_{2}$, then $q_{1}\cong q_{2}$.'
- **Reported:** 2026-10-28 (8ccef3d)
