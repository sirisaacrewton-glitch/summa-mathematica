# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/08-morley-rank.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/08-morley-rank.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The core definitions, lemma, proposition, theorem and proofs are essentially correct. The problems are confined to the supplement: the claim that rank in ω-saturated models is model-independent and determined by the type alone is false as stated, and the Cantor–Bendixson and dimension analogies are imprecise/overstated.

## Issues

### ISSUE-0001 [Open] Morley rank in ω-saturated models is not determined by the type alone
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that rank defined in an ω-saturated model is independent of the model and determined only by the parameters' type. This is false: Morley rank of a formula with parameters from a set A is computed in a sufficiently saturated model, and different ω-saturated models (of different cardinality, or not saturated enough) can give different ranks. The standard statement is that rank is preserved under elementary equivalence only when computed in |A|^+-saturated models, and it is not a function of the type alone in arbitrary ω-saturated models.
- **Proposed fix:** Replace with: 'In a model that is saturated in a sufficiently large cardinal (e.g. a monster model), the Morley rank of a formula with parameters from a small set A does not depend on the ambient model; it is computed in any |A|^+-saturated model. This is not true for arbitrary ω-saturated models.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Cantor–Bendixson rank of type spaces does not generally equal Morley rank
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The claim that the Cantor–Bendixson rank of the type space 'agrees with Morley rank in some cases' is imprecise/overstated. The correct standard fact is that for an ω-stable theory, the Morley rank of a formula φ equals the Cantor–Bendixson rank of the clopen set [φ] in S_1(A) (for suitable A), not merely 'in some cases'. As stated ('一致する場合がある') it is vague and, read literally, suggests only occasional coincidence, which misrepresents the theorem.
- **Proposed fix:** Replace with: 'For an ω-stable theory, the Morley rank of a formula φ(x) over A equals the Cantor–Bendixson rank of the clopen subset [φ] of the type space S_1(A).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Dimension analogy: plane as infinitely many lines is misleading for rank
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The statement 'the plane is 2-dimensional because it is infinitely many lines put side by side' is a loose analogy that, taken as a mathematical claim about Morley rank, is wrong: a definable set of rank 2 is not obtained by taking infinitely many rank-1 pieces (that would only give rank ≥ 2 in a weak sense and does not characterize rank 2); rank 2 requires that the set cannot be split into infinitely many rank-2 pieces while each fiber over a rank-1 set has rank 1. As a side comment it overstates the analogy.
- **Proposed fix:** Replace with: 'In ACF, K^n has rank n; the plane has rank 2 because it admits a definable map to a rank-1 set (a line) whose fibers are rank 1, and it cannot be split into infinitely many rank-2 pieces.'
- **Reported:** 2026-10-28 (8ccef3d)
