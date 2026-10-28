# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/07-wedderburn-principal.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/07-wedderburn-principal.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof (reduction to J^2=0 via the 2-cocycle lemma, induction on dimension), the separability lemmas, and the perfect-field theorem are logically sound; citations match their targets. The only genuine problems are in the supplement: the claim that the n=2 cocycle lemma already gives vanishing of H^n for all n≥1 is an overstatement of the cited result, and the Maschke analogy is stated more strongly ('exactly the same shape') than warranted. Both are minor and confined to the supplement.

## Issues

### ISSUE-0001 [Open] Hochschild vanishing for all n≥1 overstated
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that \ref{mod:separable-cocycle} is the n=2 case of the statement that the Hochschild cohomology H^{n}(S,M) vanishes for all n≥1 for a separable algebra. The lemma only proves vanishing of H^{2} with values in a bimodule (every 2-cocycle is a coboundary). The general vanishing for all n≥1 is true for separable algebras, but the cited lemma does not establish it, and the sentence presents it as if it followed from the n=2 computation alone. This is an overstatement of what the cited result gives.
- **Proposed fix:** \ref{mod:separable-cocycle} is the case $n=2$ of the (true) fact that for a separable algebra $S$ one has $H^{n}(S,M)=0$ for all $n\ge 1$ and every $S$-bimodule $M$; the general case requires a separate argument (e.g. using the separability idempotent to build a contracting homotopy of the Hochschild complex), and only the $n=2$ case is proved here.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Maschke analogy imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the situation is 'exactly the same form' as Maschke's theorem ('if |G| is invertible then group cohomology vanishes'). Maschke's theorem proper is semisimplicity of kG when |G| is invertible in k; the vanishing of group cohomology H^{n}(G,M) for all n≥1 requires |G| invertible in k, which is correct, but the analogy 'same form' is loose: the separability idempotent generalizes (1/|G|)Σ g⊗g^{-1}, yet the group-cohomology vanishing is a consequence of semisimplicity, not literally the same statement. As stated it is an imprecise/overstated analogy rather than a false claim, but the phrase 'exactly the same shape' overstates it.
- **Proposed fix:** This is analogous to Maschke's theorem: just as $kG$ is semisimple when $\abs{G}$ is invertible in $k$ (and then $H^{n}(G,M)=0$ for $n\ge 1$), a separable algebra has vanishing Hochschild cohomology in positive degrees; the separability idempotent is the analogue of $\frac{1}{\abs{G}}\sum_{g}g\otimes g^{-1}$.
- **Reported:** 2026-10-28 (8ccef3d)
