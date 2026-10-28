# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/05-rational-maps.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/05-rational-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Lüroth's theorem statement uses k ⊊ L ⊂ k(t) but conclusion L ≅ k(s) needs L/k finitely generated / transcendence degree 1
- **Category:** Supplement/remark error
- **Location:** supplement (リュロートの定理)
- **Detail:** The statement '$k\subsetneq L\subset k(t)$ なら $L\cong k(s)$' is imprecise: as written, L is any intermediate field. Lüroth's theorem in this form requires L/k to be finitely generated of transcendence degree 1 (equivalently L is a subfield of k(t) containing k with trdeg 1). If L is an intermediate field that is algebraic over k (e.g. a finite extension of k inside k(t) when k is not algebraically closed), then L is not of the form k(s). The conclusion 'L ≅ k(s)' (purely transcendental) fails for such L. The intended reading is fine, but the exact hypothesis (trdeg_k L = 1, i.e. L/k finitely generated) is missing.
- **Proposed fix:** **リュロートの定理**：$k$ を体、$L$ を $k\subset L\subset k(t)$ なる $k$ 上超越次数 $1$ の部分体（すなわち $L/k$ が有限生成）とすると、$L=k(s)$ となる $s\in L$ が存在する。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Zariski's example: unirational non-rational surfaces in positive characteristic — attribution/statement needs care
- **Category:** Supplement/remark error
- **Location:** supplement (ザリスキの例)
- **Detail:** The claim 'In positive characteristic there exist unirational but non-rational surfaces' is correct (Zariski). However, the supplement lists it alongside Castelnuovo's theorem (char 0) without noting that the surfaces are over an algebraically closed field of positive characteristic; the statement as written omits the base-field hypothesis (algebraically closed, char p > 0). Without 'algebraically closed' the claim is not the standard one. This is a missing-hypothesis imprecision in a stated-only fact.
- **Proposed fix:** **ザリスキの例**：正標数 $p>0$ の代数閉体上では、単有理だが有理的でない曲面が存在する（ザリスキ）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Remark: 'each birational class of curves has a unique nonsingular projective model' — uniqueness up to unique isomorphism, and requires the curve to be a variety over k
- **Category:** Supplement/remark error
- **Location:** remark 「ほとんどどこでも」の幾何
- **Detail:** The sentence '曲線では、各双有理類にただ一つの非特異射影モデルがある' is essentially correct (smooth projective curves are determined up to unique isomorphism by their function field), but stated as 'ただ一つ' (exactly one) it is imprecise: the model is unique only up to unique isomorphism, not literally one object. Also this requires the curve to be geometrically integral / defined over k with the standard hypotheses. As a side remark it is acceptable but the 'unique' should be qualified as 'up to unique isomorphism'.
- **Proposed fix:** 曲線では、各双有理類に非特異射影モデルが同型を除いて一意に存在する（ef{ag:page-curves}）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Example 4 (Cremona): '3 本の座標直線を 3 点に潰す' — the map is undefined on the coordinate lines, not collapsing them
- **Category:** Supplement/remark error
- **Location:** ag:birational-examples / item 4
- **Detail:** The Cremona map $(x:y:z)\mapsto(yz:xz:xy)$ is undefined exactly where two coordinates vanish, i.e. on the three coordinate points $(1:0:0),(0:1:0),(0:0:1)$, not on the three coordinate lines. On a coordinate line, e.g. $z=0$ with $x,y\neq0$, the image is $(0:0:xy)=(0:0:1)$, so the line $z=0$ (minus the two coordinate points) maps to a single point. The text says '3 本の座標直線を 3 点に潰す' (collapses the three coordinate lines to three points) and then '射としては 3 点で定義されない' (undefined at 3 points). The correct description: the map is undefined at the three coordinate points, and each coordinate line (minus its two coordinate points) is contracted to a coordinate point. The phrase '3 本の座標直線を 3 点に潰す' is misleading because the lines are not collapsed as whole lines (the coordinate points on them are the indeterminacy locus).
- **Proposed fix:** **クレモナ変換**：$\mathbb{P}^{2}\dashrightarrow\mathbb{P}^{2}$, $(x:y:z)\mapsto(yz:xz:xy)$ は $xyz\neq0$ の上で $(1/x:1/y:1/z)$ と同じで、自分自身が逆の双有理写像。これは 3 点 $(1:0:0),(0:1:0),(0:0:1)$ で定義されず（不定点）、各座標直線（その 2 点を除く）は対応する座標点に潰れる。よってどんな開集合の拡大でも同型にはならない。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Example 2: conic parametrization requires char k ≠ 2 but also the point (-1,0) and the formula assume 2 invertible; the inverse formula needs 1+t^2 ≠ 0
- **Category:** Supplement/remark error
- **Location:** ag:birational-examples / item 2
- **Detail:** The parametrization $t\mapsto((1-t^{2})/(1+t^{2}), 2t/(1+t^{2}))$ requires $1+t^{2}\neq0$, which holds for all $t$ only when $-1$ is not a square in $k$ (e.g. over $\mathbb{R}$) but fails over algebraically closed fields of char $\neq2$ (where $t=\pm i$). Over an algebraically closed field the map is only a rational map defined away from $t=\pm i$, which is fine for birational equivalence, but the text presents it as a morphism $\mathbb{A}^{1}\to C$ ('逆 $t\mapsto\dots$ により $\mathbb{A}^{1}$ と双有理同値'). The claim of birational equivalence is correct, but the formula is not defined on all of $\mathbb{A}^{1}$ over algebraically closed $k$; the text should say it is a rational map (defined for $1+t^{2}\neq0$).
- **Proposed fix:** **2 次曲線は有理的**：$C=V(x^{2}+y^{2}-1)\subset\mathbb{A}^{2}$（$\operatorname{char}k\neq2$）は、点 $(-1,0)$ からの射影 $(x,y)\mapsto t=y/(x+1)$ と、有理写像 $t\mapsto\bigl(\tfrac{1-t^{2}}{1+t^{2}},\tfrac{2t}{1+t^{2}}\bigr)$（$1+t^{2}\neq0$ で定義）により $\mathbb{A}^{1}$ と双有理同値。関数体は $k(t)$。
- **Reported:** 2026-10-28 (10fede1)
