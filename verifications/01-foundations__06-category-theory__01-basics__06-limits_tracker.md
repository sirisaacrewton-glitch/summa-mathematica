# Verification tracker: `01-foundations/06-category-theory/01-basics/06-limits.html`

<!-- source: 01-foundations/06-category-theory/01-basics/06-limits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 20 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Freyd's theorem misstated: completeness of a small category forces a preorder, but the supplement's phrasing about 'small products' and 'too strong' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると) / cat:prob-freyd-large-products
- **Detail:** The supplement says: '完備性は小さい図式についての条件だが、それでも小さい圏にとっては強すぎる：小さい圏で完備なものは前順序に限られる（フレイド）'. This is correct as stated (a small complete category is a preorder). However the problem cat:prob-freyd-large-products states the hypothesis as 'Mor C で添字付けた積（小さい積）をすべてもつ' — i.e. products indexed by the set of morphisms. The solution then argues with b^{M} where M = Mor C. This is fine. But the supplement's claim that 'Set や Grp のような完備な圏が大きいのは、このためである' is a loose causal remark: Set and Grp are complete and large, but their largeness is not 'caused' by Freyd's theorem in any precise sense — Freyd's theorem only says a *small* complete category is a preorder, it does not explain why Set/Grp must be large. This is an overstated/imprecise side comment.
- **Proposed fix:** Replace with: 'Freyd の定理により、小さい圏が（小さい図式について）完備であれば前順序に限られる。したがって Set や Grp のような「真に圏論的な」完備圏は必然的に大きい（局所小だが対象の集まりが集合でない）必要がある。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that Fin is finitely complete but lacks infinite products, hence not complete — needs the precise reason
- **Category:** Supplement/remark error
- **Location:** supplement (有限完備と完備) / cat:completeness-criterion
- **Detail:** The supplement states: '有限集合と写像の圏 Fin は有限完備だが、無限の積をもたないので完備でない'. This is true: Fin is finitely complete (it has finite products and equalizers, terminal object), and it does not have infinite products (e.g. an infinite product of a two-element set is infinite, not in Fin), so it is not complete. The statement is correct. No error.
- **Proposed fix:** No change needed; statement is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Duality remark: 'coequalizers are epic' and 'Set is cocomplete' — check the dual of cat:equalizer-monic
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement says: '余等化子はエピ射で'. The dual of cat:equalizer-monic (equalizers are monic) is indeed 'coequalizers are epic', which is correct. And 'Set は余完備' follows from cat:set-complete.2. These are correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck claim '選択公理は使っていない' for Set completeness
- **Category:** Supplement/remark error
- **Location:** cat:set-complete / hypcheck
- **Detail:** The hypcheck says: '選択公理は使っていない（直積の元は具体的な族で、空でないことも主張していない）'. The limit construction L = { (x_j) in ∏ Fj : compatibility } uses the product ∏_{j} Fj of an arbitrary small family of sets. In ZFC the product of a small family of nonempty sets is nonempty by the axiom of choice; but here the product is defined as the set of all choice functions, which exists by the axiom of replacement/power set regardless of whether it is empty. The statement 'we do not claim it is nonempty' is correct: the construction of L as a subset of the full product does not require AC. The colimit construction uses a quotient by a generated equivalence relation, also no AC. So the claim is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Completeness criterion 2: equalizer as pullback of (1_a,f),(1_a,g) — the pullback's first projection is the equalizer, but the argument conflates the two components
- **Category:** Logical gap
- **Location:** cat:completeness-criterion / proof Step 2
- **Detail:** The proof says: 'f,g: a→b の等化子は、(1_a,f),(1_a,g): a→a×b の引き戻し p の射 p_1 である：引き戻しの条件 (1,f)∘h_1=(1,g)∘h_2 は、成分ごとに h_1=h_2 かつ f∘h_1=g∘h_2 であり、h:=h_1 について f∘h=g∘h と同値だからである。' Here the pullback is over the two maps (1_a,f): a→a×b and (1_a,g): a→a×b with common codomain a×b. The pullback object p comes with p_1: p→a (first copy) and p_2: p→a (second copy). The condition is (1_a,f)∘p_1 = (1_a,g)∘p_2, i.e. componentwise 1_a∘p_1 = 1_a∘p_2 (so p_1=p_2) and f∘p_1 = g∘p_2. Setting h:=p_1=p_2 gives f∘h=g∘h. The text writes 'h_1=h_2' and 'h:=h_1', which is consistent. The claim that p_1 is the equalizer is correct. However, the text says 'p の射 p_1' without noting p_1=p_2; the universal property of the pullback gives the equalizer universal property. This is essentially correct but slightly terse. Not a genuine error.
- **Proposed fix:** No change needed; the argument is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Completeness criterion 2: 'finite products from binary products and terminal object' — needs the empty product = terminal and binary products suffice for finite products
- **Category:** Logical gap
- **Location:** cat:completeness-criterion / proof Step 2
- **Detail:** The proof says: '有限の積は二つの積の繰り返しと終対象（空の積）から。' This is correct: finite products are built from binary products and the terminal object (empty product). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Citation of cat:functor-category-size in cat:set-complete Step 1 for 'same universe argument'
- **Category:** Improper link
- **Location:** cat:set-complete / proof 1, Step 1
- **Detail:** The proof cites \ref{cat:functor-category-size} (関手圏が局所小になる条件) for the claim that the product is small because J is small and each Fj is small. cat:functor-category-size is about when a functor category is locally small, not directly about products of small sets being small. The size argument for ∏_{j} Fj being small when J and each Fj are small is elementary (a small product of small sets is small), and the cited proposition does not state this. This is a mechanically inserted link to a result that does not say what it is used for.
- **Proposed fix:** Replace the citation with a direct justification: 'J が小さく各 Fj が小さいので、直積 ∏_{j∈Ob J} Fj は小さい集合である（小さい集合の族の直積は小さい）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Example 4 (posets): '極限は「錐の頂点のうち最大のもの」' — imprecise for general diagrams
- **Category:** Unsupported fact
- **Location:** example (基本的な極限) item 4
- **Detail:** The example says: '半順序. 積は下限（最大下界）、余積は上限。極限は「錐の頂点のうち最大のもの」で、存在するとは限らない。' For a poset regarded as a category, a cone over a diagram F with vertex c is a lower bound of the image of F (c ≤ Fj for all j, compatible). The limit is the greatest lower bound (maximum among lower bounds), i.e. the largest vertex among cones. This is correct: the limit is the maximum of the set of cone vertices. The phrase '錐の頂点のうち最大のもの' is accurate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Example 2: 'Grp の余積は自由積（存在は随伴関手定理などから。ここでは扱わない）' — attribution to adjoint functor theorem is loose
- **Category:** Unsupported fact
- **Location:** example item 2
- **Detail:** The example says the coproduct in Grp is the free product, and its existence follows 'from the adjoint functor theorem etc.'. The free product exists by an explicit construction (words), and the adjoint functor theorem is one way to see Grp is cocomplete, but the free product's existence is elementary. The parenthetical is a loose side remark, not false. It says '存在は随伴関手定理などから' — existence of the free product can indeed be derived from the adjoint functor theorem (Grp is cocomplete), so it is not false, just not the most elementary route. Not a genuine error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Example 5: kernel as equalizer of f and zero map, cokernel as coequalizer — correct, but 'Ab では通常の核と余核（B/f[A]）' — cokernel in Ab is B/im(f), correct
- **Category:** Unsupported fact
- **Location:** example item 5
- **Detail:** The example says: '零対象 0 をもつ圏で、f: a→b と零射 0_{ab}: a→0→b の等化子を f の核、余等化子を余核という。Ab では通常の核と余核（B/f[A]）。' In Ab, the cokernel of f: A→B is B/im(f) = B/f[A]. Correct. The kernel is ker(f). Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] cat:limits-from-products-equalizers: the maps f,g require products indexed by Ob J and Mor J; the statement says 'C has products indexed by Ob J and Mor J' — but the product ∏_{u: j→k} Fk is indexed by Mor J, and ∏_j Fj by Ob J; correct
- **Category:** Logical gap
- **Location:** cat:limits-from-products-equalizers
- **Detail:** The theorem states C has products indexed by Ob J and Mor J. The construction uses ∏_{j} Fj (indexed by Ob J) and ∏_{u} F(cod u) (indexed by Mor J). The target of g is ∏_{u} F(dom u), also indexed by Mor J. So both products are over index sets Ob J and Mor J. Correct. The maps f,g are defined by their components p_u∘f = p_{cod u} and p_u∘g = Fu∘p_{dom u}. This is well-defined by the product universal property. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] cat:limits-from-products-equalizers Step 3: uses cat:equalizer-monic to conclude t'=t from m∘t'=m∘t — correct since m is monic
- **Category:** Logical gap
- **Location:** cat:limits-from-products-equalizers / Step 3
- **Detail:** Step 3: from p_j∘m∘t' = p_j∘m∘t for all j, conclude m∘t'=m∘t by the product's universal property (maps into a product are determined by components, cat:limit-basic.2). Then m monic gives t'=t. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] cat:limit-basic proof 1 cites cat:universal-is-initial.2 for uniqueness of universal arrows — check the dual version
- **Category:** Logical gap
- **Location:** cat:limit-basic / proof 1
- **Detail:** Proof 1 says: '普遍射の一意性（\ref{cat:universal-is-initial.2}）を、Δ から F への普遍射（双対版）に適用する。' cat:universal-is-initial.2 is presumably the uniqueness part of 'universal arrows are initial objects in the comma category'. The uniqueness of limits follows from uniqueness of initial objects (or universal arrows). The citation is appropriate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] cat:limit-basic proof 3 cites cat:universal-hom-bijection (dual version) — appropriate
- **Category:** Logical gap
- **Location:** cat:limit-basic / proof 3
- **Detail:** Proof 3 says it is the dual of cat:universal-hom-bijection. That proposition characterizes universal arrows via hom-set bijections. The limit as a representing object of Cone(-,F) is the dual/appropriate version. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] cat:limit-basic.3 requires C locally small; stated. But the natural bijection C(c,L) ≅ Cone(c,F) also requires Cone(c,F) to be a set, which holds when C is locally small and J is small
- **Category:** Missing hypothesis
- **Location:** cat:limit-basic item 3
- **Detail:** Item 3 states: 'C が局所小のとき、錐の集合を Cone(c,F) := Nat(Δc,F) とおくと...'. For Cone(c,F) to be a set, we need Nat(Δc,F) to be small. If C is locally small and J is small, then Nat(Δc,F) is a subset of ∏_{j} C(c,Fj), which is small. The statement assumes J small (from the notation section). So the hypothesis is adequate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Supplement 'high-level view': '極限の元は「各 Fj の元を一つずつ、図式の射と矛盾しないように選んだもの」' — correct for Set limits
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says: '集合の場合、極限の元は「各 Fj の元を一つずつ、図式の射と矛盾しないように選んだもの」であり、これは連立方程式の解の集合と同じ形をしている。' This is correct: elements of the limit in Set are compatible families. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Supplement: '余等化子はエピ射' — true, but the dual of cat:equalizer-monic.2 (pullback of monic is monic) is 'pushout of epic is epic', not mentioned; fine
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement says the duals hold: '余積と余等化子から余極限が作れ、余等化子はエピ射で、Set は余完備である'. All correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Problem cat:prob-coproduct-pushout solution: uniqueness uses 'coequalizer is epic' citing dual of cat:equalizer-monic — correct
- **Category:** Logical gap
- **Location:** cat:prob-coproduct-pushout / solution
- **Detail:** The solution says uniqueness follows from 'the coproduct map is determined by components and the coequalizer is epic (dual of cat:equalizer-monic)'. The dual of cat:equalizer-monic.1 is that coequalizers are epic. Correct. The argument: if t∘q = t'∘q then t=t' since q epic. And t∘u=h, t∘v=k determine t on the image of the coproduct injections, which generate; combined with q epic, t is unique. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Problem cat:prob-freyd-large-products solution: uses |C(a,b^M)| ≤ |M| and |M| < 2^{|M|} via Cantor — correct, but the product b^M is indexed by M = Mor C, which is a set since C is small; correct
- **Category:** Logical gap
- **Location:** cat:prob-freyd-large-products / solution
- **Detail:** The solution: assume f≠g: a→b. Let M = Mor C. The product b^M exists (M-indexed product, M small since C small). Maps a→b^M correspond to families (h_m)_{m∈M} with h_m ∈ C(a,b); restricting to h_m ∈ {f,g} gives at least 2^{|M|} maps. But C(a,b^M) ⊆ M (since M is the set of all morphisms), so |C(a,b^M)| ≤ |M| < 2^{|M|} by Cantor. Contradiction. Correct. The citation of set:page-cantor is appropriate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] Problem cat:prob-freyd-large-products statement: 'Mor C で添字付けた積（小さい積）をすべてもつ' — the parenthetical '小さい積' is slightly misleading since M-indexed products are a special class, not all small products
- **Category:** Unsupported fact
- **Location:** cat:prob-freyd-large-products
- **Detail:** The problem says: 'C が小さい圏で、Mor C で添字付けた積（小さい積）をすべてもつなら'. The parenthetical '(小さい積)' suggests 'small products', but the hypothesis is only products indexed by Mor C, which is a single small set. Having all M-indexed products (for M = Mor C) is weaker than having all small products. However, the proof only needs the M-indexed product, so the hypothesis as stated (M-indexed products) suffices. The parenthetical is imprecise: it equates 'Mor C-indexed products' with 'small products', which is not the same. This is a minor imprecision in a side comment.
- **Proposed fix:** Change to: 'C が小さい圏で、M := Mor C で添字付けた積をもつなら' (removing the misleading '(小さい積)' or clarifying that only the M-indexed product is needed).
- **Reported:** 2026-10-28 (10fede1)
