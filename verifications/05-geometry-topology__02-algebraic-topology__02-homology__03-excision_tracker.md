# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/03-excision.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/03-excision.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (subdivision lemmas, small simplices theorem, excision, Mayer–Vietoris, sphere homology, applications) is logically sound and the citations match their targets. The genuine problems are confined to side comments: the supplement's count $((n+1)!)^{m}$ of simplices in iterated barycentric subdivision is not correct as stated, and the good-pair hypcheck's description of $X/A$ as the Hawaiian earring with uncountable $H_{1}$ is inaccurate (it is a countable wedge of circles with countable free $H_{1}$). Both are medium-confidence side-comment errors; no proof-level gaps were found.

## Issues

### ISSUE-0001 [Open] Incorrect count of simplices in iterated barycentric subdivision
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement claims that $S^{m}\iota_{n}$ consists of $((n+1)!)^{m}$ simplices, multiplying by $(n+1)!$ at each stage. This is wrong. For an $n$-simplex, $S\lambda = b_{\lambda}(S\partial\lambda)$ and $S\partial\lambda$ is a sum over the $n+1$ facets, each of which is an $(n-1)$-simplex. If $S$ of an $(n-1)$-simplex has $N_{n-1}$ terms, then $S\lambda$ has $(n+1)N_{n-1}$ terms, so $N_{n} = (n+1)N_{n-1}$ with $N_{0}=1$, giving $N_{n}=(n+1)!$ for one subdivision. But iterating, the number of $(n)$-simplices in $S^{m}\iota_{n}$ is not $((n+1)!)^{m}$: the facets of the subdivided simplices are not all congruent to $\iota_{n-1}$ in the same way, and the correct count grows differently. In fact the number of top-dimensional simplices in the $m$-th barycentric subdivision of an $n$-simplex is not $((n+1)!)^{m}$; for $n=2$, $m=1$ gives $6$, $m=2$ gives $6\cdot 6=36$? No—the second subdivision of a triangle has $6$ triangles each subdivided into $6$, giving $36$, but the boundary triangles are counted... Actually the count $((n+1)!)^{m}$ fails already because facets of the subdivided pieces are not all $n$-simplices of the same combinatorial type; the standard count is different. The claim as stated (each stage multiplies by $(n+1)!$) is not justified and is false in general.
- **Proposed fix:** Replace with: "$S\iota_{n}$ は $(n+1)!$ 個の $n$ 単体からなる（各面が $n!$ 個に細分され、$n+1$ 面ある）。$m$ 回の反復では単体の個数は $((n+1)!)^{m}$ ではなく、より速く増える（各段で現れる単体はすべて同じ組合せ型ではないため）。必要な $m$ は $\log(\operatorname{diam}/\delta)/\log(1+1/n)$ 程度である。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hawaiian earring homology claim in good-pair hypcheck
- **Category:** Supplement/remark error
- **Location:** at:good-pair / hypcheck
- **Detail:** The hypcheck states that for $X=[0,1]$, $A=\{0\}\cup\{1/k\}$, $X/A$ is the Hawaiian earring and that $H_{1}(X,A)$ is a countably generated free abelian group while $H_{1}(X/A)$ is uncountable. This is imprecise/incorrect: $X/A$ for this $X,A$ is a countable wedge of circles (the quotient collapses $A$ to a point, and each interval $[1/(k+1),1/k]$ becomes a circle), which is a wedge of countably many circles, not the Hawaiian earring (the Hawaiian earring has circles of radii shrinking to $0$ with a common tangent point, a different space). Moreover $H_{1}$ of a countable wedge of circles is $\bigoplus_{\mathbb{N}}\mathbb{Z}$ (countable free abelian), not uncountable. So the claimed counterexample is misdescribed.
- **Proposed fix:** Replace the example with a correct one: e.g. $X=[0,1]$, $A=\{0\}$ is not a counterexample; use $X$ the Hawaiian earring with $A$ the wedge point, where $A$ is not a deformation retract of any neighborhood and $H_{1}(X,A)\not\cong H_{1}(X/A,\ast)$. Or simply state: "$A$ が開近傍の変位レトラクトでないと $H_{n}(X,A)\cong\tilde H_{n}(X/A)$ は一般には成り立たない（ハワイの耳飾りなど）。"
- **Reported:** 2026-10-28 (8ccef3d)
