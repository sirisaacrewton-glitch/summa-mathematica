# Verification tracker: `01-foundations/03-computation/03-advanced-computability/14-difference-hierarchy.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/14-difference-hierarchy.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions 14.2–14.3, theorem 14.4, theorem 14.6, and the problems) is logically sound: the diagonalization for properness correctly handles freezing and the change-count bound, the d.c.e.-as-difference equivalence is proved both ways, and the tt-reduction characterization of ω-c.e. sets is correct. The serious problem is in the supplement: the claim that every Δ₂ set is α-c.e. for some computable ordinal is false—the transfinite Ershov hierarchy over computable ordinals exhausts the hyperarithmetic sets, not all of Δ₂. The degree-theoretic remark is acceptable for the 2-c.e. case but overstates the general properness claim. The hypcheck remark is essentially correct.

## Issues

### ISSUE-0001 [Open] Ershov hierarchy transfinite claim: Δ₂ = union over computable ordinals
- **Category:** Supplement/remark error
- **Location:** supplement / 超限の階層
- **Detail:** The supplement states that every Δ₂ set is α-c.e. for some computable ordinal α. This is false as stated: the union of the α-c.e. hierarchy over all computable ordinals (with computable notations) is exactly the hyperarithmetic (Δ¹₁) sets, not all of Δ₂. There are Δ₂ sets that are not hyperarithmetic, hence not α-c.e. for any computable ordinal. The correct statement is that the Ershov hierarchy over computable ordinals exhausts the hyperarithmetic sets, and Δ₂ sets are exactly those α-c.e. for α < ω₁^{CK} (i.e., for some ordinal notation, but not necessarily a computable ordinal in the naive sense).
- **Proposed fix:** Replace with: 'The transfinite Ershov hierarchy over all computable ordinals exhausts exactly the hyperarithmetic (Δ¹₁) sets, not all of Δ₂. A Δ₂ set is α-c.e. for some α < ω₁^{CK} (with a notation), but there exist Δ₂ sets that are not α-c.e. for any computable ordinal.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Cooper's theorem misattributed to 'each level of the difference hierarchy is proper in the Turing degrees'
- **Category:** Supplement/remark error
- **Location:** supplement / 次数
- **Detail:** The supplement says 'each level of the difference hierarchy is proper in the Turing degrees' and cites Cooper's theorem for the existence of a 2-c.e. degree that is not c.e. Cooper's theorem indeed gives a d.c.e. degree that is not c.e. (in fact not even Δ⁰₂-comparable in a strong sense), but the general claim that every level is proper in the degrees is a separate, stronger statement. The specific attribution is acceptable for the 2-c.e. case, but the blanket 'each level is proper in the degrees' is stated without qualification and is stronger than what Cooper's theorem provides.
- **Proposed fix:** Restrict the claim: 'There is a 2-c.e. (d.c.e.) Turing degree that is not c.e. (Cooper's theorem). More generally, the difference hierarchy is proper at the level of Turing degrees, but this requires separate arguments beyond Cooper's 2-c.e. result.'
- **Reported:** 2026-10-28 (8ccef3d)
