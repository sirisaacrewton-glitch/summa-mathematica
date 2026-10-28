# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/02-lambda-definability.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/02-lambda-definability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Church numerals are not the initial algebra / natural number object in the untyped setting
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：データは振る舞い
- **Detail:** The supplement claims that the Church numeral for n is the universal property of a natural number object (initial algebra) written in the untyped world as 'iteration over arbitrary f, x'. This is imprecise: in the untyped lambda calculus the Church numeral n f x = f^n x only gives iteration for a fixed f and x, but the initial-algebra universal property requires a *unique* homomorphism and, crucially, requires that the iteration be compatible with the algebra structure in a typed/categorical sense. In the untyped setting there is no type discipline, so the Church encoding does not literally satisfy the universal property of the natural numbers object (e.g. uniqueness fails, and the encoding lives in a reflexive object, not a category with a genuine NNO). The statement overstates the correspondence.
- **Proposed fix:** Replace with: 'The Church encoding is the type-theoretic idea of defining data by its eliminator; in a *typed* setting (System F / simply typed lambda calculus with a natural numbers type) the Church numeral corresponds to the initial algebra (natural numbers object) universal property. In the untyped lambda calculus this is only an analogy: iteration is available for each fixed f and x, but the uniqueness part of the universal property does not hold.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Schwichtenberg's theorem statement about simply typed lambda terms
- **Category:** Supplement/remark error
- **Location:** supplement / 型付きの場合
- **Detail:** The supplement says functions definable by terms of type (α→α)→α→α in the simply typed lambda calculus are exactly the 'extended polynomials' (Schwichtenberg's theorem). Schwichtenberg's theorem concerns the *simply typed lambda calculus* (with a base type, at higher types), and the precise class is the extended polynomials for the type N→N where N=(α→α)→α→α. The statement as written is essentially correct for that type, but the phrase '型付けによって停止性が保証される' combined with the claim is acceptable. However, the claim that the definable functions are exactly extended polynomials requires the terms to be *closed* and of the stated type; as stated ('項で定義できる関数') it omits the closedness/type hypothesis, which is a genuine missing hypothesis.
- **Proposed fix:** State: 'Closed terms of the simply typed lambda calculus of type (α→α)→α→α→(α→α)→α→α (i.e. N→N with N=(α→α)→α→α) define exactly the extended polynomials (Schwichtenberg).'
- **Reported:** 2026-10-28 (8ccef3d)
