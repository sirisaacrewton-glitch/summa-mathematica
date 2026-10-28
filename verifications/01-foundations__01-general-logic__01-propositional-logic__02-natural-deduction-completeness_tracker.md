# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/02-natural-deduction-completeness.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/02-natural-deduction-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kalmár's method does not use RAA / excluded middle
- **Category:** Supplement/remark error
- **Location:** weak-completeness-kalmar / hypcheck
- **Detail:** The hypcheck claims that the case split on $p_{k}$ and $\neg p_{k}$ in Step 2 is 'the argument corresponding to the law of excluded middle (RAA)'. But the case split is done at the meta-level: one shows $\Gamma,\neg\varphi\vdash\bot$ and concludes $\Gamma\vdash\varphi$ via item 3 of \ref{logic:prop-derivability-basic}, which is proved using RAA. However, the actual derivation constructed by Kalmár's method uses only $\to$I, $\to$E and the derived rules in item 4 (which are RAA-free, as the solution to \ref{logic:prob-prop-derive-contraposition} notes). The meta-level argument that the derivation exists does not require RAA in the object language; the case split is a classical meta-argument but the resulting derivation is intuitionistically valid. More importantly, the claim that this is 'RAA' is misleading: the derivations produced are RAA-free, so the hypcheck overstates the role of RAA. Actually the meta-reasoning uses item 3 (which uses RAA), so the statement is defensible as a meta-level remark; but calling it 'the argument corresponding to the law of excluded middle (RAA)' is imprecise because the object derivations do not use RAA. This is a minor imprecision.
- **Proposed fix:** Replace with: '**Classical case split (meta-level).** Step 2 splits on $p_{k}$ and $\neg p_{k}$ at the meta-level and uses \ref{logic:prop-derivability-basic.3} (proved via RAA) to conclude $\Gamma\vdash\varphi$. Note that the resulting object-level derivations themselves use only $\to$I, $\to$E and the RAA-free derived rules of \ref{logic:prop-derivability-basic.4}.'
- **Reported:** 2026-10-28 (8ccef3d)
