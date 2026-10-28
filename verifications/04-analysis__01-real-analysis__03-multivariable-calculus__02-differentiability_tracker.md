# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/02-differentiability.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/02-differentiability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the definition, the basic-properties proposition, the counterexample, the C^1 theorem, the chain rule, the mean value inequality and the corollary are all correctly proved, and the hypcheck counterexamples (partials not continuous, failure of the mean value equality, the argument function) are genuine. The only issues found are in the supplement and hypcheck side comments: the supplement's attribution of the Gâteaux-linearity failure to the whole counterexample is imprecise (item 1 has a linear Gâteaux differential), and the hypcheck's weakening remark should state that the remaining partials must exist near a. Both are minor and fixable by rewording.

## Issues

### ISSUE-0001 [Open] Gâteaux differentiability example misattributed
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says that \ref{calc:partials-not-sufficient} is an example showing that Gâteaux differentiability does not even guarantee linearity. But item 1 of that counterexample (xy/(x^2+y^2)) has all directional derivatives equal to 0 at the origin, so its Gâteaux differential exists and is linear (the zero map); it is merely discontinuous. Only item 2 (x^2y/(x^4+y^2)) has a nonlinear map v↦D_v g(0). So the claim as stated is imprecise: the reference to the whole counterexample includes a case where the Gâteaux differential is linear.
- **Proposed fix:** Replace with: "\ref{calc:partials-not-sufficient.2} は、ガトー微分が存在してもその方向微分が線形でない（したがってフレシェ微分可能でない）ことの 2 変数での例になっている。また \ref{calc:partials-not-sufficient.1} は、ガトー微分が存在して線形（実際 0 写像）であっても連続でない例である。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck claim about weakening continuity of partials needs the remaining partial to exist at a
- **Category:** Supplement/remark error
- **Location:** calc:continuous-partials-differentiable / hypcheck (third bullet)
- **Detail:** The hypcheck states: "if all but one partial derivative are continuous at a and the remaining one exists at a, the conclusion holds". This is essentially correct, but the phrasing "残りの 1 つが $a$ で存在する" is stated as if existence at a alone suffices; in fact the argument (using the definition of the partial derivative for the k=1 direction) requires that the remaining partial derivative exists at a (which is what is written) — this is fine. However the parenthetical justification "(Step 3 で最初の k=1 だけは平均値の定理の代わりに偏微分の定義を使う)" is slightly misleading: the reordering must place the non-continuous direction first, and the other partials must exist in a neighborhood (not merely at a) for the mean value theorem steps. As written the statement omits that the other n−1 partials must exist near a (continuity at a already implies existence near a, so this is implicit but the sentence reads as if only continuity at a is needed).
- **Proposed fix:** Clarify: "実は『$a$ の近傍で 1 つを除くすべての偏導関数が存在して $a$ で連続、残りの 1 つが $a$ で存在する』でも結論が成り立つ（その 1 つを最初の座標 $k=1$ に取り、そこだけ偏微分の定義を、残りは平均値の定理を使う）。"
- **Reported:** 2026-10-28 (10fede1)
