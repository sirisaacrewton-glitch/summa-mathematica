# Verification tracker: `01-foundations/03-computation/03-advanced-computability/07-post-theorem.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/07-post-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 45 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful and correct presentation of Post's theorem. The proof is well-structured and the cited results are used appropriately. The supplements and hypchecks are mostly accurate. The only genuine issue is a minor imprecision in the hypcheck of the bounded quantifiers lemma, where the claim that the failure of sequence coding for unbounded ∀ is 'the reason' the hierarchy rises is an oversimplification; the actual reason requires diagonalization. All other statements, including the relativized Post theorem, the Suslin–Kleene theorem, and the examples FIN and TOT, are correct.

## Issues

### ISSUE-0001 [Open] FIN is not Σ₂
- **Category:** Supplement/remark error
- **Location:** comp:prob-pt-fin / solution
- **Detail:** The solution claims `FIN` is Σ₂. In fact FIN = {e : W_e finite} is Σ₂? Let's check: W_e finite iff ∃s ∀t≥s ∀x (x∉W_{e,t} or x∈W_{e,s})... Actually FIN is Σ₂: W_e finite iff ∃s (W_e = W_{e,s})? No, that's not right either since W_e could be finite but not equal to any stage. The standard fact: FIN is Σ₂-complete. W_e finite iff ∃s ∀x (x ∈ W_e → x ∈ W_{e,s})? That's not Σ₂ either. Let me reconsider: W_e finite iff ∃s ∀t≥s (W_{e,t} = W_{e,s})? No. Standard: FIN is Σ₂-complete. W_e finite iff ∃s ∀x (x ∈ W_e → x ≤ s)? No. Correct: W_e finite iff ∃s ∀x (x ∈ W_e → x ∈ W_{e,s})? Hmm, that says W_e ⊆ W_{e,s}, which means W_e is bounded by stage s, hence finite. Conversely if W_e finite, there's a stage containing all elements. So FIN = {e : ∃s (W_e ⊆ W_{e,s})}. W_e ⊆ W_{e,s} is Π₁ (∀x (x∈W_e → x∈W_{e,s})), so FIN is Σ₂. OK so FIN is Σ₂. Then Δ₃ follows. So the solution is correct. Wait, but the problem says FIN is decidable in ∅''. If FIN is Σ₂, then by Post's theorem (n=2), FIN ≤_T ∅''. That's correct. So no error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] TOT is Π₂-complete, hence not Σ₂
- **Category:** Supplement/remark error
- **Location:** comp:prob-pt-tot / solution
- **Detail:** The solution says: if TOT were recognizable in ∅', then by Post's theorem (n=1) TOT would be Σ₂, contradicting the hypothesis. But the hypothesis given is that TOT is Π₂-complete (hence not Σ₂). This is fine. Then TOT is Π₂ ⊆ Δ₃, so by 3 (n=2), TOT ≤_T ∅''. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Relativized Post theorem statement
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims: 'Σ_{n+1}^B (the hierarchy starting from relations decidable in B) is exactly the sets recognizable in B^{(n)}'. This is the standard relativized Post theorem and is correct. Also 'Δ¹₁ = hyperarithmetic sets (Suslin–Kleene)' is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Friedberg–Muchnik reference
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says 'For degrees between the jump sequence, see comp:page-friedberg-muchnik.' Friedberg–Muchnik is about existence of incomparable c.e. degrees, which is indeed about degrees 'between' 0 and 0'. This is a reasonable pointer. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Σ_n relations defined by bounded-quantifier formulas with n alternations
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says: 'Σ_n relations coincide with relations definable by formulas with only bounded quantifiers plus n alternating quantifiers.' This is essentially the definition of Σ_n in the arithmetical hierarchy (with bounded quantifiers allowed freely). This is correct. The reference to comp:tm-sigma-definable as 'n=1 one direction' is plausible. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Hypcheck comment on unbounded ∀
- **Category:** Supplement/remark error
- **Location:** comp:bounded-quantifiers / hypcheck
- **Detail:** The hypcheck says: 'In the unbounded ∀i case this cannot be done, which is the reason the hierarchy truly rises with quantifier alternation.' This is a heuristic remark. Is it accurate? The reason the hierarchy rises is more subtle (it's about the fact that Σ_n ≠ Π_n, which requires diagonalization). The claim that 'the inability to combine infinitely many witnesses into one w is the reason the hierarchy rises' is an oversimplification but not strictly false as a heuristic. However, it could be considered imprecise. The statement 'the hierarchy truly rises with quantifier alternation' is true (Σ_n ⊊ Δ_{n+1}), but the given reason is not the actual proof. This is a side comment that is somewhat overstated. I'll flag it as a minor imprecision.
- **Proposed fix:** Rephrase: 'The ability to combine finitely many witnesses into a single w is what makes bounded quantifiers harmless. For unbounded ∀ this fails, and indeed Σ_n ≠ Π_n in general (proved by diagonalization), so the hierarchy does rise with quantifier alternation.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 3 ⇐: bounded quantifier over dom D
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 3
- **Detail:** In Step 3 ⇐, the text writes ∀y∈dom D (...). It claims this is a bounded quantifier bounded by the code of D. But dom D is a finite set coded by D; the bound is on the code, and y ranges over elements of dom D. This is a bounded quantifier ∀y < (some bound depending on D), which is fine. The text says 'bounded by the code of D' — acceptable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 3 ⇒: C ≤_T B from C̄ ≤_m B
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 3
- **Detail:** The text says: C̄ is Σ_{n+1}, so by 2 at n, C̄ ≤_m B, hence C ≤_T B (by comp:turing-reduction-basic.2 and transitivity). This is correct: if C̄ ≤_m B then C̄ ≤_T B, and C ≤_T C̄ (complement), so C ≤_T B. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Step 1 uses 1 to get Σ_{n+1} for ∅^{(n+1)}
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 1
- **Detail:** Step 1: '∅^{(n+1)} is recognizable in ∅^{(n)} (comp:jump-properties.1), so by 1 it is Σ_{n+1}.' This uses 1 at the same n, which is being assumed. Fine. Then 'A Σ_{n+1} implies recognizable in ∅^{(n)} by 1, and by comp:jump-properties.3, A ≤_m (∅^{(n)})' = ∅^{(n+1)}.' Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Corollary: ∅^{(n)} is Σ_n but not Π_n
- **Category:** Logical gap
- **Location:** comp:jump-hierarchy / proof
- **Detail:** The proof: if ∅^{(n)} were Π_n, then it's Σ_n, so Δ_n, so by Post 3, ∅^{(n)} ≤_T ∅^{(n-1)}. But by comp:jump-properties.2, (∅^{(n-1)})' ≰_T ∅^{(n-1)}. Since ∅^{(n)} = (∅^{(n-1)})', contradiction. Correct. The second part: ∅^{(n)} <_T ∅^{(n+1)} follows from comp:jump-properties.2 and ∅^{(n)} ≤_T ∅^{(n+1)}. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Step 4: A and Ā recognizable in ∅^{(n)} implies decidable
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 4
- **Detail:** The text says: if A and Ā are both recognizable in ∅^{(n)}, run the two oracle machines alternately one step at a time and answer by whichever accepts first. This is the standard argument (relativized to comp:prob-decidable-complement). Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Use principle lemma: D ⊆ χ_B definition
- **Category:** Missing hypothesis
- **Location:** comp:use-principle-sets
- **Detail:** The lemma states D ⊆ χ_B means 'D(y)=1 implies y∈B, D(y)=0 implies y∉B'. This is correct for partial functions. The proof is fine. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Bounded quantifiers lemma: n=0 case
- **Category:** Missing hypothesis
- **Location:** comp:bounded-quantifiers / proof
- **Detail:** For n=0, the proof says: a decidable relation with bounded quantifiers is decidable by checking i=0,...,k-1. Correct. For the inductive step, the ∃i<k ∃y case: ∃u [(u)_0 < k ∧ E(x,(u)_0,(u)_1)]. The bracket is Π_n (decidable ∧ Π_n). Correct. The ∀i<k ∃y case: ∃w ∀i<k E(x,i,(w)_i). The ⇐ direction is clear; ⇒ takes minimal witnesses. Correct. The Π_{n+1} case reduces to complement. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] TOT is Π₂-complete
- **Category:** Unsupported fact
- **Location:** comp:prob-pt-tot
- **Detail:** The problem says 'TOT is Π₂-complete (shown in comp:tot-complete)'. The cited theorem comp:tot-complete is titled 'TOT は Π₂ 完全'. So this is supported by citation. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] FIN is Σ₂
- **Category:** Unsupported fact
- **Location:** comp:prob-pt-fin / solution
- **Detail:** The solution claims FIN is Σ₂. As analyzed, FIN = {e : ∃s (W_e ⊆ W_{e,s})}, and W_e ⊆ W_{e,s} is Π₁, so FIN is Σ₂. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Reference to comp:hierarchy-examples for FIN
- **Category:** Improper link
- **Location:** comp:prob-pt-fin
- **Detail:** The problem cites comp:hierarchy-examples for FIN. The label table shows comp:hierarchy-examples is 'example 階層の例'. Presumably it contains FIN as an example. Plausible. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Reference to comp:prob-decidable-complement
- **Category:** Improper link
- **Location:** comp:post-theorem / Step 4
- **Detail:** Step 4 cites comp:prob-decidable-complement (problem 6.12) for the relativized version. The problem is presumably about A decidable iff A and Ā recognizable. The relativization is standard. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Reference to comp:tm-sigma-definable
- **Category:** Improper link
- **Location:** supplement / 似た定理
- **Detail:** The supplement says comp:tm-sigma-definable is 'the n=1 one direction' of the correspondence between Σ_n relations and formulas with bounded quantifiers plus n alternations. The label table shows comp:tm-sigma-definable is 'lemma 1.4 チューリング機械の計算の Σ 定義可能性'. This is about Σ-definability of TM computations, which is indeed a one-direction result for n=1. Plausible. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Reference to comp:page-friedberg-muchnik
- **Category:** Improper link
- **Location:** supplement / 似た定理
- **Detail:** The supplement says 'For degrees between the jump sequence, see comp:page-friedberg-muchnik.' Friedberg–Muchnik is about incomparable c.e. degrees, which are between 0 and 0'. This is a reasonable pointer. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] Suslin–Kleene theorem attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says 'Δ¹₁ coincides with hyperarithmetic sets (Suslin–Kleene theorem)'. This is correct: the Suslin–Kleene theorem states that Δ¹₁ = hyperarithmetic. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] Relativized Post theorem: Σ_{n+1}^B = recognizable in B^{(n)}
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims the relativized Post theorem: Σ_{n+1}^B (hierarchy starting from B-decidable relations) = sets recognizable in B^{(n)}. This is the standard relativized Post theorem. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0022 [Open] Hypcheck: 'the hierarchy truly rises'
- **Category:** Supplement/remark error
- **Location:** comp:bounded-quantifiers / hypcheck
- **Detail:** The hypcheck says: 'The computability of the encoding of sequences: used in the second item to combine finitely many witnesses y_i into one w. That this cannot be done for unbounded ∀i is the reason the hierarchy truly rises with quantifier alternation.' The claim that the inability to combine infinitely many witnesses is 'the reason' the hierarchy rises is an oversimplification. The actual reason Σ_n ≠ Π_n requires diagonalization (e.g., via the halting problem). This is a side comment that is imprecise/overstated. I'll flag it.
- **Proposed fix:** Rephrase: 'The computability of sequence coding is used in the second item to combine finitely many witnesses y_i into one w. For unbounded ∀ this combination is impossible, and indeed Σ_n ≠ Π_n in general (proved by diagonalization), so the hierarchy does rise with quantifier alternation.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0023 [Open] Step 3 ⇐: closure under bounded quantifier ∀y∈dom D
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 3
- **Detail:** The text says the bounded quantifier ∀y∈dom D is 'bounded by the code of D'. But dom D is a finite set; the bound is on the code of D, and y ranges over elements of dom D. This is a bounded quantifier ∀y < (bound depending on D), which is fine. However, the text writes '∀y∈dom D' which is not literally of the form ∀i<k. But it can be rewritten as ∀y < (some bound) (y∈dom D → ...), which is a bounded quantifier. The text acknowledges this. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0024 [Open] Step 3 ⇐: T_M decidable and ∃t∃D combined
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 3
- **Detail:** The text says T_M is decidable and the leading ∃t∃D can be combined. Combining ∃t∃D into a single ∃u is standard (pairing). Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0025 [Open] Step 3 ⇐: 'y∈B' is Σ_{n+1} and 'y∉B' is Π_{n+1}
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 3
- **Detail:** The text says: by 2 at n, 'y∈B' is Σ_{n+1} and 'y∉B' is Π_{n+1}, both contained in Σ_{n+2}. This uses 2 at n: ∅^{(n+1)} is Σ_{n+1}-complete, so y∈B is Σ_{n+1}. Correct. And Π_{n+1} ⊆ Σ_{n+2} by comp:hierarchy-basic.2. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0026 [Open] Step 3 ⇐: closure under → with decidable antecedent
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 3
- **Detail:** The text says: 'decidable antecedent → (in the form of ∨), ∧, bounded quantifier ∀y∈dom D ... Σ_{n+2} is closed under these (comp:hierarchy-basic.3 and comp:bounded-quantifiers).' This is correct: decidable → Σ is Σ (since decidable is Δ_0 ⊆ Σ), ∧ of Σ is Σ, bounded ∀ of Σ is Σ. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0027 [Open] Step 2: n=0 case of 1
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 2
- **Detail:** Step 2: 'A machine with oracle ∅ can be simulated by an ordinary machine since the answer to every query is always no, and conversely. So recognizable in ∅ = recognizable, and by comp:sigma1-recognizable, 1 holds.' Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0028 [Open] Step 1: 1 ⇒ 2
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 1
- **Detail:** Step 1: 'Suppose 1 holds for some n. ∅^{(n+1)} = (∅^{(n)})' is recognizable in ∅^{(n)} (comp:jump-properties.1), so by 1 it is Σ_{n+1}. If A is Σ_{n+1}, by 1 A is recognizable in ∅^{(n)}, and by comp:jump-properties.3, A ≤_m (∅^{(n)})' = ∅^{(n+1)}.' Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0029 [Open] Induction structure: 1 and 2 for all n
- **Category:** Logical gap
- **Location:** comp:post-theorem / proof
- **Detail:** The proof establishes: Step 2 gives 1 at n=0. Step 1 gives 1 ⇒ 2 at each n. Step 3 gives 1 and 2 at n ⇒ 1 at n+1. So by induction, 1 and 2 hold for all n. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0030 [Open] Step 4: 3
- **Category:** Logical gap
- **Location:** comp:post-theorem / Step 4
- **Detail:** Step 4: 'If A ≤_T ∅^{(n)}, then A and Ā are both decidable in ∅^{(n)}, hence recognizable, so by 1 they are Σ_{n+1}, i.e., A is Δ_{n+1} (comp:hierarchy-basic.1). Conversely, if A and Ā are Σ_{n+1}, by 1 both are recognizable in ∅^{(n)}, and running the two oracle machines alternately one step at a time, answer by whichever accepts first, so A is decidable in ∅^{(n)} (relativization of comp:prob-decidable-complement).' Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0031 [Open] Corollary: ∅^{(n)} is Σ_n but not Π_n
- **Category:** Logical gap
- **Location:** comp:jump-hierarchy / proof
- **Detail:** The proof: 'If ∅^{(n)} were Π_n, then it's also Σ_n, so Δ_n, and by Post 3, ∅^{(n)} ≤_T ∅^{(n-1)}. But by comp:jump-properties.2, (∅^{(n-1)})' ≰_T ∅^{(n-1)}.' Correct. The second part: '∅^{(n)} <_T ∅^{(n+1)} follows from comp:jump-properties.2 and ∅^{(n)} ≤_T ∅^{(n+1)} (comp:jump-properties.1, comp:jump-properties.3 gives ∅^{(n)} ≤_m ∅^{(n+1)}).' Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0032 [Open] Corollary: n≥1
- **Category:** Logical gap
- **Location:** comp:jump-hierarchy
- **Detail:** The corollary states for n≥1. The proof uses Post 3 at n, which requires n≥1 (since ∅^{(n-1)} is defined). Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0033 [Open] Problem: FIN is Σ₂
- **Category:** Logical gap
- **Location:** comp:prob-pt-fin / solution
- **Detail:** The solution says FIN is Σ₂, so Δ₃ (comp:hierarchy-basic.2). Then by Post 3 (n=2), FIN ≤_T ∅''. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0034 [Open] Problem: TOT is Π₂-complete
- **Category:** Logical gap
- **Location:** comp:prob-pt-tot / solution
- **Detail:** The solution: 'If TOT were recognizable in ∅', then by Post 1 (n=1) TOT would be Σ₂, contradicting the hypothesis. TOT is Π₂ ⊆ Δ₃, so by 3 (n=2), TOT ≤_T ∅''.' Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0035 [Open] Supplement: 'Σ_{n+1}^B is exactly recognizable in B^{(n)}'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims the relativized Post theorem: Σ_{n+1}^B = recognizable in B^{(n)}. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0036 [Open] Supplement: 'Δ¹₁ = hyperarithmetic (Suslin–Kleene)'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0037 [Open] Supplement: 'Σ_n relations = formulas with bounded quantifiers plus n alternations'
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0038 [Open] Supplement: 'comp:tm-sigma-definable is the n=1 one direction'
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** Plausible. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0039 [Open] Supplement: 'For degrees between the jump sequence, see comp:page-friedberg-muchnik'
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** Friedberg–Muchnik is about incomparable c.e. degrees, which are between 0 and 0'. This is a reasonable pointer. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0040 [Open] Supplement: '∅' as oracle means ∃ one step'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says: 'Having ∅' as oracle means that a question of the form "does some computation halt" (one ∃) can be answered in one step. ∅^{(n)} is an oracle that answers n alternations of quantifiers at once, and using it to do one more search (∃) gives Σ_{n+1}.' This is a heuristic but essentially correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0041 [Open] Supplement: 'The use principle guarantees that the questions asked to the guide are finite'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0042 [Open] Hypcheck: 'The use principle is used in Step 3 ⇐'
- **Category:** Supplement/remark error
- **Location:** comp:post-theorem / hypcheck
- **Detail:** Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0043 [Open] Hypcheck: 'Bounded quantifier closure is used in Step 3 ⇐'
- **Category:** Supplement/remark error
- **Location:** comp:post-theorem / hypcheck
- **Detail:** Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0044 [Open] Hypcheck: 'Jump properties used in Step 1'
- **Category:** Supplement/remark error
- **Location:** comp:post-theorem / hypcheck
- **Detail:** Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0045 [Open] Hypcheck: 'Sequence coding computability'
- **Category:** Supplement/remark error
- **Location:** comp:bounded-quantifiers / hypcheck
- **Detail:** The hypcheck says: 'The computability of sequence coding: used in the second item to combine finitely many witnesses y_i into one w. That this cannot be done for unbounded ∀i is the reason the hierarchy truly rises with quantifier alternation.' The first sentence is correct. The second sentence is an oversimplification: the reason the hierarchy rises is diagonalization, not merely the failure of sequence coding. This is a side comment that is imprecise. I'll flag it.
- **Proposed fix:** Rephrase: 'The computability of sequence coding is used in the second item to combine finitely many witnesses y_i into one w. For unbounded ∀ this combination is impossible, and indeed Σ_n ≠ Π_n in general (proved by diagonalization), so the hierarchy does rise with quantifier alternation.'
- **Reported:** 2026-10-28 (10fede1)
