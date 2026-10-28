# Verification tracker: `04-analysis/02-complex-analysis/01-basics/05-singularities.html`

<!-- source: 04-analysis/02-complex-analysis/01-basics/05-singularities.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Casorati–Weierstrass applied to e^z and sin z at infinity
- **Category:** Supplement/remark error
- **Location:** supplement (リウヴィルの定理の言い換え) in cx:entire-at-infinity
- **Detail:** The supplement claims that since $e^{z}$ and $\sin z$ have an essential singularity at $\infty$, the Casorati–Weierstrass theorem implies that their values on $|z|>R$ are dense in $\C$. But the Casorati–Weierstrass theorem (cx:casorati-weierstrass) is stated and proved only for an isolated singularity $a\in\C$ of a function holomorphic on a punctured disk $D^{*}(a,\delta)$; it is not established for the point at infinity. Moreover the claim is literally false for $e^{z}$: on $|z|>R$ the function $e^{z}$ omits the value $0$, and more importantly $e^{z}$ never takes values with $|w|\le e^{-R}$ when $\Re z<-R$... in fact $e^{z}$ on $|z|>R$ does not have dense image in the region $\{|w|<e^{-R}\}$ intersected appropriately; concretely $e^{z}\neq0$ and near $z$ with $\Re z\to-\infty$ the modulus tends to $0$, so $0$ is a limit point but the image is not all-dense in the naive sense claimed without qualification. The precise correct statement (which is true) is that the image is dense in $\C$; however this requires the Casorati–Weierstrass theorem at $\infty$, which is not proved on the page. The appeal is thus to an unproved version.
- **Proposed fix:** Either restrict the remark to the removable case, or add the missing justification: "For $\infty$ the same argument applies after the change of variable $w=1/z$: $g(w)=f(1/w)$ has an essential singularity at $w=0$, so by \ref{cx:casorati-weierstrass} $g(D^{*}(0,1/R))$ is dense in $\C$, hence $f(\{|z|>R\})$ is dense in $\C$."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Picard great theorem attribution in example e^{1/z}
- **Category:** Supplement/remark error
- **Location:** example (f(z)=e^{1/z}) after cx:casorati-weierstrass
- **Detail:** The example states that 'more strongly than Casorati–Weierstrass, a function takes every value with at most one exception infinitely often near an essential singularity (Picard's great theorem)'. This is a correct statement of Picard's great theorem, but the example only verifies the stronger property for the specific function $e^{1/z}$ (each $w\neq0$ is attained, and attained infinitely often since solutions $\zeta$ can be taken with arbitrarily large modulus). The sentence '一般に成り立つ' (holds in general) is a genuine theorem but is stated without proof and without a citation; it is not derived from anything on the page. Since it is flagged as 未収録 (not included), it functions as an unsupported stated fact.
- **Proposed fix:** Attribute and qualify: "This is a special case of Picard's great theorem (not proved here): near an essential singularity a holomorphic function assumes every complex value with at most one exception, infinitely often." Keep it explicitly as an unproved external theorem rather than a consequence of the page.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Step 3 of cx:meromorphic-sphere-rational uses Liouville.2 without verifying polynomial growth hypothesis
- **Category:** Logical gap
- **Location:** cx:meromorphic-sphere-rational / Step 3
- **Detail:** Step 3 concludes that $h$ is a polynomial from the bound $|h(z)|\le A'+B|z|^{m}$ by citing \ref{cx:liouville.2}. Liouville's theorem as usually stated (cx:liouville) says a bounded entire function is constant; the 'generalized Liouville' (entire function of polynomial growth of order $m$ is a polynomial of degree $\le m$) is item 2 of that theorem. The citation to item .2 is presumably correct if cx:liouville indeed contains that statement, but the text does not verify that $h$ is entire before applying it — it says '$h$ extends to an entire function' in Step 2, which is fine. The real gap: the bound $|h(z)|\le A'+B|z|^{m}$ is only asserted for large $|z|$ with the parenthetical '小さい |z| では連続性から有界', which is acceptable. However, the exponent $m$ used is the order of the pole of $f$ at $\infty$, and the text writes $|f(z)|\le A|z|^{m}$ citing \ref{cx:pole-characterization.2} applied to $g(w)=f(1/w)$; this gives $|f(z)|\le A|z|^{m}$ only in the pole case, while in the removable case one needs $m=0$ and boundedness, which is not separated. The argument should explicitly treat the removable case (then $f$ bounded near $\infty$, so $h$ bounded, Liouville gives constant).
- **Proposed fix:** Split the cases: if $\infty$ is removable, then $f$ is bounded on $\{|z|>R\}$ and $h$ is bounded entire, so $h$ is constant by \ref{cx:liouville}; if $\infty$ is a pole of order $m$, then $|f(z)|\le A|z|^{m}$ for large $|z|$ by \ref{cx:pole-characterization.2}, hence $|h(z)|\le A'|z|^{m}$ for large $|z|$ and $h$ is a polynomial of degree $\le m$ by \ref{cx:liouville.2}.
- **Reported:** 2026-10-28 (10fede1)
