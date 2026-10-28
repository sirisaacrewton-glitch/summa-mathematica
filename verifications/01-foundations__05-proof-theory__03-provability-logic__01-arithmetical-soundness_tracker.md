# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/01-arithmetical-soundness.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/01-arithmetical-soundness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound overall: the definitions of arithmetical realization, the tautology-translation lemma, the K4 and GL soundness proofs, the GLS material, and the corollaries are correct and properly supported by the cited results. The only genuine concern is a side remark attributing to Boolos a soundness proof 'from the rule form' of the Löb theorem, which is imprecise and inconsistent with the page's own hypcheck noting that the rule form alone does not give the axiom-L translation.

## Issues

### ISSUE-0001 [Open] Boolos attribution in '別証明' remark is imprecise
- **Category:** Supplement/remark error
- **Location:** remark 別証明 (pt:sec-arith-soundness)
- **Detail:** The remark says Boolos showed that K4 plus the Löb rule has the same theorems as GL and gave a soundness proof from the (rule form of the) Löb theorem. The standard result (Boolos, 'The Unprovability of Consistency', and Boolos–Sambin) is that GL can be axiomatized over K4 by the Löb rule, and that arithmetical soundness of GL follows from the formalized Löb theorem (the axiom form), not merely from the rule form. The rule form alone does not yield the translation of the axiom L, as the page's own hypcheck correctly notes. So attributing a soundness proof 'from the rule form' to Boolos is at best misleading and conflicts with the hypcheck.
- **Proposed fix:** Boolos showed that K4 together with the Löb rule (from $\vdash\Box A\to A$ infer $\vdash A$) has the same theorems as GL, and that arithmetical soundness of GL follows from the formalized Löb theorem (the axiom form); the rule form alone does not suffice to prove the translation of axiom L.
- **Reported:** 2026-10-28 (8ccef3d)
