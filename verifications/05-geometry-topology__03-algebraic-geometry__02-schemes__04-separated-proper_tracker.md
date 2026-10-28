# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/04-separated-proper.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/04-separated-proper.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that affine elimination only yields the closure
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The supplement says that in the affine case elimination gives only the closure of the image, and that the image itself is obtained only in the projective case. This is false: the main theorem of elimination theory (the projection $\mathbb{P}^{n}\times\mathbb{A}^{m}\to\mathbb{A}^{m}$ is closed) is exactly what makes the affine image closed, so elimination computes the actual image in the affine target case too. The contrast drawn with the projective case is wrong.
- **Proposed fix:** Replace with: "一般にはグレブナー基底による消去（変数 $x$ を消去する順序）で $\pi(Z)$ の方程式を計算する。$\pi(Z)$ が閉であること（\ref{ag:elimination-theorem}）により、消去で得られるのは像そのものである。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Wrong counterexample for failure of projective Nullstellensatz over R
- **Category:** Supplement/remark error
- **Location:** hypcheck (代数的閉体)
- **Detail:** The hypcheck claims that over $k=\mathbb{R}$ the polynomial $x_{0}^{2}+x_{1}^{2}$ has no zero on $\mathbb{P}^{1}(\mathbb{R})$ but does not contain $S_{d}$. In fact $x_{0}^{2}+x_{1}^{2}$ vanishes at $(0:1)$ and $(1:0)$? No: at $(0:1)$ it equals $1$, at $(1:0)$ it equals $1$; but it does vanish at no real point only if... actually $x_{0}^{2}+x_{1}^{2}=0$ over $\mathbb{R}$ forces $x_{0}=x_{1}=0$, so indeed it has no zero on $\mathbb{P}^{1}(\mathbb{R})$. However the claim that it does not contain $S_{d}$ is the real issue: the correct statement of the projective Nullstellensatz failure is that $V(f)=\emptyset$ yet $f$ generates an ideal whose radical does not contain $S_{+}$; for a single form $f$ of degree $2$, $S_{2}\not\subset(f)$ is true, but the example as stated is fine. The genuine error is the parenthetical identification: the failure is that $\sqrt{(f)}\not\supset S_{+}$, not that $S_{d}\not\supset$; the phrasing "$S_{d}$ を含まない" is imprecise since no single $S_{d}$ is contained in $(f)$ for any $d$ regardless of $k$.
- **Proposed fix:** Rewrite: "$k=\mathbb{R}$ では射影零点定理が成り立たない（$f=x_{0}^{2}+x_{1}^{2}$ は $\mathbb{P}^{1}(\mathbb{R})$ に零点をもたないが $\sqrt{(f)}\not\supset S_{+}=(x_{0},x_{1})$ で、$V(\mathfrak{a})=\emptyset$ でも $\sqrt{\mathfrak{a}}\supset S_{+}$ とはならない）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Valuative criterion remark omits the finite type/Noetherian hypothesis on the converse direction
- **Category:** Supplement/remark error
- **Location:** remark 付値判定法の逆
- **Detail:** The remark states that if $X$ is Noetherian then uniqueness for all valuation rings implies separatedness. This is essentially correct, but the statement as written ("$X$ がネーターなら") omits that $f$ should be quasi-separated/quasi-compact or that the criterion is applied to the diagonal; more importantly the remark in the proper section ("固有性の付値判定法") states the criterion requires $f$ finite type and $X$ Noetherian, which is consistent. The separatedness remark is acceptable. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
