# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/02-omega-stable.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/02-omega-stable.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (binary-tree lemma, ω-stable ⇒ κ-stable, density of isolated types, prime model existence, constructible ⇒ atomic, ℵ₁-saturated models, no (κ,ℵ₀)-models) is logically sound and the citations match their targets. The genuine problems are concentrated in the supplement: the characterization of ω-stability via Morley rank is misstated (it should say 'ordinal-valued, i.e. never ∞'), and the topological metaphor calling the type space 'scattered' overstates the actual property (density of isolated points in every [φ]). The Shelah uniqueness remark is essentially correct given existence from ω-stability.

## Issues

### ISSUE-0001 [Open] ω-stability is not equivalent to 'every formula has ordinal Morley rank'
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that ω-stability is equivalent to 'the Morley rank of every formula is an ordinal'. This is false: every theory in which Morley rank is defined at all assigns an ordinal (or ∞) to each formula, and ω-stable theories are exactly those in which every formula has ordinal-valued (i.e. not ∞) Morley rank. The cited \ref{model:omega-stable-iff-rank} presumably states the correct equivalence (ω-stable iff every formula has ordinal Morley rank, i.e. rank is never ∞), so the sentence as written misstates the cited theorem.
- **Proposed fix:** ω 安定性は「すべての論理式のモーリー階数が順序数値である（すなわち ∞ にならない）」ことと同値である（\ref{model:omega-stable-iff-rank}）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Stone space of an ω-stable theory need not be 'scattered' in the technical sense
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says the type space of an ω-stable theory is 'a scattered space where isolated points are dense no matter how far you extend'. Density of isolated points in every definable subspace is correct, but calling the whole space 'scattered' (散在的) is an overstatement: scattered usually means every nonempty subspace has an isolated point, which is a stronger property and fails in general (e.g. the type space can contain a countable dense-in-itself part built from infinitely many isolated points accumulating). The precise statement is only that isolated points are dense in every subspace of the form [φ].
- **Proposed fix:** ω 安定な理論の型空間では、任意の定義可能部分空間 $[\varphi]$ において孤立点が稠密である（各 $[\varphi]$ は孤立点を含み、$[\varphi]$ 自身も同じ性質を保つ）。
- **Reported:** 2026-10-28 (8ccef3d)
