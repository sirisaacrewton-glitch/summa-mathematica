# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/03-more-absoluteness.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/03-more-absoluteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Foundation is not essentially used for the Δ₀ characterization of ordinals
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討), first bullet; cf. set:absolute-ordinals (a) and set:ordinal-foundation
- **Detail:** The supplement claims that the axiom of foundation is used essentially in set:absolute-ordinals.a (the Δ₀ characterization of ordinals), and that without foundation a set that is transitive and linearly ordered by ∈ need not be an ordinal. But set:ordinal-foundation is stated for ZF − P (i.e. without Foundation), and the proof of (a) only uses that characterization plus Δ₀ absoluteness; no use of Foundation occurs. Indeed, in ZF − P, 'x is transitive and ∈ is a (strict) linear/transitive order on x' already characterizes ordinals (the well-ordering follows from transitivity of ∈ on x together with the definition of ordinal as transitive set of transitive sets). So the claim that Foundation is essential here is false/overstated.
- **Proposed fix:** Replace the bullet with: 'The characterization of ordinals used in \ref{set:absolute-ordinals.a} (\ref{set:ordinal-foundation}) is already available in $\ZF-\mathrm{P}$, so no use of the axiom of foundation is needed for (a); the absoluteness of being an ordinal holds in any transitive model of $\ZF-\mathrm{P}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Replacement is used only through existence of order type, not the axiom itself
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討), second bullet; cf. set:absolute-well-order (a)
- **Detail:** The bullet says set:absolute-well-order.a uses that M satisfies the replacement axiom (through the existence of the order type). This is imprecise: the proof uses the fact that in M every well-order is isomorphic to an ordinal (\tref{set:ordinal-type}), which is a theorem of ZF − P and does not require Replacement beyond what is already in ZF − P. The phrase 'uses that M satisfies Replacement' is misleading since ZF − P already includes Replacement; the real point is that the order-type theorem is available inside M.
- **Proposed fix:** Rephrase: 'The upward direction of \ref{set:absolute-well-order.a} uses that the order-type theorem (\tref{set:ordinal-type}), which is provable in $\ZF-\mathrm{P}$, holds inside $\mathbf{M}$; for a transitive model of $\ZF-\mathrm{P}-\mathrm{Inf}$ only the downward direction (\ref{set:well-order-downward}) is available.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] P(ω) non-absolute claim needs x infinite and correct justification
- **Category:** Supplement/remark error
- **Location:** sentence after set:power-rank-relativized: 'P(x)^M ≠ P(x) (x infinite ...)'
- **Detail:** The text asserts that for a countable transitive model M and infinite x ∈ M, P(x)^M ≠ P(x) because 'P(x) is uncountable'. This is only valid when x is infinite (so P(x) is uncountable in V) and M is countable; the parenthetical is correct in spirit but the justification 'P(x) is uncountable' alone does not yield P(x)^M ≠ P(x) unless one notes P(x)^M ⊆ M is countable while P(x) is uncountable. As written it is slightly imprecise but essentially correct; flagging only the missing explicit countability argument.
- **Proposed fix:** State: 'If $x\in\mathbf{M}$ is infinite and $\mathbf{M}$ is countable, then $\mathcal{P}(x)^{\mathbf{M}}=\mathcal{P}(x)\cap\mathbf{M}\subseteq\mathbf{M}$ is countable while $\mathcal{P}(x)$ is uncountable, so $\mathcal{P}(x)^{\mathbf{M}}\neq\mathcal{P}(x)$.'
- **Reported:** 2026-10-28 (10fede1)
