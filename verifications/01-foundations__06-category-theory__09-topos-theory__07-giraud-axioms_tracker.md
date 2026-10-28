# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/07-giraud-axioms.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/07-giraud-axioms.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the closing remark, which gives a mathematically false causal explanation for why $\mathbf{Ab}$ fails Giraud's axioms (attributing it to sum and product coinciding rather than to failure of coproduct stability under pullback). The proofs and the example are otherwise sound.

## Issues

### ISSUE-0001 [Open] Incorrect claim that abelian groups fail because sum and product coincide
- **Category:** Supplement/remark error
- **Location:** remark 「集合のようにふるまう圏」
- **Detail:** The remark says the category of abelian groups fails Giraud's axioms because "sum and product coincide" (和と積が一致してしまう). This is false: in $\mathbf{Ab}$, finite biproducts coincide, but the failure of (G2) stability is not caused by that coincidence. Indeed the example in the page shows the failure is that pulling back the coproduct inclusions along the diagonal does not give a coproduct decomposition. Moreover, the coincidence of finite sum and product is not what breaks disjointness (the coproduct is still disjoint in $\mathbf{Ab}$). The stated causal explanation is mathematically wrong.
- **Proposed fix:** Replace with: "アーベル群の圏が失敗するのは、対角射に沿った引き戻しが余積を保たないからである（有限の和と積が一致すること自体が原因ではない）。加法的な世界では交わらない和が引き戻しで安定にならない。"
- **Reported:** 2026-10-28 (8ccef3d)
