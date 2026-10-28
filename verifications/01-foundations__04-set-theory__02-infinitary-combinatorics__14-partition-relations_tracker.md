# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/14-partition-relations.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/14-partition-relations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Parris–Harrington variant is not derivable from the infinite version by the same compactness argument
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that the Paris–Harrington variant of finite Ramsey (homogeneous set size at least the minimum element) 'can be derived from the infinite version by the same argument' (同じ議論で無限版から導ける). This is false: the Paris–Harrington statement is unprovable in PA precisely because it is *stronger* than what the infinite Ramsey theorem (provable in ACA₀, hence in PA) yields; the compactness derivation of finite Ramsey from infinite Ramsey (as in \ref{set:finite-ramsey}) does not produce the 'size ≥ min' condition. The text itself then says it is unprovable in PA, which contradicts the claim that the same compactness argument derives it.
- **Proposed fix:** Replace with: 「有限ラムゼーの定理に『等質集合の大きさが最小元以上』という条件を加えた変種（パリス–ハーリントンの原理）は、無限ラムゼーの定理からコンパクト性で導ける有限版よりも真に強く、ペアノ算術では証明できないことが知られている（\ref{logic:page-rm-ramsey} の補足）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Dushnik–Miller attributed to all cardinals including singular, but the page's theorem is only for regular κ
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states 'κ→(κ,ω)² holds for all infinite cardinals κ including singular cardinals' and links to \ref{set:dushnik-miller}, whose title and statement are explicitly 'the regular case' (正則な場合). The general theorem for singular cardinals is a separate, deeper result (Erdős–Rado–Dushnik–Miller) not proved on this page; citing the regular-case theorem as if it covered singular cardinals is an improper use of the link and an overstated claim.
- **Proposed fix:** Either restrict to: 「正則基数については \ref{set:dushnik-miller} で示した。特異基数を含むすべての無限基数 κ で κ→(κ,ω)² が成り立つことは別の定理（エルデシュ–ラドー–ダシュニク–ミラー）として知られている。」 or remove the singular-cardinal claim.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Weakly compact cardinal characterization stated without the inaccessible/uncountable requirement
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement defines weakly compact cardinals as 'uncountable cardinals κ satisfying κ→(κ)²₂'. The standard definition requires κ to be uncountable and (equivalently) inaccessible; the partition property κ→(κ)²₂ alone is equivalent to weak compactness only under the assumption that κ is inaccessible (or at least a limit cardinal / regular). As stated ('非可算基数で κ→(κ)²₂ を満たす'), the characterization is imprecise: e.g. the property must be combined with inaccessibility to match the usual notion. The claim that existence is independent of ZFC is correct, but the definition should include inaccessibility.
- **Proposed fix:** 「到達不能な非可算基数 κ が κ→(κ)²₂ を満たすとき κ を弱コンパクト基数といい（この分割性質は到達不能性と合わせて弱コンパクト性と同値）、その存在は ZFC で証明できない巨大基数の仮定である。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that beth_{n-1} cannot replace beth_n is stated for the wrong index/scope
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says '指数 n+1 で beth_n を beth_{n-1} に下げられないことも知られている'. For n=0 this would refer to beth_{-1}, which is undefined, and the general non-improvability statement needs care: the known result is that beth_n → (aleph_1)^{n+1}_{aleph_0} is sharp in the sense that beth_{n-1} (for n≥1) does not suffice, but the phrasing as written (with n+1 and beth_{n-1}) is off by one and undefined at n=0. It should be stated for n≥1 with the correct indices.
- **Proposed fix:** 「n≥1 について、beth_{n-1}→(aleph_1)^{n+1}_{aleph_0} は成り立たない（つまり beth_n を beth_{n-1} に下げられない）ことが知られている（ここでは確かめていない）。」
- **Reported:** 2026-10-28 (10fede1)
