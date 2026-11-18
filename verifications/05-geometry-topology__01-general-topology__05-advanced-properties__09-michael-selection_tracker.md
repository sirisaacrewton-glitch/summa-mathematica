# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/09-michael-selection.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/09-michael-selection.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the approximate-selection lemma, the refinement lemma, the corollary and the examples are logically sound. The problems are confined to the supplement: the converse characterization of paracompactness omits the collectionwise-normality hypothesis, the circle square-root example is not lower semicontinuous (so it is not a valid counterexample to dropping convexity), and the Bartle–Graves remark overstates the derivation from Michael's theorem.

## Issues

### ISSUE-0001 [Open] Converse characterization of paracompactness misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 逆
- **Detail:** The supplement claims that for a $T_{1}$ space $X$, the property that every lower semicontinuous map into nonempty closed convex subsets of a Banach space has a continuous selection is equivalent to $X$ being paracompact. Michael's converse theorem requires the domain to be a collectionwise normal (or at least normal) $T_{1}$ space, and the selection property is stated for maps into a Banach space (or into $\mathbb{R}$); paracompactness is not equivalent to this property for arbitrary $T_{1}$ spaces. As stated (only $T_{1}$), the equivalence is false.
- **Proposed fix:** For a collectionwise normal $T_{1}$ space $X$ (in particular a normal $T_{1}$ space), the property that every lower semicontinuous map into nonempty closed convex subsets of a Banach space admits a continuous selection is equivalent to $X$ being paracompact (Michael 1956; not proved here).
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** Michael (1956) proves the converse for T1 spaces: a T1 space is paracompact iff every lsc map into nonempty closed convex subsets of a Banach space has a continuous selection. Collectionwise normality is not an extra hypothesis (the selection property itself yields normality via the extension corollary).

### ISSUE-0002 [Open] Square-root example on the circle is not lower semicontinuous
- **Category:** Supplement/remark error
- **Location:** supplement / 凸性を外すと
- **Detail:** The map $z\mapsto\{w:w^{2}=z\}$ on the unit circle is claimed to be lower semicontinuous. It is not: the two square roots depend continuously on $z$ locally, but globally they cannot be chosen continuously, and the set-valued map fails lower semicontinuity at the point where the two branches would have to be swapped (the two roots approach each other only at $z=1$; near $z=1$ the roots are $\pm$ close values, and a small open ball around one root meets $\varphi(z)$ only on one side). More precisely, at $z_{0}=1$ the value is $\{1,-1\}$; taking $U$ a small ball around $1$ not containing $-1$, $\varphi^{-}(U)$ contains points $z$ near $1$ on one arc but not the other, so it is not open. Hence the example does not exhibit a lower semicontinuous map without a continuous selection.
- **Proposed fix:** Replace with a correct example: on $S^{1}$, the map $z\mapsto\{w\in S^{1}: w^{2}=z\}$ is not lower semicontinuous, so it is not a valid counterexample. A correct statement: the map $z\mapsto\{w:w^{2}=z\}$ on $S^{1}$ has no continuous selection (no continuous square root on $S^{1}$, by the fundamental group), but it is also not lower semicontinuous; to get a lower semicontinuous example without a continuous selection one needs a different construction (e.g. a map whose values are two points that cannot be continuously separated).
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** For open U ⊆ C, φ^-(U) = q(U ∩ S^1) with q(w)=w^2, and q: S^1→S^1 is an open map, so φ is lower semicontinuous. The page now includes this proof and an elementary proof that no continuous selection exists.

### ISSUE-0003 [Open] Bartle–Graves theorem attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the Bartle–Graves theorem (a bounded linear surjection between Banach spaces has a continuous, not necessarily linear, right inverse) 'is known to be derived from this theorem' (Michael's selection theorem), citing the open mapping theorem. The standard proof of Bartle–Graves uses the open mapping theorem and a selection/approximation argument, but it is not a direct corollary of Michael's selection theorem in the form stated here; the claim as phrased ('この定理から導かれる') overstates the logical dependence.
- **Proposed fix:** The Bartle–Graves theorem (a bounded linear surjection between Banach spaces admits a continuous right inverse) can be proved by an approximation-and-selection argument similar in spirit to the one used here (using the open mapping theorem); it is not literally a corollary of Michael's selection theorem.
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** Bartle–Graves is a direct corollary: φ(y)=T^{-1}(y) is nonempty closed convex, φ^-(U)=T(U) is open by the open mapping theorem, F is metric hence paracompact, and a continuous selection s satisfies T∘s=id. The derivation is now written on the page.
