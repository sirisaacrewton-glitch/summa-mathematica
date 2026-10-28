# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/05-dedekind.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/05-dedekind.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the main theorems (local characterization, invertibility, prime factorization, class group) are proved with appropriate citations, and the worked example $\Z[\sqrt{-5}]$ is correct. The only substantive concern is a mild overgeneralization in the geometric interpretation inside the supplement (divisor class group / line bundles stated for an arbitrary Dedekind ring rather than a curve's coordinate ring); the Claborn attribution and the Picard group identification are correct. No logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] End(I)=A does not imply I is not invertible in the local example
- **Category:** Supplement/remark error
- **Location:** remark 商イデアル・準同型との関係
- **Detail:** The remark claims that in the Noetherian local normal domain $k[x,y]_{(x,y)}$ the maximal ideal $\mathfrak{m}$ satisfies $\End(I)=A$ but is not invertible because it is not principal. The reasoning 'not principal hence not invertible' is only valid in a local domain (by \ref{ring:invertible-properties}.3), which does hold here, so the conclusion is fine; however the parenthetical also asserts '$(I:I)\supsetneq A$ can happen for maximal ideals in non-normal domains' as the failure of the converse, which is correct. The real imprecision: the sentence 'the converse fails in general' is illustrated by a normal local ring, but the stated reason mixes the two phenomena. More importantly, the claim that $\End_A(I)=A$ for the maximal ideal of $k[x,y]_{(x,y)}$ is asserted via \ref{ring:colon-integral.2}; that result requires the ring to be normal, which $k[x,y]_{(x,y)}$ is, so this is acceptable. No genuine error found here beyond wording.
- **Proposed fix:** No change required; if desired, clarify that non-invertibility of $\mathfrak{m}$ follows from \ref{ring:invertible-properties}.3 since $A$ is local and $\mathfrak{m}$ is not principal.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Picard group identification requires the ring to be a domain / statements about rank-1 projective modules
- **Category:** Supplement/remark error
- **Location:** supplement 高い視点
- **Detail:** The supplement states that for a Dedekind domain the nonzero fractional ideals are exactly the rank-1 projective modules and that $\operatorname{Cl}(A)\cong\operatorname{Pic}(A)$. This is correct for Dedekind domains. The phrase 'in a general commutative ring the Picard group is defined' is fine. However the geometric sentence 'Cl is the divisor class group of a curve, i.e. the group of isomorphism classes of line bundles' is stated for a general Dedekind ring; for the ring of integers of a number field there is no curve, so the geometric interpretation only applies to coordinate rings of curves (or to $\Spec A$ as a smooth affine curve). As stated it overgeneralizes.
- **Proposed fix:** Restrict the geometric sentence: 'When $A$ is the coordinate ring of a smooth affine curve, $\operatorname{Cl}(A)$ is the divisor class group of the curve, i.e. the group of isomorphism classes of line bundles on it.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Clowater/Claborn attribution and 'any abelian group' claim
- **Category:** Unsupported fact
- **Location:** supplement 類数の有限性
- **Detail:** The supplement says 'it is known that any abelian group appears as the ideal class group of some Dedekind domain (Claborn)'. Claborn's theorem states that every abelian group is the class group of some Dedekind domain, which is correct. The spelling 'クレボーン' corresponds to Claborn, so the attribution is acceptable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
