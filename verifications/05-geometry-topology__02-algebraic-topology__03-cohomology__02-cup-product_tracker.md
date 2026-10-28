# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/02-cup-product.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/02-cup-product.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Relative cup product target and small-simplices citation
- **Category:** Supplement/remark error
- **Location:** supplement (相対カップ積)
- **Detail:** The supplement claims that for open A,B the product lands in Hom(S(X)/(S(A)+S(B)),R) and that by the small simplices theorem the cohomology of the right-hand side is H^{p+q}(X,A∪B). But S(X)/(S(A)+S(B)) is the chain complex for the pair (X,A∪B) only when A,B are open and X=A∪B (or under excision hypotheses); in general the cohomology of S(X)/(S(A)+S(B)) is not H^{*}(X,A∪B). The small simplices theorem gives H^{*}(X,A∪B) ≅ H^{*}(Hom(S^{U}(X)/S^{U}(A∪B),R)) for a cover, not for S(A)+S(B). So the stated isomorphism is not justified as written.
- **Proposed fix:** Assume X = A ∪ B with A,B open (or that {A,B} is an excisive cover). Then S(A)+S(B) ⊂ S(A∪B) induces a quasi-isomorphism S(X)/(S(A)+S(B)) → S(X)/S(A∪B), so by excision/small simplices H^{*}(Hom(S(X)/(S(A)+S(B)),R)) ≅ H^{p+q}(X,A∪B;R), and the relative cup product H^{p}(X,A)×H^{q}(X,B) → H^{p+q}(X,A∪B) is defined.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Künneth claim for S^2×S^2 vs wedge
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says the product of the two degree-2 generators of H^{*}(S^{2}×S^{2}) is a generator of H^{4}, citing the Künneth theorem H^{*}(X×Y) ≅ H^{*}(X)⊗H^{*}(Y) 'when H^{*} is finitely generated free'. This is imprecise: the Künneth isomorphism for cohomology requires a Tor term in general, and the cross product a×b is not the cup product a∪b; the identification a∪b = Δ^{*}(a×b) needs the diagonal. The conclusion is correct but the stated justification (direct Künneth isomorphism giving the cup product) is not.
- **Proposed fix:** By Künneth, H^{*}(S^{2}×S^{2}) ≅ H^{*}(S^{2})⊗H^{*}(S^{2}) (all groups free), with generators 1, x = p_{1}^{*}u, y = p_{2}^{*}u, xy in degree 4. Since x∪y = Δ^{*}(x×y) and Δ^{*} is an isomorphism in top degree, x∪y generates H^{4}(S^{2}×S^{2}) ≅ Z. In S^{2}∨S^{2}∨S^{4} the degree-2 classes pull back from the wedge of 2-spheres, so their product vanishes (as in the torus/wedge argument).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hopf invariant attribution
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The sentence lumps the Hopf invariant together with cup length as an application of 'non-triviality of the cup product'. The Hopf invariant of a map S^{2n-1}→S^{n} is defined via the cohomology ring of the mapping cone (the cup product of the two generators), so it is indeed related, but the phrasing 'cup product non-triviality is used for the Hopf invariant ... and for the Lusternik–Schnirelmann category lower bound (cup length)' is acceptable only if the cup-length statement is restricted to the correct setting. As stated it is vague but not false; the main issue is that the Hopf invariant detects maps only when n is even (for odd n the Hopf invariant can be nonzero only in special cases).
- **Proposed fix:** The Hopf invariant of f: S^{2n-1}→S^{n} is read off from the cup product structure of the mapping cone C_{f}: if H^{*}(C_{f}) has generators u in degree n and v in degree 2n with u∪u = h(f)·v, then h(f) is the Hopf invariant (this requires n even for u∪u to be nonzero). Cup length gives the lower bound cup-length(X) ≤ cat(X) for the Lusternik–Schnirelmann category.
- **Reported:** 2026-10-28 (10fede1)
