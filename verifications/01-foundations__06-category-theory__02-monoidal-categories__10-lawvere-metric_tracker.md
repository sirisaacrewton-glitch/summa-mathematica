# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/10-lawvere-metric.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/10-lawvere-metric.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kuratowski embedding vs. completion construction
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says that \ref{cat:metric-yoneda-embedding.2} (the Kuratowski–Fréchet embedding $a\mapsto(d(a,b))_{b}$) is 'the same form' as the Kuratowski embedding used in the construction of the completion (\ref{top:completion-exists}). But the Kuratowski embedding used to construct a completion is $x\mapsto d(x,-)$ into the space of bounded functions (or into $C_b$), and the completion is obtained by taking the closure of the image. The corollary's embedding into $\ell^{\infty}(X)$ is indeed the same map, but the claim that it is 'used in the proof of \ref{top:completion-exists}' is an unverified attribution; more importantly, the corollary requires $X$ bounded (as stated in item 2), whereas the completion construction works for arbitrary metric spaces by embedding into bounded functions via $d(x,-)$ (which is bounded when $X$ is bounded, but for unbounded $X$ one uses $d(x,-)\wedge$ something or the map into $\mathbb{R}$-valued functions with a fixed basepoint). The statement as written conflates the bounded case with the general completion construction and asserts a use in a specific proof that is not established.
- **Proposed fix:** Replace with: '\ref{cat:metric-yoneda-embedding.2} gives the Kuratowski–Fréchet embedding $a\mapsto(d(a,b))_{b}$; when $X$ is bounded this is exactly the Kuratowski embedding into $\ell^{\infty}(X)$ used to construct the completion of a bounded metric space (cf. \ref{top:completion-exists}). For unbounded $X$ the completion is obtained by a variant (e.g. embedding into bounded functions via $d(a,-)$ composed with a fixed basepoint, or into $\mathbb{R}$-valued functions), so the corollary as stated applies directly only in the bounded case.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hausdorff distance as an enriched construction
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The sentence 'the Hausdorff distance (\ref{top:hausdorff-metric}) can also be understood as an enriched-categorical construction when subsets are regarded as weights' is vague and, as stated, imprecise: the Hausdorff distance is not simply a weighted (co)limit / enriched construction in the Lawvere $[0,\infty]$ setting without additional structure (it is a sup over points of inf over the other set, i.e. a combination of enriched colimits and a double supremum, and requires the ambient metric to be symmetric and the subsets to be closed/bounded for the distance to be finite and to satisfy the triangle inequality). The claim is stated more strongly than the literature supports without qualification.
- **Proposed fix:** Replace with: 'The Hausdorff distance (\ref{top:hausdorff-metric}) can be expressed using the enriched structure: for subsets $A,B$ of a metric space, $d_{H}(A,B)=\sup_{a\in A}\inf_{b\in B}d(a,b)\vee\sup_{b\in B}\inf_{a\in A}d(a,b)$, which is a combination of enriched (co)limits (sup and inf) in $\mathbf{V}_{\infty}$; this requires symmetry of $d$ and closed bounded subsets for the usual metric properties.'
- **Reported:** 2026-10-28 (10fede1)
