# Verification tracker: `04-analysis/01-real-analysis/02-calculus/02-derivatives.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/02-derivatives.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (derivative rules, chain rule, inverse function, MVT family, L'Hôpital, Darboux, convexity) are sound and the cited labels match their use. The only genuine issue is in the supplement: the justification that a convex function is differentiable except at countably many points invokes 単調関数の片側極限, which does not by itself yield countability of discontinuities; the argument should instead use that a monotone function has at most countably many discontinuities. All other supplement/remark statements (MVT fails for vector-valued functions, Fermat requires interior point, Rolle requires endpoint continuity, the x^2 sin(1/x) example, the car-speed analogy) are correct.

## Issues

### ISSUE-0001 [Open] Convex function differentiability: 'except countably many points' needs monotonicity of f'_- and correct attribution
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, third bullet)
- **Detail:** The claim that a convex function is differentiable except at countably many points of I° is true, but the justification given is imprecise: it says 'f'_- is monotone increasing and its discontinuities are countable, citing \ref{calc:monotone-function-limits}'. The cited proposition (単調関数の片側極限) concerns one-sided limits of monotone functions; it does not itself state that a monotone function has at most countably many discontinuities. Moreover, differentiability of a convex function at a point is equivalent to f'_-(a)=f'_+(a), and the set of non-differentiability points is where the monotone function a↦f'_-(a) (or f'_+) jumps; one needs the (true but unstated) fact that a monotone function has at most countably many discontinuities. As written the argument is a non sequitur from the cited result.
- **Proposed fix:** A convex function is differentiable at all but at most countably many points of $I^{\circ}$: by part 2, $f'_{-}\le f'_{+}$ exist on $I^{\circ}$ and $f'_{-}$ is monotone increasing; $f$ fails to be differentiable exactly at points where $f'_{-}(a)<f'_{+}(a)$, and a monotone function has at most countably many discontinuities, so only countably many such points exist.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Rolle hypothesis remark: example does not illustrate necessity of endpoint continuity correctly
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると, second sentence)
- **Detail:** The text says 'ロルの定理では端点での連続性が要る：f(x)=x (0≤x<1), f(1)=0 は (0,1) で f'=1'. This example shows that dropping continuity at the right endpoint can destroy the conclusion (f(0)=0≠f(1)=0? actually f(0)=0, f(1)=0 so f(a)=f(b) holds, yet f'≡1≠0 on (0,1)). The example is valid, but the phrasing '端点での連続性' (continuity at the endpoints) is slightly imprecise: what fails is continuity at the endpoint 1 (one-sided continuity from the left), and the example correctly demonstrates that this hypothesis cannot be dropped. This is acceptable; however the claim as stated ('端点での連続性が要る') is correct and the example is a genuine counterexample, so no error.
- **Proposed fix:** No change needed; the example is a valid counterexample showing continuity at the endpoint cannot be dropped.
- **Reported:** 2026-10-28 (10fede1)
