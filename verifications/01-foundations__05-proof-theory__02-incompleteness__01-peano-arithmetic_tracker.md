# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/01-peano-arithmetic.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/01-peano-arithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Σ₁ absoluteness in set theory is not upward absoluteness
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement claims that Σ₁ formulas in set theory are preserved upward along extensions of transitive structures, and that this is 'the same phenomenon' as \ref{pt:sigma-upward}. This is wrong: Σ₁ (and Σ₀) formulas are absolute between transitive models, i.e. preserved both upward and downward, whereas the PA result here is only upward preservation (downward fails, as the hypcheck of \ref{pt:sigma-upward} notes). Also, the parenthetical '証拠が小さい構造にあれば大きい構造にもある' describes only the upward direction, which is not the characteristic feature of set-theoretic absoluteness. The analogy as stated misstates the set-theoretic fact.
- **Proposed fix:** Replace with: '\ref{pt:sigma-upward} は、Σ 論理式が「始切片への延長」で上に保たれることを言っている。集合論では Σ₀（および Σ₁）論理式が推移的構造の間で絶対的（上にも下にも保たれる）であるという現象が知られている。本定理はその上方保存の部分だけを取り出した形だが、下方保存は一般には成り立たない（超準元が証拠になりうるため）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Goldbach remark: 'if independent then true' needs the standard model / Σ-completeness only gives one direction
- **Category:** Supplement/remark error
- **Location:** pt:sigma-completeness-remark
- **Detail:** The remark says: if Goldbach's conjecture is neither provable nor refutable in PA, then it is true, because if it were false its negation would be a true Σ sentence and hence PA-provable. The reasoning is correct as far as it goes (the negation of Goldbach is Σ, so a false Goldbach would be refutable). However the phrasing 'したがって、もし…証明も反証もできないならば、予想は真である' is fine logically, but the preceding sentence 'ゴールドバッハ予想は Π 文で書け、その否定は Σ 文である' is correct. On closer inspection this remark is actually sound; no error. (No issue.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
