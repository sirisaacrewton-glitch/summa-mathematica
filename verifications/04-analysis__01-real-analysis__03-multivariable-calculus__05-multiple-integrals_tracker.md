# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/05-multiple-integrals.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/05-multiple-integrals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, lemmas, the multivariable Lebesgue criterion, Jordan measurability) is logically sound and the proofs check out. The only genuine problem is in the supplement: the statement that Jordan volume is 'finitely additive but not countably additive', illustrated by E = Q²∩[0,1]², is imprecise, since countable additivity is not applicable when the union fails to be Jordan measurable; the correct statement is that the class of Jordan measurable sets is not closed under countable unions. All other supplements, remarks and stated facts were checked and found acceptable.

## Issues

### ISSUE-0001 [Open] Jordan volume is not merely finitely additive; the example does not show failure of countable additivity
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says the volume of Jordan measurable sets is finitely additive but not countably additive, citing example 3: E = Q²∩[0,1]² is a countable union of points, each of volume 0, but E has no volume. This is misleading: countable additivity is a property that only makes sense for a family of pairwise disjoint measurable sets whose union is again measurable. Here the union E is not Jordan measurable, so this is not a failure of countable additivity but simply the fact that the class of Jordan measurable sets is not closed under countable unions. The claim 'not countably additive' as stated is imprecise/overstated.
- **Proposed fix:** The volume of Jordan measurable sets is finitely additive, but the class of Jordan measurable sets is not closed under countable unions: a countable union of Jordan measurable sets (even of points, each of volume 0) need not be Jordan measurable, as E = Q²∩[0,1]² shows. Hence there is no countably additive extension of Jordan volume on this class; the countably additive extension is Lebesgue measure.
- **Reported:** 2026-10-28 (8ccef3d)
