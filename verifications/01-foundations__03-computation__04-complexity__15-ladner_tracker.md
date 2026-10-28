# Verification tracker: `01-foundations/03-computation/04-complexity/15-ladner.html`

<!-- source: 01-foundations/03-computation/04-complexity/15-ladner.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Density of NP degrees is misattributed to Ladner
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says the delayed diagonalization shows 'the NP degrees under polynomial-time mapping reductions are dense' and attributes this to Ladner. Ladner's 1975 paper proves that if P≠NP there exist NP-intermediate sets, and that the NP-m-degrees (and T-degrees) are not dense in a specific sense — in fact he shows there are no minimal m-degrees and constructs incomparable intermediate sets. The statement 'NP degrees are dense' is not Ladner's theorem and is not established by the delayed diagonalization as presented; density of the NP-m-degrees is a separate (and delicate) result. As stated it is an overstatement/misattribution.
- **Proposed fix:** Replace with: 'The same delayed diagonalization can be adapted to other classes; for instance, Ladner also showed that under P≠NP there are incomparable NP-intermediate sets, so the NP-intermediate m-degrees are not linearly ordered (there is no minimal NP-m-degree).' If a density statement is desired, state it precisely and cite the correct source.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that padding of polynomial length keeps NP-completeness is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says 'if the padding is of polynomial length the difficulty is unchanged (NP-complete)'. This is only true when the padding length is a fixed polynomial n^C (as in problem comp:prob-ld-unary). For a general polynomially bounded but non-constant H (e.g. H(n)=log n, giving padding n^{log n}, which is super-polynomial), the padded language need not be NP-complete, and the reduction SAT ≤_P SAT_H requires computing the padding length, which is fine, but the claim 'polynomial length ⇒ NP-complete' is stated too broadly. The precise statement is: for a fixed constant C, SAT_C is NP-complete; if H is bounded by a constant then SAT_H is NP-complete.
- **Proposed fix:** Replace with: 'If the padding length is n^{C} for a fixed constant C, the problem stays NP-complete (SAT ≤_P SAT_C); more generally, if H is bounded by a constant then SAT_H is NP-complete. If the padding is too long (H unbounded), the problem becomes easy (solvable by brute force on the short part).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Ladner's theorem 'only holds under P≠NP' phrasing is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The sentence 'Ladner's theorem only holds under the assumption P≠NP' is imprecise: the theorem is a conditional statement (P≠NP ⇒ existence of NP-intermediate sets). It is not that the theorem 'holds only under' the assumption; rather, if P=NP then no NP-intermediate set exists (since then P=NP and every NP set is in P). The phrasing suggests the theorem is unproven or restricted, which is misleading.
- **Proposed fix:** Replace with: 'Ladner's theorem is a conditional result: it asserts that if P≠NP then NP-intermediate sets exist. If P=NP, then trivially no such set exists, since then P=NP.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Friedberg–Muchnik description slightly off
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says Friedberg–Muchnik shows 'there are Turing degrees of recognizable sets other than 0 and 0''. The theorem states there exist two computably enumerable sets that are Turing-incomparable, hence there is a c.e. degree strictly between 0 and 0'. The phrasing 'other than 0 and 0'' is acceptable but the incomparability (the actual content) is omitted; more importantly, calling it 'the complexity version' is a loose analogy. This is borderline but the precise statement should mention incomparability.
- **Proposed fix:** Replace with: 'Friedberg–Muchnik states that there exist two computably enumerable sets that are Turing-incomparable; equivalently, there is a c.e. Turing degree strictly between 0 and 0'. Ladner's theorem is often viewed as a complexity-theoretic analogue.'
- **Reported:** 2026-10-28 (10fede1)
