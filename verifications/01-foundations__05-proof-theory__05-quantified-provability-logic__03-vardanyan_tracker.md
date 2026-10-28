# Verification tracker: `01-foundations/05-proof-theory/05-quantified-provability-logic/03-vardanyan.html`

<!-- source: 01-foundations/05-proof-theory/05-quantified-provability-logic/03-vardanyan.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Misattribution of the decidability result to Boolos Ch.17
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says "Boolos 第 17 章は、等号だけを述語記号とする量化様相論理の断片が決定可能であること…も示している" (Boolos Chapter 17 shows that the fragment of quantified modal logic with only equality as predicate symbol is decidable). This is a misattribution: the decidability of the monadic (one-place predicate) quantified modal logic / the fragment with only equality is a result of Vardanyan (and related work), not something Boolos's Chapter 17 establishes. Boolos's Chapter 17 of "The Logic of Provability" discusses Vardanyan's theorem and related undecidability results; it does not prove decidability of the equality-only fragment. The sentence conflates the source of the result.
- **Proposed fix:** Replace with: "等号だけを述語記号とする量化様相論理の断片が決定可能であること、および常に証明可能な文についてクレイグの補間定理が成り立たないこと（ヴァルダニャン）は、いずれもヴァルダニャンによる結果であり、Boolos 第 17 章で紹介されている。本サイトでは扱っていない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim about QML needing 2- and 3-place predicate symbols
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement states "二つの定理は、QML が 2 項・3 項の述語記号を含むことを使っている" (the two theorems use that QML contains 2- and 3-place predicate symbols). This is imprecise/overstated: the proofs on this page use the binary predicate E (and R) and the ternary T-predicate, but the essential ingredient for Vardanyan's Pi^0_2-completeness is the presence of at least one binary predicate symbol (to encode computations / the E-invariance), not specifically "2- and 3-place" as a requirement. Stating it as a necessary condition of the theorems is stronger than what is established. Also the following sentence about the next page (single one-place predicate, no nested Box) is a forward reference that should be flagged as such rather than asserted as a consequence.
- **Proposed fix:** Replace with: "本ページの証明では、QML が二項述語記号 E（および R）と三項の T 述語を含むことを用いている。実際、ヴァルダニャンの定理の Π^0_2 完全性には少なくとも一つの二項述語記号の存在が本質的である。"
- **Reported:** 2026-10-28 (10fede1)
