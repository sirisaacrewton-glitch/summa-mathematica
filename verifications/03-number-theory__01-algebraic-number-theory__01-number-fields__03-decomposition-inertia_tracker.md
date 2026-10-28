# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/03-decomposition-inertia.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/03-decomposition-inertia.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 8 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main theorem and its proof are sound. The previously reported issues 2, 3, 4 remain open: the inertia/decomposition field description, the curve Frobenius analogy, and the Chebotarev statement all remain imprecise. Issue 1 is resolved by the corrected label table. New issues concern the unqualified 'Frob_P has order f' statement, the missing unramified condition in Chebotarev, and minor imprecisions in the supplement's analogies.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Reference to nonexistent label nt:integers-basic.1
- **Category:** Improper link
- **Location:** nt:decomposition-inertia / Step 3
- **Detail:** Step 3 cites \ref{nt:integers-basic.1}, but the label table only contains nt:integers-basic.3 (proposition 1.2, 整数環の基本性質). The label nt:integers-basic.1 is not in the table, so the citation is broken/mechanically wrong. The intended fact (coefficients of h lie in Z) is indeed covered by nt:integers-basic.3.
- **Proposed fix:** Replace \ref{nt:integers-basic.1} with \ref{nt:integers-basic.3}.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now quotes nt:integers-basic.1 as 'O_K is a subring and O_K ∩ Q = Z', which is exactly what Step 3 uses (coefficients of h lie in Z). The citation is correct.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). nt:integers-basic.1 is: $\mathcal{O}_{K}$ is a subring and $\mathcal{O}_{K}\cap\mathbb{Q}=\mathbb{Z}$ — exactly what is used.

### ISSUE-0002 [Open] Inertia field / decomposition field description is imprecise
- **Category:** Supplement/remark error
- **Location:** remark 分解体・惰性体とチェボタレフの密度定理, item 1
- **Detail:** The remark says that in K^{I}/K^{D} the prime is 'inertial (relative degree f)' and in K/K^{I} it is 'totally ramified (ramification index e)'. This is imprecise: in K^{I}/K^{D} the extension is unramified of degree f (so the relative degree is f and e=1), and in K/K^{I} the ramification index is e but the relative degree is 1 (totally ramified). The phrase 'inertial (relative degree f)' conflates inertia with unramifiedness, and 'totally ramified (ramification index e)' omits that the residue degree is 1. Also the claim that K^{D} has both relative degree and ramification index 1 is correct, but the subsequent descriptions should be stated precisely.
- **Proposed fix:** Rewrite item 1 as: 'The intermediate fields K^{D} ⊂ K^{I} corresponding to D_{𝔓}, I_{𝔓} are called the decomposition field and inertia field. The prime below 𝔓 has relative degree and ramification index both 1 in K^{D}; the extension K^{I}/K^{D} is unramified with relative degree f (ramification index 1); and K/K^{I} is totally ramified with ramification index e (relative degree 1).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark still says K^{I}/K^{D} is 'inertial (relative degree f)' and K/K^{I} is 'totally ramified (ramification index e)' without stating e=1 resp. f=1; the imprecision remains.

### ISSUE-0003 [Open] Frobenius in finite-field curve case misdescribed
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says 'on a curve over a finite field, the Frobenius element corresponds to moving a point by the q-power map'. This is misleading: the q-power Frobenius is the Frobenius endomorphism of the curve/its function field, not the Frobenius element at a closed point (which is a conjugacy class in the Galois group of the function field acting on the fiber). The statement conflates the global Frobenius endomorphism with the local Frobenius substitution at a prime.
- **Proposed fix:** Replace with: 'For a curve over a finite field, the Frobenius endomorphism (raising coordinates to the q-th power) induces the Frobenius substitution at each unramified closed point, and the study of its fixed points and eigenvalues is the starting point of the Weil conjectures.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says the Frobenius element corresponds to 'moving a point by the q-power map', conflating the global Frobenius endomorphism with the local Frobenius substitution at a prime.

### ISSUE-0004 [Open] Chebotarev statement omits unramified condition
- **Category:** Supplement/remark error
- **Location:** remark item 2
- **Detail:** The Chebotarev density statement 'for a conjugacy class C, the set of primes p with Frob_p = C has density |C|/|G|' implicitly requires p to be unramified (Frob_p is only defined for unramified p). As stated it is slightly imprecise; the ramified primes form a finite set and do not affect density, but the definition of Frob_p requires unramifiedness.
- **Proposed fix:** State: 'For a conjugacy class C of G, the set of unramified primes p with Frob_p = C has Dirichlet density |C|/|G|.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The Chebotarev statement still omits that p must be unramified for Frob_p to be defined.

### ISSUE-0005 [Open] Frobenius order equals f only for unramified primes
- **Category:** Supplement/remark error
- **Location:** nt:frobenius-element / definition
- **Detail:** The definition states 'Frob_P has order f' as a general assertion, but Frob_P is only defined when p is unramified (I_P=1). The order of the Frobenius substitution in Gal(kappa/F_p) is f, which is correct, but the sentence is placed after the general discussion and could be read as holding for the ramified case where Frob_P is not defined. More importantly, the proof of the order claim says 'the order of a generator of Gal(kappa/F_p) is f', which is fine, but the definition's phrasing 'Frob_P has order f' should be qualified by unramifiedness.
- **Proposed fix:** State explicitly: 'When p is unramified, Frob_P has order f (the order of the Frobenius automorphism x -> x^p in Gal(kappa(P)/F_p)).'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Chebotarev density statement omits unramified condition
- **Category:** Supplement/remark error
- **Location:** remark 分解体・惰性体とチェボタレフの密度定理 / item 2
- **Detail:** The statement 'for a conjugacy class C, the set of primes p with Frob_p = C has density |C|/|G|' requires p to be unramified; Frob_p is undefined for ramified p. Although the ramified primes are finite and do not affect the density, the statement as written is imprecise.
- **Proposed fix:** Add 'for unramified p' (or 'among the unramified primes p') to the statement: the set of unramified primes p with Frob_p = C has Dirichlet density |C|/|G|.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0007 [Open] Inertia field description conflates inertia with unramifiedness
- **Category:** Supplement/remark error
- **Location:** remark 分解体・惰性体とチェボタレフの密度定理 / item 1
- **Detail:** The remark says K^{I}/K^{D} is 'inertial (relative degree f)' and K/K^{I} is 'totally ramified (ramification index e)'. In K^{I}/K^{D} the extension is unramified of degree f (e=1, f the relative degree), and in K/K^{I} it is totally ramified (e the ramification index, residue degree 1). The phrasing 'inertial (relative degree f)' is misleading and 'totally ramified (ramification index e)' omits the residue degree 1.
- **Proposed fix:** Rewrite: 'In K^{D} the prime below P has both ramification index and residue degree 1; K^{I}/K^{D} is unramified of degree f (e=1, residue degree f); K/K^{I} is totally ramified with ramification index e and residue degree 1.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0008 [Open] Frobenius on a curve misdescribed
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says 'on a curve over a finite field, the Frobenius element corresponds to moving a point by the q-power map'. This conflates the global q-power Frobenius endomorphism of the curve with the local Frobenius substitution (Frobenius element) at a closed point, which is a conjugacy class in the Galois group of the function field acting on the fiber.
- **Proposed fix:** Replace with: 'For a curve over a finite field, the Frobenius element at a closed point is the Frobenius substitution in the Galois group of the function field; the q-power Frobenius endomorphism of the curve acts on the points and its fixed points are the F_q-rational points (Weil conjectures).'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0009 [Open] Riemann surface analogy: decomposition and inertia groups coincide
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says for a Galois cover of Riemann surfaces the stabilizer of a point y is the 'inertia group', its order is the ramification index, and since the residue field is C the decomposition and inertia groups coincide. This is essentially correct for the local picture, but the statement 'the residue field is C so decomposition and inertia groups coincide' is imprecise: for a cover of Riemann surfaces the local ring at a point has residue field C, and the decomposition group equals the inertia group because the residue extension is trivial; the stabilizer is then the inertia group. The claim is acceptable but the wording 'the residue field is C' should refer to the residue field of the local ring at y.
- **Proposed fix:** Clarify: 'For a Galois cover of Riemann surfaces, the local ring at y has residue field C, so the residue extension is trivial and the decomposition group equals the inertia group, which is the stabilizer of y; its order is the ramification index.'
- **Reported:** 2026-10-28 (048145a)
