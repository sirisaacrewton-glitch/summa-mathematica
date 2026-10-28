# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/01-euclidean-space.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/01-euclidean-space.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the norm-equivalence theorem, operator-norm proposition, and invertibility theorem are proved with appropriate citations, and the hypcheck comments (finite-dimensionality, triangle inequality, ZF) are accurate. The main genuine problem is an improper citation in the supplement: \ref{calc:componentwise.3} points to a label that does not exist (proposition 1.6 has only items 1–3, and the intended target is item 3, cited as \ref{calc:componentwise}). The supplement's other claims (Riesz's lemma characterization, Neumann series in Banach spaces, determinant-based alternative proof) are mathematically sound. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Nonexistent label calc:componentwise.3 cited in supplement
- **Category:** Improper link
- **Location:** supplement (別証明（行列式）)
- **Detail:** The supplement cites \ref{calc:componentwise.3} to justify that det is continuous. The label table only lists calc:componentwise.1 (proposition 1.6, item 1: componentwise convergence). Proposition 1.6 has only three items (1, 2, 3), and item 3 is about sums/products/quotients of continuous functions, not about polynomial continuity of a map from matrices. The intended reference is item 3 of proposition 1.6, but the label used (calc:componentwise.3) does not exist in the table; the correct citation is \ref{calc:componentwise} item 3.
- **Proposed fix:** Replace \ref{calc:componentwise.3} with \ref{calc:componentwise} (item 3), i.e. "...は成分の多項式（\ref{lin:leibniz-formula}）なので連続（\ref{calc:componentwise} の 3）で...".
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that finite dimension ⇔ closed unit ball compact is 'known' via Riesz's lemma
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that 'a normed space is finite-dimensional iff its closed unit ball is compact' is known (via Riesz's lemma). The forward direction (finite-dim ⇒ compact ball) is fine, but the converse (compact closed unit ball ⇒ finite-dimensional) is a genuine theorem usually proved using Riesz's lemma; attributing it to Riesz's lemma is acceptable. However the statement as written is correct, so this is not an error. (No issue.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
