# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/06-fubini.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/06-fubini.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problems are improper/unresolvable links (`calc:fubini-counterexamples.2` and bare `calc:jordan-additivity` are not in the label table), an imprecise supplement phrase describing Fubini as a 'composition of integrals', an overstated analogy to conditionally convergent series, and a gap in the density argument for the complement of S in counterexample 1. The proofs themselves are sound.

## Issues

### ISSUE-0001 [Open] Reference to nonexistent label calc:fubini-counterexamples.2
- **Category:** Improper link
- **Location:** calc:fubini hypcheck / Step 4 area; also supplement
- **Detail:** The hypcheck says "\ref{calc:fubini-counterexamples.2} では、$f$ は積分可能だが、ある $x$ で $f(x,\cdot)$ が積分可能でない", and the supplement refers to "\ref{calc:fubini-counterexamples.2}". The label table only lists `calc:fubini-counterexamples.1` (counterexample 6.3). The counterexample environment `calc:fubini-counterexamples` has three items; item 2 is the one intended. The citation target `.2` is not in the table, so the link is mechanically wrong/unresolvable.
- **Proposed fix:** Change both citations to `\ref{calc:fubini-counterexamples.2}` only if item 2 is registered as a citable item; otherwise cite the environment `\ref{calc:fubini-counterexamples}` and say "item 2 of \ref{calc:fubini-counterexamples}".
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Reference to nonexistent label calc:jordan-additivity in solution
- **Category:** Improper link
- **Location:** calc:prob-fu-tetrahedron solution
- **Detail:** The solution cites `\ref{calc:jordan-additivity}` but the label table lists only `calc:jordan-additivity.1` (proposition 5.15, additivity of the integral over regions). The bare label is not in the table, so the link is wrong.
- **Proposed fix:** Replace `\ref{calc:jordan-additivity}` with `\ref{calc:jordan-additivity.1}`.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Cavalieri attribution and 'composition of integrals' phrasing
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says Fubini 'says the integral over a product is the composition of the integrals of each component' (積分が「直積の上では各成分の積分の合成」になる). This is imprecise: Fubini gives the iterated integral, not a product/composition of the two integrals; the product formula $\int_{A\times B} f(x)g(y)=\int_A f\int_B g$ is a special case, not the content. Also the Cavalieri principle attribution is loose but acceptable; the 'composition' claim is the genuine imprecision.
- **Proposed fix:** Rewrite: 'フビニの定理は、直積上の積分が累次積分（まず一方の変数で積分し、その結果をもう一方の変数で積分する）に等しいことを言っている。$f(x,y)=g(x)h(y)$ のときは積の形 $\int_{A\times B}f=(\int_A g)(\int_B h)$ になる。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Counterexample 3 described as 'order of summation changes result' like conditionally convergent series
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点, and counterexample item 3
- **Detail:** The supplement says counterexample 3 is 'the same phenomenon as rearranging a conditionally convergent series'. This is an overstatement: in counterexample 3 the function is unbounded and the two iterated integrals are $\pi/4$ and $-\pi/4$; the analogy to conditional convergence is only heuristic. More importantly, the supplement's claim '有界性を外すと、累次積分が順序によって異なることがある（反例 3）' is correct, but the parenthetical analogy '条件収束する級数の並べ替えと同じ現象' is a loose identification, not a mathematical statement. Since the instruction targets overstated side comments, this should be softened.
- **Proposed fix:** Replace with: '反例 3 は「非有界なため累次積分の順序で値が変わる」状況で、条件収束級数の並べ替えと似た雰囲気を持つが、同一の現象ではない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that S is dense with both S and complement dense, and chi_S discontinuous everywhere
- **Category:** Unsupported fact
- **Location:** calc:fubini-counterexamples / Step 2
- **Detail:** Step 2 claims $S$ is dense in $[0,1]^2$ and its complement is dense, hence $\chi_S$ is discontinuous at every point. The density of $S$ is plausible, but the claim that the complement is dense because '$S$ is countable, the square is uncountable' is not a valid argument by itself (a countable dense set can have dense complement, but countability alone does not give density of the complement; one needs that $S$ does not contain any open square, which is true but not argued). The conclusion 'discontinuous at every point' then follows only if both $S$ and its complement are dense. The argument as written has a gap.
- **Proposed fix:** Add: 'The complement is dense because $S$ contains no nondegenerate square: any open square contains points whose coordinates are not of the form $i/2^k$ with the same $k$ and odd numerator, e.g. points with a coordinate having a different 2-adic denominator.' Then $\chi_S$ is discontinuous everywhere.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 2 of counterexample: measure-zero of boundary of A times [c,d]
- **Category:** Logical gap
- **Location:** calc:normal-domain-integral / Step 2
- **Detail:** Step 2 asserts $\partial A\times[c,d]$ is a finite union of closed boxes with one side length 0, hence measure zero. This is correct, but the citation `\ref{calc:measure-zero-rn-properties.4}` is used for both the graphs and this product; the product claim needs the fact that a product of a measure-zero set in $\mathbb{R}^n$ with a box in $\mathbb{R}$ is measure zero, which is a separate property. If property .4 covers products this is fine; otherwise the step is under-justified.
- **Proposed fix:** Either cite the product/measure-zero property explicitly, or add: '$\partial A$ is a finite union of faces, each contained in a box of zero width, so $\partial A\times[c,d]$ is a finite union of boxes in $\mathbb{R}^{n+1}$ with one side of length 0, hence measure zero.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Fubini corollary induction uses continuity of g but not integrability of g on A explicitly
- **Category:** Missing hypothesis
- **Location:** calc:fubini-continuous / proof
- **Detail:** The induction applies the inductive hypothesis to $g$ on $A$. The hypothesis requires $g$ continuous on the closed box $A$, which is shown. However, the base case and the requirement that $A$ be a product of intervals is implicit; also the statement 'the order of integration may be arbitrarily permuted' is justified by a parenthetical that permutation of variables preserves the integral, which is not proven here but is plausible. This is minor; the main concern is that the induction step needs $g$ continuous, which is shown, so no genuine gap. I will not report this.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
