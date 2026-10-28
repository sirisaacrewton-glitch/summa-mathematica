# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/01-euclidean-space.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/01-euclidean-space.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (norm equivalence, operator norm, Neumann series, open invertible set) are proved correctly and the hypchecks are accurate. The genuine problems are confined to the supplement: a citation to a non-existent label `calc:componentwise.3`, an overstated/imprecisely attributed claim that all linear maps between finite-dimensional spaces are continuous (attributed to the norm-equivalence theorem, which does not state this), and a slightly loose statement of the Riesz-lemma characterization of finite dimension. No issues in the proved results or in the stated lemma/example.

## Issues

### ISSUE-0001 [Open] Reference to nonexistent label calc:componentwise.3
- **Category:** Improper link
- **Location:** supplement (別証明（行列式）)
- **Detail:** The supplement cites `\ref{calc:componentwise.3}` for the continuity of det. The label table lists only `calc:componentwise.1` (proposition 1.6, item 1 = coordinatewise convergence). Item 3 of that proposition (sums/products/quotients of continuous functions) is not a separately registered label, so the link target does not exist / does not say what is used.
- **Proposed fix:** Replace `\ref{calc:componentwise.3}` with `\ref{calc:componentwise}` (proposition 1.6, item 3), or state explicitly: "det is a polynomial in the entries, hence continuous by \ref{calc:componentwise} (3)."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that all linear maps between finite-dimensional spaces are continuous is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says "有限次元の実ベクトル空間の間の線形写像はすべて連続". This is only true when the domain and codomain are given their (unique) norm topologies; as stated without qualification it is an overstatement. More importantly, the sentence attributes this to \ref{calc:norm-equivalence}, which is about norms on a single R^n, not about linear maps being continuous. The continuity of linear maps is a separate consequence (via the operator-norm bound), so the citation is being used for something the theorem does not literally state.
- **Proposed fix:** Rewrite as: "\ref{calc:norm-equivalence} shows that a finite-dimensional real vector space carries a unique norm topology independent of the choice of norm. Consequently every linear map between finite-dimensional real vector spaces is continuous with respect to these canonical topologies (by the bound |Ax| <= ||A|| |x| of \ref{calc:operator-norm-properties})."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Riesz-lemma equivalence stated without the completeness/finite-dimensional caveat
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states "ノルム空間が有限次元であることと、閉単位球がコンパクトであることは同値" citing Riesz's lemma. This is correct for normed spaces, but the surrounding sentence begins by discussing general normed spaces where "norms need not be equivalent" and "closed bounded sets need not be compact"; the equivalence is fine, but the phrasing "有界閉集合がコンパクトでない" together with the Riesz statement could be read as claiming the equivalence for arbitrary metric/topological vector spaces. As written for normed spaces it is acceptable, but the attribution should note it is the local compactness characterization (a normed space is finite-dimensional iff its closed unit ball is compact), which is what Riesz's lemma gives.
- **Proposed fix:** State precisely: "A normed space is finite-dimensional if and only if its closed unit ball is compact (Riesz's lemma; not covered on this site)."
- **Reported:** 2026-10-28 (8ccef3d)
