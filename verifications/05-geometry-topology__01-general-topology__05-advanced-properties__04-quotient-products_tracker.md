# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/04-quotient-products.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/04-quotient-products.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (Whitehead, Kuratowski, the counterexample, the cone) are logically sound. The problems concentrate in the supplement and remark: (1) the 'similar theorem' restatement of Kuratowski adds an unnecessary Hausdorff hypothesis and omits surjectivity, contradicting the page's own T1 version; (2) the categorical sentence claims local compactness 'makes -×Z a left adjoint', which reverses the role of the adjunction (local compactness provides the right adjoint); (3) the metric-cone distance formula in the remark is not the standard one and generally fails the triangle inequality. These are the genuine issues; the rest of the page is acceptable.

## Issues

### ISSUE-0001 [Open] Kuratowski converse stated with Hausdorff instead of T1
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says: for a continuous map f between Hausdorff spaces, f is perfect iff f×1_Z is closed for all Z, and adds that 'Y being T1 suffices'. The page's own theorem (top:kuratowski-perfect) requires only Y to be T1 (plus f continuous surjective). The supplement's phrasing 'between Hausdorff spaces' is a strictly stronger hypothesis than needed, and the parenthetical 'Y が T1 なら十分' is confusing/incorrect as a weakening statement: the actual theorem needs Y T1 (and X arbitrary), not Hausdorff. Also the theorem requires f to be a surjection; the supplement omits surjectivity. This is an imprecise/overstated restatement.
- **Proposed fix:** For a continuous surjection $f\colon X\to Y$ with $Y$ a $T_{1}$ space, $f$ is perfect iff $f\times1_{Z}$ is closed for every space $Z$ (Kuratowski's theorem, \tref{top:kuratowski-perfect}). No Hausdorff assumption on $X$ or $Y$ beyond $T_{1}$ on $Y$ is needed.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that -×Z is a left adjoint
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement states '局所コンパクト性は、-×Z を「左随伴」にして、余極限と交換できるようにする条件である' (local compactness makes -×Z a left adjoint, so it preserves colimits). This is backwards: -×Z is a LEFT adjoint when Z is locally compact Hausdorff (its right adjoint is the mapping space C_c(Z,-)), and left adjoints preserve colimits. But the sentence says local compactness makes -×Z a left adjoint 'so that it commutes with colimits' — the direction of the adjunction is stated correctly in the first supplement paragraph ('右随伴') but here it is muddled: -×Z is always a left adjoint in a cartesian closed category, and the point is that local compactness of Z is what makes the exponential/mapping-space right adjoint exist. The phrasing '左随伴にして' (make it a left adjoint) is wrong: -×Z is the left adjoint regardless; local compactness provides the right adjoint. This is an imprecise/incorrect categorical claim.
- **Proposed fix:** Local compact Hausdorffness of $Z$ is exactly the condition making $-\times Z$ a left adjoint (with right adjoint the mapping space $C_{c}(Z,-)$); being a left adjoint, $-\times Z$ then preserves colimits, in particular quotients (coequalizers).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Metric cone formula uses d(x,y) where it should be d(x,y) weighted incorrectly / min formula
- **Category:** Supplement/remark error
- **Location:** remark (top:cone-not-metrizable)
- **Detail:** The remark attributes to Koyama the metric cone distance d̃([x,s],[y,t]) = min{1-s,1-t}·d(x,y) + |s-t|. For a metric cone the standard formula is d̃([x,s],[y,t]) = (1-max{s,t})·d(x,y) + |s-t| (or equivalently using min{1-s,1-t} only when combined with the correct factor). With min{1-s,1-t}·d(x,y), the triangle inequality generally fails: e.g. take x=y, then d̃ should reduce to |s-t|, which holds, but for three points with different x,y the min factor is not the correct weight. The correct standard metric-cone metric is d̃([x,s],[y,t]) = (1 - max{s,t})·d(x,y) + |s-t|. As stated the formula is not a metric in general.
- **Proposed fix:** Use $\tilde d([x,s],[y,t]) \defeq (1-\max\{s,t\})\,d(x,y) + \lvert s-t\rvert$ (the standard metric-cone distance), for which the identity map from the topological cone to the metric cone is a continuous bijection that need not be a homeomorphism.
- **Reported:** 2026-10-28 (8ccef3d)
