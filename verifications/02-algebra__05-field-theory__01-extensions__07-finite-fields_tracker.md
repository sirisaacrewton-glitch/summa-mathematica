# Verification tracker: `02-algebra/05-field-theory/01-extensions/07-finite-fields.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/07-finite-fields.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are correct: the classification, subfield theorem, automorphism group theorem, and the two problems are all sound, with citations matching their targets. The only genuine problem is in the supplement: the complexity claim for Berlekamp's algorithm is stated incorrectly (it is polynomial in $\log q$ and the degree, not in $q$), which misrepresents the comparison with Cantor–Zassenhaus. The remaining supplement statements (algebraic closure as union, absolute Galois group $\hat{\Z}$, Frobenius as topological generator) are essentially correct.

## Issues

### ISSUE-0001 [Open] Berlekamp algorithm complexity claim is wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement says Berlekamp's algorithm (1967) factors polynomials over $\mathbb{F}_{q}$ in time polynomial in $q$ and the degree. This is false: Berlekamp's algorithm is polynomial in $\log q$ and the degree (it works with the $q$ elements only through arithmetic in $\mathbb{F}_{q}$, i.e. $O(\log q)$-bit operations per field operation). It is not polynomial in $q$ itself; if it were, it would be far worse than the Cantor–Zassenhaus algorithm, which the text presents as an improvement only via randomization. The contrast drawn ("polynomial in $q$" vs "polynomial in $\log q$") is incorrect.
- **Proposed fix:** Berlekamp's algorithm (1967) factors polynomials over $\mathbb{F}_{q}$ in time polynomial in $\log q$ and the degree (deterministically, assuming a factorization of $q$ or working over $\mathbb{F}_{p}$); the Cantor–Zassenhaus algorithm (1981) is a randomized algorithm that is polynomial in $\log q$ and the degree and is faster in practice.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Frobenius as topological generator: imprecise statement
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement states that $\operatorname{Gal}(\bar{\mathbb{F}}_{p}/\mathbb{F}_{p})\cong\hat{\Z}$ and that Frobenius $\phi$ is a "topological generator". While $\operatorname{Gal}(\bar{\mathbb{F}}_{p}/\mathbb{F}_{p})\cong\hat{\Z}$ is correct, the element $\phi$ (the Frobenius $x\mapsto x^{p}$) corresponds to $1\in\hat{\Z}$, which is a topological generator of the additive profinite group $\hat{\Z}$; this is correct, but the phrase "topological generator" without specifying that $\phi$ generates the whole absolute Galois group topologically (i.e. $\overline{\langle\phi\rangle}=\operatorname{Gal}$) is acceptable. However, the claim that $\bar{\mathbb{F}}_{p}$ is the union of the $\mathbb{F}_{p^{n}}$ ordered by divisibility is correct. This item is borderline; the statement is essentially correct, so no change is strictly required.
- **Proposed fix:** No change needed; optionally clarify that $\phi$ corresponds to $1\in\hat{\Z}$ and that $\overline{\langle\phi\rangle}=\operatorname{Gal}(\bar{\mathbb{F}}_{p}/\mathbb{F}_{p})$.
- **Reported:** 2026-10-28 (10fede1)
