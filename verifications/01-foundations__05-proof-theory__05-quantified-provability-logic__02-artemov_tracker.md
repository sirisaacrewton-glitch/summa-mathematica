# Verification tracker: `01-foundations/05-proof-theory/05-quantified-provability-logic/02-artemov.html`

<!-- source: 01-foundations/05-proof-theory/05-quantified-provability-logic/02-artemov.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Misattribution of Tennenbaum's theorem to Presburger
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 (second bullet)
- **Detail:** The supplement says that the first to use Tennenbaum's theorem in this kind of situation was "Presburger" (プリスコ). This is a misattribution. The relevant result (the set of realizable formulas of predicate logic is not arithmetical) is due to Artemov, and the Tennenbaum-style argument in this context is associated with Artemov (and Boolos's exposition). "Presburger" refers to Mojżesz Presburger (Presburger arithmetic), who has nothing to do with this. Even if Boolos's text is being paraphrased, the attribution as stated is false/misattributed.
- **Proposed fix:** Replace with: "The use of a Tennenbaum-style argument in this situation goes back to Artemov (in his proof that the set of realizable formulas of predicate logic is not arithmetical); Boolos presents this argument." If the original source is uncertain, state only: "This Tennenbaum-style argument in the present context is due to Artemov, as presented by Boolos."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that computable models are only the standard model
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から (last paragraph)
- **Detail:** The text says "計算可能な模型は標準モデルしかない（テネンバウム）" (a computable model can only be the standard model). Tennenbaum's theorem says that no nonstandard model of PA has a computable addition or multiplication (with the order/discrete structure). It does not say that every computable model is standard; rather, it says nonstandard models cannot be computable. The phrasing "computable models are only the standard model" is imprecise/overstated, since the standard model is the unique (up to isomorphism) model with computable operations among models of PA, but the statement as written suggests a broader claim. Also, the parenthetical attribution to Tennenbaum is fine, but the sentence should be corrected to: "a nonstandard model of PA cannot have computable addition and multiplication (Tennenbaum), so under the computability requirement the interpretation must be the standard model."
- **Proposed fix:** Rewrite as: "解釈が計算可能になると、テネンバウムの定理により非標準モデルは排除され、解釈は標準モデルに限られる（非標準モデルでは加法も乗法も計算可能でない）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Solution to problem pt:prob-artemov-no-D invokes Hilbert–Bernays completeness loosely
- **Category:** Unsupported fact
- **Location:** solution (pt:prob-artemov-no-D)
- **Detail:** The solution says one can take a realization of a nonstandard model of PA "by the arithmetical completeness theorem of Hilbert–Bernays, as is generally said." This is a vague and potentially misleading attribution: the Hilbert–Bernays arithmetical completeness theorem concerns provability logic GL (Solovay's theorem is the arithmetical completeness of GL; Hilbert–Bernays–Löb derivability conditions are the HBL conditions). The statement as written is imprecise and attributes a result to the wrong name. Since the problem explicitly says a rigorous proof is not required, the reference should be corrected or removed.
- **Proposed fix:** Replace with: "One can take a realization induced by a nonstandard model of PA (or a model of T plus ¬S) using the standard arithmetical semantics of QML; the existence of such a realization follows from the completeness of the predicate calculus applied to the theory T ∧ ¬S when consistent." Remove the Hilbert–Bernays attribution.
- **Reported:** 2026-10-28 (8ccef3d)
