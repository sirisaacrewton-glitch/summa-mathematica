# Verification tracker: `01-foundations/05-proof-theory/05-quantified-provability-logic/02-artemov.html`

<!-- source: 01-foundations/05-proof-theory/05-quantified-provability-logic/02-artemov.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Misattribution of the Tennenbaum-style use to Presburger
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says that the first to use Tennenbaum's theorem in this kind of situation was "Presburger" (プリスコ). This is a misattribution. The argument that the set of realizable formulas of predicate logic is not arithmetical, using a Tennenbaum-style argument, is due to Artemov (and related work by Plisko / Vardanyan), not to Presburger (Mojżesz Presburger is known for Presburger arithmetic, not for this). The claim as stated is historically false and is exactly the kind of stated-only attribution that must be correct.
- **Proposed fix:** Replace with: "The use of a Tennenbaum-style argument in this context (to show that the set of realizable formulas of predicate logic is not arithmetical) goes back to Artemov; related results on the non-arithmeticity of such sets are due to Plisko and Vardanyan."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim that the argument works for any theory with the same properties
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that replacing PA by any other theory with the same properties (T1)–(T8) provable, induction, Σ-completeness, consistency) would make the argument go through. This is imprecise: the proof of Lemma 2.11 (standardness) uses not only these but also the specific β-function coding (T7), (T8) and the representability of the computable relations inside the theory, and the diagonal argument requires that the theory's provability predicate satisfy the derivability conditions used in Lemma 2.10 (in particular that the machine p's code e is a standard numeral and that C_{0}, C_{1} are Σ-definable in the theory). The claim is hedged with "本サイトでは確かめていない", but as stated it is stronger than what is justified.
- **Proposed fix:** Weaken to: "The argument uses (T1)–(T8) being theorems of PA, induction inside PA, Σ-completeness, and consistency; whether it carries over to other arithmetical theories with these properties would require checking that the β-function coding and the derivability conditions used in Lemmas 2.10 and 2.11 are available, which we do not verify here."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Imprecise statement of Tennenbaum's theorem
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement states Tennenbaum's theorem as "in a nonstandard countable model of PA neither addition nor multiplication is computable". The standard statement is that there is no nonstandard countable model of PA in which both addition and multiplication are computable (i.e., not both are computable); it is not true that in every nonstandard countable model neither operation is computable — one of them may be computable while the other is not. The phrasing "加法も乗法も計算可能でない" (neither is computable) is stronger than the theorem.
- **Proposed fix:** Replace with: "Tennenbaum's theorem: there is no nonstandard countable model of PA in which both addition and multiplication are computable (at least one of the two operations fails to be computable)."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Incorrect claim about Π^0_1-completeness in V
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The supplement says the next page shows that the set of always true sentences is "Π^0_1 complete in V". This is imprecise/incorrect as stated: the set of always true QML sentences is not arithmetical (Theorem 2.13), so it cannot be Π^0_1 in the standard sense; the intended statement concerns the set of always provable sentences being Π^0_2-complete (Vardanyan) and the set of always true sentences being Π^0_1-hard or complete relative to V, which needs careful formulation. As written the claim is false or at best meaningless.
- **Proposed fix:** Replace with: "The next page shows, using the same tools ({T}, D, R) together with a unary predicate letter G, that the set of always provable sentences is Π^0_2-complete (Vardanyan), and that the set of always true sentences is Π^0_1-hard (indeed not arithmetical, by Theorem 2.13)."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Solution to Problem 1 invokes Hilbert–Bernays completeness imprecisely
- **Category:** Unsupported fact
- **Location:** pt:prob-artemov-no-D / solution
- **Detail:** The solution says one can take a realization by arithmetically definable relations on the natural numbers of a nonstandard model of PA (or a model of T ∧ ¬S), citing "Hilbert–Bernays' arithmetical completeness theorem". This is a vague and potentially misleading appeal: the relevant fact is that every consistent theory has an arithmetically definable model (via the arithmetized completeness theorem), but the solution does not verify that the resulting realization satisfies {T}* while making {S}* false, and the parenthetical "(または T を満たすが S を満たさない模型)" conflates the model with the realization. Since the problem explicitly asks only for an explanation, the appeal should be stated correctly.
- **Proposed fix:** State: "By the arithmetized completeness theorem, if T ∧ ¬S is consistent, it has a model whose domain and relations are arithmetically definable; taking this as the realization * gives {T}* true and {S}* false, so {T} → {S} is not always true."
- **Reported:** 2026-10-28 (10fede1)
