# Verification tracker: `01-foundations/04-set-theory/01-basics/13-konig.html`

<!-- source: 01-foundations/04-set-theory/01-basics/13-konig.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Easton's theorem statement: monotonicity only required on regular cardinals, but F must be monotone on all regulars and the extension preserves cofinalities
- **Category:** Supplement/remark error
- **Location:** set:easton (fact) and the supplement after it
- **Detail:** The fact states Easton's theorem correctly in broad terms, but the supplement claims '2^{\aleph_{0}} can be any cardinal \kappa with \cf(\kappa)>\aleph_{0}'. This is imprecise: Easton's theorem controls 2^{\kappa} for regular \kappa only, and the value at \aleph_{0} is 2^{\aleph_{0}} itself, which is regular-cardinal-indexed (\aleph_{0} is regular). The listed examples (\aleph_{1}, \aleph_{2}, \aleph_{\omega+1}, \aleph_{\omega_{1}}) are all of cofinality > \aleph_{0}, which is fine, but the phrasing 'any cardinal \kappa with \cf(\kappa)>\aleph_{0}' includes singular cardinals like \aleph_{\omega_{1}} — which is actually listed and is singular. Easton's theorem does not by itself produce 2^{\aleph_{0}}=\aleph_{\omega_{1}}; that requires Easton plus the fact that the value at \aleph_{0} is set by F(\aleph_{0}), and \aleph_{\omega_{1}} has cofinality \aleph_{1}>\aleph_{0}, so it is consistent, but the justification is not Easton alone (Easton assigns F(\aleph_{0}) freely subject to \cf(F(\aleph_{0}))>\aleph_{0}, so it is fine). The real issue: the sentence 'ZFC can say about the continuum function on regular cardinals is exactly monotonicity and König' is correct, but the claim that 2^{\aleph_{0}} can be any cardinal of cofinality >\aleph_{0} is correct only because \aleph_{0} is regular and Easton lets F(\aleph_{0}) be any cardinal with cofinality >\aleph_{0}. This is actually correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
