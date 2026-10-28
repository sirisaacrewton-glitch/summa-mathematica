# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/03-decomposition-inertia.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/03-decomposition-inertia.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are essentially correct. The genuine problems are: a broken citation to a nonexistent label (nt:integers-basic.1 instead of nt:integers-basic.3) in the proof of nt:decomposition-inertia, and imprecise statements in the remark on decomposition/inertia fields (conflating inertia with unramifiedness and omitting residue degree 1 for the totally ramified part) and in the supplement's description of Frobenius for curves over finite fields. The Chebotarev statement should explicitly restrict to unramified primes. No issues in the core theorem statements or the cyclotomic computation were found.

## Issues

### ISSUE-0001 [Open] Reference to nonexistent label nt:integers-basic.1
- **Category:** Improper link
- **Location:** nt:decomposition-inertia / Step 3
- **Detail:** Step 3 cites \ref{nt:integers-basic.1}, but the label table only contains nt:integers-basic.3 (proposition 1.2, 整数環の基本性質). The label nt:integers-basic.1 is not in the table, so the citation is broken/mechanically wrong. The intended fact (coefficients of h lie in Z) is indeed covered by nt:integers-basic.3.
- **Proposed fix:** Replace \ref{nt:integers-basic.1} with \ref{nt:integers-basic.3}.
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). nt:integers-basic.1 is: $\mathcal{O}_{K}$ is a subring and $\mathcal{O}_{K}\cap\mathbb{Q}=\mathbb{Z}$ — exactly what is used.

### ISSUE-0002 [Open] Inertia field / decomposition field description is imprecise
- **Category:** Supplement/remark error
- **Location:** remark 分解体・惰性体とチェボタレフの密度定理, item 1
- **Detail:** The remark says that in K^{I}/K^{D} the prime is 'inertial (relative degree f)' and in K/K^{I} it is 'totally ramified (ramification index e)'. This is imprecise: in K^{I}/K^{D} the extension is unramified of degree f (so the relative degree is f and e=1), and in K/K^{I} the ramification index is e but the relative degree is 1 (totally ramified). The phrase 'inertial (relative degree f)' conflates inertia with unramifiedness, and 'totally ramified (ramification index e)' omits that the residue degree is 1. Also the claim that K^{D} has both relative degree and ramification index 1 is correct, but the subsequent descriptions should be stated precisely.
- **Proposed fix:** Rewrite item 1 as: 'The intermediate fields K^{D} ⊂ K^{I} corresponding to D_{𝔓}, I_{𝔓} are called the decomposition field and inertia field. The prime below 𝔓 has relative degree and ramification index both 1 in K^{D}; the extension K^{I}/K^{D} is unramified with relative degree f (ramification index 1); and K/K^{I} is totally ramified with ramification index e (relative degree 1).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Frobenius in finite-field curve case misdescribed
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says 'on a curve over a finite field, the Frobenius element corresponds to moving a point by the q-power map'. This is misleading: the q-power Frobenius is the Frobenius endomorphism of the curve/its function field, not the Frobenius element at a closed point (which is a conjugacy class in the Galois group of the function field acting on the fiber). The statement conflates the global Frobenius endomorphism with the local Frobenius substitution at a prime.
- **Proposed fix:** Replace with: 'For a curve over a finite field, the Frobenius endomorphism (raising coordinates to the q-th power) induces the Frobenius substitution at each unramified closed point, and the study of its fixed points and eigenvalues is the starting point of the Weil conjectures.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Chebotarev statement omits unramified condition
- **Category:** Supplement/remark error
- **Location:** remark item 2
- **Detail:** The Chebotarev density statement 'for a conjugacy class C, the set of primes p with Frob_p = C has density |C|/|G|' implicitly requires p to be unramified (Frob_p is only defined for unramified p). As stated it is slightly imprecise; the ramified primes form a finite set and do not affect density, but the definition of Frob_p requires unramifiedness.
- **Proposed fix:** State: 'For a conjugacy class C of G, the set of unramified primes p with Frob_p = C has Dirichlet density |C|/|G|.'
- **Reported:** 2026-10-28 (8ccef3d)
