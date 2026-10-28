# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/01-euclidean-space.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/01-euclidean-space.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main theorems and proofs (norm equivalence, operator norm, invertibility of GL_n) are logically sound and the citations match their targets. The remaining problems are confined to the supplements: the claim that all linear maps between finite-dimensional spaces are continuous is stated without the norm-topology qualification and is attributed to a theorem about norms on a single R^n, the Riesz finite-dimensional/compact-unit-ball equivalence is stated without the normed-space scope, and the Banach-space Neumann series remark omits the boundedness/operator-norm/completeness hypotheses.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Reference to nonexistent label calc:componentwise.3
- **Category:** Improper link
- **Location:** supplement (別証明（行列式）)
- **Detail:** The supplement cites `\ref{calc:componentwise.3}` for the continuity of det. The label table lists only `calc:componentwise.1` (proposition 1.6, item 1 = coordinatewise convergence). Item 3 of that proposition (sums/products/quotients of continuous functions) is not a separately registered label, so the link target does not exist / does not say what is used.
- **Proposed fix:** Replace `\ref{calc:componentwise.3}` with `\ref{calc:componentwise}` (proposition 1.6, item 3), or state explicitly: "det is a polynomial in the entries, hence continuous by \ref{calc:componentwise} (3)."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now quotes calc:componentwise.3 as item 3 of proposition 1.6 (continuity of sums/products/quotients and polynomials), which is exactly what the supplement uses for continuity of det.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). calc:componentwise.3 is: sums, products and quotients of continuous functions are continuous; polynomials are continuous.

### ISSUE-0002 [Open] Claim that all linear maps between finite-dimensional spaces are continuous is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says "有限次元の実ベクトル空間の間の線形写像はすべて連続". This is only true when the domain and codomain are given their (unique) norm topologies; as stated without qualification it is an overstatement. More importantly, the sentence attributes this to \ref{calc:norm-equivalence}, which is about norms on a single R^n, not about linear maps being continuous. The continuity of linear maps is a separate consequence (via the operator-norm bound), so the citation is being used for something the theorem does not literally state.
- **Proposed fix:** Rewrite as: "\ref{calc:norm-equivalence} shows that a finite-dimensional real vector space carries a unique norm topology independent of the choice of norm. Consequently every linear map between finite-dimensional real vector spaces is continuous with respect to these canonical topologies (by the bound |Ax| <= ||A|| |x| of \ref{calc:operator-norm-properties})."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says all linear maps between finite-dimensional real vector spaces are continuous, citing calc:norm-equivalence, which only concerns norms on a single R^n; the continuity of linear maps is a separate consequence and the citation does not literally state it.

### ISSUE-0003 [Open] Riesz-lemma equivalence stated without the completeness/finite-dimensional caveat
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states "ノルム空間が有限次元であることと、閉単位球がコンパクトであることは同値" citing Riesz's lemma. This is correct for normed spaces, but the surrounding sentence begins by discussing general normed spaces where "norms need not be equivalent" and "closed bounded sets need not be compact"; the equivalence is fine, but the phrasing "有界閉集合がコンパクトでない" together with the Riesz statement could be read as claiming the equivalence for arbitrary metric/topological vector spaces. As written for normed spaces it is acceptable, but the attribution should note it is the local compactness characterization (a normed space is finite-dimensional iff its closed unit ball is compact), which is what Riesz's lemma gives.
- **Proposed fix:** State precisely: "A normed space is finite-dimensional if and only if its closed unit ball is compact (Riesz's lemma; not covered on this site)."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still states the finite-dimensional iff closed-unit-ball-compact equivalence without noting it is the local-compactness/Riesz characterization for normed spaces; the surrounding discussion of non-equivalent norms and non-compact bounded closed sets makes the scope ambiguous.

### ISSUE-0004 [Open] Neumann series claim for bounded operators on a Banach space is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says the Neumann series of item 1 carries over verbatim to bounded linear operators on a complete normed space (Banach space). Item 1 as stated uses the operator norm on M_n(R) and the submultiplicativity \|H^k\| <= \|H\|^k; for a general bounded operator on a Banach space this is fine, but the statement as written omits that H must be a bounded operator and that the norm is the operator norm, and it also implicitly requires the space to be complete for the series to converge. As phrased ("そのまま成り立つ") it is acceptable in spirit but the missing hypotheses (bounded operator, operator norm, completeness) make it an overstatement.
- **Proposed fix:** Let $X$ be a Banach space and $H\colon X\to X$ a bounded linear operator with $\|H\|<1$ (operator norm). Then $I-H$ is invertible with $(I-H)^{-1}=\sum_{k=0}^{\infty}H^{k}$ and $\|(I-H)^{-1}\|\le 1/(1-\|H\|)$.
- **Reported:** 2026-10-28 (048145a)
