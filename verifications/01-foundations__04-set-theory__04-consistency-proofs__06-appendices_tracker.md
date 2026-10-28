# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/06-appendices.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/06-appendices.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] ω-model fact 3 misattributes the method to the omitting types theorem
- **Category:** Supplement/remark error
- **Location:** set:omega-model-facts (fact 6.13), item 3
- **Detail:** Item 3 states that every countable ω-model has an elementary extension that is an ω-model but not well-founded, and attributes this to the omitting types theorem. The standard construction (Kunen, Set Theory, Ch. IV §10) uses the compactness theorem: add a new constant c together with the axioms c∈ω and c≠n for each n, and take a countable elementary extension. The omitting types theorem is not the tool used here, and the claim as stated (an elementary extension that is still an ω-model but ill-founded) is exactly the compactness construction. The attribution is therefore wrong.
- **Proposed fix:** 3. 任意の可算な ω モデルは、ω モデルであるが整礎でない初等拡大をもつ（コンパクト性定理による：新しい定数 c に対し c∈ω と c≠n（各 n）を加えた理論にコンパクト性定理を適用する）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] The remark's claim that S refutes ∃M(M⊨⌜S⌝) is not justified and is stronger than Kunen's statement
- **Category:** Supplement/remark error
- **Location:** set:remark (自分自身の「集合モデル」を定義する理論)
- **Detail:** The remark asserts that S cannot prove ∃𝔐(𝔐⊨⌜S⌝) and that 'in fact it refutes it'. The refutation is not established: the argument given only shows that the standard axioms φ_{n} are satisfied by R(b) while some nonstandard 'axiom' is not, which shows that R(b) is not a model of S, not that S proves ¬∃𝔐(𝔐⊨⌜S⌝). Moreover, since S⊢¬CON(⌜S⌝), the formalized soundness direction gives S⊢¬∃𝔐(𝔐⊨⌜S⌝) only if S proves the relevant instance of formalized soundness, which requires that S be able to formalize the satisfaction relation for its own (nonstandard) axioms; this is precisely the delicate point Kunen leaves implicit. The parenthetical 'actually refutes it' is stated more strongly than the cited source supports.
- **Proposed fix:** Replace '（実際は反証する）' with '（S が形式化された健全性を自分の公理について使えるなら、S⊢¬∃𝔐(𝔐⊨⌜S⌝) となる。この点の形式化の細部は本サイトでは確かめていない）'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] The claim that the finite model {0} makes Con(S) 'finitistically correct' is imprecise
- **Category:** Supplement/remark error
- **Location:** set:sec-metatheory-model-theory, paragraph on finitists
- **Detail:** The text says that S := extensionality + separation + ∀y(y=0) has {0} as a model, so Con(S) is 'finitistically correct', and that one need not assume Con(ZF⁻) as in set:con-zero-model. But the consistency of S is established here by exhibiting a model and invoking soundness (set:model-consistency), which is a metatheoretic argument, not a finitistic proof in the strict sense; and the comparison with set:con-zero-model is misleading because that corollary derives Con(ZF⁻) from the existence of the zero model, whereas here the model {0} is exhibited directly. The statement overstates what a finitist would accept.
- **Proposed fix:** 有限主義者でも、有限モデルを具体的に書き下せる理論は無矛盾だと認める。たとえば S := 外延性 + 分出 + ∀y(y=0) は {0} をモデルにもつので、S の無矛盾性は具体的な有限構造の検査で確かめられる（set:con-zero-model のように Con(ZF⁻) を仮定する必要はない）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] The remark on the finite nature of the interpretation lemma overstates Kunen's claim
- **Category:** Supplement/remark error
- **Location:** set:remark (有限的な証明)
- **Detail:** The remark says Kunen states that the lemma can be shown 'in the same way as the easy direction of Gödel's completeness theorem (soundness)', i.e. by induction on the length of the derivation. Kunen's actual remark (Set Theory, Ch. IV §10) is that the relativized proof is obtained by a straightforward syntactic transformation of the derivation, and he does not phrase it as 'the easy direction of completeness'. The attribution is slightly inaccurate, though the mathematical content (the transformation is finitistic) is correct.
- **Proposed fix:** Kunen はこの補題を、導出の各段階を相対化した導出に書き換える、導出の長さに関する帰納法で示せると述べている（完全性定理のやさしい方向と同様の構成的な議論である）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Fact 6.9(1) attributes to ZFC a single sentence '⟨H(ω₁),∈⟩⊨⌜ZFC−P⌝' without noting the dependence on the formalized satisfaction relation
- **Category:** Unsupported fact
- **Location:** set:con-weaker-theories, proof
- **Detail:** The proof of fact 6.9(1) says that one formalizes the proof of set:h-kappa-zfc-minus-p inside ZFC to obtain the single sentence '⟨H(ω₁),∈⟩⊨⌜ZFC−P⌝'. This is correct in outline, but the fact is stated without the hypothesis that the formalized satisfaction relation and the formalized soundness theorem are available (fact 6.6), and without noting that H(ω₁) must be defined inside ZFC via the formalized satisfaction relation. As stated, the fact is slightly stronger than what is justified by the cited results alone.
- **Proposed fix:** Add to the statement of fact 6.9: 'ここで ⌜ZFC−P⌝ は set:formalized-semantics の形式化された充足関係を用いて解釈する。' and in the proof note that the formalized soundness theorem (the easy direction of the formalized completeness theorem in fact 6.6) is what yields CON(⌜ZFC−P⌝).
- **Reported:** 2026-10-28 (10fede1)
