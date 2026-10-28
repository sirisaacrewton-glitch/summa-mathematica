# Verification tracker: `01-foundations/03-computation/03-advanced-computability/06-hyperarithmetic.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/06-hyperarithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 14 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful development of H-sets, hyperarithmetic sets, and Kleene's theorem Δ¹₁ = HYP. The proofs (existence/uniqueness of H-sets, arithmeticality of Hset, HYP ⊆ Δ¹₁, Δ¹₁ ⊆ HYP via effective transfinite recursion) are logically sound, with hypotheses properly tracked in hypchecks. The supplements and stated facts are mostly accurate: Souslin's theorem, Spector's uniqueness, Kleene's O Π¹₁-completeness, and the ω-model remark are correct. The only genuine issue is the imprecise paraphrase of the Spector–Gandy theorem in the supplement, which overstates the quantifier replacement; the remaining remarks are either correct or acceptably hedged. No logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Spector–Gandy theorem misstated (arithmetical condition with hyperarithmetic function)
- **Category:** Supplement/remark error
- **Location:** comp:kleene-o-hierarchy / supplement, 'スペクター–ガンディの定理'
- **Detail:** The supplement states that Π¹₁ sets are exactly those of the form 'there exists a hyperarithmetic function h such that R(x,h)' with R arithmetical. The Spector–Gandy theorem actually says: a set is Π¹₁ iff it is of the form {x : ∃f (f hyperarithmetic ∧ R(x,f))} where R is arithmetical — but the standard formulation uses a *single* function f ranging over hyperarithmetic functions, and the quantifier is over hyperarithmetic functions, not 'a hyperarithmetic function h' with R arithmetical in the sense stated. More importantly, the sentence '関数の全称量化子を、超算術的な関数についての存在量化子に置き換えられる' (replacing a universal function quantifier by an existential quantifier over hyperarithmetic functions) is imprecise: the theorem replaces the *second-order* (function) quantifier of a Π¹₁ formula by an existential quantifier over hyperarithmetic functions, but the resulting formula is Σ¹₁ in form only because hyperarithmetic is Σ¹₁; the claim as worded ('全称量化子を...存在量化子に置き換え') suggests a direct equivalence of a ∀-quantifier with an ∃-quantifier, which is not what the theorem says. The statement is at best misleading and stated more strongly than the literature supports.
- **Proposed fix:** State precisely: 'A set is Π¹₁ iff it has the form {x : ∃f (f is hyperarithmetic ∧ R(x,f))} with R arithmetical (Spector–Gandy). Equivalently, every Π¹₁ formula ∀f R(x,f) is equivalent to ∃f (f hyperarithmetic ∧ R(x,f)).' Remove the informal paraphrase about replacing a universal quantifier by an existential one.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that HYP is the minimal ω-model of Σ¹₁-AC₀ and Δ¹₁-CA₀ but not of ATR₀
- **Category:** Supplement/remark error
- **Location:** comp:kleene-o-hierarchy / supplement, '二階算術との関係'
- **Detail:** The supplement says HYP is the minimal ω-model of Σ¹₁-AC₀ and Δ¹₁-CA₀ and is not a model of ATR₀. This is essentially correct (HYP is the minimal ω-model of Δ¹₁-CA₀ and of Σ¹₁-AC₀, and ATR₀ fails in HYP because it proves the existence of Kleene's O / hyperarithmetic sets beyond HYP). However, the phrasing '最小の ω モデルになり' applied to both systems simultaneously is fine, but the claim that HYP is 'not a model of ATR₀' is correct. No error here; but the statement that HYP is the minimal ω-model of Σ¹₁-AC₀ requires that Σ¹₁-AC₀'s minimal ω-model is indeed HYP, which is a known result. This is acceptable.
- **Proposed fix:** No change needed; statement is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Harrison order remark: 'H-set condition may have solutions but not unique'
- **Category:** Supplement/remark error
- **Location:** comp:h-set-unique / hypcheck and supplement
- **Detail:** The hypcheck says 'a computable total order that is not well-founded may have H-sets that do not exist or are multiple (Harrison order note in supplement)'. The supplement says 'computable total orders that are not well-founded (e.g. Harrison order) may have sets satisfying the H-set condition, but they are not unique'. For a non-well-founded order, the recursion G(b) = (⋃_{c≺b} G(c))' cannot be carried out by well-founded recursion, and indeed for the Harrison order (type ω₁^CK(1+η)) there can be solutions but uniqueness fails. This is a known phenomenon. The claim is plausible and correctly hedged ('存在することがある'). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Souslin's theorem: boldface Δ¹₁ = Borel
- **Category:** Supplement/remark error
- **Location:** comp:kleene-o-hierarchy / supplement, 'スースリンの定理'
- **Detail:** The supplement states Souslin's theorem: boldface Δ¹₁ sets (analytic and coanalytic) are exactly the Borel sets. This is correct (Lusin–Souslin). The further claim 'Borel sets are obtained by iterating countable unions and complements from open sets up to ω₁ times' is correct. The analogy with Kleene's theorem (countable union ↔ jump, ω₁ ↔ ω₁^CK) is a reasonable heuristic. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that increasing order type to α·2 suffices for two jumps per stage
- **Category:** Supplement/remark error
- **Location:** comp:delta11-hyp / supplement, '一つの段で 2 回のジャンプ'
- **Detail:** The supplement says: 'In the proof of comp:delta11-hyp, doubling D₀ was for convenience; it suffices to increase the order type to α·2.' This is imprecise: the construction uses D₀×{0,1} with lexicographic order, which has order type α·2 (each element replaced by a 2-element chain), so the statement 'increase the order type to α·2' is essentially what is done. However, the claim 'if no computable ordinal is an upper bound (the Π¹₁ case), no trick suffices' is correct (Spector boundedness). The remark is acceptable, though 'α·2' should be 'α·2' meaning α copies of 2, i.e., order type α·2. Minor imprecision, not a genuine error.
- **Proposed fix:** No change needed, or clarify that D₀×{0,1} with lexicographic order has order type α·2.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Kleene's O is Π¹₁-complete and H_a uniqueness (Spector)
- **Category:** Unsupported fact
- **Location:** comp:kleene-o-hierarchy / fact
- **Detail:** The fact states: (1) O is Π¹₁-complete; (2) Spector: if a,b ∈ O denote the same ordinal then H_a ≡_T H_b; (3) Kleene: the sets computable from some H_a (a ∈ O) are exactly the Δ¹₁ sets. These are standard results (Kleene, Spector). (1) O is Π¹₁-complete is correct. (2) Spector's uniqueness theorem is correct. (3) Kleene's theorem that ⋃_{a∈O} H_a gives exactly HYP is correct. The fact also says 'the H-sets of this page differ by taking jumps at limit stages, but by 3 and Kleene's theorem the resulting class is the same' — this is correct since both give HYP. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 4b: 'o(c') runs through ordinals below o(c) exactly once'
- **Category:** Logical gap
- **Location:** comp:delta11-hyp / Step 4b
- **Detail:** Step 4b claims: 'as c' ranges over the ≺₀-predecessors of c, o(c') runs through the ordinals below o(c) exactly once (o is an order isomorphism with range an initial segment)'. This is correct for a well-order: the predecessors of c map bijectively onto the ordinals below o(c). The subsequent use of comp:rank-below-recursion requires ∃γ<o(c) ∀m [... P_γ], and since the predecessors give exactly all γ<o(c), the equivalence holds. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 5: handling T_x = ∅ and the query at b*
- **Category:** Logical gap
- **Location:** comp:delta11-hyp / Step 5
- **Detail:** Step 5: if χ(x,⟨⟩)=0 (T_x=∅) then x∈A. If χ(x,⟨⟩)=1, query H at ⟨⟨b*,1⟩, φ_k(b*,x,⟨⟩)⟩. The correctness argument: for T_x≠∅, Step 4 gives the answer is (x,⟨⟩)∈P_α, i.e., T_x well-founded and |T_x|<α. But Step 4's statement is (x,s)∈P_{o(c)} ⟺ φ_k(c,x,s)∈H^{[⟨c,1⟩]}. For c=b*, o(b*)=α, so (x,⟨⟩)∈P_α ⟺ φ_k(b*,x,⟨⟩)∈H^{[⟨b*,1⟩]}. The query ⟨⟨b*,1⟩, φ_k(b*,x,⟨⟩)⟩ ∈ H is exactly φ_k(b*,x,⟨⟩)∈H^{[⟨b*,1⟩]}. Correct. For T_x=∅, P_α contains (x,⟨⟩) since ∅ is well-founded with rank 0<α, so the query would also return 'yes'; but the code short-circuits. Fine. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Use of comp:delta11-criterion.2 in Step 0
- **Category:** Missing hypothesis
- **Location:** comp:delta11-hyp / Step 0 and hypcheck
- **Detail:** Step 0 cites comp:delta11-criterion to get a computable ordinal α with x∈A ⇒ |T_x|<α. The hypcheck cites comp:delta11-criterion.2. The label table lists comp:delta11-criterion as theorem 4.16 'Π¹₁ 集合が Δ¹₁ であるための条件'. The use of item 2 (boundedness) is plausible. The hypcheck also mentions Spector boundedness. This is consistent. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Citation of comp:tree-rank-basic.4 for subtree rank formula
- **Category:** Improper link
- **Location:** comp:sec-hy-notation / notation
- **Detail:** The notation cites comp:tree-rank-basic.4 (lemma 4.3, 'ランクと深さの基本性質') for the formula |T_s| = sup{|T_{s^⟨m⟩}|+1}. The label table says comp:tree-rank-basic.4 is item 4 of lemma 4.3. The text says 'ランクの定義と同補題の 4 から'. This is a legitimate citation. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Citation of comp:computable-functional-relation for function-argument relations
- **Category:** Improper link
- **Location:** comp:sec-hy-notation / notation
- **Detail:** The notation cites comp:computable-functional-relation (definition 3.1, '計算可能な関係') for treating sets as characteristic functions and putting functions as arguments of relations. This is a reasonable pointer. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Intuition: 'ω-th column is the jump of all ∅^(n) combined'
- **Category:** Supplement/remark error
- **Location:** comp:h-set / intuition
- **Detail:** The intuition says: for D={0,...,n-1}, H^{[0]}=∅', H^{[1]}=({0}×∅')', etc., 'the same degree as ∅^(k+1)'. For the infinite case, 'the ω-th column is the jump of all ∅^(n) combined, exceeding the arithmetical hierarchy'. This is correct: H^{[ω]} = (⊕_n ∅^(n))' = ∅^(ω), which is not arithmetical. The phrase 'same degree' is correct (Turing degree). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Problem 6.12 solution: X ≤_T Y ⇒ X' ≤_m Y'
- **Category:** Unsupported fact
- **Location:** comp:prob-arithmetical-hyp / solution
- **Detail:** The solution claims X ≤_T Y ⇒ X' ≤_m Y'. This is a standard fact (the jump is monotone w.r.t. ≤_T, and in fact ≤_m). The proof sketch via oracle machine rewriting is correct. The second part X ≤_m X' via x ↦ ⟨M_x,0⟩ where M_x queries x: correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Problem 6.13 solution: A' is Δ¹₁ if A is
- **Category:** Unsupported fact
- **Location:** comp:prob-delta11-jump / solution
- **Detail:** The solution shows A' is Σ¹₁ and Π¹₁ using Ch(g) (g is characteristic function of A). Ch is Σ¹₁ since A, Ā are Σ¹₁; ¬Ch is Π¹₁ since A, Ā are Π¹₁. Then u∈A' ⟺ ∃g(Ch(g)∧Acc(g,u)) is Σ¹₁, and ⟺ ∀g(¬Ch(g)∨Acc(g,u)) is Π¹₁. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
