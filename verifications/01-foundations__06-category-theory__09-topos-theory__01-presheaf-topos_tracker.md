# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/01-presheaf-topos.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/01-presheaf-topos.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the cartesian-closedness proof, the sieve lemmas, the subobject-classifier theorem and the corollary) is correct and well supported by the cited results. The problems concentrate in the supplement and side remarks: the arrow-category 'future' gloss (ISSUE-0001), the Mac Lane §IV.10 / Paré attribution (ISSUE-0002), the vague sheaf-classifier description (ISSUE-0003) all remain open, and the supplement additionally misattributes forcing-as-topos to §IV.10. The monoid example's right-ideal action and the hypcheck's 'not locally small' claim are imprecise.

## Issues

### ISSUE-0001 [Open] Arrow category truth values: {a} does not represent 'not yet but eventually'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement interprets the arrow category as a transition from time 1 (now) to time 0 (future), and claims that the sieve {a} on object 1 represents 'not yet now, but eventually true'. But in this presheaf topos the direction of the morphism a: 0 → 1 means that a sieve on 1 consists of arrows into 1, i.e. restrictions going from 1 to 0. The sieve {a} on 1 corresponds to a truth value that holds at stage 0 but not at stage 1; under the stated 'now = 1, future = 0' reading, {a} means 'true in the future but not now', which is the opposite of what the text says ('今はまだだが、いずれ成り立つ' would require the value to hold at the later stage, i.e. at 0, which is indeed the case, but the text's phrasing 'not yet now but eventually' matches {a} only if the direction is read correctly; the actual error is that the sieve {a} on 1 is the set of arrows d → 1 with d = 0, so it records truth at the *earlier* object 0, not a future stage). More concretely, χ_{1}(x) = {a} means x·a ∈ A(0) but x ∉ A(1): the property holds after restriction to 0, i.e. at the 'future' stage 0, so the description is consistent only if 0 is the future; but then the sieve {a} on 1 is a sieve whose only element goes from the future to the present, which is not a 'stage from which it holds' but a 'stage at which it holds'. The claim that {a} is neither 'true' nor 'false' is fine, but the gloss '今はまだだが、いずれ成り立つ' is imprecise: {a} means 'true at stage 0 (the codomain of a), false at stage 1', and since a: 0 → 1 goes from 0 to 1, the natural reading is that 0 is the *earlier* stage and 1 the *later* one, in which case {a} means 'was true earlier but is no longer true now', the opposite of the text.
- **Proposed fix:** Replace the sentence with: 'If the arrow a: 0 → 1 is read as a transition from stage 0 to stage 1, then the sieve {a} on 1 is the truth value that holds at stage 0 but fails at stage 1; it is neither the constantly-true value t_{1} nor the constantly-false value ∅.' (Or reverse the time interpretation consistently: take 0 as the future and 1 as the present, and then say {a} means 'true at the future stage 0 but not at the present stage 1'.)
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says that in the arrow category read as 'time 1 (now) to time 0 (future)', the sieve {a} represents 'not yet now but eventually true'. But {a} on object 1 consists of arrows into 1, i.e. it records truth at object 0 (the domain of a); with a: 0 → 1 the natural reading is that 0 is earlier, so {a} means 'true earlier, not now', the opposite of the gloss. The text is unchanged.

### ISSUE-0002 [Open] Claim that Mac Lane §IV.10 states finite colimits follow from topos axioms
- **Category:** Supplement/remark error
- **Location:** supplement / トポスの余極限
- **Detail:** The supplement says 'Mac Lane §IV.10 は、トポスの公理から有限余極限の存在が従うことを述べている。証明には冪対象 Ω^{X} を使うモナド的な議論（パレの定理）が要ると言われている'. This is a historical/attribution claim stated without proof. In Mac Lane's CWM §IV.10 the emphasis is on the elementary topos axioms and the construction of finite colimits is attributed to Mikkelsen/Paré; the precise statement 'finite colimits follow from the topos axioms' is correct (a well-known theorem of Mikkelsen, sometimes called Paré's theorem), but the attribution to 'Mac Lane §IV.10' as the place where this is *stated* is imprecise, and calling it 'パレの定理' is a misattribution: the result that every elementary topos has finite colimits is due to Mikkelsen (1976), while Paré's theorem concerns the monadicity of the power-set functor. The supplement presents this as a known fact with a specific attribution that is not accurate.
- **Proposed fix:** Rewrite as: 'It is a theorem of Mikkelsen (and is discussed in Mac Lane, CWM, §IV.10) that the elementary topos axioms imply the existence of finite colimits; the proof uses the power objects Ω^{X} and a monadic argument (Paré's theorem on the monadicity of the power-set functor). We do not treat it here.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still attributes to 'Mac Lane §IV.10' the statement that finite colimits follow from the topos axioms and calls the argument 'Paré's theorem'. The result is due to Mikkelsen; Paré's theorem concerns monadicity of the power-set functor. The attribution remains imprecise.

### ISSUE-0003 [Open] Claim that sheaves on a space form a topos with subobject classifier of closed sieves
- **Category:** Unsupported fact
- **Location:** supplement / 層
- **Detail:** The supplement states that the category of sheaves on a topological space is a topos and that its subobject classifier is 'the sheaf of sieves closed under coverings' ('開集合の上で閉じたふるい'). This is essentially correct (the subobject classifier is the sheaf sending U to the set of open subsets of U, i.e. sieves on U closed under refinement), but the phrase '開集合の上で閉じたふるい' is vague and the attribution 'Mac Lane–Moerdijk, Sheaves in Geometry and Logic 第 II 章とされる' is hedged ('とされる'), which is an unsupported attribution. The statement is a `::: supplement` claim presented without proof and with an imprecise description of the classifier.
- **Proposed fix:** State precisely: 'For a topological space X, the category of sheaves on X is a topos (Mac Lane–Moerdijk, Sheaves in Geometry and Logic, Ch. II); its subobject classifier is the sheaf Ω with Ω(U) = the set of open subsets of U (equivalently, the set of sieves on U closed under coverings), and true: 1 → Ω picks out U itself.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still describes the subobject classifier of sheaves as 'the sheaf of sieves closed on open sets' and hedges the Mac Lane–Moerdijk attribution with 'とされる'. The description is vague and the attribution unsupported.

### ISSUE-0004 [Open] Claim that forcing independence proofs are organized as topos constructions, attributed to Mac Lane §IV.10
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The final sentence says '強制法による独立性の証明もトポスの構成として整理できることが知られている（Mac Lane §IV.10 の述べるところ）'. Mac Lane CWM §IV.10 treats elementary toposes and does not present forcing/independence proofs as topos constructions; that is the subject of Mac Lane–Moerdijk and of Cohen/Scott–Solovay/Tierney–Lawvere work. The attribution to §IV.10 is wrong, and the claim is stated without proof.
- **Proposed fix:** Replace with: '強制法による独立性の証明がトポス（グロタンディーク・トポス）の構成として整理できることは知られている（Mac Lane–Moerdijk, Sheaves in Geometry and Logic 第 VI 章などを参照）。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0005 [Open] Monoid example: right ideals and action formula
- **Category:** Supplement/remark error
- **Location:** cat:omega-examples / item 2
- **Detail:** The example says sieves on the one-object category of a monoid M are right ideals I ⊆ M with IM ⊆ I, and that Ω acts by I·m = {n : mn ∈ I}. For a presheaf on a one-object category, a sieve on the unique object is a subset S ⊆ M closed under precomposition: if f ∈ S and g arbitrary then f∘g ∈ S, i.e. S·M ⊆ S (a right ideal under the convention that composition is written f∘g meaning 'first g then f'). The stated condition IM ⊆ I and the action I·m = {n : mn ∈ I} use the opposite convention; with the page's own convention (x·h = P(h)(x), (x·h)·k = x·(h∘k)) the correct action is I·m = {n : n m ∈ I} (or the closure should be M I ⊆ I). As written the formula is inconsistent with the rest of the page.
- **Proposed fix:** State: 'ふるいは部分集合 I ⊆ M で、m ∈ I なら任意の n について m n ∈ I となるもの（このページの記法での右イデアル）。Ω の作用は I·m = {n : n m ∈ I}。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Hypcheck claim that large presheaf categories may fail to be locally small
- **Category:** Supplement/remark error
- **Location:** hypcheck / C が小さいこと
- **Detail:** The hypcheck says that for a large C the presheaves Q^P(c) and Ω(c) 'may fail to be sets and Ĉ may not even be locally small'. Ω(c) is always a set of sieves on c (a set of arrows with fixed codomain) regardless of C's size, and presheaf categories on a large base are still locally small in the sense that hom-collections between two presheaves are sets (they are subclasses of products of sets indexed by the objects, but for a fixed pair P,Q the hom is a set because a natural transformation is determined by a set-indexed family of set-valued components). The precise failure is that Q^P(c) = Ĉ(yc × P, Q) need not be a set when C is large, so the exponential may not exist; the claim that Ĉ is not locally small is overstated.
- **Proposed fix:** Replace with: '大きい圏上の前層では Q^{P}(c)=\widehat{\mathbf{C}}(\mathbf{y}c\times P,Q) が集合にならず、冪対象が存在しないことがある（Ω(c) 自体は常に集合である）。'
- **Reported:** 2026-10-28 (048145a)
