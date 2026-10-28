# Verification tracker: `01-foundations/03-computation/03-advanced-computability/06-hyperarithmetic.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/06-hyperarithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (H-set existence/uniqueness, arithmeticality, HYP ⊆ Δ¹₁, Δ¹₁ ⊆ HYP via effective transfinite recursion, Kleene's theorem, closure corollary) are logically sound and the cited labels match their uses. The genuine problems concentrate in the `::: fact` and `::: supplement` side remarks: the Spector–Gandy gloss is imprecise, the Suslin/Borel iteration description omits intersections, the claim that HYP is the least ω-model of Σ¹₁-AC₀ is false (only Δ¹₁-CA₀ has HYP as least ω-model), and the Harrison-order remark about existence of H-sets along non-well-founded orders is an unsupported side claim. No issues were found in the proofs themselves.

## Issues

### ISSUE-0001 [Open] Spector–Gandy theorem misstated (arithmetical condition with hyperarithmetic function)
- **Category:** Supplement/remark error
- **Location:** fact comp:kleene-o-hierarchy / supplement 'スペクター–ガンディの定理'
- **Detail:** The supplement states that a set is Π¹₁ iff it has the form ∃h R(x,h) with h hyperarithmetic and R arithmetical. This is not the Spector–Gandy theorem. The actual theorem (Spector–Gandy / Kleene) says: X is Π¹₁ iff there is an arithmetical R such that x ∈ X ⇔ ∃f (f hyperarithmetic ∧ R(x,f)), where the function f ranges over hyperarithmetic functions — but the standard formulation uses a Σ¹₁ (arithmetical in a real) matrix and the quantifier over hyperarithmetic functions; more precisely the theorem is that Π¹₁ sets are exactly the sets of the form {x : ∃f ∈ HYP R(x,f)} with R arithmetical. The stated version with 'hyperarithmetic h' and 'arithmetical R(x,h)' is essentially correct in form, but the accompanying gloss 'replace a universal function quantifier by an existential quantifier over hyperarithmetic functions' is imprecise: the correct statement is that the second-order quantifier can be restricted to hyperarithmetic functions (i.e. ∀f can be replaced by ∀f∈HYP, and ∃f by ∃f∈HYP), not merely 'universal replaced by existential'. As written the sentence overstates/misdescribes the theorem.
- **Proposed fix:** State: '（スペクター–ガンディ）集合 X が Π¹₁ であることと、算術的な関係 R で x∈X ⇔ ∃f (f は超算術的関数 かつ R(x,f)) となるものが存在することは同値である。すなわち関数についての量化子を超算術的な関数に制限しても Π¹₁ の定義力は変わらない。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that HYP is the least ω-model of Σ¹₁-AC₀ and Δ¹₁-CA₀
- **Category:** Supplement/remark error
- **Location:** supplement '二階算術との関係'
- **Detail:** The supplement asserts that the collection of hyperarithmetic sets is the least ω-model of Σ¹₁-AC₀ and of Δ¹₁-CA₀, and is not a model of ATR₀. The last part is correct (ATR₀ requires arithmetic transfinite recursion beyond HYP, and HYP is not a model of ATR₀). However, HYP is the least ω-model of Δ¹₁-CA₀ (this is a standard result), but it is NOT the least ω-model of Σ¹₁-AC₀: Σ¹₁-AC₀ is strictly stronger than Δ¹₁-CA₀ and its least ω-model is larger than HYP (Σ¹₁-AC₀ proves the existence of non-hyperarithmetic sets, e.g. it implies ATR₀ over a weak base in the presence of enough induction, and in any case Σ¹₁-AC₀ is not satisfied by HYP). So listing Σ¹₁-AC₀ alongside Δ¹₁-CA₀ as having HYP as least ω-model is false.
- **Proposed fix:** Replace with: '超算術的集合全体は Δ¹₁-CA₀ の最小の ω モデルになる。ATR₀ のモデルにはならず、Σ¹₁-AC₀ も HYP では満たされない（Σ¹₁-AC₀ は Δ¹₁-CA₀ より強い）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Harrison order remark: 'H-set may exist but not unique' overstated
- **Category:** Supplement/remark error
- **Location:** supplement '整礎でない順序に沿った H 集合'
- **Detail:** The supplement says that for a computable non-well-founded total order (e.g. a Harrison order) 'H 集合の条件を満たす集合が存在することがあるが、一意ではなく'. For a Harrison order (order type ω₁^CK(1+η)), the transfinite recursion defining H-sets along a non-well-founded order generally fails to have a solution at all, because the recursion is not well-founded and the jump operation is not monotone in a way guaranteeing a fixed point; existence is not automatic. The claim '存在することがある' is vague but the stronger issue is that the hypcheck in comp:h-set-unique says '整礎でない計算可能な全順序に沿った「H 集合」は、存在しないことも、複数あることもある' — this is a side comment (hypcheck) making an existence claim that is not justified and, for the specific Harrison order, existence is doubtful. This is an unsupported side claim.
- **Proposed fix:** Weaken to: '整礎でない計算可能な全順序に沿っては、H 集合の条件を満たす集合は一般に存在しない（超限再帰が使えない）。存在したとしても一意性は保証されない。'
- **Reported:** 2026-10-28 (8ccef3d)
