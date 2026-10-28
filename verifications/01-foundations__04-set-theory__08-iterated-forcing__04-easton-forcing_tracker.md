# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/04-easton-forcing.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/04-easton-forcing.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Easton support matters only at weakly inaccessible λ, not at λ below a weakly inaccessible
- **Category:** Supplement/remark error
- **Location:** supplement, first bullet (前提の検討)
- **Detail:** The supplement says that without condition (c) (Easton support), "under a weakly inaccessible λ infinitely many components move and λ^{+}-c.c. can break". But condition (c) is only non-trivial at regular λ that are themselves weakly inaccessible (as the main text correctly states: "(c) が新しいことを言うのは λ が弱到達不能のときだけ"). For a weakly inaccessible λ, the relevant condition is at λ itself, not "below λ". The phrasing "弱到達不能な λ の下で" is imprecise/wrong: the failure of λ^{+}-c.c. for PP(E^{-}_{λ}) occurs precisely because λ itself may be in dom(E) and the supports below λ are not bounded, i.e. the issue is at λ, not below it.
- **Proposed fix:** Replace with: "(c) がないと、λ 自身が弱到達不能で dom(E) に属するとき、λ 未満の成分のうち動くものが λ 個になりうるため、PP(E^{-}_{λ}) の λ^{+}-c.c. が壊れうる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that E^{*} gives the minimal value for singular cardinals is overstated
- **Category:** Supplement/remark error
- **Location:** supplement, third bullet (前提の検討)
- **Detail:** The supplement states that E^{*} gives, for cardinals not in dom(E) (including singular cardinals), the power value as "the minimum determined by monotonicity and König's lemma". For singular θ this is not simply the minimum forced by monotonicity and König: Easton's theorem's E^{*}(θ) formula is a specific value, and for singular θ the actual constraint involves more (e.g. Silver's theorem, SCH considerations discussed later on the page). Saying it is "the minimum determined by monotonicity and König's lemma" is imprecise, since for singular θ additional ZFC constraints (beyond monotonicity and König) apply, and E^{*} is not in general the least value consistent with just those two constraints.
- **Proposed fix:** Replace with: "E^{*} は、dom(E) に属さない基数（特異基数を含む）での冪の値を、イーストン強制による拡大で実現される値として与えている。特異基数では単調性とケーニッヒの補題だけでは決まらず、シルヴァーの定理など更なる ZFC の制約を受ける（後述）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Jensen's covering: failure of covering gives 0# and all uncountable cardinals inaccessible in L — attribution and content
- **Category:** Supplement/remark error
- **Location:** supplement, paragraph on covering (set:eq-covering)
- **Detail:** The text says the negation of the covering property implies "0# exists", which implies all uncountable cardinals are inaccessible (and Mahlo and weakly compact) in L. This is essentially correct (Jensen's covering lemma: if 0# does not exist then covering holds; and 0# implies all uncountable cardinals are inaccessible in L). However the sentence "さらに「0# が存在する」は V=L のモデルの任意の強制拡大で偽である" is imprecise: 0# can hold in a forcing extension of L only if the forcing is trivial in the appropriate sense; more precisely, 0# is not destroyed by set forcing over L only when... Actually 0# is absolute to set forcing extensions of L? No: small forcing preserves 0#. The claim that 0# is false in every forcing extension of a model of V=L is false: e.g. adding a Cohen real to L preserves 0#? No—0# does not exist in L, and small forcing over L cannot create 0#. But the statement as written ("any forcing extension of a model of V=L") is problematic because a class forcing or a forcing that collapses cardinals could change things; more importantly, 0# is preserved by set forcing, so if it is false in L it stays false—this part is fine. The real issue: the claim that the negation of covering is *equivalent* to 0# existing is correct (Jensen). So this is borderline; the imprecision is the phrase about forcing extensions.
- **Proposed fix:** Clarify: "0# は集合強制で保存されるので、V=L のモデルの集合強制拡大でも 0# は存在しない（したがって被覆性質と SCH が成り立つ）。"
- **Reported:** 2026-10-28 (8ccef3d)
