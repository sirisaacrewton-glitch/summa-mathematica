# Verification tracker: `02-algebra/02-group-theory/06-presentations/01-free-groups.html`

<!-- source: 02-algebra/02-group-theory/06-presentations/01-free-groups.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Free group of rank ≥2 contains free subgroups of arbitrarily large rank: needs infinite index
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that a free group of rank ≥2 contains free subgroups of arbitrarily large rank, citing the Nielsen–Schreier formula. The formula given in the fact is for finite-index subgroups: a subgroup of index k in a free group of rank n has rank 1+k(n-1). For a fixed rank n≥2, this expression grows with k, but k must be a finite index, and a free group of rank n has subgroups of every finite index k, so the ranks 1+k(n-1) are indeed unbounded. However, the statement as written ("階数がいくらでも大きい自由群を部分群として含む") is true but the justification via the formula requires that subgroups of every finite index exist, which is not established on the page. More importantly, the claim is correct: F_n has subgroups of every finite index (e.g., via the kernel of the map to Z/k, or via covering spaces of the bouquet). So the statement is true. But the phrase "階数がいくらでも大きい自由群を部分群として含む" is correct. Let me reconsider: is there an actual error? The formula 1+k(n-1) for index k requires k finite. For rank n≥2, taking k arbitrary gives arbitrarily large rank. This is correct. So no error here.
- **Proposed fix:** No change needed; statement is correct.
- **Reported:** 2026-10-28 (10fede1)
