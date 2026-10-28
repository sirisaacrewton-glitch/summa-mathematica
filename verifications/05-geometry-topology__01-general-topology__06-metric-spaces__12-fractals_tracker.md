# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/12-fractals.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/12-fractals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (Propositions 12.1, 12.2, Hutchinson's theorem and its proof, the examples, and the problems/solutions) are logically sound and correctly cite the hyperspace results. The genuine problems are confined to the side remarks: the hypcheck comment on countably many contractions misdescribes when a closure correction is actually needed (it is needed only when sup c_i = 1, not when sup c_i < 1), and the supplement's claim that ⋂_n F^n(X) is an 'invariant set' for a merely continuous F overstates what follows (only F(⋂) ⊆ ⋂ holds in general).

## Issues

### ISSUE-0001 [Open] Countable IFS remark: closure needed even when sup of Lipschitz constants < 1 is misleading
- **Category:** Supplement/remark error
- **Location:** hypcheck / 有限個
- **Detail:** The hypcheck says that for countably many contractions, 'even if the supremum of the Lipschitz constants is < 1, the union may fail to be closed, so a closure correction is needed'. This is imprecise/misleading: if the Lipschitz constants are bounded by some c<1 (i.e. sup c_i < 1), then the union map is still a contraction on K(X) and the Hutchinson theorem holds verbatim (the max is replaced by sup, and the union of compact sets is compact, hence closed). The closure correction is needed only when sup c_i = 1 (e.g. c_i → 1), where the map need not be a contraction. As stated, the remark suggests a failure in a case where the conclusion actually holds.
- **Proposed fix:** Replace with: '有限個：\ref{top:union-map.1} で最大値をとるのに使った。可算個の縮小写像でも、リプシッツ定数が一様に $c<1$ で抑えられていれば（$\sup_{i}c_{i}<1$）、同様に $F$ は縮小写像となり結論はそのまま成り立つ。$\sup_{i}c_{i}=1$ のときは $F$ が縮小写像にならず、閉包をとる修正が必要になる（ここでは扱わない）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Compact X remark: fixed point of F need not be unique but claim about intersection is fine; however 'invariant set' wording
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states: if X is compact, then from F(X)⊆X the set ⋂_n F^n(X) is an invariant set of F, but uniqueness fails. For a merely continuous F, ⋂_n F^n(X) is compact and nonempty, but it need not satisfy F(⋂_n F^n(X)) = ⋂_n F^n(X) in general (only F(⋂) ⊆ ⋂ holds without extra assumptions such as F being a contraction or the sequence stabilizing). Calling it 'an invariant set of F' (F の不変集合) overstates the conclusion: one only gets F(⋂_n F^n(X)) ⊆ ⋂_n F^n(X) in general.
- **Proposed fix:** Replace with: 'X がコンパクトで F が連続なら、F(X)⊆X から ⋂_{n}F^{n}(X) は空でないコンパクト集合で F(⋂_{n}F^{n}(X))⊆⋂_{n}F^{n}(X) を満たすが、等号は一般には成り立たず、F(A)=A を満たすコンパクト集合の一意性もない。'
- **Reported:** 2026-10-28 (8ccef3d)
