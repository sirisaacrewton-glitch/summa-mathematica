# Verification tracker: `01-foundations/06-category-theory/07-operads/02-operads.html`

<!-- source: 01-foundations/06-category-theory/07-operads/02-operads.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issue is the imprecise description of the Lie operad in the examples (dimension (k-1)! holds only for the multilinear part over a characteristic-0 field). The supplement's plethysm statement and the composition-product remark are correct. The Step 2 induction in the Ass/Com theorem has a cosmetic imprecision (leading e) that does not affect correctness. No serious logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Lie operad dimension and description imprecise
- **Category:** Unsupported fact
- **Location:** cat:operad-examples / item 4
- **Detail:** The text says Lie(k) is 'the space of multilinear elements in k variables of the free Lie algebra (dimension (k-1)!)'. The dimension (k-1)! is correct for the multilinear part of the free Lie algebra on k generators (over a field of characteristic 0), but the phrase '自由リー代数の中の k 変数の多重線形な元の空間' is ambiguous: the free Lie algebra on k generators is graded by total degree, and its degree-k multilinear component has dimension (k-1)!, not the whole free Lie algebra. As stated it could be read as the entire free Lie algebra, which is infinite-dimensional. Also the Lie operad requires the Koszul sign / antisymmetry conventions and is usually defined via the multilinear part of the free Lie algebra on k generators, which is correct, but the parenthetical '次元 (k-1)!' only holds in characteristic 0.
- **Proposed fix:** Lie(k) is the multilinear part (degree 1 in each of the k generators) of the free Lie algebra on k generators; over a field of characteristic 0 its dimension is (k-1)!.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Exponential generating function for Ass is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The supplement claims the generating function of Ass is sum k! x^k/k! = 1/(1-x). But Ass(k) = Sigma_k has size k!, and the exponential generating function of the sequence |P(k)| is sum |P(k)| x^k/k! = sum k! x^k/k! = sum x^k = 1/(1-x). This is actually correct as written. However, the claim that 'T_P and the composition product's sizes can be computed by composition f(g(x)) of exponential generating functions' is stated too loosely: the composition product of symmetric sequences corresponds to plethysm (substitution) of exponential generating functions only under specific conventions, and the sizes of T_P X require X to be a finite set with the cardinality substituted. The statement is essentially the standard species/plethysm fact and is acceptable, but the phrase '指数型生成関数の合成 f(g(x))' for the composition product is the plethysm, which is correct. No error here on reflection.
- **Proposed fix:** No change needed; the plethysm statement is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Remark on composition product: unit and (P∘X)(0) claim
- **Category:** Supplement/remark error
- **Location:** remark 合成積のモノイドとしてのオペラッド
- **Detail:** The remark states that T_P X equals (P∘X)(0) where X is the species placed in degree 0. Indeed (P∘X)(0) = coprod_k P(k) ×_{Sigma_k} X^{⊗k}(0), and X^{⊗k}(0) = X(0)^k = X^k when X is concentrated in degree 0, giving T_P X. This is correct. The claim that symmetric operads are monoids in this monoidal category is standard and correct. The unit description (one point in degree 1) is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Step 2 of Ass/Com theorem: base case of induction uses e
- **Category:** Logical gap
- **Location:** cat:ass-com-algebras / Step 2
- **Detail:** Step 2 writes theta_k(x_1,...,x_k) = (...((e x_1) x_2)...) x_k, but the recursion theta_k = theta_2(theta_{k-1}(...), x_k) with base theta_1 = id gives theta_k = (...((x_1 x_2) x_3)...) x_k, not starting from e. The insertion of e is harmless since e x_1 = x_1, but the displayed formula as written is slightly off: the induction base is theta_1(x_1) = x_1, so the product should be x_1 x_2 ... x_k without the leading e. This is a minor imprecision, not a genuine gap since e x_1 = x_1.
- **Proposed fix:** theta_k(x_1,...,x_k) = (···((x_1 x_2) x_3)···) x_k = x_1 x_2 ··· x_k, with base case theta_1 = id.
- **Reported:** 2026-10-28 (10fede1)
