# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/03-cut-elimination.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/03-cut-elimination.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Inconsistent claim about growth of cut-free derivations
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討 / 高い視点から) and the paragraph after pt:lk-consistency
- **Detail:** The supplement says cut elimination can make derivations grow 'to the order of a tower of exponentials' (指数関数の塔の程度), while the paragraph after the consistency corollary says the growth is 'super-exponential' (超指数関数的). These are not the same claim, and the standard result (Statman) is that cut elimination can produce a tower of exponentials of height proportional to the cut complexity, i.e. elementary but not primitive-recursive-bounded in general. The two statements are mutually inconsistent and the 'super-exponential' phrasing is imprecise/overstated relative to the tower-of-exponentials bound.
- **Proposed fix:** Unify both statements: 'カットを除くと導出の大きさは一般に指数関数の塔の高さがカット論理式の複雑さに比例する程度に増えうる（超指数的な増大もしうる）'. Concretely, replace '超指数関数的に増えうる' with '指数関数の塔の高さがカットの複雑さに比例する程度に増えうる（したがって超指数的な増大もしうる）' so the two passages agree.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Formalization remark about totality is vague/overstated
- **Category:** Supplement/remark error
- **Location:** paragraph after pt:lk-consistency
- **Detail:** The sentence 'この議論を算術の中で形式化するには、そのような増加をする関数が全域的であることを使う必要がある' is imprecise: the usual formalization of cut elimination in arithmetic (e.g. Gentzen's consistency proof) does not proceed by bounding the size of the cut-free derivation via a totality assumption on a fast-growing function; rather it uses transfinite induction up to ε_{0}. The claim as stated is misleading about what is needed.
- **Proposed fix:** Replace with: 'カット除去を算術の中で形式化するには、導出の大きさの増大を制御する必要があり、ゲンツェンは ε_{0} までの超限帰納法を用いた（本サイトでは確かめていない）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Equality formulation remark conflates initial sequents and rules
- **Category:** Supplement/remark error
- **Location:** supplement, 前提の検討 first bullet
- **Detail:** The bullet says a formulation with equality rules (Negri–von Plato left rules) admits cut elimination, and then says 'we use the system with equality added as initial sequents (\ref{pt:equivalence-of-systems}) in a form allowing cut'. Adding equality as initial sequents (the standard t=t and replacement/schematic sequents) is a different formulation from Negri–von Plato's rules; the sentence juxtaposes them as if interchangeable and the parenthetical citation is used only as a pointer, not a justification. As a stated-only claim it is imprecise about which formulation is being used and why cut elimination still holds.
- **Proposed fix:** Clarify: 'Negri–von Plato の等号の左規則を用いた体系ではカット除去が成り立つ。本サイトでは等号を初期シーケント（t=t および置換の図式）として加えた体系を用い、カットを許した形で使う（この体系でもカット除去が成り立つ）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that intermediate sequent theorem follows from cut elimination is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果
- **Detail:** The supplement lists '中間シーケント定理' (intermediate sequent theorem / interpolation-type result) among consequences of cut elimination alongside Craig interpolation and Herbrand. The intermediate sequent theorem (Maehara) is a consequence of the Maehara method which itself relies on cut elimination, so grouping it as a separate 'consequence' is acceptable, but stating it as '得られることが一般に知られている' together with Herbrand without noting that Herbrand's theorem requires additional machinery (it is not a direct corollary of cut elimination alone in the same sense) is overstated. Herbrand's theorem is not a straightforward corollary of cut elimination; it needs the midsequent/herbrand expansion argument.
- **Proposed fix:** Rephrase: 'カット除去を道具として、クレイグの補間定理（前原の方法）や中間シーケント定理が得られる。エルブランの定理（\ref{pt:herbrand}）もカット除去と密接に関わるが、証明には追加の議論を要する。'
- **Reported:** 2026-10-28 (10fede1)
