# Verification tracker: `01-foundations/03-computation/03-advanced-computability/14-difference-hierarchy.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/14-difference-hierarchy.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions, the properness theorem, and the tt-reducibility theorem) is logically sound: the diagonalization with freezing is correct, the d.c.e.-as-difference proof is correct, and the ω-c.e.↔tt equivalence is correctly argued. The one genuine problem is in the supplement: the claim that every Δ₂ set is α-c.e. for some computable ordinal α is false — the Ershov hierarchy over computable ordinals exhausts the hyperarithmetic sets, not Δ₂. The Cooper attribution for d.c.e. degrees is correct and needs no change.

## Issues

### ISSUE-0001 [Open] Ershov hierarchy claim about all Δ₂ sets being α-c.e. for a computable ordinal
- **Category:** Supplement/remark error
- **Location:** supplement / 超限の階層
- **Detail:** The supplement states that every Δ₂ set is α-c.e. for some computable ordinal α. This is false: the Ershov hierarchy over computable ordinals exhausts only the hyperarithmetic (Δ¹₁) sets, and even within Δ₂ the statement fails. The correct classical result is that the α-c.e. sets for computable α exhaust exactly the hyperarithmetic sets, not Δ₂. In particular there are Δ₂ sets that are not α-c.e. for any computable ordinal α (e.g. sets of sufficiently high hyperarithmetic complexity below Δ₂, or more simply the statement as written is not a theorem). The claim that 'Δ₂ の集合はすべてある計算可能な順序数 α について α-c.e.' is an overstatement.
- **Proposed fix:** Replace with: 'The α-c.e. sets for computable ordinals α exhaust exactly the hyperarithmetic sets (Δ¹₁), not all of Δ₂; there exist Δ₂ sets that are not α-c.e. for any computable ordinal α.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Cooper's theorem attribution for 2-c.e. degrees
- **Category:** Supplement/remark error
- **Location:** supplement / 次数
- **Detail:** The supplement attributes to Cooper the result that there is a 2-c.e. (d.c.e.) Turing degree that is not c.e. This is correct as a historical attribution (Cooper 1971 constructed a d.c.e. degree that is not c.e.). However the phrasing '2-c.e. な次数で認識可能な次数でないものがある：クーパーの定理' is accurate. No error here on re-checking; the attribution is standard and correct.
- **Proposed fix:** No change needed; the attribution is correct.
- **Reported:** 2026-10-28 (10fede1)
