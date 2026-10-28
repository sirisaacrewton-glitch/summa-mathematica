# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/04-local-compactness.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/04-local-compactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text and proofs are correct. The only genuine problems are in the supplement: the claim that compact subsets of Q have empty interior is false (though the non-Hausdorff conclusion is right), and the 'smallest/largest compactification' remark is overstated. Both are supplement-level errors of kind 5.

## Issues

### ISSUE-0001 [Open] Compact subsets of Q need not have empty interior
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that every compact subset of $\mathbb{Q}$ has empty interior, and uses this to argue that $\infty$ cannot be separated from points. This is false: $\{0\}$ is compact and has nonempty interior in $\mathbb{Q}$ (e.g. $\{0\}=(-1/2,1/2)\cap\mathbb{Q}$). The conclusion that $\mathbb{Q}^{*}$ is not Hausdorff is correct, but the stated reason is wrong. The correct reason: if $\infty$ had a compact neighbourhood, then some $\mathbb{Q}\setminus K$ with $K$ compact would be a neighbourhood of $\infty$ contained in a compact set, forcing $\mathbb{Q}$ to be locally compact, which it is not (as the example on the page shows).
- **Proposed fix:** Replace with: 「たとえば $X=\mathbb{Q}$ では $\mathbb{Q}$ は局所コンパクトでないので、$\infty$ はコンパクトな近傍をもたず、$\infty$ と点を分離できない（$\mathbb{Q}$ のコンパクト集合は一般に空でない内部をもちうる、例えば $\{0\}$ はコンパクトかつ開、ということに注意）。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] One-point compactification is not always the 'smallest' compactification
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement states that the one-point compactification is the 'smallest' compactification and $\beta X$ the 'largest'. This is imprecise/false in general: for a locally compact Hausdorff space that is already compact, the one-point compactification adds an isolated point and is not a smallest compactification in the usual ordering (the space itself is a compactification). Even for non-compact $X$, 'smallest' requires a precise ordering of compactifications, and the one-point compactification is minimal only among those with a single-point remainder, not among all compactifications in general (e.g. $\beta X$ can be smaller in some orderings). The claim as stated is overstated.
- **Proposed fix:** Replace with: 「一点コンパクト化は剰余が一点であるコンパクト化のうちで（同相を除き）唯一のものであり、ストーン–チェックのコンパクト化 $\beta X$ は $X$ が擬コンパクトでない限り剰余が大きい。一般にコンパクト化の間の『大小』は剰余の包含で定まるとは限らない。」
- **Reported:** 2026-10-28 (8ccef3d)
