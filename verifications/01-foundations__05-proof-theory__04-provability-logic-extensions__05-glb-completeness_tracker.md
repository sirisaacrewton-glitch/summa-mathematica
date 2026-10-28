# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/05-glb-completeness.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/05-glb-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Mischaracterization of Boolos's argument for C_h
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that Boolos handles the lifting of C_h under [1] by noting that C_h is Σ₃ and using general Σ₃ completeness. But C_h is a conjunction of statements of the form ∃b(ωPf(b,·) ∧ ∀a<b ¬ωPf(a,·)), which is Σ₃ (ωPf is Π₁, so ωPf is Π₁ and ∀a<b¬ωPf is Π₁, ∃b gives Σ₂ actually; in any case the relevant point is that the statement is not simply handled by 'Σ₃ completeness' in the way described). More importantly, the claim that Boolos 'uses general Σ₃ completeness' is an unsupported attribution: the standard treatment (Boolos, The Logic of Provability, ch. 15) does not proceed by invoking a general Σ₃-completeness theorem for these C_h statements; the formalized Σ₃-completeness is used for the Σ statements, and the ω-proof statements require the specific argument given here. The attribution is at best imprecise and stated more strongly than the literature supports.
- **Proposed fix:** Replace with: 'Boolos handles the lifting of the ω-proof statements by a direct construction; here we avoid the general theory of the Σ₃ hierarchy and instead build the ω-axiom directly for the specific statements needed (\ref{pt:least-omega-proof-sigma3}).' Remove the specific claim that Boolos relies on general Σ₃ completeness.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that GLB→GLP extension is easier than GL→GLB
- **Category:** Supplement/remark error
- **Location:** remark GLP
- **Detail:** The remark states 'Boolos によれば、GLB から GLP への拡張は、GL から GLB への拡張ほどの困難を含まない' (according to Boolos, the extension from GLB to GLP does not contain as much difficulty as the extension from GL to GLB). This is a strong comparative historical attribution. In Boolos's book the discussion is more nuanced: the step from GL to GLB already requires the two-stage Solovay construction, and the step to GLP requires the Japaridze/ Ignatiev machinery, which is substantial. Stating flatly that GLP is 'not as difficult' as GLB overstates and misattributes; the comparison is not a clean claim in the literature.
- **Proposed fix:** Soften to: 'Boolos notes that once the two-stage (proof / ω-proof) Solovay construction for GLB is in place, the passage to GLP follows a similar pattern, though the full arithmetical completeness of GLP (Japaridze) requires additional work.' Or remove the comparative difficulty claim.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Example: S with ⊢S↔□¬S is false but ω-inconsistent with PA
- **Category:** Unsupported fact
- **Location:** example 自分の矛盾性を主張する文
- **Detail:** The example asserts that a sentence S with ⊢S↔□¬S is false, that PA+S is consistent but ω-inconsistent. The fixed point of □¬p is indeed □⊥, so S↔□⊥, S is false (since PA is consistent, ¬□⊥ is true), and PA⊬¬S because PA⊬Con. However the claim that 'PA+S is ω-inconsistent' needs care: S≡□⊥, so PA+S proves □⊥, i.e. Bew(⊥). This does not by itself make PA+S ω-inconsistent; ω-inconsistency would require proving ∃x A(x) while proving ¬A(n̄) for each n. The text says '¬S↔¬□⊥ is ω-provable (by Σ₃-completeness), so PA+S is ω-inconsistent' — but ¬S is ¬□⊥ which is Π₁, and its ω-provability means ωBew(¬S), i.e. there is an ω-proof of ¬S. Having an ω-proof of ¬S while PA+S proves S (hence proves ¬¬S) does not establish ω-inconsistency of PA+S in the usual sense; the argument conflates ω-provability of ¬S with ω-inconsistency of PA+S. The correct statement is that PA+S is not ω-consistent in the sense that it proves S≡□⊥ while ¬S is ω-provable, but the precise formulation is imprecise.
- **Proposed fix:** Restate: 'S is false and PA+S is consistent (since PA⊬Con), but ¬S is ω-provable, so PA+S is not ω-consistent in the sense that it proves □⊥ while ¬□⊥ is ω-provable.' Clarify the exact sense of ω-inconsistency being claimed, or replace with the standard statement that PA+S proves its own inconsistency (□⊥) and hence is ω-inconsistent only in the weaker sense of proving a false Π₁ sentence.
- **Reported:** 2026-10-28 (10fede1)
