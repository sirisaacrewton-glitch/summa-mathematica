# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/03-vaught-pairs.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/03-vaught-pairs.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, lemmas, the Vaught two-cardinal theorem proof, and the problem solutions) is logically sound: the back-and-forth, the L(U)-relativization, the countable homogeneous Vaught pair construction, and the ω₁-length chain argument all check out, and citations match their targets. The genuine problems are confined to the supplement: the two-cardinal transfer directions are misstated (the (ℵ₂,ℵ₁)→(ℵ₁,ℵ₀) transfer is Chang's conjecture, independent of ZFC, not a ZFC theorem), and the remark that homogeneity is a weakening of saturation is imprecise.

## Issues

### ISSUE-0001 [Open] Claim about (aleph2,aleph1)→(aleph1,aleph0) provable in ZFC
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement asserts that the two-cardinal transfer from (ℵ₂,ℵ₁) to (ℵ₁,ℵ₀) is provable in ZFC, while the reverse transfer requires GCH (Chang's theorem). This is a misstatement of the known results. Chang's two-cardinal theorem (Chang's conjecture) is precisely the statement that every (ℵ₂,ℵ₁)-model yields an (ℵ₁,ℵ₀)-model, and it is NOT provable in ZFC; it is independent (it follows from e.g. the existence of 0^#, and fails under certain forcing assumptions). The direction that is provable in ZFC is the downward transfer from (ℵ₁,ℵ₀) to (ℵ₀,ℵ₀)-type results, and the upward transfer (ℵ₁,ℵ₀)→(ℵ₂,ℵ₁) is the one that holds under GCH-like hypotheses. So the two directions are essentially swapped/incorrect.
- **Proposed fix:** Replace with: 'たとえば (ℵ₂,ℵ₁) から (ℵ₁,ℵ₀) への移行はチャンの予想と呼ばれ、ZFC では証明できず集合論の仮定に依存する（0^# の存在などのもとで成り立つ）。(ℵ₁,ℵ₀) から (ℵ₂,ℵ₁) への移行は GCH などのもとで成り立つ。' (i.e. the (ℵ₂,ℵ₁)→(ℵ₁,ℵ₀) transfer is Chang's conjecture, independent of ZFC, not a ZFC theorem).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Homogeneity described as weakening saturation
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says '均質性は飽和性を弱めたもので' (homogeneity is a weakening of saturation). This is imprecise: homogeneity (ℵ₀-homogeneity) and saturation are not in a simple weakening relation. A saturated model is homogeneous, but homogeneity alone does not imply saturation (a countable homogeneous model need not be saturated), and conversely saturation requires realizing all types over small parameter sets, which homogeneity does not. The statement as written overstates a clean implication.
- **Proposed fix:** Replace with: '飽和モデルは均質であるが、逆は一般に成り立たない（均質性は飽和性より弱い条件であり、実現する型を固定して初めて一意性が回復する）。'
- **Reported:** 2026-10-28 (8ccef3d)
