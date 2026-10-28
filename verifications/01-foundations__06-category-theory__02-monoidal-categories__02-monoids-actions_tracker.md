# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/02-monoids-actions.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/02-monoids-actions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Free monoid theorem does not cover free topological monoid
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement claims that \ref{cat:free-monoid-monoidal} gives, among others, the free topological monoid on a topological space. But the theorem requires that $a\square-$ and $-\square a$ preserve countable coproducts. In $(\mathbf{Top},\times,\ast)$ the product functor $X\times-$ does not preserve countable coproducts (disjoint unions) in general, so the hypotheses of the theorem fail and the theorem does not apply to topological spaces. The free topological monoid exists but is not obtained from this theorem.
- **Proposed fix:** Remove the topological example, or replace it with: "$\mathbf{Set}$ での語のモノイド、加群のテンソル代数などがこの定理の適用例である（位相空間の自由位相モノイドは存在するが、$\mathbf{Top}$ では $X\times-$ が余積を保存しないため本定理からは得られない）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Monad algebras are not literally actions of the monoid T
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The supplement says that a monad algebra (\ref{cat:t-algebra}) "corresponds to an action on an object of the monoid $T$ in the category of endofunctors". But an action of the monoid $T$ on an object $a$ in the endofunctor category would be a natural transformation $T\square a\to a$ where $a$ is itself an endofunctor, i.e. a functor $T\circ A\Rightarrow A$ between endofunctors. An Eilenberg–Moore algebra is instead a natural transformation $TA\Rightarrow A$ where $A$ is an object of the base category $\mathbf{C}$, not an endofunctor. These are different notions; the algebra is not an action in the endofunctor category.
- **Proposed fix:** Replace with: "モナドの代数（\ref{cat:t-algebra}）は、モナド $T$ を自己関手の圏のモノイドとみなしたときの、圏 $\mathbf{C}$ の対象への作用に類似する（ただし作用の対象は自己関手の圏の対象ではなく $\mathbf{C}$ の対象であり、厳密には同じ概念ではない）。"
- **Reported:** 2026-10-28 (8ccef3d)
