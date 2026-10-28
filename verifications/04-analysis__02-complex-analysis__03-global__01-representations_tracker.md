# Verification tracker: `04-analysis/02-complex-analysis/03-global/01-representations.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/01-representations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine error is in the proof of the cotangent partial-fraction expansion: the residue at $0$ of $\pi\cot\pi z/(z(z-w))$ is computed as $-1/w^{2}$ but is actually $-1/w$, which is needed for the final identity to come out. The Weierstrass product fact for $1/\Gamma$ is correct but its accompanying remark about matching the factorization theorem's exact form is imprecise. Other supplements (the zeta value $\pi^{2}/6$ from the sine product) and the examples (the $\pi^{2}/\sin^{2}$ series, the reflection-formula example) check out.

## Issues

### ISSUE-0001 [Open] Incorrect residue at 0 in the cot partial-fraction proof
- **Category:** Supplement/remark error
- **Location:** cx:cot-partial-fractions / Step 2
- **Detail:** The text computes the residue at $z=0$ of $g(z)=\frac{\pi\cot\pi z}{z(z-w)}$ as $-\frac{1}{w^{2}}$. This is wrong. Near $z=0$, $\pi\cot\pi z=\frac1z-\frac{\pi^{2}z}{3}+\cdots$ and $\frac{1}{z-w}=-\frac1w(1+\frac zw+\cdots)$, so $g(z)=\frac1{z^{2}}\cdot(-\frac1w)(1+\frac zw+\cdots)+O(1)$, giving residue $-\frac{1}{w^{2}}$ only if one ignores the $\frac1z$ term's contribution. Actually $\frac{\pi\cot\pi z}{z}\cdot\frac{1}{z-w}$: the $\frac1z$ from $\pi\cot\pi z$ times $\frac1z$ gives $\frac{1}{z^{2}}$, and the residue is the coefficient of $z^{-1}$, which comes from $\frac1{z^{2}}\cdot(-\frac1w)(\frac zw)=-\frac{1}{w}\cdot\frac{1}{z}$, i.e. residue $-\frac1w$, not $-\frac{1}{w^{2}}$. With the stated value $-\frac{1}{w^{2}}$ the final identity $\pi\cot\pi w=\frac1w-w\sum_{n\neq0}\frac{1}{n(n-w)}$ does not follow; the correct residue at $0$ is $-\frac1w$ (plus the contribution from the $-\frac{\pi^{2}z}{3}$ term is $O(1)$ and does not affect the residue).
- **Proposed fix:** Replace the residue at $0$ by: the coefficient of $z^{-1}$ in $\frac{\pi\cot\pi z}{z(z-w)}$ equals $-\frac{1}{w}$ (from $\frac{1}{z^{2}}\cdot(-\frac1w)(1+\frac zw+\cdots)$), so the sum of residues gives $\pi\cot\pi w=\frac1w-w\sum_{n\neq0}\frac{1}{n(n-w)}$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Weierstrass product for 1/Gamma stated with wrong exponent factor
- **Category:** Unsupported fact
- **Location:** cx:gamma-weierstrass-product
- **Detail:** The stated formula $\frac{1}{\Gamma(z)}=ze^{\gamma z}\prod_{n\ge1}(1+\frac zn)e^{-z/n}$ is correct, but the accompanying remark says this is 'of the form of \ref{cx:weierstrass-factorization} with $g$ a linear function $\gamma z$'. In the factorization theorem the product is $\prod E_{n-1}(z/a_{n})$ with $a_{n}=-n$; the elementary factor $E_{1}(z/a_{n})=(1-\frac{z}{n})e^{z/n}$, i.e. $(1+\frac zn)e^{-z/n}$ with $a_{n}=-n$, matches, but the factor $e^{\gamma z}$ is not 'the $e^{g}$' of the theorem in the sense claimed: the theorem's $g$ is an arbitrary entire function and here $g(z)=\gamma z$ is indeed linear, so the claim is essentially right. However the remark is imprecise: the theorem's product uses $E_{n-1}(z/a_{n})$ with the index $n$ tied to the ordering of zeros, whereas here every factor is $E_{1}$, which is legitimate only because $\sum 1/|a_{n}|^{2}<\infty$ allows a uniform choice; the statement 'the exponent factor $e^{g}$ has $g$ linear' is fine but the identification with the theorem's exact form (index $n-1$) is not literally correct.
- **Proposed fix:** State: 'This is the Weierstrass factorization with all elementary factors of index $1$ (permissible since $\sum 1/n^{2}<\infty$) and $g(z)=\gamma z$.'
- **Reported:** 2026-10-28 (8ccef3d)
