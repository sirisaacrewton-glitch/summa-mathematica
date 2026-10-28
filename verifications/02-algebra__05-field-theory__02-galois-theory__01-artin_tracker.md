# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/01-artin.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/01-artin.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound. Dedekind's lemma, Artin's theorem (both inequalities and Aut(L/K)=G), and the equivalence of Galois definitions are proved correctly with appropriate citations (extension-count, normal-equivalent, separable-degree, tower-law, span-dependence). The examples are all correct: Q(∛2)/Q is not Galois, the splitting field of x^3-2 has Galois group S_3, finite fields are Galois with cyclic Frobenius group, and F_p(t)/F_p(t^p) is normal but inseparable with trivial automorphism group. The problems and solutions are correct, including the char ≠ 2 caveat handled properly. The only borderline item is the supplement's 'principal G-bundle' analogy, which is loose but the displayed isomorphism is correct given Artin's theorem; I flag it only as a minor imprecision, not a genuine error. No genuine errors of the six kinds were found.

## Issues

### ISSUE-0001 [Open] Isomorphism L⊗_{L^G}L ≅ ∏L requires L/L^G to be finite Galois, which holds here, but the 'principal G-bundle' analogy is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (fld:sec-ar-galois supplement)
- **Detail:** The supplement states $L\otimes_{L^{G}}L\cong\prod_{\sigma\in G}L$ and calls $L\supset L^{G}$ a 'principal $G$-bundle'. By Artin's theorem $L/L^{G}$ is finite Galois of degree $|G|$, so the normal basis / Galois descent isomorphism $L\otimes_{L^{G}}L\cong\prod_{\sigma\in G}L$ is actually correct. However, the phrase '主 $G$ 束のように振る舞う' (behaves like a principal $G$-bundle) is a loose analogy; in the étale/fppf topology $\operatorname{Spec} L\to\operatorname{Spec} L^{G}$ is a $G$-torsor, which is the precise statement. The current wording is vague but not false. This is borderline; the mathematical content (the displayed isomorphism) is correct given Artin's theorem.
- **Proposed fix:** Replace the vague analogy with the precise statement: 'Precisely, $\operatorname{Spec} L\to\operatorname{Spec} L^{G}$ is a $G$-torsor for the étale topology, and the displayed isomorphism $L\otimes_{L^{G}}L\cong\prod_{\sigma\in G}L$ is the corresponding Galois descent statement.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that AC is not used in Artin's theorem and Dedekind's lemma, but Step 1 of Artin's theorem uses span-dependence over a field
- **Category:** Supplement/remark error
- **Location:** notation (fld:sec-ar-notation) / Artin Step 1
- **Detail:** The notation block asserts '選択公理：アルティンの定理とデデキントの補題には使わない' (AC is not used in Artin's theorem and Dedekind's lemma). Step 1 of Artin's theorem invokes \ref{mod:span-dependence} to conclude that a homogeneous linear system with more unknowns than equations has a nontrivial solution over the field $L$. This is a finite-dimensional linear-algebra fact and does not require AC, so the claim is fine for that step. Dedekind's lemma is a finite induction, also AC-free. The claim appears correct.
- **Proposed fix:** No change needed; the claim is correct.
- **Reported:** 2026-10-28 (10fede1)
