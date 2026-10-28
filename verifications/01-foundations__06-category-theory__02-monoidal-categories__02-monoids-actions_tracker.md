# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/02-monoids-actions.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/02-monoids-actions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Free topological monoid not covered by the theorem
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement claims that \ref{cat:free-monoid-monoidal} gives, among others, the free topological monoid on a topological space. But the theorem requires that $a\square-$ and $-\square a$ preserve countable coproducts. In $(\mathbf{Top},\times,\ast)$ the product functor $X\times-$ does not preserve countable coproducts (disjoint unions) in general: $X\times\coprod_{n}Y_{n}\cong\coprod_{n}X\times Y_{n}$ holds for the underlying sets, but the topology on the left is finer than the coproduct topology on the right (the coproduct topology is not the product topology unless the $Y_{n}$ are suitably discrete/compact or $X$ is locally compact). Hence the hypothesis of the theorem fails and the free topological monoid is not obtained from this theorem as stated.
- **Proposed fix:** Remove the topological example, or restrict it: 'In $(\mathbf{Top},\times,\ast)$ the product does not preserve countable coproducts in general, so the theorem does not directly give the free topological monoid; one needs a different construction (e.g. the free monoid on the underlying set with the quotient/final topology).' The examples genuinely covered are $\mathbf{Set}$ (word monoid) and $K\text{-}\mathbf{Mod}$ (tensor algebra), where $a\otimes-$ preserves coproducts.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Monad algebras described as an action of a monoid in the functor category
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The supplement says that a monad algebra (\ref{cat:t-algebra}) 'is an action of the monoid $T$ in the functor category on an object'. This is imprecise: an action of the monoid $T$ (in $[\mathbf{C},\mathbf{C}]$ under composition) on an object of the functor category would be a functor $F\colon\mathbf{C}\to\mathbf{C}$ with $T\circ F\Rightarrow F$; but a $T$-algebra is an object $A\in\mathbf{C}$ with a morphism $TA\to A$, i.e. an action of $T$ on an object of $\mathbf{C}$, not on an object of the functor category. The correct statement is that $T$-algebras are the algebras for the monad $T$, equivalently the actions of the monoid $T$ (in the endofunctor category) on objects of $\mathbf{C}$ viewed through the Yoneda/underlying picture, not 'actions on an object of the functor category'.
- **Proposed fix:** Replace with: 'A monad $T$ is a monoid in the monoidal category of endofunctors of $\mathbf{C}$ (under composition), and a $T$-algebra $(A, h\colon TA\to A)$ is precisely a left action of this monoid $T$ on the object $A\in\mathbf{C}$ (satisfying the unit and associativity laws).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Tensor product of modules over a monoid requires more than existence of coequalizers
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The supplement states that 'if coequalizers exist', the tensor product $b\square_{c}a$ over a monoid $c$ can be formed as the coequalizer of $b\square(c\square a)\rightrightarrows b\square a$. This is not sufficient in general: one also needs the tensor $\square$ to preserve the relevant coequalizers (e.g. $b\square-$ and $-\square a$ preserving coequalizers of the given pair), or the monoidal structure to be closed, so that the coequalizer computes the correct universal object. Without such preservation the coequalizer need not represent the intended universal property. (In $\mathbf{Ab}$ with $\otimes$ this holds since $\otimes$ preserves colimits, but the general claim as stated is too strong.)
- **Proposed fix:** Add the preservation hypothesis: 'If $\mathbf{B}$ has coequalizers and the functors $b\square-$ and $-\square a$ preserve the relevant coequalizers (e.g. if $\square$ is closed / cocontinuous in each variable), then $b\square_{c}a$ is the coequalizer of $b\square(c\square a)\rightrightarrows b\square a$, generalizing $\otimes_{R}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that $a\otimes-$ preserves coproducts because it has a right adjoint
- **Category:** Unsupported fact
- **Location:** example (after cat:free-monoid-monoidal), item 2
- **Detail:** The example says '$a\otimes-$ has right adjoint $\mathrm{Hom}_{K}(a,-)$, hence preserves coproducts'. This is correct for $K$-modules (tensor-hom adjunction), so the mathematical content is fine; however the parenthetical is stated as a bare justification without noting that $\mathrm{Hom}_{K}(a,-)$ is the right adjoint and that left adjoints preserve colimits. This is not an error. (No issue.)
- **Proposed fix:** No change needed; optionally cite the adjoint functor/colimit preservation result explicitly.
- **Reported:** 2026-10-28 (10fede1)
