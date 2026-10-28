# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/03-vaught-pairs.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/03-vaught-pairs.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Two-cardinal transfer claims in supplement are imprecise/incorrect
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that the transfer from $(\aleph_{2},\aleph_{1})$ to $(\aleph_{1},\aleph_{0})$ is provable in ZFC, and that the transfer from $(\aleph_{1},\aleph_{0})$ to $(\aleph_{2},\aleph_{1})$ holds under GCH (Chang's theorem). Both claims are problematic. The downward transfer $(\aleph_{2},\aleph_{1})\to(\aleph_{1},\aleph_{0})$ is not a theorem of ZFC in general; the standard two-cardinal transfer results (Chang's two-cardinal theorem and its variants) require hypotheses such as $\mathrm{GCH}$ or are stated for specific configurations, and the upward transfer $(\aleph_{1},\aleph_{0})\to(\aleph_{2},\aleph_{1})$ is exactly the kind of statement that is independent of ZFC (it fails under e.g. suitable cardinal arithmetic assumptions). Attributing the upward direction to 'Chang's theorem under GCH' while calling the downward direction a ZFC theorem reverses the actual strength of these results and is stated more strongly than the literature supports.
- **Proposed fix:** Replace with: 'The Vaught two-cardinal theorem only asserts the transfer to $(\aleph_{1},\aleph_{0})$. General two-cardinal transfer principles (e.g. from $(\kappa,\lambda)$ to $(\kappa',\lambda')$) are independent of ZFC; for instance, Chang's two-cardinal theorem gives transfers such as $(\aleph_{2},\aleph_{1})\to(\aleph_{1},\aleph_{0})$ only under additional hypotheses like $\mathrm{GCH}$, and the upward transfer $(\aleph_{1},\aleph_{0})\to(\aleph_{2},\aleph_{1})$ is not provable in ZFC (it can fail under suitable cardinal arithmetic). These are not verified here.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Homogeneity vs saturation remark overstated
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The sentence '均質性は飽和性を弱めたもので、「実現される型」を固定すれば一意性が回復する' is imprecise. Homogeneity (as defined here, $\aleph_{0}$-homogeneity) is not simply 'weaker than saturation' in a way that yields uniqueness by fixing realized types: uniqueness of countable homogeneous models requires that they realize the same types (as in \ref{model:homogeneous-iso}), and saturation is a different notion (realizing all types over finite/small parameter sets). The phrasing suggests a general principle that homogeneity plus a fixed type-set gives uniqueness, which is only true under the specific countability and same-types hypotheses of the cited theorem.
- **Proposed fix:** Replace with: 'Homogeneity is a weaker requirement than saturation; for countable models, uniqueness is recovered only when the two homogeneous models realize exactly the same types (\ref{model:homogeneous-iso}), which is the analogue of the uniqueness of the countable saturated model.'
- **Reported:** 2026-10-28 (10fede1)
