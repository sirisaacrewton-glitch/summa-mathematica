# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/09-approximation.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/09-approximation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is carefully written. The proofs of the simplicial approximation theorem, the PL approximation lemma, the cell push-off lemma, and the cellular approximation theorem are logically sound, and the cited results are used consistently with their stated content. The hypcheck remarks and the problem solutions are correct. The only points worth flagging are minor imprecisions in the supplement: the relative simplicial approximation statement should mention that the subdivision is taken relative to the subcomplex, and the π_k vanishing statement, while correct, would benefit from the explicit phrase 'cells not in A'. Neither is a genuine mathematical error, so no issues of the six reported kinds are confirmed.

## Issues

### ISSUE-0001 [Open] Relative simplicial approximation needs f simplicial on a subcomplex, but the stated claim is imprecise about the subdivision
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, first bullet)
- **Detail:** The supplement claims: if f is already simplicial on a subcomplex L_0, then one can take g=f on L_0. In the standard relative simplicial approximation theorem this is true, but the statement as written omits the essential point that the subdivision must be taken relative to L_0 (i.e. L_0 is not subdivided), and that the star condition must hold on K^{(r)} with L_0 fixed. As stated ('1 の最後の主張の一般化') it is essentially correct but the phrase 'g=f ととれる' without the relative-subdivision caveat is slightly overstated: if one subdivides K arbitrarily, vertices of L_0 may be added and g need not equal f on L_0. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** State: 'If f is already simplicial on a subcomplex L_{0}, then the subdivision may be taken relative to L_{0} (L_{0} is left unsubdivided) and the approximating simplicial map g can be chosen with g=f on L_{0}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that cellular approximation implies π_k(X,A)=0 for cells of X\A of dimension > n and k ≤ n
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, second bullet)
- **Detail:** The supplement states: for a CW pair (X,A) where all cells of X\A have dimension > n, then for k ≤ n, π_k(X,A)=0. This is not correct as stated. Cellular approximation gives that any map (D^k,∂D^k)→(X,A) is homotopic rel boundary to a cellular map, i.e. one sending D^k into X^k ∪ A. If all cells of X\A have dimension > n ≥ k, then X^k ∪ A = A, so the map is homotopic rel boundary into A, which shows π_k(X,A)=0 only for k ≤ n. That part is fine. However the statement 'π_k(X,A)=0 for k ≤ n' requires the pair to be n-connected in the relative sense, and the argument via cellular approximation does give this. The issue is the phrase 'X\A の胞体の次元がすべて n より大きい' — this must be interpreted correctly: it means cells not in A. If A itself has cells of dimension ≤ n this is fine. The claim is essentially the standard result that (X,A) is n-connected when X is obtained from A by attaching cells of dimension > n. This is correct. No error.
- **Proposed fix:** No change needed; the statement is the standard consequence of cellular approximation.
- **Reported:** 2026-10-28 (10fede1)
