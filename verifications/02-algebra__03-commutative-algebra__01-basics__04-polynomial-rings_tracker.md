# Verification tracker: `02-algebra/03-commutative-algebra/01-basics/04-polynomial-rings.html`

<!-- source: 02-algebra/03-commutative-algebra/01-basics/04-polynomial-rings.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is in good shape: the constructions, universal property, division algorithm, factor theorem, formal derivative and power-series unit/local-ring results are all correctly proved, and the hypcheck counterexamples (Z/4Z, Z/8Z, quaternions, Z[x] with 2x) are genuine. The only substantive problem is in the final supplement: the assertion that a finite field has infinitely many irreducible polynomials is false (there are only finitely many of each degree), so the justification for K[x] having infinitely many maximal ideals must be replaced by a correct argument. A minor precision issue is that the DVR claim for K[[x]] silently depends on K being a field.

## Issues

### ISSUE-0001 [Open] Irreducible polynomials over a finite field are not infinite in number
- **Category:** Supplement/remark error
- **Location:** supplement (多項式環と冪級数環の比較) / ring:power-series-units
- **Detail:** The supplement claims that K[x] has infinitely many maximal ideals, justifying it with "even if K is finite, there are infinitely many irreducible polynomials". This is false: over a finite field K there are only finitely many polynomials of each degree, hence only finitely many irreducible polynomials of each degree, and the set of all irreducible polynomials is countable (indeed the number of monic irreducibles of degree n is finite). The conclusion that K[x] has infinitely many maximal ideals is still true, but the stated reason is wrong. (Also, for a finite field the maximal ideals (x-a) for a in K are only finitely many, so the parenthetical example does not by itself give infinitely many.)
- **Proposed fix:** Replace the parenthetical with a correct argument, e.g.: "$K[x]$ は極大イデアルを無限個もつ（例えば各 $n\ge 1$ に対し $x^{n}-x-1$ の既約因子をとれば、次数が $n$ 以下で割り切れる多項式は $x^{n}-x-1$ を除き有限個しかないので、無限に異なる極大イデアルが得られる）". In English: "K[x] has infinitely many maximal ideals: for each n, take an irreducible factor of x^{n}-x-1; these give infinitely many distinct maximal ideals since a polynomial of degree < n can divide x^{n}-x-1 for only finitely many n."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] K[[x]] is a DVR only when K is a field (and the claim needs K a field)
- **Category:** Supplement/remark error
- **Location:** supplement (多項式環と冪級数環の比較) / ring:power-series-units
- **Detail:** The supplement states "K[[x]] is a typical example of a discrete valuation ring". This is correct when K is a field (as set up at the start of the paragraph), but the sentence is stated without repeating the hypothesis and could be read for general coefficient rings; for a general commutative ring A, A[[x]] is not a DVR (e.g. Z[[x]] is a 2-dimensional regular local ring, not a DVR). Since the paragraph begins with "K を体とすると", the claim is acceptable as written, but the DVR statement is a separate assertion that silently relies on K being a field. This is a minor imprecision rather than a false statement; flagging for precision.
- **Proposed fix:** Make the hypothesis explicit: "体 $K$ に対し $K[[x]]$ は離散付値環の典型例であり（\ref{ring:dvr}）".
- **Reported:** 2026-10-28 (10fede1)
