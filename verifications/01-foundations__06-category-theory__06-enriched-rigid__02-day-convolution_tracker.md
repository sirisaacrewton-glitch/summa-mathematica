# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/02-day-convolution.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/02-day-convolution.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the enriched Yoneda lemma, the element-wise reformulation, the Day convolution universality, monoidality, closedness, and the monoid correspondence are all correctly argued, and the hypcheck is accurate. The only genuine concerns are in the supplement: the 'uniqueness' of the Day monoidal structure is stated too strictly (it holds only up to coherent monoidal isomorphism), and the complexity remark is slightly imprecise about what is being counted. Both are minor and confined to side remarks.

## Issues

### ISSUE-0001 [Open] Uniqueness of the monoidal structure making y strong monoidal
- **Category:** Supplement/remark error
- **Location:** supplement / 普遍性
- **Detail:** The supplement claims that Day convolution is 'the unique monoidal structure on \widehat{\mathbf{C}}' making \mathbf{y} strong monoidal and preserving colimits in each variable. This is overstated: the monoidal structure is determined only up to a monoidal natural isomorphism (a pseudo/uniqueness up to coherent isomorphism), not literally unique. Moreover, the characterization requires the additional condition that \circledast preserve colimits in each variable (which is stated) together with the requirement that the unit be \mathbf{y}I; the phrase '唯一の' (unique) as written is false as a strict statement.
- **Proposed fix:** Replace '唯一のモノイダル構造' with 'up to a unique monoidal isomorphism (i.e. essentially unique) the monoidal structure such that \mathbf{y} is strong monoidal and \circledast preserves colimits in each variable'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Complexity claim O(n^2) for truncated convolution
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The claim that computing up to degree n takes O(n^2) integer operations is imprecise. For the Cauchy product in example 2, each degree m requires summing over p+q=m with binomial coefficients, and the total number of (p,q) pairs with p+q<=n is O(n^2), so the count of multiplications is O(n^2); however the sizes of the integers (binomial coefficients, products |F_a||G_b|) grow, so the bit-complexity is not O(n^2). Stated as 'O(n^2) 回の整数演算' it is acceptable as a count of operations but the parenthetical about binomial coefficients multiplying makes the 'O(n^2)' claim about the number of operations still fine; the real issue is that for example 2 the number of terms per degree is p+1, giving total O(n^2) terms, which is correct. This is borderline; the statement is essentially correct as an operation count.
- **Proposed fix:** Clarify that O(n^2) counts the number of multiplications/additions of the truncated convolution, ignoring the bit-size of the integers involved.
- **Reported:** 2026-10-28 (8ccef3d)
