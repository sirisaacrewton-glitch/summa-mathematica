# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/08-parameter-integrals.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/08-parameter-integrals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of differentiation under the integral sign, the Leibniz rule, the exhaustion lemma, the improper change of variables, and the dominated parameter integral theorem are sound, and citations match their targets. The main genuine concern is in the supplement, where the phrase 'conditionally convergent integrals depend on the exhaustion' is imprecise because the page defines improper multiple integrals only for nonnegative or absolutely integrable functions, so 'conditional convergence' is not a defined notion here; the cited counterexample is a non-absolutely-integrable function, not a conditionally convergent integral. The hypcheck counterexample for the dominating function was checked and is correct.

## Issues

### ISSUE-0001 [Open] Conditionally convergent improper integrals and exhaustion dependence
- **Category:** Supplement/remark error
- **Location:** supplement (一般化 / 高い視点)
- **Detail:** The supplement claims that for improper multiple integrals 'conditionally convergent integrals depend on the choice of exhaustion' (条件収束する積分は近似列の取り方に依存する) and that this is why absolute integrability is basic. But the page's own definition (calc:improper-multiple-integral) only defines the improper integral for f≥0 (as a supremum) or for absolutely integrable f; there is no notion of a 'conditionally convergent' improper multiple integral in this framework. The cited counterexample calc:improper-exhaustion-dependence is precisely a function that is NOT absolutely integrable (indeed not integrable in the defined sense at all), so it does not illustrate 'conditional convergence' but rather the failure of any well-defined value. The statement is therefore imprecise/overstated: the correct claim is that for functions that are not absolutely integrable the limit along exhaustions may depend on the exhaustion (and may fail to exist), not that 'conditionally convergent integrals' behave this way.
- **Proposed fix:** Replace with: '多変数の広義積分では、絶対可積分でない関数に対しては近似列に沿った極限が近似列の取り方に依存しうるので（\ref{calc:improper-exhaustion-dependence}）、絶対可積分性を基本にするのが自然である。' (i.e. speak of non-absolutely-integrable functions, not of 'conditionally convergent' integrals, since the latter are not defined here.)
- **Reported:** 2026-10-28 (8ccef3d)
