# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/07-sturm.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/07-sturm.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Complex roots count via algebraic closure is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 複素根
- **Detail:** The supplement says that from the number of roots in the algebraic closure $R(\sqrt{-1})$ (counted with multiplicity) minus the number of real roots one obtains the number of non-real roots. This is imprecise: the count in $R(\sqrt{-1})$ with multiplicity equals $\deg P$, and subtracting the number of real roots counted *without* multiplicity does not give the number of non-real roots (with or without multiplicity) unless $P$ is squarefree and real roots are counted with multiplicity. As stated the subtraction mixes a multiplicity count with a multiplicity-free count.
- **Proposed fix:** State it precisely: if $P$ is squarefree, then $\deg P - \#\{c\in R: P(c)=0\}$ equals the number of non-real roots of $P$ in $R(\sqrt{-1})$ (each counted once, appearing in conjugate pairs). In general, $\deg P - \#\{c\in R:P(c)=0\text{ counted with multiplicity}\}$ is the number of non-real roots counted with multiplicity.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Ben-Or–Kozen–Reif attribution for sign-condition counting
- **Category:** Supplement/remark error
- **Location:** supplement / 符号の組の個数を一度に求める
- **Detail:** The supplement attributes to the Ben-Or–Kozen–Reif method the computation of root counts for all $3^{l}$ sign conditions by inverting a Tarski-query matrix (tensor product of $3\times3$ matrices). The BKR method is a divide-and-conquer algorithm for counting real roots of a polynomial (and sign conditions) via Sturm sequences and resultants; the specific description as 'inverting a $3\times3$ tensor-product matrix' is a garbled/imprecise characterization and the attribution is not accurate as stated.
- **Proposed fix:** Replace with: 'The counts for all $3^{l}$ sign conditions can be obtained simultaneously by solving a linear system whose unknowns are the counts and whose coefficients are Tarski queries $\mathrm{TaQ}(\prod Q_{j}^{e_{j}},P)$ with $e_{j}\in\{0,1,2\}$; this is the approach underlying the Ben-Or–Kozen–Reif algorithm (here we only treat the all-positive case via \ref{model:count-with-signs}).'
- **Reported:** 2026-10-28 (10fede1)
