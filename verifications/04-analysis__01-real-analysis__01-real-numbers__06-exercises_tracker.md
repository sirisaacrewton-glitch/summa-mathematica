# Verification tracker: `04-analysis/01-real-analysis/01-real-numbers/06-exercises.html`

<!-- source: 04-analysis/01-real-analysis/01-real-numbers/06-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Density argument for {n mod 2π} is insufficient
- **Category:** Logical gap
- **Location:** calc:ex-ca-3 / solution
- **Detail:** The solution claims that because π is irrational the values n mod 2π are distinct, and by the pigeonhole principle one gets two with arbitrarily small difference, and 'multiples of that difference fill the interval finely'. This does not establish density of {n mod 2π} in [0,2π). Having arbitrarily small differences δ_k between two elements of the set only shows the set has small gaps somewhere; it does not show every subinterval of [0,2π) contains an element. The standard argument requires a single irrational rotation: fix ε, choose q with ‖q·(1/2π)‖ small (Dirichlet), then the multiples 0, qα, 2qα, … step by a small amount and hit every interval of length ε; this needs the specific structure, not just 'differences are small'. As written the step is a gap.
- **Proposed fix:** Replace the parenthetical with: Since 1/(2π) is irrational, by the pigeonhole/Dirichlet argument for each N there is q with 1 ≤ q ≤ N and ‖q/(2π)‖ < 1/N, i.e. q mod 2π is within 2π/N of 0. Then the arithmetic progression 0, q, 2q, …, kq (mod 2π) has step size < 2π/N, so its points are 2π/N-dense in [0,2π); letting N→∞ gives density of {n mod 2π}.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Chebyshev/Cesàro step for β=0 and log of limit
- **Category:** Logical gap
- **Location:** calc:ex-sq-4 / solution
- **Detail:** The solution writes log a_n = log a_1 + Σ log(a_{i+1}/a_i) and applies Cesàro to conclude (log a_n)/n → log β, treating β=0 as 'divergence to −∞, same'. But log(a_{i+1}/a_i) → −∞ is not a convergent sequence, so the Cesàro average theorem (which requires a finite limit α) does not apply directly; one must argue separately (e.g. for any M, eventually log(a_{i+1}/a_i) < −M, so the average is < −M/2 eventually, giving (log a_n)/n → −∞ and hence a_n^{1/n} → 0). The claim 'same' hides this case distinction.
- **Proposed fix:** Add: If β = 0, then for every M > 0 there is N with log(a_{i+1}/a_i) < −M for i ≥ N; hence (log a_n)/n ≤ (C + (n−N)(−M))/n < −M/2 for large n, so (log a_n)/n → −∞ and a_n^{1/n} = exp((log a_n)/n) → 0 = β. Only for β > 0 does the Cesàro average apply directly.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that closedness is the essential hypothesis of nested interval property
- **Category:** Supplement/remark error
- **Location:** calc:ex-ca-2 / solution
- **Detail:** The solution concludes '閉区間であることが区間縮小法の本質的な仮定' (being closed intervals is the essential hypothesis of the nested interval theorem). This is imprecise/overstated: the nested interval property for closed bounded intervals requires both closedness and boundedness (and the lengths shrinking to 0 for the single-point conclusion). The example (0,1/n) shows closedness matters, but calling it 'the essential hypothesis' ignores boundedness, which is equally necessary (e.g. [n,∞) are closed nested with empty intersection).
- **Proposed fix:** Replace with: 'This shows that closedness cannot be dropped; boundedness is likewise necessary (e.g. the nested closed intervals [n,∞) have empty intersection), and the lengths must tend to 0 for the intersection to be a single point.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Decimal expansion uniqueness: 'finite decimal' characterization needs care
- **Category:** Unsupported fact
- **Location:** calc:ex-rc-2 / solution
- **Detail:** The solution asserts that a real number has two decimal expansions iff it is a finite decimal m/10^k, with one expansion ending in all 9s and the other in all 0s. The argument 'the difference of the remaining contributions is at most 10^{−k}' is loose: the tail difference can equal exactly 10^{−k} only in the all-9 vs all-0 case, and one must argue that if d_k < d'_k then necessarily d'_k = d_k + 1 and both tails are extremal; otherwise the difference is strictly less than 10^{−k} and the expansions differ. As written the inequality '≤ 10^{−k}' does not by itself force equality, so the conclusion does not follow.
- **Proposed fix:** Argue: if the expansions first differ at position k with d_k < d'_k, then the value difference is (d'_k − d_k)10^{−k} + (tail' − tail) where each tail lies in [0, 10^{−k}). Equality of the two numbers forces d'_k − d_k = 1 and tail = 10^{−k} (all 9s) and tail' = 0 (all 0s); hence the number equals m/10^k with the two expansions m/10^k = (m−1)/10^k + 0.999….
- **Reported:** 2026-10-28 (10fede1)
