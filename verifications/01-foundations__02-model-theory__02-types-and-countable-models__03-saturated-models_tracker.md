# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/03-saturated-models.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/03-saturated-models.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, lemmas, theorems and proofs) is logically sound: the recursion for κ^+-saturated extensions, universality, uniqueness and the countable saturated model theorem are correctly argued, and citations match their targets. The problems concentrate in the supplement: the discussion of set-theoretic hypotheses for saturated models of a given cardinality is imprecise (2^{<κ}=κ alone is insufficient; κ^{<κ}=κ plus small type spaces is needed), and the claim that special models give Beth/Robinson proofs 'without set-theoretic assumptions' is overstated since special models of a given size also require cardinal arithmetic hypotheses. The ultrapower remark is essentially correct and not reported.

## Issues

### ISSUE-0001 [Open] Existence of saturated model of size κ needs more than 2^{<κ}=κ
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 first bullet
- **Detail:** The supplement says that the existence of a saturated model of cardinality κ requires set-theoretic assumptions such as 2^{<κ}=κ (κ regular and 2^λ≤κ for λ<κ) or stability of the theory. This is imprecise/overstated: 2^{<κ}=κ alone does not guarantee a saturated model of size κ. For a saturated model of size κ one needs κ^{<κ}=κ together with the condition that the type spaces over small parameter sets are small (e.g. κ is strongly inaccessible or the theory is stable with κ^{<κ}=κ). The phrasing '2^{<κ}=κ のような...仮定' as sufficient is misleading.
- **Proposed fix:** Replace with: 'The existence of a saturated model of cardinality κ requires set-theoretic hypotheses such as κ^{<κ}=κ together with smallness of the type spaces over parameter sets of size <κ (for instance κ strongly inaccessible, or the theory stable with κ^{<κ}=κ); stability alone or 2^{<κ}=κ alone is not sufficient.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Special models give Beth/Robinson proofs 'without set-theoretic assumptions'
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 first bullet
- **Detail:** The claim that special models yield model-theoretic proofs of Beth definability and Robinson joint consistency 'without set-theoretic assumptions' is overstated. Special models of a given cardinality exist only under hypotheses such as κ^{<κ}=κ (or via GCH-like assumptions); the standard model-theoretic proofs of Beth/Robinson via saturated or special models still require such cardinal arithmetic assumptions, or use a monster model whose existence is itself a set-theoretic assumption. So 'without set-theoretic assumptions' is false as stated.
- **Proposed fix:** Replace with: 'This yields model-theoretic proofs of Beth definability and Robinson joint consistency, though the existence of sufficiently saturated/special models still requires cardinal arithmetic hypotheses (e.g. κ^{<κ}=κ).'
- **Reported:** 2026-10-28 (8ccef3d)
