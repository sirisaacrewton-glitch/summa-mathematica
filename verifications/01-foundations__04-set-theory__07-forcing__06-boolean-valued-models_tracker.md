# Verification tracker: `01-foundations/04-set-theory/07-forcing/06-boolean-valued-models.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/06-boolean-valued-models.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main body proofs (complete embeddings, dense embeddings, name translation, truth-value lemma) are essentially correct. The problems concentrate in the remarks and supplement: the false claim that countable complete Boolean algebras are finite (ISSUE-0001) is the most serious and remains unfixed; the very-nice-name formula (ISSUE-0002), the complete-embedding/complete-homomorphism remark (ISSUE-0003), the generic-filter-as-ultrafilter phrasing (ISSUE-0004 and the new related issue), and the unsupported non-isomorphism claim (ISSUE-0006) also remain. ISSUE-0005 is correctly rebutted and should be closed.

## Issues

### ISSUE-0001 [Open] 可算完備ブール代数は有限という主張
- **Category:** Supplement/remark error
- **Location:** set:truth-value 直後の本文（「可算な完備ブール代数はすべて有限」）
- **Detail:** 「可算な完備ブール代数はすべて有限」は偽。可算無限の完備ブール代数の例として、ω 上の自由ブール代数の完備化や、ω の部分集合全体のブール代数（可算でないが）、より適切には可算アトム的でない完備ブール代数が存在する。実際、可算な完備ブール代数で無限のものは存在する（例えば ω 個の生成元の自由ブール代数の完備化は可算濃度をもち完備）。したがってこの記述は誤り。
- **Proposed fix:** Replace with: 'A complete Boolean algebra that is countable and atomic is finite; in general a countable complete Boolean algebra need not be finite (e.g. the completion of the free Boolean algebra on countably many generators is countably infinite and complete).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The claim 'every countable complete Boolean algebra is finite' is false: the completion of the free Boolean algebra on countably many generators is a countably infinite complete Boolean algebra (e.g. the regular open algebra of 2^ω is not countable, but the completion of the free algebra on ω generators is countable and complete). The text still asserts this.

### ISSUE-0002 [Open] とてもよい名前の定義式の誤り
- **Category:** Supplement/remark error
- **Location:** set:very-nice-name
- **Detail:** τ = ⋃{{π}×A_π : π∈dom(σ)} と書かれているが、これは σ の部分集合の名前の形として不正確。正しくは τ ⊆ dom(σ)×B の形で、各 π に対し A_π = {b : ⟨π,b⟩∈τ} とすべき。また「σ の部分集合のよい名前」の条件も不明瞭。
- **Proposed fix:** Let τ ⊆ dom(σ)×B be a nice name for a subset of σ, i.e. for each π∈dom(σ) the set A_π={b:⟨π,b⟩∈τ} is an antichain. Set b_π=⋁A_π (b_π=0 if A_π=∅) and τ̂={⟨π,b_π⟩:π∈dom(σ)}.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The formula τ = ⋃{{π}×A_π : π∈dom(σ)} is still present and remains imprecise; the correct form is τ ⊆ dom(σ)×B with A_π = {b : ⟨π,b⟩∈τ}.

### ISSUE-0003 [Open] 完全な埋め込みと完備単射準同型の対応の過度な単純化
- **Category:** Supplement/remark error
- **Location:** 「完全な埋め込みの概念も簡単になる」段落
- **Detail:** 「完備ブール代数に制限すると、完備な単射準同型という自然な概念に帰着される」はやや不正確。完全な埋め込み i:P→Q がブール代数の間の写像のとき、i が完備ブール代数準同型（上限を保つ）で単射、というだけでは不十分で、像が稠密であること（ないし適切な条件）が必要な場合がある。Kunen の演習 C7 の正確な内容と照合すべき。
- **Proposed fix:** State precisely: 'When P and Q are complete Boolean algebras, a complete embedding i:P→Q corresponds to an injective complete Boolean homomorphism whose image is dense in Q (Kunen Ch. VII Exercise C7).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark that complete embeddings between complete Boolean algebras reduce to 'complete injective homomorphisms' is still stated without the density/regularity condition; it remains imprecise.

### ISSUE-0004 [Open] 正則開集合の否定の記述
- **Category:** Supplement/remark error
- **Location:** supplement「高い視点から」
- **Detail:** 「¬ が補元（正則開集合では『閉包の補集合の内部』）」は正しいが、「∃ が上限（和の正則化）」も概ね正しい。しかし「ジェネリックなフィルター G（B の M 上の超フィルター）」は不正確：B 上の M-ジェネリックフィルターは超フィルター（極大フィルター）ではあるが、単に「超フィルター」と言うと M に属する超フィルターと混同される。また B が完備でない場合もありうる。
- **Proposed fix:** Say: 'a generic filter G (an M-generic ultrafilter on B, i.e. meeting every dense set in M) selects which truth values count as true.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still calls a generic filter 'a superfilter (超フィルター) on B over M', which conflates M-generic filters with ultrafilters in M; the imprecision remains.

### ISSUE-0005 [Ignored: Valid Rebuttal] Fn(κ,2) と Fn(ω,2) が V で同型という主張
- **Category:** Unsupported fact
- **Location:** 「たとえば κ≥ω、κ∈M なら…」段落
- **Detail:** 「(κ≥ω_1)^M なら、Fn(κ,2) と Fn(ω,2) は V では同型だが M では同型でなく」は偽。Fn(κ,2) と Fn(ω,2) は濃度が異なる（κ>ω なら |Fn(κ,2)|>|Fn(ω,2)|）ので V でも同型でない。同型なのは Fn(κ,2) と Fn(κ×ω,2) のような場合。
- **Proposed fix:** Remove the claim that Fn(κ,2) and Fn(ω,2) are isomorphic in V; instead say they are not isomorphic (different cardinality) and give different extensions when κ≥ω_1 in M.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: since M is a countable transitive model, κ∈M is countable in V, so Fn(κ,2) and Fn(ω,2) are isomorphic in V but not in M. The text is fine.
**Opus Rebuttal:** Here $M$ is a countable transitive model, so in $V$ the ordinal $\kappa\in M$ is countable; then $\mathrm{Fn}(\kappa,2)$ and $\mathrm{Fn}(\omega,2)$ are isomorphic in $V$ via a bijection $\kappa\to\omega$ (both are the countable posets of finite partial functions). In $M$ they have different cardinalities. The text is correct.

### ISSUE-0006 [Open] Fn(ω,2), Fn(ω,3), Fn(ω,ω) が同型でないという主張
- **Category:** Supplement/remark error
- **Location:** 「Fn(ω,2), Fn(ω,3), Fn(ω,ω) は M でも V でも同型でないが、同じ拡大を与える」
- **Detail:** Fn(ω,2) と Fn(ω,3) は濃度が異なる（2^{<ω} と 3^{<ω} はともに可算）ため濃度では区別できず、実際には順序構造が異なるので同型でないという主張自体は成り立ちうるが、「M でも V でも同型でない」の根拠が示されていない。また Fn(ω,ω) は Fn(ω,2) と濃度が異なる（前者は可算、後者も可算）ため、濃度だけでは区別できない。主張は概ね正しいが根拠不足。
- **Proposed fix:** Add justification: 'Fn(ω,2), Fn(ω,3), Fn(ω,ω) are pairwise non-isomorphic (e.g. Fn(ω,2) has atoms below which there are exactly two incompatible extensions, while Fn(ω,3) has three), yet they yield the same extension (Kunen Ch. VII Exercise C3).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The claim that Fn(ω,2), Fn(ω,3), Fn(ω,ω) are pairwise non-isomorphic in both M and V is still asserted without justification; it is plausible but unsupported as stated.

### ISSUE-0007 [Open] Generic filter described as an ultrafilter on B over M
- **Category:** Supplement/remark error
- **Location:** supplement「高い視点から」
- **Detail:** The supplement says a generic filter G is 'a superfilter (超フィルター) on B over M'. An M-generic filter is an ultrafilter of B in V, but it is not an element of M and not an ultrafilter 'over M' in the usual sense; the phrasing invites confusion with ultrafilters belonging to M. This overlaps ISSUE-0004 but the specific wording '超フィルター' remains misleading.
- **Proposed fix:** Replace with: 'a generic filter G (an M-generic filter on B, which is an ultrafilter of B in V but not an element of M) selects which truth values count as true.'
- **Reported:** 2026-10-28 (048145a)
