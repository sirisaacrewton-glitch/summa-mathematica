# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/02-second-fundamental-form.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/02-second-fundamental-form.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (Meusnier, principal curvatures/Euler, curvature formulas, Gauss map area, tangent-plane side, totally umbilic) are sound and cite appropriate results. The main genuine problem is in the supplement: Liepmann's theorem is stated without the positivity hypothesis on the Gauss curvature, which makes it false (flat torus is a counterexample). The cylinder remark is acceptable but slightly imprecise. No issues in the previously reported list (none open).

## Issues

### ISSUE-0001 [Open] Liepmann's theorem misstated: constant Gauss curvature alone does not imply a sphere
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement claims that for a closed (compact) embedded surface, constant Gauss curvature implies it is a sphere (Liepmann's theorem). This is false as stated: a flat torus (embedded in R^3) has constant Gauss curvature K=0 but is not a sphere. Liepmann's theorem requires K to be a positive constant (K ≡ const > 0). Without the positivity hypothesis the statement fails.
- **Proposed fix:** 閉じた（コンパクトな）曲面については、ガウス曲率が正の定数であれば球面である（リープマンの定理）。また平均曲率が定数で埋め込まれていれば球面である（アレクサンドロフの定理）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Cylinder does not have constant principal curvatures in the stated sense
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The text says '主曲率が一定でも球面とは限らない（円柱は主曲率 -1/r, 0 が一定）'. For the cylinder the principal curvatures are indeed the constants -1/r and 0, so this particular example is fine, but the phrasing '主曲率が一定' (principal curvatures are constant) is ambiguous: it could be read as 'the principal curvatures are constant functions', which the cylinder satisfies, so the example is valid. However the intended contrast with the sphere is that the sphere has κ_1=κ_2 constant, whereas the cylinder has two distinct constant principal curvatures. The statement is acceptable but the example should clarify that it is the pair of principal curvatures that is constant while unequal. This is a minor imprecision, not a mathematical error; no fix strictly required.
- **Proposed fix:** （任意）「主曲率がそれぞれ定数でも球面とは限らない（円柱は主曲率が -1/r と 0 の定数）」と、二つの主曲率が異なる値で一定であることを明示する。
- **Reported:** 2026-10-28 (10fede1)
