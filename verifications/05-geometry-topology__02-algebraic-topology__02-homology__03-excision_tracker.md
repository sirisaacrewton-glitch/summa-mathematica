# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/03-excision.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/03-excision.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect simplex count in subdivision supplement
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement claims that $S^{m}\iota_{n}$ consists of $((n+1)!)^{m}$ simplices, multiplying by $(n+1)!$ at each stage. This is wrong. For an $n$-simplex, $S\lambda = b_{\lambda}(S\partial\lambda)$ and $\partial\lambda$ has $n+1$ facets, each of dimension $n-1$; if $S$ of an $(n-1)$-simplex yields $N_{n-1}$ simplices, then $S\lambda$ yields $(n+1)N_{n-1}$ simplices. With $N_{0}=1$ this gives $N_{n}=(n+1)!$ for one step, but the recursion for iterates is $N_{n}(m)=(n+1)\cdot N_{n-1}(m)$, not $(n+1)!$ per step. Indeed $S\iota_{n}$ has $(n+1)!$ simplices, but $S^{2}\iota_{n}$ has $(n+1)\cdot(n!)\cdots$ — concretely for $n=1$, $S\iota_{1}$ has $2$ simplices and $S^{2}\iota_{1}$ has $4$, not $2^{2}\cdot$... the claimed factor $(n+1)!=2$ per step happens to match for $n=1$ but fails for $n=2$: $S\iota_{2}$ has $6$ simplices, $S^{2}\iota_{2}$ has $3\cdot 6=18$ (each of the 6 triangles subdivided into 3 by joining to the barycenter of the 2-simplex? no—each triangle of $S\iota_{2}$ is subdivided into 6, but adjacent ones share), so the count is not $((n+1)!)^{m}=36$. The correct count is $N_{n}(m)=(n+1)!\cdot((n+1)!)^{m-1}$ only if each step multiplied by $(n+1)!$, which is false; the true recursion multiplies by $(n+1)$ applied to the $(n-1)$-level count, giving $N_{n}(m)=\prod$ structure that is not $((n+1)!)^{m}$.
- **Proposed fix:** Replace with: "$S\iota_{n}$ は $(n+1)!$ 個の単体からなり、$S^{m}\iota_{n}$ の単体の個数は $m$ について $(n+1)^{m}\cdot n!\cdots$ の形で増える（各段で高々 $(n+1)!$ 倍、正確には再帰式 $N_{n}(m)=(n+1)N_{n-1}(m)$ で定まる）。" Or simply state the bound: "$S^{m}\iota_{n}$ の単体の個数は高々 $((n+1)!)^{m}$ 個である" (an upper bound, which is true since each step multiplies the number of simplices by at most $(n+1)!$).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Wrong claim that the U-small inclusion is a chain homotopy equivalence via per-simplex minimal m
- **Category:** Supplement/remark error
- **Location:** supplement 層の理論との関係
- **Detail:** The supplement says one must show $S^{\mathcal{U}}\to S$ is a chain homotopy equivalence by constructing a homotopy inverse $\rho\colon S\to S^{\mathcal{U}}$ "using the minimal $m(\sigma)$ needed for each simplex". This is not a valid construction: choosing $m$ depending on the simplex $\sigma$ does not produce a chain map, because a face of $\sigma$ may require a larger $m$ than $\sigma$ itself, so $\rho$ defined by $\rho(\sigma)=S^{m(\sigma)}\sigma$ fails to commute with $\partial$. The standard argument uses a single global subdivision iterate $S^{m}$ (or a chain map built from a partition of unity / acyclic models), not a per-simplex minimal $m$. As stated the recipe is mathematically incorrect.
- **Proposed fix:** Replace with: "コチェインに双対化するには、$S^{\mathcal{U}}\to S$ が鎖ホモトピー同値であること、すなわち鎖写像 $\rho\colon S\to S^{\mathcal{U}}$ と鎖ホモトピー $\rho\iota\simeq 1$, $\iota\rho\simeq 1$ の存在を示す必要がある。これは単体ごとに $m$ を選ぶのでは鎖写像にならない（面はより大きい $m$ を要しうる）ため、一様な細分の反復や acyclic models の議論で構成する。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck counterexample for Mayer-Vietoris is misdescribed
- **Category:** Supplement/remark error
- **Location:** at:mayer-vietoris / hypcheck
- **Detail:** The hypcheck claims that with $X=S^{1}$, $A$ the closed upper semicircle and $B=S^{1}\setminus A$ (the open lower semicircle without endpoints), the sequence fails at $H_{1}(S^{1})$ because $H_{1}(A)\oplus H_{1}(B)=0\to H_{1}(S^{1})\cong\mathbb{Z}\to H_{0}(A\cap B)=0$. But here $A\cap B=\varnothing$, so $H_{0}(A\cap B)=\mathbb{Z}$ (not $0$), and $H_{1}(A\cap B)=0$. The reduced sequence at degree 1 reads $0\to\tilde H_{1}(S^{1})=\mathbb{Z}\to\tilde H_{0}(A\cap B)=0$ (reduced $H_{0}$ of a point is $0$), which is indeed not exact — but the stated reason "$H_{0}(A\cap B)=0$" is wrong (unreduced $H_{0}$ of the empty set is $0$, but $A\cap B$ is empty so the reduced sequence requires nonempty intersection; the failure is that $A\cap B=\varnothing$). The example is also not a clean counterexample to the unreduced sequence since $A\cap B=\varnothing$ makes the reduced version inapplicable. The description conflates reduced and unreduced homology.
- **Proposed fix:** Use a cleaner counterexample with nonempty intersection, e.g. $X=S^{1}$, $A$ = closed upper semicircle, $B$ = closed lower semicircle minus one endpoint so that $\operatorname{int}A\cup\operatorname{int}B\ne X$; or state: "$X=S^{1}$, $A$ を閉上半円、$B$ を開下半円とすると $A\cap B=\varnothing$ で、被約列は $0\to\tilde H_{1}(S^{1})=\mathbb{Z}\to\tilde H_{0}(A\cap B)=0$ となり完全でない（$A\cap B=\varnothing$ のため被約版の前提も満たさない）。"
- **Reported:** 2026-10-28 (10fede1)
