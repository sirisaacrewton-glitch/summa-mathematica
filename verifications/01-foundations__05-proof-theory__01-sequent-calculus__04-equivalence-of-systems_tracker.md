# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/04-equivalence-of-systems.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/04-equivalence-of-systems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its four-direction proof are essentially correct: the translations between ND, H and LK=+Cut are properly justified, the eigenvariable/Q2 correspondence is handled, and the cited lemmas are used for what they state. The genuine problems are confined to side remarks: the supplement overstates that cut elimination fails for LK= with equality initial sequents (it does not, for the standard atomic Repl formulation), and the global-convention remark wrongly says the free-variable condition is automatic when the premises are sentences (the condition concerns the conclusion's free variables). No issues in the proofs themselves were found.

## Issues

### ISSUE-0001 [Open] Incorrect claim that cut elimination fails for LK= with equality initial sequents
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討) / hypcheck third bullet
- **Detail:** The supplement says that because equality is added only as Ref/Repl initial sequents, cut elimination 'does not hold as it stands' in LK=, and that one needs Negri–von Plato style left equality rules. This is misleading: for the usual formulation with equality initial sequents of the form $\Gamma\Rightarrow\Delta, t=t$ and $s=t, P[s/x], \Gamma\Rightarrow\Delta, P[t/x]$ (atomic $P$), cut elimination does hold (the standard argument extends: cuts on equality atoms are absorbed by the closure of initial sequents under substitution/contraction). The cited lemma pt:lk-equality-replacement.1 merely *uses* a cut; using a cut in a proof does not show cut elimination fails. The hypcheck bullet repeats the same overstatement.
- **Proposed fix:** Replace with: 'Equality is added as Ref/Repl initial sequents. The cut-elimination argument extends to $\mathsf{LK}^{=}$ because the equality initial sequents are closed under substitution and contraction; the cut used in \ref{pt:lk-equality-replacement.1} is just a convenience, not evidence that cut elimination fails. (Alternative formulations with equality left rules, e.g. Negri–von Plato, are also common.)'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Remark on global convention: free-variable condition for premises is not automatic
- **Category:** Supplement/remark error
- **Location:** pt:eqs-global-remark
- **Detail:** The remark claims that if the set of premises $S$ consists of sentences, 'the free-variable condition is automatically satisfied'. But the relevant condition in the global convention concerns the variables free in the *conclusion* $\varphi$ (one must prove the universal closure $\forall\vec x\,\varphi$), not in the premises. Having $S$ consist of sentences does not make $\varphi$ closed, so the condition is not automatic. Also the equivalence $\vdash_{\mathrm{ND}}\forall\vec x\,\varphi\iff\vdash_{\mathrm{ND}}\varphi$ holds only when the variables are not free in any open assumption, which is not stated.
- **Proposed fix:** Replace the last sentence with: 'If $S$ consists of sentences, then the premises impose no restriction on the eigenvariable condition; the condition that matters is on the variables free in $\varphi$, and the global convention amounts to requiring a derivation of $\forall\vec x\,\varphi$ with no open assumptions in which those variables occur free.'
- **Reported:** 2026-10-28 (8ccef3d)
