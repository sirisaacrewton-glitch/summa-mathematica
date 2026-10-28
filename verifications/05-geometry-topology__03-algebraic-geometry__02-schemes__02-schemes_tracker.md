# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/02-schemes.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/02-schemes.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Spec is left adjoint, not right adjoint, of global sections
- **Category:** Supplement/remark error
- **Location:** remark 局所的に環、大域的に貼り合わせ
- **Detail:** The remark states that $\operatorname{Spec}$ is the right adjoint of $\Gamma:\mathrm{LRS}\to\mathbf{Ring}^{\mathrm{op}}$. By \ref{ag:morphisms-to-affine}, $\operatorname{Hom}_{\mathrm{LRS}}(X,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathbf{Ring}}(A,\Gamma(X,\mathcal{O}_{X}))$, i.e. $\operatorname{Spec}$ is left adjoint to $\Gamma$ (viewed as valued in $\mathbf{Ring}^{\mathrm{op}}$). Calling it the right adjoint is the opposite of the correct statement.
- **Proposed fix:** アフィンスキームは、圏論的には「大域切断関手 $\Gamma$ の左随伴の像」である（$\operatorname{Spec}$ は $\Gamma:\mathrm{LRS}\to\mathbf{Ring}^{\mathrm{op}}$ の左随伴）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Fiber over a point of Spec Z is not reduction mod p
- **Category:** Supplement/remark error
- **Location:** remark 点の関手 / item 2
- **Detail:** The remark says that for $X\to\operatorname{Spec}\mathbb{Z}$ the fiber at each point $p$ is "reduction mod $p$". The fiber over the closed point $(p)$ is $X\times_{\operatorname{Spec}\mathbb{Z}}\operatorname{Spec}\mathbb{F}_{p}$, i.e. reduction mod $p$; but the generic point $(0)$ has residue field $\mathbb{Q}$, and the fiber there is $X\times_{\operatorname{Spec}\mathbb{Z}}\operatorname{Spec}\mathbb{Q}$ (reduction mod 0 / base change to $\mathbb{Q}$), not reduction mod $p$. The statement is imprecise for the generic point.
- **Proposed fix:** 後者の各閉点 $(p)$ でのファイバー $X\times_{\operatorname{Spec}\mathbb{Z}}\operatorname{Spec}\mathbb{F}_{p}$ が「$\bmod p$ での還元」になり、生成点 $(0)$ でのファイバーは $X\times_{\operatorname{Spec}\mathbb{Z}}\operatorname{Spec}\mathbb{Q}$（$\mathbb{Q}$ への係数拡大）になる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Noetherian/finite type does not avoid Nagata's infinite-dimensional examples
- **Category:** Supplement/remark error
- **Location:** remark 点の関手 / item 3
- **Detail:** The remark claims that restricting to Noetherian and finite type schemes serves to avoid Nagata's pathological examples (\ref{ring:nagata-infinite-dimension}, \ref{ring:nagata-examples}). But Nagata's counterexample 9.3 is itself a Noetherian ring of infinite Krull dimension, and fact 9.4 concerns a Noetherian domain whose normalization is not Noetherian. Hence the Noetherian hypothesis does not exclude these examples; the claim that assuming Noetherian/finite type avoids them is false.
- **Proposed fix:** これは永田の病理的な例（\ref{ring:nagata-infinite-dimension}, \ref{ring:nagata-examples}）が示すように、ネーター性だけでは次元の有限性すら保証されないため、多くの定理ではさらに有限型や優秀性などの仮定を課す。こうした仮定は整数論と幾何を同時に扱える範囲を選ぶためのものである。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] h_X(R) = {a in R^n : f(a)=0} needs X = Spec Z[x]/(f) with the correct number of variables
- **Category:** Unsupported fact
- **Location:** remark 点の関手 / item 1
- **Detail:** The remark writes $X=\operatorname{Spec}\mathbb{Z}[x]/(f)$ and then $h_{X}(R)=\{a\in R^{n}:f(a)=0\}$. With a single variable $x$ the solution set is $\{a\in R:f(a)=0\}$, i.e. $n=1$; the notation $R^{n}$ with unspecified $n$ is inconsistent unless $x=(x_{1},\dots,x_{n})$ and $f\in\mathbb{Z}[x_{1},\dots,x_{n}]$. As written the formula is imprecise.
- **Proposed fix:** 方程式系 $X=\operatorname{Spec}\mathbb{Z}[x_{1},\dots,x_{n}]/(f_{1},\dots,f_{m})$ については $h_{X}(R)=\{a\in R^{n}:f_{1}(a)=\dots=f_{m}(a)=0\}$ という素朴な解の集合である。
- **Reported:** 2026-10-28 (10fede1)
