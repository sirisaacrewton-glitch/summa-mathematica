# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/06-singular-comparison.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/06-singular-comparison.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hawaiian earring is not a counterexample to local contractibility vs. cohomological local connectivity
- **Category:** Supplement/remark error
- **Location:** hypcheck / 局所可縮性 bullet
- **Detail:** The hypcheck claims the Hawaiian earring is not locally contractible and that its singular and sheaf cohomology differ. The Hawaiian earring is in fact locally contractible (it is the one-point union of circles of radius 1/n, and each point has arbitrarily small contractible neighbourhoods; only the wedge point needs care, and small neighbourhoods there are cones on finitely many arcs, hence contractible). So it is not an example of a space failing local contractibility. Moreover, the supplement's claim that local contractibility can be weakened to 'cohomological local connectivity' is a genuine theorem, but the hypcheck's counterexample is wrong.
- **Proposed fix:** Replace the example: 'たとえばワルシャワの円周（sin(1/x) のグラフの閉包）は局所可縮でなく、特異コホモロジーと層コホモロジーが異なる（本サイト未収録）。' (The Hawaiian earring is locally contractible and is not a counterexample.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Cech cohomology of a good cover equals sheaf cohomology requires the cover to be acyclic, and 'finite computation' claim is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / チェックコホモロジーとの関係
- **Detail:** The supplement states that for spaces with a good cover (all finite intersections contractible or empty), sheaf, singular and Cech cohomology of the good cover all agree. This is correct via Leray, but the phrase 'the latter is the simplicial cohomology of the nerve (a finite simplicial complex), a finite computation' is imprecise: a good cover need not be finite (e.g. a non-compact manifold), so the nerve need not be a finite simplicial complex. The parenthetical 'たとえばコンパクトな滑らかな多様体' suggests finiteness only under compactness, but the sentence as written asserts finiteness generally.
- **Proposed fix:** Restrict the finiteness claim: '後者は被覆の神経（単体複体）の単体的コホモロジーで、被覆が有限なら有限の計算である（たとえばコンパクト多様体の有限な良い被覆）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Fact (S) attribution: 'from small simplices theorem and universal coefficients'
- **Category:** Unsupported fact
- **Location:** remark 引用する二つの事実 / (S)
- **Detail:** The remark says (S) follows 'from \ref{at:small-simplices} and the universal coefficient theorem'. The small-simplices theorem is a statement about homology (chain-level subdivision), and passing to cohomology with coefficients in an arbitrary abelian group A via universal coefficients requires care: UCT gives a short exact sequence, and naturality of the subdivision chain map gives the isomorphism on cohomology, but the statement as given ('the restriction induces an isomorphism on cohomology') needs A to be arbitrary and the argument is not merely 'UCT'. This is acceptable as a citation, but the phrase overstates that UCT alone yields it; the essential input is the chain homotopy (subdivision) naturality.
- **Proposed fix:** Reword: '(S) は小さい単体の定理（鎖レベルの重心細分による鎖ホモトピー）と普遍係数定理の自然性から従う（\ref{at:small-simplices}）。'
- **Reported:** 2026-10-28 (8ccef3d)
