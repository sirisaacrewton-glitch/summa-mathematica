# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/06-singular-comparison.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/06-singular-comparison.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main proof (closed-section extension, soft lemma, singular-cochain resolution, comparison theorem) is logically sound and its citations match the label table. The remaining genuine problems are in the side material: the hypcheck's Hawaiian-earring counterexample is mathematically wrong (the space is locally contractible), the supplement's 'finite computation' claim about the nerve ignores that a good cover need not be finite, and the 'cohomological local connectivity' weakening is stated without the necessary coefficient/degree quantifiers and paracompactness. The previously reported (S)-attribution issue is correctly rebutted and can be closed.

## Issues

### ISSUE-0001 [Open] Hawaiian earring is not a counterexample to local contractibility vs. cohomological local connectivity
- **Category:** Supplement/remark error
- **Location:** hypcheck / 局所可縮性 bullet
- **Detail:** The hypcheck claims the Hawaiian earring is not locally contractible and that its singular and sheaf cohomology differ. The Hawaiian earring is in fact locally contractible (it is the one-point union of circles of radius 1/n, and each point has arbitrarily small contractible neighbourhoods; only the wedge point needs care, and small neighbourhoods there are cones on finitely many arcs, hence contractible). So it is not an example of a space failing local contractibility. Moreover, the supplement's claim that local contractibility can be weakened to 'cohomological local connectivity' is a genuine theorem, but the hypcheck's counterexample is wrong.
- **Proposed fix:** Replace the example: 'たとえばワルシャワの円周（sin(1/x) のグラフの閉包）は局所可縮でなく、特異コホモロジーと層コホモロジーが異なる（本サイト未収録）。' (The Hawaiian earring is locally contractible and is not a counterexample.)
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The hypcheck still claims the Hawaiian earring is not locally contractible and that its singular and sheaf cohomology differ; the Hawaiian earring is locally contractible (small neighbourhoods of the wedge point are cones on finitely many arcs), so this counterexample is wrong.

### ISSUE-0002 [Open] Cech cohomology of a good cover equals sheaf cohomology requires the cover to be acyclic, and 'finite computation' claim is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / チェックコホモロジーとの関係
- **Detail:** The supplement states that for spaces with a good cover (all finite intersections contractible or empty), sheaf, singular and Cech cohomology of the good cover all agree. This is correct via Leray, but the phrase 'the latter is the simplicial cohomology of the nerve (a finite simplicial complex), a finite computation' is imprecise: a good cover need not be finite (e.g. a non-compact manifold), so the nerve need not be a finite simplicial complex. The parenthetical 'たとえばコンパクトな滑らかな多様体' suggests finiteness only under compactness, but the sentence as written asserts finiteness generally.
- **Proposed fix:** Restrict the finiteness claim: '後者は被覆の神経（単体複体）の単体的コホモロジーで、被覆が有限なら有限の計算である（たとえばコンパクト多様体の有限な良い被覆）。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still asserts the nerve is a finite simplicial complex and the computation finite, without restricting to a finite good cover; a good cover need not be finite.

### ISSUE-0003 [Ignored: Valid Rebuttal] Fact (S) attribution: 'from small simplices theorem and universal coefficients'
- **Category:** Unsupported fact
- **Location:** remark 引用する二つの事実 / (S)
- **Detail:** The remark says (S) follows 'from \ref{at:small-simplices} and the universal coefficient theorem'. The small-simplices theorem is a statement about homology (chain-level subdivision), and passing to cohomology with coefficients in an arbitrary abelian group A via universal coefficients requires care: UCT gives a short exact sequence, and naturality of the subdivision chain map gives the isomorphism on cohomology, but the statement as given ('the restriction induces an isomorphism on cohomology') needs A to be arbitrary and the argument is not merely 'UCT'. This is acceptable as a citation, but the phrase overstates that UCT alone yields it; the essential input is the chain homotopy (subdivision) naturality.
- **Proposed fix:** Reword: '(S) は小さい単体の定理（鎖レベルの重心細分による鎖ホモトピー）と普遍係数定理の自然性から従う（\ref{at:small-simplices}）。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: the small-simplices theorem supplies the natural chain homotopy, and passing to cohomology via Hom and UCT is standard, so the citation is acceptable.
**Opus Rebuttal:** The wording cites the small-simplices theorem, whose content is the natural chain homotopy equivalence; passing to cohomology by Hom and the universal coefficient theorem is standard. No change needed.

### ISSUE-0004 [Open] Cohomological local connectivity weakening is misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says local contractibility can be weakened to 'each neighbourhood U contains a neighbourhood V such that V→U induces 0 on positive-degree singular cohomology'. As stated this is not the standard hypothesis (cohomological local connectivity / Bredon's condition), which requires this for all coefficient groups and all q>0, and the comparison theorem also needs the space to be locally compact or paracompact and 'cohomologically locally connected' in a suitable sense. The one-line statement omits the coefficient/degree quantifiers and the paracompactness requirement, so it is imprecise.
- **Proposed fix:** Local contractibility can be weakened to cohomological local connectivity: for every neighbourhood $U$ of $x$ there is a neighbourhood $V\subset U$ of $x$ such that $H^{q}_{\mathrm{sing}}(V;A)\to H^{q}_{\mathrm{sing}}(U;A)$ is zero for all $q\ge1$ and all coefficient groups $A$ (and $H^{0}$ is constant), together with paracompactness of $X$; under these hypotheses the comparison $H^{q}(X,\underline{A})\cong H^{q}_{\mathrm{sing}}(X;A)$ still holds.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0005 [Open] Soft sheaves are not necessarily fine; 'fine implies soft' needs paracompactness
- **Category:** Supplement/remark error
- **Location:** remark 細層とド・ラームの定理
- **Detail:** The remark says a sheaf admitting a partition of unity lifted to endomorphisms is called fine and 'fine sheaves are soft'. The implication fine ⇒ soft requires the space to be paracompact (and the sheaf to be a module over the ring of continuous functions); without paracompactness a fine sheaf need not be soft. The remark does not state this hypothesis, though the surrounding context is paracompact.
- **Proposed fix:** On a paracompact space $X$, a fine sheaf (one admitting a locally finite partition of unity lifted to endomorphisms) is soft; in particular $\mathcal{C}_{X}$-module sheaves are fine and hence soft.
- **Reported:** 2026-10-28 (048145a)
