# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/04-valuation-rings.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/04-valuation-rings.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound. The proofs of the valuation ring properties, the valuation–valuation ring correspondence, the DVR characterization, and the principal-intersection lemma are correct, and the cited labels match their uses. The supplement statements (p-adic integers as a DVR, Chevalley's existence theorem, normalization as intersection of valuation rings, and the geometric interpretation of normal curve ⇒ nonsingular) are all standard and correctly stated. The hypcheck comments are accurate. No genuine errors of the six specified kinds were found.

## Issues

### ISSUE-0001 [Open] Normalization equals intersection of valuation rings: missing finiteness/integrality hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement / 付値環の存在（シュヴァレー）
- **Detail:** The supplement claims that for an integral domain A, the normalization of A equals the intersection of all valuation rings of the fraction field containing A. As stated this is false: the intersection of all valuation rings containing A is the integral closure of A in the fraction field only when one intersects valuation rings of the fraction field of A that contain A; but the claim as written ("整域 A の正規化は A を含む商体の付値環すべての共通部分に等しい") is the standard theorem (Atiyah–Macdonald 5.22) and is actually correct for the integral closure in the fraction field. However the phrase "正規化" (normalization) usually means the integral closure in the fraction field, so the statement is fine. The real issue: the existence theorem is stated for a subring A and prime p with A_p ⊂ V and the maximal ideal of V lying over p; this is correct (Chevalley). But the sentence attributes it to "ツォルンの補題による" which is fine. The genuine imprecision is that the intersection statement requires A to be a domain and the valuation rings to be those of the fraction field of A containing A — which is stated. So this is not an error. Reconsider: the claim is correct as stated. No issue.
- **Proposed fix:** No change needed; statement is the standard theorem.
- **Reported:** 2026-10-28 (10fede1)
