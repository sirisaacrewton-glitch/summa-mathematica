# Verification tracker: `01-foundations/05-proof-theory/05-quantified-provability-logic/03-vardanyan.html`

<!-- source: 01-foundations/05-proof-theory/05-quantified-provability-logic/03-vardanyan.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Misattribution of the decidability result to Boolos Ch.17
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says "Boolos 第 17 章は、等号だけを述語記号とする量化様相論理の断片が決定可能であること…も示している". The decidability of the monadic (one predicate symbol, no nested □) quantified modal logic fragment is Vardanyan's result, and the page itself states in the 前提の検討 bullet that "次のページでは、1 項述語記号ただ一つ（しかも □ の入れ子なし）でも同じ結果が成り立つというヴァルダニャンの結果を扱う". Attributing the decidability of the equality-only fragment to Boolos Ch.17 is at best imprecise and conflicts with the Vardanyan attribution given elsewhere on the same page.
- **Proposed fix:** Rewrite as: "等号だけを述語記号とする量化様相論理の断片が決定可能であること（ヴァルダニャン）、および常に証明可能な文についてクレイグの補間定理が成り立たないこと（ヴァルダニャン）は Boolos 第 17 章で言及されている。本サイトでは扱っていない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated claim that the theorems use 2- and 3-place predicate symbols
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement claims "二つの定理は、QML が 2 項・3 項の述語記号を含むことを使っている". However, the proofs on this page use only the 1-place predicate G together with the arithmetic vocabulary; the essential ingredient is the presence of a predicate symbol (G) that can be reinterpreted, not specifically 2- or 3-place predicate symbols. The statement is imprecise about what the proofs actually rely on.
- **Proposed fix:** Rewrite as: "二つの定理の証明は、算術の言語に加えて解釈を動かせる述語記号 G が言語に含まれることを本質的に使っている。"
- **Reported:** 2026-10-28 (8ccef3d)
