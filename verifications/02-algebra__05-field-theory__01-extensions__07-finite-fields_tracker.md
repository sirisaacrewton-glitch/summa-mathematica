# Verification tracker: `02-algebra/05-field-theory/01-extensions/07-finite-fields.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/07-finite-fields.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Berlekamp algorithm complexity claim is wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement says Berlekamp's algorithm (1967) factors polynomials over $\mathbb{F}_{q}$ in polynomial time in $q$ and the degree. This is false: Berlekamp's algorithm runs in time polynomial in $\log q$ and the degree (it works with the field $\mathbb{F}_{q}$ given, e.g. by a polynomial basis, and does not enumerate $q$ elements). The claim that it is polynomial in $q$ is a misstatement of the standard complexity result, and it also makes the contrast with Cantor–Zassenhaus (polynomial in $\log q$) meaningless.
- **Proposed fix:** Berlekamp's algorithm (1967) factors polynomials over $\mathbb{F}_{q}$ in time polynomial in $\log q$ and the degree (assuming field arithmetic in $\mathbb{F}_{q}$ is available); the Cantor–Zassenhaus algorithm (1981) achieves the same, and with randomization it is polynomial in $\log q$ and the degree.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Fixed points of Frobenius on varieties: imprecise statement
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The sentence 'the number of points of a variety over a finite field is counted as the fixed points of Frobenius' is imprecise: the $\mathbb{F}_{q}$-rational points of a variety $X$ over $\mathbb{F}_{q}$ are the fixed points of the $q$-power Frobenius acting on $X(\bar{\mathbb{F}}_{q})$, i.e. the geometric points fixed by $\phi_{q}$. As stated (without specifying the $q$-power Frobenius and the geometric points) it is not literally correct, since the Frobenius $\phi$ generating $\operatorname{Aut}(\bar{\mathbb{F}}_{p})$ fixes only $\mathbb{F}_{p}$-points.
- **Proposed fix:** For a variety $X$ over $\mathbb{F}_{q}$, the set $X(\mathbb{F}_{q})$ of $\mathbb{F}_{q}$-rational points equals the fixed points of the $q$-power Frobenius $\phi_{q}$ acting on $X(\bar{\mathbb{F}}_{q})$; this is the starting point of the Weil conjectures and the zeta function of $X$.
- **Reported:** 2026-10-28 (8ccef3d)
