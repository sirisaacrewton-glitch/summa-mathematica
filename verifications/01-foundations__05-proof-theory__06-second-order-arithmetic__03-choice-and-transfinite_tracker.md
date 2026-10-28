# Verification tracker: `01-foundations/05-proof-theory/06-second-order-arithmetic/03-choice-and-transfinite.html`

<!-- source: 01-foundations/05-proof-theory/06-second-order-arithmetic/03-choice-and-transfinite.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, lemmas, proofs) is largely correct. The serious problems are in the supplement and in the Harrison-order problem: (1) the claim that Σ¹₁-AC₀ is a Π¹₂-conservative extension of ACA₀ is false, since Σ¹₁-AC₀ proves Π¹₁-CA₀ and hence Con(ACA₀); (2) the Harrison order fact is stated too weakly (needs 'no hyperarithmetic descending sequence', not 'no arithmetic descending sequence') for the ARITH argument to work; (3) the Π¹₁-CA₀/β-model equivalence should be phrased 'for every set there is a countable β-model containing it'. The remark about ω-models and induction strength is imprecise but minor.

## Issues

### ISSUE-0001 [Open] Σ¹₁-AC₀ is not a Π¹₂ conservative extension of ACA₀
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (バーワイズ–シュリップ)
- **Detail:** The supplement claims that Σ¹₁-AC₀ is a Π¹₂-conservative extension of ACA₀ (attributed to Barwise–Schlipf). This is false: Σ¹₁-AC₀ proves the existence of a countable β-model (indeed Σ¹₁-AC₀ ≡ Π¹₁-CA₀ over ACA₀ in the relevant sense, and Σ¹₁-AC₀ proves Π¹₁-CA₀), so it proves Con(ACA₀), which is a Π⁰₁ (hence Π¹₂) statement not provable in ACA₀. Thus Σ¹₁-AC₀ is not conservative over ACA₀ for Π¹₂ sentences. The Barwise–Schlipf result concerns Σ¹₁-AC₀ being conservative over a weaker base (e.g. over RCA₀ for certain classes), not Π¹₂-conservativity over ACA₀.
- **Proposed fix:** Replace with: *Conservativity of Σ¹₁-AC₀.* Σ¹₁-AC₀ is conservative over RCA₀ for Π¹₁ sentences (Barwise–Schlipf); in particular it does not prove new arithmetic (Π⁰₁) theorems beyond RCA₀. (Note Σ¹₁-AC₀ does prove Π¹₁-CA₀, so it is not conservative over ACA₀ for Π¹₂ sentences.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Π¹₁-CA₀ equivalence with existence of countable β-models needs care
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (β モデルと Π¹₁-CA₀)
- **Detail:** The supplement states that Π¹₁-CA₀ is equivalent over ACA₀ to 'for every set there is a countable β-model containing it'. The correct Simpson result (VII.5) is that Π¹₁-CA₀ is equivalent to the statement that every set is contained in a countable β-model (or that for every X there is a countable coded β-model containing X). The phrasing '任意の集合を含む可算な β モデルが存在する' is acceptable if read as 'for every set, a countable β-model containing it exists', but as written it can be read as 'there exists a countable β-model containing every set', which is impossible. The statement should be made precise.
- **Proposed fix:** Rewrite: Π¹₁-CA₀ is equivalent over ACA₀ to the statement 'for every set X there exists a countable coded β-model S with X ∈ S' (Simpson, Subsystems of Second Order Arithmetic, Theorem VII.5.9 / Corollary VII.5.10).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Harrison order: 'no arithmetic infinite descending sequence' vs. ARITH argument
- **Category:** Supplement/remark error
- **Location:** problem pt:prob-full-model-beta / solution
- **Detail:** The solution argues that if ARITH were a β-model, the witness Y to ¬WO(X) would be in ARITH, and then an infinite descending sequence computable from Y would be arithmetic, contradicting Harrison's fact. This is correct only if the Harrison order's property is 'no infinite descending sequence arithmetic in (or computable from) any arithmetic set', i.e. no hyperarithmetic descending sequence. The stated fact '算術的な無限下降列をもたない' (no arithmetic infinite descending sequence) is weaker than what is needed: the sequence built from Y is arithmetic in Y, not necessarily arithmetic (Δ⁰₁). The correct Harrison fact is that the Harrison order is a computable linear order that is not a well-order but has no hyperarithmetic (equivalently no Δ¹₁) infinite descending sequence.
- **Proposed fix:** State the fact as: 'There is a computable linear order that is not a well-order but has no hyperarithmetic (Δ¹₁) infinite descending sequence (the Harrison order).' Then the sequence built computably from Y (which is arithmetic, hence hyperarithmetic) contradicts this.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Claim that ω-models cannot distinguish induction strength is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The bullet says: from pt:omega-beta-induction.1, independence proofs via ω-models cannot distinguish the strength of induction (all ω-models satisfy full induction); to separate induction strength one needs nonstandard models. This is misleading: ω-models do satisfy full induction, but they can still distinguish subsystems by their set-existence axioms (e.g. RCA₀ vs ACA₀ vs ATR₀ have different ω-models). The claim is only correct for the specific induction scheme, not for the strength of subsystems generally. As stated ('帰納法の強さを分けるには超準モデルが必要') it is acceptable for induction alone, but the preceding sentence 'ω モデルを使った独立性の証明では、帰納法の強さは区別できない' is fine; the issue is the overgeneralization that ω-models cannot be used to separate subsystems. This is borderline; flag as imprecise.
- **Proposed fix:** Clarify: 'ω-models all satisfy full induction, so ω-model arguments cannot separate subsystems by their induction axioms alone; separating induction strength (e.g. Σ¹₁-TI vs ATR₀) requires nonstandard models or proof-theoretic methods. (ω-models do separate subsystems by their set-existence axioms.)'
- **Reported:** 2026-10-28 (8ccef3d)
