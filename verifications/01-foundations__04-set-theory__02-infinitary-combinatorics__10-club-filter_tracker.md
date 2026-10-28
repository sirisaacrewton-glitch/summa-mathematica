# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/10-club-filter.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/10-club-filter.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (short-sequence boundedness, duality, κ-completeness basics, the bounded ideal, closed-sup equivalence, club examples, the club filter completeness, stationary basics, cf-stationary, and the reduction to regular cardinals) check out, and the cited labels match their uses. The main problems are in the supplements: the claim that no filter can be formed from clubs when cf(μ)=ω is false (the filter exists but is not countably complete), and the Feferman–Levy remark conflates 'the filter is undefined' with 'completeness fails'. These are the only genuine issues found.

## Issues

### ISSUE-0001 [Open] Cub(μ) is not a filter when cf(μ)=ω
- **Category:** Supplement/remark error
- **Location:** supplement after set:club-examples
- **Detail:** The supplement claims that (4) shows that when cf(μ)=ω the club sets can be disjoint, and concludes that 'one cannot make a notion of large set (a filter) from club sets'. This is wrong: the family {X ⊆ μ | X contains a club} is always a filter (it is closed under supersets and contains μ, and ∅ is not in it), regardless of cf(μ). What fails when cf(μ)=ω is that this filter is not closed under intersections of <cf(μ)=ω many members (indeed two clubs can be disjoint), i.e. it is not ω-complete; it is not that no filter can be formed.
- **Proposed fix:** Replace with: '(4) が示すように、$\cf(\mu)=\omega$ のときは閉非有界集合 2 つが交わらないことがある。それでも「閉非有界集合を含む集合」の全体はフィルターにはなるが、$\omega$-完備ではなく（2 つの元の共通部分が閉非有界集合を含まないことがある）、定常集合による議論が機能しない。以下で $\cf(\mu)>\omega$ を仮定するのはこのためである。' (i.e. the filter exists but fails to be countably complete).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Feferman–Levy model does not make cf(ω₁)=ω
- **Category:** Supplement/remark error
- **Location:** supplement after set:club-filter-complete
- **Detail:** The supplement states that in the Feferman–Levy model 'cf(ω₁)=ω' holds. In the Feferman–Levy model (where ω₁ is a countable union of countable sets) ω₁ is singular, but its cofinality is ω only if ω₁ is the union of ω many countable sets; the standard symmetric Feferman–Levy model gives cf(ω₁)=ω, but the claim as stated ('cf(ω₁)=ω となれば') is used to illustrate that without AC completeness can fail. The precise issue: the sentence asserts the Feferman–Levy model has cf(ω₁)=ω, which is the correct standard fact, but then concludes 'Cub(ω₁) itself is not defined' — this is correct since cf(ω₁)=ω. However the phrasing 'AC がないと完備性は崩れうる' followed by an example where the filter is not even defined is misleading: the example does not show completeness breaking down, it shows the definition failing. A genuine failure of completeness (filter defined but not cf(μ)-complete) is a different phenomenon.
- **Proposed fix:** Rewrite: 'AC がないと $\cf(\mu)$ の値自体が変わりうる：フェファーマン＝レヴィのモデル（\ref{set:feferman-levy}）では $\omega_{1}$ が可算個の可算集合の和となり $\cf(\omega_{1})=\omega$ なので、$\cf(\mu)>\omega$ という仮定が崩れ $\mathrm{Cub}(\omega_{1})$ は定義されない。' (clarify that the hypothesis cf(μ)>ω, not merely completeness, can fail without AC).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Bounded sets in dual ideal requires regularity
- **Category:** Supplement/remark error
- **Location:** supplement after set:club-filter-complete
- **Detail:** The supplement says: when μ=κ is a regular cardinal, Cub(κ) is κ-complete and every set of size <κ (i.e. every bounded set) belongs to the dual ideal, citing set:stationary-basic.2. The identification 'size <κ ⟺ bounded' holds for regular κ, and set:stationary-basic.2 indeed states bounded sets are nonstationary. This is fine. However the parenthetical '(すなわち有界な集合)' equates 'concentration κ 未満' with 'bounded', which is only valid because κ is regular — the sentence does say κ is regular, so this is acceptable. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
