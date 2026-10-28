# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/01-types-omitting.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/01-types-omitting.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Isolated type may be omitted when T is not complete
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement says that for a non-complete T an isolated type may be omitted by some model, justified by '∃x θ is not a consequence of T'. But the definition of 'θ isolates p' (model:isolated-type) already requires T ∪ {∃x θ} to be satisfiable, and the proof of model:isolated-realized only uses completeness to conclude T ⊨ ∃x θ. Without completeness, a model of T could fail to satisfy ∃x θ, so it need not realize p. So the claim is correct in substance, but the parenthetical justification is imprecise: the relevant point is that T may not prove ∃x θ, not merely that it is not a consequence in some loose sense. More importantly, the sentence 'T が完全でないときも、孤立していなければ省略できる' is fine, but the claim that an isolated type can be omitted needs the precise condition that some model of T omits ∃x θ. As stated it is acceptable but the justification should be sharpened.
- **Proposed fix:** Replace the parenthetical with: '（正確には、$T$ が $\exists\vec{x}\,\theta$ を帰結しないとき、$\neg\exists\vec{x}\,\theta$ を満たす $T$ のモデルは $\theta$ を満たす組をもたず、したがって $p$ を省略する。）'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Non-countably-many types and omitting
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The bullet claims that 'uncountably many types cannot necessarily be omitted simultaneously' and justifies it by 'a countable model realizes at most countably many types'. This reasoning is confused: a countable model realizes at most countably many tuples hence at most countably many types, so it omits all but countably many types — which means uncountably many types ARE omitted simultaneously by any countable model. The real limitation is that one cannot freely prescribe which uncountably many types to omit (the omitting types theorem is genuinely a countable phenomenon). The stated justification is backwards and the phrasing '非可算個の型が省略される状況自体はよく起こる' is muddled.
- **Proposed fix:** Rewrite as: '可算個の型は同時に省略できるが、非可算個の型を「指定して」同時に省略させることは一般にはできない（可算モデルは高々可算個の型しか実現しないので、非可算個の型のうち指定されていないものは自動的に省略されるが、任意に指定した非可算個の型すべてを省略する可算モデルの存在は保証されない）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Baire category analogy overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The text says the omitting types theorem 'is a claim similar to the Baire category theorem' and that 'a proof using the Baire property of the Stone space is also known'. The analogy is loose: the omitting types theorem is not a consequence of Baire category in the naive sense (the set of types realized by a model is not simply a meager set argument); the standard topological proof uses the Baire property of the space of complete theories / type space in a more delicate way. Calling it 'similar to the Baire category theorem' and asserting a Baire-based proof 'is known' without qualification is an overstatement/imprecision in a remark.
- **Proposed fix:** Soften to: '型の省略定理は、ストーン空間のベールの性質を用いた証明も知られているが、単純にベールのカテゴリー定理の系として得られるものではない。'
- **Reported:** 2026-10-28 (10fede1)
