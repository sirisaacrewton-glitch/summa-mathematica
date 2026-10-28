# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/06-beth-definability.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/06-beth-definability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page's main theorem and proof are logically sound: the use of Craig interpolation, compactness, symbol renaming, and constant replacement is correct, and the hypcheck accurately identifies where each hypothesis is used. The only genuine problem found is in the supplement's 'finite structures' bullet, which incorrectly asserts that Craig interpolation fails over finite structures; in fact interpolation holds for finite structures, while Beth's theorem does fail there. All other supplements, remarks, and stated-only facts are either correct or appropriately hedged, so no further issues are reported.

## Issues

### ISSUE-0001 [Open] Finite structures: Beth fails but interpolation holds
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (有限構造)
- **Detail:** The supplement claims that restricting to finite structures makes both interpolation and Beth's theorem fail in general. This is wrong for interpolation: Craig interpolation holds for finite structures (the finite version of the interpolation theorem is valid, e.g. via compactness-free arguments or the fact that failure of interpolation would require an infinite countermodel; more concretely, interpolation is preserved under restriction to finite models because the interpolant construction is semantic and the class of finite models is closed under the relevant reducts). In contrast, Beth's definability theorem does fail over finite structures (there are finite-model counterexamples to Beth). So the blanket statement '補間定理もベートの定理も一般には成り立たなくなる' is false for interpolation.
- **Proposed fix:** Restrict the claim to Beth: '構造を有限のものに制限すると、ベートの定義可能性定理は一般には成り立たなくなることが知られている（有限モデル理論）。' Do not assert that interpolation fails over finite structures.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Padoa's method described as contrapositive of explicit⇒implicit
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 (逆向き)
- **Detail:** The supplement says the contrapositive of the direction explicit⇒implicit is Padoa's method, i.e. showing non-definability by two models. But the contrapositive of 'explicit ⇒ implicit' is 'not implicit ⇒ not explicit', which is exactly the direction Beth's theorem provides (implicit ⇒ explicit). Padoa's method is the contrapositive of 'explicit ⇒ implicit' used to show non-explicit-definability from non-implicit-definability, which is legitimate, but the text conflates this with the direction needing interpolation. The statement 'the reverse direction (explicit⇒implicit) does not use interpolation; interpolation is needed only for implicit⇒explicit' is correct, but calling Padoa's method 'the contrapositive of the reverse direction' is imprecise: Padoa's method establishes non-definability by exhibiting two models with same L-reduct but different P, which shows non-implicit-definability, and then uses explicit⇒implicit (not its contrapositive in the stated form) to conclude non-explicit-definability. The phrasing is misleading but the underlying logic is acceptable; however the sentence '逆向きの対偶は…パドアの方法' is technically the contrapositive of explicit⇒implicit, which is what is used, so this is borderline. Given the instruction to prefer no report over speculative ones, this is not reported as an error.
- **Proposed fix:** No change needed; optionally clarify: 'パドアの方法は explicit⇒implicit の対偶を用いて、暗に定義されないことから明示的に定義されないことを示す。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Syntactic proof requires L with only relation symbols and equality-free
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (構文論的な証明)
- **Detail:** The supplement states that when L consists only of relation symbols, T is finite and equality-free, one can use Maehara's lemma instead of Craig in Step 3, interpolating the sequent φ,P(x̄),φ'⇒P'(x̄) via the partition [φ,P(x̄);φ']⇒[;P'(x̄)], obtaining θ without constants. This is essentially correct as a sketch, but the claim that 'T∪T'⊨…から LK での導出を得るには等号なしの完全性が要る' is fine. The partition given is a valid Maehara partition (the left side contains φ,P(x̄) which are in L∪{P}, the right side φ',P'(x̄) in L∪{P'}), and the interpolant lies in L. No error.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Function symbols version of Beth 'generally known' but unverified
- **Category:** Unsupported fact
- **Location:** supplement / 前提の検討 (関数記号)
- **Detail:** The supplement says a version of Beth's theorem holds for function symbols (replacing f(x̄)=y by a relation symbol), and notes it is not verified on the site. This is true: function symbols can be coded by relation symbols with functionality axioms, and Beth's theorem applies. The caveat '本サイトでは確かめていない' makes it a hedged claim, not a false assertion. No error.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Categorical reformulation: forgetful functor injective on objects
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から (圏論的に言い直すと)
- **Detail:** The supplement says: if the forgetful functor from the category of models of T to the category of L-structures is injective on objects (implicit definition), then T is a definitional expansion of some L-theory (explicit definition). This is a correct informal rendering of Beth's theorem. The phrase 'T は L のある理論の定義による拡大になっている' is slightly loose (T is a definitional expansion of its L-reduct theory T|L), but acceptable as a summary. No error.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Halvorsen/Došen attribution hedged
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から (ドゥエニョ)
- **Detail:** The supplement attributes to Došen a study reformulating Beth's theorem as an algebraic property in the framework of Halvorsen's (ハルモス? actually 'ハルモス' = Halvorsen? The text says ハルモスの多進代数, likely 'Halvorsen' or 'Halmos'; Halmos is ハルモス) polyadic algebras. The claim is hedged with 'と言われている（本サイトでは原論文を確かめていない）'. Došen indeed worked on Beth's theorem in algebraic logic (e.g., 'Beth's theorem in algebraic logic'). The attribution is plausible and hedged. No error.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)
