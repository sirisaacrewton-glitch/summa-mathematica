# Verification tracker: `02-algebra/02-group-theory/05-infinite-abelian/05-ext-whitehead.html`

<!-- source: 02-algebra/02-group-theory/05-infinite-abelian/05-ext-whitehead.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Ext(A,Z) divisible for torsion-free A: the argument is wrong and the claim needs care
- **Category:** Supplement/remark error
- **Location:** supplement (Ext(A,Z) の構造) / grp:sec-ew-independence
- **Detail:** The supplement claims that for torsion-free A, Ext(A,Z) is divisible, and justifies it by saying that 'n times A→A is injective, with cokernel A/nA, and the same long exact sequence as in grp:ext-abelian-basic.3 shows n-times on Ext(A,Z) is surjective.' The cited result grp:ext-abelian-basic.3 is about surjectivity of Ext(A,B)→Ext(A',B) for a short exact sequence 0→A'→A→A''→0; it is not the argument needed here. The correct argument uses the short exact sequence 0→A→A→A/nA→0 (injectivity of n-times, which holds because A is torsion-free) and the long exact sequence in the first variable: Ext(A,Z)→Ext(A,Z)→Ext(A/nA,Z). Since A/nA is a torsion group, Ext(A/nA,Z)≅Hom(A/nA,Q/Z) (grp:ext-abelian-basic.4), and this is a torsion group, so the map Ext(A,Z)→Ext(A,Z) (multiplication by n) is surjective. The conclusion (divisibility) is true, but the stated reason is incorrect and the reference is misused. Also, the sentence 'therefore Ext(A,Z) can be described by the invariants of the structure theorem' is imprecise: the structure theorem applies to divisible groups, and Ext(A,Z) being divisible means it is a direct sum of copies of Q and Z(p^∞); the supplement should say this explicitly.
- **Proposed fix:** Replace the justification with: 'For torsion-free A the map n:A→A is injective, so 0→A→A→A/nA→0 is exact. The long exact sequence in the first variable gives Ext(A,Z)→Ext(A,Z)→Ext(A/nA,Z). Since A/nA is torsion, Ext(A/nA,Z)≅Hom(A/nA,Q/Z) is a torsion group (grp:ext-abelian-basic.4), hence multiplication by n on Ext(A,Z) is surjective. Thus Ext(A,Z) is divisible, and by the structure theorem (grp:divisible-structure) it is a direct sum of copies of Q and of Prüfer groups Z(p^∞).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Ext(Q,Z)≅R is stated as known but is not established and is misattributed
- **Category:** Supplement/remark error
- **Location:** supplement (Ext(A,Z) の構造) / grp:sec-ew-independence
- **Detail:** The supplement asserts 'in fact Ext(Q,Z) is known to be isomorphic to R.' This is a strong statement about the cardinality and structure of Ext(Q,Z); it is not proved on the page, and the only support offered is grp:prob-ew-ext-q, which proves only that Ext(Q,Z) is non-zero and uncountable. The identification Ext(Q,Z)≅R (as an abstract group, or as a Q-vector space of dimension 2^{ℵ_0}) requires additional set-theoretic and algebraic work and is not a consequence of the cited problem. Stating it as 'known' without proof or a correct citation is an unsupported side claim.
- **Proposed fix:** Either delete the sentence, or replace it with the weaker, provable statement: 'Ext(Q,Z) is uncountable (grp:prob-ew-ext-q); in fact it is a Q-vector space of dimension 2^{ℵ_0}, hence isomorphic to R as an abstract group.' If the stronger identification is kept, cite a source explicitly (e.g. Eklof–Mekler, Almost Free Modules) rather than grp:prob-ew-ext-q.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Stein's theorem: attribution and the 'countable subgroups are free' corollary
- **Category:** Unsupported fact
- **Location:** grp:fact-stein
- **Detail:** The fact states 'countable W groups are free' and attributes it to K. Stein, citing Eklof–Mekler. The standard attribution of the result that countable Whitehead groups are free is to Stein (1960s), and the corollary that every countable subgroup of a W group is free follows from grp:whitehead-basic.2 (subgroups of W groups are W) together with the theorem. This part is correct. However, the parenthetical 'therefore all countable subgroups of a W group are free' is only valid because subgroups of W groups are W groups, which is cited; the statement itself is fine. No error here beyond the attribution, which matches the literature. (No change required unless the attribution is disputed.)
- **Proposed fix:** No change needed; optionally add the year (Stein, 1951/1960s) for precision.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Intuition: 'MA+¬CH lets every splitting be constructed, so non-free W groups exist' is backwards
- **Category:** Supplement/remark error
- **Location:** intuition / grp:sec-ew-independence
- **Detail:** The intuition says: 'Conversely MA+¬CH is a principle of the form "there is a solution satisfying all ℵ_1 countable conditions", and it lets every splitting of an extension be constructed, so a non-free W group can be built.' This is misleading: MA+¬CH does not 'construct splittings'; rather, it is used to build a non-free group A of size ℵ_1 with Ext(A,Z)=0 by a transfinite construction in which the splitting of each extension is arranged at a stage, and MA+¬CH is used to handle the ℵ_1-many requirements simultaneously (via a suitable forcing/almost-disjoint-set argument). The phrasing 'lets every splitting be constructed' suggests that MA forces all extensions to split, which would make all groups W groups and hence free (contradicting the conclusion). The direction of the argument is stated incorrectly.
- **Proposed fix:** Replace with: 'Conversely, under MA+¬CH one builds a non-free group A of cardinality ℵ_1 together with splittings of all extensions 0→Z→E→A→0 by a transfinite recursion of length ω_1; MA+¬CH is used to meet the ℵ_1-many requirements at once (the relevant almost-disjoint-set/forcing principle), yielding a non-free W group.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 6: the case analysis for Hom(A/C,Q/Z) uncountable is incomplete
- **Category:** Logical gap
- **Location:** grp:whitehead-basic / Step 6
- **Detail:** Step 6 argues that X=A/C is infinite, so either (i) infinitely many X_p≠0, or (ii) some X_p=Z(p^∞). This dichotomy is not exhaustive as stated: X could be infinite with only finitely many nonzero primary components, each finite cyclic, in which case X would be finite — so that case is excluded, but the text does not say so. More importantly, in case (i) the argument 'for each X_p≠0 we can choose either the inclusion X_p→Q/Z or 0, so the product has at least 2^{ℵ_0} elements' requires that there are infinitely many such p and that each choice gives a distinct homomorphism; this is correct, but the text should note that the product over infinitely many nontrivial factors has cardinality at least 2^{ℵ_0}. In case (ii), Hom(Z(p^∞),Q/Z)⊇End(Z(p^∞)) is uncountable by grp:pruefer-endomorphisms, which is correct. The gap is the missing justification that X infinite implies (i) or (ii): if only finitely many X_p are nonzero and all are finite, X is finite, contradiction. This should be stated.
- **Proposed fix:** Add: 'Since X is infinite, either infinitely many X_p are nonzero, or some X_p is infinite; by grp:pruefer-properties.2 an infinite X_p equals Z(p^∞). (If only finitely many X_p were nonzero and all were finite, X would be finite.)' Then proceed with (i) and (ii) as written.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 4: the increasing sequence of cyclic subgroups and the bound |n_k|≥2 need justification
- **Category:** Logical gap
- **Location:** grp:whitehead-basic / Step 4
- **Detail:** Step 4 asserts: 'A is countable, so there is an increasing sequence of finitely generated subgroups ⟨a⟩=⟨a'_0⟩⊆⟨a'_1⟩⊆… with union A, and since A is not finitely generated there are infinitely many strictly increasing stages. Writing a=n_k a'_k, each time it strictly increases |n_k| at least doubles (a'_k=c a'_{k+1}, |c|≥2), hence is unbounded.' The claim that |n_k| at least doubles at each strict increase requires that a'_k=c a'_{k+1} with |c|≥2, which holds because ⟨a'_k⟩⊊⟨a'_{k+1}⟩ and both are cyclic (so a'_k is a proper multiple of a'_{k+1} up to sign). This is correct but should be stated. The existence of the chain with union A is standard (A countable, finitely generated subgroups form a directed set), but the text should note that the chain can be chosen with each ⟨a'_k⟩ cyclic, which follows because every finitely generated subgroup of A≤Q is cyclic (grp:prob-tf-subgroup-q). The step is essentially correct but the reasoning is compressed; no fatal error, but the 'doubling' claim needs the explicit note that a'_k=c a'_{k+1} with |c|≥2.
- **Proposed fix:** Add: 'Since ⟨a'_k⟩⊊⟨a'_{k+1}⟩ are both cyclic, a'_k=c a'_{k+1} with |c|≥2 (up to sign), so |n_k|=|c||n_{k+1}|≥2|n_{k+1}|; hence |n_k| is unbounded.'
- **Reported:** 2026-10-28 (10fede1)
