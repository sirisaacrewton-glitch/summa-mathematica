# Verification tracker: `01-foundations/04-set-theory/06-constructible-sets/01-basic-properties-of-l.html`

<!-- source: 01-foundations/04-set-theory/06-constructible-sets/01-basic-properties-of-l.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page is mathematically sound: the definitions, the lemmas on D(A) and L_α, the absoluteness arguments, and the cardinality computations are all correct, and the hypchecks are accurate. The only genuine problems are the two previously reported imprecisions in the L_α vs R(α) comparison paragraph (the AC-dependent cardinality equivalence and the misleading V=L sentence), which remain open; the Kunen exercise attribution is correctly rebutted. No new issues are found.

## Issues

### ISSUE-0001 [Open] Kunen exercise attribution: |L_α|=|R(α)| iff α=ℶ_α
- **Category:** Supplement/remark error
- **Location:** set:sec-l-vs-r (paragraph after set:l-alpha-size)
- **Detail:** The text attributes to Kunen the exercise statement 'for α>ω, |L_α|=|R(α)| iff α=ℶ_α'. This is imprecise: |R(α)|=ℶ_α holds only under AC (or at least for well-orderable α with the relevant cardinal arithmetic), and the equivalence as stated requires AC. Without AC, |R(α)| need not equal ℶ_α. The page works in ZF with AC flagged, but this sentence is stated without the (AC) qualifier, unlike the surrounding results. Also, the 'iff' direction: if α=ℶ_α then |L_α|=|α|=ℶ_α=|R(α)| requires |R(α)|=ℶ_α, which needs AC.
- **Proposed fix:** Add the (AC) hypothesis: '(AC) の下で、Kunen は α>ω について |L_α|=|R(α)| ⇔ α=ℶ_α であることを演習としている'.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The sentence still attributes to Kunen the exercise '|L_α|=|R(α)| iff α=ℶ_α' without an (AC) qualifier, and |R(α)|=ℶ_α requires AC, so the statement as written is imprecise.

### ISSUE-0002 [Open] V=L implies L_α=R(α) when α=ℶ_α
- **Category:** Supplement/remark error
- **Location:** set:sec-l-vs-r (last sentence)
- **Detail:** The text says: 'V=L is consistent, and then if α=ℶ_α, L_α=R(α) (exercise 3).' Under V=L, L_α=R(α) holds for all α, not merely those with α=ℶ_α; the condition α=ℶ_α is irrelevant to the equality L_α=R(α) (it is relevant only to cardinality comparisons). Stating it as 'if α=ℶ_α then L_α=R(α)' is misleading and suggests the equality fails for other α, which is false under V=L.
- **Proposed fix:** Replace with: 'V=L も無矛盾であり（次ページ）、そのときはすべての α について L_α=R(α) となる'.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The last sentence still says 'under V=L, if α=ℶ_α then L_α=R(α)', which misleadingly suggests the equality needs α=ℶ_α; under V=L, L_α=R(α) holds for all α.

### ISSUE-0003 [Ignored: Valid Rebuttal] Kunen exercise numbers 19, 20 for the finite-subset uniformity point
- **Category:** Unsupported fact
- **Location:** set:definable-power-basic hypcheck (second bullet)
- **Detail:** The hypcheck cites 'Kunen Chapter VI exercises 19, 20' as dealing with the point that Lemma 1.3 (set:definable-subset-formula) does not immediately give item 3. This specific exercise attribution is a factual claim about Kunen's text that is easy to get wrong and is not verifiable from the page; if the numbers are wrong this is a misattribution. Since the mathematical content (that the schema does not give uniformity) is correct, only the attribution is at risk.
- **Proposed fix:** Either verify the exact exercise numbers or soften to 'Kunen 第 VI 章の演習（有限部分集合の扱い）がこの点を扱っている'.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal correctly identifies Kunen Ch. VI exercises 19 and 20 as dealing with the uniformity point, so the attribution is accurate.
**Opus Rebuttal:** Checked in Kunen (1980), Ch. VI exercises: (19) asks to define Df*, En* satisfying V 1.3/1.5/1.7 for which 1.3(c) (finite subsets are definable) is not provable, and (20) asks what is wrong with a 'proof' of 1.3(c). The attribution is correct.
