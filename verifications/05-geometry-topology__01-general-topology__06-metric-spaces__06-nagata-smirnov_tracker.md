# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/06-nagata-smirnov.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/06-nagata-smirnov.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (lemmas, theorem, proof, problems) is logically sound: the σ-locally-finite lemmas, the construction of the metric, and the hypcheck are correct. The one genuine problem is in the supplement, where the σ-discrete notion used to state Bing's theorem is misdefined (closures pairwise disjoint rather than a discrete family), which misstates the theorem.

## Issues

### ISSUE-0001 [Open] Bing metrization theorem mischaracterized as σ-discrete base
- **Category:** Supplement/remark error
- **Location:** supplement
- **Detail:** The supplement states that strengthening σ-locally finite to σ-discrete (with closures pairwise disjoint) gives the same characterization, attributing this to Bing's metrization theorem. Bing's theorem characterizes metrizable spaces as regular spaces with a σ-discrete base, where σ-discrete means each $\mathcal{B}_{n}$ is a discrete family (each point has a neighborhood meeting at most one member), not that the closures of members are pairwise disjoint. The parenthetical definition given ("各 $\mathcal{B}_{n}$ の元の閉包が互いに交わらない形で局所有限") is not the standard notion of σ-discrete and is not what Bing's theorem uses.
- **Proposed fix:** Replace with: "σ 局所有限を **σ 離散**（各 $\mathcal{B}_{n}$ が離散族、すなわち各点が $\mathcal{B}_{n}$ の高々ひとつの元としか交わらない近傍をもつ）に強めても同じ特徴づけが成り立つ（**ビングの距離化定理**）。"
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** The parenthetical was not a misdefinition. For a locally finite family, 'the closures of the members are pairwise disjoint' is equivalent to being a discrete family: a discrete family has pairwise disjoint closures, and conversely, if x has a neighbourhood W meeting only finitely many members and x lies in at most one of their closures, removing the finitely many other closures from W gives a neighbourhood meeting at most one member. So the theorem was stated correctly. The wording now uses the discrete-family form, with this equivalence proved in the supplement.
