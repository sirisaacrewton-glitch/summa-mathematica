# Verification tracker: `04-analysis/01-real-analysis/02-calculus/04-riemann-integral.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/04-riemann-integral.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Riemann–Stieltjes claim about replacing Δx_i by Δα_i is overstated
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, third bullet)
- **Detail:** The supplement claims that the Riemann–Stieltjes integral ∫f dα (α increasing) 'can be developed with the same theory' by replacing Δx_i with Δα_i. This is imprecise: the Darboux-style sums with Δα_i do not give the same theory in general. For instance, if α is a step function, Δα_i = 0 on most subintervals, so upper and lower sums collapse and the criterion U−L→0 fails even for continuous f, although the Riemann–Stieltjes integral exists. The equivalence of the Darboux and Riemann definitions, and the criterion via U−L→0, require α to be continuous (or at least the relevant refinement/mesh arguments need modification). Stating 'the same theory' without this hypothesis is an overstatement.
- **Proposed fix:** The Riemann–Stieltjes integral $\int f\,d\alpha$ ($\alpha$ increasing) can be developed analogously by replacing $\Delta x_{i}$ with $\Delta\alpha_{i}$, but the Darboux-type criterion $U-L\to0$ and the equivalence with the tagged-sum definition require $\alpha$ to be continuous (e.g. $\alpha$ of bounded variation and continuous); for general increasing $\alpha$ the theory differs.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that the general countable-union-of-null-sets theorem fails without choice is stated too strongly
- **Category:** Supplement/remark error
- **Location:** hypcheck (選択公理を使わない工夫)
- **Detail:** The hypcheck says 'the general statement that a countable union of measure-zero sets is measure zero uses the countable axiom of choice (there are known models where it fails without AC)'. This is misleading. The statement 'a countable union of null sets is null' is provable in ZF for the specific case at hand because the covering intervals can be chosen canonically (e.g. via a fixed enumeration and explicit lengths), and more importantly the assertion that it 'fails in some models' is not a standard, well-supported claim in this form; what fails without choice are certain selection-based arguments, not the null-union property itself in typical formulations. The remark overstates a subtle metamathematical point.
- **Proposed fix:** The general argument 'a countable union of measure-zero sets is measure zero' is often proved by simultaneously choosing a covering for each set, which invokes the countable axiom of choice. Here we avoid that general selection by constructing each covering canonically from the minimal equal partition, so no choice is used.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Step 1 of Lebesgue criterion: 'minimal n' may not exist / monotonicity of U−L along equal partitions not justified
- **Category:** Logical gap
- **Location:** calc:lebesgue-criterion / Step 1
- **Detail:** Step 1 takes 'the minimal n = n(k) with U(f,P_n) − L(f,P_n) < (ε/2k)·2^{−k}'. This presupposes that U(f,P_n) − L(f,P_n) → 0 along the equal partitions, which follows from criterion 3, but the existence of a *minimal* such n requires that the sequence eventually satisfies the bound (true) — however the text does not note that the sequence need not be monotone, so 'minimal n' is well-defined only because the set of n satisfying the inequality is nonempty; this is fine but the phrase 'minimal' is used to make the covering canonical, and the argument that the resulting covering depends uniquely on k needs the set to be nonempty, which is guaranteed. The real gap is minor but the claim 'the family is uniquely determined by k' relies on well-ordering of ℕ, which is fine in ZF. No genuine error, but the justification that such n exists should cite criterion 3 explicitly for the equal partitions.
- **Proposed fix:** By \ref{calc:riemann-criterion.3} applied to the equal partitions $P_{n}$, we have $U(f,P_{n})-L(f,P_{n})\to0$; hence for each $k$ the set of $n$ with $U(f,P_{n})-L(f,P_{n})<(\varepsilon/2k)2^{-k}$ is nonempty, and we let $n(k)$ be its least element (well-ordering of $\mathbb{N}$, no choice needed).
- **Reported:** 2026-10-28 (10fede1)
