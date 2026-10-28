# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/04-pdl-completeness.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/04-pdl-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The completeness proof and the Kozen–Parikh lemma are carefully structured and the hypcheck is accurate; the main genuine problems are in the side remarks and intuition. The EXPTIME-completeness attribution is reversed (Pratt gives the upper bound, Fischer–Ladner the lower bound), the greatest-fixed-point intuition overstates what axiom 6 alone says, and the strong-completeness counterexample remark should make explicit that Γ is unsatisfiable so that Γ ⊨ ⊥ holds vacuously. No issues were found in the proofs, the axiom system, or the soundness argument.

## Issues

### ISSUE-0001 [Open] EXPTIME-completeness attribution reversed
- **Category:** Supplement/remark error
- **Location:** remark after logic:pdl-naive-bound
- **Detail:** The remark says EXPTIME-membership was shown by Pratt (1978) via an elimination method, and EXPTIME-hardness by Fischer–Ladner (1979). This reverses the standard attributions: the EXPTIME upper bound for PDL satisfiability is due to Pratt (1979, 'Models of program logics'), while the EXPTIME lower bound (hardness) is due to Fischer and Ladner (1979, 'Propositional dynamic logic of regular programs'). The elimination/ filtration-style argument gives the upper bound, not hardness.
- **Proposed fix:** EXPTIME に属することはプラット（1979）が、EXPTIME 困難であることはフィッシャー–ラドナー（1979）が示した。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Axiom 6 alone does not say [α*]A is a fixed point
- **Category:** Supplement/remark error
- **Location:** intuition (高い視点)
- **Detail:** The intuition claims that axiom 6 says [α*]A is a fixed point of X ↦ A∧[α]X and axiom 7 says it is the greatest fixed point. Axiom 6 is only the equivalence [α*]A ↔ A∧[α][α*]A, i.e. [α*]A is a pre-fixed point (A∧[α][α*]A → [α*]A is the direction that holds); it does not assert the reverse inequality [α*]A → A∧[α][α*]A as a 'fixed point' identity in the semantic sense, and calling it 'the fixed point' is imprecise. The greatest-fixed-point characterization requires both the unfolding equivalence and the induction (coinduction) principle together.
- **Proposed fix:** 公理 6 は [α*]A が A∧[α][α*]A と同値（展開）であることを述べ、公理 7 は（必然化と合わせて）「⊢ X→A∧[α]X を満たすどの X についても ⊢ X→[α*]A」を述べる。両者を合わせて初めて [α*]A が X↦A∧[α]X の最大不動点（正確には最大の前不動点を与える作用素の値）であることが言える。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Strong completeness counterexample wording
- **Category:** Supplement/remark error
- **Location:** remark (item 2) after logic:pdl-completeness
- **Detail:** The remark says strong completeness fails, citing logic:pdl-not-compact with Γ and A=⊥ as a counterexample. But strong completeness is about 'if Γ ⊨ A then some finite Γ₀ ⊆ Γ has Γ₀ ⊢ A'. With A=⊥, Γ ⊨ ⊥ means Γ is unsatisfiable; the failure of compactness gives an unsatisfiable Γ all of whose finite subsets are satisfiable, so no finite Γ₀ derives ⊥ — this is correct as a failure of strong completeness only if one also notes that Γ ⊨ ⊥ holds vacuously. The statement is essentially right but the phrasing 'Γ のすべてが真な状態で A も真なら' (semantic entailment) combined with A=⊥ needs the explicit note that Γ is unsatisfiable, otherwise the counterexample is not transparent and reads as if Γ ⊨ ⊥ were non-vacuous.
- **Proposed fix:** 「Γ のすべてが真な状態で A も真なら Γ の有限個から A が導ける」という強い完全性は成り立たない。実際 logic:pdl-not-compact の Γ はすべての有限部分が充足可能だが Γ 自身は充足不能なので Γ ⊨ ⊥ が（空虚に）成り立つのに、どの有限 Γ₀ ⊆ Γ からも ⊥ は導けない。
- **Reported:** 2026-10-28 (8ccef3d)
