# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/12-diamond.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/12-diamond.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (◇⇒CH, ever-branching criterion, tree reflection, ◇⇒Suslin tree) are logically sound and their citations match the label table. The genuine problems are confined to the supplements: the independence statement about CH and ◇ is one-sided and the Devlin–Johnsbråten citation is used for a claim it does not make; the ◇_κ discussion cites an unrelated proposition for 2^{<κ}=κ. The 'almost disjoint stationary family' paragraph is correct and is not reported.

## Issues

### ISSUE-0001 [Open] ◇ の CH からの独立性の記述が不正確
- **Category:** Supplement/remark error
- **Location:** supplement (first one, after set:diamond-ch)
- **Detail:** The supplement says "CH は ◇ を導かない：ZFC+CH+¬◇ は無矛盾" and cites Jensen / Devlin–Johnsbråten. The standard result is that ◇ is independent of CH: ZFC+CH+◇ and ZFC+CH+¬◇ are both consistent (Jensen). The sentence as written is acceptable for the ¬◇ direction, but the parenthetical attribution "Devlin and Johnsbråten ... では、さらに GCH と「ススリン木が存在しない」が両立することが示されている" is misleading: Devlin–Johnsbråten's *The Souslin Problem* shows the consistency of GCH + SH (no Suslin tree), which is the ◇-free side, not a strengthening of ¬◇. More importantly the claim "◇ は GCH と両立する" is fine, but the supplement never states the other half (CH+◇ consistent), so the independence claim is one-sided and the citation is used for a statement it does not make.
- **Proposed fix:** Replace with: "CH は ◇ を導かない：ZFC が無矛盾なら ZFC+CH+¬◇ も ZFC+CH+◇ も無矛盾である（Jensen）。特に Devlin–Johnsbråten, *The Souslin Problem*, LNM 405 は GCH と「ススリン木が存在しない」（したがって ¬◇）が両立することを示している。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] ◇_κ から 2^{<κ}=κ を導く議論の不備
- **Category:** Supplement/remark error
- **Location:** supplement (一般の正則基数)
- **Detail:** The text claims: for regular κ>ω, ◇_κ implies 2^{|β|}≤κ for all β<κ, hence 2^{<κ}=κ. The argument "β<κ の部分集合はすべて列に現れる" only gives 2^{|β|}≤κ for each fixed β<κ, which yields 2^{<κ}=sup_{β<κ}2^{|β|}≤κ, and combined with κ≤2^{<κ} gives 2^{<κ}=κ. That part is fine. However the stated conclusion "2^{|β|}≤κ" for all β<κ is correct but the phrase "したがって 2^{<κ}=κ" needs the additional (trivial) observation κ≤2^{<κ}; more seriously, the citation \ref{set:kappa-below-lambda-sup} is a proposition about sup of κ^λ, not about 2^{<κ}, so the link does not support the step. This is a minor imprecision but the citation is wrong.
- **Proposed fix:** State explicitly: "各 β<κ について 2^{|β|}≤κ であり、κ≤2^{<κ} は明らかなので 2^{<κ}=sup_{β<κ}2^{|β|}=κ が従う。" and drop or correct the reference to \ref{set:kappa-below-lambda-sup}.
- **Reported:** 2026-10-28 (8ccef3d)
