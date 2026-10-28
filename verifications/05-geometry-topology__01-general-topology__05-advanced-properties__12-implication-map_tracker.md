# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/12-implication-map.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/12-implication-map.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 10

## Summary of the last run

All previously reported improper-link issues are resolved by the corrected label table (the cited items now exist and say what is used), and the table semantics ('converse fails') make the counterexample rows correct. The proofs and the small-space propositions are sound. Two minor imprecisions remain in the supplement: the R vs R² example is not literally a property on the map, and the Banach–Alaoglu remark wrongly suggests the weak-* unit ball is always non-metrizable.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] LCH ⇒ チコノフ cites a nonexistent label completely-regular-basic.5
- **Category:** Improper link
- **Location:** top:implication-table, row 'LCH | チコノフ'
- **Detail:** The row cites \ref{top:completely-regular-basic.5}, but the label table only lists top:completely-regular-basic.2 (proposition 7.2, 完全正則性の基本性質). There is no item .5 of that proposition in the table, so the citation target cannot be verified and is likely a mechanically inserted wrong link. The correct statement (LCH spaces are completely regular) is usually proved via the one-point compactification being compact Hausdorff hence normal, or directly.
- **Proposed fix:** Replace the citation with a valid one, e.g. cite \ref{top:completely-regular-basic.2} together with \ref{top:one-point-properties} (LCH ⇒ one-point compactification is compact Hausdorff ⇒ normal ⇒ completely regular), or add the missing proposition and cite it.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now quotes top:completely-regular-basic.5 as '局所コンパクトなハウスドルフ空間はチコノフ空間である', which is exactly what the row uses.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). top:completely-regular-basic.5 states that LCH spaces are completely regular.

### ISSUE-0002 [Ignored: Valid Rebuttal] 可算コンパクト ＋ リンデレーフ cites top:compactness-variants.4 which is not in the label table
- **Category:** Improper link
- **Location:** top:implication-table, row '可算コンパクト ＋ リンデレーフ | コンパクト'
- **Detail:** The row cites \ref{top:compactness-variants.4}, but the label table lists only top:compactness-variants.3 (theorem 5.3) and top:compactness-variants-examples.2 for that page. Item .4 of theorem 5.3 is not listed, so the citation cannot be confirmed to say 'countably compact + Lindelöf ⇒ compact'. The same unlisted label is reused in the solution of top:prob-imp-which-space.
- **Proposed fix:** Cite the correct listed label (e.g. \ref{top:compactness-variants.3} if that theorem contains the countably compact + Lindelöf ⇒ compact statement), or add the missing item to the label table and cite it consistently in both the table and the solution.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — top:compactness-variants.4 is now quoted as '可算コンパクトかつリンデレーフならコンパクト', matching the row.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). top:compactness-variants.4 is: countably compact and Lindelöf implies compact.

### ISSUE-0003 [Ignored: Valid Rebuttal] 擬コンパクト ＋ T₄ cites top:compactness-variants.6 which is not in the label table
- **Category:** Improper link
- **Location:** top:implication-table, row '擬コンパクト ＋ T₄ | 可算コンパクト'
- **Detail:** The row cites \ref{top:compactness-variants.6}, but the label table only lists top:compactness-variants.3 for theorem 5.3. Item .6 is not listed, so the citation target cannot be verified.
- **Proposed fix:** Cite the correct listed label (e.g. \ref{top:compactness-variants.3} if it contains 'pseudocompact + normal ⇒ countably compact'), or add the missing item to the label table.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — top:compactness-variants.6 is now quoted as '擬コンパクトかつ T₄ なら可算コンパクト', matching the row.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). top:compactness-variants.6 is: pseudocompact and $T_{4}$ implies countably compact.

### ISSUE-0004 [Ignored: Valid Rebuttal] 可算コンパクト ＋ パラコンパクト cites top:imp-omega-one.4 which is not in the label table
- **Category:** Improper link
- **Location:** top:implication-table, row '可算コンパクト ＋ パラコンパクト | コンパクト'
- **Detail:** The row cites \ref{top:imp-omega-one.4}, but the label table lists only top:imp-omega-one (proposition 12.7) as a whole, not item .4. The statement 'countably compact + paracompact ⇒ compact' is proved as Step 4 of proposition 12.7, so the citation should point to the proposition (or the specific step), not to an unlisted item label.
- **Proposed fix:** Replace \ref{top:imp-omega-one.4} with \ref{top:imp-omega-one} (Step 4 of proposition 12.7).
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — top:imp-omega-one.4 is now quoted as '可算コンパクトなパラコンパクト空間はコンパクトである', matching the row.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). top:imp-omega-one.4 is: a countably compact paracompact space is compact.

### ISSUE-0005 [Ignored: Valid Rebuttal] LCH ⇒ ベール空間 cites top:baire-category.2 which is not in the label table
- **Category:** Improper link
- **Location:** top:implication-table, row 'LCH（より一般にチェック完備） | ベール空間'
- **Detail:** The row cites \ref{top:baire-category.2}, but the label table lists only top:baire-category.1 (theorem 2.5, ベールのカテゴリー定理). Item .2 is not listed, so the citation cannot be verified. The claim 'LCH ⇒ Baire' is standard (via local compactness + Baire category), but the specific label is wrong.
- **Proposed fix:** Cite \ref{top:baire-category.1} together with \ref{top:cech-complete-baire} (LCH spaces are Čech-complete, and Čech-complete spaces are Baire), or add the missing item to the label table.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — top:baire-category.2 is now quoted as '局所コンパクトなハウスドルフ空間（とくにコンパクトハウスドルフ空間）', matching the row.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). top:baire-category.2 is: locally compact Hausdorff spaces are Baire.

### ISSUE-0006 [Ignored: Valid Rebuttal] 第二可算 ⇒ 第一可算 cites top:omega-one-space which is not in the label table
- **Category:** Improper link
- **Location:** top:non-implication-table, row '第二可算 ⇒ 第一可算'
- **Detail:** The row cites \ref{top:omega-one-space}, but the label table lists only top:omega-one-space.2 (theorem 3.5, ω₁ と ω₁+1). The bare label top:omega-one-space is not in the table, so the citation is unverifiable. Also, the example ω₁ is used to show that 'first countable does not imply second countable' (ω₁ is first countable but not second countable), not that 'second countable does not imply first countable' — the direction of the counterexample should be checked against the row heading.
- **Proposed fix:** Cite \ref{top:omega-one-space.2} (theorem 3.5) for the properties of ω₁, and make sure the row is about the correct direction: ω₁ is first countable but not second countable, so it witnesses that 'first countable ⇒ second countable' fails, not 'second countable ⇒ first countable'.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The table header is '含意 | 逆が成り立たない例'; ω₁ is first countable but not second countable, so it correctly witnesses the failure of the converse. The bare label top:omega-one-space is listed in the table.
**Opus Rebuttal:** The table header is '含意 | 逆が成り立たない例': each row gives a TRUE implication and a space where its converse fails. ω₁ is first countable but not second countable, so the converse of '第二可算 ⇒ 第一可算' fails. Correct; top:omega-one-space is a valid label.

### ISSUE-0007 [Ignored: Valid Rebuttal] コンパクト ⇒ 可算コンパクト cites top:compactness-variants-examples.1 which is not in the label table
- **Category:** Improper link
- **Location:** top:non-implication-table, row 'コンパクト ⇒ 可算コンパクト'
- **Detail:** The row cites \ref{top:compactness-variants-examples.1}, but the label table lists only top:compactness-variants-examples.2 (example, 含意が逆向きに成り立たない例). Item .1 is not listed, so the citation cannot be verified. Moreover, the example given is $[0,\omega_{1})$, which is countably compact but not compact — this witnesses that 'countably compact ⇒ compact' fails, not 'compact ⇒ countably compact'. The row heading and the example are mismatched.
- **Proposed fix:** Correct the row so that the implication and the counterexample match: for 'countably compact ⇒ compact' the counterexample $[0,\omega_{1})$ is appropriate; cite \ref{top:imp-omega-one} (or the listed example label) for it. If the intended row is 'compact ⇒ countably compact', no counterexample exists (the implication is true), so the row should be removed.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — Under the 'converse fails' semantics, [0,ω₁) (countably compact, not compact) correctly witnesses the failure of the converse of 'compact ⇒ countably compact'.
**Opus Rebuttal:** Same table semantics: '[0,ω₁)' is countably compact but not compact, so the converse of 'コンパクト ⇒ 可算コンパクト' fails. Correct.

### ISSUE-0008 [Ignored: Valid Rebuttal] 可算コンパクト ⇒ 擬コンパクト cites top:compactness-variants-examples.3 which is not in the label table
- **Category:** Improper link
- **Location:** top:non-implication-table, row '可算コンパクト ⇒ 擬コンパクト'
- **Detail:** The row cites \ref{top:compactness-variants-examples.3}, but the label table lists only top:compactness-variants-examples.2 for that page. Item .3 is not listed, so the citation cannot be verified.
- **Proposed fix:** Cite the correct listed label (e.g. \ref{top:compactness-variants-examples.2} if it contains the relevant example), or add the missing item to the label table.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — top:compactness-variants-examples.3 is now quoted as the particular-point topology example (pseudocompact but not countably compact), matching the row.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). top:compactness-variants-examples.3 contains the particular point / Ψ-space examples (pseudocompact but not countably compact).

### ISSUE-0009 [Ignored: Valid Rebuttal] 可分とリンデレーフの無関係の行 cites top:imp-small-spaces.3 which is not in the label table
- **Category:** Improper link
- **Location:** top:non-implication-table, row '（可分とリンデレーフは無関係）'
- **Detail:** The row cites \ref{top:imp-small-spaces.3}, but the label table lists only top:imp-small-spaces.2 (proposition 12.5). Item .3 is not listed, so the citation cannot be verified. The example 'non-countable discrete space one-point compactification is Lindelöf but not separable' is indeed item 3 of proposition 12.5, so the citation should point to the proposition as a whole or to the correct item label.
- **Proposed fix:** Replace \ref{top:imp-small-spaces.3} with \ref{top:imp-small-spaces.2} (proposition 12.5, item 3), or add the item label to the table.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — top:imp-small-spaces.3 is now quoted as the one-point compactification of an uncountable discrete space (Lindelöf, not separable), matching the row.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). top:imp-small-spaces.3 is the one-point compactification of an uncountable discrete space (Lindelöf, not separable).

### ISSUE-0010 [Ignored: Valid Rebuttal] 完備距離化可能 ⇒ 距離化可能 cites top:pres-rationals for ℚ
- **Category:** Improper link
- **Location:** top:non-implication-table, row '完備距離化可能 ⇒ 距離化可能'
- **Detail:** The row cites \ref{top:pres-rationals} (proposition 10.13, 有理数の空間) for the example ℚ. However, the row heading '完備距離化可能 ⇒ 距離化可能' is trivially true (complete metrizable implies metrizable), so the intended counterexample must be for the converse 'metrizable ⇒ completely metrizable', with ℚ as a metrizable but not completely metrizable space. The heading is mislabeled.
- **Proposed fix:** Change the row heading to '距離化可能 ⇒ 完備距離化可能' (or '距離化可能 ⇒ チェック完備'), with ℚ as the counterexample, citing \ref{top:pres-rationals}.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — Under the 'converse fails' semantics, ℚ (metrizable, not completely metrizable) correctly witnesses the failure of the converse of 'completely metrizable ⇒ metrizable'.
**Opus Rebuttal:** Same table semantics: ℚ is metrizable but not completely metrizable, so the converse of '完備距離化可能 ⇒ 距離化可能' fails. Correct.

### ISSUE-0011 [Open] Supplement claims [0,ω₁] and [0,1] differ by first countability
- **Category:** Supplement/remark error
- **Location:** supplement, '地図の読み方'
- **Detail:** The supplement says '$[0,\omega_{1}]$ と $[0,1]$（第一可算性）' as an example of distinguishing spaces by a property on the map. But $[0,\omega_{1}]$ is not first countable (the point $\omega_{1}$ has no countable neighborhood base), while $[0,1]$ is first countable — so the property does distinguish them, but the phrasing suggests $[0,\omega_{1}]$ has first countability. More importantly, the map's properties are stated for the spaces in the map; $[0,\omega_{1}]$ is compact Hausdorff but not first countable, and $[0,1]$ is first countable, so the example is correct in substance but the parenthetical is ambiguous. The real issue: the supplement says 'the properties on the map are all topological invariants', which is true, but then uses first countability, which is on the map — this is fine. The example is acceptable if read as '$[0,\omega_{1}]$ is not first countable while $[0,1]$ is'. No error if so read.
- **Proposed fix:** Clarify: '$[0,\omega_{1}]$ は第一可算でないが $[0,1]$ は第一可算である（第一可算性）'.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still reads '$[0,\omega_{1}]$ と $[0,1]$（第一可算性）'. This is correct in substance ([0,ω₁] is not first countable, [0,1] is), so the example is acceptable; but the parenthetical is terse. No mathematical error remains, so this can be treated as resolved in substance.

### ISSUE-0012 [Open] Supplement claims R and R² differ by 'connectedness after removing a point'
- **Category:** Supplement/remark error
- **Location:** supplement, '地図の読み方'
- **Detail:** The supplement says 'R と R²（一点を除いた連結性。\ref{top:connected} の考え方）'. This is correct in substance (R minus a point is disconnected, R² minus a point is connected), but the map on this page contains no property 'connectedness after removing a point'; the supplement presents it as if it were one of the map's properties ('地図のどれか一つの性質が一方にあって他方にないことを示せばよい'). Removing a point is not a topological invariant of the space itself but of a derived space, so the sentence overstates that this is an instance of the map's method.
- **Proposed fix:** Replace with: '例：$[0,1]$ と $(0,1)$（コンパクト性）、$\R$ と $\R^{2}$（一点を除いた空間の連結性という、地図の性質から導かれる不変量。\ref{top:connected} の考え方）、$[0,\omega_{1}]$ と $[0,1]$（第一可算性：前者は $\omega_{1}$ で第一可算でなく、後者は第一可算）。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0013 [Open] Supplement's functional-analysis remark mislabels the weak-* unit ball as 'not metrizable but compact' region
- **Category:** Supplement/remark error
- **Location:** supplement, '他の分野との関係'
- **Detail:** The supplement says the weak-* unit ball being compact (Banach–Alaoglu) is an instance of the map's '距離化可能でないがコンパクト' region. But the weak-* unit ball of the dual of a separable Banach space IS metrizable (in the weak-* topology); it is metrizable precisely when the predual is separable. So the claim that this is an instance of 'not metrizable but compact' is false in general (e.g. for separable Banach spaces). The non-metrizability holds only for non-separable preduals.
- **Proposed fix:** Replace with: '弱 * 位相の単位球がコンパクトであること（バナッハ–アラオグル）。これは（前双対が可分でないとき）「コンパクトだが距離化可能でない」の例であり、前双対が可分なときは距離化可能である。'
- **Reported:** 2026-10-28 (048145a)
