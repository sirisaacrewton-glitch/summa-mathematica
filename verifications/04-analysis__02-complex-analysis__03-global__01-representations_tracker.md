# Verification tracker: `04-analysis/02-complex-analysis/03-global/01-representations.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/01-representations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Euler's zeta(2) derivation via coefficient comparison is not rigorous as stated
- **Category:** Supplement/remark error
- **Location:** supplement in cx:sec-rp-sine (ゼータ関数の値)
- **Detail:** The supplement claims that comparing power series of $\sin\pi z$ and $\pi z\prod(1-z^{2}/n^{2})$ gives $\sum 1/n^{2}=\pi^{2}/6$. As written, the product is only known to converge locally uniformly; to compare the $z^{3}$ coefficient one needs that the coefficient of the infinite product equals $-\sum 1/n^{2}$, i.e. that the product expansion can be differentiated/expanded term by term. This is true but not justified here, and the sentence presents it as a direct coefficient comparison. Also the historical remark 'オイラーの最初の議論はこの形だったとされる' is imprecise: Euler's first derivation of $\zeta(2)$ was not via this product (the product formula came later); attributing this exact argument to Euler is at best loose.
- **Proposed fix:** Replace with: 'By the local uniform convergence of the product one may expand $\pi z\prod_{n\ge1}(1-z^{2}/n^{2})=\pi z\bigl(1-z^{2}\sum_{n\ge1}1/n^{2}+O(z^{4})\bigr)$ (the coefficient of $z^{3}$ is $-\pi\sum 1/n^{2}$, justified by uniform convergence on compact sets), and comparing with $\sin\pi z=\pi z-\pi^{3}z^{3}/6+\cdots$ gives $\sum_{n\ge1}1/n^{2}=\pi^{2}/6$.' Remove or soften the historical attribution.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Weierstrass product for 1/Gamma stated with unverified convergence claim
- **Category:** Unsupported fact
- **Location:** fact cx:gamma-weierstrass-product
- **Detail:** The fact states $1/\Gamma(z)=ze^{\gamma z}\prod_{n\ge1}(1+z/n)e^{-z/n}$ and asserts it is 'of the form of \ref{cx:weierstrass-factorization}'. But the Weierstrass factorization theorem (cx:weierstrass-factorization) applies to entire functions with prescribed zeros and produces factors $E_{n-1}(z/a_{n})$; here the zeros of $1/\Gamma$ are $0,-1,-2,\dots$ and the factors are $E_{1}(-z/n)=(1+z/n)e^{-z/n}$, which is consistent, but the statement that the exponential factor $e^{g}$ reduces to $e^{\gamma z}$ (a linear $g$) is a nontrivial computation not justified. As a bare 'fact' this is acceptable if true, but the parenthetical claim that it is 'the form of the Weierstrass factorization theorem with $g$ linear' is an overstatement: the theorem only guarantees some entire $g$, and identifying $g(z)=\gamma z$ requires the Euler constant computation, which is not given. The reference to Ahlfors is fine, but the structural claim is imprecise.
- **Proposed fix:** State: 'The Weierstrass factorization theorem gives $1/\Gamma(z)=e^{g(z)}z\prod_{n\ge1}(1+z/n)e^{-z/n}$ for some entire $g$; a direct computation (e.g. via the limit definition of $\Gamma$ and the Euler–Mascheroni constant) shows $g(z)=\gamma z$.' Do not claim the linearity of $g$ follows from the factorization theorem alone.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck example for failure of convergence is mislabeled
- **Category:** Supplement/remark error
- **Location:** hypcheck in cx:infinite-product
- **Detail:** The hypcheck says: '$\sum|a_{n}|$ が収束しないと、積は $0$ に収束したり発散したりする（$\prod_{n\ge1}(1-\frac{1}{n+1})=\lim\frac{1}{N+1}=0$ で、どの因子も $0$ でないのに極限は $0$）'. Here $a_{n}=-1/(n+1)$, and $\sum|a_{n}|=\sum 1/(n+1)$ diverges, so the example is consistent with the claim. However the telescoping product $\prod_{n=1}^{N}(1-1/(n+1))=\prod_{n=1}^{N}\frac{n}{n+1}=\frac{1}{N+1}$ indeed tends to $0$; this part is correct. The issue is the phrase 'どの因子も $0$ でないのに極限は $0$' — this is correct (no factor is zero, yet the limit is zero), so the example is valid. No error here; but the claim 'diverges or converges to 0' is slightly imprecise since a product of nonzero factors can also converge to a nonzero value even when $\sum|a_{n}|$ diverges (e.g. $a_{n}$ alternating signs with $\sum a_{n}$ convergent). The statement should say the product may fail to converge or converge to $0$, not that it necessarily does.
- **Proposed fix:** Rephrase: 'Without $\sum|a_{n}|$ converging, the product need not converge to a nonzero value: e.g. $\prod_{n\ge1}(1-\frac{1}{n+1})=\lim_{N}\frac{1}{N+1}=0$, although no factor is zero.' Avoid implying divergence is the only alternative.
- **Reported:** 2026-10-28 (10fede1)
