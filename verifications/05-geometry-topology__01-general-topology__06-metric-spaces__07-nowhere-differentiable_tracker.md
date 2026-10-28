# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/07-nowhere-differentiable.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/07-nowhere-differentiable.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Saks result misstated: one-sided derivatives
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that the set of continuous functions for which no one-sided derivative (even infinite) exists at any point is not comeager (attributed to Saks). This is a misstatement. The classical Saks theorem concerns the set of continuous functions that have no finite one-sided derivative at any point (or, in the standard formulation, functions for which at every point at least one of the four Dini derivatives is infinite), and that set IS residual. The claim as written ("片側微分係数が（無限大を含めて）存在しない" is not comeager) is at best imprecise and at worst false, and the attribution to Saks is not supported in this form.
- **Proposed fix:** Replace with: "一方、どの点でも有限な片側微分係数をもたない連続関数の集合も第一類集合の補集合であることが知られている（サックスの定理）。" (i.e. the residual set consists of functions having no finite one-sided derivative at any point; do not claim the infinite-derivative version is non-comeager).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Weierstrass function condition ab>1+3π/2
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states the Weierstrass function $\sum a^{k}\cos(b^{k}\pi x)$ is nowhere differentiable when $0<a<1$, $b$ odd, and $ab>1+3\pi/2$. The classical sufficient condition (Weierstrass; sharpened by Hardy) is $0<a<1$, $b$ an odd integer with $ab>1+3\pi/2$ — this is correct as a sufficient condition, but the phrasing "$b$ が奇数で" omits "integer" and, more importantly, presents it as if it were the exact threshold. Hardy showed nowhere differentiability holds for $ab\ge1$ (with $b$ integer, $a<1$), so the stated condition is sufficient but the text implies it is the defining condition. This is an overstatement of the hypothesis as necessary.
- **Proposed fix:** State it as a sufficient condition: "$0<a<1$, $b$ を奇数（整数）で $ab>1+3\pi/2$ とすると至るところ微分不可能である（十分条件；実際には $ab\ge1$ でも成り立つことがハーディにより示されている）。"
- **Reported:** 2026-10-28 (8ccef3d)
