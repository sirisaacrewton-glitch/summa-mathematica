# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/03-pdl.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/03-pdl.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that the naive procedure is double exponential
- **Category:** Supplement/remark error
- **Location:** remark after logic:pdl-decidable
- **Detail:** The remark says the naive procedure 'takes double exponential time' because it enumerates all models with exponentially many states. But the number of models with at most $2^{|\neg A|}$ states over finitely many atoms is itself roughly $2^{O(|A|\cdot 2^{|A|})}$, i.e. single exponential in $2^{|A|}$, hence the enumeration runs in time exponential in $2^{|A|}$, which is doubly exponential in $|A|$ only in the sense of $2^{2^{O(|A|)}}$ — actually that is doubly exponential. However the standard statement is that this brute-force method gives a double exponential (in $|A|$) decision procedure, which is consistent. The claim 'EXPTIME-complete' attribution: satisfiability of PDL is EXPTIME-complete (Pratt 1978/1979 for upper bound, Fischer–Ladner 1979 for lower bound) — this is correct. So no error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
