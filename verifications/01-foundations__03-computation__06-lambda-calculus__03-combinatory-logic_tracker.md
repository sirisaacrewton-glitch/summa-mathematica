# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/03-combinatory-logic.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/03-combinatory-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the extensionality rule is stated with an incorrect side condition ('all new variables $x$' instead of '$x$ not free in $M$ or $N$'), which makes the rule ill-formed. The fixed-point remark is acceptable since $=_{w}$ contains $\twoheadrightarrow_{w}$. Proofs, the Church–Rosser argument, bracket abstraction, and the ξ-failure proposition all check out.

## Issues

### ISSUE-0001 [Open] Extensionality rule stated with a wrong side condition
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that adding the extensionality rule 「すべての新しい変数 $x$ で $Mx=Nx$ なら $M=N$」 to weak equality makes the translation correspond to $\beta\eta$-equality. The side condition 「新しい変数」 is wrong: extensionality must hold for a variable $x$ not free in $M$ or $N$ (a fresh variable), not for 'all new variables' in the sense of variables fresh to the whole context. As stated ('for all new variables $x$, if $Mx=Nx$ then $M=N$'), the rule is either vacuous or ill-formed, since 'new' is not a property of the rule but of a particular application. The correct formulation quantifies over a variable $x\notin\mathrm{FV}(M)\cup\mathrm{FV}(N)$.
- **Proposed fix:** Replace with: 「弱等式に外延性の規則（$x$ が $M,N$ に現れないとき、$Mx=Nx$ ならば $M=N$）を加えると、翻訳は $\beta\eta$ 等式と対応することが知られている。」
- **Reported:** 2026-10-28 (8ccef3d)
