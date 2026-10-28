# Verification tracker: `05-geometry-topology/01-general-topology/08-counterexamples/01-niemytzki-plane.html`

<!-- source: 05-geometry-topology/01-general-topology/08-counterexamples/01-niemytzki-plane.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Sorgenfrey plane is not separable
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の例
- **Detail:** The supplement claims the Sorgenfrey plane is separable and that Jones' lemma applies to it. The Sorgenfrey line is separable (rationals are dense), but the Sorgenfrey plane is NOT separable: the antidiagonal $\{(x,-x)\}$ is an uncountable closed discrete subspace, and any dense set must meet each basic open set $[x,x+1)\times[-x,-x+1)$, which are pairwise disjoint, so a dense set has size at least continuum. Hence Jones' lemma (which requires a dense subset) cannot be applied to conclude non-normality of the Sorgenfrey plane. The standard proof of non-normality of the Sorgenfrey plane uses the antidiagonal and a Baire category argument, not Jones' lemma.
- **Proposed fix:** Replace with: ゾルゲンフライ平面（\ref{top:page-order-topology} のゾルゲンフライ直線の平方）は正規でない。ただしゾルゲンフライ平面は可分でない（反対角線 $\{(x,-x)\}$ が非可算閉離散集合で、各点の基本近傍は互いに交わらない）ので、ジョーンズの補題は直接には使えず、非正規性は反対角線とベールのカテゴリー定理による別の議論で示される。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Subspace with countable boundary need not be normal
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that in a subspace obtained by keeping only rational points of the axis, the boundary becomes countable and 'Jones' lemma yields no contradiction'. This is misleading: Jones' lemma only gives a necessary condition, so the absence of a contradiction does not establish normality. Moreover the claim that such a subspace is normal is not justified (and is not what the lemma shows). The statement as written suggests normality follows, which is unsupported.
- **Proposed fix:** Replace with: 「可分」を外すとジョーンズの補題による矛盾は導けなくなる。たとえば境界線を有理点だけに制限した部分空間では境界線が可算になり、ジョーンズの補題からは矛盾が出ない（これは正規性の十分条件ではないことに注意）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Normal Moore space conjecture attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement states that whether normality holds for subspaces with $|L|=\aleph_{1}<2^{\aleph_{0}}$ 'depends on the continuum hypothesis or Martin's axiom (normal Moore space conjecture)'. This conflates distinct statements. The normal Moore space conjecture (every normal Moore space is metrizable) is independent of ZFC and its resolution involves large cardinal axioms (e.g. PMEA / measurable cardinals), not simply CH or MA. Also the Niemytzki plane is not a Moore space in the usual sense (it is not regular-developable in the required way / it is not metrizable but the relevant conjecture concerns normal Moore spaces). The attribution is imprecise and overstated.
- **Proposed fix:** Replace with: 集合論的には、この種の空間の正規性や距離化可能性は集合論の公理系に依存することがあり、たとえば「正規ムーア空間は距離化可能か」という正規ムーア空間予想は ZFC から独立で、大きな基数公理のもとで解決される（範囲外）。
- **Reported:** 2026-10-28 (8ccef3d)
