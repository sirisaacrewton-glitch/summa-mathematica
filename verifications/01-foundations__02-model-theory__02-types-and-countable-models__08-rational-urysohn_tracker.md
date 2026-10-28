# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/08-rational-urysohn.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/08-rational-urysohn.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Distance values {1,2} do not make every function Katetov
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると, first bullet
- **Detail:** The claim that with distance values restricted to {1,2} every {1,2}-valued function on a finite set is Katetov is false. The displayed chain |f(a)-f(b)|≤1≤d(a,b)≤2≤f(a)+f(b) requires d(a,b)≥1, but a metric with values in {1,2} may have d(a,b)=0 for a≠b? No—distinct points have distance 1 or 2, so d(a,b)≥1 holds. However the right inequality d(a,b)≤f(a)+f(b) requires f(a)+f(b)≥2, i.e. f(a)=f(b)=2; if f(a)=f(b)=1 then f(a)+f(b)=2≥d(a,b) holds since d(a,b)≤2. Actually with values in {1,2}: |f(a)-f(b)|≤1 always; d(a,b)∈{1,2} so 1≤d(a,b); d(a,b)≤2≤f(a)+f(b) since f(a)+f(b)≥2. So the chain is correct. But the identification with the random graph extension axiom needs care: the graph has an edge when distance is 1, and the extension axiom for the random graph requires realizing any configuration of adjacencies to a finite set, which corresponds to Katetov functions f:A→{1,2}. This is fine. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
