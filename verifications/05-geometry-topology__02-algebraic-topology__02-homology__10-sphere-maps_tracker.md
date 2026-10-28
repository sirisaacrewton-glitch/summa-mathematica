# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/10-sphere-maps.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/10-sphere-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hopf classification for non-orientable targets is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, first bullet)
- **Detail:** The supplement says that for a closed connected orientable $n$-manifold $M$ maps $M\to S^{n}$ are classified by degree, and that if $M$ is non-orientable they are classified by a $\mathbb{Z}/2$-valued invariant. The first part is correct (Hopf's theorem: $[M,S^{n}]\cong H^{n}(M;\mathbb{Z})\cong\mathbb{Z}$ for connected closed orientable $M$). The second part is wrong as stated: for non-orientable $M$ the relevant group is $H^{n}(M;\mathbb{Z})$, which is $0$ when $M$ is non-orientable (since $H^{n}(M;\mathbb{Z})\cong\mathbb{Z}$ or $0$ according to orientability, by the top cohomology with compact supports / twisted coefficients). Hence every map $M\to S^{n}$ from a closed connected non-orientable $n$-manifold is null-homotopic, not classified by a $\mathbb{Z}/2$ invariant. The $\mathbb{Z}/2$ statement is a confusion with the classification of maps to $\mathbb{RP}^{n}$ or with mod-2 degree for maps between non-orientable manifolds.
- **Proposed fix:** Replace the second sentence by: 「$M$ が向き付け不可能なら $H^{n}(M;\mathbb{Z})=0$ なので、$M\to S^{n}$ の写像はすべて定値写像にホモトープである（写像度による分類は自明になる）。」 (Equivalently: for non-orientable closed connected $M$, every map $M\to S^{n}$ is null-homotopic.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hopf map is not 'trivially acting on homology' in the stated sense
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると, second bullet)
- **Detail:** The text says the Hopf map $S^{3}\to S^{2}$ 'acts trivially on homology' (ホモロジーには自明に作用する). This is imprecise: the induced map $H_{2}(S^{3})\to H_{2}(S^{2})$ is zero because $H_{2}(S^{3})=0$, but the Hopf map does not induce the zero map on all homology in a way that distinguishes it from the constant map—rather, both the Hopf map and the constant map induce the zero map on reduced homology (the source has no homology in positive degrees below 3 and $H_{3}(S^{2})=0$). The statement is essentially correct in that homology cannot detect the Hopf map, but the phrase 'acts trivially on homology' is misleading since there is no nonzero homology class in the source to act on. More importantly, the claim that the PL/normal-form argument fails because the inverse image of a regular value is a 'curve (a link in $\mathbb{R}^{3}$)' is correct for $S^{3}\to S^{2}$, but the sentence conflates this with the general statement about domain dimension exceeding target dimension; the real reason is that the target dimension is smaller, so a regular value's preimage is 1-dimensional, not a finite set. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** Rewrite as: 「ホップ写像 $S^{3}\to S^{2}$ は誘導されるホモロジー写像がすべて $0$（定値写像と同じ）であるにもかかわらず、定値写像とホモトープでない（\ref[ファイブレーション]{at:page-fibrations} で示す $\pi_{3}(S^{2})\cong\mathbb{Z}$）。標準形の議論が使えないのは、値域の次元が定義域より小さいため正則な値の逆像が有限点集合ではなく 1 次元部分多様体（$\mathbb{R}^{3}$ の中の絡み目）になり、その『絡み方』が新しい不変量を生むからである。」
- **Reported:** 2026-10-28 (10fede1)
