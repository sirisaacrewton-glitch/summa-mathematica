# Verification tracker: `02-algebra/05-field-theory/01-extensions/02-algebraic-extensions.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/02-algebraic-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that finite generation plus integral implies finite module in the field case
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says \ref{fld:finite-algebraic.3} is the field case of the ring-theoretic statement "finitely generated and integral ⇔ finite module". But the correct ring-theoretic statement is: if $R$ is Noetherian and $S$ is a finitely generated $R$-algebra that is integral over $R$, then $S$ is a finite $R$-module. Finite generation alone plus integrality does NOT imply finite module over a non-Noetherian ring. In the field case $K$ is a field (hence Noetherian), so the analogy works, but the supplement states the general ring-theoretic principle without the Noetherian hypothesis, which is false as stated. Also, the direction "integral ⇒ algebraic" is fine, but the parenthetical "(最小多項式をモニックにできる)" is imprecise: over a field, algebraic elements automatically have a monic minimal polynomial, so "integral = algebraic" holds trivially; the remark is not wrong there but the general principle is overstated.
- **Proposed fix:** Replace with: "\ref{fld:finite-algebraic.3} は、環論の「$R$ がネーター環で $S$ が $R$ 上有限生成かつ整ならば $S$ は $R$ 上有限加群」という定理の体の場合である：体上では「代数的」と「整」は同じ（代数元の最小多項式はモニック）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Imprecise description of algebraic closure as 'cannot be made larger algebraically'
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement describes \ref{fld:page-algebraic-closure} as constructing "a field that is algebraic over $K$ and cannot be enlarged algebraically further". This is a vague/imprecise characterization of algebraic closure. The precise definition is: an algebraic closure $\bar K$ of $K$ is an algebraic extension of $K$ that is algebraically closed (every nonconstant polynomial over $\bar K$ has a root in $\bar K$). "Cannot be enlarged algebraically" is not the standard property and could be misread (e.g., as maximal algebraic extension, which is equivalent but not what is stated). The phrase is imprecise rather than strictly false, but it is an overstated/informal claim in a supplement.
- **Proposed fix:** Replace with: "\ref{fld:page-algebraic-closure} は「$K$ 上代数的で、かつ代数閉体である」体（$K$ の代数閉包）として次の次のページで構成する。"
- **Reported:** 2026-10-28 (8ccef3d)
