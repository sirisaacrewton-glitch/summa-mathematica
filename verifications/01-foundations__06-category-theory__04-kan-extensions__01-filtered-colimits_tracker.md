# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/01-filtered-colimits.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/01-filtered-colimits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Filtered colimits + finite coproducts + coequalizers do not generate all colimits
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement claims that filtered colimits, finite coproducts and coequalizers suffice to build all colimits, citing Mac Lane IX §1 Theorem 1. This is false: coequalizers together with finite coproducts already give all finite colimits, but to get arbitrary (large) colimits one needs arbitrary coproducts, not filtered colimits of finite coproducts. A filtered colimit of finite coproducts is still a small/restricted colimit; e.g. in Set the colimit of an arbitrary diagram over a large index category cannot generally be expressed as a filtered colimit of finite coproducts plus coequalizers. Mac Lane IX.1 Theorem 1 states that a category is cocomplete iff it has (small) coproducts and coequalizers (equivalently finite colimits plus arbitrary coproducts), not that filtered colimits of finite coproducts suffice.
- **Proposed fix:** Replace with: "また、フィルター付き余極限・有限の余積・余等化子からすべての余極限が作れる" should read "また、任意の（小さい）余積・有限の余積・余等化子からすべての余極限が作れる（Mac Lane 第 IX 章 §1）。フィルター付き余極限は有限の余積と組み合わせても任意の余積を生み出さない。" i.e. state that all colimits are built from arbitrary coproducts and coequalizers (or finite colimits plus arbitrary coproducts), not from filtered colimits of finite coproducts.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Interchange for algebraic categories needs the forgetful functor to create both limits and filtered colimits
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says the finite-limit/filtered-colimit interchange holds in finitary algebraic categories because 'the forgetful functor creates filtered colimits and limits'. For the interchange to transfer from Set one needs the forgetful functor to preserve (or create) both the finite limits and the filtered colimits, and moreover the comparison map to be compatible. This is essentially correct for varieties (finitary algebraic categories) since U creates limits and filtered colimits, but the phrase '有限的な代数系の圏' combined with '忘却関手がフィルター付き余極限と極限を創出する' is imprecise: U creates limits and filtered colimits, but the interchange statement requires that U preserve the relevant (co)limits and reflect isomorphisms, which holds. The claim as stated is essentially true for varieties; however the parenthetical justification is slightly off since U creating limits/colimits is not by itself the reason the interchange holds — one needs U to preserve both and reflect the comparison. This is borderline; the main genuine error is the previous item.
- **Proposed fix:** Clarify: "忘却関手が有限極限とフィルター付き余極限を創出し（従って保つ）ので、Set での交換性がそのまま移る" — i.e. state that U creates (hence preserves) both finite limits and filtered colimits, so the Set interchange transfers.
- **Reported:** 2026-10-28 (10fede1)
