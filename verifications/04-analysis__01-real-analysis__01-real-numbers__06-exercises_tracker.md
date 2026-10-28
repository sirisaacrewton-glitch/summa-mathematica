# Verification tracker: `04-analysis/01-real-analysis/01-real-numbers/06-exercises.html`

<!-- source: 04-analysis/01-real-analysis/01-real-numbers/06-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a set of exercises with solutions; most solutions are correct. The main genuine problem is the density argument in calc:ex-ca-3, where the pigeonhole step does not by itself yield density of {n mod 2π} and needs the standard Dirichlet/fractional-part argument. Two solutions (calc:ex-rc-1 and calc:ex-rc-2) are essentially correct but have terse estimates that should be made precise; these are reported at medium confidence. No issues with citations, missing hypotheses of cited theorems, or circularity were found.

## Issues

### ISSUE-0001 [Open] Density argument for {n mod 2π} is insufficient
- **Category:** Supplement/remark error
- **Location:** calc:ex-ca-3 / solution
- **Detail:** The solution claims that because π is irrational the values n mod 2π are distinct, and then invokes the pigeonhole principle to get two values with arbitrarily small difference, concluding that multiples of that difference fill the interval densely. This is a gap: the pigeonhole principle only gives, for each N, some pair with difference < 2π/N, but the difference depends on N and need not be a fixed δ whose multiples are dense. The standard correct argument uses the irrationality of π/(2π)=1/(2π) to show {n/(2π)} is dense in [0,1] (via Dirichlet approximation / pigeonhole on fractional parts), hence {n mod 2π} is dense in [0,2π). As written the reasoning does not establish density.
- **Proposed fix:** Replace the parenthetical with: Since 1/(2π) is irrational, the fractional parts {n/(2π)} are dense in [0,1] (Dirichlet's approximation: for each N some 1≤q≤N has ‖q/(2π)‖<1/N, and multiples of such a small step fill the circle). Hence {n mod 2π} is dense in [0,2π), and by continuity of sin, {sin n} is dense in [-1,1].
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Newton sequence convergence bound uses q_n ≥ √2 circularly
- **Category:** Logical gap
- **Location:** calc:ex-rc-1 / solution
- **Detail:** The estimate q_{n+1}-√2 = (q_n-√2)^2/(2q_n) ≤ (q_n-√2)^2/(2√2) requires q_n ≥ √2, which is asserted from AM-GM. AM-GM gives q_{n+1} ≥ √2 for n≥1, and q_1=3/2>√2, so q_n≥√2 holds for all n; this is fine. However the displayed inequality is stated as if immediate without noting q_n≥√2 is needed, and more importantly the claim 'error decreases quadratically' alone does not prove convergence to √2 without an induction that the error is bounded by a geometric contraction. The step is essentially correct but the justification that q_n≥√2 for all n (including the base case) should be explicit; as written the bound (q_n-√2)^2/(2√2) is only a contraction once q_n-√2<2√2, which needs verification.
- **Proposed fix:** Add: By induction q_n≥√2 for all n (base q_1=3/2>√2; AM-GM gives q_{n+1}≥√2). Since q_1-√2<1<2√2, the recursion e_{n+1}≤e_n^2/(2√2) with e_1<1 yields e_n→0, so q_n→√2; being convergent it is Cauchy.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim about two decimal expansions needs the 'all 9s / all 0s' tail precisely
- **Category:** Supplement/remark error
- **Location:** calc:ex-rc-2 / solution
- **Detail:** The solution says two expansions first differ at digit k with d_k<d'_k, then 'the difference of remaining contributions is at most 10^{-k}', concluding d_k=d'_k-1 and one tail all 9s, the other all 0s. The bound 'at most 10^{-k}' is not quite the right statement: the tail after position k contributes strictly less than 10^{-k} on each side, so equality forces d'_k-d_k=1 and both tails extremal. The phrase 'at most 10^{-k}' is imprecise (the tail sum is <10^{-k}, not ≤ in a way that immediately gives the conclusion) and the argument as written is terse enough to be a gap.
- **Proposed fix:** State: the tail from position k+1 on is <10^{-k} in absolute value, so if the expansions agree as reals then (d'_k-d_k)10^{-k} equals a difference of two tails each of absolute value <10^{-k}; hence d'_k-d_k=1 and both tails are extremal, i.e. one is all 9s and the other all 0s.
- **Reported:** 2026-10-28 (8ccef3d)
