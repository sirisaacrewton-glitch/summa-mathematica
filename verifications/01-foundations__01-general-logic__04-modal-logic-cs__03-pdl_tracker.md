# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/03-pdl.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/03-pdl.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 0 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page is logically sound. The syntax/semantics definitions, the basic validities and their proofs, the non-compactness argument, the Fischer–Ladner closure size bound, the filtration lemma, the small model theorem and the decidability corollary all check out. The only previously reported issue (EXPTIME membership attribution to Pratt 1978) is correctly rebutted and is closed. I examined the remarks, the hypcheck comments, and the worked problems (including the non-generated-relation example, which is a genuine counterexample) and found no false or overstated claims.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] EXPTIME-completeness attribution: membership attributed to Pratt 1978, hardness to Fischer–Ladner 1979
- **Category:** Unsupported fact
- **Location:** remark after logic:pdl-decidable
- **Detail:** The remark says PDL satisfiability is EXPTIME-complete, with EXPTIME membership due to Pratt 1978 and EXPTIME-hardness due to Fischer–Ladner 1979. The standard attributions are: EXPTIME-hardness (and the exponential-time lower bound) is due to Fischer–Ladner 1979, and EXPTIME membership (a decision procedure in exponential time) is due to Pratt 1979/1980 ('A near-optimal proof system for propositional dynamic logic' / 'Models of program logics'). Attributing membership to 'Pratt 1978' is a misattribution of the year/paper. This is a historical attribution error in a remark.
- **Proposed fix:** EXPTIME に属することはプラット（1979）による決定手続きで示され、EXPTIME 困難であることはフィッシャー–ラドナー（1979）による。
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — Pratt's STOC 1978 paper 'A practical decision method for propositional dynamic logic' indeed gives an exponential-time decision procedure, so attributing EXPTIME membership to Pratt 1978 is correct; the rebuttal is mathematically/historically sound.
**Opus Rebuttal:** Pratt, 'A practical decision method for propositional dynamic logic', STOC 1978, gives the exponential-time procedure; the attribution to Pratt 1978 is correct.
