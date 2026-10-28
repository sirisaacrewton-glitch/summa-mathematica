# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/03-tychonoff.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/03-tychonoff.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kelley's theorem does not make Tychonoff 'the same strength' as AC
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から) / top:sec-ty-applications
- **Detail:** The supplement concludes: 'コンパクト性は「有限の情報で全体を押さえる」性質なので…この定理は、選択公理と同じ強さをもつ。' This is false. Kelley's theorem shows Tychonoff's theorem (for all spaces) implies AC over ZF, and AC trivially implies Tychonoff, so the full Tychonoff theorem is indeed equivalent to AC. However the sentence is embedded in a passage that earlier (remark, corollary) emphasizes that Tychonoff for Hausdorff spaces is strictly weaker than AC (equivalent to the ultrafilter lemma). Stated flatly as 'this theorem has the same strength as AC' without restricting to the general (non-Hausdorff) statement, it contradicts the page's own remark and is misleading. The 'key bundle' metaphor also conflates the general theorem with the Hausdorff version.
- **Proposed fix:** Restrict the claim: '一般の（ハウスドルフ性を仮定しない）チコノフの定理は選択公理と同値である（ケリーの定理と逆方向は明らか）。ただしコンパクトなハウスドルフ空間に限れば超フィルター補題と同値であり、選択公理より真に弱い（上の注意を参照）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Box topology on {0,1}^N is not 'an infinite discrete space'
- **Category:** Supplement/remark error
- **Location:** hypcheck (直積位相であること) / top:tychonoff proof
- **Detail:** The hypcheck says the box topology on $\{0,1\}^{\N}$ is '無限離散空間' (an infinite discrete space). This is wrong: in the box topology on $\{0,1\}^{\N}$ every singleton is open, so the space is discrete, but it is a discrete space of cardinality $2^{\aleph_{0}}$ (uncountable), not 'infinite' in the sense of a countable discrete space, and more importantly it is not compact. Calling it 'an infinite discrete space' is imprecise; the relevant point is that it is a non-compact (uncountable) discrete space, showing the box topology fails Tychonoff.
- **Proposed fix:** Replace with: '箱位相では $\{0,1\}^{\N}$ は（非可算）離散空間になり、コンパクトでない。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that {0,1}^R is not sequentially compact needs justification / is stated as obvious
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると) / top:sec-ty-applications
- **Detail:** The supplement asserts '「点列コンパクト」に変えると、可算個の直積では成り立つが、非可算個では成り立たない（$\{0,1\}^{\R}$ は点列コンパクトでない）'. The parenthetical is offered as if immediate, but $\{0,1\}^{\R}$ being compact (Tychonoff) yet not sequentially compact is a nontrivial fact (it requires producing a sequence with no convergent subsequence, e.g. via an almost-disjoint / independent family or a diagonal argument). As stated without proof or citation it is an unsupported assertion; also the 'countable product of sequentially compact is sequentially compact' half is a genuine theorem but is stated without reference.
- **Proposed fix:** Either cite a reference or add a one-line argument: '例えば $\{0,1\}^{\R}$ において、各 $n$ で第 $n$ 座標のみ（あるいは互いに異なる座標で）値が変わる点列をとると、収束部分列をもたない（各座標での値の列が収束しない座標が残る）'. Otherwise soften to '非可算個では一般に成り立たないことが知られている'.
- **Reported:** 2026-10-28 (8ccef3d)
