# Verification tracker: `02-algebra/02-group-theory/07-representations/05-integrality.html`

<!-- source: 02-algebra/02-group-theory/07-representations/05-integrality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Feit–Thompson attribution to character theory
- **Category:** Supplement/remark error
- **Location:** supplement / ファイト＝トンプソンの定理
- **Detail:** The supplement states that the Feit–Thompson theorem (odd order groups are solvable) 'also essentially uses character theory' (指標理論を本質的に使う). This is inaccurate: the Feit–Thompson proof is a long group-theoretic argument (via the theory of Frobenius/CN-groups, minimal counterexample analysis) and does not rely on character theory as an essential tool. The claim overstates/misattributes the method.
- **Proposed fix:** Replace with: '奇数位数の群は可解であるという定理（ファイト＝トンプソン、1963 年）は群論のみによる非常に長い証明で知られており、本サイト未収録である（\ref{grp:solvable-deep-facts}）。' (i.e. remove the assertion that it essentially uses character theory).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Group-theoretic proofs of Burnside's theorem attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 群論だけによる証明
- **Detail:** The supplement attributes character-free proofs of Burnside's $p^{a}q^{b}$ theorem to 'Goldschmidt, Matsuyama, Bender and others'. The standard group-theoretic (non-character) proofs are due to Burnside's later work and especially to Bender (1972) and Matsuyama; Goldschmidt is associated with a different (simpler) proof of Burnside's theorem but the grouping is imprecise. More importantly, the claim that 'all are long' is an overstatement—Bender's proof is comparatively short. This is a side comment with imprecise historical attribution.
- **Proposed fix:** Replace with: 'バーンサイドの定理には指標を使わない群論的な証明（ベンダー 1972 年など）も知られているが、本サイト未収録である。'
- **Reported:** 2026-10-28 (10fede1)
