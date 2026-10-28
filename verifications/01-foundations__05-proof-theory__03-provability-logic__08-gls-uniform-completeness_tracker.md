# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/08-gls-uniform-completeness.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/08-gls-uniform-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are essentially correct, and the citations match their targets. The genuine problems are concentrated in the supplement and the remark: (1) the claim that persistence is needed only for the Σ-formula verification in Visser's theorem is false, since persistence is also required for the canonical-model completeness direction; (2) the claim that GLS is not closed under uniform substitution is false (GLS is closed under substitution); (3) the attribution of undecidability of quantified provability logic to Boolos ch. 17–18 is imprecise; (4) the informal description of the uniform realization as 'the hardest to prove' overstates the one-directional content of the theorem.

## Issues

### ISSUE-0001 [Open] Visser's theorem: persistence is needed only for the Σ-formula part
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The supplement claims that in Visser's theorem persistence is needed *only* in the part showing that p^{\ast} is a Σ sentence. This is false. Persistence is also used in the proof of the direction 'valid in all suitable models ⇒ GLV ⊢ A': the canonical model construction must yield a model satisfying persistence, and the argument that the canonical relation R satisfies the persistence condition (wRx and p ∈ w imply p ∈ x) relies on the axiom p → □p together with persistence being the frame condition. Moreover, the direction 'Σ-realization provable ⇒ valid in all suitable models' uses persistence to show that the Solovay realization is a Σ-realization (the case 1 ⊨ p uses persistence to conclude all successors of 1 satisfy p). So persistence is essential to the completeness direction as well, not only to the Σ-formula verification.
- **Proposed fix:** Persistence is used in two places: (a) to verify that the Solovay realization assigns Σ sentences to propositional variables, and (b) to ensure that the canonical model built for GLV satisfies the persistence frame condition (via the axiom p → □p), which is needed for the 'valid in all suitable models ⇒ GLV ⊢ A' direction. Replace the bullet with: 'フィッサーの定理で持続性が必要なのは、Σ 解釈の p^{\ast} が Σ 文であることを示す部分と、GLV の完全性の方向でカノニカルモデルが持続性を満たすことを保証する部分である。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] GLS is not closed under uniform substitution
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states 'GLS は正規でなく、一様代入でも閉じていない'. GLS is indeed not normal, but it *is* closed under uniform substitution: GLS is axiomatized by GL plus all instances of □A → A, and this axiom schema is closed under substitution, so any substitution instance of a GLS theorem is again a GLS theorem. (Equivalently, the set of always-true modal formulas is closed under substitution.) The claim that GLS is not closed under uniform substitution is false.
- **Proposed fix:** Remove the claim that GLS is not closed under uniform substitution. Replace with: 'GLS は正規でないが、公理 □A → A の図式は代入で閉じているので一様代入については閉じている。' (Only GLV is an example of a logic not closed under uniform substitution.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Misattribution of undecidability of quantified provability logic to Boolos ch. 17–18
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says 'Boolos 第 17, 18 章では、量化子を含む証明可能性論理が決定不能になることが示される'. In Boolos's *The Logic of Provability*, the undecidability of quantified provability logic (the result of Boolos and, independently, Artemov; also related to the undecidability of the set of valid formulas of quantified GL) is discussed, but the precise attribution and chapter reference are imprecise: the undecidability of predicate provability logic is due to Boolos (and Artemov), and it is not accurate to present chapters 17–18 as establishing exactly this. This is an overstated/imprecise historical attribution in a side remark.
- **Proposed fix:** Replace with: '量化子を含む証明可能性論理（述語様相論理 GL の量化版）が決定不能であることは Boolos とアルテモフによって独立に示された（本サイトの量化された証明可能性論理の系列で扱う予定）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Uniform realization described as 'the hardest to prove' realization
- **Category:** Supplement/remark error
- **Location:** remark after uniform completeness proof
- **Detail:** The remark concludes '一様な解釈は「最も証明しにくい」解釈である'. The precise content of uniform completeness is: there is a single realization ∗ such that PA ⊢ A^{\ast} implies GL ⊢ A for all A, i.e. PA-provability of A^{\ast} exactly matches GL-provability of A. Calling it 'the hardest to prove' is an informal overstatement: it is not literally true that for every realization # and every A, PA ⊢ A^{\ast} implies PA ⊢ A^{#} in a sense making ∗ 'hardest' — the theorem only gives that if PA ⊢ A^{\ast} then PA ⊢ A^{#} for all #, which is a one-directional implication, not a claim that ∗ minimizes provable formulas in a well-defined ordering. The phrasing is imprecise.
- **Proposed fix:** Replace with: '一様な解釈 ∗ は、PA で証明できる様相論理式の集合を GL の定理の集合に一致させる解釈であり、任意の解釈 # に対し PA ⊢ A^{\ast} ならば PA ⊢ A^{#} が成り立つという意味で「最も証明しにくい」解釈である。'
- **Reported:** 2026-10-28 (8ccef3d)
