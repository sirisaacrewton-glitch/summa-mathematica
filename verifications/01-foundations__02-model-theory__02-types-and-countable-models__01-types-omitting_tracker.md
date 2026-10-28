# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/01-types-omitting.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/01-types-omitting.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof (Henkin construction with an omitting step) are logically sound: the reduction of F_s to an L-formula η via constants-to-variables, the use of non-isolation to find φ∈p_k with T ⊭ ∀x(η→φ), and the final omission argument are all correct. The isolated-type proposition and the examples are correct. The genuine problem is in the supplement: the second bullet of '前提の検討' gives a confused and incorrect justification for the limitation on uncountably many types (a countable model omits all but countably many types, so the stated reason actually supports the opposite of the intended claim). The first bullet's parenthetical is slightly imprecise but the statement is true. The topology remarks are essentially correct under the standard reading.

## Issues

### ISSUE-0001 [Open] Uncountably many types cannot in general be simultaneously omitted
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The bullet claims that uncountably many types cannot necessarily be simultaneously omitted, justified by 'a countable model realizes at most countably many types'. This justification is confused: a countable model realizes at most countably many n-types, so it omits all but countably many of an uncountable family — i.e., uncountably many types ARE simultaneously omitted by any countable model. The genuine limitation is the opposite: one cannot in general prescribe an uncountable set of types to be omitted (the omitting types theorem is false for uncountably many types in general). The stated reason ('可算モデルが実現する型は高々可算個なので') actually supports the trivial fact that uncountably many types get omitted, contradicting the intended claim. The sentence is muddled and its justification is wrong.
- **Proposed fix:** Replace with: 'The omitting types theorem requires the family of types to be countable. For uncountably many non-isolated types it can fail that a single model omits all of them (the countable model can only omit all but countably many types, but which countably many it realizes cannot in general be prescribed). This site does not treat this.'
- **Reported:** 2026-10-28 (8ccef3d)
