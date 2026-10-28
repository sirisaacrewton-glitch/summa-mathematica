# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/11-operations-commute.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/11-operations-commute.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reference to non-existent label top:oc-images.2
- **Category:** Improper link
- **Location:** top:commute-table-closure, rows for f^{-1}(closure) and f^{-1}(interior)
- **Detail:** The table cites \ref{top:oc-images.2} for the statement that an open map gives equality f^{-1}(\overline{B})=\overline{f^{-1}(B)} and f^{-1}(B^{\circ})=f^{-1}(B)^{\circ}. But the label table lists only top:oc-images.1 (proposition 11.3), and the proposition top:oc-images has items 1 and 2; item 2 is the open-map statement. The label top:oc-images.2 does not exist in the cited-labels table, so the link is mechanically wrong.
- **Proposed fix:** Replace both occurrences of \ref{top:oc-images.2} with \ref{top:oc-images.2} only if that label exists; otherwise use \ref{top:oc-images} (item 2), i.e. cite proposition 11.3 part 2.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that -×Y preserves quotients when Y is LCH is false as stated
- **Category:** Supplement/remark error
- **Location:** supplement, 高い視点
- **Detail:** The supplement says: 'if Y is LCH then ... -×Y has a right adjoint C_c(Y,-); a left adjoint preserves colimits, so -×Y sends quotient maps to quotient maps. This is the categorical reason for Whitehead's theorem.' This is wrong. The exponential law C(Z×Y,W)≅C(Z,C_c(Y,W)) requires Y locally compact Hausdorff AND the target W arbitrary, but the adjunction -×Y ⊣ C_c(Y,-) holds only in convenient (e.g. compactly generated) categories, not in Top with the compact-open topology; in Top the evaluation map need not be continuous (as the page itself notes via top:evaluation-q-discontinuous). Consequently -×Y is not a left adjoint in Top and does not preserve quotients in general. Whitehead's theorem (top:whitehead-product) requires Z to be locally compact Hausdorff as well, not merely Y; the statement 'Y LCH ⟹ q×1_Z is a quotient map' is false without a condition on Z (the counterexample top:product-quotient-counterexample shows failure even with LCH factors). So the categorical justification is both misstated and overstrong.
- **Proposed fix:** Rewrite: 'If Y is locally compact Hausdorff and Z is also locally compact Hausdorff (more generally, if the evaluation map is continuous), then the exponential bijection C(Z×Y,W)≅C(Z,C_c(Y,W)) holds naturally in Z,W, and -×Y behaves like a left adjoint on the relevant subcategory; this is the categorical reason why q×1_Z is a quotient map when Z is LCH (Whitehead's theorem). In general Top, -×Y is not a left adjoint and does not preserve quotient maps.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Glicksberg fact stated for 'infinite' Tychonoff spaces; pseudocompactness equivalence needs care
- **Category:** Supplement/remark error
- **Location:** top:fact-glicksberg
- **Detail:** The fact states: for infinite Tychonoff X,Y, the natural map β(X×Y)→βX×βY is a homeomorphism iff X×Y is pseudocompact. Glicksberg's theorem is usually stated for X,Y Tychonoff with X×Y pseudocompact iff β(X×Y)=βX×βY; the 'infinite' hypothesis is not needed and the equivalence holds for all Tychonoff spaces (with the caveat that the natural map is the extension of the inclusion X×Y→βX×βY). The 'infinite' restriction is harmless but the statement as given omits that the map considered is the Stone-Čech extension of the canonical embedding, and the example 'N×N does not satisfy it' is correct since N×N is not pseudocompact. The main imprecision is the unnecessary 'infinite' hypothesis and the missing note that the equivalence is exactly Glicksberg's theorem for all Tychonoff spaces.
- **Proposed fix:** State: 'Let X,Y be Tychonoff spaces. The Stone-Čech extension β(X×Y)→βX×βY of the inclusion is a homeomorphism iff X×Y is pseudocompact (Glicksberg). In particular for X=Y=N, N×N is not pseudocompact, so β(N×N)≠βN×βN.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Step 1 of top:oc-products uses 'each A_j nonempty' without hypothesis
- **Category:** Logical gap
- **Location:** top:oc-products / Step 1
- **Detail:** In Step 1 the argument says 'x_i∈U_i⊆A_i (since each A_j is nonempty, we can project)'. If some A_j is empty then ∏A_i is empty and the claim is vacuous, but the parenthetical justification is not a hypothesis stated in the proposition. The inclusion (∏A_i)°⊆∏A_i° is trivially true when the product is empty, so the proof should split off that case rather than assert nonemptiness.
- **Proposed fix:** Add at the start of Step 1: 'If some A_j=\emptyset then \prod_i A_i=\emptyset and the inclusion is trivial. Otherwise, for x in the interior, choose a basic open \prod_i U_i with x∈\prod_i U_i⊆\prod_i A_i; then x_i∈U_i⊆A_i for each i, hence x_i∈A_i^{\circ}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck claim about box topology equality is imprecise
- **Category:** Supplement/remark error
- **Location:** top:oc-products / hypcheck
- **Detail:** The hypcheck says: 'In the box topology, ∏_n(0,1) is open and equality holds.' In the box topology ∏_n(0,1) is indeed open, and (∏_n(0,1))°=∏_n(0,1)=∏_n(0,1)°, so equality holds for this particular product. However the general statement 'equality holds in the box topology' is false: for the box topology the interior of a product need not equal the product of interiors when factors are not open (e.g. take A_n=[0,1]; in the box topology ∏[0,1] has empty interior in R^N? Actually ∏[0,1] is closed with empty interior, while ∏[0,1]°=∏(0,1)≠∅). So the remark overstates the case.
- **Proposed fix:** Restrict the claim: 'In the box topology the particular set \prod_n(0,1) is itself open, so its interior equals itself; but the equality (\prod_i A_i)^{\circ}=\prod_i A_i^{\circ} fails in general in the box topology (e.g. A_n=[0,1] gives empty interior on the left and \prod_n(0,1) on the right).'
- **Reported:** 2026-10-28 (10fede1)
