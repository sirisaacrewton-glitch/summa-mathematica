# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/03-combinatory-logic.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/03-combinatory-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Extensionality rule stated with 'new variable' is too weak / imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says: adding the extensionality rule 'if Mx = Nx for all new variables x then M = N' makes the translation correspond to βη-equality. The standard extensionality rule is: if Mx = Nx for some (fresh) variable x not free in M,N, then M = N. The phrase 'すべての新しい変数 x で' (for all new variables x) is imprecise: the rule needs only one fresh variable, and 'new' must mean 'not occurring free in M or N'. As stated ('for all new variables') it is either trivially equivalent (if one fresh variable suffices) or, read literally as a universal over all variables, it is a different and stronger-looking condition. The intended correspondence with βη is correct, but the rule as phrased is not the standard η-extensionality rule.
- **Proposed fix:** Replace with: 'Adding the extensionality rule (η-rule): if $Mx=Nx$ for some variable $x$ not free in $M$ or $N$, then $M=N$, the translation corresponds to $\beta\eta$-equality.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that adding [x](Mx)=M before rule 3 improves η-compatibility is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that inserting the clause '$[x](Mx)\defeq M$ (when $x$ not in $M$)' before rule 3 of bracket abstraction shortens the translation and improves compatibility with η-reduction. This is the standard η-optimization of bracket abstraction and is essentially correct, but the parenthetical condition is stated as '$x$ が $M$ に現れないとき' which is the correct side condition. However, the claim that it 'improves compatibility with η-reduction' is only true if the resulting translation is then compared under βη; under plain β-equality the modified bracket abstraction still yields $(M_{CL})_λ =_β M$ but the statement as written could be read as claiming the translation preserves η, which it does not in general without the extensionality rule. This is a minor overstatement but worth tightening.
- **Proposed fix:** Clarify: 'Adding the clause $[x](Mx)\defeq M$ (when $x\notin\mathrm{FV}(M)$) before rule 3 yields a shorter translation and makes the translation respect η-reduction, i.e. $(\lambda x.Mx)_{CL}$ and $M_{CL}$ become syntactically closer; full preservation of $\beta\eta$-equality still requires the extensionality rule above.'
- **Reported:** 2026-10-28 (10fede1)
