# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/09-approximation.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/09-approximation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (simplicial approximation, PL approximation, cell push-off, cellular approximation) is logically sound and the cited results are used correctly. The genuine problems are confined to the supplement: the relative simplicial approximation statement omits the hypothesis f(L_0) ⊂ L_0, and the π_k statement about skeleta is imprecise (needs k ≥ 1 and the correct dimension condition). No issues were found in the proofs or in the problem solutions.

## Issues

### ISSUE-0001 [Open] Relative simplicial approximation needs f(L_0) to lie in L_0
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, first bullet)
- **Detail:** The supplement claims a relative version: if f is already simplicial on a subcomplex L_0, then g can be taken with g=f on L_0. As stated this is false. The standard relative simplicial approximation theorem requires f(L_0) ⊂ L_0 (i.e. f maps the subcomplex into itself), and then one gets g|_{L_0}=f|_{L_0}. Without that hypothesis, the star condition f(st v) ⊂ st g(v) for v ∈ L_0 forces g(v) to be a vertex of the carrier of f(v); if f(v) is not a vertex (e.g. f maps a vertex of L_0 into the interior of a simplex of L\L_0), then g(v) ≠ f(v) necessarily, so g cannot equal f on L_0. The claim as written omits the essential hypothesis f(L_0) ⊂ L_0.
- **Proposed fix:** Relative simplicial approximation: if f is already simplicial on a subcomplex L_{0} **and f(L_{0}) ⊂ L_{0}**, then for sufficiently fine subdivision of K one can choose the simplicial approximation g with g = f on L_{0}.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] π_k(X,A)=0 condition misstated (should be cells of X\A of dimension > n, with k ≤ n, and pairs of dimension considerations)
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, second bullet)
- **Detail:** The supplement states: for a CW pair (X,A) with all cells of X\A of dimension > n, then π_k(X,A)=0 for k ≤ n. This is essentially the standard consequence of cellular approximation for pairs, but the precise statement requires the map of pairs to be homotopic rel A into the n-skeleton, giving π_k(X,A)=0 for k ≤ n when (X,A) is n-connected in the sense that X\A has cells only in dimensions > n. The claim as written is acceptable in spirit but the phrase 'k ≤ n で π_k(X,A)=0' together with '次元がすべて n より大きい' is correct only if one also assumes the pair is connected appropriately (basepoint issues for k=0,1). More importantly, the following sentence 'CW 複体の π_k は (k+1) 骨格で決まる' is imprecise: π_k(X) is determined by the (k+1)-skeleton only for k ≥ 2 (for k=1 one needs the 2-skeleton, which is consistent, but the general statement requires the inclusion X^{k+1} → X to induce an isomorphism on π_k for k ≥ 1, which is true; however for k=0 it is false). The statement should be restricted to k ≥ 1.
- **Proposed fix:** For a CW pair (X,A) such that X\A has cells only in dimensions > n, the inclusion induces π_{k}(X,A)=0 for k ≤ n (basepoint issues aside for k=0,1). Consequently, for k ≥ 1, the inclusion X^{k+1} → X induces an isomorphism π_{k}(X^{k+1}) ≅ π_{k}(X).
- **Reported:** 2026-10-28 (8ccef3d)
