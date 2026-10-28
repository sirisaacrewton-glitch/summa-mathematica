# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/03-theorema-egregium.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/03-theorema-egregium.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (Gauss formula, Christoffel symbols, Gauss-Codazzi equations, Theorema Egregium, orthogonal-coordinate curvature formula) and their proofs are logically sound, and the worked examples (sphere, surface of revolution, cone, the two problems) check out numerically. The genuine problems are confined to the supplement attached to the fundamental-theorem fact: the uniqueness argument incorrectly reduces a PDE system to the linear ODE lemma \ref{surf:linear-ode}, and the 'high viewpoint' sentence overstates the Gauss-Codazzi equations as literally expressing flatness of $\mathbb{R}^3$. Both are side remarks and should be corrected as proposed.

## Issues

### ISSUE-0001 [Open] Uniqueness argument in supplement misuses the linear ODE lemma
- **Category:** Supplement/remark error
- **Location:** surf:fundamental-theorem-surfaces / supplement, 一意性の部分
- **Detail:** The supplement claims uniqueness follows by the same method as the fundamental theorem of curves, using the uniqueness in \ref{surf:linear-ode} along a curve joining points of $U$. But \ref{surf:linear-ode} is a linear ODE existence/uniqueness lemma; the Gauss-Weingarten system \eqref{surf:eq-gauss-weingarten} is a system of PDEs for the frame $(f_1,f_2,n)$, not an ODE along a single curve. Restricting to a curve gives an ODE only if the frame is already known along that curve; to propagate the frame from the initial point one needs to integrate along paths and invoke path-independence (which is exactly the integrability/Codazzi-Gauss conditions), or use a PDE uniqueness argument. As stated, the argument is incomplete: the ODE lemma alone does not give uniqueness of the PDE solution.
- **Proposed fix:** Replace with: 'Uniqueness: let $f,\tilde f$ be two solutions with the same $g,h$. After applying an orientation-preserving rigid motion, arrange $f(p_0)=\tilde f(p_0)$, $f_i(p_0)=\tilde f_i(p_0)$, $n(p_0)=\tilde n(p_0)$ at a point $p_0\in U$. Both frames $(f_1,f_2,n)$ and $(\tilde f_1,\tilde f_2,\tilde n)$ satisfy the same first-order system \eqref{surf:eq-gauss-weingarten} with the same coefficients $\Gamma^k_{ij},h_{ij}$ (which depend only on $g,h$). Since $U$ is connected, by the uniqueness theorem for first-order systems (or by integrating the linear ODE along paths and using that the Gauss-Codazzi equations make the result path-independent), the two frames coincide on all of $U$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that Gauss-Codazzi equations express flatness of R^3 is imprecise
- **Category:** Supplement/remark error
- **Location:** surf:fundamental-theorem-surfaces / supplement, 高い視点
- **Detail:** The supplement says the Gauss and Codazzi-Mainardi equations are 'the equations expressing that $\mathbb{R}^3$ is flat, written along the frame of the surface'. This is imprecise/overstated: the Gauss equation relates the intrinsic curvature $R$ of the surface to $h$ (it is the Gauss equation of the immersion, not a statement that $\mathbb{R}^3$ is flat), and the Codazzi-Mainardi equation is a symmetry condition on the second fundamental form. The flatness of $\mathbb{R}^3$ enters through the symmetry $f_{ijl}=f_{ilj}$ of the ambient connection, but the two equations together are the integrability conditions for the embedding, not literally 'flatness of $\mathbb{R}^3$'.
- **Proposed fix:** Rephrase: 'The Gauss and Codazzi-Mainardi equations are the integrability conditions for the embedding of the surface into flat $\mathbb{R}^3$: they express that the ambient connection is torsion-free and flat (symmetry of mixed partials), written in the Gauss frame of the surface.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Fundamental theorem stated without simple-connectivity caveat on uniqueness/global existence
- **Category:** Unsupported fact
- **Location:** surf:fundamental-theorem-surfaces
- **Detail:** The fact states existence and uniqueness up to rigid motion for $U$ simply connected. Existence on a simply connected domain is correct, but the statement as written ('存在し、向きを保つ合同変換を除いて一意である') does not restrict uniqueness to the connected/simply-connected hypothesis carefully; more importantly, the existence requires the integrability to hold, which is stated, so this is fine. However the parenthetical attributes the proof to 'Klingenberg 第 3 章 3.8', while the page header says the Gauss and Codazzi equations were re-derived and the fundamental theorem is stated as fact; the attribution is acceptable. No genuine error here beyond the uniqueness remark already flagged.
- **Proposed fix:** No change needed to the statement itself; ensure the uniqueness discussion (see the supplement issue) correctly invokes PDE uniqueness rather than the ODE lemma.
- **Reported:** 2026-10-28 (10fede1)
