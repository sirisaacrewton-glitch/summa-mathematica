# Verification tracker: `04-analysis/01-real-analysis/02-calculus/03-taylor.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/03-taylor.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Borel's theorem misattributed to exp-log page and stated without needed smoothness context
- **Category:** Supplement/remark error
- **Location:** supplement (second one, 一般化と関連する事実)
- **Detail:** The supplement says that a C^∞ function with an arbitrary prescribed sequence as Taylor coefficients (Borel's theorem) is treated in the exp-log page. Borel's theorem is a nontrivial result about C^∞ functions on R (existence of a C^∞ function with prescribed Taylor coefficients at a point), and it is not a consequence of defining the exponential; attributing it to the exp-log page is misleading. Also the flat function e^{-1/x^2} is stated as 'all derivatives 0 at 0' but the text writes 'すべての階数の導関数が 0 で 0 でない C^∞ 級関数（e^{-1/x^2}）' which is ambiguous: e^{-1/x^2} is not defined at 0 as written (needs the convention f(0)=0).
- **Proposed fix:** Replace with: 'There exist C^∞ functions that are not analytic: e.g. f(x)=e^{-1/x^{2}} for x≠0 and f(0)=0 has f^{(k)}(0)=0 for all k, so its Taylor series at 0 is identically 0 and does not converge to f. Borel's theorem (a nontrivial result, not derived here) states that for any sequence (a_{k}) there is a C^∞ function with f^{(k)}(0)=a_{k}k!.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim about higher-derivative test when no nonzero derivative exists
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The text says: if there is no n with f^{(n)}(a)≠0, the higher-derivative test says nothing, and 'a function with all derivatives 0 can have a strict minimum, strict maximum, or neither'. This is imprecise: if all derivatives at a are 0, the function can indeed be a strict min (e^{-1/x^2}), strict max (-e^{-1/x^2}), or neither (e^{-1/x^2}sin(1/x^2) type, or x^3 with all derivatives... actually x^3 has f'(0)≠0). The example 'neither' needs a function with all derivatives 0 at a that is not a local extremum, e.g. f(x)=e^{-1/x^2}sin(1/x^2) for x≠0, f(0)=0. The statement is essentially correct but the parenthetical is vague; more importantly, the claim that all three cases are possible is true but the text gives no example, and the phrasing 'すべての導関数が 0 の関数は、極小・極大・どちらでもない、のいずれもありうる' is acceptable. This is borderline; I flag only the imprecision that the 'neither' case requires a nonconstant oscillating flat function, not e^{-1/x^2} itself.
- **Proposed fix:** Add explicit examples: 'e^{-1/x^{2}} (with value 0 at 0) gives a strict minimum at 0, -e^{-1/x^{2}} a strict maximum, and e^{-1/x^{2}}\sin(1/x^{2}) (value 0 at 0) is neither, although all derivatives at 0 vanish.'
- **Reported:** 2026-10-28 (8ccef3d)
