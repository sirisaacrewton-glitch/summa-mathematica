# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/06-site-sheafification.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/06-site-sheafification.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Closure operator j on Ω does not satisfy j∘∧ = ∧∘(j×j)
- **Category:** Supplement/remark error
- **Location:** supplement (ローヴェア–ティアニー位相との対応)
- **Detail:** The supplement claims that the closure $S\mapsto\bar S=\{f: f^{*}S\in J\}$ satisfies $j\circ\wedge=\wedge\circ(j\times j)$. This is false for a general Grothendieck topology. The correct Lawvere–Tierney axioms for the associated idempotence operator are $j\circ\mathrm{true}=\mathrm{true}$, $j\circ j=j$, and $j\circ\wedge=\wedge\circ(j\times 1)\circ\Delta$ (equivalently $j(S\cap T)=j(jS\cap jT)$), not the naive distributivity over the product. For example, on a space with $J$ the usual open-cover topology, $j$ is interior-of-closure-like and $j(S\cap T)\ne jS\cap jT$ in general, so the stated identity fails.
- **Proposed fix:** Replace the identity with the correct Lawvere–Tierney axiom: $j\circ\wedge=\wedge\circ(j\times 1)\circ\Delta$, i.e. $j(S\cap T)=j(jS\cap jT)$ (equivalently $j(S\cap T)=jS\cap jT$ only when $j$ is applied to both factors). State: '$j\circ\mathrm{true}=\mathrm{true}$, $jj=j$, and $j(S\cap T)=j(jS\cap jT)$ hold.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Recovery J(c)={S : S̄=t_c} needs S to be a sieve, and the bijection claim is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (ローヴェア–ティアニー位相との対応)
- **Detail:** The statement '$J(c)=\{S:\bar S=t_{c}\}$' is only correct when $S$ ranges over sieves on $c$; for an arbitrary sub-presheaf of $\Omega$ (an arbitrary family of arrows closed under precomposition is a sieve, but $\bar S=t_c$ can also hold for non-sieves if interpreted loosely). More importantly, the sentence 'this correspondence gives a bijection between Grothendieck topologies and Lawvere–Tierney topologies on $\widehat{\mathbf{C}}$' is stated without the essential hypothesis that the Lawvere–Tierney topology be on the presheaf topos and that the Grothendieck topology be subcanonical-free (any $J$ works), which is fine, but the claim as written omits that the bijection is with *local operators* $j$ on $\widehat{\mathbf{C}}$ satisfying the LT axioms, and that $\Omega_J$ is the presheaf of $j$-fixed points only after passing to the associated sheaf. As stated it is imprecise about which side is fixed points.
- **Proposed fix:** State precisely: 'For sieves $S$ on $c$, $S$ is $J$-closed iff $\bar S=S$, and $J(c)=\{S\text{ a sieve}: \bar S=t_{c}\}$. The assignment $J\mapsto j$ is a bijection between Grothendieck topologies on $\mathbf{C}$ and Lawvere–Tierney local operators $j$ on $\widehat{\mathbf{C}}$; under it $\Omega_{J}$ is the presheaf of $j$-fixed sieves.'
- **Reported:** 2026-10-28 (10fede1)
