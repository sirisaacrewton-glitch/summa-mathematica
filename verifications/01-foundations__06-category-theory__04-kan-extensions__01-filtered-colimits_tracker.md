# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/01-filtered-colimits.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/01-filtered-colimits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Filtered colimits from finite coproducts and coequalizers
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The supplement claims that all colimits can be built from filtered colimits, finite coproducts and coequalizers, citing Mac Lane IX §1 Theorem 1. This is false: filtered colimits are a special class of colimits, and arbitrary (e.g. large or non-filtered) colimits cannot be reduced to filtered ones together with finite coproducts and coequalizers. Mac Lane IX §1 Theorem 1 concerns the construction of arbitrary colimits from *small* coproducts and coequalizers (or from finite coproducts and filtered colimits only in special settings such as varieties, where filtered colimits commute with finite limits). The parenthetical '無限の余積を有限の余積のフィルター付き余極限として作る' is also wrong: an infinite coproduct is not a filtered colimit of finite coproducts in a general category (that would require the index set to be directed and the finite sub-coproducts to be filtered, which fails for arbitrary index sets and does not yield the coproduct in general).
- **Proposed fix:** Replace with: 'また、任意の余極限は小さな余積と余等化子から作れる（Mac Lane 第 IX 章 §1 定理 1）。代数系の圏では、有限の余積・余等化子とフィルター付き余極限からすべての余極限が作れる。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Finite limits commute with filtered colimits in varieties
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The supplement states that \ref{cat:filtered-finite-interchange} holds in finitary algebraic categories (groups, rings, modules) because 'the forgetful functor creates filtered colimits and limits'. The claim itself is true, but the stated reason is imprecise: the forgetful functor creates filtered colimits (proved here for groups) and creates limits, but creation alone does not give the interchange; one needs that the forgetful functor preserves finite limits and filtered colimits and reflects isomorphisms, so that the bijection in Set transfers. As stated ('忘却関手がフィルター付き余極限と極限を創出するので') the justification is a non sequitur.
- **Proposed fix:** Replace the parenthetical with: '忘却関手が有限の極限とフィルター付き余極限を保ち（かつ反映する）ので、Set での全単射がそのまま移る'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Necessity of connectedness in final functor theorem
- **Category:** Supplement/remark error
- **Location:** final-functor-colimit / hypcheck
- **Detail:** The hypcheck says the connectedness condition 'is also necessary (Mac Lane IX §3 Exercise 5)'. Connectedness of each $(k\downarrow L)$ is not necessary for $\mathrm{Colim}\,FL\to\mathrm{Colim}\,F$ to be an isomorphism; the correct necessary-and-sufficient condition is that each $(k\downarrow L)$ be nonempty and *connected in the homotopy/zigzag sense up to the induced maps*, i.e. that the canonical map be an iso, which is weaker than literal connectedness of the comma categories in general (e.g. when $\mathbf{J}$ has extra colimits). Attributing strict necessity to Mac Lane Exercise 5 overstates the result.
- **Proposed fix:** Replace with: '連結性はこの証明で本質的である（連結でないと $\tau_{k}$ が選び方によらないとは限らない）。ただし終関手の定義を弱めて「各 $(k\downarrow L)$ が空でなく、$\mathrm{Colim}\,FL\to\mathrm{Colim}\,F$ が同型」という同値な特徴づけも知られている。'
- **Reported:** 2026-10-28 (8ccef3d)
