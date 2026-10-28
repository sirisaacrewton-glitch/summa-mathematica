# Verification tracker: `04-analysis/02-complex-analysis/01-basics/05-singularities.html`

<!-- source: 04-analysis/02-complex-analysis/01-basics/05-singularities.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Casorati–Weierstrass applied at infinity for e^z and sin z
- **Category:** Supplement/remark error
- **Location:** supplement (リウヴィルの定理の言い換え)
- **Detail:** The supplement claims that since $e^{z}$ and $\sin z$ have an essential singularity at $\infty$, the Casorati–Weierstrass theorem implies that their values on $|z|>R$ are dense in $\C$. But the Casorati–Weierstrass theorem on this page (cx:casorati-weierstrass) is stated only for an isolated singularity $a\in\C$ with $0<\delta<R$, i.e. for punctured disks $D^{*}(a,\delta)$; it is not stated for the point at infinity. Moreover the claim is literally false for $e^{z}$: on $|z|>R$ the function $e^{z}$ omits the value $0$ and, more importantly, $e^{z}$ is never dense in the required sense near $\infty$ in the way stated—indeed $|e^{z}|=e^{\Re z}$ and on the region $|z|>R$ the values do not form a dense set in the sense of the theorem applied to a punctured neighborhood of $\infty$ unless one correctly transports the theorem via $w=1/z$. The statement as written misapplies the theorem (which is only proved for finite singularities) to the point at infinity without justification.
- **Proposed fix:** Replace with: "$e^{z}$ and $\sin z$ have an essential singularity at $\infty$. Applying the Casorati–Weierstrass theorem to $g(w)=f(1/w)$ at $w=0$ (which is an essential singularity of $g$), for every $R>0$ the set $\{f(z): |z|>R\}$ is dense in $\C$."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Step 3 of meromorphic-on-sphere proof: growth bound needs removable/pole at infinity handled
- **Category:** Logical gap
- **Location:** cx:meromorphic-sphere-rational / Step 3
- **Detail:** Step 3 asserts $|f(z)|\le A|z|^{m}$ near $\infty$ citing cx:pole-characterization.2 applied to $g(w)=f(1/w)$. But cx:pole-characterization.2 characterizes a pole; it does not by itself give a polynomial growth bound when $\infty$ is a *removable* singularity of $f$ (then $g$ has a removable singularity at $0$, and one needs boundedness, not the pole characterization). The text says "$\infty$ で除去可能または極" but then only invokes the pole characterization. The removable case requires a separate argument (boundedness near $\infty$ gives $m=0$). As written the citation does not cover the removable case.
- **Proposed fix:** Split the argument: if $\infty$ is removable, then $g(w)=f(1/w)$ is bounded near $w=0$ (by cx:removable-singularity), so $|f(z)|\le A$ for large $|z|$, i.e. $m=0$; if $\infty$ is a pole of order $m$, then by cx:pole-characterization.2, $g(w)=G(w)/w^{m}$ with $G$ holomorphic and $G(0)\neq0$, hence $|f(z)|\le A|z|^{m}$ for large $|z|$. In both cases $|h(z)|\le A'+B|z|^{m}$ for large $|z|$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Liouville.2 citation for polynomial growth bound
- **Category:** Logical gap
- **Location:** cx:meromorphic-sphere-rational / Step 3
- **Detail:** Step 3 concludes that $h$ is a polynomial $P$ from the bound $|h(z)|\le A'+B|z|^{m}$, citing \ref{cx:liouville.2}. Liouville's theorem (cx:liouville) states that a bounded entire function is constant; item .2 presumably is the polynomial-growth generalization. If cx:liouville.2 indeed states "entire with $|h(z)|\le C(1+|z|)^{m}$ implies $h$ is a polynomial of degree $\le m$", the citation is fine. But the bound here is $A'+B|z|^{m}$, which is of the form $C(1+|z|)^{m}$ only after adjusting constants; this is acceptable. The concern is whether cx:liouville.2 is actually the polynomial-growth corollary; if cx:liouville only has a bounded version, the citation is improper. Assuming the label table's cx:liouville has item 2 as the growth version, this is acceptable; flagging as medium in case item 2 is only the bounded statement.
- **Proposed fix:** If cx:liouville.2 is not the polynomial-growth statement, replace the citation with an explicit argument: apply the Cauchy estimates to $h$ on $|z|=R$ to get $|h^{(k)}(0)|\le k!\,C(1+R)^{m}/R^{k}\to0$ as $R\to\infty$ for $k>m$, hence $h$ is a polynomial of degree $\le m$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Hypcheck claim that boundedness alone cannot fill a real hole is imprecise
- **Category:** Supplement/remark error
- **Location:** cx:removable-singularity / hypcheck
- **Detail:** The hypcheck says: "有界性だけで（連続性も微分可能性も仮定せずに）一点の穴が埋まることは、実数の関数にはない現象である（$\sin\frac1x$ は有界だが $0$ で連続に延びない）". This is misleading: the real analogue of the removable singularity theorem is false for *holomorphic* (complex-differentiable) functions, but the example $\sin(1/x)$ is not differentiable, so it does not illustrate the failure of a real-differentiable analogue. A real differentiable function on a punctured interval that is bounded need not extend continuously (e.g. $x\sin(1/x)$ is continuous but $x^2\sin(1/x^2)$... actually $x\sin(1/x)$ extends; a better example is $f(x)=x\sin(1/x^2)$ which is differentiable? no). The precise statement is that a bounded *real-analytic* or *smooth* function on a punctured interval does extend, so the phenomenon is not absent in the real case for smooth functions; the genuine contrast is with real-differentiable functions where boundedness does not force removability. The example given ($\sin(1/x)$, merely bounded, not differentiable) does not demonstrate the claimed contrast.
- **Proposed fix:** Replace with: "The contrast is with real differentiability: a bounded function on a punctured interval that is real-differentiable there need not extend differentiably (e.g. $f(x)=x^{2}\sin(1/x^{2})$ for $x\neq0$ is differentiable and bounded near $0$ but $f'$ is unbounded, so $f$ does not extend to a differentiable function at $0$). For complex holomorphic functions, boundedness alone forces removability."
- **Reported:** 2026-10-28 (8ccef3d)
