# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/05-orientation.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/05-orientation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Step 4 of fundamental class lemma: restriction to a cube is not an isomorphism
- **Category:** Logical gap
- **Location:** at:fundamental-class-lemma / Step 4
- **Detail:** In Step 4, for a cube $Q$ intersecting $A$ at a point $x$, the text asserts $H_{n}(\mathbb{R}^{n}|Q)\cong H_{n}(\mathbb{R}^{n}|x)$ (Step 2) and concludes $\alpha_{K}|_{Q}=0$ from $\alpha|_{x}=0$. But Step 2 only gives that the restriction $H_{n}(\mathbb{R}^{n}|Q)\to H_{n}(\mathbb{R}^{n}|y)$ is an isomorphism for $y\in Q$; it does not say $\alpha_{K}|_{Q}$ is determined by its value at a single point $x$ unless one already knows $\alpha_{K}|_{Q}$ is the restriction of a class on $Q$ whose value at $x$ vanishes. The argument needs: $\alpha_{K}|_{Q}\in H_{n}(\mathbb{R}^{n}|Q)\cong H_{n}(\mathbb{R}^{n}|x)$ maps to $\alpha|_{x}=0$, hence $\alpha_{K}|_{Q}=0$; this is fine, but then the claim 'hence at every point of $Q$ the restriction of $\alpha_{K}$ is $0$' requires that $\alpha_{K}|_{Q}$ restricts to $\alpha_{K}|_{y}$ for $y\in Q$, which is true by naturality of restriction. The step is essentially correct but the justification is compressed; more seriously, the reduction to cubes 'intersecting $A$' does not ensure $K$ is a union of cubes each meeting $A$ in a single point—a cube may meet $A$ in a set, and the argument uses only one point $x\in Q\cap A$, which is legitimate. The real gap: $K$ is chosen as the union of cubes meeting $A$, but $A\subset K$ requires every point of $A$ to lie in some cube meeting $A$; this holds. However $\alpha_{K}|_{A}=\alpha$ requires $A\subset K\subset\mathbb{R}^{n}\setminus C$, and the cubes are closed of side $<d/2\sqrt{n}$, so a cube meeting $A$ could still meet $C$ if $d$ is small relative to the cube size; the bound $d/2\sqrt{n}$ ensures the cube (diameter $<d/2$) meeting $A$ stays at distance $<d/2$ from $A$, hence does not meet $C$ (distance $d$). This is correct. The genuine gap is the passage from '$\alpha_{K}|_{Q}=0$ for each cube' to '$\alpha_{K}=0$' via Step 3's part 2: Step 3 establishes 1,2,3 for finite unions of compact convex sets, and part 2 says a class vanishing at every point is zero; applying it to $K$ requires $\alpha_{K}$ to vanish at every point of $K$, which is what was shown. So the step is correct. No issue.
- **Proposed fix:** No change needed; the argument is valid as written.
- **Reported:** 2026-10-28 (10fede1)
