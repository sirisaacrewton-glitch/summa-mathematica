# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/02-prime-decomposition.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/02-prime-decomposition.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Dedekind's example: 'any θ' claim and the mod 2 argument
- **Category:** Supplement/remark error
- **Location:** remark 指数を割り切る素数とデデキントの例
- **Detail:** The remark argues: if O_K = Z[θ] then Kummer–Dedekind would force f̄ to be a product of three distinct linear factors over F_2, but F_2[x] has only two linear polynomials, hence O_K ≠ Z[θ] for every θ. The conclusion (the field is not monogenic) is correct, but the stated reason is imprecise: Kummer–Dedekind requires p ∤ index; here the index is divisible by 2, so the theorem cannot be applied to the given θ at all. The argument only works if one first notes that for a monogenic field one may choose a θ with index coprime to 2 (e.g. a primitive element whose index is not divisible by 2, which exists since one can reduce the index by translation/standard arguments), or alternatively argue directly that 2 splitting completely with e_i=f_i=1 forces f̄ to have three distinct roots in F_2. As written, the step 'if O_K = Z[θ] then Kummer–Dedekind applies' silently assumes 2 ∤ [O_K:Z[θ]], which is exactly what fails in this field.
- **Proposed fix:** Replace the argument by: 'If O_K = Z[θ] for some θ with 2 ∤ [O_K:Z[θ]] (such a θ exists whenever O_K is monogenic, since the index can be made coprime to a fixed prime), then Kummer–Dedekind would give f̄ = product of three distinct linear factors over F_2, impossible since F_2[x] has only x and x+1. Hence O_K is not monogenic.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Supplement: 'B_p is free of rank [L:F]' needs separability and integral closure hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement claims that for a Dedekind domain A with fraction field F and finite separable L/F, with B the integral closure, one has pB = ∏ P_i^{e_i} with ∑ e_i f_i = [L:F], justified by 'B is finite over A and A_p is a DVR so B_p is free of rank [L:F] over A_p'. The freeness of B_p over the DVR A_p of rank [L:F] requires that B_p be finitely generated and torsion-free over A_p (true here), but the rank statement uses that Frac(B_p) = L, which holds; however the equality ∑ e_i f_i = [L:F] also requires that B be a finitely generated A-module, which holds only because A is Noetherian and the extension is finite and separable (integral closure finite). The supplement does state 'B is finite over A', so this is fine, but the phrase 'A_p is a DVR so B_p is free' omits the needed torsion-freeness/finite-generation justification and, more importantly, the conclusion ∑ e_i f_i = [L:F] requires that pB ≠ B, i.e. that p be a proper prime (which holds) and that the residue degrees be finite — but f_i = [B/P_i : A/p] can be infinite when A/p is infinite, so the sum ∑ e_i f_i = [L:F] must be interpreted with f_i as the A/p-dimension, which is finite here since B_p is free of finite rank. The statement is essentially correct but the justification is too terse and the finiteness of f_i is not addressed.
- **Proposed fix:** Add: 'Since B_p is a free A_p-module of rank [L:F] and B_p/pB_p ≅ ∏ (B_p/P_i^{e_i}) with each B_p/P_i^{e_i} of A_p/p-length e_i f_i, comparing lengths gives ∑ e_i f_i = [L:F]; here f_i = [B/P_i : A/p] is finite because B_p is a finitely generated A_p-module.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Supplement: Kummer–Dedekind with conductor — needs p coprime to conductor AND the statement about g_i
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement states Kummer–Dedekind holds in the form 'p coprime to the conductor {x : xB ⊂ A[θ]}'. This is the standard generalization (Dedekind's theorem), but the supplement omits the requirement that the minimal polynomial of θ be considered and that the factorization pO_K = ∏ (p, g_i(θ))^{e_i} with f(P_i) = deg ḡ_i holds; more importantly, it omits that θ must be a primitive element of L over F (i.e. L = F(θ)) and that the conductor be nonzero (which requires θ integral). As stated ('p coprime to the conductor'), the claim is correct in the literature but the supplement does not mention that θ must generate L and be integral, so the statement as written is incomplete.
- **Proposed fix:** State: 'Let θ ∈ B with L = F(θ), f its minimal polynomial over F, and let 𝔠 = {x ∈ L : xB ⊂ A[θ]} be the conductor. If p is coprime to 𝔠, then pB = ∏ (p, g_i(θ))^{e_i} with f(P_i) = deg ḡ_i, where f̄ = ∏ ḡ_i^{e_i} mod p.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Supplement: 'Riemann surface coverings have f_i = 1' — true but the equality ∑ e_i = deg needs the covering to be finite and the base to be connected
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says: for coverings of Riemann surfaces, f_i = 1 (residue field C) and ∑ e_i = deg is 'the familiar fact that counting points over each point with multiplicity gives the degree'. This is correct for a finite covering of compact connected Riemann surfaces (or more generally a proper finite map), but as stated it omits the hypotheses that the covering be finite (proper) and that the base be connected; for a non-compact or infinite covering the equality fails. The claim is essentially right but stated without the necessary finiteness hypothesis.
- **Proposed fix:** Add: 'for a finite (proper) covering C' → C of connected Riemann surfaces, f_i = 1 and ∑ e_i = deg'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck: 'Z[θ] not Dedekind when p divides index' — imprecise
- **Category:** Unsupported fact
- **Location:** hypcheck, デデキント性 bullet
- **Detail:** The hypcheck says: 'Z[θ] is not Dedekind (p divides the index) and then pZ[θ] may not decompose in this way.' This conflates two things: Z[θ] can fail to be Dedekind for reasons other than p dividing the index (e.g. Z[θ] may fail to be integrally closed even when the index is 1? no — if index is 1 then Z[θ] = O_K is Dedekind). But the parenthetical '(p divides the index)' suggests that p dividing the index implies Z[θ] is not Dedekind, which is false in general: Z[θ] can be non-Dedekind, but the failure of Dedekindness is not equivalent to a single prime dividing the index; also Z[θ] may be non-integrally closed while still being Noetherian of dimension 1, hence not Dedekind. The precise statement should be that Z[θ] is a subring of O_K and is not integrally closed (hence not Dedekind) whenever Z[θ] ≠ O_K, i.e. whenever the index is > 1.
- **Proposed fix:** Replace by: 'If [O_K:Z[θ]] > 1 then Z[θ] ≠ O_K, so Z[θ] is not integrally closed in K and hence not a Dedekind domain; in that case pZ[θ] need not factor as in Kummer–Dedekind.'
- **Reported:** 2026-10-28 (10fede1)
