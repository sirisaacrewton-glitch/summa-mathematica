# Verification tracker: `01-foundations/03-computation/04-complexity/09-alternation.html`

<!-- source: 01-foundations/03-computation/04-complexity/09-alternation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] PH = PSPACE implies collapse claim is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (comp:sec-alt-ph supplement)
- **Detail:** The supplement states: "$\mathrm{PH}=\mathrm{PSPACE}$ なら多項式階層は有限の段で崩壊することが知られている（PSPACE 完全な TQBF がある段に属するため）". This is correct in substance (if PH = PSPACE then TQBF, being PSPACE-complete, lies in some $\Sigma_{k}^{\mathrm{P}}$, and since TQBF is PSPACE-hard, PSPACE $\subseteq \Sigma_{k}^{\mathrm{P}}$, so PH collapses to level $k$). The reasoning given is essentially right. However, the phrasing "$\mathrm{PH}=\mathrm{PSPACE}$ かどうかは未解決" combined with the collapse statement is fine. On closer inspection this sentence is actually correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
