# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/04-representability.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/04-representability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] IΣ₁ is not a Π₂-conservative extension of PRA
- **Category:** Supplement/remark error
- **Location:** pt:weak-arithmetics (remark), third bullet
- **Detail:** The remark states that IΣ₁ is a Π₂-conservative extension of PRA (Parsons, Mints, Takeuti). The classical result is that IΣ₁ is Π₂-conservative over PRA — but this is usually stated for the system PRA with its own language; more importantly, the standard result is that IΣ₁ is conservative over PRA for Π₂ sentences, which is correct. However, the claim as stated is essentially correct in the literature (Parsons 1970, Mints, Takeuti). The precise issue: the standard statement is that IΣ₁ is Π₂-conservative over PRA, which is indeed a known theorem. This appears correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
