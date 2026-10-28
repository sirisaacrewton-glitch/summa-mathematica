# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/05-intuitionistic-kripke.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/05-intuitionistic-kripke.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the Kripke model definition, persistence, soundness, prime extension, truth lemma, completeness, generated submodel and disjunction property arguments are all sound, and the hypcheck comments are accurate. The only genuine problems are in the supplement: the proof-theoretic sketch of the disjunction property ('the last rule of a normal derivation must be ∨I') is imprecise/false as stated, and the finite-model/decidability remark slightly overstates what problem 5.14 provides. Both are minor and fixable by rewording.

## Issues

### ISSUE-0001 [Open] Disjunction property via normalization: last rule need not be ∨I
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理 (second bullet)
- **Detail:** The supplement claims that in a normal derivation of φ∨ψ the last rule must be ∨I. This is false: the last rule could be an elimination rule (e.g. ∨E, →E, or a rule discharging into the disjunction), and the standard proof instead proceeds by induction on the derivation, analyzing the last rule and using the fact that a normal derivation ending in an elimination whose major premise is a variable cannot produce a disjunction (or by considering the whole derivation and showing the disjunction is either an ∨I or arises from an elimination whose conclusion is a disjunction, which requires more than 'the last rule is ∨I'). The stated justification is too strong/imprecise.
- **Proposed fix:** 選言特性は、カット除去や正規化を使った証明論的な方法でも示せることが知られている（構成的な証明：$\varphi\vee\psi$ の正規な導出を考え、最後の規則について場合分けする。導出が $\vee$I で終わる場合は明らかで、除去規則で終わる場合は正規形の性質（主前提が変数である除去の結論は原子式）から $\varphi\vee\psi$ が導かれることはなく、結局 $\vee$I の場合に帰着する）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Finite model property bound 2^n and decidability claim
- **Category:** Supplement/remark error
- **Location:** supplement / 有限モデル性と決定可能性
- **Detail:** The supplement says that from problem 5.14 one can decide derivability by checking all models with at most 2^n states. Problem 5.14 gives a model with at most 2^n states (where n is the number of subformulas), but the supplement's phrasing 'checking all models with at most 2^n states' is imprecise: one must check all models over the subformula set (or all valuations on subsets of subformulas), and the number of such models is finite but the statement as written ('all models with at most 2^n states') is not literally what the problem yields, since there are infinitely many possible valuations/propositional variables. Also the decidability conclusion is correct but the justification as stated is slightly overstated.
- **Proposed fix:** 有限モデル性と決定可能性. \ref{logic:prob-ikr-finite} から、$\varphi$ が導出できるかは、$\varphi$ の部分論理式集合 $\mathrm{Sub}(\varphi)$ 上の（$2^{n}$ 個以下の状態をもつ）モデルをすべて調べれば判定でき、NJ の導出可能性は決定可能である。
- **Reported:** 2026-10-28 (10fede1)
