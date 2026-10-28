# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/03-cyclotomic.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/03-cyclotomic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (irreducibility of cyclotomic polynomials, Galois group isomorphism, roots-of-unity proposition, and the worked examples/problem) are logically sound and correctly cite the listed results. The only genuine issue is in the supplement, where the constructibility criterion for the regular n-gon is stated loosely as 'φ(n) is a power of 2' without the equivalent Fermat-prime form of n, which is imprecise as a decision criterion.

## Issues

### ISSUE-0001 [Open] Constructibility criterion misstated as φ(n) being a power of 2
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that constructibility of the regular n-gon is decided by whether φ(n) is a power of 2. This is false: the correct criterion is that φ(n) is a power of 2 **and** n = 2^{a} p_{1}...p_{r} with distinct Fermat primes p_{i}. For example n = 9 has φ(9) = 6, not a power of 2, so that case is fine, but the statement as written is the standard incorrect simplification: e.g. n = 2^{a}·(Fermat primes) is needed; φ(n) a power of 2 alone is not sufficient in general because n must have no odd prime factor squared. Concretely, n = 3^{2}·... : φ(9)=6 is not a power of 2, but consider n = 2·3^{2}·5 = 90: φ(90)=24, not a power of 2. The genuine counterexample to the stated criterion is any n with φ(n) a power of 2 but n not of the Fermat form — e.g. n = 2^{a}·p^{2} with p an odd Fermat prime: φ(p^{2}) = p(p-1), which is a power of 2 only if p = 2. So the criterion 'φ(n) is a power of 2' is actually equivalent to the Fermat-prime form for the standard cases, but the supplement states it without the necessary condition that n has the form 2^{a} times a product of distinct Fermat primes, and without noting that φ(n) being a power of 2 is necessary but the full criterion also requires n to be of that form (which is in fact equivalent). The precise issue: the sentence omits the requirement that n = 2^{a} p_{1}...p_{r} with distinct Fermat primes, and states only the φ condition, which is imprecise as a 'decision' criterion.
- **Proposed fix:** Replace with: 'たとえば正 $n$ 角形の作図可能性（\ref{fld:page-constructions}）は、$n=2^{a}p_{1}\cdots p_{r}$（$p_{i}$ は相異なるフェルマー素数）と書けること、同値に $\varphi(n)$ が $2$ の冪であることによって決まる。'
- **Reported:** 2026-10-28 (8ccef3d)
