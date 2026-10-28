# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/08-p-adic.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/08-p-adic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Selmer's example: the curve 3x^3+4y^3+5z^3=0 has no nontrivial local solutions at some primes
- **Category:** Supplement/remark error
- **Location:** remark オストロフスキーの定理と局所大域原理, item 2
- **Detail:** The remark claims that Selmer's example $3x^{3}+4y^{3}+5z^{3}=0$ has a nontrivial solution over every $\mathbb{Q}_{p}$ and over $\mathbb{R}$ but not over $\mathbb{Q}$. The global part (no nontrivial rational solution) is correct, but the local part is false as stated: this cubic has no nontrivial solution in $\mathbb{Q}_{p}$ for some primes (in particular it fails at $p=2$; the standard Selmer curve $3x^{3}+4y^{3}+5z^{3}=0$ is a well-known counterexample to the Hasse principle precisely because it has local points at all but finitely many places, and one must choose the curve/variant carefully — the naive claim 'all $\mathbb{Q}_{p}$ and $\mathbb{R}$' is not correct for this equation). Since the remark uses it as a counterexample to the local-global principle for cubics, the local-solvability assertion must be accurate.
- **Proposed fix:** Replace with a correct statement, e.g.: '3 次形式では成り立たず、セルマーの例 $3x^{3}+4y^{3}+5z^{3}=0$ は $\mathbb{Q}$ 上非自明な零点をもたないが、有限個の素数を除くすべての $\mathbb{Q}_{p}$ および $\mathbb{R}$ で非自明な零点をもつ（局所大域原理の反例）.' If the stronger 'all places' claim is desired, cite a verified example (e.g. the standard Selmer curve with the correct local analysis) rather than asserting it for this equation.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hensel's factorization version requires the factors to be coprime mod m, and the definition of Henselian ring is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement 前提を弱めると
- **Detail:** The supplement says Hensel's lemma generalizes to complete local rings: 'a factorization mod $\mathfrak{m}$ into coprime factors lifts'. This is essentially right, but the sentence as written omits the coprimality (互いに素) hypothesis on the mod-$\mathfrak{m}$ factorization, which is essential; without it the lifting fails (e.g. $x^{2}-p$ over $\mathbb{Z}_{p}$ factors as $x\cdot x$ mod $p$ but does not split). Also 'この性質をもつ局所環をヘンゼル環という' is slightly imprecise: a Henselian local ring is one where the Hensel property holds (equivalently idempotents/factorizations lift), and completeness is sufficient but not necessary.
- **Proposed fix:** State: '完備な局所環（$\mathfrak{m}$ 進完備）上の多項式について、$\bmod\mathfrak{m}$ での**互いに素な**モニック因数分解 $\bar f=\bar g\bar h$（$\gcd(\bar g,\bar h)=1$）が $f=gh$ に持ち上がる（ヘンゼルの補題（因数分解版））。この性質をもつ局所環をヘンゼル環という（完備局所環はヘンゼル環である）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Newton's method convergence claim in the supplement is stated too strongly
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says Newton's method over $\mathbb{R}$ 'approximates a solution with the same recursion and doubles precision just as in the $p$-adic case'. Over $\mathbb{R}$ Newton's method requires hypotheses (a suitable starting point, $f'(\alpha)\neq0$, convexity/sign conditions) to converge, and it can diverge or cycle otherwise; the unconditional 'doubles precision' statement is only valid locally near a simple root with a good initial guess. The $p$-adic analogue (Hensel) has no such convergence issue because of the ultrametric contraction. Stating them as 'the same' overstates the real case.
- **Proposed fix:** Say: '実数でも、単根の近くで適切な初期値と $f'(\alpha)\neq0$ のもとではニュートン法 $a_{n+1}=a_{n}-f(a_{n})/f'(a_{n})$ が2次収束する（ただし収束には初期値の条件が必要）。$p$ 進の場合（ヘンゼルの補題）は超距離性のため初期値の条件なしに精度が倍々に上がる。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Ostrowski attribution/statement: the trivial absolute value is excluded but the exponent range for the p-adic case is stated inconsistently
- **Category:** Supplement/remark error
- **Location:** remark オストロフスキーの定理と局所大域原理, item 1
- **Detail:** The remark lists the nontrivial absolute values on $\mathbb{Q}$ as $|\cdot|_{\infty}^{c}$ with $0<c\le1$ and $|\cdot|_{p}^{c}$ with $c>0$. This is correct up to equivalence, but the asymmetry ($c\le1$ for the archimedean case, $c>0$ for the $p$-adic case) is only because $|\cdot|_{\infty}^{c}$ for $c>1$ is equivalent to $|\cdot|_{\infty}^{1/c}$ with $1/c<1$; as stated it is not wrong but the ranges look inconsistent and could mislead. More importantly, the phrase 'したがって $\mathbb{Q}$ の完備化は $\mathbb{R}$ と $\mathbb{Q}_{p}$ で尽き' should also mention the trivial absolute value giving $\mathbb{Q}$ itself, which is excluded by '自明でない' but the conclusion '完備化は $\mathbb{R}$ と $\mathbb{Q}_{p}$ で尽き' silently drops it.
- **Proposed fix:** Write: '自明でない絶対値は $|\cdot|_{\infty}^{c}$（$0<c\le1$）か $|\cdot|_{p}^{c}$（$c>0$）と同値。したがって自明でない絶対値による $\mathbb{Q}$ の完備化は $\mathbb{R}$ と $\mathbb{Q}_{p}$（$p$ 素数）で尽きる（自明な絶対値の完備化は $\mathbb{Q}$ 自身）。'
- **Reported:** 2026-10-28 (8ccef3d)
