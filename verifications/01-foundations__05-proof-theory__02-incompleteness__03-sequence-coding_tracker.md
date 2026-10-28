# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/03-sequence-coding.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/03-sequence-coding.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Σ functions are not closed under composition as stated without proof, and the remark's claims about Ackermann and fast-growing functions are imprecise
- **Category:** Supplement/remark error
- **Location:** remark (pt:sec-primitive-recursion)
- **Detail:** The remark states that the Ackermann function is not primitive recursive but is Σ definable and provably functional in PA, and that there is a computable function growing faster than every Σ function provably functional in PA. The Ackermann claim is standard and correct (though the text hedges). The second claim is stated vaguely: 'Σ 論理式で定義される全域関数のうち PA で関数的と証明できるものには限りがある（どの PA で関数的な Σ 関数よりも速く増加する計算可能関数がある）'. This is essentially correct (PA-provably-total Σ-definable functions are bounded by a fast-growing function), but the phrasing 'どの PA で関数的な Σ 関数よりも速く増加する' is imprecise: it should say there is a single computable function dominating every function whose totality is PA-provable, which is a known result. Since the text explicitly hedges with 'とされる' and '本サイトでは詳細を確認していない', this is borderline. However, the claim that Ackermann is '二重の列を使えば Σ 論理式で定義でき' is correct. I will not report this as it is hedged and essentially correct.
- **Proposed fix:** No change needed; the hedging makes the statement acceptable.
- **Reported:** 2026-10-28 (10fede1)
