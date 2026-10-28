# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/05-solvability.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/05-solvability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are logically sound: the forward direction correctly builds a solvable normal series via the radical normal closure and Kummer theory, and the reverse direction correctly uses the translation theorem, the prime-order cyclic refinement of a solvable group, and Kummer's cyclic-radical theorem. The quintic example is correctly argued (Eisenstein, exactly three real roots via IVT and Rolle, Cauchy giving a 5-cycle, complex conjugation giving a transposition, and A_5 non-solvable). The only genuine issues are in the supplement: the attribution of the general polynomial's Galois group to the fundamental theorem of symmetric polynomials is imprecise (it needs the algebraic independence of the roots and the identification of the fixed field), and the casus irreducibilis remark should explicitly require that only real radicals are permitted. Both are minor precision issues in side remarks rather than errors in the proofs.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the general quintic's Galois group is S_n via the fundamental theorem of symmetric polynomials
- **Category:** Supplement/remark error
- **Location:** supplement / 一般の 5 次方程式
- **Detail:** The supplement states that the Galois group of the "general degree n equation" (coefficients indeterminates) is S_n, attributing this to the fundamental theorem of symmetric polynomials. The fundamental theorem of symmetric polynomials alone does not give this; the correct statement is that the Galois group of the general polynomial over the field of rational functions K(t_1,...,t_n) is S_n, which follows because the extension K(t_1,...,t_n) ⊂ K(x_1,...,x_n) is Galois with group S_n (the x_i being the roots, and the t_i the elementary symmetric functions). The attribution is imprecise/misleading: the fundamental theorem identifies the fixed field of S_n with the symmetric rational functions, but the Galois-group computation requires the additional fact that the x_i are algebraically independent and generate the extension. As stated ("by the fundamental theorem of symmetric polynomials") the justification is incomplete.
- **Proposed fix:** The Galois group of the general degree n polynomial over $K(t_{1},\dots,t_{n})$ (with $t_{i}$ indeterminates) is $S_{n}$: adjoining the roots $x_{1},\dots,x_{n}$ gives a Galois extension with group $S_{n}$, since the $x_{i}$ are algebraically independent and the fixed field of $S_{n}$ is the field of symmetric rational functions, which equals $K(t_{1},\dots,t_{n})$ by the fundamental theorem of symmetric polynomials.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim about casus irreducibilis and real radicals
- **Category:** Supplement/remark error
- **Location:** supplement / 可解でも冪根の式は複雑
- **Detail:** The supplement says that the roots of an irreducible cubic with three real roots "cannot be written using only real radicals" (casus irreducibilis). The precise classical statement (casus irreducibilis) is that such a root cannot be expressed by real radicals alone when the radicals are required to lie in a real radical extension of the base field, i.e., one cannot solve it by adjoining only real radicals. The phrasing "実数の冪根だけでは書けない" is essentially the standard statement, but it is stated without the necessary hypothesis that the cubic is irreducible over the base field and that the radicals are real (real radical tower). As written it is acceptable but slightly imprecise; the essential hypothesis "irreducible over the base field" is present ("既約な 3 次方程式"). This is borderline; the main concern is that the claim should specify that the radical expressions must be real (i.e., all intermediate radicals real), which the phrase "実数の冪根だけでは" does convey. No change strictly required, but for precision the hypothesis that the cubic is irreducible over the base field and that only real radicals are permitted should be explicit.
- **Proposed fix:** If an irreducible cubic over a subfield of $\mathbb{R}$ has three real roots, then its roots cannot be expressed using only real radicals (casus irreducibilis); any radical expression for them must pass through non-real complex numbers.
- **Reported:** 2026-10-28 (10fede1)
