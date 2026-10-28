# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/03-pdl.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/03-pdl.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] EXPTIME-completeness attribution: membership attributed to Pratt 1978, hardness to Fischer–Ladner 1979
- **Category:** Unsupported fact
- **Location:** remark after logic:pdl-decidable
- **Detail:** The remark says PDL satisfiability is EXPTIME-complete, with EXPTIME membership due to Pratt 1978 and EXPTIME-hardness due to Fischer–Ladner 1979. The standard attributions are: EXPTIME-hardness (and the exponential-time lower bound) is due to Fischer–Ladner 1979, and EXPTIME membership (a decision procedure in exponential time) is due to Pratt 1979/1980 ('A near-optimal proof system for propositional dynamic logic' / 'Models of program logics'). Attributing membership to 'Pratt 1978' is a misattribution of the year/paper. This is a historical attribution error in a remark.
- **Proposed fix:** EXPTIME に属することはプラット（1979）による決定手続きで示され、EXPTIME 困難であることはフィッシャー–ラドナー（1979）による。
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** Pratt, 'A practical decision method for propositional dynamic logic', STOC 1978, gives the exponential-time procedure; the attribution to Pratt 1978 is correct.
