# Verification tracker: `04-analysis/01-real-analysis/01-real-numbers/06-exercises.html`

<!-- source: 04-analysis/01-real-analysis/01-real-numbers/06-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page is mostly sound, but two solutions (Dedekind cut and completeness-to-square-root) replace the required explicit epsilon/h construction by a vague reference to calc:ex-of-3, which does not literally contain the needed argument for the general case, leaving genuine gaps. The root-ratio exercise mishandles the β = 0 case. The previously reported density gap (ISSUE-0001) and the decimal-expansion imprecision (ISSUE-0003) remain open; ISSUE-0002 is correctly rebutted. The condensation-test computation, on re-checking, is actually correct and is not reported as an error.

## Issues

### ISSUE-0001 [Open] Density argument for {n mod 2π} is insufficient
- **Category:** Supplement/remark error
- **Location:** calc:ex-ca-3 / solution
- **Detail:** The solution claims that because π is irrational the values n mod 2π are distinct, and then invokes the pigeonhole principle to get two values with arbitrarily small difference, concluding that multiples of that difference fill the interval densely. This is a gap: the pigeonhole principle only gives, for each N, some pair with difference < 2π/N, but the difference depends on N and need not be a fixed δ whose multiples are dense. The standard correct argument uses the irrationality of π/(2π)=1/(2π) to show {n/(2π)} is dense in [0,1] (via Dirichlet approximation / pigeonhole on fractional parts), hence {n mod 2π} is dense in [0,2π). As written the reasoning does not establish density.
- **Proposed fix:** Replace the parenthetical with: Since 1/(2π) is irrational, the fractional parts {n/(2π)} are dense in [0,1] (Dirichlet's approximation: for each N some 1≤q≤N has ‖q/(2π)‖<1/N, and multiples of such a small step fill the circle). Hence {n mod 2π} is dense in [0,2π), and by continuity of sin, {sin n} is dense in [-1,1].
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The density argument via pigeonhole still only produces differences depending on N; it does not establish that {n mod 2π} is dense, so the gap remains.

### ISSUE-0002 [Ignored: Valid Rebuttal] Newton sequence convergence bound uses q_n ≥ √2 circularly
- **Category:** Logical gap
- **Location:** calc:ex-rc-1 / solution
- **Detail:** The estimate q_{n+1}-√2 = (q_n-√2)^2/(2q_n) ≤ (q_n-√2)^2/(2√2) requires q_n ≥ √2, which is asserted from AM-GM. AM-GM gives q_{n+1} ≥ √2 for n≥1, and q_1=3/2>√2, so q_n≥√2 holds for all n; this is fine. However the displayed inequality is stated as if immediate without noting q_n≥√2 is needed, and more importantly the claim 'error decreases quadratically' alone does not prove convergence to √2 without an induction that the error is bounded by a geometric contraction. The step is essentially correct but the justification that q_n≥√2 for all n (including the base case) should be explicit; as written the bound (q_n-√2)^2/(2√2) is only a contraction once q_n-√2<2√2, which needs verification.
- **Proposed fix:** Add: By induction q_n≥√2 for all n (base q_1=3/2>√2; AM-GM gives q_{n+1}≥√2). Since q_1-√2<1<2√2, the recursion e_{n+1}≤e_n^2/(2√2) with e_1<1 yields e_n→0, so q_n→√2; being convergent it is Cauchy.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: q_n ≥ √2 for all n ≥ 1 follows from AM-GM with base case q_1 = 3/2, and the error recursion with e_1 < 1 gives convergence; the argument is acceptable as written.
**Opus Rebuttal:** The solution states $q_{n}\ge\sqrt2$ from AM-GM for all $n\ge1$ (and $q_{1}=3/2$); the error recursion with $e_{1}<1$ then gives convergence. Correct as written.

### ISSUE-0003 [Open] Claim about two decimal expansions needs the 'all 9s / all 0s' tail precisely
- **Category:** Supplement/remark error
- **Location:** calc:ex-rc-2 / solution
- **Detail:** The solution says two expansions first differ at digit k with d_k<d'_k, then 'the difference of remaining contributions is at most 10^{-k}', concluding d_k=d'_k-1 and one tail all 9s, the other all 0s. The bound 'at most 10^{-k}' is not quite the right statement: the tail after position k contributes strictly less than 10^{-k} on each side, so equality forces d'_k-d_k=1 and both tails extremal. The phrase 'at most 10^{-k}' is imprecise (the tail sum is <10^{-k}, not ≤ in a way that immediately gives the conclusion) and the argument as written is terse enough to be a gap.
- **Proposed fix:** State: the tail from position k+1 on is <10^{-k} in absolute value, so if the expansions agree as reals then (d'_k-d_k)10^{-k} equals a difference of two tails each of absolute value <10^{-k}; hence d'_k-d_k=1 and both tails are extremal, i.e. one is all 9s and the other all 0s.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The solution still says the difference of remaining contributions is 'at most 10^{-k}', which is imprecise; the correct statement is that each tail is < 10^{-k}, forcing d'_k - d_k = 1 and extremal tails.

### ISSUE-0004 [Open] Dedekind cut solution omits the actual verification
- **Category:** Logical gap
- **Location:** calc:ex-rc-3 / solution
- **Detail:** The solution merely asserts that B = {q>0 : q^2>2} and that the absence of max/min 'is the same computation' as in calc:ex-of-3. But calc:ex-of-3 concerns sup of {q>0: q^2<2} in Q; here one must show that for any q in A there is a larger element of A and for any q in B a smaller element of B, which requires the explicit h-construction (and the case q ≤ 0 in A). The reference does not literally supply this, so the proof is incomplete.
- **Proposed fix:** Add the explicit argument: if q ∈ A with q ≥ 0 (so q^2 < 2), take h = (2 - q^2)/(2q+1) ∈ (0,1); then (q+h)^2 < q^2 + h(2q+1) = 2, so q+h ∈ A and q+h > q. If q ∈ B (q > 0, q^2 > 2), take h = (q^2 - 2)/(2q); then (q-h)^2 > q^2 - 2qh = 2 and q-h > 0, so q-h ∈ B and q-h < q. Hence A has no maximum and B has no minimum.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0005 [Open] Completeness-to-square-root solution hand-waves the h argument
- **Category:** Logical gap
- **Location:** calc:ex-rc-4 / solution
- **Detail:** The solution says that assuming s^2 < a or s^2 > a leads to a contradiction 'with the same choice of h as in the rational case (calc:ex-of-3)'. But calc:ex-of-3 is about Q and uses s^2 ≠ 2; here a is an arbitrary positive real and one must produce h explicitly (and handle s = 0 when s^2 < a). The cited problem does not contain the needed argument for general a, so the proof is incomplete.
- **Proposed fix:** Make the argument explicit: if s^2 < a, choose h = min(1, (a - s^2)/(2s+1)) > 0; then (s+h)^2 ≤ s^2 + h(2s+1) ≤ s^2 + (a - s^2) = a, so s+h ∈ S, contradicting that s is an upper bound. If s^2 > a, choose h = (s^2 - a)/(2s) > 0; then (s-h)^2 ≥ s^2 - 2sh = a, so s-h is an upper bound of S smaller than s, contradicting minimality. Hence s^2 = a.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Root-ratio limit: β = 0 case and log of zero
- **Category:** Logical gap
- **Location:** calc:ex-sq-4 / solution
- **Detail:** The solution writes log a_n = log a_1 + Σ log(a_{i+1}/a_i) and applies Cesàro to get (log a_n)/n → log β, but when β = 0 the terms log(a_{i+1}/a_i) tend to -∞ and the Cesàro average argument as stated does not apply; the parenthetical 'β = 0 is the same with divergence to -∞' is not justified, and log β is undefined. The case β = 0 needs a separate argument (e.g. for large n, a_{n+1}/a_n < 1/2, so a_n decays geometrically and a_n^{1/n} → 0).
- **Proposed fix:** Split off the case β = 0: if β = 0, then for some N and all n ≥ N, a_{n+1}/a_n ≤ 1/2, so a_n ≤ a_N 2^{-(n-N)} and a_n^{1/n} ≤ (a_N 2^{N})^{1/n}/2 → 1/2 < 1; more precisely limsup a_n^{1/n} ≤ 1/2, and since a_n > 0, actually a_n^{1/n} → 0. For β > 0 use the Cesàro argument as written.
- **Reported:** 2026-10-28 (048145a)
