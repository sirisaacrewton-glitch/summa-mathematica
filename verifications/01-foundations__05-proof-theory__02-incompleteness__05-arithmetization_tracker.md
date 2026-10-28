# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/05-arithmetization.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/05-arithmetization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issue is in the supplement: the claim that Bew 'stays at Σ' because of unbounded search is stated unconditionally, but non-Δ-ness of Bew requires consistency/Σ-soundness assumptions (as the page's own problem illustrates); without them Bew can be Δ. All proofs, the course-of-values recursion, the Δ/Σ complexity claims, and the Q-representability corollary check out, and citations match their targets.

## Issues

### ISSUE-0001 [Open] Bew is not merely Σ; it is not Δ only assuming consistency
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says that syntactic concepts are Δ because they are finite, and that 'only Bew stays at Σ because it contains an unbounded search'. This is imprecise/overstated: Bew is Σ but whether it is not Δ depends on assumptions (e.g. consistency/Σ-soundness, as the page's own problem shows). Without consistency, if PA is inconsistent then Bew is trivially Δ (it is everywhere true). Also 'only Bew' is misleading since Deriv/Pf are Δ but Bew's Σ-ness is not a complexity-theoretic fact independent of metamathematical hypotheses.
- **Proposed fix:** Replace with: '構文の概念が Δ 論理式で書けるのは、それらが有限的な概念だからである。証明可能性 $\mathrm{Bew}$ は「証明を探す」非有界な探索を含むため Σ 論理式として表される。もっとも、$\mathrm{Bew}$ が Δ でないことは無矛盾性（ないし Σ 健全性）を仮定して初めて言えることであり、$\PA$ が矛盾すれば $\mathrm{Bew}$ は自明に Δ になる（本ページの問題を参照）。'
- **Reported:** 2026-10-28 (8ccef3d)
