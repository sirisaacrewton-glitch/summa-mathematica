# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/11-ulam-fodor.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/11-ulam-fodor.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. Ulam's theorem, its corollaries, the closure-club lemma, the diagonal intersection lemma, and Fodor's lemma are all proved correctly with appropriate hypotheses and citations. The supplements and stated facts were checked individually: the filter-theoretic and Boolean-algebra remarks are correct, the characterization of stationarity via regressive functions is correct, and the Fodor/normality equivalence is correct. The only items worth flagging are minor imprecisions in the Kunen 1980 attribution and the ω-ary-operation hypcheck comment, both of which are hedged or garbled rather than outright false; I report them at medium confidence. No serious logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Kunen 1980 attribution in supplement
- **Category:** Supplement/remark error
- **Location:** supplement after set:solovay-splitting
- **Detail:** The supplement claims Kunen (1980) raised as open whether there can be a regular κ>ω with no 'almost disjoint family of κ⁺ stationary sets'. This is a vague and likely misattributed claim; the actual open problem Kunen discussed concerns whether every stationary set splits, and the phrasing '概素族' (almost disjoint family) of stationary sets is imprecise. Since the text itself hedges ('未確認'), it is not a hard error, but the attribution is dubious.
- **Proposed fix:** Replace with: 'Whether every stationary subset of every regular uncountable cardinal splits into κ many disjoint stationary sets is Solovay's theorem (ZFC); the harder case is weak inaccessible cardinals, where the argument via Ulam's theorem is unavailable.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hypcheck comment on ω-ary operations in set:closure-club
- **Category:** Supplement/remark error
- **Location:** set:closure-club / hypcheck
- **Detail:** The hypcheck says: 'allowing one ω-ary operation, e.g. sup, then for κ=ω₁ there may be no closed γ that is a countable limit ordinal'. This is imprecise/confusing: the point is that with an ω-ary operation the finite-arity argument (taking max of finitely many arguments) fails, so the closure-point set need not be club. The specific phrasing '可算極限順序数 γ で閉じたものは存在しなくなりうる' is garbled but the underlying claim (the lemma fails for infinitary operations) is true. Borderline; not clearly false.
- **Proposed fix:** Rephrase: 'If an ω-ary operation such as sup is allowed, the argument taking the maximum of finitely many arguments breaks down and the set of closure points need not be closed unbounded.'
- **Reported:** 2026-10-28 (8ccef3d)
