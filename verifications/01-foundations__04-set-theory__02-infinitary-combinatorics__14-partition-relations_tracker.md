# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/14-partition-relations.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/14-partition-relations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Parris–Harrington principle is not derivable from the infinite Ramsey theorem by the same compactness argument
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that the Paris–Harrington variant of finite Ramsey (adding the condition that the homogeneous set has size at least the minimum element) 'can be derived from the infinite version by the same argument' (同じ議論で無限版から導ける). This is false: the Paris–Harrington statement is unprovable in PA precisely because it is *not* a consequence of the infinite Ramsey theorem in the same compactness fashion — the compactness derivation of finite Ramsey (as in \ref{set:finite-ramsey}) yields only the ordinary finite Ramsey theorem, and the strengthened 'min ≥ min element' condition does not follow from the infinite version by that argument. The text itself then says it is unprovable in PA, which contradicts 'derivable by the same argument' (if it followed from the infinite Ramsey theorem, which is provable in PA/ACA_0, it would be provable in PA).
- **Proposed fix:** The Paris–Harrington variant (adding the condition that the homogeneous set has size at least its minimum element) does **not** follow from the infinite Ramsey theorem by the same compactness argument; indeed it is known to be unprovable in Peano arithmetic (see the supplement of \ref{logic:page-rm-ramsey}).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Dushnik–Miller for all cardinals including singular is misattributed
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states 'it is known that κ→(κ,ω)² holds for all infinite cardinals κ including singular cardinals' (特異基数を含むすべての無限基数 κ で κ→(κ,ω)² が成り立つ). The Dushnik–Miller theorem κ→(κ,ω)² holds for all infinite cardinals, but the page's own theorem \ref{set:dushnik-miller} is only stated for regular κ, and the claim as written attributes the singular case to a result not established here. More importantly, the phrasing '特異基数を含むすべての無限基数' is correct as a known theorem, but it is presented as if following from the regular-case theorem cited; the regular-case theorem does not cover singular cardinals, so citing \ref{set:dushnik-miller} for the singular case is an improper use. The statement itself (Dushnik–Miller holds for all infinite cardinals) is true, but the reference is to the regular case only.
- **Proposed fix:** The regular case is \ref{set:dushnik-miller}; the extension to singular cardinals is a separate (known) result not proved on this page.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that beth_n cannot be lowered to beth_{n-1} is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says 'it is also known that in exponent n+1 one cannot lower beth_n to beth_{n-1}' (指数 n+1 で beth_n を beth_{n-1} に下げられないことも知られている). This is stated without qualification. For n=0 this would say beth_0 = aleph_0 cannot be lowered, which is meaningless; and the precise known statement is that beth_n^+ → (aleph_1)^{n+1}_{aleph_0} is sharp in the sense that beth_n (not beth_{n-1}) is needed, but this depends on n and on consistency results. As stated it is an overstatement lacking the necessary hypotheses (e.g. for which n, and in what sense 'cannot be lowered').
- **Proposed fix:** For n ≥ 1 it is consistent (and known) that the bound beth_n in beth_n^+ → (aleph_1)^{n+1}_{aleph_0} cannot be replaced by beth_{n-1}; this sharpness is not verified here.
- **Reported:** 2026-10-28 (8ccef3d)
