# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/10-sphere-maps.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/10-sphere-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hopf invariant of Hopf map is not detected by linking of a regular-value preimage
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that for maps S^3 -> S^2 the preimage of a regular value is a curve (a link in R^3) and that its 'linking' produces the new invariant. This is wrong: the Hopf invariant of the Hopf map is 1, but the preimage of a regular value of the Hopf fibration is a single circle (an unknot), whose self-linking is 0. The linking number of two distinct fibers is 1, so the invariant comes from linking of two (distinct) fibers, not from a single preimage curve. As stated the sentence is false.
- **Proposed fix:** 標準形の議論が使えないのは、正則な値の逆像が点ではなく曲線（$\mathbb{R}^{3}$ の中の絡み目）になり、**相異なる 2 点の逆像である 2 本の曲線の絡み数**が新しい不変量（ホップ不変量）を生むからである（ホップ写像では 1 点の逆像は 1 本の円周で自己絡み数は $0$ だが、2 本のファイバーの絡み数は $1$）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Unoriented classification by a Z/2 invariant is misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化と関連する事実
- **Detail:** The supplement says that for a closed connected non-orientable n-manifold M, maps M -> S^n are classified by a Z/2-valued invariant instead of degree. This is imprecise/false: for non-orientable M the degree is not defined, and the relevant invariant is the mod 2 degree (reduction of the degree of the composite with the orientation double cover), which takes values in Z/2; but the classification statement as phrased ('classified by a Z/2-valued invariant') is not the standard Hopf theorem generalization and is stated too strongly without hypotheses (e.g. it requires n >= 1 and the target S^n; the correct statement is that [M,S^n] is in bijection with Z/2 via the mod 2 degree).
- **Proposed fix:** 向き付け不可能な閉連結 $n$ 次元多様体 $M$ に対しては写像度は定義できないが、$M$ の向き付け二重被覆への引き戻しを用いた mod 2 写像度（$\mathbb{Z}/2$ 値）で $[M,S^{n}]$ が分類される（知られている）。
- **Reported:** 2026-10-28 (8ccef3d)
