# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/10-club-filter.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/10-club-filter.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is the supplement after set:club-examples, which falsely claims that when cf(μ)=ω one cannot form a filter from club sets; in fact the club-generated family is always a filter, and only countable completeness fails. A secondary imprecision concerns the Feferman–Levy remark, which conflates 'Cub(ω₁) undefined' with 'completeness breaks'. The ultrafilter characterization in the earlier supplement is correct. Proofs, hypchecks and citations were checked and found consistent.

## Issues

### ISSUE-0001 [Open] Cub(μ) is not a filter when cf(μ)=ω
- **Category:** Supplement/remark error
- **Location:** supplement after set:club-examples
- **Detail:** The supplement claims that when cf(μ)=ω, two disjoint club sets can exist, and concludes that 'one cannot make a notion of large sets (a filter) from club sets'. This is false: the family {X ⊆ μ | X contains a club} is always a filter (it contains μ, excludes ∅, is upward closed, and closed under binary intersections by set:club-filter-complete.1 with λ=2 < cf(μ)). What fails when cf(μ)=ω is only the countable completeness (the intersection of countably many clubs need not be club), not the filter property. The stated reason for restricting to cf(μ)>ω is therefore wrong.
- **Proposed fix:** Replace with: '(4) shows that when cf(μ)=ω two club sets can be disjoint, so the family of sets containing a club is not countably complete (the intersection of countably many clubs need not contain a club). It is nevertheless a filter; the assumption cf(μ)>ω below is needed for the cf(μ)-completeness of Cub(μ) (set:club-filter-complete), not for it to be a filter.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Feferman–Levy model does not make cf(ω₁)=ω
- **Category:** Supplement/remark error
- **Location:** supplement after set:club-filter-complete
- **Detail:** The supplement says that in the Feferman–Levy model 'cf(ω₁)=ω holds, so Cub(ω₁) itself is not defined'. In the Feferman–Levy model (ZF + ¬AC where ω₁ is a countable union of countable sets) the ordinal ω₁ is still a set and cf(ω₁)=ω holds, but the definition of Cub(μ) requires cf(μ)>ω, so Cub(ω₁) is simply not defined — that part is fine. However the phrasing 'AC がないと完備性は崩れうる' followed by this example suggests the completeness of an existing filter collapses; more importantly, the claim that cf(ω₁)=ω in that model is correct, but the sentence conflates 'the filter is not defined' with 'completeness breaks'. The real point is that without AC, cf(ω₁) can be ω, so the hypothesis cf(μ)>ω fails and the construction does not apply.
- **Proposed fix:** Rewrite: 'Without AC the hypothesis cf(μ)>ω can fail: in the Feferman–Levy model (set:feferman-levy) cf(ω₁)=ω, so Cub(ω₁) is not defined at all. The completeness statement requires cf(μ)>ω as a hypothesis; it is not that an existing filter loses completeness.'
- **Reported:** 2026-10-28 (8ccef3d)
