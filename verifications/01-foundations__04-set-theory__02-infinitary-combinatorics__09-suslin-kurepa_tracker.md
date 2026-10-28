# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/09-suslin-kurepa.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/09-suslin-kurepa.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Aronszajn line from an Aronszajn tree: claimed properties are wrong
- **Category:** Supplement/remark error
- **Location:** supplement (アロンシャイン線), after set:suslin-tree-line proof
- **Detail:** The supplement claims that the (⇒) construction applied to an Aronszajn tree yields a line that contains no subset isomorphic to ω_{1}, to ω_{1}^{*}, or to an uncountable subset of the reals, and cites Kunen Ch. II Exercise 32 as showing the line has no increasing or decreasing ω_{1}-sequence and all separable subspaces are nowhere dense. This is not what the construction gives. The lexicographic order on maximal chains of an Aronszajn tree is in general not even a linear order with the claimed properties: the set of maximal chains of an Aronszajn tree can contain an ω_{1}-like increasing sequence (e.g. the tree ω_{1} itself, or a tree with a cofinal branch-like chain), and the construction does not automatically produce an Aronszajn line. The standard result (Kunen) is that from an Aronszajn tree one obtains an Aronszajn line only after passing to a suitable subtree/quotient, and the precise statement of Exercise 32 concerns a specific construction, not the naive lexicographic order on all maximal chains. As stated, the claim that the resulting line contains no copy of ω_{1}, ω_{1}^{*}, or an uncountable set of reals is overstated and not justified by the (⇒) argument, which only used Suslin-ness in two places.
- **Proposed fix:** Replace with: "The (⇒) construction uses Suslin-ness only twice (countable antichains for c.c.c., countable chains for h(C)<ω_{1}). Applied to an arbitrary Aronszajn tree the lexicographic order on maximal chains need not be an Aronszajn line; however, a standard refinement (Kunen, Set Theory, Ch. II, Exercise 32) produces from an Aronszajn tree a linear order that is uncountable and contains no subset isomorphic to ω_{1}, to ω_{1}^{*}, nor to an uncountable subset of the reals (an Aronszajn line)."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Independence of KH: Silver's collapse and the role of inaccessibles
- **Category:** Unsupported fact
- **Location:** supplement (独立性) after set:kurepa-trivial
- **Detail:** The supplement states that ¬KH is consistent relative to an inaccessible (Silver 1971, collapsing an inaccessible to ω_{2} by Lévy collapse), and that 'this hypothesis cannot be removed (if ω_{2} is not inaccessible in L then a Kurepa tree exists)'. The parenthetical is imprecise/false as stated: the correct statement is that if ω_{2} is not inaccessible in L (more precisely, if ω_{2} is not a Mahlo/inaccessible cardinal in L), then there is an ω_{1}-Kurepa tree in L, but this is a theorem about L, not a ZFC statement that 'if ω_{2} is not inaccessible in L then a Kurepa tree exists' in V. Also the claim that the inaccessible hypothesis 'cannot be removed' is a strong metamathematical assertion (the failure of KH does not imply an inaccessible in V; it is only that the known consistency proof uses one). The wording overstates what is known.
- **Proposed fix:** Replace with: "¬KH is consistent relative to the existence of an inaccessible cardinal (Silver 1971: Lévy-collapse an inaccessible to ω_{2}). This large-cardinal hypothesis is not known to be removable. In L, if ω_{2} is not inaccessible (indeed not Mahlo) in L, then an ω_{1}-Kurepa tree exists in L; this is a theorem about L, not a ZFC implication in V."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that ω is 'on the side of too many paths' via König's lemma
- **Category:** Supplement/remark error
- **Location:** supplement (他の κ では), last sentence
- **Detail:** The supplement says: 'ω では \ref{set:konig-tree-lemma} により ω-ススリン木も ω-アロンシャイン木も存在しないので、ω は「道が多すぎる」側に振り切れている。' This is misleading. König's lemma says every infinite, finitely branching tree has an infinite branch; it does not by itself show there are no ω-Suslin or ω-Aronszajn trees (those are trivial for size reasons: an ω-tree has height ω and countably many levels, so it is automatically an ω-Aronszajn tree in the sense of having no uncountable chain, and 'ω-Suslin' is vacuous since every antichain is countable). The invocation of König's lemma is not the right reason, and the conclusion 'ω is on the side of too many paths' is not a consequence of König's lemma. Moreover, the complete binary tree ^{<ω}2 has 2^{ℵ_{0}} paths, which is consistent with 'many paths', but the stated justification is wrong.
- **Proposed fix:** Replace with: "For κ=ω every ω-tree has only countably many levels and is automatically an ω-Aronszajn tree (no uncountable chain), and 'ω-Suslin' is vacuous since every antichain is countable; the complete binary tree ^{<ω}2 has 2^{ℵ_{0}} paths, so ω sits on the 'many paths' side, but this is for size reasons, not because of König's lemma."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that the (⇐) construction needs c.c.c. and ω_{1} 'to mesh exactly'
- **Category:** Supplement/remark error
- **Location:** supplement (ω_{1} 以外では)
- **Detail:** The supplement says the (⇐) construction uses 'the number of stages ω_{1} and c.c.c. meshing exactly', and that for larger κ one discusses κ-Suslin trees in tree language rather than line language. This is imprecise: the construction of a Suslin line from a Suslin tree and conversely works for any regular κ with the obvious modifications (κ-Suslin tree ↔ κ-Suslin line, where a κ-Suslin line is a linear order with c.c.c. but no dense subset of size <κ), and the reason ω_{1} is special is not a 'meshing' but that the resulting line is a Suslin line in the classical sense. The statement as written suggests the equivalence fails for κ>ω_{1}, which is not established and is misleading.
- **Proposed fix:** Replace with: "The (⇐) construction is stated for ω_{1}; the analogous construction works for any regular κ, giving an equivalence between κ-Suslin trees and κ-Suslin lines (linear orders with c.c.c. and no dense subset of size <κ). For κ>ω_{1} it is customary to discuss κ-Suslin trees in tree language, but the line/tree translation itself is not special to ω_{1}."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that all Aronszajn trees are special under MA(ω_{1}) attributed to Baumgartner–Malitz–Reinhardt
- **Category:** Unsupported fact
- **Location:** supplement (より強い結論) after set:ma-no-suslin-tree
- **Detail:** The supplement states: 'MA(ω_{1}) のもとでは、すべてのアロンシャイン木が特殊（可算個の反鎖の和）になる（Baumgartner–Malitz–Reinhardt。Kunen 第 II 章演習 41 では MA+¬CH の形で Baumgartner に帰している）。' The correct attribution is Baumgartner–Malitz–Reinhardt for 'MA(ω_{1}) implies every Aronszajn tree is special', but the parenthetical 'Kunen Ch. II Exercise 41 attributes it to Baumgartner in the form MA+¬CH' is a misattribution/imprecision: Kunen's Exercise 41 concerns MA+¬CH and the specialness of Aronszajn trees, and the result is due to Baumgartner–Malitz–Reinhardt, not solely Baumgartner. Also 'MA(ω_{1})' alone (without ¬CH) is the correct hypothesis for specialness; the 'MA+¬CH' form is a different (stronger hypothesis) statement. The sentence conflates the two.
- **Proposed fix:** Replace with: "Under MA(ω_{1}) every Aronszajn tree is special (a union of countably many antichains); this is due to Baumgartner–Malitz–Reinhardt. Kunen, Set Theory, Ch. II, Exercise 41 states the result under MA+¬CH, attributing it to Baumgartner; the hypothesis MA(ω_{1}) suffices."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Claim that 'special Aronszajn tree is not Suslin' is justified by a supplement of set:aronszajn-exists
- **Category:** Supplement/remark error
- **Location:** supplement (より強い結論), last sentence
- **Detail:** The supplement says '特殊なアロンシャイン木はススリン木でない（\ref{set:aronszajn-exists} の補足）ので、これはこの定理の強化である。' A special Aronszajn tree (union of countably many antichains) is indeed not Suslin, since a Suslin tree has no uncountable antichain and a special tree would then have only countably many nodes, contradicting |T|=ω_{1}. But the citation to a supplement of set:aronszajn-exists is a pointer to a side remark, not a proved result; the claim itself is correct but the justification is a non-logical pointer. This is a minor issue; the substantive claim is true. However, the phrase 'これはこの定理の強化である' (this strengthens the theorem) is imprecise: the theorem is 'MA(ω_{1}) implies no ω_{1}-Suslin tree', and 'all Aronszajn trees special' does imply it, so 'strengthening' is acceptable. The only genuine problem is the reliance on a supplement as a logical justification.
- **Proposed fix:** Replace the parenthetical with a direct argument: "A special Aronszajn tree is a union of countably many antichains; if it were Suslin, every antichain would be countable, so the tree would be countable, contradicting |T|=ω_{1}. Hence it is not a Suslin tree, and the specialness result strengthens the theorem."
- **Reported:** 2026-10-28 (10fede1)
