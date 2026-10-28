# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/06-poincare-duality.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/06-poincare-duality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (cap product, boundary formula, compactly supported cohomology, duality map, Poincaré duality proof, nondegeneracy, Euler characteristic, projective space cohomology rings) is logically sound and the cited labels match their use. The only genuine problems are in the supplement: the Borsuk–Ulam 'alternative proof' contains a garbled step ('$x\mapsto x$') that obscures the correct pullback argument, and the intersection-form remark about dimension $4m+2$ should explicitly refer to the middle-degree pairing. Both are minor and fixable by rewording.

## Issues

### ISSUE-0001 [Open] Borsuk–Ulam argument via RP^n cohomology is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (応用) in at:sec-pd-applications
- **Detail:** The supplement claims that from the ring structure of $H^{*}(\mathbb{R}P^{n};\mathbb{Z}/2)$ one gets another proof of Borsuk–Ulam: an odd map $S^{n}\to S^{m}$ induces $\mathbb{R}P^{n}\to\mathbb{R}P^{m}$ and 'since $x\mapsto x$' the nonvanishing of $x^{n}$ gives $n\le m$. The phrase '$x\mapsto x$' is wrong: the induced map on cohomology sends the generator $x_{m}\in H^{1}(\mathbb{R}P^{m})$ to $x_{n}\in H^{1}(\mathbb{R}P^{n})$, so $x_{m}^{n}\ne0$ forces $n\le m$. As written ('$x\mapsto x$' with $x^{n}\ne0$) the argument is garbled and does not establish the conclusion.
- **Proposed fix:** An odd map $f:S^{n}\to S^{m}$ descends to $\bar f:\mathbb{R}P^{n}\to\mathbb{R}P^{m}$. On $H^{1}(-;\mathbb{Z}/2)$ we have $\bar f^{*}(x_{m})=x_{n}$ (the generator), hence $\bar f^{*}(x_{m}^{n})=x_{n}^{n}\ne0$ in $H^{n}(\mathbb{R}P^{n};\mathbb{Z}/2)$. If $n>m$ then $x_{m}^{n}=0$ in $H^{*}(\mathbb{R}P^{m};\mathbb{Z}/2)$, a contradiction; hence $n\le m$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Intersection form symmetry/alternation claim needs dimension parity care
- **Category:** Supplement/remark error
- **Location:** supplement (交叉形式) in at:sec-pd-applications
- **Detail:** The supplement states that for a closed oriented $4m$-manifold the form $\langle a\cup b,[M]\rangle$ on $H^{2m}/$torsion is symmetric and unimodular, and that 'in dimension $4m+2$ it becomes alternating'. The symmetry statement is correct for $4m$ (since $2m$ is even, $a\cup b=b\cup a$). However the claim about $4m+2$ is imprecise: in dimension $4m+2$ the middle degree is $2m+1$ (odd), so $a\cup b=-b\cup a$ and the form is skew-symmetric (alternating over $\mathbb{Z}$ after modding out torsion), which is correct, but the text does not note that the relevant degree is the middle one $n/2$; stated as 'in dimension $4m+2$ it becomes alternating' without specifying the middle-degree pairing it is ambiguous but not false. This is borderline; the more substantive issue is that unimodularity over $\mathbb{Z}$ requires the torsion-free quotient and is only guaranteed when the form is nondegenerate, which holds by Poincaré duality with $\mathbb{Z}$ coefficients only after quotienting by torsion — the text does say '/torsion', so this is fine.
- **Proposed fix:** For a closed oriented $n$-manifold the middle pairing $H^{n/2}/\text{torsion}\times H^{n/2}/\text{torsion}\to\mathbb{Z}$ is symmetric when $n\equiv0\pmod 4$ and alternating (skew-symmetric with zero diagonal) when $n\equiv2\pmod 4$; it is unimodular by Poincaré duality.
- **Reported:** 2026-10-28 (10fede1)
