# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/04-ma-consequences.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/04-ma-consequences.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 18 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful development of MA consequences for almost disjoint families and 2^κ. I found no genuine logical gaps, missing hypotheses, or improper links in the proofs; the cited results are used consistently with their stated content. The supplements and hypchecks are largely accurate: the σ-centered remark, the counterexample in the density hypcheck, the maximality of finite partitions, the b-invariant discussion, and the consistency of 2^{ℵ_0}=ℵ_{ω_1} are all correct. The only borderline items are the Luzin gap attribution and the countable-case strengthening in the coding supplement, both of which are standard and essentially correct as stated, so I do not report them as errors.

## Issues

### ISSUE-0001 [Open] Incorrect claim that 2^{<2^{aleph_0}}=2^{aleph_0} under MA
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-two-kappa (GCH の破れ)
- **Detail:** The supplement states that under MA the function κ↦2^κ is constant on ℵ_0≤κ<2^{ℵ_0}, 'which can be written as 2^{<2^{ℵ_0}}=2^{ℵ_0}'. This is false: 2^{<2^{ℵ_0}} is the supremum of 2^μ over all μ<2^{ℵ_0}, and for μ≥2^{ℵ_0}... more precisely for any μ with 2^{ℵ_0}≤μ<2^{ℵ_0}... the point is that the supremum includes cardinals μ with 2^{ℵ_0}≤μ, e.g. μ=2^{ℵ_0} itself gives 2^{2^{ℵ_0}}>2^{ℵ_0}. Indeed 2^{<λ}=sup_{μ<λ}2^μ, and taking μ=2^{ℵ_0} (which is <2^{2^{ℵ_0}} but the relevant range is μ<2^{ℵ_0}) — the correct statement is that the sup is over μ<2^{ℵ_0}, and 2^μ for μ<2^{ℵ_0} equals 2^{ℵ_0} only when μ≥ℵ_0; but for μ<ℵ_0 (finite) 2^μ is finite, so the sup is 2^{ℵ_0}. Actually the sup over μ<2^{ℵ_0} of 2^μ: for μ<ℵ_0 finite, 2^μ finite; for ℵ_0≤μ<2^{ℵ_0}, 2^μ=2^{ℵ_0}. So the sup is 2^{ℵ_0}, and the identity 2^{<2^{ℵ_0}}=2^{ℵ_0} is correct. However the phrase 'this can be written as 2^{<2^{ℵ_0}}=2^{ℵ_0}' is a correct consequence. The real error is the example: 'if 2^{ℵ_0}=ℵ_2 then 2^{ℵ_1}=ℵ_2=ℵ_1^+, so GCH holds at ℵ_1'. This is correct since ℵ_1<ℵ_2=2^{ℵ_0}, so 2^{ℵ_1}=2^{ℵ_0}=ℵ_2=ℵ_1^+. This is fine. Re-examining: the claim '2^{<2^{ℵ_0}}=2^{ℵ_0}' is actually correct under MA. So no error here.
- **Proposed fix:** No change needed; the identity 2^{<2^{ℵ_0}}=2^{ℵ_0} follows from 2^μ=2^{ℵ_0} for ℵ_0≤μ<2^{ℵ_0} together with 2^n finite for finite n.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Luzin gap attribution and 'Hausdorff, Luzin' counterexample claim
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-ad-code (強めることはできない)
- **Detail:** The supplement claims that requiring 'x∖d finite for x∈B∖A' fails when both A and B∖A have size ℵ_1, citing 'Hausdorff, Luzin' and Kunen Chapter II exercises 9,10, and calling the counterexample a 'Luzin gap'. The existence of a Luzin gap (an (ℵ_1,ℵ_1)-gap in [ω]^ω) is a ZFC theorem due to Hausdorff, and it does show that the strengthened coding fails for some A of size ℵ_1 with complement of size ℵ_1. However the statement as written says 'when both have size ℵ_1 there is a ZFC counterexample', which is imprecise: the Luzin gap gives a specific pair (A, B∖A) of size ℵ_1 for which no d works, not that it fails for every such pair. The phrasing 'both being of size ℵ_1 there is a ZFC counterexample' is acceptable if read as 'there exists such a pair'. This is borderline; the attribution to Hausdorff (the gap) and Luzin (the Luzin gap) is standard. I will not report this as it is essentially correct.
- **Proposed fix:** Clarify: 'there exist A⊆B with |A|=|B∖A|=ℵ_1 for which no such d exists (a Luzin gap, due to Hausdorff/Luzin).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Consistency of 2^{aleph_0}=aleph_{omega_1} attribution
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-continuum-regular (MA がなければ)
- **Detail:** The supplement states '2^{ℵ_0}=ℵ_{ω_1} is consistent (cofinality ℵ_1>ℵ_0 so no contradiction with König; Kunen, Set Theory, Chapter VII 5.16)'. This is correct: König's theorem only forbids cf(2^{ℵ_0})=ℵ_0, and ℵ_{ω_1} has cofinality ℵ_1>ℵ_0, so it is consistent (e.g. by Easton/forcing). The reference to Kunen VII 5.16 is plausible. No error.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that b≥aleph_1 and b≤2^{aleph_0} and MA⇒b=2^{aleph_0}
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-dominating (基数不変量)
- **Detail:** The supplement defines b as the minimal size of a family not dominated by a single g, states b≥ℵ_1 (from the countable case), b≤2^{ℵ_0} (since ω^ω itself is not dominated by any g), and that the theorem gives MA⇒b=2^{ℵ_0}. All these are correct. The parenthetical '(g+1 cannot dominate it)' is a slight abuse (g+1 is pointwise successor, which does dominate g but not all functions), but the intended meaning—that ω^ω is not dominated by any single g since g+1∈ω^ω is not <* g—is correct. No error.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck claim that finite almost disjoint families partitioning ω are maximal
- **Category:** Unsupported fact
- **Location:** set:ma-ad-corollary hypcheck
- **Detail:** The hypcheck says 'a finite almost disjoint family {x_0,...,x_k} with ∪x_i=ω (e.g. a partition of ω into finitely many pieces) is maximal'. This is correct: if the union is ω, any infinite y⊆ω must meet some x_i infinitely (since ω is covered), so y cannot be almost disjoint from all. Actually if y is almost disjoint from each x_i and ∪x_i=ω, then y=∪(y∩x_i) is a finite union of finite sets, hence finite, contradiction. So the claim is correct. No error.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 1 of set:ma-two-kappa: injection κ→B_0 requires κ≤2^{aleph_0}
- **Category:** Logical gap
- **Location:** set:ma-two-kappa / Step 1
- **Detail:** Step 1 says 'since |B_0|=2^{ℵ_0} there is an injection κ→B_0, using κ≤2^{ℵ_0}'. This is fine: any set of size κ≤2^{ℵ_0}=|B_0| injects into B_0. The injection exists by definition of cardinal comparison. No gap.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 3 of set:ma-two-kappa: P(ω)⊆P(κ) requires ω⊆κ
- **Category:** Logical gap
- **Location:** set:ma-two-kappa / Step 3
- **Detail:** Step 3 claims 2^{ℵ_0}≤2^κ because P(ω)⊆P(κ), which requires ω⊆κ, i.e. κ infinite (given as hypothesis). This is correct since κ is an infinite cardinal so ω≤κ. No gap.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] set:ma-continuum-regular Step 3: regularity from cf(2^{aleph_0})=2^{aleph_0}
- **Category:** Logical gap
- **Location:** set:ma-continuum-regular / Step 3
- **Detail:** Step 3 concludes 2^{ℵ_0} is regular from cf(2^{ℵ_0})=2^{ℵ_0} and 2^{ℵ_0} being a limit ordinal. Regular means cf(κ)=κ for a cardinal; 2^{ℵ_0} is a cardinal (initial ordinal) and a limit ordinal, so cf equal to itself gives regularity. Correct.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] set:ma-dominating Step 6: taking common extension in G
- **Category:** Logical gap
- **Location:** set:ma-dominating / Step 6
- **Detail:** Step 6 takes a common extension ⟨p'',F''⟩∈G of two elements of G. A filter is directed, so a common extension exists in G (filters are upward directed and closed upward; the common lower bound of two elements is in G). Correct.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] set:ma-dominating Step 5: g is a function
- **Category:** Logical gap
- **Location:** set:ma-dominating / Step 5
- **Detail:** Step 5 argues g is a function because any two conditions in G have a common extension and p,p' agree on common domain. This is the standard argument; correct.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] set:ma-ad Step 1: MA(λ) for finite κ
- **Category:** Missing hypothesis
- **Location:** set:ma-ad / Step 1
- **Detail:** Step 1 sets λ=max(κ,ℵ_0). If κ finite, λ=ℵ_0 and MA(ℵ_0) holds in ZFC by set:ma-omega. If κ infinite, λ=κ and MA(κ) holds. The claim 'MA(λ)=MA(κ)' when κ infinite is fine since λ=κ. Correct.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] set:ma-ad Step 3: |D|≤λ uses λ infinite
- **Category:** Missing hypothesis
- **Location:** set:ma-ad / Step 3
- **Detail:** Step 3 uses |A|⊕|C|⊗ℵ_0≤λ⊕λ⊗λ=λ, requiring λ infinite (true since λ≥ℵ_0) and absorption. Correct.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] set:ma-ad-corollary Step 4 uses MA(κ) for κ=|A|<2^{aleph_0}
- **Category:** Improper link
- **Location:** set:ma-ad-corollary / Step 4
- **Detail:** Step 4: if κ=|A|<2^{ℵ_0} then MA(κ) holds (by MA monotonicity and MA⇒κ<2^{ℵ_0}). This uses set:ma-continuum-false correctly. Correct.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] set:ma-ad-code uses set:ma-ad with C=B∖A
- **Category:** Improper link
- **Location:** set:ma-ad-code / proof
- **Detail:** The proof applies set:ma-ad with A and C=B∖A, verifying hypothesis (4.2). The verification: y∈C, F⊆A finite, y∉A so y∉F, each z∈F distinct from y so y∩z finite, hence y∩∪F finite, y infinite so y∖∪F infinite. Correct.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] set:ma-ad intuition: 'κ=ω then ZFC theorem'
- **Category:** Supplement/remark error
- **Location:** set:ma-ad / intuition
- **Detail:** The intuition says 'if κ=ω then it is a ZFC theorem (set:ma-omega)'. MA(ℵ_0) is a ZFC theorem, so the conclusion of set:ma-ad for κ=ω holds in ZFC. Correct.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] set:ad-poset-ccc hypcheck: σ-centered claim
- **Category:** Supplement/remark error
- **Location:** set:ad-poset-ccc / hypcheck
- **Detail:** The hypcheck claims P_A is σ-centered: partitioned into countably many sets {⟨s,F⟩:F} indexed by s∈[ω]^{<ω}, each with finite sets having common extensions. This is correct: for fixed s, any finitely many ⟨s,F_i⟩ have common extension ⟨s,∪F_i⟩. So σ-centered. Correct.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] set:ad-dense-sets hypcheck: counterexample y⊆x∈A
- **Category:** Supplement/remark error
- **Location:** set:ad-dense-sets / hypcheck
- **Detail:** The hypcheck says if y⊆x∈A then ⟨∅,{x}⟩'s extensions ⟨s',F'⟩ satisfy s'∩y⊆x∩s'⊆∅, so E^y_n not dense. Check: for ⟨s',F'⟩≤⟨∅,{x}⟩, condition x∩s'⊆∅ means s'∩x=∅, so s'∩y=∅ (y⊆x), hence s'∩y⊆n always, so no extension in E^y_n. Correct counterexample.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] set:ma-ad-code supplement: 'one of A, B∖A countable then holds under MA(κ)'
- **Category:** Unsupported fact
- **Location:** supplement after set:ma-ad-code
- **Detail:** The supplement claims the strengthened conclusion (x∖d finite for x∈B∖A) holds under MA(κ) if one of A, B∖A is countable. This is a nontrivial claim stated without proof. If B∖A is countable, one can diagonalize to make each x∈B∖A almost contained in d while keeping d almost disjoint from A — plausible via a ccc forcing or direct construction. If A is countable, similar. This is a known result but stated without justification; however it is a supplement and the claim is standard. I will not flag as it is likely correct and the main point (failure for ℵ_1,ℵ_1) is the cited fact.
- **Proposed fix:** Add a brief justification or citation for the countable case.
- **Reported:** 2026-10-28 (10fede1)
