# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/03-cyclotomic.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/03-cyclotomic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (propositions, theorems, proofs, example, problem/solution) is logically sound: the irreducibility proof via reduction mod p and Frobenius is correct, the Galois group computation is correct, and the example computations (p=5, n=8) and the cubic subfield of Q(ζ_{7}) check out. The only genuine problem is in the supplement, where the constructibility criterion for the regular n-gon is stated too loosely as 'φ(n) is a power of 2' rather than the correct Fermat-prime condition (equivalently (Z/nZ)^{×} being a 2-group).

## Issues

### ISSUE-0001 [Open] Constructibility criterion stated as φ(n) being a power of 2
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the constructibility of a regular n-gon is decided by whether φ(n) is a power of 2. This is imprecise: the correct criterion is that φ(n) is a power of 2 **and** n is of the form 2^{a} p_{1}...p_{r} with distinct Fermat primes p_{i}. For example n=3: φ(3)=2 is a power of 2 and the triangle is constructible, but the statement as written would also wrongly suggest that any n with φ(n) a power of 2 works; more importantly the criterion is not simply 'φ(n) is a power of 2' but requires the Fermat-prime structure (equivalently, n = 2^{a} times a product of distinct Fermat primes). The Galois-theoretic condition is that the Galois group (Z/nZ)^{×} be a 2-group, which is equivalent to the Fermat-prime form, not merely to φ(n) being a power of 2 (these coincide only because of the structure of (Z/nZ)^{×}, but the phrasing omits the essential condition that the odd part be squarefree with Fermat prime factors).
- **Proposed fix:** 基本定理と組み合わせると、$\Q(\zeta_{n})$ の部分体は $(\Z/n\Z)^{\times}$ の部分群と対応し、たとえば正 $n$ 角形の作図可能性（\ref{fld:page-constructions}）は $(\Z/n\Z)^{\times}$ が $2$ 群であること、すなわち $n=2^{a}p_{1}\cdots p_{r}$（$p_{i}$ は相異なるフェルマー素数）と書けることで決まる（これは $\varphi(n)$ が $2$ の冪であることと同値）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Kronecker–Weber attribution is fine but 'abelian extensions are subfields of cyclotomic fields' needs finite degree
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement states 'すべての有限次アーベル拡大は円分体の部分体' — this is correctly restricted to finite degree, so it is fine. However the sentence '円分体は「可換なガロア群をもつ拡大」の基本形' is acceptable. No error here; the only genuine issue is the constructibility criterion above.
- **Proposed fix:** No change needed for the Kronecker–Weber sentence; keep '有限次アーベル拡大' as is.
- **Reported:** 2026-10-28 (10fede1)
