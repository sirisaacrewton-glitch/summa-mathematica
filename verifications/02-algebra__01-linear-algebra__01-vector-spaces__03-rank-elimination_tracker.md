# Verification tracker: `02-algebra/01-linear-algebra/01-vector-spaces/03-rank-elimination.html`

<!-- source: 02-algebra/01-linear-algebra/01-vector-spaces/03-rank-elimination.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cholesky decomposition stated without positive-definiteness/symmetry caveat on pivoting and existence
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says '正定値対称行列ではピボット選択なしで A=LL^t（コレスキー分解）'. For a positive definite symmetric matrix, Cholesky exists without pivoting, which is correct. However the phrasing 'ピボット選択なしで' could be read as claiming no pivoting is ever needed; more importantly, the claim as stated is fine for positive definite matrices. The real issue: the supplement groups this with '一般の行列では A=QR' — QR always exists, but the Cholesky claim requires positive definiteness, which is stated. This is acceptable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
