# Verification tracker: `04-analysis/02-complex-analysis/01-basics/06-exercises.html`

<!-- source: 04-analysis/02-complex-analysis/01-basics/06-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong bound on |e^{iz}| on the circle |z|=R
- **Category:** Logical gap
- **Location:** cx:ex-li-2 / solution
- **Detail:** The solution claims that on the circle |z|=R one has |e^{iz}| = e^{-Im z} ≤ e^{R}. This is true but useless: the ML estimate then gives 2πR e^{R}/(R^{2}-1), which diverges, and the text concludes that convergence to 0 cannot be shown by this estimate. But the correct bound is |e^{iz}| = e^{-Im z} ≤ e^{R} only on the lower half; on the upper half |e^{iz}| ≤ 1. The standard estimate splits the circle into upper and lower semicircles: on the upper half |e^{iz}/(z^{2}+1)| ≤ 1/(R^{2}-1) giving πR/(R^{2}-1) → 0, and on the lower half |e^{iz}| ≤ e^{R} giving πR e^{R}/(R^{2}-1) which does not tend to 0. So the claim that the whole integral cannot be shown to converge to 0 by this estimate is misleading: the upper semicircle part does tend to 0, and the lower part is the problematic one. The statement as written is not false, but the reasoning 'this estimate cannot show convergence to 0' is imprecise because it does not distinguish the two halves, and the parenthetical remark 'on the upper half alone a different estimate gives convergence to 0' is correct but the main estimate is presented as if it applied uniformly.
- **Proposed fix:** Split the circle into upper and lower semicircles. On the upper semicircle (Im z ≥ 0), |e^{iz}| ≤ 1, so the integral over it is bounded by πR/(R^{2}-1) → 0. On the lower semicircle, |e^{iz}| ≤ e^{R}, giving only πR e^{R}/(R^{2}-1), which does not tend to 0; hence this ML estimate alone does not show that the whole integral tends to 0.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Incorrect claim that the lower half is where |e^{iz}| grows
- **Category:** Supplement/remark error
- **Location:** cx:ex-li-2 / solution (parenthetical)
- **Detail:** The parenthetical says 'the lower half is where |e^{iz}| becomes large'. On the lower semicircle z = Re^{iθ} with θ ∈ [π, 2π], Im z = R sin θ ≤ 0, so |e^{iz}| = e^{-Im z} = e^{-R sin θ} ≤ e^{R}, which is indeed large near θ = 3π/2. This part is correct. However, the phrase 'on the upper half alone a different estimate gives convergence to 0' is correct, but the overall statement that 'this estimate cannot show convergence to 0' is only true for the lower half; the upper half does converge to 0 with the same ML inequality using |e^{iz}| ≤ 1. The remark is thus imprecise rather than false, but it conflates the two halves.
- **Proposed fix:** On the upper semicircle |e^{iz}| ≤ 1, so the ML estimate gives πR/(R^{2}-1) → 0; on the lower semicircle |e^{iz}| ≤ e^{R}, so the estimate gives πR e^{R}/(R^{2}-1), which does not tend to 0. Thus the ML estimate alone does not control the whole circle integral.
- **Reported:** 2026-10-28 (10fede1)
