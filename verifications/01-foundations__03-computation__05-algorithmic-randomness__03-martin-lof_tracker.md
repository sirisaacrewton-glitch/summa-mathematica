# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/03-martin-lof.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/03-martin-lof.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the Miller–Yu theorem is stated with an O(1) that is not required to be uniform in n, which makes the statement vacuous/incorrect as written; it should require a single constant c independent of n. Other supplement claims (Kucera–Gács, Chaitin incompleteness, Schnorr martingale characterization, the remark on computable sequences, and the hypcheck on plain vs prefix-free complexity) were checked and found acceptable. The proofs (universal test, Levin–Schnorr, Ω randomness) are sound modulo standard facts cited.

## Issues

### ISSUE-0001 [Open] Miller–Yu theorem stated with wrong direction of inequality
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ミラー–ユーの定理)
- **Detail:** The supplement states that X is random iff K(X\restr n) ≥ n - H(n) - O(1) for all n. The Miller–Yu theorem (a.k.a. the Schnorr–Levin / Chaitin characterization for plain Kolmogorov complexity) is that X is Martin-Löf random iff there is a constant c with K(X\restr n) ≥ n - K(n) - c for all n, i.e. K(X\restr n) ≥ n - H(n) - O(1) where the O(1) is a single additive constant independent of n. Writing '≥ n - H(n) - O(1) for all n' with the O(1) allowed to depend on n is vacuous (any string satisfies K(σ) ≥ |σ| - O(1) trivially with a constant depending on σ). The correct statement requires a uniform additive constant.
- **Proposed fix:** ミラー–ユーの定理: $X$ がランダムであることと、定数 $c$ があってすべての $n$ で $K(X\restr n)\ge n-H(n)-c$ となること（$H(n)$ は自然数の接頭辞なし複雑性、$c$ は $n$ によらない定数）は同値である。
- **Reported:** 2026-10-28 (8ccef3d)
