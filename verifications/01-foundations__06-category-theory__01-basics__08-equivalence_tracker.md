# Verification tracker: `01-foundations/06-category-theory/01-basics/08-equivalence.html`

<!-- source: 01-foundations/06-category-theory/01-basics/08-equivalence.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reflectivity of compact Hausdorff spaces in completely regular Hausdorff spaces
- **Category:** Supplement/remark error
- **Location:** example (cat:sec-eqv-reflective) item 3
- **Detail:** The example claims that the full subcategory of compact Hausdorff spaces is reflective in the category of completely regular Hausdorff spaces, with reflector the Stone–Čech compactification. This is false as stated: the Stone–Čech compactification βX of a completely regular Hausdorff space X is compact Hausdorff, but the unit X → βX is an embedding only when X is completely regular; more importantly, the universal property requires maps into compact Hausdorff spaces to extend, which holds, but the reflector lands in compact Hausdorff spaces only if we restrict to the subcategory of compact Hausdorff spaces — which is correct. However, the precise issue: the reflection of a completely regular space into compact Hausdorff spaces via βX is valid only for the full subcategory of compact Hausdorff spaces, and the unit is an embedding. This is actually a standard correct fact. The real problem is the first part: 'distance spaces and uniformly continuous maps' — the category of metric spaces with uniformly continuous maps does not have the completion as a reflector into complete metric spaces in general, because the completion of a metric space is complete metric, and uniformly continuous maps extend, so this is fine. But the claim that complete metric spaces form a reflective subcategory of metric spaces with uniformly continuous maps is correct. The genuinely problematic claim is that 'completely regular Hausdorff spaces' with compact Hausdorff as reflective subcategory: this is correct (βX). So no error here. Reconsider: the issue is that the category of metric spaces and uniformly continuous maps — the completion is a reflection, correct. So item 3 is fine.
- **Proposed fix:** No change needed; the statement is correct.
- **Reported:** 2026-10-28 (10fede1)
