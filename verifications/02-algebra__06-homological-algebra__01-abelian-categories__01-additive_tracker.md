# Verification tracker: `02-algebra/06-homological-algebra/01-abelian-categories/01-additive.html`

<!-- source: 02-algebra/06-homological-algebra/01-abelian-categories/01-additive.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: definitions, the Galois-connection proposition, canonical factorization, biproduct theorem, and the sum-from-biproduct proposition are all sound, and the proofs check out. The only genuine concern is a side comment in the supplement that overstates the kernel/cokernel Galois connection as literally an instance of the poset Galois connection cited from the category-theory page; this is imprecise but not central. No logical gaps, missing hypotheses, or improper links were found in the main results.

## Issues

### ISSUE-0001 [Open] Galois connection claim about kernel/cokernel is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says \ref{ha:ker-coker-galois} is an instance of the Galois connection of \ref{cat:prob-galois-connection}. But the proposition's '≤' is the relation 'g factors through f' on arrows with a fixed target (or fixed source), which is a preorder on a hom-set, not the usual poset-of-subobjects Galois connection between adjoint functors. Calling it 'an instance of the adjunction Galois connection' is an overstatement: the two '≤' relations live on different kinds of objects (arrows vs. subobjects), and the cited problem is about adjunctions between posets, not about factorization preorders on hom-sets. This is a side comment (kind 5) that is imprecise/overstated.
- **Proposed fix:** Replace with: 'The equivalence $f\le\ker u\iff uf=0\iff\mathrm{coker}\,f\le u$ is an order-reversing adjunction (a Galois connection in the broad sense) between the preorder of arrows into $c$ and the preorder of arrows out of $c$, where $g\le f$ means $g$ factors through $f$. It is analogous to, but not literally an instance of, the poset Galois connection of \ref{cat:prob-galois-connection}.'
- **Reported:** 2026-10-28 (8ccef3d)
