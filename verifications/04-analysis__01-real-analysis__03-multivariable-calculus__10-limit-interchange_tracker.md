# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/10-limit-interchange.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/10-limit-interchange.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 27 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the table's counterexamples (Abel converse, Fubini, Schwarz, differentiation under the integral, FTC, Dini, term-by-term differentiation) are all standard and accurate, and the proofs of the short propositions are sound. The main genuine problems are in the side comments: (1) the hypcheck of calc:li-improper-dominated misdescribes sup_n f_n for the counterexample (1/n)χ_{[0,n]} as being 'about 1/n on [n-1,n]' with '∫dx/x-like divergence', which is imprecise; (2) the supplement's '高い視点' overstates uniform convergence as 'the condition' for the extension rather than a sufficient condition; (3) the term-by-term integration row's counterexample ('take partial sums of the f_n from row 2') is not a valid counterexample because Σ nχ_{(0,1/n]} diverges everywhere, so it does not exhibit failure of term-by-term integration for a convergent series. All other checked statements are correct.

## Issues

### ISSUE-0001 [Open] Incorrect claim that sup_n f_n ~ 1/n on [n-1,n] in hypcheck
- **Category:** Supplement/remark error
- **Location:** calc:li-improper-dominated / hypcheck (優関数 bullet)
- **Detail:** The hypcheck says that for the counterexample f_n = (1/n)χ_{[0,n]} (calc:li-counterexamples.3), sup_n f_n(x) is 'about 1/n' on x∈[n-1,n] and that its integral diverges like ∫dx/x. This is wrong. For a fixed x, sup_n f_n(x) = sup over n≥x of 1/n = 1/⌈x⌉ (roughly 1/x), and on the interval [n-1,n] the value of sup_n f_n is roughly 1/n only at the right end; more importantly the integral of sup_n f_n is ∫_0^∞ (1/⌈x⌉) dx which diverges like a harmonic sum, not like ∫dx/x in the sense claimed. The precise statement should be that sup_n f_n(x) ≈ 1/x for large x, so ∫_1^∞ sup_n f_n = ∞ (harmonic-type divergence). The current phrasing '1/n 程度' on [n-1,n] and '∫dx/x のように発散' is imprecise/incorrect as a description of sup_n f_n.
- **Proposed fix:** For a fixed x, $\sup_{n}f_{n}(x)=\sup_{n\ge x}\frac1n\approx\frac1x$, so $\int_{1}^{\infty}\sup_{n}f_{n}(x)\,dx=\infty$ (it diverges like the harmonic series $\sum_{n}\frac1n$). Hence no integrable dominating function $g$ with $f_{n}\le g$ can exist.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that uniform convergence is 'the condition' for extension to the corner is overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement states that '一様収束はその延長が存在するための条件で' (uniform convergence is the condition for the extension to exist). This is an overstatement: uniform convergence is a sufficient condition, not a necessary one, for the interchange/extension. The Moore–Osgood proposition itself only requires one of the iterated limits to be uniform; the extension to the corner can exist without uniform convergence in general. Presenting it as 'the condition' is imprecise.
- **Proposed fix:** 一様収束はその延長が存在するための十分条件の一つで、一様構造の言葉では「一様連続な写像は完備化に延長できる」の一例と見なせる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Cauchy product counterexample: self-product of Σ(-1)^n/√(n+1) diverges
- **Category:** Unsupported fact
- **Location:** calc:interchange-table / row 級数の積（コーシー積）
- **Detail:** The table claims that the Cauchy product of Σ(-1)^n/√(n+1) with itself diverges. The general term of the Cauchy product is c_n = Σ_{k=0}^n (-1)^k/√(k+1) · (-1)^{n-k}/√(n-k+1) = (-1)^n Σ_{k=0}^n 1/√((k+1)(n-k+1)). The inner sum is positive and of order log n (since Σ 1/√((k+1)(n-k+1)) ≈ ∫_0^1 dt/√(t(1-t)) · (1/√n)·... more precisely it grows like a constant times log n / ... — in fact Σ_{k=0}^n 1/√((k+1)(n-k+1)) ~ π, bounded, not growing). Let me recompute: substituting k+1 = (n+2)s, the sum is Σ 1/√((k+1)(n+2-(k+1))) which is bounded by a constant (≈π). So c_n = (-1)^n · (bounded positive quantity of order 1), and c_n does not tend to 0? Actually the sum Σ_{k=0}^n 1/√((k+1)(n-k+1)) tends to π (a positive constant), so c_n = (-1)^n·(quantity → π), which does not tend to 0, hence the Cauchy product diverges. So the claim is correct in conclusion. However, the citation points to 'calc:cauchy-product の証明の後の注意' — a remark after the proof of the Cauchy product theorem — which is a legitimate pointer. The conclusion (divergence) is correct because the general term does not tend to 0. So this is not an error.
- **Proposed fix:** No change needed; the claim is correct (the general term of the Cauchy product does not tend to 0).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Dini's theorem row: counterexample x^n on [0,1) — but Dini requires compact domain and the example is fine; check monotonicity/continuity hypotheses
- **Category:** Supplement/remark error
- **Location:** calc:interchange-table / row 各点収束から一様収束へ
- **Detail:** The row states Dini's theorem sufficient condition as '単調・連続・コンパクト' and gives the counterexample x^n on [0,1) because the domain is not compact. This is correct: x^n is monotone and continuous, converges pointwise to 0 on [0,1), but not uniformly, and [0,1) is not compact. The hypotheses listed (monotone, continuous, compact) match Dini. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Abel row: '逆は偽' with c_n=(-1)^n — left side 1/2, right side diverges
- **Category:** Supplement/remark error
- **Location:** calc:interchange-table / row 冪級数の和と端点への極限
- **Detail:** The row says the converse is false: for c_n=(-1)^n, the left side lim_{x→1-} Σ c_n x^n = 1/2 but the right side Σ c_n diverges. This is correct: Σ(-1)^n x^n = 1/(1+x) → 1/2 as x→1-, while Σ(-1)^n diverges. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Fubini counterexample: (x^2-y^2)/(x^2+y^2)^2 gives π/4 and -π/4
- **Category:** Supplement/remark error
- **Location:** calc:interchange-table / row 積分の順序（累次積分）
- **Detail:** The table says the iterated integrals of (x^2-y^2)/(x^2+y^2)^2 over the unit square give π/4 and -π/4. This is the standard example; the iterated integrals are indeed ±π/4 (with appropriate domain, e.g. [0,1]^2). The function is unbounded near the origin, so Fubini's integrability hypothesis fails. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Schwarz counterexample: xy(x^2-y^2)/(x^2+y^2) gives 1 and -1 at origin
- **Category:** Supplement/remark error
- **Location:** calc:interchange-table / row 偏微分の順序
- **Detail:** The standard example f = xy(x^2-y^2)/(x^2+y^2) (with f(0,0)=0) has ∂_1∂_2 f(0,0) = 1 and ∂_2∂_1 f(0,0) = -1. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Differentiation-under-integral counterexample: x^3/y^2 e^{-x^2/y}, F'(0)=1 vs integral of ∂_x f = 0
- **Category:** Supplement/remark error
- **Location:** calc:interchange-table / row 積分記号下の微分
- **Detail:** The example f(x,y)=x^3/y^2 e^{-x^2/y} with F(x)=∫_0^1 f dy = x e^{-x^2} gives F'(0)=1, while ∂_x f(0,y)=0 so ∫∂_x f(0,y)dy=0. This is the standard counterexample and is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] FTC counterexample: F(x)=x^2 sin(1/x^2), F' unbounded and not Riemann integrable
- **Category:** Supplement/remark error
- **Location:** calc:interchange-table / row 積分と微分
- **Detail:** F(x)=x^2 sin(1/x^2) (F(0)=0) is differentiable everywhere, F'(x)=2x sin(1/x^2) - (2/x)cos(1/x^2) is unbounded near 0, hence not Riemann integrable on [0,1]. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] FTC row: f=χ_{[1/2,1]} not differentiable at x=1/2
- **Category:** Supplement/remark error
- **Location:** calc:interchange-table / row 微分と積分
- **Detail:** For f=χ_{[1/2,1]}, the function x↦∫_a^x f is not differentiable at x=1/2 (jump in f). This is correct as a counterexample to differentiability when f is discontinuous.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Term-by-term differentiation row: Σ sin(n^2 x)/n^2 uniformly convergent but Σ cos(n^2 x) diverges at x=0
- **Category:** Supplement/remark error
- **Location:** calc:interchange-table / row 級数と微分（項別微分）
- **Detail:** Σ sin(n^2 x)/n^2 converges uniformly (Weierstrass M-test with 1/n^2), but the term-by-term derivative Σ cos(n^2 x) diverges at x=0 since terms don't tend to 0. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Term-by-term integration row: partial sums of f_n=nχ_{(0,1/n]}
- **Category:** Supplement/remark error
- **Location:** calc:interchange-table / row 級数と積分（項別積分）
- **Detail:** The counterexample says 'take partial sums of the f_n from row 2'. The f_n = nχ_{(0,1/n]} are not the terms of a convergent series in a natural way; the intended counterexample is that term-by-term integration fails when uniform convergence of partial sums fails. This is a bit loose but the pointer to row 2's f_n as a counterexample to term-by-term integration is acceptable since Σ f_n with these terms does not converge pointwise (each x>0 is in infinitely many supports with value n). Actually Σ nχ_{(0,1/n]} diverges pointwise for every x>0, so it's not a valid counterexample to term-by-term integration (which presupposes the series converges). This is a genuine issue: the cited counterexample does not actually demonstrate failure of term-by-term integration because the series Σ f_n diverges everywhere.
- **Proposed fix:** Use a genuine counterexample: e.g. f_n(x)=n x^{n-1}(1-x) on [0,1] or the standard example where partial sums converge pointwise but not uniformly and ∫lim ≠ lim∫. For instance, take g_n = f_n from row 2 but as a series with terms g_n - g_{n-1} (telescoping), or simply state that the partial sums S_N of a series can converge pointwise to S while ∫S_N ↛ ∫S, citing the row-2 example reinterpreted as S_N = Nχ_{(0,1/N]}.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Moore–Osgood Step 2: passing n→∞ requires b_m = lim_n a_{mn} and the uniform bound
- **Category:** Logical gap
- **Location:** calc:li-double-limit / Step 2
- **Detail:** Step 2 says: for m≥M, |a_{mn}-c_n|<ε for all n; letting n→∞ gives |b_m - L|≤ε. This requires that a_{mn}→b_m as n→∞ (given) and c_n→L (from Step 1), which is fine. The argument is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Moore–Osgood Step 1: triangle inequality uses |c_n - a_{Mn}|<ε for all n, requiring M from uniformity
- **Category:** Logical gap
- **Location:** calc:li-double-limit / Step 1
- **Detail:** Step 1 uses |c_n - a_{Mn}|<ε and |a_{Mn'} - c_{n'}|<ε, which hold for m=M≥M (the uniform threshold) for all n. This is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] calc:li-improper-dominated: continuity of f_n, f and g assumed but f is only the pointwise limit
- **Category:** Missing hypothesis
- **Location:** calc:li-improper-dominated / statement
- **Detail:** The proposition assumes f_n, f continuous and f_n→f locally uniformly, plus continuous dominating g with |f_n|≤g. Step 1 claims |f|≤g by taking pointwise limits, which is fine. The comparison test (calc:improper-tests.2) is applied to continuous functions, which is satisfied. No missing hypothesis.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] calc:li-differentiation-counter: substitution to improper integral requires justification
- **Category:** Missing hypothesis
- **Location:** calc:li-differentiation-counter / Step 1
- **Detail:** The substitution t=x^2/y transforms ∫_0^1 f(x,y)dy into an improper integral ∫_{x^2}^∞ ... dt. The text justifies this by noting f(x,·) is continuous on (0,1] and tends to 0 as y→0+, so the integral on [0,1] equals the improper integral after substitution. This is acceptable. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Tannery application: |a_n(k)| ≤ |x|^k/k! bound
- **Category:** Unsupported fact
- **Location:** calc:prob-li-tannery / solution
- **Detail:** The solution claims |a_n(k)| = |x|^k/k! · ∏_{j<k}(1-j/n) ≤ |x|^k/k!. Since each factor (1-j/n) ≤ 1 for j<k≤n, the product is ≤1, so the bound holds. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Integral-sum problem: g(x)=log(1/x)/(1-x) improper integral converges
- **Category:** Unsupported fact
- **Location:** calc:prob-li-integral-sum / solution
- **Detail:** The solution asserts g has convergent improper integral on (0,1): as x→1, g→1 (since log(1/x)~1-x), and as x→0, g~log(1/x) which is integrable. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Table row 極限と積分 cites calc:uniform-limit-theorems.4
- **Category:** Improper link
- **Location:** calc:interchange-table / row 極限と積分
- **Detail:** The row cites calc:uniform-limit-theorems.4 (item 4 of theorem 6.2, 一様収束の基本定理) for 'lim∫ = ∫lim under uniform convergence on a bounded closed interval'. Item 4 of the uniform convergence basic theorem is presumably the integration interchange statement. This is a legitimate citation. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] Table row 級数と積分 cites calc:uniform-limit-theorems.3 and .4
- **Category:** Improper link
- **Location:** calc:interchange-table / row 級数と積分（項別積分）
- **Detail:** Cites items 3 and 4 of theorem 6.2 for term-by-term integration via uniform convergence of partial sums. Legitimate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] Table row 冪級数の和と端点 cites calc:abel-theorem via \tref
- **Category:** Improper link
- **Location:** calc:interchange-table / row 冪級数の和と端点への極限
- **Detail:** Uses \tref{calc:abel-theorem} which is a cross-page reference to Abel's theorem. Legitimate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0022 [Open] Table row 積分の順序 cites calc:fubini via \tref and calc:fubini-continuous
- **Category:** Improper link
- **Location:** calc:interchange-table / row 積分の順序（累次積分）
- **Detail:** Legitimate citations to Fubini and the continuous corollary.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0023 [Open] Table row 偏微分の順序 cites calc:schwarz-theorem via \tref
- **Category:** Improper link
- **Location:** calc:interchange-table / row 偏微分の順序
- **Detail:** Legitimate citation to Schwarz's theorem.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0024 [Open] Table row 各点収束から一様収束へ cites calc:dini via \tref
- **Category:** Improper link
- **Location:** calc:interchange-table / row 各点収束から一様収束へ
- **Detail:** Legitimate citation to Dini's theorem.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0025 [Open] Intuition: '1/n χ_{[0,n]} area-1 hill escapes to infinity flatly' — correct
- **Category:** Supplement/remark error
- **Location:** intuition
- **Detail:** The intuition describes the counterexamples correctly: nχ_{(0,1/n]} collapses a unit-area hill to 0; (1/n)χ_{[0,n]} sends a unit-area hill to infinity flattened; sin(nx)/n has vanishing height but residual oscillation speed. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0026 [Open] Supplement: 'Lebesgue conditions are a special case of Riemann conditions (uniform convergence, continuity)'
- **Category:** Supplement/remark error
- **Location:** supplement / ルベーグ積分では
- **Detail:** The supplement says the Riemann-integral conditions in the table (uniform convergence, continuity) are 'special cases' of the Lebesgue conditions (monotonicity, integrable dominating function, integrability/nonnegativity). This is imprecise: uniform convergence on a finite interval implies the existence of a dominating function only when the limit is bounded (which it is, being continuous on a compact interval), so it is indeed a special case of dominated convergence. However, saying the Riemann conditions are 'special cases' of the Lebesgue ones is a reasonable but slightly loose statement; it is not false. The claim that the Lebesgue sufficient conditions unify into 'monotonicity / integrable dominating function / integrability (or nonnegativity)' is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0027 [Open] Supplement: 'uniform convergence is the condition for the extension to exist' — overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** As noted, uniform convergence is a sufficient, not necessary, condition for the extension/interchange. The phrasing '一様収束はその延長が存在するための条件で' reads as if it were the (necessary and sufficient) condition. This is an overstatement.
- **Proposed fix:** 一様収束はその延長が存在するための十分条件の一つで、...
- **Reported:** 2026-10-28 (10fede1)
