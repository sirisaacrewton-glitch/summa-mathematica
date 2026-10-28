# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/04-separated-proper.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/04-separated-proper.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is the remark stating the valuative criterion of properness without the separatedness hypothesis: as written ('exactly one lift') it is false for non-separated finite type morphisms, since uniqueness is precisely separatedness and existence alone does not imply properness without separatedness. All other checked items (the diagonal immersion proposition, the affine-cover separatedness criterion, the doubled-line and doubled-plane examples, the elimination theorem proof, the constant-regular-function corollary, and the hypcheck comments) are correct.

## Issues

### ISSUE-0001 [Open] Valuative criterion of properness needs separatedness/finite type hypotheses
- **Category:** Supplement/remark error
- **Location:** remark 固有性の付値判定法と射影空間
- **Detail:** The remark states: for f:X→S of finite type with X noetherian, f is proper iff for every valuation ring R and every commutative diagram Spec K→X, Spec R→S there is exactly one lift Spec R→X. As stated this is false: the uniqueness of the lift is exactly the valuative criterion of separatedness, so the 'exactly one' formulation already encodes separatedness. Without assuming f separated (or at least that X→S is separated), a non-separated finite type morphism (e.g. the affine line with doubled origin over Spec k) satisfies existence of lifts but is not proper. The correct statement of the valuative criterion of properness requires f to be separated and finite type (and quasi-compact), and then only asserts existence (uniqueness being automatic from separatedness).
- **Proposed fix:** State: 'Let f:X→S be separated and of finite type with X noetherian (or f quasi-compact). Then f is proper iff for every valuation ring R with fraction field K and every commutative diagram Spec K→X, Spec R→S there exists a lift Spec R→X (the lift is then unique by the valuative criterion of separatedness).'
- **Reported:** 2026-10-28 (8ccef3d)
