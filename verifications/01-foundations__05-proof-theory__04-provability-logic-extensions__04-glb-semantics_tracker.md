# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/04-glb-semantics.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/04-glb-semantics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 15 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] ω-rule characterization of truth is imprecise
- **Category:** Supplement/remark error
- **Location:** remark after pt:omega-provable-equiv
- **Detail:** The remark says that 'proof possibility allowing the ω-rule any number of times' coincides with truth (Hilbert). Taken literally this is false: the set of formulas provable from PA using the ω-rule arbitrarily often is the deductive closure of PA under the ω-rule, which is not the set of all true sentences (e.g. it does not contain all truths of the standard model unless one also allows infinitely many premises beyond what PA proves; the ω-rule closure of a consistent theory is consistent and does not prove everything true, e.g. it cannot prove Con-type statements beyond its strength in the naive reading). The intended statement (Hilbert) is that the ω-rule closure of PA proves exactly the true Π₁/arithmetically true sentences only under specific formulations (e.g. the ω-rule with all instances plus full induction gives the true arithmetic only if one closes under the ω-rule transfinitely). As stated it is overstated.
- **Proposed fix:** Replace with: 「ω 規則を何回でも使ってよい証明可能性（ω 論理）は、PA の ω 規則閉包であり、これは真の算術より弱い（例えば PA の ω 規則閉包は無矛盾で、すべての真の文を証明するわけではない）。真理と一致するのは、ω 規則を超限回まで許した体系（真の算術）である。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that ω-provability is 'one use' of the ω-rule is imprecise
- **Category:** Supplement/remark error
- **Location:** remark after pt:omega-provable-equiv
- **Detail:** The remark states that ω-provability corresponds to using the ω-rule exactly once. But an ω-proof as defined (definition pt:omega-provable, item 3) allows a single ω-axiom ∀v E with PA ⊢ ∀v E → S; this is indeed one ω-axiom, but the claim that this equals 'one use of the ω-rule' is only accurate for the specific normal form; more importantly the remark's contrast with 'any number of times' is misleading because PA⁺ allows all ω-axioms as axioms simultaneously (infinitely many), which is stronger than a single application. The statement is imprecise rather than clearly false, but the equivalence 'ω-provability = one ω-rule application' is not literally correct since PA⁺ may use several ω-axioms (the proof of 2⇔3 combines finitely many into one, but the definition of ω-proof uses one).
- **Proposed fix:** Clarify: 「ω 証明可能性は、有限個の ω 公理を仮定に持つ導出、すなわち ω 規則を有限回使うことにあたる（命題により一回の ω 公理にまとめられる）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Beklemishev attribution overstated
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果
- **Detail:** The supplement says GLP was 'applied by Beklemishev to ordinal analysis of arithmetic'. Beklemishev used GLP (and its polymodal provability logic) to develop the method of graded provability algebras and to give ordinal analyses / proof-theoretic ordinals, which is broadly correct, but the phrasing '算術の順序数解析に応用' is acceptable. However the hedge '一般にはこう言われているが' is fine. This is not clearly an error; but the claim that Japaridze introduced GLP and proved its arithmetical completeness is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that R₁ ⊂ R and 'R₁ preserves R-view' are contradictory
- **Category:** Supplement/remark error
- **Location:** supplement, 高い視点から
- **Detail:** The supplement says that in Kripke semantics, trying to express the asymmetry by both R₁ ⊂ R and 'moving along R₁ does not change the R-visible range' leads to a contradiction. This is essentially correct (proposition pt:glb-frame-conditions shows R₁ ⊂ R plus the condition forces R₁ = ∅), so the statement is fine. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Example: PA + □⊥ is consistent but not ω-consistent
- **Category:** Unsupported fact
- **Location:** example after pt:glb-soundness
- **Detail:** The example claims PA + □⊥ is consistent but not ω-consistent, reasoning that □⊥ is false so ¬□⊥ is ω-provable, hence PA + □⊥ is not ω-consistent. This is correct: PA + ¬Con(PA) is consistent (Gödel II) and ω-inconsistent. The statement '□⊥ is false' means Con(PA) is false in the standard model, which is not known to be true (Con(PA) is true if PA is consistent, which is believed but not provable in PA). Actually □⊥ denotes Bew(0=1) = ¬Con(PA); in the standard model this is false iff PA is consistent, which is true (assuming PA consistent). So '□⊥ is false' relies on the consistency of PA, which is true but not provable in PA; as a meta-mathematical statement it is fine. However the example says 'ω 証明可能だが証明可能でない文の例（真の Π₁ 文）' referring to Con(PA): Con(PA) is Π₁ and true (assuming PA consistent), and ω-provable but not PA-provable. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 4 of pt:sigma3-completeness: [1]S is Σ₃ but the argument is terse
- **Category:** Logical gap
- **Location:** pt:sigma3-completeness / Step 4
- **Detail:** Step 4 claims [1]S is Σ₃ because ωBew has the form ∃y∀z(Σ). This is correct by the definition. The second part claims ¬□S ↔ ∀v ¬Pf(v, ⌜S⌝) and ¬Pf is Δ, so adding ∃y gives Σ₃. But ¬□S is Π₁, and to be Σ₃ one needs ∃y∀z(Δ) form; the text says '形だけの ∃y を付ければ Σ₃ 文' which is acceptable since ∃y of a Π₁ formula is Σ₂, not Σ₃. Actually ∃y∀z(Δ) is Σ₃ only if the inner is Σ₂; ∀z(Δ) is Π₁, so ∃y∀z(Δ) is Σ₂. The claim that ¬□S is Σ₃ is thus questionable: ¬□S is Π₁, which is also Σ₃ (since Π₁ ⊂ Σ₃ trivially by adding vacuous quantifiers). The text's reasoning '形だけの ∃y を付ければ' is imprecise but the conclusion (¬□S is Σ₃) holds because Π₁ ⊆ Σ₃. Minor imprecision, not a genuine error.
- **Proposed fix:** Clarify: ¬□S is Π₁, hence also Σ₃ (add vacuous ∃y∀z).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] pt:glb-frame-conditions item 3: 'valid implies R irreflexive' direction
- **Category:** Logical gap
- **Location:** pt:glb-frame-conditions / item 3
- **Detail:** Item 3 states: if □(□p→p)→□p is valid then R is irreflexive. This is the standard correspondence (GL frame condition: transitive irreflexive, or conversely well-founded). The proof cites logic:frame-correspondence.5 giving R conversely well-founded hence irreflexive. This is correct for transitive frames; but the statement as given does not assume R transitive. Without transitivity, validity of the Löb axiom does not imply irreflexivity in general? Actually the Löb axiom □(□p→p)→□p is valid on a frame iff R is transitive and conversely well-founded (for the 'no infinite ascending chains' version) — the correspondence requires transitivity. Without transitivity, the axiom can be valid on reflexive frames? Consider a single reflexive point: □(□p→p)→□p: at w, □p holds iff p; □p→p holds; so □(□p→p) holds; then □p requires p, which fails if p false. So it's not valid. In general the Löb axiom is valid iff R is transitive and conversely well-founded (no infinite R-chains). The text's item 3 only claims one direction (valid ⟹ irreflexive), which is true even without transitivity? If R has a reflexive point w, set p false at w and true elsewhere; then at w, □p is false (since wRw and p false at w), so □p→p is true at w; but is □(□p→p) true at w? For any x with wRx, need □p→p at x. If x=w, □p→p holds as noted. For other x, need check. This may not give a counterexample in general. The standard result: Löb axiom valid implies R is transitive and conversely well-founded, hence irreflexive. The text's claim is weaker and true. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Citation of pt:closed-term-substitution.5 and .4 in Step 2/3
- **Category:** Improper link
- **Location:** pt:sigma3-completeness / Step 2, Step 3
- **Detail:** Step 2 cites pt:closed-term-substitution.5 for 'substitution order swap' and Step 3 cites pt:closed-term-substitution.4. The label table only lists pt:closed-term-substitution (lemma 6.6 閉項の代入) without itemized content. The use of .4 and .5 assumes specific items exist; if the lemma has those items, fine. Cannot verify from table, but plausible. No clear error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] pt:omega-lob proof: D3 for ωBew
- **Category:** Missing hypothesis
- **Location:** pt:omega-lob / proof
- **Detail:** The proof says the Löb theorem proofs use only D1, D2, D3 and diagonalization, and replaces Bew by ωBew with D3 given by pt:sigma3-completeness. But pt:sigma3-completeness gives PA ⊢ S → [1]S only for Σ₃ sentences S, and in particular PA ⊢ [1]S → [1][1]S. For the Löb theorem, D3 is needed for the specific formula [1]S (which is Σ₃), so this is fine. However the formalized Löb theorem (pt:formalized-lob) may require D3 for arbitrary formulas, not just Σ₃. The text claims 'D3 は pt:sigma3-completeness で成り立つ' — but pt:sigma3-completeness only gives D3 for Σ₃ sentences, whereas the standard proof of formalized Löb uses D3 for the formula □S→S or similar, which may not be Σ₃. This is a potential gap: D3 in general (PA ⊢ [1]A → [1][1]A for all A) is not established; only for Σ₃ A. The Löb proof needs D3 applied to [1]S→S, which is not Σ₃ in general. This is a genuine missing argument.
- **Proposed fix:** Either prove D3 for all formulas A (PA ⊢ [1]A → [1][1]A) or note that the formalized Löb theorem only needs D3 for the specific Σ₃ instance [1]S, and verify that [1]S→S is handled via the Σ₃-completeness applied to [1]S (which is Σ₃). Add: 「形式化されたレーブの定理で必要な D3 は [1]S（Σ₃ 文）に対するものだけであり、pt:sigma3-completeness で十分である。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] pt:idzh-completeness: truth lemma for [1]C uses unproven [1]D→[1][1]D and □F→[1]□F for all subformulas
- **Category:** Logical gap
- **Location:** pt:idzh-completeness / proof, truth lemma [1]C case
- **Detail:** The proof uses [1]D→[1][1]D ('[1] の公理 4 の類似'), □F→[1]□F, and ¬□F→[1]¬□F. The first is not an axiom of IDzh; it must be derived. IDzh has [1]([1]A→A)→[1]A (Löb) and distribution and necessitation, from which [1]A→[1][1]A is derivable (as in GL). The text says '公理 4 の類似' which is loose but the derivation is standard. □F→[1]□F is an axiom of IDzh. ¬□F→[1]¬□F is an axiom. So the ingredients are present, though the derivation of [1]D→[1][1]D is not shown. Minor gap.
- **Proposed fix:** Add a line: 「[1]A→[1][1]A は [1] のレーブの公理と分配公理・必然化から GL と同様に導かれる。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Claim that IDzh ⊂ GLB and GLB proves [1]-necessitation
- **Category:** Supplement/remark error
- **Location:** text after pt:idzh definition
- **Detail:** The text says IDzh ⊂ GLB because GLB is closed under [1]-necessitation and proves □A→[1]□A. This is correct: GLB has □A→[1]A and □-necessitation, so from □A get [1]A, giving [1]-necessitation; and □A→[1]□A follows from □A→□□A and □□A→[1]□A. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] pt:glb-frame-conditions item 4: GLB not complete for any class of such frames
- **Category:** Unsupported fact
- **Location:** pt:glb-frame-conditions / item 4
- **Detail:** Item 4 concludes that GLB is not complete for any class of frames of 'this kind' because all such frames validate [1]⊥ but GLB does not prove [1]⊥. This is correct: if every frame in a class validates [1]⊥, then any logic complete w.r.t. that class proves [1]⊥; since GLB doesn't, GLB is not complete for that class. The argument is sound. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] pt:glb-main-statement: 'GLB is decidable'
- **Category:** Unsupported fact
- **Location:** pt:glb-main-statement
- **Detail:** The statement claims GLB is decidable as a corollary of the equivalence (i)⇔(ii)⇔(iii). Decidability follows from (ii)⇔(i) and decidability of IDzh (pt:idzh-completeness), since IDzh is decidable and U_A is computable. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] pt:omega-provable-equiv proof 1⇒2: handling of extra free variables
- **Category:** Logical gap
- **Location:** pt:omega-provable-equiv / proof, 1⇒2
- **Detail:** The proof says 'x だけが自由変数としてよい。他の自由変数は全称閉包で扱う'. This is a parenthetical that glosses over the case of multiple free variables; the ω-consistency failure is about a formula ∃x φ(x) with possibly other free variables. The reduction to one free variable via universal closure is standard but not detailed. Minor gap, acceptable.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Remark: 'ω-provability is definable in arithmetic so by Tarski not equal to truth'
- **Category:** Supplement/remark error
- **Location:** remark after pt:omega-provable-equiv
- **Detail:** The remark says ω-provability is arithmetically definable, so by Tarski's theorem it does not coincide with truth. This is correct: the set of ω-provable sentences is Σ₃-definable (via ωBew), hence arithmetically definable, while truth is not. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
