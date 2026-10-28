# Verification tracker: `01-foundations/05-proof-theory/06-second-order-arithmetic/03-choice-and-transfinite.html`

<!-- source: 01-foundations/05-proof-theory/06-second-order-arithmetic/03-choice-and-transfinite.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Σ¹₁-AC₀ is not a Π¹₂-conservative extension of ACA₀
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (バーワイズ–シュリップ)
- **Detail:** The supplement claims that Σ¹₁-AC₀ is a Π¹₂-conservative extension of ACA₀ (Barwise–Schlipf). This is wrong: Σ¹₁-AC₀ proves the existence of a countable β-model (indeed Σ¹₁-AC₀ ≡ Π¹₁-CA₀ over ACA₀, and Π¹₁-CA₀ proves the existence of a countable coded β-model), which is a Π¹₂ statement not provable in ACA₀. The Barwise–Schlipf result concerns conservativity of Σ¹₁-AC₀ over ACA₀ for Π¹₁ (arithmetical) sentences, not Π¹₂. So the stated conservation level is too strong.
- **Proposed fix:** Σ¹₁-AC₀ is a conservative extension of ACA₀ for Π¹₁ (arithmetical) sentences (Barwise–Schlipf); it is not Π¹₂-conservative, since Σ¹₁-AC₀ ≡ Π¹₁-CA₀ over ACA₀ and proves the existence of a countable β-model, a Π¹₂ statement not provable in ACA₀.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Σ¹₁-AC₀ ≡ Π¹₁-CA₀ over ACA₀ contradicts the claimed landscape
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, and theorem pt:choice-landscape
- **Detail:** The supplement says Σ¹₁-AC₀ proves ACA₀ and that at the level of uniformization (Σ¹₂) it becomes equivalent to Δ¹₂-CA. But it omits the standard fact that Σ¹₁-AC₀ ≡ Π¹₁-CA₀ over ACA₀ (indeed Σ¹₁-AC₀ ≡ Π¹₁-CA₀). This is consistent with the page's own theorem pt:choice-landscape (Π¹₁-CA₀ proves existence of a countable β-model, and ATR₀+TI does not prove Π¹₁-CA₀), but the supplement's framing ('選ぶことが定義することで置き換えられるかどうかが、一様化の可否で決まっている') suggests that only at Σ¹₂ does choice collapse to comprehension, which is misleading: already Σ¹₁-AC collapses to Π¹₁-CA. This is an imprecise/overstated claim.
- **Proposed fix:** Already at the first level, Σ¹₁-AC₀ ≡ Π¹₁-CA₀ over ACA₀: countable choice for Σ¹₁ formulas is equivalent to Π¹₁ comprehension. The uniformization phenomenon at Σ¹₂ (Kondo–Addison) is a further instance of the same collapse, not the first one.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Harrison order: 'arithmetic infinite descending sequence' vs. 'no arithmetic descending sequence'
- **Category:** Supplement/remark error
- **Location:** problem pt:prob-full-model-beta / solution
- **Detail:** The problem states the fact as: 'there is a computable linear order which is not a well-order but has no arithmetic infinite descending sequence' (算術的な無限下降列をもたない). The solution then argues: if ARITH were a β-model, the witness Y (a nonempty subset with no least element) would be in ARITH, and 'from Y one can compute an infinite descending sequence relative to Y', giving an arithmetic descending sequence, contradicting the fact. But the fact as stated says there is no arithmetic infinite descending sequence; the sequence built is arithmetic in Y, and Y ∈ ARITH, so the sequence is arithmetic — this part is fine. However, the standard Harrison order fact is usually stated as: there is a computable linear order that is not a well-order but has no hyperarithmetic descending sequence (or: every arithmetic subset has a least element). The precise statement 'no arithmetic infinite descending sequence' is weaker than 'no hyperarithmetic descending sequence' and is actually the correct one needed here. The issue is that the solution's construction of the descending sequence from Y is only 'computable in Y', and since Y is arithmetic, the sequence is arithmetic — so the argument is valid. No error here; but the phrasing 'Y の元から始め、Y の中でより小さい元を探すことを繰り返す' requires that Y be infinite or that one can always find a smaller element; since Y has no least element and is nonempty, one can indeed always find a smaller element, so the sequence is infinite. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
