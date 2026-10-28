# Verification tracker: `05-geometry-topology/02-algebraic-topology/01-homotopy/01-fundamental-group.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/01-homotopy/01-fundamental-group.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] The degree formula in the 'computational viewpoint' supplement is wrong
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement claims $\deg\gamma=\sum_{k=1}^{N}\theta(\gamma(\tfrac{k-1}{N}),\gamma(\tfrac{k}{N}))$ whenever $|s-s'|<\delta\Rightarrow|\gamma(s)-\gamma(s')|<2$ and $N>1/\delta$. But the telescoping product in the proof of the lifting lemma gives $p(\tilde s_{0}+\sum\theta)=F(y)$, i.e. the sum equals $\deg\gamma$ only up to an additive integer; the sum itself lies in $(-N/2,N/2)$ and is not the degree. For example, with $\gamma=\omega_{1}$ and $N=2$ the sum is $\theta(1,-1)+\theta(-1,1)=0\ne1=\deg\gamma$ (the hypothesis $|\gamma(s)-\gamma(s')|<2$ holds for $|s-s'|<1/2$). The subsequent rounding remark inherits the same error.
- **Proposed fix:** Replace the formula by: $\deg\gamma$ is the unique integer congruent to $\sum_{k=1}^{N}\theta(\gamma(\tfrac{k-1}{N}),\gamma(\tfrac{k}{N}))$ modulo $\mathbb{Z}$ (this follows from $p(\tilde s_{0}+\sum\theta)=F(y)$ and $p(a)=p(b)\iff a-b\in\mathbb{Z}$); hence if the error in $\theta$ is less than $1/2$, rounding the sum to the nearest integer gives the correct degree.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] The 'generalization' to compact convex sets is false as stated
- **Category:** Supplement/remark error
- **Location:** supplement after at:brouwer-2
- **Detail:** The supplement says Brouwer's theorem 'generalizes to compact convex sets'. For a nonempty compact convex $K\subset\mathbb{R}^{n}$ this is true, but the statement as written omits nonemptiness (the empty set is compact and convex and admits no fixed point) and, more importantly, it is stated without the finite-dimensional hypothesis, so it reads as if it held for arbitrary compact convex sets (e.g. in infinite-dimensional locally convex spaces), where it is false (a translation on the unit ball of $\ell^{2}$-type spaces has no fixed point); the infinite-dimensional analogue is Schauder's theorem, which requires compactness of the map, not merely of the set.
- **Proposed fix:** State: 'For every nonempty compact convex subset $K\subset\mathbb{R}^{n}$, every continuous self-map of $K$ has a fixed point (transfer via a homeomorphism onto $D^{n}$ or via the retraction onto $D^{n}$). In infinite dimensions the correct analogue is Schauder's theorem: a continuous map from a nonempty compact convex subset of a locally convex space into itself has a fixed point.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] The claim that $\pi_{1}(S^{1})\cong\mathbb{Z}$ is 'the 1-dimensional part' of $K(\mathbb{Z},1)$ is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The text says '$\pi_{1}(S^{1})\cong\mathbb{Z}$ is the 1-dimensional part of the statement that $S^{1}$ is an Eilenberg–MacLane space $K(\mathbb{Z},1)$ (the higher homotopy groups also vanish)'. Being $K(\mathbb{Z},1)$ means $\pi_{1}\cong\mathbb{Z}$ and $\pi_{n}=0$ for $n\ge2$; the vanishing of the higher homotopy groups is not a 'higher-dimensional part' of $\pi_{1}\cong\mathbb{Z}$ but an additional, independent condition (indeed $\pi_{1}\cong\mathbb{Z}$ alone does not force $\pi_{n}=0$). The phrasing suggests the higher vanishing follows from or is part of the $\pi_{1}$ computation.
- **Proposed fix:** Rephrase: '$S^{1}$ is an Eilenberg–MacLane space $K(\mathbb{Z},1)$: besides $\pi_{1}(S^{1})\cong\mathbb{Z}$, its universal cover $\mathbb{R}$ is contractible, which gives $\pi_{n}(S^{1})=0$ for $n\ge2$.'
- **Reported:** 2026-10-28 (8ccef3d)
