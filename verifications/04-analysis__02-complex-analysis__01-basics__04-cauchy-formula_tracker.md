# Verification tracker: `04-analysis/02-complex-analysis/01-basics/04-cauchy-formula.html`

<!-- source: 04-analysis/02-complex-analysis/01-basics/04-cauchy-formula.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that e^{z+w}=e^z e^w follows from the identity theorem alone
- **Category:** Supplement/remark error
- **Location:** supplement in cx:sec-cf-identity (関数等式の延長)
- **Detail:** The supplement claims that identities like $\sin^{2}z+\cos^{2}z=1$ and $e^{z+w}=e^{z}e^{w}$ are obtained 'from the real identity by the identity theorem alone'. For $e^{z+w}=e^{z}e^{w}$ this is imprecise: the identity theorem applies to functions of one variable on a domain. To deduce the two-variable identity one must fix one variable (say $w$) and apply the identity theorem in $z$ to $e^{z+w}$ and $e^{z}e^{w}$, which requires knowing that $z\mapsto e^{z+w}$ is holomorphic (i.e. the definition/analyticity of $e^{z}$ and that $e^{z+w}$ is entire in $z$), not merely the real identity. So 'by the identity theorem alone' overstates the case; the holomorphy of both sides in the relevant variable is also needed.
- **Proposed fix:** 一致の定理により、実数で成り立つ恒等式は、両辺が（各変数について）正則であることを確認したうえで複素数に延びる。たとえば $\sin^{2}z+\cos^{2}z=1$ は両辺が整関数なので一致の定理で従う。$e^{z+w}=e^{z}e^{w}$ は $w$ を固定して $z$ の整関数 $e^{z+w}$ と $e^{z}e^{w}$ に一致の定理を適用すればよい（$e^{z+w}$ が $z$ について整関数であることは定義から従う）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck claim that pointwise convergence is insufficient is stated with an unverified construction
- **Category:** Supplement/remark error
- **Location:** hypcheck in cx:weierstrass-convergence
- **Detail:** The hypcheck says 'pointwise convergence is not enough (using Runge's approximation theorem one can construct a sequence of polynomials converging pointwise but whose limit is not holomorphic; not included)'. The statement that pointwise convergence of holomorphic functions need not have a holomorphic limit is true, but the specific attribution to Runge's theorem is a strong and unverified claim, and Runge's theorem gives uniform approximation on compacta (which would give locally uniform convergence, hence a holomorphic limit), so invoking Runge to produce a pointwise-but-not-locally-uniform counterexample is misleading. A standard counterexample (e.g. on the unit disk, functions converging pointwise to a discontinuous/non-holomorphic limit) does not require Runge.
- **Proposed fix:** 各点収束では足りない。たとえば単位円板上で $f_{n}(z)=z^{n}$ は $|z|<1$ で各点 $0$ に収束するが、極限は $0$（これは正則）であり、より適切には、各点収束するが広義一様収束しない正則関数の列では極限が正則でない例が構成できる（ルンゲの定理ではなく、たとえば $f_{n}(z)=\frac{1}{1+nz}$ のような列を考え、極限が不連続になる例を挙げる）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Maximum modulus supplement: 'open mapping implies maximum principle immediately' is imprecise about the argument
- **Category:** Supplement/remark error
- **Location:** supplement in cx:sec-cf-maximum (高い視点)
- **Detail:** The supplement says the maximum modulus principle follows 'immediately' from the open mapping theorem, and then argues: if $|f(a)|$ is a local maximum, the values near $f(a)$ fill a small disk, among which there is a value with larger modulus. This is essentially correct, but the phrasing '直ちに出る' (follows immediately) combined with the reasoning is slightly circular in presentation: the open mapping theorem itself is typically proved using the maximum modulus principle or the argument principle. As a side remark claiming a logical direction ('from open mapping'), it risks implying a non-circular derivation. The mathematical content (open mapping $\Rightarrow$ maximum principle) is fine, but the claim of immediacy and the implied independence is overstated.
- **Proposed fix:** 最大値原理は開写像定理からも導ける：定数でない正則関数は開集合を開集合に写すので、$|f(a)|$ が極大なら $f(a)$ のまわりの像は $f(a)$ を含む開集合で、$|f(a)|$ より大きい絶対値をもつ点を含み矛盾する（ただし開写像定理自身は最大値原理や偏角の原理を用いて示されることが多く、ここでは論理的な独立性を主張しない）。
- **Reported:** 2026-10-28 (10fede1)
