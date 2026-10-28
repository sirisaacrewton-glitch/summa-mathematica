# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/03-more-absoluteness.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/03-more-absoluteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page's main theorems and proofs are largely sound, but the supplement and side remarks contain several imprecise or overstated claims. The previously reported issues 1, 2 and 4 remain open; issue 3 is correctly rebutted. New problems include an incorrect countability threshold for R(α), a misattribution of Schoenfield absoluteness, an unsupported converse-AC claim, and an overstated referential-transparency analogy.

## Issues

### ISSUE-0001 [Open] Foundation used essentially in ordinal characterization
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that the foundation axiom is used essentially in \ref{set:absolute-ordinals.a} (the Δ₀ characterization of ordinals), and that without foundation a 'transitive set linearly ordered by ∈' need not be an ordinal. But \ref{set:ordinal-foundation} is stated for $\ZF-\mathrm{P}$ (which includes Foundation), and the proof of (a) uses only that characterization. More importantly, the claim 'without foundation a transitive set linearly ordered by ∈ need not be an ordinal' is misleading: the standard definition of ordinal (transitive + linearly ordered by ∈) already makes such a set an ordinal; what fails without foundation is the equivalence with the 'transitive + ∈-well-ordered' or von Neumann ordinal characterization. The statement as written overstates the role of Foundation and misidentifies what fails.
- **Proposed fix:** Replace with: 'The characterization of ordinals used in \ref{set:absolute-ordinals.a} (transitive and ∈ is transitive on it) is proved in $\ZF-\mathrm{P}$, i.e. already assuming Foundation. Without Foundation, a transitive set on which ∈ is a linear order need not be well-ordered by ∈, so the equivalence with the von Neumann characterization (transitive and well-ordered by ∈) can fail.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says Foundation is used essentially in (a) and that without it a transitive set linearly ordered by ∈ need not be an ordinal; this misidentifies what fails (the von Neumann characterization), and the proof of (a) uses only \ref{set:ordinal-foundation} which is stated for ZF−P (with Foundation).

### ISSUE-0002 [Open] Replacement used in well-order absoluteness
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says \ref{set:absolute-well-order.a} uses that $\mathbf{M}$ satisfies Replacement (through existence of order type). This is correct, but the supplement's contrast with $\ZF-\mathrm{P}-\mathrm{Inf}$ is imprecise: the downward direction \ref{set:well-order-downward} does not require Replacement, while the upward direction needs the order-type to exist inside $\mathbf{M}$, which is exactly where Replacement (or at least enough to construct the order type) is used. The phrasing 'only the downward direction could be said' is acceptable but the reason given ('through existence of order type') should be attached to the upward direction, not left ambiguous.
- **Proposed fix:** Clarify: 'The upward direction of \ref{set:absolute-well-order.a} uses that $\mathbf{M}$ satisfies Replacement, since the order type $\alpha$ and the isomorphism $f$ must exist inside $\mathbf{M}$; the downward direction \ref{set:well-order-downward} needs no such assumption.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The second bullet still leaves the role of Replacement ambiguous; it should attach the order-type existence to the upward direction, not the downward one.

### ISSUE-0003 [Ignored: Valid Rebuttal] Converse of AC absoluteness claim
- **Category:** Unsupported fact
- **Location:** text after \ref{set:ac-in-wf}
- **Detail:** The text asserts that the converse $\mathrm{AC}^{\mathbf{WF}}\to\mathrm{AC}$ is not provable, i.e. it is consistent with $\ZF^{-}$ that every well-founded set is well-orderable but some non-well-founded set is not. This is stated as a fact attributed to Kunen's Chapter IV exercises but not proved. The claim is plausible but stated without proof and without precise hypotheses; as an unsupported assertion it should be flagged or softened.
- **Proposed fix:** Either supply a reference/proof sketch, or soften to: 'The converse $\mathrm{AC}^{\mathbf{WF}}\to\mathrm{AC}$ is not expected to hold in general; in $\ZF^{-}$ it is consistent that all well-founded sets are well-orderable while some non-well-founded set is not (cf. Kunen, Chapter IV exercises; not proved here).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The sentence is a correctly labelled pointer to Kunen's exercises and does not claim a proof, so the rebuttal is correct.
**Opus Rebuttal:** The sentence only says the converse is not provable and points to Kunen's exercises; it does not claim a proof. This is a correctly labelled pointer, not an unsupported assertion.

### ISSUE-0004 [Open] Power set non-absoluteness for infinite x
- **Category:** Supplement/remark error
- **Location:** text after \ref{set:power-rank-relativized}
- **Detail:** The text says that for a countable transitive model $\mathbf{M}$ and infinite $x$, $\mathcal{P}(x)^{\mathbf{M}}\neq\mathcal{P}(x)$ because '$\mathcal{P}(x)$ is uncountable'. This reasoning is imprecise: $\mathcal{P}(x)^{\mathbf{M}}=\mathcal{P}(x)\cap\mathbf{M}$, and since $\mathbf{M}$ is countable while $\mathcal{P}(x)$ is uncountable (for infinite $x$), the inclusion is proper. The stated reason is essentially correct but the argument should note that $\mathcal{P}(x)$ is uncountable in $\mathbf{V}$ and $\mathbf{M}$ is countable, so not all subsets of $x$ lie in $\mathbf{M}$. As written it is acceptable but the justification is compressed; more importantly, the claim '$R(\alpha)^{\mathbf{M}}\neq R(\alpha)$ if $\alpha>\omega$' needs $\alpha$ to be such that $R(\alpha)$ is uncountable, which holds for $\alpha>\omega$ only if $\alpha\ge\omega+1$ gives uncountably many sets—true, but the parenthetical should say $R(\alpha)$ is uncountable for $\alpha>\omega$.
- **Proposed fix:** State: 'For a countable transitive model $\mathbf{M}$ and infinite $x$, $\mathcal{P}(x)$ is uncountable while $\mathbf{M}$ is countable, so $\mathcal{P}(x)^{\mathbf{M}}=\mathcal{P}(x)\cap\mathbf{M}\subset\mathcal{P}(x)$ properly; similarly $R(\alpha)$ is uncountable for $\alpha>\omega$, so $R(\alpha)^{\mathbf{M}}\subset R(\alpha)$ properly.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The parenthetical still says only 'α>ω' for R(α)^M ≠ R(α) without noting R(α) is uncountable for α>ω, and the P(x) argument remains compressed.

### ISSUE-0005 [Open] Wrong claim that R(α) is uncountable for α>ω
- **Category:** Supplement/remark error
- **Location:** text after \ref{set:power-rank-relativized}
- **Detail:** The text says $R(\alpha)^{\mathbf{M}}\neq R(\alpha)$ for $\alpha>\omega$ because $R(\alpha)$ is uncountable. But $R(\omega)$ is already countably infinite (it is essentially $\mathrm{HF}$), and $R(\omega+1)$ has size $2^{\aleph_0}$ only in $\mathbf{V}$; the correct statement is that $R(\alpha)$ is uncountable for $\alpha\ge\omega+1$ (indeed $R(\omega+1)=\mathcal{P}(R(\omega))$ is uncountable). The condition '$\alpha>\omega$' is thus imprecise: $\alpha=\omega$ gives a countable $R(\omega)$, and the argument that $\mathbf{M}$ omits some element requires $R(\alpha)$ to be uncountable in $\mathbf{V}$.
- **Proposed fix:** Replace with: '$R(\alpha)^{\mathbf{M}}\neq R(\alpha)$ for $\alpha\ge\omega+1$ (since $R(\alpha)$ is uncountable in $\mathbf{V}$ while $\mathbf{M}$ is countable, so some element of $R(\alpha)$ is missing from $\mathbf{M}$).'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Schoenfield absoluteness misattributed to Δ₁/Σ₁ absoluteness
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says the concepts shown absolute here are later organized into the general forms 'Δ₁ concepts are absolute' and 'Σ₁ concepts are preserved upward' (such as Schoenfield's absoluteness theorem). Schoenfield's absoluteness theorem is a much stronger and different result (Σ¹₂ absoluteness for well-founded models containing all countable ordinals), not the elementary Δ₁/Σ₁ absoluteness of Lévy. Citing it as an instance of 'Δ₁ absolute / Σ₁ upward' is a misattribution.
- **Proposed fix:** Replace with: 'These are later organized into the general Lévy hierarchy facts: Δ₁ concepts (over ZF−P) are absolute for transitive models, and Σ₁ concepts are preserved upward. (Schoenfield's absoluteness theorem is a different, stronger result and is not treated here.)'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0007 [Open] Converse AC claim stated as fact without proof
- **Category:** Unsupported fact
- **Location:** text after \ref{set:ac-in-wf}
- **Detail:** The text asserts that the converse $\mathrm{AC}^{\mathbf{WF}}\to\mathrm{AC}$ is not provable, i.e. it is consistent with $\ZF^{-}$ that every well-founded set is well-orderable but some non-well-founded set is not, attributing this to Kunen's Chapter IV exercises. This is a substantive metamathematical claim stated without proof and without precise hypotheses; it should be flagged or softened.
- **Proposed fix:** Soften to: 'The converse $\mathrm{AC}^{\mathbf{WF}}\to\mathrm{AC}$ is not provable in $\ZF^{-}$ (see Kunen, Chapter IV exercises); we do not prove this here.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0008 [Open] Reference-transparency analogy overstates absoluteness
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The analogy says that absoluteness of recursively defined functions is like 'referential transparency': the same program returns the same result in any environment. But absoluteness requires the model to be transitive and to contain the relevant data (pred(x) ∈ M), and the recursion must be well-founded; without these the 'same program' can give different results (e.g. rank computed via the cumulative hierarchy uses the power set and is not absolute in a model without Power Set). The analogy as stated is overstated.
- **Proposed fix:** Add the caveat: 'This holds only when the model is transitive and contains the required data (the predecessors), and the recursion is well-founded; otherwise the same recurrence can yield different results (as with the cumulative-hierarchy definition of rank, which uses the power set).'
- **Reported:** 2026-10-28 (048145a)
