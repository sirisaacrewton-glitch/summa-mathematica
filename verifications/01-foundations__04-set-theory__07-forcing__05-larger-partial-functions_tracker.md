# Verification tracker: `01-foundations/04-set-theory/07-forcing/05-larger-partial-functions.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/05-larger-partial-functions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Claim that λ-distributivity implies no short sequences added is stated too strongly
- **Category:** Supplement/remark error
- **Location:** supplement (関連する結果)
- **Detail:** The supplement says that λ-distributivity (intersection of fewer than λ dense open sets is dense) implies no short sequences are added, and that this is 'generally said'. This is imprecise: λ-distributivity is equivalent to adding no new sequences of length less than λ only under additional hypotheses (e.g. the forcing is separative / we consider the Boolean completion, and one needs the dense sets to be indexed appropriately). As stated for an arbitrary p.o. it is not literally correct, and the parenthetical '一般にはこう言われている' does not fix the mathematical content. The precise standard statement is: a p.o. is (<λ)-distributive iff forcing with it adds no new functions from any γ<λ into any set in the ground model (equivalently no new γ-sequences of ground-model sets).
- **Proposed fix:** Replace with: 'A p.o. is (<λ)-distributive (the intersection of fewer than λ dense open sets is dense) iff forcing with it adds no new sequences of length less than λ of ground-model sets; in particular it adds no new reals when λ>ω. (This is weaker than λ-closure.)'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that Fn(I,J,λ) is c.c.c. only in trivial cases is overstated
- **Category:** Supplement/remark error
- **Location:** set:sec-fn-lambda (paragraph after set:fn-lambda-many-subsets)
- **Detail:** The text asserts that for λ>ω, Fn(I,J,λ) is c.c.c. only in the trivial cases |I|<ω or |J|≤1. This is not accurate: by set:fn-lambda-cc, Fn(I,J,λ) has the (|J|^{<λ})^{+}-c.c.; if |J|^{<λ}=ω (e.g. J finite and λ arbitrary, or more generally |J|^{<λ} countable) then it is c.c.c. even when I is large. For instance Fn(ω_{1},2,ω_{1}) has the (2^{<ω_{1}})^{+}-c.c., which is c.c.c. under CH. So the 'only trivial cases' claim is false as stated.
- **Proposed fix:** Replace with: 'For λ>ω, Fn(I,J,λ) need not be c.c.c.; it is c.c.c. precisely when (|J|^{<λ})^{+}=ω_{1}, i.e. |J|^{<λ}=ω (which includes the trivial cases |I|<ω or |J|≤1, but also e.g. finite J with λ arbitrary under suitable cardinal arithmetic). In general one uses the θ-c.c. with θ=(|J|^{<λ})^{+}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim about c.c.(Fn(I,2,λ)) under GCH and without GCH
- **Category:** Supplement/remark error
- **Location:** set:sec-fn-lambda (paragraph on c.c.(P))
- **Detail:** The text states: for P=Fn(I,2,λ), under GCH if |I|≥λ then c.c.(P)=λ^{+}, and without GCH c.c.(P)=(2^{<λ})^{+}. The 'without GCH' value (2^{<λ})^{+} is only an upper bound (given by set:fn-lambda-cc); the exact value of c.c.(P) is not in general (2^{<λ})^{+}. The text itself later says only the inequality c.c.(P)≤(2^{<λ})^{+} is needed, which suggests the equality claim is an overstatement. Also the GCH case requires |I|≥λ to make the antichain of size λ^{+} exist; the equality c.c.(P)=λ^{+} under GCH is plausible but the 'without GCH' equality is not justified.
- **Proposed fix:** Replace with: 'For P=Fn(I,2,λ) one has c.c.(P)≤(2^{<λ})^{+} in general (set:fn-lambda-cc); under GCH and |I|≥λ this bound is attained, c.c.(P)=λ^{+}. Without GCH the exact value may be smaller; only the inequality c.c.(P)≤(2^{<λ})^{+} is used below.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that Fn(λ,2,λ) collapses λ when λ is singular
- **Category:** Supplement/remark error
- **Location:** set:sec-lambda-closed (paragraph after set:fn-lambda-closed)
- **Detail:** The text says: if λ is singular then Fn(λ,2,λ) is not λ-closed, and if (λ is singular)^M then Fn(λ,2,λ)^M collapses λ (Kunen VII Exercise G5). The non-λ-closure is correct. However, the collapse claim needs care: Fn(λ,2,λ) with λ singular does add a surjection from a smaller ordinal onto λ (the generic function has domain λ but each condition has size <λ, and a decreasing sequence of length cf(λ) with union the whole function can be built, so λ becomes of size cf(λ) in the extension). This is essentially correct, but the statement as written ('collapses λ') should specify that λ is a cardinal in M and that the collapse is to cf(λ)^M. As stated it is acceptable but imprecise about what λ collapses to.
- **Proposed fix:** Replace with: 'If (λ is a singular cardinal)^M then Fn(λ,2,λ)^M is not λ-closed and in fact collapses λ to cf(λ)^M (Kunen VII Exercise G5).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim in problem solution that the forcing adds ℵ_2 new subsets of ω_1
- **Category:** Supplement/remark error
- **Location:** set:prob-closed-no-new-reals / solution
- **Detail:** The solution's parenthetical says: 'since 2^{ℵ_1}=ℵ_2 in M, this forcing does not change the value of the power set, but adds ℵ_2 new subsets of ω_1.' This is misleading: in M there are already ℵ_2 subsets of ω_1 (since 2^{ℵ_1}=ℵ_2 in M), and in M[G] there are again ℵ_2 subsets of ω_1. The forcing does not 'add ℵ_2 new subsets' in the sense of increasing the total; it may add new ones while possibly also losing none, but the cardinality stays ℵ_2. The phrase 'adds ℵ_2 new subsets' is at best imprecise and could be read as claiming the number of subsets increases by ℵ_2.
- **Proposed fix:** Replace the parenthetical with: '(In M we already had 2^{ℵ_1}=ℵ_2, and the forcing preserves this value; it may add new subsets of ω_1 but the total number remains ℵ_2.)'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Claim that reversing the order in problem 2 makes Q not preserve cardinals
- **Category:** Supplement/remark error
- **Location:** paragraph after set:con-gch-violations (discussion of reverse order)
- **Detail:** The text claims: if instead one starts with P=Fn(ω_5×ω_1,2,ω_1)^M giving N with 2^{ℵ_1}=ℵ_5, then (2^{<ω_2}≠ω_2)^N, and Q=Fn(ω_7×ω_2,2,ω_2)^N does not preserve cardinals; in fact ω_5^N becomes of size ω_2 in N[H] and N[H] satisfies 2^{ℵ_1}=ℵ_2. The conclusion that Q collapses ω_5^N to ω_2 is correct (since 2^{<ω_2}≥2^{ℵ_1}=ℵ_5>ω_2, the c.c. bound is (2^{<ω_2})^{+}>ω_2, and Fn(ω_7×ω_2,2,ω_2) with 2^{<ω_2}>ω_2 collapses cardinals in (ω_2,2^{<ω_2}]). However, the claim that N[H] satisfies 2^{ℵ_1}=ℵ_2 needs justification: Q is ω_2-c.c. and adds a surjection from ω_2 onto ω_5^N, but whether 2^{ℵ_1}=ℵ_2 in N[H] depends on Q not adding ω_1-sequences; since Q is not ω_2-closed (it is only ω_1-closed? actually Fn(ω_7×ω_2,2,ω_2) is ω_2-closed only if ω_2 is regular in N, which it is, but the domain has size ω_2 so it is ω_2-closed? No: conditions have size <ω_2, and a decreasing sequence of length <ω_2 has union of size <ω_2, so it is ω_2-closed, hence adds no new ω_1-sequences, so 2^{ℵ_1} is preserved). So the claim 2^{ℵ_1}=ℵ_2 in N[H] is actually correct because Q is ω_2-closed and hence adds no new subsets of ω_1. But the text attributes this to Exercise G3, which is about collapse, not about preservation of 2^{ℵ_1}. The attribution is imprecise.
- **Proposed fix:** Clarify: 'Q is ω_2-closed (since ω_2 is regular in N), so it adds no new subsets of ω_1; hence (2^{ℵ_1}=ℵ_2)^{N[H]} is inherited from N. Meanwhile ω_5^N becomes of size ω_2 because Q adds a surjection from ω_2 onto ω_5^N (Kunen VII Exercise G3).'
- **Reported:** 2026-10-28 (10fede1)
