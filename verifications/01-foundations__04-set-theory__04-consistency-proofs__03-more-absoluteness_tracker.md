# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/03-more-absoluteness.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/03-more-absoluteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the main theorems (WF model of ZF, absoluteness of ordinals, finiteness, well-orders, ordinal arithmetic, well-founded recursion, rank and transitive closure) are supported by appropriate citations and proofs. The problems concentrate in the supplement and in stated-only side remarks: the discussion of the role of Foundation in the ordinal characterization is imprecise, the AC converse claim is asserted without proof, and the power-set/rank non-absoluteness justification is compressed. These are minor but genuine issues of kinds 5 and 6.

## Issues

### ISSUE-0001 [Open] Foundation used essentially in ordinal characterization
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that the foundation axiom is used essentially in \ref{set:absolute-ordinals.a} (the Δ₀ characterization of ordinals), and that without foundation a 'transitive set linearly ordered by ∈' need not be an ordinal. But \ref{set:ordinal-foundation} is stated for $\ZF-\mathrm{P}$ (which includes Foundation), and the proof of (a) uses only that characterization. More importantly, the claim 'without foundation a transitive set linearly ordered by ∈ need not be an ordinal' is misleading: the standard definition of ordinal (transitive + linearly ordered by ∈) already makes such a set an ordinal; what fails without foundation is the equivalence with the 'transitive + ∈-well-ordered' or von Neumann ordinal characterization. The statement as written overstates the role of Foundation and misidentifies what fails.
- **Proposed fix:** Replace with: 'The characterization of ordinals used in \ref{set:absolute-ordinals.a} (transitive and ∈ is transitive on it) is proved in $\ZF-\mathrm{P}$, i.e. already assuming Foundation. Without Foundation, a transitive set on which ∈ is a linear order need not be well-ordered by ∈, so the equivalence with the von Neumann characterization (transitive and well-ordered by ∈) can fail.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Replacement used in well-order absoluteness
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says \ref{set:absolute-well-order.a} uses that $\mathbf{M}$ satisfies Replacement (through existence of order type). This is correct, but the supplement's contrast with $\ZF-\mathrm{P}-\mathrm{Inf}$ is imprecise: the downward direction \ref{set:well-order-downward} does not require Replacement, while the upward direction needs the order-type to exist inside $\mathbf{M}$, which is exactly where Replacement (or at least enough to construct the order type) is used. The phrasing 'only the downward direction could be said' is acceptable but the reason given ('through existence of order type') should be attached to the upward direction, not left ambiguous.
- **Proposed fix:** Clarify: 'The upward direction of \ref{set:absolute-well-order.a} uses that $\mathbf{M}$ satisfies Replacement, since the order type $\alpha$ and the isomorphism $f$ must exist inside $\mathbf{M}$; the downward direction \ref{set:well-order-downward} needs no such assumption.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Converse of AC absoluteness claim
- **Category:** Unsupported fact
- **Location:** text after \ref{set:ac-in-wf}
- **Detail:** The text asserts that the converse $\mathrm{AC}^{\mathbf{WF}}\to\mathrm{AC}$ is not provable, i.e. it is consistent with $\ZF^{-}$ that every well-founded set is well-orderable but some non-well-founded set is not. This is stated as a fact attributed to Kunen's Chapter IV exercises but not proved. The claim is plausible but stated without proof and without precise hypotheses; as an unsupported assertion it should be flagged or softened.
- **Proposed fix:** Either supply a reference/proof sketch, or soften to: 'The converse $\mathrm{AC}^{\mathbf{WF}}\to\mathrm{AC}$ is not expected to hold in general; in $\ZF^{-}$ it is consistent that all well-founded sets are well-orderable while some non-well-founded set is not (cf. Kunen, Chapter IV exercises; not proved here).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Power set non-absoluteness for infinite x
- **Category:** Supplement/remark error
- **Location:** text after \ref{set:power-rank-relativized}
- **Detail:** The text says that for a countable transitive model $\mathbf{M}$ and infinite $x$, $\mathcal{P}(x)^{\mathbf{M}}\neq\mathcal{P}(x)$ because '$\mathcal{P}(x)$ is uncountable'. This reasoning is imprecise: $\mathcal{P}(x)^{\mathbf{M}}=\mathcal{P}(x)\cap\mathbf{M}$, and since $\mathbf{M}$ is countable while $\mathcal{P}(x)$ is uncountable (for infinite $x$), the inclusion is proper. The stated reason is essentially correct but the argument should note that $\mathcal{P}(x)$ is uncountable in $\mathbf{V}$ and $\mathbf{M}$ is countable, so not all subsets of $x$ lie in $\mathbf{M}$. As written it is acceptable but the justification is compressed; more importantly, the claim '$R(\alpha)^{\mathbf{M}}\neq R(\alpha)$ if $\alpha>\omega$' needs $\alpha$ to be such that $R(\alpha)$ is uncountable, which holds for $\alpha>\omega$ only if $\alpha\ge\omega+1$ gives uncountably many sets—true, but the parenthetical should say $R(\alpha)$ is uncountable for $\alpha>\omega$.
- **Proposed fix:** State: 'For a countable transitive model $\mathbf{M}$ and infinite $x$, $\mathcal{P}(x)$ is uncountable while $\mathbf{M}$ is countable, so $\mathcal{P}(x)^{\mathbf{M}}=\mathcal{P}(x)\cap\mathbf{M}\subset\mathcal{P}(x)$ properly; similarly $R(\alpha)$ is uncountable for $\alpha>\omega$, so $R(\alpha)^{\mathbf{M}}\subset R(\alpha)$ properly.'
- **Reported:** 2026-10-28 (8ccef3d)
