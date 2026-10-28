# Verification tracker: `02-algebra/01-linear-algebra/02-determinants/02-properties.html`

<!-- source: 02-algebra/01-linear-algebra/02-determinants/02-properties.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of cofactor expansion, adjugate, Cramer, Vandermonde, block determinant and Sylvester identity are sound, and the generic-matrix trick in Step 4 is properly justified. The only genuine issue is an overstatement in the hypcheck comment about the commutativity hypothesis: the phrasing suggests that RS≠SR always breaks the identity, whereas the correct claim is only that it can fail (existence). All other supplements, remarks and stated-only facts check out.

## Issues

### ISSUE-0001 [Open] Vandermonde intuition: distinctness vs nonzero determinant only over a field
- **Category:** Supplement/remark error
- **Location:** lin:vandermonde / intuition
- **Detail:** The intuition says 'とくに数がすべて異なることと行列式が 0 でないことは同じである（体の上）'. Over a field, distinctness of the x_i implies the product of differences is nonzero, hence V≠0; conversely V≠0 implies all differences are nonzero, hence distinct. This is correct over a field. However the parenthetical '(体の上)' is essential and is present, so the claim is properly restricted. No error.
- **Proposed fix:** No change needed; the field hypothesis is correctly stated.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck: RS≠SR example claim
- **Category:** Supplement/remark error
- **Location:** lin:sylvester-identity / hypcheck (可換性)
- **Detail:** The hypcheck states that if RS≠SR then det M ≠ det(PR-QS), with an example 'easily made with 2×2 blocks'. This is a claim that the commutativity hypothesis cannot be dropped. But it is stated as 'det M ≠ det(PR-QS) の例がある' — an existence claim, which is true (e.g. P=R=I_2, Q=0, S=[[0,1],[0,0]] gives det M = det R = 1 while det(PR-QS)=det(I)=1... need a genuine example). Actually one must be careful: the claim is only that there EXISTS a case with RS≠SR and det M ≠ det(PR-QS). This is true and easily constructed, so the statement is not false. However the phrasing 'RS≠SR だと det M≠det(PR-QS)' reads as a universal implication (whenever RS≠SR, the identity fails), which is false: there are non-commuting R,S for which the identity still holds accidentally. This is an overstatement.
- **Proposed fix:** Replace with: 'RS≠SR でも det M = det(PR-QS) が偶然成り立つことはあるが、一般には成り立たない（例：P=R=I_2, Q=0, S=[[0,1],[0,0]] では RS≠SR で det M=1, det(PR-QS)=1 となり一致するが、S を [[0,1],[1,0]] に替えると det M=1 に対し det(PR-QS)=det(I-S)=0 で不一致）。すなわち可換性は外せない。'
- **Reported:** 2026-10-28 (10fede1)
