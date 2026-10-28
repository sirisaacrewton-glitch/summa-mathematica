# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/10-limit-interchange.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/10-limit-interchange.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 3 / Resolved: 1 / Ignored: 1

## Summary of the last run

The page is largely correct. The main genuine problem is the hypcheck comment in calc:li-improper-dominated, which misdescribes sup_n (1/n)χ_{[0,n]} as growing like 1/n on [n-1,n] and diverging like ∫dx/x, whereas it equals 1/⌈x⌉ and diverges like the harmonic series; the conclusion (no integrable dominating function) is nevertheless correct, so the table entry and intuition are fine. ISSUE-0002 is correctly rebutted and ISSUE-0003 is resolved. ISSUE-0004 (minor gap in the integral-sum solution) remains open but is a small justification gap. No serious logical or citation errors were found in the proofs or the table.

## Issues

### ISSUE-0001 [Open] Hypcheck comment on the dominating function for 1/n χ_{[0,n]} is wrong
- **Category:** Supplement/remark error
- **Location:** calc:li-improper-dominated / hypcheck (second bullet on 優関数)
- **Detail:** The hypcheck claims that for the counterexample f_{n} = (1/n)χ_{[0,n]} the function sup_{n} f_{n}(x) is 'about 1/n on x ∈ [n-1,n]' and that its integral diverges 'like ∫ dx/x'. This is false. For fixed x, sup_{n} f_{n}(x) = sup_{n≥max(1,x)} 1/n = 1/⌈x⌉ (for x ≥ 1), which is integrable on [0,∞) (its integral is finite, roughly 1 + ∑ 1/n^{2}). So the pointwise supremum is an integrable dominating function; the example fails the hypothesis only because no single g dominates all f_{n} simultaneously in the required way—actually sup_{n} f_{n} does dominate all f_{n} and is integrable, so the stated reason ('no dominating function') is simply wrong. The real obstruction is that the convergence is not uniform on bounded intervals in a way compatible with... more precisely, the failure is that ∫ f_{n} = 1 does not converge to ∫ f = 0 even though a dominating function exists; hence the proposition's hypothesis 'local uniform convergence' is what fails, not the dominating function. The comment misidentifies which hypothesis is violated.
- **Proposed fix:** Replace the comment with: 'Here sup_{n} f_{n}(x) = 1/⌈x⌉ is integrable, so an integrable dominating function does exist; what fails is the local uniform convergence on [c,R] (indeed f_{n}→0 uniformly on [0,∞), so this example shows that uniform convergence plus an integrable dominating function is not enough—the proposition requires |f_{n}| ≤ g with g integrable, which does hold here, so this example actually satisfies the hypotheses and contradicts the proposition; the correct counterexample must violate local uniform convergence or the domination.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The hypcheck still claims sup_n f_n(x) is 'about 1/n on [n-1,n]' and diverges like ∫dx/x. In fact sup_n (1/n)χ_{[0,n]}(x) = 1/⌈x⌉, whose integral diverges like the harmonic series (∑1/n), not like ∫dx/x; the description of the growth is wrong, though the conclusion that no integrable dominating function exists is correct.

### ISSUE-0002 [Ignored: Valid Rebuttal] Table row: 1/n χ_{[0,n]} claimed to be a counterexample to limit/improper-integral interchange
- **Category:** Unsupported fact
- **Location:** calc:interchange-table, row 4 (極限と広義積分)
- **Detail:** The table lists f_{n} = (1/n)χ_{[0,n]} as a counterexample where f_{n}→0 uniformly on [0,∞) but ∫ f_{n} = 1 ↛ 0. However this example actually satisfies the hypotheses of Proposition 10.4 (calc:li-improper-dominated): f_{n}→0 uniformly on each [c,R], and g(x) = sup_{n} f_{n}(x) = 1/⌈x⌉ is continuous (away from integers, and bounded) and integrable on [0,∞). So the proposition would predict ∫ f_{n} → 0, which is false. Either the proposition's statement is too weak/wrong, or this is not a valid counterexample to it. As stated, the table entry is inconsistent with the cited proposition.
- **Proposed fix:** Use a genuine counterexample, e.g. f_{n}(x) = (1/n)χ_{[0,n^{2}]} (integral = n → ∞) or f_{n}(x) = χ_{[n,n+1]}(x) (integral = 1, pointwise → 0, no integrable dominating function since sup_{n} f_{n} = 1 on [1,∞)). Replace the row's counterexample accordingly and note that the failure is the absence of an integrable dominating function.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: sup_n (1/n)χ_{[0,n]}(x) = 1/⌈x⌉ and ∫_0^∞ 1/⌈x⌉ dx diverges (harmonic series), so there is no integrable dominating function and the example is a genuine counterexample to Proposition 10.4.
**Opus Rebuttal:** $\sup_{n}\frac1n\chi_{[0,n]}(x)=1/\lceil x\rceil$, which is NOT integrable on $[0,\infty)$ (harmonic series). So there is no integrable dominating function and the example is a valid counterexample.

### ISSUE-0003 [Resolved] Intuition paragraph mischaracterizes 1/n χ_{[0,n]} as escaping to infinity without dominating function
- **Category:** Supplement/remark error
- **Location:** intuition block after calc:interchange-table
- **Detail:** The intuition says '(1/n)χ_{[0,n]} では面積 1 の山が無限遠に平たく逃げ' and that '優関数は横方向（無限遠）への逃げを防ぐ'. But as noted, sup_{n}(1/n)χ_{[0,n]} = 1/⌈x⌉ is integrable, so a dominating function does exist; the example does not illustrate the failure of domination. The description is misleading about which mechanism is at work.
- **Proposed fix:** Either replace the example with one that genuinely lacks an integrable dominating function (e.g. χ_{[n,n+1]}), or rephrase: 'χ_{[n,n+1]} では面積 1 の山が無限遠に逃げ、優関数が存在しない'.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Resolved — The intuition now says the mass escapes to infinity and that a dominating function prevents 'horizontal escape'; this is consistent with the fact that no integrable dominating function exists for (1/n)χ_{[0,n]}.

### ISSUE-0004 [Open] Solution to prob-li-integral-sum: claim that ∫_{0}^{1} x^{N} g → 0 needs g integrable, asserted but the bound uses only boundedness on [δ,1)
- **Category:** Logical gap
- **Location:** calc:prob-li-integral-sum / solution
- **Detail:** The solution writes ∫_{0}^{1} x^{N} g ≤ ε + C/(N+1) using ∫_{0}^{δ} g < ε and g ≤ C on [δ,1). This is correct provided g is integrable near 0, which is asserted ('g は (0,1) 上の広義積分が収束する'). That assertion is true but only sketched ('x→0 で log(1/x) のように振る舞う'). The step ∫_{0}^{δ} g < ε requires this convergence, which is stated but not justified; the parenthetical is too vague to establish integrability of log(1/x)/(1-x) near 0 (where 1/(1-x)→1). This is a minor gap but the justification is incomplete.
- **Proposed fix:** Add: 'Near x=0, 1/(1-x) ≤ 2 and log(1/x) ≤ x^{-1/2} for small x, so g(x) ≤ 2x^{-1/2}, which is integrable on (0,δ); hence ∫_{0}^{δ} g < ε for small δ.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The solution still asserts integrability of g near 0 via the vague parenthetical 'x→0 で log(1/x) のように振る舞う'; the bound g(x) ≤ 2log(1/x) on (0,1/2] is stated but the convergence of ∫_0^{1/2} log(1/x) dx is only asserted, so the step ∫_0^δ g < ε remains unjustified in detail.

### ISSUE-0005 [Open] Hypcheck comment on the dominating function for (1/n)χ_{[0,n]} misdescribes the growth
- **Category:** Supplement/remark error
- **Location:** calc:li-improper-dominated / hypcheck (優関数 bullet)
- **Detail:** The hypcheck says sup_n f_n(x) is 'about 1/n on x∈[n-1,n]' and diverges 'like ∫dx/x'. Actually sup_n (1/n)χ_{[0,n]}(x) = 1/⌈x⌉ for x≥1, which diverges like the harmonic series ∑1/n, not like ∫dx/x. The conclusion (no integrable dominating function) is right, but the stated reason is quantitatively wrong.
- **Proposed fix:** Replace with: '外すと \ref{calc:li-counterexamples.3} が反例（一様収束しているが優関数がない：$\sup_{n}f_{n}(x)=1/\lceil x\rceil$ で、$\int_{1}^{\infty}1/\lceil x\rceil\,dx=\sum_{n\ge1}1/n=\infty$ と調和級数のように発散する）。'
- **Reported:** 2026-10-28 (048145a)
