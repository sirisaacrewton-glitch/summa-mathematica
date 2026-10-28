# Verification tracker: `02-algebra/02-group-theory/07-representations/05-integrality.html`

<!-- source: 02-algebra/02-group-theory/07-representations/05-integrality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Feit–Thompson attribution to character theory
- **Category:** Supplement/remark error
- **Location:** supplement / ファイト＝トンプソンの定理
- **Detail:** The supplement states that the Feit–Thompson theorem (odd order groups are solvable) 'essentially uses character theory' (指標理論を本質的に使う). This is false: the Feit–Thompson proof is a purely group-theoretic argument (the 'odd order paper'), and it is a famous open question whether a character-theoretic proof exists. The statement is a misattribution of method.
- **Proposed fix:** 奇数位数の群は可解である（ファイト＝トンプソン、1963 年）。その証明は指標理論を用いない純粋に群論的なもので、非常に長い（\ref{grp:solvable-deep-facts}）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Goldschmidt/Matsuyama/Bender proofs of Burnside's p^a q^b
- **Category:** Supplement/remark error
- **Location:** supplement / 群論だけによる証明
- **Detail:** The supplement claims that character-free proofs of Burnside's $p^{a}q^{b}$ theorem are due to 'Goldschmidt, Matsuyama, Bender et al.' This attribution is inaccurate. The standard character-free proofs are due to Burnside himself (via the transfer/normal p-complement argument) and to Wielandt; Goldschmidt and Matsuyama are associated with the broader classification of groups with a strongly closed abelian subgroup / fusion arguments, not with a character-free proof of the $p^{a}q^{b}$ theorem. The attribution is misleading.
- **Proposed fix:** バーンサイドの定理には、指標を使わない証明（バーンサイド自身による移送 (transfer) を用いた証明や、ウィーラントによる証明など）も知られているが、どれも長い（本サイト未収録）。
- **Reported:** 2026-10-28 (8ccef3d)
