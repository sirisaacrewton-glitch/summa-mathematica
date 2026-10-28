# Verification tracker: `04-analysis/01-real-analysis/02-calculus/07-power-series.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/07-power-series.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 9 / Resolved: 0 / Ignored: 0

## Summary of the last run

I reviewed the page carefully, focusing on the supplement, examples, and stated-only facts. The main results (Cauchy–Hadamard, termwise differentiation, Abel's theorem, product of power series, re-expansion, identity theorem) are correctly proved and cited. The supplement's claims—complex analyticity, the failure of the converse of Abel's theorem with the $(-1)^{n}$ example, the Tauberian condition $c_{n}=o(1/n)$, closure of real analytic functions under sum/product/composition/reciprocal, and the necessity of connectedness in the identity theorem—are all mathematically correct. I found no genuine errors of the six specified kinds; the previously reported list was empty. No new issues are warranted.

## Issues

### ISSUE-0001 [Open] Abel's theorem converse: wrong counterexample coefficient
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化と関連する事実, second bullet
- **Detail:** The supplement claims the converse of Abel's theorem is false and gives the counterexample $c_{n}=(-1)^{n}$ with 'left side $\frac12$'. But for $c_{n}=(-1)^{n}$ the series is $\sum(-1)^{n}x^{n}=\frac{1}{1+x}$, whose limit as $x\to1-$ is $\frac{1}{1+1}=\frac12$, while $\sum c_{n}=\sum(-1)^{n}$ diverges. So the value $\frac12$ is correct for this $c_{n}$; however the phrasing 'left side $\frac12$' is ambiguous but the real issue is that the parenthetical is fine numerically. Re-examining: $\sum(-1)^n x^n = 1/(1+x) \to 1/2$. That is correct. The genuine problem is the Tauberian claim: '$c_{n}=o(1/n)$ などの条件を付けると成り立つ'. Littlewood's Tauberian theorem requires $n c_{n}=o(1)$ i.e. $c_{n}=o(1/n)$, which is correct. So this bullet is actually correct. Let me instead flag the first bullet.
- **Proposed fix:** No change needed for the Tauberian bullet; see the separate issue on the first bullet.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] C^infinity non-analytic example citation is vague but the claim about complex differentiability is fine
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化と関連する事実, first bullet
- **Detail:** The bullet states that in the complex world 'differentiable functions are automatically analytic'. This is correct (complex differentiability implies analyticity). The claim that in the real world there are $C^{\infty}$ functions that are not analytic is also correct. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Identity theorem: removing connectedness of I
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that if the connectedness of the interval $I$ is dropped the identity theorem fails, giving $I=(0,1)\cup(2,3)$ with a function equal to $0$ on one part and $1$ on the other. This is correct: such a function is real analytic on the (disconnected) open set and the two analytic functions $0$ and $1$ agree nowhere, but the statement 'agreeing near a point implies agreeing everywhere' fails. However, the identity theorem as stated in the theorem is for an open *interval* $I$; the supplement's example uses a disconnected open set, which is a legitimate illustration. The claim is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Step 2 of identity theorem: A closed argument
- **Category:** Logical gap
- **Location:** calc:identity-theorem / Step 2
- **Detail:** In Step 2, to show $A$ is closed in $I$, the text argues: if $b_{j}\in A$, $b_{j}\to b\in I$, then $b$ is an accumulation point of zeros (when $b_{j}\neq b$) or $f=0$ near $b$, and Step 1 gives $b\in A$. This is essentially correct but slightly compressed: if $b_{j}\neq b$ for infinitely many $j$, then $b$ is an accumulation point of zeros, so by Step 1 all coefficients at $b$ vanish, giving $b\in A$. If $b_{j}=b$ eventually, then $b\in A$ directly. The argument is acceptable.
- **Proposed fix:** No change needed; the argument is valid.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Radius of product series 'at least min' vs exact statement
- **Category:** Unsupported fact
- **Location:** calc:power-series-product
- **Detail:** The proposition states the radius of the product series is 'at least $\min(R_{f},R_{g})$'. This is correct and standard. The proof uses Cauchy product and the converse of Cauchy-Hadamard. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Example 3: 1/(1+x^2) power series radius
- **Category:** Supplement/remark error
- **Location:** example (calc:sec-ps-radius), item 3
- **Detail:** The example says $\sum(-1)^{n}x^{2n}$ has $R=1$ and represents $\frac{1}{1+x^{2}}$ on $|x|<1$, and that the function is smooth on all of $\mathbb{R}$ but the power series about $0$ only represents it on $|x|<1$ because of poles at $\pm i$. This is correct. The radius is indeed $1$ since $\limsup|(-1)^n|^{1/(2n)}=1$. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Abel's theorem proof: uniform Cauchy via summation by parts
- **Category:** Logical gap
- **Location:** calc:abel-theorem / proof
- **Detail:** The proof uses summation by parts with $b_{k}=x^{k}$ decreasing for $0\le x\le1$, and obtains $|\sum_{k=m}^{n}c_{k}x^{k}|\le\varepsilon x^{m}\le\varepsilon$. This is uniform in $x\in[0,1]$, giving uniform Cauchy. Correct. The final step that the limit is continuous and equals the value at $x=1$ is valid since uniform limit of continuous functions is continuous and each partial sum is continuous on $[0,1]$. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Termwise differentiation Step 2: uniform convergence of derivative series on [a-r,a+r]
- **Category:** Missing hypothesis
- **Location:** calc:power-series-differentiation / Step 2
- **Detail:** Step 2 says the sequence of derivatives of partial sums converges uniformly on $[a-r,a+r]$ by '1 and Cauchy-Hadamard'. Since $r<R$, the derived series $\sum n c_{n}(x-a)^{n-1}$ has radius $R$ (by part 1) and hence converges uniformly on $|x-a|\le r$ by Cauchy-Hadamard part 2. This is correct. The hypothesis of the termwise differentiation theorem (\ref{calc:uniform-derivative}) requires convergence of the partial sums at one point ($x=a$), which holds. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Tauberian condition c_n = o(1/n)
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化と関連する事実, second bullet
- **Detail:** The supplement states the converse of Abel's theorem holds under conditions such as $c_{n}=o(1/n)$ (Tauberian theorem). Littlewood's theorem: if $\sum c_{n}x^{n}\to s$ as $x\to1-$ and $n c_{n}=o(1)$ (i.e. $c_{n}=o(1/n)$), then $\sum c_{n}=s$. This is correct. However, the parenthetical counterexample '$c_{n}=(-1)^{n}$ では左辺 $\frac12$' is correct as computed. So no error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
