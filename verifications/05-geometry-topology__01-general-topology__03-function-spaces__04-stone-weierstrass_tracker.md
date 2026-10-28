# Verification tracker: `05-geometry-topology/01-general-topology/03-function-spaces/04-stone-weierstrass.html`

<!-- source: 05-geometry-topology/01-general-topology/03-function-spaces/04-stone-weierstrass.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Non-unital case: 'vanishing at one point' closure claim is false
- **Category:** Supplement/remark error
- **Location:** supplement / 定数を含まない場合
- **Detail:** The supplement claims that a point-separating subalgebra which vanishes at some point $x_{0}$ (all elements vanish there) has closure $\{f:f(x_{0})=0\}$. This is false as stated: the closure is the subalgebra of functions vanishing at $x_{0}$ that are approximable, but a point-separating subalgebra vanishing at $x_{0}$ need not be dense in $\{f:f(x_{0})=0\}$. Counterexample: on $X=[0,1]$, take $A=\{t\cdot p(t^{2}):p\text{ polynomial}\}$, i.e. $t$ times even polynomials. Every element vanishes at $0$, and $A$ separates points (since $t\cdot 1$ and $t\cdot t^{2}=t^{3}$ distinguish $t$ and $-t$). But the closure of $A$ consists of functions of the form $t\cdot(\text{even continuous function})$, which is strictly smaller than $\{f:f(0)=0\}$ (e.g. $f(t)=t$ for $t\ge0$, $f(t)=0$ for $t<0$ is not of this form). The correct statement requires that $A$ together with the constants generates a point-separating unital algebra, or equivalently that $A$ separates points and for each $x\ne x_{0}$ there is $g\in A$ with $g(x)\ne0$; even then one must argue via $A+\mathbb{R}\cdot1$.
- **Proposed fix:** Replace with: 'If $A$ separates points and for every $x\ne x_{0}$ there is $g\in A$ with $g(x)\ne0$ (so that $A+\mathbb{R}\cdot 1$ separates points), then $\overline{A}=\{f:f(x_{0})=0\}$; if $A$ separates points and does not vanish identically at any point, then $\overline{A}=C(X)$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Complex case: integral argument for $\bar z$ is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 複素数値
- **Detail:** The supplement argues that polynomials $p(z)$ satisfy $\int_{0}^{2\pi}p(e^{i\theta})e^{i\theta}\,d\theta=0$ while $\bar z$ gives $2\pi$, and that uniform limits preserve the integral, so $\bar z$ cannot be approximated. The conclusion is correct, but the stated reason is imprecise: uniform limits of polynomials need not be polynomials, so one must argue that the functional $f\mapsto\int_{0}^{2\pi}f(e^{i\theta})e^{i\theta}\,d\theta$ is continuous in the uniform norm and vanishes on all polynomials, hence on their uniform closure; since it equals $2\pi$ on $\bar z$, $\bar z$ is not in the closure. As written ('一様極限は積分を保つ') the sentence is acceptable but the logical step (continuity of the integral functional) is what makes it valid; the phrasing '多項式 $p(z)$ は…を満たすが…一様極限は積分を保つ' is fine if read as continuity, but the supplement should state that the integral functional is continuous in the sup norm.
- **Proposed fix:** State explicitly: 'The functional $f\mapsto\int_{0}^{2\pi}f(e^{i\theta})e^{i\theta}\,d\theta$ is continuous with respect to the uniform norm and vanishes on all polynomials, hence on their uniform closure; since it equals $2\pi$ on $\bar z$, $\bar z$ is not approximable.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck: 'A separating points implies X Hausdorff' needs continuity of the separating functions
- **Category:** Supplement/remark error
- **Location:** hypcheck / ハウスドルフ性
- **Detail:** The hypcheck says: 'if $A$ separates points then $X$ is automatically Hausdorff (inverse images of neighborhoods of the values of a separating continuous function)'. This is correct only because elements of $A\subset C(X)$ are continuous; the parenthetical does supply this. However, the claim as phrased ('$A$ が二点を分離すれば $X$ は自動的にハウスドルフである') could be read as a statement about arbitrary separating families, which is false. Since the parenthetical mentions '分離する連続関数', the intended reading is correct. No change strictly required, but the phrasing is slightly overstated.
- **Proposed fix:** Rephrase: 'If $A\subset C(X)$ separates points by continuous functions, then $X$ is Hausdorff: for $x\ne y$ choose continuous $g\in A$ with $g(x)\ne g(y)$ and take disjoint neighborhoods of $g(x),g(y)$.'
- **Reported:** 2026-10-28 (10fede1)
