# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/11-symmetric-monoidal-closed.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/11-symmetric-monoidal-closed.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the internal-hom proposition, self-enrichment, dual-object results, the dualizable-modules theorem, and the trace/dimension definition are all sound, and the cited labels match their uses. Two side-comment issues remain: the claim that the categorical dimension in chain complexes is the Euler characteristic is only valid for bounded/finite complexes, and the supplement's example of a non-symmetric biclosed monoidal category ('tensor product of bimodules') is imprecise. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Trace in chain complexes is not the Euler characteristic
- **Category:** Supplement/remark error
- **Location:** example (trace-dimension) item 3
- **Detail:** The claim that for the category of chain complexes with the Koszul sign symmetry, the categorical dimension of a complex equals the alternating sum of its graded dimensions (the Euler characteristic) is false as stated. The categorical trace of the identity of a complex $C$ is the graded trace $\sum_{n}(-1)^{n}\dim C_{n}$ only when the complex is finite-dimensional in each degree and the sum converges (i.e. $C$ is bounded or of finite total dimension). For an unbounded complex, or one with infinitely many nonzero degrees, the alternating sum need not be defined, and the categorical dimension lives in $\mathbf{V}(I,I)$ which for chain complexes is not a single number but a graded object. The statement is stated more strongly than warranted.
- **Proposed fix:** Restrict to bounded complexes of finite-dimensional vector spaces (or complexes with finite total dimension). Then the categorical dimension of $C$ is the Euler characteristic $\sum_{n}(-1)^{n}\dim C_{n}$, where the sign $(-1)^{pq}$ of the symmetry makes the odd-degree terms contribute with a minus sign.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Bicategory of bimodules is not a monoidal closed category
- **Category:** Supplement/remark error
- **Location:** supplement, 一般化
- **Detail:** The supplement lists '双閉圏 (biclosed category), e.g. the tensor product of bimodules' as an example of a non-symmetric monoidal closed category. Bimodules over a ring form a bicategory (or a monoidal category only in special cases), and the tensor product of bimodules is not a monoidal structure on a single category of bimodules in the naive sense; the example is imprecise. A correct standard example of a non-symmetric biclosed monoidal category is the category of endofunctors of a category (composition monoidal structure) or the category of bimodules over a fixed algebra viewed as a one-object bicategory, but not 'the tensor product of bimodules' as a monoidal category.
- **Proposed fix:** Replace the example with a correct one: e.g. the category of endofunctors $[\mathbf{C},\mathbf{C}]$ with composition as tensor is biclosed but not symmetric in general; or state that bimodules form a bicategory rather than a monoidal category.
- **Reported:** 2026-10-28 (8ccef3d)
