# Verification tracker: `01-foundations/03-computation/03-advanced-computability/04-boundedness.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/04-boundedness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Harrison order order type and 'no hyperarithmetic descending sequence'
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると, ハリソン順序)
- **Detail:** The supplement states that there is a computable linear order which is not a well-order but in which no hyperarithmetic sequence is an infinite descending sequence, with order type ω₁^CK(1+η). The standard Harrison order has order type ω₁^CK(1+η), and it is true that it has no hyperarithmetic descending sequence (any descending sequence would be Δ¹₁, hence hyperarithmetic, and would give a hyperarithmetic well-founded initial segment of type ≥ ω₁^CK, contradicting the boundedness/Δ¹₁ characterization). However the phrase 'どの超算術的な列も無限下降列にならない' is imprecise: the correct statement is that there is no hyperarithmetic (equivalently Δ¹₁) function g:ℕ→D that is an infinite descending sequence. As written ('any hyperarithmetic sequence') it could be read as any sequence whose range is hyperarithmetic, which is the same thing, so this is borderline. More importantly, the claim that 'well-ordering is a Π¹₁ property and cannot be refuted by hyperarithmetic evidence' is correct but the sentence '整列順序であることは Π¹₁ の性質で' should be '整列でないことは Σ¹₁ で証拠立てられる（無限下降列の存在）が、超算術的な証拠では反証しきれない' — the current phrasing reverses the quantifier direction. The statement as written is essentially correct but the justification clause is misleading.
- **Proposed fix:** Replace with: '計算可能な全順序で、整列順序ではないが、超算術的（同値に Δ¹₁）な無限下降列をもたないものが存在する（ハリソン順序。順序型は ω₁^CK(1+η)、η は有理数の順序型）。これは有界性定理の裏側である：整列でないことは無限下降列の存在という Σ¹₁ の形で証拠立てられるが、その証拠（下降列）を超算術的なものに限ると、ω₁^CK より深い整列部分をもつため見つからない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Boldface boundedness: 'analytic (Σ¹₁) subset of WO'
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理, ボールド体の有界性定理)
- **Detail:** The supplement says: relativizing to allow arbitrary P⊆ℕ, 'the set WO of codes of well-orderings on ℕ, an analytic (Σ¹₁) subset of its subsets, has order types bounded by a countable ordinal'. The standard boldface boundedness theorem states: for a Σ¹₁ (boldface) set of codes of well-orderings, the set of order types is bounded by a countable ordinal (indeed by some ordinal < ω₁). The phrase 'WO ⊆ P(ℕ×ℕ) の解析集合（Σ¹₁）な部分集合' is garbled: WO is a subset of ℕ (codes), not of P(ℕ×ℕ), and the boundedness is about a Σ¹₁ subset of the codes, not 'of its subsets'. Also 'ω₁^CK の役を ω₁ が担う' is correct. The imprecision is that the boldface version bounds by an ordinal < ω₁ (a countable ordinal), which is stated, but the object being bounded ('WO の部分集合') is misdescribed.
- **Proposed fix:** Replace with: '相対化して任意の P⊆ℕ を許すと、整列順序の符号の集合 WO（ℕ の部分集合）の Σ¹₁（ボールド体）な部分集合に現れる順序型は、ある可算順序数（< ω₁）で押さえられる、という記述集合論の有界性定理になる（A. S. Kechris, Classical Descriptive Set Theory）。ω₁^CK の役を ω₁ が担う。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Kleene's O is Π¹₁-complete
- **Category:** Unsupported fact
- **Location:** fact comp:hyperarithmetic-fact, item 3
- **Detail:** Item 3 states 'O is Π¹₁-complete'. Kleene's O is a Π¹₁-complete set (this is a standard result: O is Π¹₁-complete, and in fact O is Σ¹₁-complete as well in the sense that its complement is Σ¹₁? No—O is Π¹₁-complete). The standard fact is that O is Π¹₁-complete (Rogers, Sacks). This is correct. However, the fact also says in item 1 that H_a for a∈O is defined by iterating the jump along computable ordinals α, but O indexes all computable ordinals via notations, and 'H_a のどれかに計算可能な集合を超算術的という' — the correct definition is: a set is hyperarithmetic iff it is Turing reducible to some H_a (a∈O), i.e., 'computable from' not 'computable to'. The phrase 'H_a のどれかに計算可能な集合' means 'a set computable in one of the H_a', which is correct (Turing reducible to). So item 1 is fine. Item 3 is correct. No error.
- **Proposed fix:** No change needed; if anything, clarify item 1 as 'H_a のいずれかに相対化して計算可能な集合'.
- **Reported:** 2026-10-28 (10fede1)
