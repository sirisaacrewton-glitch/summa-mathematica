# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/02-prime-decomposition.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/02-prime-decomposition.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of the Dedekind property, multiplicativity of the ideal norm, the fundamental identity, and Kummer–Dedekind are sound, and the worked examples (Gaussian integers, Q(∛2), Q(√-5), cyclotomic) check out. The main concerns are in the remark on Dedekind's non-monogenic cubic field (the 'for every θ' phrasing and the reliance on an unverified splitting claim) and in the supplement, where the justification for the rank/freeness of B_p and the conductor-form of Kummer–Dedekind are stated a bit too tersely. These are minor precision issues rather than fatal errors.

## Issues

### ISSUE-0001 [Open] Dedekind's example: 'any θ' claim and the mod-2 argument
- **Category:** Supplement/remark error
- **Location:** remark 指数を割り切る素数とデデキントの例
- **Detail:** The remark argues: if O_K = Z[θ] then by Kummer–Dedekind f̄ must be a product of 3 distinct linear factors over F_2, but F_2[x] has only two linear polynomials, hence O_K ≠ Z[θ] for every θ. This is correct as far as it goes, but the conclusion 'for every θ' is stated as if it followed from the specific θ generating the given polynomial; in fact the argument only rules out monogenic O_K, which is fine, but the phrasing 'どの θ についても' combined with citing the polynomial x^3-x^2-2x-8 as 'the' generator is imprecise: the polynomial's root generates K, and the argument shows no generator gives O_K = Z[θ]. More seriously, the claim that 2 splits completely in Dedekind's cubic field is asserted as 'known' without verification, and the deduction that f̄ would need 3 distinct linear factors requires that 2 not divide the index for that θ — which is exactly what is being refuted, so the logic is: if O_K = Z[θ] for some θ then 2 ∤ index automatically (index 1), so Kummer–Dedekind applies and gives 3 distinct linear factors, contradiction. This is valid, but the remark should make explicit that the contradiction is with the number of linear polynomials over F_2, and that this shows the field is not monogenic.
- **Proposed fix:** State explicitly: 'If O_K = Z[θ] for some θ, then the index is 1, so 2 does not divide it and Kummer–Dedekind applies to f = min poly of θ; since 2 splits completely, f̄ would have to factor into 3 distinct linear factors over F_2. But F_2[x] has only the two linear polynomials x and x+1, a contradiction. Hence O_K is not of the form Z[θ] for any θ (Dedekind's non-monogenic cubic field).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Supplement: 'B is finitely generated over A' and freeness claim
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement claims that for a Dedekind domain A with fraction field F and finite separable L/F, with B the integral closure, the identity ∑e_i f_i = [L:F] holds, justifying it by 'B is finitely generated over A and A_p is a DVR so B_p is free of rank [L:F] over A_p'. The freeness of B_p over A_p of rank [L:F] requires that B_p be a finitely generated torsion-free module over the DVR A_p, which is true, but the supplement omits the essential hypothesis that A be a Dedekind domain (Noetherian, integrally closed, dimension 1) — it does state this — yet the identity ∑e_i f_i = [L:F] also requires that p be a nonzero prime and that the extension be separable (stated). The real gap: the claim 'B_p is free of rank [L:F]' needs L/F separable AND that B_p = B ⊗_A A_p has rank [L:F], which holds, but the supplement does not mention that one needs p ≠ 0 and that A_p is a DVR only for height-one primes — fine for Dedekind. The statement is essentially correct but the justification 'B is finitely generated over A' is not sufficient by itself; one needs B_p to be a finitely generated torsion-free A_p-module, which follows but should be said.
- **Proposed fix:** Add: 'Since A is Noetherian and B is a finitely generated A-module (integral closure in a finite separable extension), B_p = B ⊗_A A_p is a finitely generated torsion-free module over the DVR A_p, hence free; its rank equals [L:F] because F ⊗_A B ≅ L.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Kummer–Dedekind 'conductor' form: missing coprimality detail
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement states Kummer–Dedekind holds in the form 'p coprime to the conductor {x : xB ⊂ A[θ]}'. This is the standard generalized form, but the statement as written is imprecise: the conductor is an ideal of B (or of A[θ]), and 'coprime' must mean pB + conductor = B (i.e., the conductor is not contained in any prime above p). As stated ('p が導手と互いに素') it is acceptable informally, but the set {x : xB ⊂ A[θ]} is an ideal of B, not of A, so coprimality with a prime of A needs clarification.
- **Proposed fix:** Replace with: 'Kummer–Dedekind also holds when p is coprime to the conductor ideal 𝔠 = {x ∈ B : xB ⊂ A[θ]}, i.e. 𝔠 + pB = B.'
- **Reported:** 2026-10-28 (8ccef3d)
