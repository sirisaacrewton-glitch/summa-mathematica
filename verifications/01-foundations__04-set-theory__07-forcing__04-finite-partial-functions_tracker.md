# Verification tracker: `01-foundations/04-set-theory/07-forcing/04-finite-partial-functions.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/04-finite-partial-functions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (generic function lemma, c.c.c. approximation, preservation of cofinalities, nice names and the power bound, and the consistency corollaries) are correctly argued and the citations match their targets. The genuine problems are confined to the supplement and the side remark about König's lemma: the κ-c.c. preservation threshold is stated too loosely, and the justification that cf(2^ω) > ω is 'best possible' is misstated (the contradiction should be with König's inequality, not with (2^ω)^ω = 2^ω), and the claim that cf(κ) > ω is the only ZFC constraint on the continuum is overstated.

## Issues

### ISSUE-0001 [Open] κ-c.c. preserves regular cardinals ≥ κ: wrong threshold
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that a κ-c.c. p.o. preserves regular cardinals ≥ κ by the same method. The standard approximation argument only bounds |F(ξ)| by <κ (an antichain in a κ-c.c. p.o. has size <κ), so it preserves regular cardinals λ with λ^{<κ} < λ (in particular λ > κ, or λ = κ when κ is regular and κ^{<κ} = κ). For λ = κ with κ singular (e.g. κ = ℵ_ω, which is not regular anyway) or more importantly the claim as stated for λ = κ requires κ^{<κ} = κ; the naive statement '≥ κ' is not justified by the same method and can fail (e.g. a κ-c.c. collapse of κ^{<κ} to κ when κ^{<κ} > κ). The threshold should be λ^{<κ} < λ, which for λ > κ holds automatically, and for λ = κ needs κ^{<κ} = κ.
- **Proposed fix:** More generally, a p.o. that is $\kappa$-c.c. in $M$ preserves all regular cardinals $\lambda$ with $(\lambda^{<\kappa}=\lambda)^{M}$ (in particular every regular $\lambda>\kappa$); the same approximation argument bounds each $\lvert F(\xi)\rvert$ by $<\kappa$ and then $\lvert S\rvert<\lambda$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] König's lemma does not imply cf(κ^ω) > ω for arbitrary κ
- **Category:** Supplement/remark error
- **Location:** text after set:continuum-kappa (sentence on König)
- **Detail:** The text says 'König's lemma (set:konig-cofinality-power) gives cf(2^ω) > ω, so this is best possible: if cf(2^ω) = ω then (2^ω)^ω = 2^ω, a contradiction.' The parenthetical justification is wrong: König's theorem gives cf(2^ω) > ω, but the stated reason '(2^ω)^ω = 2^ω' is not a contradiction by itself — the contradiction is with König's inequality 2^ω < (2^ω)^{cf(2^ω)} = (2^ω)^ω. As written the argument is circular/incorrect. Also the claim that 'cf(κ) > ω is the only ZFC constraint' is overstated: König's theorem constrains cf(2^ω) > ω, but there are further constraints (e.g. 2^ω < 2^{ω_1}, monotonicity), so 'only constraint' is imprecise.
- **Proposed fix:** By König's lemma (\ref{set:konig-cofinality-power}) $\cf(2^{\omega})>\omega$; indeed if $\cf(2^{\omega})=\omega$ then König's inequality would give $2^{\omega}<(2^{\omega})^{\cf(2^{\omega})}=(2^{\omega})^{\omega}$, which is impossible since $(2^{\omega})^{\omega}=2^{\omega\cdot\omega}=2^{\omega}$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that cf(κ)>ω is the only ZFC constraint on the continuum
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The supplement states that the hypothesis (κ^ω = κ)^M 'includes cf(κ) > ω by König's lemma' and that 'this is the only ZFC constraint on the value of the continuum, as one sees by starting from a model M of GCH.' The first part is wrong: κ^ω = κ does not imply cf(κ) > ω in general (e.g. κ = ℵ_ω satisfies κ^ω ≥ κ^{cf κ} > κ by König, so actually κ^ω = κ does fail for κ = ℵ_ω — but the reason is König applied to κ^ω, not that κ^ω = κ 'includes' cf(κ) > ω as a triviality; more importantly the statement as phrased suggests the implication is immediate from König's lemma alone, which it is not: one needs König's theorem κ^{cf κ} > κ). The second part ('only ZFC constraint') is also imprecise, since monotonicity λ < μ ⇒ 2^λ ≤ 2^μ and 2^ω < 2^{ω_1} are additional constraints.
- **Proposed fix:** The hypothesis $(\kappa^{\omega}=\kappa)^{M}$ forces $\cf(\kappa)>\omega$: by \ref{set:konig-cofinality-power}, $\kappa^{\cf\kappa}>\kappa$, so if $\cf(\kappa)=\omega$ then $\kappa^{\omega}>\kappa$. Starting from a model of GCH, every $\kappa$ with $\cf(\kappa)>\omega$ can be made the value of $2^{\omega}$, so together with König's theorem $\cf(2^{\omega})>\omega$ this shows the continuum can be any cardinal of uncountable cofinality (subject also to monotonicity constraints on $2^{\lambda}$ for $\lambda\ge\omega$).
- **Reported:** 2026-10-28 (8ccef3d)
