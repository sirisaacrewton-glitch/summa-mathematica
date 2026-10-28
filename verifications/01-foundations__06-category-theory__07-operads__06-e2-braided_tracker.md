# Verification tracker: `01-foundations/06-category-theory/07-operads/06-e2-braided.html`

<!-- source: 01-foundations/06-category-theory/07-operads/06-e2-braided.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Fiedorowicz's theorem misstated: Π₁C₂-algebras are braided monoidal categories, not 'the same as'
- **Category:** Supplement/remark error
- **Location:** remark 知られている事実（本サイト未収録）, item 3
- **Detail:** The remark states that algebras over the operad Π₁C₂ in Cat are '(strong) braided monoidal categories' and that Π₁C₁-algebras are monoidal categories, Π₁Cₙ-algebras (n≥3) are symmetric monoidal categories. This is imprecise: the correct statement (Fiedorowicz) is that braided monoidal categories are algebras over Π₁C₂ (up to equivalence), and more precisely the operad Π₁C₂ is equivalent to the 'braid operad' whose algebras are braided monoidal categories. Saying the algebras 'are the same as' braided monoidal categories without the equivalence qualification is an overstatement. Also the claim that Π₁Cₙ-algebras for n≥3 are symmetric monoidal categories is only true up to the appropriate notion (the operad Π₁Cₙ is not literally the symmetric operad; one needs the group-completion/equivalence statement). The statement as written is stated more strongly than the literature supports.
- **Proposed fix:** State: 'The operad Π₁C₂ is equivalent (as an operad in groupoids) to the operad governing braided monoidal categories; hence braided monoidal categories are, up to equivalence, precisely the Π₁C₂-algebras in Cat. Similarly Π₁C₁-algebras are monoidal categories and, for n≥3, Π₁Cₙ-algebras are symmetric monoidal categories (all up to the appropriate equivalence).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that π₁C₃(2)=0 used to justify unravelling double swap in Ω³Y
- **Category:** Supplement/remark error
- **Location:** supplement ループ空間の組紐
- **Detail:** The supplement says that if Ω²X is a triple loop space Ω³Y then the double swap can be undone 'using the third coordinate (same idea as \ref{cat:little-cubes-connected}, corresponding to π₁C₃(2)=0)'. But π₁C₃(2) is not trivial: C₃(2) is connected and its fundamental group is the braid group B₂ ≅ ℤ (the two little cubes in a 3-cube can be swapped around each other, giving a nontrivial loop). What is true is that in Ω³Y the double braiding σ₁² becomes trivial because the extra dimension allows the two points to be moved apart and the loop contracted — this corresponds to the fact that the swap in C₃(2) is homotopic to its inverse via a path in the configuration space using the third coordinate, i.e. the braiding in a 3-fold loop space is symmetric. The parenthetical 'π₁C₃(2)=0' is false.
- **Proposed fix:** Replace with: 'If Ω²X is a triple loop space Ω³Y, then the double swap σ₁² is trivial (the braiding is symmetric), because the third coordinate allows the two loops to be separated and the double braiding contracted; this reflects that the swap in C₃(2) is homotopic to its inverse, not that π₁C₃(2) vanishes (indeed π₁C₃(2) ≅ ℤ).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Garside normal form solves word problem in polynomial time — needs qualification
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement states that the word problem for braid groups is solvable in polynomial time by Garside's normal form. Garside's original normal form gives a solution to the word problem, but the polynomial-time algorithm is due to later work (Epstein–Paterson, Birman–Ko–Lee, or Dehornoy's handle reduction); Garside's normal form itself has exponential blow-up in the worst case. Attributing polynomial-time solvability directly to 'Garside's normal form' is an overstatement/misattribution.
- **Proposed fix:** State: 'The word problem for braid groups is solvable in polynomial time (e.g. via the Birman–Ko–Lee or Dehornoy handle-reduction algorithms; Garside's normal form gives a solution, though not directly polynomial time).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Table row for C₁: π₀ is Ass, but 'monoidal category' as Π₁C₁-algebra needs care
- **Category:** Supplement/remark error
- **Location:** remark 二つの世界の対応, table
- **Detail:** The table lists for C₁ (E₁): π₀ = Ass (monoids) and 'monoidal category' as the fundamental-groupoid algebra. This is correct in spirit, but the row for C₂ lists π₀ = Com (commutative monoids). For C₂, π₀C₂(k) is a single point for all k (connected), so the operad π₀C₂ is the commutative operad Com — this is correct. However, the table's third column header 'fundamental groupoid algebra' for C₁ should be 'monoidal category' which is correct. The issue is minor; the table is essentially correct. No change needed beyond noting the equivalence qualification (see item 1).
- **Proposed fix:** No change required; optionally add '(up to equivalence)' to the third column entries.
- **Reported:** 2026-10-28 (10fede1)
