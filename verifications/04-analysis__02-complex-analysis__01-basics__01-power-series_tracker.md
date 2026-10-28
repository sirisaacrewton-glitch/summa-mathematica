# Verification tracker: `04-analysis/02-complex-analysis/01-basics/01-power-series.html`

<!-- source: 04-analysis/02-complex-analysis/01-basics/01-power-series.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect example in recentering hypcheck (b=-1/2)
- **Category:** Supplement/remark error
- **Location:** cx:power-series-recentering / hypcheck
- **Detail:** The hypcheck claims that for 1/(1-z) (R=1) re-expanded at b=-1/2 the new radius is 3/2 > ρ=1/2. But the re-expansion is Σ (z-b)^k/(1-b)^{k+1}, whose radius is |1-b| = |1-(-1/2)| = 3/2. Wait—that is actually correct: |1-b|=3/2 and ρ=R-|b|=1-1/2=1/2, so 3/2>1/2 holds. Let me recheck: the text says 'b=-1/2 なら 3/2>ρ=1/2'. This is correct. So no error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
