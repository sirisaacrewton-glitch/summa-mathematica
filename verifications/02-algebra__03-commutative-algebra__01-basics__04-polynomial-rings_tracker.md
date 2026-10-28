# Verification tracker: `02-algebra/03-commutative-algebra/01-basics/04-polynomial-rings.html`

<!-- source: 02-algebra/03-commutative-algebra/01-basics/04-polynomial-rings.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is in very good shape. The construction, universal property, division algorithm, factor theorem, formal derivative and power-series unit/local results are all correctly proved, and the hypcheck counterexamples (Z/4Z, Z/8Z, quaternions, Z[x] with 2x) are genuine. The only issue found is a mild imprecision in the supplement comparing K[x] and K[[x]]: the phrase about infinitely many maximal ideals mixes the (x-a) examples with the finite-field case where those particular ideals are only finitely many. No logical gaps, missing hypotheses, overpowered theorems or improper links were found.

## Issues

### ISSUE-0001 [Open] Irreducible polynomials over a finite field: 'infinitely many' is true but the parenthetical is imprecise as stated for K[x] maximal ideals
- **Category:** Supplement/remark error
- **Location:** supplement (多項式環と冪級数環の比較)
- **Detail:** The supplement says K[x] has infinitely many maximal ideals, giving x-a (a∈K) as examples, and adds 'even if K is finite, there are infinitely many irreducible polynomials'. The claim that there are infinitely many irreducible polynomials over a finite field is true, but the sentence as written could be read as claiming the ideals (x-a) themselves are infinitely many when K is finite, which is false (there are only |K| of them). The logical structure 'for example x-a, a∈K; even if K is finite, irreducible polynomials are infinite' is acceptable if read carefully, but the phrasing conflates the two sources of maximal ideals. This is a minor imprecision rather than a false statement.
- **Proposed fix:** When K is infinite the ideals (x-a) already give infinitely many maximal ideals; when K is finite there are only finitely many of these, but there are still infinitely many irreducible polynomials (hence infinitely many maximal ideals (p) with p irreducible).
- **Reported:** 2026-10-28 (8ccef3d)
