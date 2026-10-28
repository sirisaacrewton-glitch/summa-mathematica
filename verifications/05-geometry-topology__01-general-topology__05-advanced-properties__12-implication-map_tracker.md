# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/12-implication-map.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/12-implication-map.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 11 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a summary/map page with many cross-references. The main problems are improper links: several citations point to item labels (e.g. top:completely-regular-basic.5, top:compactness-variants.4/.6, top:imp-omega-one.4, top:baire-category.2, top:omega-one-space, top:compactness-variants-examples.1/.3, top:imp-small-spaces.3) that are not present in the supplied label table, so the targets cannot be verified and are likely mechanically inserted or misnumbered. In addition, two rows of the non-implication table have mismatched headings and counterexamples: 'コンパクト ⇒ 可算コンパクト' with $[0,\omega_{1})$ actually witnesses the failure of the converse, and '完備距離化可能 ⇒ 距離化可能' with ℚ is trivially true and should be '距離化可能 ⇒ 完備距離化可能'. The supplement's example distinguishing $[0,\omega_{1}]$ from $[0,1]$ by first countability is correct in substance but ambiguously worded. The proofs and the stated fact (regular not completely regular) appear sound.

## Issues

### ISSUE-0001 [Open] LCH ⇒ チコノフ cites a nonexistent label completely-regular-basic.5
- **Category:** Improper link
- **Location:** top:implication-table, row 'LCH | チコノフ'
- **Detail:** The row cites \ref{top:completely-regular-basic.5}, but the label table only lists top:completely-regular-basic.2 (proposition 7.2, 完全正則性の基本性質). There is no item .5 of that proposition in the table, so the citation target cannot be verified and is likely a mechanically inserted wrong link. The correct statement (LCH spaces are completely regular) is usually proved via the one-point compactification being compact Hausdorff hence normal, or directly.
- **Proposed fix:** Replace the citation with a valid one, e.g. cite \ref{top:completely-regular-basic.2} together with \ref{top:one-point-properties} (LCH ⇒ one-point compactification is compact Hausdorff ⇒ normal ⇒ completely regular), or add the missing proposition and cite it.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 可算コンパクト ＋ リンデレーフ cites top:compactness-variants.4 which is not in the label table
- **Category:** Improper link
- **Location:** top:implication-table, row '可算コンパクト ＋ リンデレーフ | コンパクト'
- **Detail:** The row cites \ref{top:compactness-variants.4}, but the label table lists only top:compactness-variants.3 (theorem 5.3) and top:compactness-variants-examples.2 for that page. Item .4 of theorem 5.3 is not listed, so the citation cannot be confirmed to say 'countably compact + Lindelöf ⇒ compact'. The same unlisted label is reused in the solution of top:prob-imp-which-space.
- **Proposed fix:** Cite the correct listed label (e.g. \ref{top:compactness-variants.3} if that theorem contains the countably compact + Lindelöf ⇒ compact statement), or add the missing item to the label table and cite it consistently in both the table and the solution.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 擬コンパクト ＋ T₄ cites top:compactness-variants.6 which is not in the label table
- **Category:** Improper link
- **Location:** top:implication-table, row '擬コンパクト ＋ T₄ | 可算コンパクト'
- **Detail:** The row cites \ref{top:compactness-variants.6}, but the label table only lists top:compactness-variants.3 for theorem 5.3. Item .6 is not listed, so the citation target cannot be verified.
- **Proposed fix:** Cite the correct listed label (e.g. \ref{top:compactness-variants.3} if it contains 'pseudocompact + normal ⇒ countably compact'), or add the missing item to the label table.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] 可算コンパクト ＋ パラコンパクト cites top:imp-omega-one.4 which is not in the label table
- **Category:** Improper link
- **Location:** top:implication-table, row '可算コンパクト ＋ パラコンパクト | コンパクト'
- **Detail:** The row cites \ref{top:imp-omega-one.4}, but the label table lists only top:imp-omega-one (proposition 12.7) as a whole, not item .4. The statement 'countably compact + paracompact ⇒ compact' is proved as Step 4 of proposition 12.7, so the citation should point to the proposition (or the specific step), not to an unlisted item label.
- **Proposed fix:** Replace \ref{top:imp-omega-one.4} with \ref{top:imp-omega-one} (Step 4 of proposition 12.7).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] LCH ⇒ ベール空間 cites top:baire-category.2 which is not in the label table
- **Category:** Improper link
- **Location:** top:implication-table, row 'LCH（より一般にチェック完備） | ベール空間'
- **Detail:** The row cites \ref{top:baire-category.2}, but the label table lists only top:baire-category.1 (theorem 2.5, ベールのカテゴリー定理). Item .2 is not listed, so the citation cannot be verified. The claim 'LCH ⇒ Baire' is standard (via local compactness + Baire category), but the specific label is wrong.
- **Proposed fix:** Cite \ref{top:baire-category.1} together with \ref{top:cech-complete-baire} (LCH spaces are Čech-complete, and Čech-complete spaces are Baire), or add the missing item to the label table.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0006 [Open] 第二可算 ⇒ 第一可算 cites top:omega-one-space which is not in the label table
- **Category:** Improper link
- **Location:** top:non-implication-table, row '第二可算 ⇒ 第一可算'
- **Detail:** The row cites \ref{top:omega-one-space}, but the label table lists only top:omega-one-space.2 (theorem 3.5, ω₁ と ω₁+1). The bare label top:omega-one-space is not in the table, so the citation is unverifiable. Also, the example ω₁ is used to show that 'first countable does not imply second countable' (ω₁ is first countable but not second countable), not that 'second countable does not imply first countable' — the direction of the counterexample should be checked against the row heading.
- **Proposed fix:** Cite \ref{top:omega-one-space.2} (theorem 3.5) for the properties of ω₁, and make sure the row is about the correct direction: ω₁ is first countable but not second countable, so it witnesses that 'first countable ⇒ second countable' fails, not 'second countable ⇒ first countable'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0007 [Open] コンパクト ⇒ 可算コンパクト cites top:compactness-variants-examples.1 which is not in the label table
- **Category:** Improper link
- **Location:** top:non-implication-table, row 'コンパクト ⇒ 可算コンパクト'
- **Detail:** The row cites \ref{top:compactness-variants-examples.1}, but the label table lists only top:compactness-variants-examples.2 (example, 含意が逆向きに成り立たない例). Item .1 is not listed, so the citation cannot be verified. Moreover, the example given is $[0,\omega_{1})$, which is countably compact but not compact — this witnesses that 'countably compact ⇒ compact' fails, not 'compact ⇒ countably compact'. The row heading and the example are mismatched.
- **Proposed fix:** Correct the row so that the implication and the counterexample match: for 'countably compact ⇒ compact' the counterexample $[0,\omega_{1})$ is appropriate; cite \ref{top:imp-omega-one} (or the listed example label) for it. If the intended row is 'compact ⇒ countably compact', no counterexample exists (the implication is true), so the row should be removed.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0008 [Open] 可算コンパクト ⇒ 擬コンパクト cites top:compactness-variants-examples.3 which is not in the label table
- **Category:** Improper link
- **Location:** top:non-implication-table, row '可算コンパクト ⇒ 擬コンパクト'
- **Detail:** The row cites \ref{top:compactness-variants-examples.3}, but the label table lists only top:compactness-variants-examples.2 for that page. Item .3 is not listed, so the citation cannot be verified.
- **Proposed fix:** Cite the correct listed label (e.g. \ref{top:compactness-variants-examples.2} if it contains the relevant example), or add the missing item to the label table.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0009 [Open] 可分とリンデレーフの無関係の行 cites top:imp-small-spaces.3 which is not in the label table
- **Category:** Improper link
- **Location:** top:non-implication-table, row '（可分とリンデレーフは無関係）'
- **Detail:** The row cites \ref{top:imp-small-spaces.3}, but the label table lists only top:imp-small-spaces.2 (proposition 12.5). Item .3 is not listed, so the citation cannot be verified. The example 'non-countable discrete space one-point compactification is Lindelöf but not separable' is indeed item 3 of proposition 12.5, so the citation should point to the proposition as a whole or to the correct item label.
- **Proposed fix:** Replace \ref{top:imp-small-spaces.3} with \ref{top:imp-small-spaces.2} (proposition 12.5, item 3), or add the item label to the table.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0010 [Open] 完備距離化可能 ⇒ 距離化可能 cites top:pres-rationals for ℚ
- **Category:** Improper link
- **Location:** top:non-implication-table, row '完備距離化可能 ⇒ 距離化可能'
- **Detail:** The row cites \ref{top:pres-rationals} (proposition 10.13, 有理数の空間) for the example ℚ. However, the row heading '完備距離化可能 ⇒ 距離化可能' is trivially true (complete metrizable implies metrizable), so the intended counterexample must be for the converse 'metrizable ⇒ completely metrizable', with ℚ as a metrizable but not completely metrizable space. The heading is mislabeled.
- **Proposed fix:** Change the row heading to '距離化可能 ⇒ 完備距離化可能' (or '距離化可能 ⇒ チェック完備'), with ℚ as the counterexample, citing \ref{top:pres-rationals}.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0011 [Open] Supplement claims [0,ω₁] and [0,1] differ by first countability
- **Category:** Supplement/remark error
- **Location:** supplement, '地図の読み方'
- **Detail:** The supplement says '$[0,\omega_{1}]$ と $[0,1]$（第一可算性）' as an example of distinguishing spaces by a property on the map. But $[0,\omega_{1}]$ is not first countable (the point $\omega_{1}$ has no countable neighborhood base), while $[0,1]$ is first countable — so the property does distinguish them, but the phrasing suggests $[0,\omega_{1}]$ has first countability. More importantly, the map's properties are stated for the spaces in the map; $[0,\omega_{1}]$ is compact Hausdorff but not first countable, and $[0,1]$ is first countable, so the example is correct in substance but the parenthetical is ambiguous. The real issue: the supplement says 'the properties on the map are all topological invariants', which is true, but then uses first countability, which is on the map — this is fine. The example is acceptable if read as '$[0,\omega_{1}]$ is not first countable while $[0,1]$ is'. No error if so read.
- **Proposed fix:** Clarify: '$[0,\omega_{1}]$ は第一可算でないが $[0,1]$ は第一可算である（第一可算性）'.
- **Reported:** 2026-10-28 (8ccef3d)
