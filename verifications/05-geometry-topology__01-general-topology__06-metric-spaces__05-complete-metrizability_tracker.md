# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/05-complete-metrizability.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/05-complete-metrizability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Q is not a continuous image of N
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that $\mathbb{Q}$ is a continuous image of $\N$ (as an example showing that complete metrizability is not preserved by continuous images). But $\N$ is discrete, so every continuous map $\N\to\mathbb{Q}$ has image that is countable and discrete (as a subspace), whereas $\mathbb{Q}$ is not discrete. Hence $\mathbb{Q}$ is not a continuous image of $\N$. The intended example is presumably that $\mathbb{Q}$ is a continuous image of $\N^{\N}$ (the Baire space), which is completely metrizable; this would correctly illustrate failure under continuous images.
- **Proposed fix:** Replace with: 完備距離化可能性は可算直積と $G_{\delta}$ 部分空間で保たれるが、商や連続像では保たれない（$\mathbb{Q}$ はポーランド空間 $\N^{\N}$ の連続像である）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Rationals: complement dense but not G_delta phrasing
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The parenthetical describes $\mathbb{Q}$ as 「穴だらけ」の集合（補集合が稠密でかつ $G_{\delta}$ でない）. This is imprecise/incorrect: $\mathbb{Q}$ itself is not $G_{\delta}$ in $\mathbb{R}$; its complement $\mathbb{R}\setminus\mathbb{Q}$ is dense and *is* $G_{\delta}$. The condition that actually obstructs complete metrizability is that $\mathbb{Q}$ is not $G_{\delta}$ (equivalently, its complement is not $F_{\sigma}$ in the relevant sense), not that the complement is dense and not $G_{\delta}$.
- **Proposed fix:** 有理数のように「穴だらけ」の集合（それ自身が $G_{\delta}$ でない、すなわち可算個の開集合の共通部分として書けない）は、どう描き直しても完備にはならない。
- **Reported:** 2026-10-28 (10fede1)
