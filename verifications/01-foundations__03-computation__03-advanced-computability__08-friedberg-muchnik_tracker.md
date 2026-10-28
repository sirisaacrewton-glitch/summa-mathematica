# Verification tracker: `01-foundations/03-computation/03-advanced-computability/08-friedberg-muchnik.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/08-friedberg-muchnik.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are essentially correct. The only genuine problem is in the supplement: the historical claim about Post's simple set result is wrong—Post showed a simple set is not $m$-complete, but non-$T$-completeness of simple sets is exactly Post's problem, not something Post proved. The rest of the supplement (infinite injury, Sacks density, the priority 'yielding' metaphor) is acceptable.

## Issues

### ISSUE-0001 [Open] Post's simple set result misstated
- **Category:** Supplement/remark error
- **Location:** supplement, 「似た定理」
- **Detail:** The supplement claims that Post showed a simple set is not $m$-equivalent to $\varnothing'$ but could not show it is not $T$-equivalent. This is historically and mathematically wrong. Post (1944) constructed a simple set and showed it is not creative (equivalently not $m$-complete), i.e. not $m$-equivalent to $\varnothing'$; but the statement that a simple set is not $T$-equivalent to $\varnothing'$ (i.e. not complete) is exactly Post's problem, which remained open until Friedberg–Muchnik. So Post did not show non-$T$-equivalence, and the phrasing 'could not show it' suggests it was merely unproven by him rather than the open problem. Also the problem 8.4 construction is a simple-set-like construction, but the claim about Post's result is the error.
- **Proposed fix:** Post (1944) constructed a simple set and showed it is not $m$-complete (not $m$-equivalent to $\varnothing'$); whether a simple (or any c.e. noncomputable) set can be $T$-incomplete, i.e. not $T$-equivalent to $\varnothing'$, is precisely Post's problem, solved by Friedberg–Muchnik.
- **Reported:** 2026-10-28 (8ccef3d)
