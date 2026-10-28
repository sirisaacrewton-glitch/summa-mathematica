# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/03-string-diagrams.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/03-string-diagrams.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The proofs (interchange law, End(I) commutativity, transpose functoriality) are essentially correct and the citations match their targets. The main problems are in the supplement and remarks: the dimension claim that symmetric monoidal diagrams live in 4+ dimensions (they are 3-dimensional with over/under identified, corresponding to E_{3} not E_{4}), the imprecise 'boxes move freely in the plane' explanation of End(I) commutativity, an overstated decomposition claim in the Joyal–Street remark, and an unjustified assertion in the problem solution that the non-commutativity survives strictification.

## Issues

### ISSUE-0001 [Open] Incorrect dimension claim for symmetric monoidal diagrams
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると), first bullet
- **Detail:** The supplement says braided monoidal diagrams are 3-dimensional and symmetric monoidal diagrams are '4-dimensional or more' where over/under crossings cannot be distinguished. This is wrong: symmetric monoidal string diagrams are still 3-dimensional (the braiding is a crossing in 3-space, and symmetry corresponds to allowing the crossing to be deformed through the ambient 3-space, i.e. over/under are identified). The dimension does not rise to 4 for symmetric monoidal categories. The correspondence with E_{1}⊂E_{2}⊂E_{3} is also misstated: monoidal = E_{1}, braided = E_{2}, symmetric = E_{3} (not E_{4}).
- **Proposed fix:** 組紐モノイダル圏では図式は 3 次元の組紐の図式になり、値は端点固定のアイソトピーで不変になる。対称モノイダル圏でも図式は 3 次元であるが、交差の上下が区別されない（対称性により上下の交差を同一視する）。この階層はオペラッド $E_{1}\subset E_{2}\subset E_{3}$（モノイダル・組紐・対称）の次元の上昇と対応する。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] End(I) elements 'move freely in the plane' justification is imprecise
- **Category:** Supplement/remark error
- **Location:** remark 次元が上がると可換になる
- **Detail:** The remark claims that elements of End(I) are 'boxes with no strings' that 'move freely in the plane, so order loses meaning'. But interchange moves only reorder boxes vertically; the commutativity of End(I) comes from the fact that I⊗I=I so two endomorphisms of I can be placed side by side and slid past each other, not from free planar motion. The phrase 'move freely in the plane' overstates the mechanism and is not what the interchange law provides (interchange only swaps vertical order of side-by-side boxes).
- **Proposed fix:** $\operatorname{End}(I)$ の元は線を持たない箱であり、$I\otimes I=I$ なので二つの箱を横に並べることができ、交換移動で縦の順序を入れ替えられる。したがって順序が意味を失い可換になる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that strictification preserves the counterexample needs justification
- **Category:** Unsupported fact
- **Location:** solution (一般の場合), cat:prob-str-scalar-action
- **Detail:** The solution asserts '両側加群の圏は厳密ではないが、厳密化しても同じ' without argument. Strictification gives a monoidal equivalence, and one must check that the inequality s⊗1_M ≠ 1_M⊗s is preserved under the equivalence (it is, since equivalences reflect isomorphisms and the comparison isomorphisms are compatible), but the text gives no justification. As stated it is an unsupported assertion.
- **Proposed fix:** 厳密化は強モノイダルな圏同値 $F$ を与え、$F(s\otimes1_{M})\neq F(1_{M}\otimes s)$ が成り立つ（圏同値は同型を反映し、$F$ はテンソル積と両側加群の作用を保つ）。よって厳密化した圏でも $s\otimes1_{M}\neq1_{M}\otimes s$。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Joyal–Street remark: 'progressive' diagrams and isotopy decomposition overstated
- **Category:** Supplement/remark error
- **Location:** remark ジョイアル–ストリートの定理（本サイト未収録）
- **Detail:** The remark states that planar isotopy 'is known to decompose into interchange moves and continuous movement of strings within a layer (which does not change the value)'. This is imprecise: Joyal–Street's result is that the value is invariant under the full 2-dimensional isotopy of progressive diagrams, and the combinatorial core is not merely interchange plus in-layer string motion; the theorem requires the specific notion of progressive (monotone) diagrams and the equivalence with isotopy classes. The decomposition claim as stated is not a standard precise statement and is stated more strongly than the literature supports.
- **Proposed fix:** アイソトピー不変性の組合せ的な核心は、隣接する箱の高さの順序の入れ替え（交換移動）である。ジョイアル–ストリートの定理は、進行的な図式のアイソトピー類と自由モノイダル圏の射が一対一対応することを述べる。
- **Reported:** 2026-10-28 (10fede1)
