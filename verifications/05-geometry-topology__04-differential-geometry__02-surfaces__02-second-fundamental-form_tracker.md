# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/02-second-fundamental-form.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/02-second-fundamental-form.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well-organized. The main genuine problem is in the supplement: the statement of Liepmann's theorem is misstated — constant Gauss curvature on a closed embedded surface does not imply a sphere unless K>0 (flat tori and hyperbolic surfaces are counterexamples for K=0 and K<0). All other checked supplements, remarks, hypchecks, examples and proofs appear correct, including the torus curvature signs, the Meusnier hypcheck, the flat-point examples, and the Gauss map area formula.

## Issues

### ISSUE-0001 [Open] Liepmann's theorem misstated (constant Gauss curvature alone does not imply a sphere)
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement claims that for a closed (compact) embedded surface, constant Gauss curvature implies it is a sphere (Liepmann's theorem). This is false as stated: a compact surface of constant Gauss curvature K>0 is a round sphere, but for K=0 there are flat tori (and other flat compact surfaces), and for K<0 there are compact hyperbolic surfaces. Liepmann's theorem is about rigidity: a closed convex surface with constant Gauss curvature is a round sphere (and more generally a closed surface with K>0 constant is a sphere). The claim as written is false for K<=0.
- **Proposed fix:** Replace with: 「また、閉じた（コンパクトな）曲面については、ガウス曲率が正の定数で埋め込まれていれば球面である（リープマンの定理）。ガウス曲率が 0 や負の定数の場合は球面以外の例（平坦トーラスや種数 ≥ 2 の双曲曲面）がある。平均曲率が一定で埋め込まれていれば球面である（アレクサンドロフの定理）。」
- **Reported:** 2026-10-28 (8ccef3d)
