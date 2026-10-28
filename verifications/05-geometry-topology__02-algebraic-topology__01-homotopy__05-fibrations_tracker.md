# Verification tracker: `05-geometry-topology/02-algebraic-topology/01-homotopy/05-fibrations.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/01-homotopy/05-fibrations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the long exact sequence theorem with its proof, covering/bundle propositions, Hopf example, corollary) is logically sound. The only concern is in the supplement: the classification statement about sphere bundles over spheres attributed to Adams' Hopf invariant one theorem is stated somewhat imprecisely/too strongly. The $\pi_{k}(\mathbb{C}P^{n})$ and $\pi_{3}(S^{2})$ claims are correct.

## Issues

### ISSUE-0001 [Open] Incorrect higher homotopy statement for CP^n
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement claims $\pi_{k}(\mathbb{C}P^{n})\cong\pi_{k}(S^{2n+1})$ for $k\ge3$. This is false. From the long exact sequence of $S^{1}\to S^{2n+1}\to\mathbb{C}P^{n}$, for $k\ge3$ we get $\pi_{k}(\mathbb{C}P^{n})\cong\pi_{k}(S^{2n+1})$ only when $\pi_{k}(S^{1})=\pi_{k-1}(S^{1})=0$, which holds for $k\ge3$ except that the connecting map involves $\pi_{k-1}(S^{1})$; indeed $\pi_{k-1}(S^{1})=0$ for $k-1\ge2$, so for $k\ge3$ the sequence gives $\pi_{k}(S^{2n+1})\cong\pi_{k}(\mathbb{C}P^{n})$ only if also $\pi_{k}(S^{1})=0$, which is true for $k\ge2$. However the claim fails for $k=2n+1$? No: the real error is that $\pi_{k}(\mathbb{C}P^{n})\cong\pi_{k}(S^{2n+1})$ requires $\pi_{k-1}(S^{1})=0$, i.e. $k-1\neq1$, i.e. $k\neq2$; for $k\ge3$ this is fine. But the statement as written is actually correct for $k\ge3$ since $\pi_{k}(S^{1})=\pi_{k-1}(S^{1})=0$ for $k\ge3$. Re-examining: the genuine error is the claim that fiber bundles with all of fiber, total space, base spheres are classified by Adams' theorem — Adams' Hopf invariant one theorem classifies maps $S^{2n-1}\to S^{n}$, i.e. bundles with base $S^{n}$ and fiber $S^{n-1}$; the statement 'these and their trivial analogues' is an overstatement since it omits sphere bundles like $S^{7}\to S^{4}$ with fiber $S^{3}$ (included) but also the tangent sphere bundles and the fact that $S^{1}\to S^{2n+1}\to\mathbb{C}P^{n}$ has non-sphere base. The precise overstatement: 'fiber bundles with fiber, total space, base all spheres are limited to these and trivial analogues' is not exactly Adams' theorem and is stated too strongly/imprecisely.
- **Proposed fix:** Replace with: 'Adams' Hopf invariant one theorem implies that a fiber bundle $S^{n-1}\to S^{2n-1}\to S^{n}$ (a sphere bundle over a sphere with sphere fiber, in the Hopf family) exists only for $n=2,4,8$ (Hopf fibrations $S^{1}\to S^{3}\to S^{2}$, $S^{3}\to S^{7}\to S^{4}$, $S^{7}\to S^{15}\to S^{8}$), together with the trivial bundles $S^{n-1}\to S^{n-1}\times S^{m}\to S^{m}$.'
- **Reported:** 2026-10-28 (8ccef3d)
