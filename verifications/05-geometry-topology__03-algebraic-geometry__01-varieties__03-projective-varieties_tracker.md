# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/03-projective-varieties.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/03-projective-varieties.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, the projective Nullstellensatz proof, the standard affine cover, and the constancy of global regular functions) is logically sound and the citations match their targets. The only genuine problems are in the supplement: the claim that homogenizing a Gröbner basis yields the homogenization ideal is false as stated, and the Proj remark conflates the radical-ideal Nullstellensatz correspondence with the full homogeneous-prime spectrum of Proj. Both are stated-only side comments, so they fall under kind 5.

## Issues

### ISSUE-0001 [Open] Incorrect claim about homogenizing a Gröbner basis
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement claims that the homogenization ideal of a projective closure is obtained by homogenizing a Gröbner basis with respect to graded lexicographic order. This is false as stated: homogenizing a Gröbner basis of $I^{\mathrm{a}}(Y)$ does not in general give a Gröbner basis (or even a generating set) of the homogenization ideal $I(\bar Y)$. The standard correct statement is that one homogenizes a Gröbner basis of the ideal extended by an extra variable (the "$h$-homogenization"), or uses a suitable elimination order; simply homogenizing the generators of a Gröbner basis of $I^{\mathrm{a}}(Y)$ is insufficient, exactly as the example in the text itself warns for generators.
- **Proposed fix:** Replace with: "射影閉包のイデアル（斉次化イデアル）は、$I^{\mathrm{a}}(Y)$ のグレブナー基底を新変数 $x_{0}$ に関して斉次化したもの（$h$-斉次化）から、消去を用いて得られることが知られている。単に生成元を斉次化するだけでは足りない（上のねじれ 3 次曲線の例）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Proj description of closed points is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / グロタンディークの Proj
- **Detail:** The supplement says that Proj is obtained by "excluding prime ideals containing $S_{+}$", matching the irrelevant ideal of the projective Nullstellensatz. For a graded ring $S$, $\operatorname{Proj} S$ consists of homogeneous prime ideals not containing the irrelevant ideal $S_{+}$; the phrase "$S_{+}$ を含む素イデアルを除く" is correct in content but the surrounding identification with the Nullstellensatz correspondence is loose: the Nullstellensatz correspondence is between projective algebraic sets and radical homogeneous ideals not containing $S_{+}$ (with $S_{+}$ itself excluded), whereas Proj uses all homogeneous primes not containing $S_{+}$, not only radical ones. The statement as written could mislead the reader into thinking Proj parametrizes the same radical ideals.
- **Proposed fix:** Clarify: "$\operatorname{Proj} S$ の点は $S_{+}$ を含まない斉次素イデアルであり、射影零点定理の対応（根基な斉次イデアルで $S_{+}$ を含まないもの）を、根基性を外して一般の次数付き環に拡張したものである。"
- **Reported:** 2026-10-28 (8ccef3d)
