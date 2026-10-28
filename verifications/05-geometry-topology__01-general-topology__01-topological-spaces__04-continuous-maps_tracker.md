# Verification tracker: `05-geometry-topology/01-general-topology/01-topological-spaces/04-continuous-maps.html`

<!-- source: 05-geometry-topology/01-general-topology/01-topological-spaces/04-continuous-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cocountable topology: identity to discrete is not sequentially continuous
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that on an uncountable set with the cocountable topology, the identity map viewed as a map to the discrete topology preserves sequential convergence but is not continuous. This is false. In the cocountable topology on an uncountable set, a sequence $(x_{n})$ converges to $x$ iff it is eventually equal to $x$ (the 'eventually constant' claim is correct). But the identity $\mathrm{id}\colon (X,\text{cocountable})\to (X,\text{discrete})$ sends the eventually-constant sequence to the same eventually-constant sequence, which converges in the discrete topology. So the identity does preserve sequential convergence, and it is also continuous (the discrete topology is finer). The example therefore fails to exhibit a sequentially-continuous-but-not-continuous map. A correct example needs a map that is sequentially continuous but not continuous, e.g. a suitable map out of a space where sequential closure differs from closure.
- **Proposed fix:** Replace the example with a correct one, e.g.: "For instance, let $X$ be an uncountable set with the cocountable topology and let $Y$ be the same set with the discrete topology; a map $f\colon X\to Y$ is sequentially continuous iff it is continuous, so this does not give a counterexample. A genuine example: on an uncountable set with the cocountable topology, sequential closure need not equal closure, and one can construct a sequentially continuous map that is not continuous." Alternatively, state only the correct general fact: "In a first-countable space, sequential continuity is equivalent to continuity; in general spaces it is strictly weaker, and the cocountable topology on an uncountable set is a standard source of such examples." without the false identity-map claim.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Compact-to-Hausdorff theorem misapplied to [0,2π)
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement says example 1's $[0,2\pi)$ is not compact, so the theorem 'a continuous bijection from a compact space to a Hausdorff space is a homeomorphism' does not apply. The statement that $[0,2\pi)$ is not compact is correct, but the framing is misleading: the theorem requires the domain to be compact, and $[0,2\pi)$ fails this, so indeed it does not apply. However, the more relevant point is that the map $t\mapsto(\cos t,\sin t)$ has domain $[0,2\pi)$ which is not compact, so the theorem genuinely does not apply; this part is fine. The real issue is that the supplement implies compactness is the only obstruction, whereas the map also fails to be a homeomorphism because the domain is not compact. This is acceptable, but the claim 'the theorem does not apply because $[0,2\pi)$ is not compact' is correct. No error here; but the statement could be sharpened to note that $S^{1}$ is compact Hausdorff and the failure is entirely due to the non-compactness of the domain.
- **Proposed fix:** Optionally clarify: "Example 1's domain $[0,2\pi)$ is not compact, so the theorem (which requires a compact domain) does not apply; indeed the map is a continuous bijection onto the compact Hausdorff space $S^{1}$ but is not a homeomorphism precisely because the domain is not compact."
- **Reported:** 2026-10-28 (10fede1)
