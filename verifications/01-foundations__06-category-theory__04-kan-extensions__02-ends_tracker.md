# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/02-ends.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/02-ends.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound: the definitions of wedge/end/coend, the identification of natural transformations with an end, the Yoneda and co-Yoneda end forms, the limit description via the subdivision category, the parameter theorem and the Fubini theorem are all correctly stated and proved, and the hypcheck comment about needing inner ends for all (p,q) is accurate. The only genuine problems are in the supplement: an inaccurate historical attribution (enriched ends to Day–Kelly) and an overstated delta-function analogy for co-Yoneda. Both are minor and confined to side remarks.

## Issues

### ISSUE-0001 [Open] Misattribution of enriched end definition to Day–Kelly
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says the hom-object definition of ends in enriched categories is "due to Day–Kelly (per Mac Lane's note)". The notion of end (and the hom-object formula $\int_{c}[Uc,Vc]$ for natural transformations) is due to Yoneda and was developed by Mac Lane; Day–Kelly's work concerns enriched Kan extensions and coends, not the origin of the enriched end. The attribution is historically inaccurate.
- **Proposed fix:** Replace with: "The hom-object definition of ends in enriched categories goes back to Yoneda and Mac Lane; Day–Kelly developed the theory of enriched (co)ends and Kan extensions used here."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Delta-function analogy stated too strongly
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The claim that the co-Yoneda lemma "has the same form as $f(a)=\int\delta(a-c)f(c)\,dc$" is only a loose analogy: in co-Yoneda the variable is a coend over a category and $\mathbf{C}(c,a)$ is a hom-set, not a distribution; the analogy is heuristic, not an identity of form. Stated as "同じ形をしている" it overstates the correspondence.
- **Proposed fix:** Soften to: "The co-Yoneda lemma is often compared with the delta-function identity $f(a)=\int\delta(a-c)f(c)\,dc$, with $\mathbf{C}(c,a)$ playing the role of the delta function; this is only a heuristic analogy."
- **Reported:** 2026-10-28 (10fede1)
