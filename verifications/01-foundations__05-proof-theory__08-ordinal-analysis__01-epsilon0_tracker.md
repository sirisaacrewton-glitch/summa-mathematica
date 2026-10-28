# Verification tracker: `01-foundations/05-proof-theory/08-ordinal-analysis/01-epsilon0.html`

<!-- source: 01-foundations/05-proof-theory/08-ordinal-analysis/01-epsilon0.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Γ₀ mischaracterized as 'least ordinal not expressible from 0 via Veblen and addition'
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (より大きな表記系)
- **Detail:** The supplement says Γ₀ is 'the least ordinal not expressible from 0 using the Veblen function and addition finitely many times'. This is imprecise/incorrect: Γ₀ is the least fixed point of α ↦ φ_α(0), i.e. the least α with φ_α(0)=α. The set of ordinals obtainable from 0 by finitely many applications of addition and the Veblen functions φ_α(β) is closed under these operations and its closure is far larger than Γ₀ (it goes well beyond Γ₀, e.g. it contains Γ₀+1, φ_{Γ₀+1}(0), etc.). So 'least ordinal not expressible' is false as stated.
- **Proposed fix:** Γ₀ is the least ordinal α such that φ_{α}(0)=α (the least fixed point of α↦φ_{α}(0)); equivalently the least α closed under (α,β)↦φ_{α}(β). It is the proof-theoretic ordinal of ATR₀.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Goodstein's theorem attributed to 'same structure' as the descending-notation example, and Kirby–Paris attribution
- **Category:** Supplement/remark error
- **Location:** problem pt:prob-descending-epsilon0 / solution
- **Detail:** The solution claims the descending process 'has the same structure as the proof of Goodstein's theorem'. The described process is just the well-foundedness of ε₀ (no infinite descending sequences), which is a much weaker statement than Goodstein's theorem. Goodstein's theorem is proved by assigning to each Goodstein sequence a descending sequence of ordinals below ε₀; the well-foundedness of ε₀ alone does not prove Goodstein. Saying the example 'is the same structure as the proof' overstates the connection. Also the independence result is correctly attributed to Kirby–Paris, which is fine, but the structural claim is misleading.
- **Proposed fix:** This descending process illustrates the well-foundedness of ε₀ (no infinite descending sequences below ε₀). Goodstein's theorem is proved by mapping each Goodstein sequence to a strictly descending sequence of ordinals below ε₀, so its unprovability in PA (Kirby–Paris) reflects that PA cannot prove the well-foundedness of ε₀ up to ε₀.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that ε₀ is 'the upper bound of ordinals whose nesting can be cut off in finitely many steps'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The statement 'ε₀ is the upper bound of ordinals that can be written with finite nesting depth' is imprecise: every ordinal below ε₀ has a finite nesting representation, and ε₀ itself is the supremum (not itself representable with finite nesting). The phrasing 'upper bound of ordinals writable with finite nesting' is acceptable if read as supremum, but 'the limit at which finite nesting can be cut off' could be misread as saying ordinals ≥ ε₀ need infinite nesting, which is true, but the sentence as written ('上限') is ambiguous. More importantly, the claim that comparison of these finite trees is 'computable lexicographic comparison' is fine. This is borderline; the main issue is the imprecise 'upper bound' phrasing.
- **Proposed fix:** ε₀ is the supremum of the ordinals representable by finitely nested Cantor normal forms; every α<ε₀ has such a finite representation, while ε₀ itself does not (it would require an infinitely nested form ω^{ω^{⋰}}).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Feferman–Schütte ordinal 'said to be' proof-theoretic ordinal of ATR₀ — attribution hedge
- **Category:** Unsupported fact
- **Location:** supplement / 関連する結果
- **Detail:** The text says Γ₀ 'is said to be' the proof-theoretic ordinal of ATR₀. This is a well-established theorem (Friedman–McAloon, Feferman), not a conjecture; the hedge 'と言われている' is acceptable but the statement is correct. No error here beyond the Γ₀ characterization above.
- **Proposed fix:** Γ₀ is the proof-theoretic ordinal of ATR₀ (a theorem of Friedman–McAloon/Feferman).
- **Reported:** 2026-10-28 (10fede1)
