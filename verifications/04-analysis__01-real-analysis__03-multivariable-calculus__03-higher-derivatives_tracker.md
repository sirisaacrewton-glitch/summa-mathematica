# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/03-higher-derivatives.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/03-higher-derivatives.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound. The Schwarz theorem, its counterexample, the symmetry corollary, the multivariable Taylor theorem, and the second derivative test are all correctly proved with hypotheses properly used. The supplements and remarks are accurate: the Morse lemma statement is correct (only the index p is left implicit), the Hessian/Taylor expansion remark is correct, and the hypcheck counterexamples (x^2+y^4 vs x^2-y^4, x^4+y^4) are genuine. No genuine errors of the six kinds were found; the only note is a minor imprecision in the supplement where the Morse index p is not defined, which does not rise to a reportable error.

## Issues

### ISSUE-0001 [Open] Morse lemma statement omits nondegeneracy of the Hessian being at a critical point and the index count
- **Category:** Supplement/remark error
- **Location:** supplement (一般化/前提を変えると)
- **Detail:** The supplement states: 'if the Hessian is regular (nondegenerate) at a critical point, then f is equivalent via a C^∞ change of coordinates to -y_1^2-...-y_p^2+y_{p+1}^2+...+y_n^2 (Morse lemma, when f is C^∞)'. This is essentially correct as stated (critical point + nondegenerate Hessian + C^∞ gives the normal form). However, the claim that the normal form is '-y_1^2-...-y_p^2+y_{p+1}^2+...+y_n^2' with p being the number of negative eigenvalues is not specified; as written p is undefined. This is a minor imprecision but the statement is otherwise a correct citation of the Morse lemma. Not a genuine error worth reporting beyond noting p should be defined as the index (number of negative eigenvalues).
- **Proposed fix:** Specify that p is the number of negative eigenvalues of Hf(a) (the Morse index), and that the normal form is attained by a C^∞ diffeomorphism fixing a.
- **Reported:** 2026-10-28 (10fede1)
