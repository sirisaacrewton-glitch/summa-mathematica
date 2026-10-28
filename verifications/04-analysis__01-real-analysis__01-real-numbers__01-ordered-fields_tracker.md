# Verification tracker: `04-analysis/01-real-analysis/01-real-numbers/01-ordered-fields.html`

<!-- source: 04-analysis/01-real-analysis/01-real-numbers/01-ordered-fields.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Artin–Schreier criterion stated without the field being a field of characteristic 0 / with imprecise condition
- **Category:** Supplement/remark error
- **Location:** calc:sup-characterization / supplement
- **Detail:** The supplement states: 'A field is orderable iff -1 is not a sum of squares (Artin–Schreier).' This is correct for fields in general (Artin–Schreier: a field admits a total order compatible with the field operations iff it is formally real, i.e. -1 is not a sum of squares). However the statement as written is fine mathematically. The real issue is the claim about C: 'C is not orderable because i^2 = -1' — this is correct. So no error here. But the claim 'Archimedean ordered fields are isomorphic (as ordered fields) to subfields of R' is correct. The claim 'Archimedean totally ordered abelian groups embed in R (Hölder)' is correct. So this bullet is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Q(√2) has exactly two orderings — but the supplement says both are Archimedean, which is true; however the claim that the 'lowest degree coefficient positive' ordering makes x infinitesimal needs checking
- **Category:** Supplement/remark error
- **Location:** calc:sup-characterization / supplement
- **Detail:** The supplement says: 'For the rational function field, the order is not unique. For example, declaring the lowest-degree coefficient positive makes x infinitesimal.' This is correct: ordering K(x) by the sign of the lowest-degree coefficient makes x positive but smaller than every positive element of K (since for ε>0 in K, ε - x has lowest-degree coefficient ε > 0, so ε > x). So x is infinitesimal. This is correct. The claim that Q(√2) has exactly two orderings, both Archimedean, is correct (Q(√2) is a subfield of R, hence Archimedean). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Step 5 of Archimedean equivalents: r ≤ |p| uses q ≥ 1 but p may be negative and |p| ∈ N requires p ∈ Z
- **Category:** Unsupported fact
- **Location:** calc:archimedean-equivalents / Step 5
- **Detail:** In Step 5, the argument is: from 5, there is r = p/q with q ≥ 1 and a < r < a+1. Then 'r ≤ |p| (q ≥ 1) and |p| ∈ N so r ≤ |p| < a, contradiction.' The inequality r ≤ |p| holds since r = p/q ≤ |p|/q ≤ |p| when q ≥ 1 and p/q ≤ |p|. But we need |p| < a. We have r < a+1, not |p| < a. The claim '|p| < a' does not follow: we only know r < a+1, and r ≤ |p| gives |p| could be larger than a. Actually the intended argument: since a is larger than every natural number, |p| < a. But we need to establish that. We have r = p/q < a+1, so p < q(a+1). This does not directly give |p| < a. The step as written asserts '|p| < a' without justification. This is a genuine gap: from r < a+1 and r ≤ |p| we cannot conclude |p| < a. The correct argument: since a exceeds every natural number, and |p| ∈ N, we have |p| < a. But this uses that a is greater than every natural number (the negation of Archimedean), which is the hypothesis. So |p| < a holds by the choice of a. Then r ≤ |p| < a contradicts r > a. So the argument is: r ≤ |p| (true), |p| ∈ N, and since a exceeds all naturals, |p| < a, hence r < a, contradicting r > a. The text writes 'r ≤ |p| < a' which is correct given |p| < a from the hypothesis. So actually the step is fine: |p| < a because a is greater than every natural number and |p| is a natural number. The text's phrasing 'r ≤ |p| (q ≥ 1) and |p| ∈ N so r ≤ |p| < a' — the '< a' part follows from a being above all naturals. This is implicit but correct. No error.
- **Proposed fix:** No change needed; the inequality |p| < a follows from a exceeding every natural number.
- **Reported:** 2026-10-28 (10fede1)
