# Verification tracker: `04-analysis/02-complex-analysis/03-global/01-representations.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/01-representations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page is largely sound. The main genuine error is the residue at 0 in the cot partial-fraction proof (ISSUE-0001), which remains open and makes the displayed identity not follow from the stated computation; the correct residue is -1/w. ISSUE-0002 is correctly rebutted. Two minor imprecisions concern the historical attribution in the zeta(2) supplement and the slightly overstated identification of the Gamma product with the factorization theorem's g.

## Issues

### ISSUE-0001 [Open] Incorrect residue at 0 in the cot partial-fraction proof
- **Category:** Supplement/remark error
- **Location:** cx:cot-partial-fractions / Step 2
- **Detail:** The text computes the residue at $z=0$ of $g(z)=\frac{\pi\cot\pi z}{z(z-w)}$ as $-\frac{1}{w^{2}}$. This is wrong. Near $z=0$, $\pi\cot\pi z=\frac1z-\frac{\pi^{2}z}{3}+\cdots$ and $\frac{1}{z-w}=-\frac1w(1+\frac zw+\cdots)$, so $g(z)=\frac1{z^{2}}\cdot(-\frac1w)(1+\frac zw+\cdots)+O(1)$, giving residue $-\frac{1}{w^{2}}$ only if one ignores the $\frac1z$ term's contribution. Actually $\frac{\pi\cot\pi z}{z}\cdot\frac{1}{z-w}$: the $\frac1z$ from $\pi\cot\pi z$ times $\frac1z$ gives $\frac{1}{z^{2}}$, and the residue is the coefficient of $z^{-1}$, which comes from $\frac1{z^{2}}\cdot(-\frac1w)(\frac zw)=-\frac{1}{w}\cdot\frac{1}{z}$, i.e. residue $-\frac1w$, not $-\frac{1}{w^{2}}$. With the stated value $-\frac{1}{w^{2}}$ the final identity $\pi\cot\pi w=\frac1w-w\sum_{n\neq0}\frac{1}{n(n-w)}$ does not follow; the correct residue at $0$ is $-\frac1w$ (plus the contribution from the $-\frac{\pi^{2}z}{3}$ term is $O(1)$ and does not affect the residue).
- **Proposed fix:** Replace the residue at $0$ by: the coefficient of $z^{-1}$ in $\frac{\pi\cot\pi z}{z(z-w)}$ equals $-\frac{1}{w}$ (from $\frac{1}{z^{2}}\cdot(-\frac1w)(1+\frac zw+\cdots)$), so the sum of residues gives $\pi\cot\pi w=\frac1w-w\sum_{n\neq0}\frac{1}{n(n-w)}$.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The text still computes the residue at 0 of pi*cot(pi z)/(z(z-w)) as -1/w^2. Expanding: pi*cot(pi z)/z = 1/z^2 - pi^2/3 + ..., and 1/(z-w) = -(1/w)(1+z/w+...), so the z^{-1} coefficient is -1/w, not -1/w^2. The stated value is wrong and the final identity does not follow from it.

### ISSUE-0002 [Ignored: Valid Rebuttal] Weierstrass product for 1/Gamma stated with wrong exponent factor
- **Category:** Unsupported fact
- **Location:** cx:gamma-weierstrass-product
- **Detail:** The stated formula $\frac{1}{\Gamma(z)}=ze^{\gamma z}\prod_{n\ge1}(1+\frac zn)e^{-z/n}$ is correct, but the accompanying remark says this is 'of the form of \ref{cx:weierstrass-factorization} with $g$ a linear function $\gamma z$'. In the factorization theorem the product is $\prod E_{n-1}(z/a_{n})$ with $a_{n}=-n$; the elementary factor $E_{1}(z/a_{n})=(1-\frac{z}{n})e^{z/n}$, i.e. $(1+\frac zn)e^{-z/n}$ with $a_{n}=-n$, matches, but the factor $e^{\gamma z}$ is not 'the $e^{g}$' of the theorem in the sense claimed: the theorem's $g$ is an arbitrary entire function and here $g(z)=\gamma z$ is indeed linear, so the claim is essentially right. However the remark is imprecise: the theorem's product uses $E_{n-1}(z/a_{n})$ with the index $n$ tied to the ordering of zeros, whereas here every factor is $E_{1}$, which is legitimate only because $\sum 1/|a_{n}|^{2}<\infty$ allows a uniform choice; the statement 'the exponent factor $e^{g}$ has $g$ linear' is fine but the identification with the theorem's exact form (index $n-1$) is not literally correct.
- **Proposed fix:** State: 'This is the Weierstrass factorization with all elementary factors of index $1$ (permissible since $\sum 1/n^{2}<\infty$) and $g(z)=\gamma z$.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: with a_n=-n all elementary factors are E_1(z/a_n)=(1+z/n)e^{-z/n}, the canonical product of genus 1, and the extra factor e^{gamma z} is exactly e^{g} with g linear. The identification with the factorization theorem is legitimate.
**Opus Rebuttal:** With $a_{n}=-n$ and all elementary factors of index 1, $\prod(1+z/n)e^{-z/n}$ is the canonical product of genus 1; the remark's identification with the factorization theorem (with $g(z)=\gamma z$) is correct.

### ISSUE-0003 [Open] Wrong residue at 0 in cot partial-fraction proof
- **Category:** Supplement/remark error
- **Location:** cx:cot-partial-fractions / Step 2
- **Detail:** The residue at z=0 of g(z)=pi*cot(pi z)/(z(z-w)) is computed as -1/w^2. Since pi*cot(pi z)/z = 1/z^2 - pi^2/3 + O(z^2) and 1/(z-w) = -(1/w)(1+z/w+...), the coefficient of z^{-1} is -1/w, not -1/w^2. With the stated value the identity pi*cot(pi w)=1/w - w*sum_{n!=0} 1/(n(n-w)) does not follow.
- **Proposed fix:** Replace the residue at 0 by $-\frac{1}{w}$: near $z=0$, $\frac{\pi\cot\pi z}{z}=\frac{1}{z^{2}}-\frac{\pi^{2}}{3}+\cdots$ and $\frac{1}{z-w}=-\frac1w\bigl(1+\frac zw+\cdots\bigr)$, so the coefficient of $z^{-1}$ is $-\frac1w$. Then the sum of residues gives $\frac{\pi\cot\pi w}{w}+\sum_{n\neq0}\frac{1}{n(n-w)}-\frac1w=0$, i.e. $\pi\cot\pi w=\frac1w-w\sum_{n\neq0}\frac{1}{n(n-w)}$.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0004 [Open] Misattribution of the zeta(2) argument to Euler's 'first' argument
- **Category:** Supplement/remark error
- **Location:** cx:sec-rp-sine / supplement
- **Detail:** The supplement says Euler's first derivation of sum 1/n^2 = pi^2/6 was 'of this form' (comparing power-series coefficients in the sine product). Euler's original 1735 argument was different: he used the product for sin and the Newton identities relating power sums to elementary symmetric functions of the roots of the 'infinite polynomial', not a direct coefficient comparison of the displayed product. The claim is historically imprecise.
- **Proposed fix:** Soften to: 'Euler first obtained this value by a related argument using the product for $\sin$ (via Newton's identities on the roots), and the coefficient comparison here is a modern reformulation.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0005 [Open] Weierstrass product for 1/Gamma: 'g linear' claim needs the genus-1 justification
- **Category:** Unsupported fact
- **Location:** cx:gamma-weierstrass-product
- **Detail:** The fact states 1/Gamma(z)=z e^{gamma z} prod (1+z/n)e^{-z/n} and says this is 'of the form of the factorization theorem with g linear'. This is correct, but the fact as stated omits the essential point that the product converges because sum 1/n^2 < infinity (genus 1), and that the theorem's g is only determined up to 2*pi*i*k; the specific constant gamma requires proof. Stated as a bare fact with no hypotheses it is acceptable, but the parenthetical identification is slightly overstated since the theorem does not by itself pin down g=gamma z.
- **Proposed fix:** Add: 'The product converges since $\sum 1/n^{2}<\infty$ (all elementary factors of genus 1); the theorem gives $g$ only up to an additive constant $2\pi i k$, and the specific value $g(z)=\gamma z$ is the content of Weierstrass's formula, proved separately.'
- **Reported:** 2026-10-28 (048145a)
