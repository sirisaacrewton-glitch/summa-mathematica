# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/06-nagata-smirnov.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/06-nagata-smirnov.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its supporting lemmas (open sets are F_σ, normality, cozero functions) are correctly proved and the citations match. The 1⇒2 direction correctly uses Stone's theorem to get locally finite open refinements of the 1/n-ball covers and verifies the union is a base. The 2⇒1 construction with the sup metric is sound, and the hypcheck comments are accurate. The only genuine issues are in the supplement: the description of σ-discrete in Bing's theorem is nonstandard/imprecise, and the Smirnov statement, while essentially correct, could be phrased more precisely. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Bing metrization theorem mischaracterized as σ-discrete base
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that strengthening σ-locally finite to σ-discrete (with closures of members of each B_n pairwise disjoint) gives the same characterization, attributing this to Bing's metrization theorem. Bing's theorem characterizes metrizable spaces as regular (T_3) spaces with a σ-discrete base, where σ-discrete means each B_n is a discrete family (each point has a neighborhood meeting at most one member), not that the closures of members are pairwise disjoint. The parenthetical definition given is not the standard notion of σ-discrete and is strictly stronger/different; the characterization as stated is imprecise.
- **Proposed fix:** σ 局所有限を **σ 離散**（各 $\mathcal{B}_{n}$ が離散族、すなわち各点が $\mathcal{B}_{n}$ の高々1個の元としか交わらない近傍をもつ）に強めても同じ特徴づけが成り立つ（**ビングの距離化定理**）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Smirnov metrization theorem statement imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says a paracompact Hausdorff space that is locally metrizable is metrizable, attributing this to Smirnov's theorem. Smirnov's theorem states that a locally metrizable space is metrizable iff it is paracompact (equivalently, a paracompact locally metrizable space is metrizable). The statement as given is essentially correct but the attribution and phrasing 'locally metrizable' should be precise: local metrizability plus paracompactness (Hausdorff follows). This is borderline; the main concern is that 'locally metrizable' must mean every point has a metrizable neighborhood, which is fine. Not reporting as error beyond noting precision.
- **Proposed fix:** パラコンパクトかつ局所距離化可能な空間は距離化可能である（スミルノフの定理）。
- **Reported:** 2026-10-28 (10fede1)
