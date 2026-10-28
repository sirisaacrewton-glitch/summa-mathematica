# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/01-affine-sets.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/01-affine-sets.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The only genuine issue is in the supplement: the description of the closed points of $\operatorname{Spec}\mathbb{R}[x]$ is imprecise, since the quadratic $x^{2}+bx+c$ with $b^{2}<4c$ corresponds to a Galois orbit of non-real conjugate complex numbers, and the phrase 'conjugate pairs of complex numbers' should be 'conjugate pairs of non-real complex numbers' (or equivalently irreducible quadratics with negative discriminant). The complexity remark about Gröbner bases is standard and not false. No logical gaps, missing hypotheses, or improper links were found in the proofs.

## Issues

### ISSUE-0001 [Open] Closed points of Spec R[x] mischaracterized
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that the closed points of $\operatorname{Spec}\mathbb{R}[x]$ are the real numbers $a$ (from $(x-a)$) and the conjugate pairs of complex numbers (from $x^{2}+bx+c$, $b^{2}<4c$). This is wrong: the closed points of $\operatorname{Spec}\mathbb{R}[x]$ are exactly the maximal ideals, which are $(x-a)$ for $a\in\mathbb{R}$ and $(x^{2}+bx+c)$ for irreducible quadratics with $b^{2}-4c<0$. The condition $b^{2}<4c$ is equivalent to $b^{2}-4c<0$, so the quadratics are fine, but the phrase 'conjugate pairs of complex numbers' is misleading: the maximal ideal $(x^{2}+bx+c)$ corresponds to a Galois orbit of two conjugate non-real complex numbers, not to a single pair as a point. More importantly, the statement as written omits that these are the *closed* points and that non-closed points (the zero ideal, and the generic points of the irreducible quadratics) also exist; the sentence 'the closed points are...' is acceptable only if one understands that the listed ideals are maximal. The real error is the claim that the closed points correspond to 'conjugate pairs of complex numbers': the maximal ideal $(x^{2}+bx+c)$ with $b^{2}<4c$ corresponds to the pair of conjugate roots, which is correct, but the wording suggests that every conjugate pair gives a closed point, which is true only for non-real pairs. A real pair (a double root) gives $(x-a)^{2}$, which is not radical and not maximal. So the condition $b^{2}<4c$ is essential and is stated, but the phrase 'conjugate pairs of complex numbers' should be 'conjugate pairs of non-real complex numbers' or 'irreducible quadratic $x^{2}+bx+c$ with $b^{2}-4c<0$'.
- **Proposed fix:** Replace the sentence with: 'In the scheme picture, the closed points of $\operatorname{Spec}\mathbb{R}[x]$ are the maximal ideals: $(x-a)$ for $a\in\mathbb{R}$, and $(x^{2}+bx+c)$ for irreducible quadratics with $b^{2}-4c<0$ (equivalently $b^{2}<4c$), corresponding to Galois orbits of conjugate non-real complex numbers.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Gröbner basis complexity claim overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement says that the irreducible decomposition of an algebraic set (primary decomposition) is computable via Gröbner bases over $\mathbb{Q}$, and that the complexity is worst-case doubly exponential in the number of variables. This is a standard claim (e.g. the doubly exponential lower bound for Gröbner bases by Mayr–Meyer, and for primary decomposition), but the statement 'the complexity is worst-case doubly exponential in the number of variables' is imprecise: the known doubly exponential bounds are in the number of variables for Gröbner basis computation, and primary decomposition has doubly exponential complexity in the number of variables as well (e.g. the doubly exponential degree bounds). The claim is essentially correct but the phrase 'in the number of variables' should be qualified: the doubly exponential behavior is in the number of variables, and the degree bounds are doubly exponential in the number of variables. This is a minor imprecision, not a false statement. However, the sentence 'the complexity is worst-case doubly exponential in the number of variables' is a known result and is correctly attributed as 'known'. I would not report this as an error unless the statement is false. It is not false. So I will not report it.
- **Proposed fix:** No change needed; if desired, clarify: 'worst-case doubly exponential in the number of variables (Mayr–Meyer)'.
- **Reported:** 2026-10-28 (10fede1)
