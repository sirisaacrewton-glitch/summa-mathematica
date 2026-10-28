# Verification tracker: `01-foundations/06-category-theory/03-monads/01-monads-algebras.html`

<!-- source: 01-foundations/06-category-theory/03-monads/01-monads-algebras.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Eilenberg–Moore is terminal, not initial, among adjunctions inducing T
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says \ref{cat:comparison-functor} shows that $\mathbf{X}^{T}$ is the **terminal** (終) adjunction among adjunctions inducing $T$, and that the Kleisli category is the dual 'initial' (始) one. This is backwards. The comparison functor goes $K\colon\mathbf{A}\to\mathbf{X}^{T}$ with $G^{T}K=G$, $KF=F^{T}$; i.e. every adjunction inducing $T$ maps *into* the Eilenberg–Moore category, so Eilenberg–Moore is the **initial** (or 'free'/universal) object in the category of adjunctions inducing $T$ (any such adjunction factors uniquely through it). The Kleisli category, by contrast, receives a unique comparison functor from it and is the **terminal** one. The text has the two words 終 and 始 swapped.
- **Proposed fix:** \ref{cat:comparison-functor} は「$\mathbf{X}^{T}$ は $T$ を定める随伴のうち**始**のもの（任意のそのような随伴が一意に $\mathbf{X}^{T}$ を経由する）」を言う。対になる「終」のものがクライスリ圏（\ref{cat:kleisli-category}）で、$T$ を定める随伴は、クライスリ圏とアイレンバーグ–ムーア圏の間に並ぶ。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Closure operators on a poset need not be idempotent unless the poset is a partial order
- **Category:** Supplement/remark error
- **Location:** example / item 4 (前順序の閉包作用素)
- **Detail:** The example states that a monad on a preorder $P$ is a monotone $T$ with $x\le Tx$ and $TTx\le Tx$, and then claims 'since $x\le Tx$ gives $Tx\le TTx$, if $P$ is a partial order then $TTx=Tx$: a monad is nothing but a closure operator.' The reasoning is fine for a partial order, but the surrounding framing calls these 'closure operators' and the parenthetical examples (topological closure, subgroup generation) are genuine closure operators only because those posets are partial orders. The statement as written is acceptable for partial orders, but the initial sentence 'a monad on a preorder is the same as a monotone map with $x\le Tx$, $TTx\le Tx$' is correct; the only imprecision is that the term 閉包作用素 is applied to the preorder case where idempotency ($TTx=Tx$) need not hold. This is a minor overstatement of terminology rather than a false claim, so confidence is medium.
- **Proposed fix:** 前順序では $x\le Tx$ と $TTx\le Tx$ を満たす単調写像がモナドに対応する。$P$ が半順序のときは $x\le Tx$ から $Tx\le TTx$ も従うので $TTx=Tx$ となり、モナドは**閉包作用素**にほかならない（例：位相空間の部分集合の閉包、部分群の生成）。前順序一般では $TTx=Tx$ は必ずしも成り立たない。
- **Reported:** 2026-10-28 (8ccef3d)
