# Verification tracker: `01-foundations/04-set-theory/06-constructible-sets/01-basic-properties-of-l.html`

<!-- source: 01-foundations/04-set-theory/06-constructible-sets/01-basic-properties-of-l.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definitions, the lemmas on D(A), the L-hierarchy, L-rank, ordinals in L, L_α⊆R(α), L(ω)=R(ω), and |L_α|=|α| are all sound, and the proofs check out. The genuine problems are concentrated in the side remarks: the paragraph after Lemma 1.13 overstates the characterization of when L_α=R(α) (the 'α=ℶ_α ⟹ L_α=R(α) under V=L' claim is not justified and is generally false), the hypcheck bullet in the supplement reverses which inclusion of Lemma 1.3 plays which role, and the introduction states ◇/◇⁺ for L without proof or citation. These should be corrected; the main mathematical content needs no change.

## Issues

### ISSUE-0001 [Open] Claim that L contains no reason to include all subsets of ω and that P(ω)⊄L implies L_α≠R(α) for all α>ω
- **Category:** Supplement/remark error
- **Location:** set:sec-l-vs-r (paragraph after set:l-alpha-size)
- **Detail:** The sentence 'ω のすべての部分集合が L に属すると考える理由はない' is a vague meta-claim, but more importantly the following claim is imprecise: 'P(ω)⊄L なら、すべての α>ω について L_α≠R(α) である'. This is true only because P(ω)⊆R(ω+1)⊆R(α) for α>ω, and if P(ω)⊄L then R(α) contains a subset of ω not in L, while L_α⊆L. That part is actually correct. However the earlier sentence 'Kunen は、α>ω について |L_α|=|R(α)| ⟺ α=ℶ_α であることを演習としている' is stated without the AC hypothesis needed to compute |R(α)|=ℶ_α and |L_α|=|α|; the equivalence as stated is not literally Kunen's exercise and requires care. Also 'V=L も無矛盾であり、そのとき α=ℶ_α なら L_α=R(α) となる' is stated as an exercise result but the direction 'α=ℶ_α ⟹ L_α=R(α)' under V=L is not justified and is in fact not generally true: even under V=L, L_α=R(α) requires that every subset of L_β in R(β) be definable over L_β, which fails at many α with α=ℶ_α (e.g. the least α with α=ℶ_α need not satisfy L_α=R(α)). This is an overstated claim.
- **Proposed fix:** Replace with: 'Under AC, |R(α)|=ℶ_α and |L_α|=|α|, so |L_α|=|R(α)| iff |α|=ℶ_α. Kunen poses as an exercise the characterization of those α for which L_α=R(α); under V=L one has L_α=R(α) only for special α (those where every subset of L_β is definable over L_β), not simply α=ℶ_α.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck claim that Lemma 1.5's proof only uses that D(A) contains elements of A when A is transitive
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The bullet says '\ref{set:l-alpha-basic} の証明では、D(A) が A の元を含む（A が推移的なとき）ことが、P(A) が A の元を含むことの代わりになった'. But the proof of set:l-alpha-basic uses both D(L_β)⊆P(L_β) (part 1) and L_β⊆D(L_β) (part 2), i.e. it uses the full statement L_β⊆D(L_β)⊆P(L_β). The phrasing 'D(A) が A の元を含む…ことが P(A) が A の元を含むことの代わりになった' is misleading: the containment D(A)⊆P(A) is what replaces P(A)⊇A, not the other direction. As written it reverses which inclusion plays which role.
- **Proposed fix:** Rewrite as: 'In the proof of Lemma 1.5 we used L_β⊆D(L_β)⊆P(L_β): the inclusion D(L_β)⊆P(L_β) (Lemma 1.3(1)) replaces the trivial P(L_β)⊇L_β, and the inclusion L_β⊆D(L_β) (Lemma 1.3(2), using transitivity of L_β) supplies L_β⊆L_{β+1}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that L is a model of ◇ and ◇⁺ stated in the introduction without proof or citation
- **Category:** Unsupported fact
- **Location:** set:page-l-basic (introductory paragraph)
- **Detail:** The introduction asserts 'L は ZFC+GCH の推移的な真のクラスのモデルであり、◇ や ◇⁺ など多くの有用な組合せ論的原理を満たす'. The ◇ and ◇⁺ claims are substantial theorems (Jensen) not proved or cited on this page, and are stated as background. This is acceptable as motivation but is stated as fact without reference; more importantly it is stated for the class L as a 'model', which is a proper class and the phrasing '推移的な真のクラスのモデル' is loose. This is a side remark, not a proof step, but the ◇/◇⁺ claim is a strong unproved assertion.
- **Proposed fix:** Soften to: 'L is a transitive proper class satisfying ZFC+GCH, and (by Jensen's theorem, proved later) it also satisfies combinatorial principles such as ◇ and ◇⁺.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that the recursion defining L_α uses Replacement
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The bullet says 'L_α を全順序数について定める再帰そのものは ZF の置換公理を使う'. This is correct for producing the function α↦L_α as a class function, but the phrasing could be read as claiming Replacement is needed for each individual L_α, which is false: each L_α exists by ZF without Replacement (indeed L_ω+1 exists in ZF minus Replacement). The statement as written is defensible but imprecise about what exactly needs Replacement (the simultaneous recursion over all ordinals / the class function).
- **Proposed fix:** Clarify: 'Each individual L_α exists without Replacement, but the class function α↦L_α (the simultaneous recursion over all ordinals) uses Replacement.'
- **Reported:** 2026-10-28 (10fede1)
