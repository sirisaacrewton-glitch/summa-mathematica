# Verification tracker: `02-algebra/01-linear-algebra/01-vector-spaces/02-linear-maps.html`

<!-- source: 02-algebra/01-linear-algebra/01-vector-spaces/02-linear-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (rank-nullity, matrix correspondence, change of basis, dual space properties) is logically sound and the citations match the label table. The genuine problems concentrate in the remarks and supplement: the Erdős–Kaplansky dimension formula is misstated, the Vasconcelos-based claim about 'surjective implies injective' over arbitrary commutative rings is stronger than the cited theorem supports, and the Hahn–Banach substitution in the supplement omits the local convexity hypothesis.

## Issues

### ISSUE-0001 [Open] Erdős–Kaplansky formula for dim V* is misstated
- **Category:** Supplement/remark error
- **Location:** remark 無限次元の双対
- **Detail:** The remark claims that the Erdős–Kaplansky theorem gives $\dim V^{*}=|k|^{\dim V}$. This is not correct in this form. The Erdős–Kaplansky theorem states that for an infinite-dimensional vector space $V$ over a field $k$, $\dim V^{*}=(|k|^{\dim V})^{\aleph_{0}}$ (equivalently $|k|^{\dim V}$ only when $|k|^{\dim V}$ is already of the form $\kappa^{\aleph_{0}}$, e.g. when $\dim V\ge\aleph_{0}$ and $|k|^{\dim V}$ is computed as a cardinal exponential; the naive equality fails in general, e.g. it ignores the $\aleph_{0}$-th power). As stated, the formula is at best imprecise and can be false.
- **Proposed fix:** Replace with: "実は $\dim V$ が無限のとき $\dim V^{*}=(|k|^{\dim V})^{\aleph_{0}}$ であることが知られている（エルデシュ–カプランスキーの定理）。とくに $\dim V^{*}>\dim V$。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Vasconcelos attribution for 'surjective implies injective' over arbitrary commutative rings
- **Category:** Supplement/remark error
- **Location:** remark 可換環上の行列
- **Detail:** The remark says that for endomorphisms of finitely generated modules, 'surjective implies injective' holds over any commutative ring, citing \ref{ring:vasconcelos}. Vasconcelos' theorem is usually stated for finitely generated modules over a commutative ring (or Noetherian ring) and concerns projective/finite generation conditions; the blanket claim '任意の可換環で成り立つ' for arbitrary finitely generated modules is stronger than the standard statement and is not justified by the cited theorem as described. The contrast with 'injective implies surjective' failing is fine, but the positive direction needs the correct hypotheses (finitely generated module, and the theorem's actual hypothesis).
- **Proposed fix:** Restate as: "有限生成加群の自己準同型については、適切な仮定（例：加群が有限生成）のもとで「全射なら単射」が成り立つ（\ref{ring:vasconcelos} を参照）が、「単射なら全射」は成り立たない。" and verify the exact hypothesis of \ref{ring:vasconcelos} before citing.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hahn–Banach as substitute for Step 2 needs a separating-functional hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says Hahn–Banach replaces Step 2 (existence of a functional separating a nonzero vector) in topological vector spaces. Hahn–Banach guarantees separation only under a local convexity / suitable topology hypothesis (e.g. locally convex space); for a general topological vector space it can fail. Stated without the local convexity hypothesis, the claim is overstated.
- **Proposed fix:** Add the hypothesis: "局所凸位相ベクトル空間では、ハーン–バナッハの定理により $v\neq0$ を分離する連続汎関数が存在し、\ref{lin:dual-properties} の Step 2 の代わりになる。"
- **Reported:** 2026-10-28 (8ccef3d)
