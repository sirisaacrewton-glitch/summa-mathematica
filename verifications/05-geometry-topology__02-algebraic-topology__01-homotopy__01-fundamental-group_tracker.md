# Verification tracker: `05-geometry-topology/02-algebraic-topology/01-homotopy/01-fundamental-group.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/01-homotopy/01-fundamental-group.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the proofs of the fundamental group, change of basepoint, homotopy invariance, the circle's fundamental group, Brouwer, FTA, and the union/sphere results are correct, and the cited labels match their use. The only genuine problems are two imprecise statements in the supplements: the integral formula for the degree is stated with an unnecessarily strong smoothness hypothesis (piecewise $C^{1}$/rectifiable suffices), and the 'computational viewpoint' supplement overstates the impossibility of determining the degree from finitely many samples without qualification. No issues in the previously reported list.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the integral formula for degree requires smoothness
- **Category:** Supplement/remark error
- **Location:** supplement (after at:fundamental-group-circle) / "類似の定理"
- **Detail:** The supplement states: "円周の閉道 $\gamma$ が滑らかなら、$\deg\gamma=\frac{1}{2\pi i}\oint_{\gamma}\frac{dz}{z}$". The formula $\deg\gamma=\frac{1}{2\pi i}\oint_{\gamma}\frac{dz}{z}$ holds for any piecewise $C^{1}$ (indeed any rectifiable) loop, not only smooth ones; smoothness is an unnecessarily strong and misleading hypothesis. Moreover, for a merely continuous loop the integral is not defined, so the statement as written suggests the formula needs smoothness, which is imprecise.
- **Proposed fix:** 円周の閉道 $\gamma$ が区分的に $C^{1}$（あるいは求長可能）なら、$\deg\gamma=\frac{1}{2\pi i}\oint_{\gamma}\frac{dz}{z}$（回転数の積分表示）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim that the degree is determined by finitely many values without a continuity modulus
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement says: "連続性の度合い（$\delta$）の情報なしに有限個の標本だけから写像度を決めることはできない（標本点の間で何周でもできる）". As stated this is imprecise: for a fixed finite set of sample points, two loops agreeing there can have different degrees, which is correct, but the phrasing "有限個の標本だけから写像度を決めることはできない" is only true if the samples are fixed in advance and no other information (e.g. a bound on the number of oscillations or a modulus) is available. The parenthetical justification is fine, but the sentence should be qualified to avoid the false impression that no finite data can ever determine the degree.
- **Proposed fix:** 一方、あらかじめ固定した有限個の標本点での値だけからは写像度は決まらない（標本点の間で何周でもできる）。連続性の度合い（$\delta$）や振動数の上界といった追加情報があれば有限個の値から決められる。
- **Reported:** 2026-10-28 (10fede1)
