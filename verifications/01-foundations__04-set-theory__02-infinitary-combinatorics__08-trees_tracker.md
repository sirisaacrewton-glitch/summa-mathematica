# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/08-trees.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/08-trees.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The only genuine issue found is in the supplement after the definition of κ-Suslin tree: the claim that singular κ-Suslin trees exist in ZFC is true under the bare definition, but the framing that this makes them 'uninteresting' and the implicit suggestion that this is why regular κ are considered is imprecise, since the constructed tree has height cf(κ) < κ and is not a κ-tree. All other supplements, remarks, and stated facts (König's lemma, the special Aronszajn tree argument, the Baumgartner/Specker/Mitchell attributions, the well-pruned extension lemma) check out correctly.

## Issues

### ISSUE-0001 [Open] Incorrect claim that κ-Suslin trees exist in ZFC for singular κ
- **Category:** Supplement/remark error
- **Location:** supplement after set:suslin-tree (「κ が特異なとき」)
- **Detail:** The supplement claims that for singular κ, κ-Suslin trees exist in ZFC. The construction given (μ = cf(κ) many ordinals f(i) side by side) produces a tree whose chains have size < κ and whose antichains have size ≤ μ < κ, and |T| = κ. But this tree is NOT a κ-Suslin tree: the definition of κ-Suslin tree (set:suslin-tree) requires |T| = κ AND all chains and antichains of size < κ. The constructed tree does satisfy these, so it IS a κ-Suslin tree by the page's own definition. However, the claim that this makes κ-Suslin trees 'uninteresting' and that 'this is why we only consider regular κ' is misleading: the definition of κ-Suslin tree does not require κ to be regular, and the construction indeed gives a κ-Suslin tree for singular κ. The real issue is that the definition of κ-tree (set:kappa-tree) requires κ regular, so the notion of 'κ-Suslin tree' for singular κ is not aligned with κ-trees. The supplement's statement is essentially correct as a construction but the framing 'ZFC で存在し、面白みがない' is imprecise: the tree constructed has height μ (not κ), so it is not a κ-tree in any sense, and calling it a κ-Suslin tree is correct only under the bare definition. More importantly, the claim that 'this is why we only consider regular κ' is a non-sequitur: the reason to restrict to regular κ is that the theory of κ-trees requires regularity, not that singular κ-Suslin trees are trivial.
- **Proposed fix:** Replace the sentence 'κ が特異基数なら κ-ススリン木は ZFC で存在し、面白みがない' with: 'κ が特異基数のときも定義上は κ-ススリン木が存在する（以下の構成）。ただしこの木の高さは cf(κ) であって κ ではないので κ-木ではなく、κ-木の理論（高さ κ・各レベル < κ）は正則基数 κ に対してのみ展開される。これが以下で κ を正則に限る理由である。' Also add after the construction: 'この木の高さは μ = cf(κ) であり、κ ではないことに注意。'
- **Reported:** 2026-10-28 (10fede1)
