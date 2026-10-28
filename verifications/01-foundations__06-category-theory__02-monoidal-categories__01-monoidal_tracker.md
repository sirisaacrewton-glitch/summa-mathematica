# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/01-monoidal.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/01-monoidal.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Isbell argument: wrong conclusion from the two projections
- **Category:** Supplement/remark error
- **Location:** remark 同一視はできない（イズベルの議論）
- **Detail:** The remark derives from the first projection that $f = f\times g$, and then says 'similarly with the second projection $f\times g = g$', concluding all $f,g$ are equal. But composing with the second projection $p_{2}\colon D\times D\to D$ gives $g\circ p_{2} = (f\times g)\circ p_{2}$, i.e. $g = g$ (or $f\times g = g$ only if one uses $p_2$ on the left factor, which is not what the argument supports). The correct derivation of a contradiction is: from $f\circ p_{1} = (f\times g)\circ p_{1} = f\circ p_{1}$ nothing new; the actual contradiction comes from $f\times g = f$ (first projection) together with $f\times g = g$ obtained by using the *first* projection but swapping roles, or more cleanly: $f\times g = f$ and $f\times g = g$ both follow by applying the same first-projection argument to $f$ and to $g$ respectively, giving $f = g$ for all $f,g$, which is the contradiction. As written, the step 'similarly with the second projection $f\times g = g$' is not justified: the second projection yields $g = g$, not $f\times g = g$.
- **Proposed fix:** Replace the last part with: 'Composing with the first projection $p_{1}\colon D\times D\to D$ gives $f\circ p_{1} = (f\times g)\circ p_{1}$, and since $p_{1}$ is an epimorphism (surjective) we get $f = f\times g$. Applying the same argument with $f$ replaced by $g$ (or composing with $p_{2}$ and using that $p_{2}$ is also epic together with $f\times g = f$) gives $g = f\times g$. Hence $f = g$ for all $f,g\colon D\to D$, a contradiction.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Symmetric monoidal claim about 'same permutation' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that in a symmetric monoidal category the correct statement is 'the diagram commutes if the two paths give the same permutation'. This is imprecise: the coherence theorem for symmetric monoidal categories says the canonical maps are determined by the underlying permutation of the variables, but one must restrict to morphisms built from $\alpha,\lambda,\varrho$ and the symmetry $\sigma$ (and their inverses) — arbitrary diagrams involving other morphisms need not commute. Also the example '$a\square a\to a\square a$ の入れ替えは恒等射と異なりうる' is fine, but the blanket phrase 'すべての図式が可換 is no longer correct' combined with the stated correct form omits the restriction to canonical/symmetry-generated maps.
- **Proposed fix:** State: 'In a symmetric monoidal category, among morphisms built from $\alpha,\lambda,\varrho,\sigma$ and their inverses by $\square$ and composition, two such morphisms with the same underlying permutation of the variables are equal; morphisms with different underlying permutations can differ (e.g. the swap $a\square a\to a\square a$ need not be the identity).'
- **Reported:** 2026-10-28 (8ccef3d)
