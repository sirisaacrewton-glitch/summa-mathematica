# Verification tracker: `02-algebra/03-commutative-algebra/05-regular-cm/02-depth.html`

<!-- source: 02-algebra/03-commutative-algebra/05-regular-cm/02-depth.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Local cohomology characterization of depth and dimension
- **Category:** Supplement/remark error
- **Location:** supplement (深さの幾何的意味)
- **Detail:** The supplement states $\operatorname{depth}M=\min\{i : H^{i}_{\mathfrak{m}}(M)\neq 0\}$ and $\dim M=\max\{i : H^{i}_{\mathfrak{m}}(M)\neq 0\}$. The dimension statement is correct (Grothendieck vanishing), but the depth statement is only valid when $\operatorname{depth}M<\infty$, i.e. when $\mathfrak{m}M\neq M$ (equivalently $M\neq 0$ with $\mathfrak{m}$ in the support). For $M=0$ one has $H^{i}_{\mathfrak{m}}(0)=0$ for all $i$, so the minimum over the empty set is undefined, while $\operatorname{depth}0=\infty$ by convention. More importantly, the page's own definition of depth requires $IM\neq M$; the supplement omits this hypothesis. Also the attribution to Grothendieck is loose: the depth formula is a theorem of Grothendieck (via local duality / the fact that $H^{i}_{\mathfrak{m}}$ vanishes below depth), but stating both formulas as if symmetric without the finiteness hypothesis is imprecise.
- **Proposed fix:** Assume $M\neq 0$ (so $\mathfrak{m}M\neq M$). Then $\operatorname{depth}M=\min\{i : H^{i}_{\mathfrak{m}}(M)\neq 0\}$ and $\dim M=\max\{i : H^{i}_{\mathfrak{m}}(M)\neq 0\}$ (Grothendieck). For $M=0$ both sides of the first formula are to be read as $\operatorname{depth}0=\infty$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Koszul complex computes depth only for a generating regular sequence
- **Category:** Supplement/remark error
- **Location:** supplement (コシュル複体による特徴付け)
- **Detail:** The sentence '深さはコシュル複体のホモロジーでも計算できる' is imprecise. The Koszul complex $K(x_{1},\dots,x_{n};M)$ computes depth only when $x_{1},\dots,x_{n}$ is a system of parameters / a sequence generating an ideal of definition and one reads off the first nonvanishing homology; in general the Koszul homology of an arbitrary sequence does not give depth. The precise statement is: for a sequence $x_{1},\dots,x_{n}\in\mathfrak{m}$ generating an $\mathfrak{m}$-primary ideal, $\operatorname{depth}M = n - \max\{i : H_{i}(x;M)\neq 0\}$ (or equivalently $\operatorname{depth}M=\min\{i: H_{n-i}(x;M)\neq 0\}$), and this requires the $x_{i}$ to form a system of parameters. As written, the claim is stated more strongly than what holds.
- **Proposed fix:** If $x_{1},\dots,x_{n}$ is a system of parameters of the local ring $A$ (so $(x_{1},\dots,x_{n})$ is $\mathfrak{m}$-primary), then $\operatorname{depth}M = n-\max\{i : H_{i}(x_{1},\dots,x_{n};M)\neq 0\}$; see \ref{ring:page-koszul-depth}.
- **Reported:** 2026-10-28 (10fede1)
