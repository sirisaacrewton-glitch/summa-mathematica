# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/03-reflection-incompactness.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/03-reflection-incompactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (pigeonhole lemma, Leivant, reflection/iterated consistency equivalence, Solovay hierarchy, incompactness) are logically sound. The genuine problems concentrate in the supplement and remarks: the claim that Geach-canonical systems like K4/S4 enjoy strong completeness is false (Geach completeness is weak completeness), the description of the fixed-point theorem is inaccurate, and the 1-consistency justification in the fewer-reflections hypcheck misuses N ⊨ PA. These are reported as supplement/remark errors.

## Issues

### ISSUE-0001 [Open] K4/S4 strong completeness claim in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The supplement claims that in systems whose canonical model is a proper frame for the logic (citing \ref{logic:geach-completeness}), every L-consistent set is true at a world of the canonical model, so strong completeness holds. This is false as stated: for K4 the canonical model is a proper K4-frame, yet K4 is not strongly complete (K4 is not canonical for its frame class in the strong sense; e.g. the set {◊p_0} ∪ {□(p_i → ◊p_{i+1})} is K4-consistent but has no K4-model, since K4-frames need not be conversely well-founded but the transitivity plus the ascending chain argument still fails only for irreflexive well-founded frames — more precisely, K4 is not strongly complete). The Geach completeness theorem gives weak completeness (validity), not strong completeness, so citing it to conclude strong completeness is an improper use. The claim that 'non-compactness is specific to GL' is thus overstated.
- **Proposed fix:** Replace with: 'Non-compactness is not specific to GL: K4 (and other transitive logics) also fail strong completeness, even though their canonical frames are proper frames. What is special to GL is that its canonical frame fails to be conversely well-founded, which is how the failure manifests here (\ref{pt:gl-not-strongly-complete}).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Fixed-point theorem description in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says the fixed-point theorem (\ref{pt:page-fixed-point-theorem}) states that solutions of equations in which p occurs only under modalities can be expressed by letterless formulas or formulas not containing p. This misstates the theorem: Solovay/GL fixed-point theorem gives an explicit fixed point in the same language (possibly containing other variables), not necessarily letterless nor free of other variables. The phrase '閉様相論理式や p 以外の変数の論理式で表せる' is imprecise/false as a characterization.
- **Proposed fix:** Replace with: 'the fixed-point theorem states that every modalized equation A(p) has an explicit solution (a fixed point) B with the same propositional variables as A minus p, and this B is unique up to GL-provable equivalence.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 1-consistency weakening claim in hypcheck/supplement
- **Category:** Supplement/remark error
- **Location:** pt:fewer-reflections / hypcheck and supplement
- **Detail:** The hypcheck and supplement claim that for the arithmetic part it suffices that PA does not prove false Σ_1 sentences (1-consistency), because (□^{m+1}⊥)* = Bew(...) is a Σ sentence. But the argument derives PA ⊢ (□^{m+1}⊥)* and then concludes (□^{m+1}⊥)* is true using N ⊨ PA. To go from 'PA proves a Σ sentence' to 'that Σ sentence is true' one needs exactly 1-consistency (or Σ_1-soundness), which is what is being invoked; however the text also says 'N ⊨ PA より (□^{m+1}⊥)* は真となり' which is a non-sequitur: N ⊨ PA alone does not make a PA-provable sentence true unless PA is sound. The step conflates soundness with 1-consistency. The claim that 1-consistency suffices is correct, but the written justification ('N ⊨ PA より...真') is wrong.
- **Proposed fix:** Replace 'N ⊨ PA より (□^{m+1}⊥)* は真となり' with: 'Since (□^{m+1}⊥)* is a Σ sentence and PA is 1-consistent (does not prove false Σ sentences), PA ⊢ (□^{m+1}⊥)* implies (□^{m+1}⊥)* is true, contradicting \ref{pt:box-bot-false}.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Optimality remark: 'n-1 uses of transitivity'
- **Category:** Supplement/remark error
- **Location:** remark 評価の最良性
- **Detail:** The remark says that from ⋀_{i<n}(□^{i+1}p → □^{i}p) one derives □^{n}p → p by 'tautologies (transitivity n-1 times)'. This is imprecise: the derivation uses the transitivity axiom schema □A → □□A (4) iteratively, not 'tautologies', and the count 'n-1 times' is not justified. More importantly the claim that the maximum k is exactly n relies on Leivant's theorem, which is fine, but the derivation sketch is stated as if purely tautological.
- **Proposed fix:** Replace with: 'using the transitivity axiom □A → □□A repeatedly (n-1 times) together with the given conjuncts, one derives □^{n}p → p; combined with \ref{pt:leivant} the maximal k is exactly n.'
- **Reported:** 2026-10-28 (8ccef3d)
