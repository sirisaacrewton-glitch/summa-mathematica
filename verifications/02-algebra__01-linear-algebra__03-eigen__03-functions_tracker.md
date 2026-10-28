# Verification tracker: `02-algebra/01-linear-algebra/03-eigen/03-functions.html`

<!-- source: 02-algebra/01-linear-algebra/03-eigen/03-functions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problems are in the supplement/remark side comments: the Gershgorin connected-component eigenvalue-count statement is imprecise (it should say a component formed by exactly $k$ discs contains exactly $k$ eigenvalues), the Hessenberg form is incorrectly equated with tridiagonal form, and the QR-method complexity is overstated as total $O(n^{3})$. The proofs and the main theorems (matrix exponential, Newton identities, Jacobi formula, power method) are sound, and the hypcheck counterexamples are correct.

## Issues

### ISSUE-0001 [Open] Gershgorin connected-component eigenvalue count misstated
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says '各連結成分に含まれる固有値の個数は円板の個数に等しい' (the number of eigenvalues in each connected component equals the number of discs). The correct Gershgorin theorem states that if a connected component of the union of discs consists of exactly $k$ discs, then it contains exactly $k$ eigenvalues (counted with multiplicity). As written, 'the number of eigenvalues in each connected component equals the number of discs' is imprecise: a connected component may be formed by several overlapping discs, and the count refers to the number of discs forming that component, not the number of connected components. The statement as phrased is ambiguous/incorrect.
- **Proposed fix:** ゲルシュゴリンの定理は列についても成り立ち（転置をとる）、さらに円板の合併の各連結成分がちょうど $k$ 個の円板からなるとき、その成分は重複度込みでちょうど $k$ 個の固有値を含むことが知られている（連続性による議論）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hessenberg form described as tridiagonal
- **Category:** Supplement/remark error
- **Location:** remark 実用的な固有値計算
- **Detail:** The remark says '行列をヘッセンベルグ形（三重対角）に直交変換で変形した'. A Hessenberg form is upper Hessenberg (zeros below the first subdiagonal), not tridiagonal. Tridiagonal form is obtained only for symmetric/Hermitian matrices (via Householder to tridiagonal). Equating Hessenberg with tridiagonal is false in general.
- **Proposed fix:** 実際の数値計算では、行列を（上）ヘッセンベルグ形（対称行列なら三重対角形）に直交変換で変形したのち、シフト付きの QR 法でシューア形に収束させるのが標準的である。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] QR method complexity claim
- **Category:** Supplement/remark error
- **Location:** remark 実用的な固有値計算
- **Detail:** The remark states the QR method gives all eigenvalues 'in $O(n^{3})$ の手間'. The QR algorithm requires $O(n^{3})$ per iteration and $O(n)$ iterations, so the total cost is $O(n^{4})$ in the naive count (or $O(n^{3})$ per iteration). Claiming total $O(n^{3})$ is an overstatement; the standard statement is $O(n^{3})$ per QR step after Hessenberg reduction.
- **Proposed fix:** ヘッセンベルグ化ののち各 QR 反復は $O(n^{3})$（三重対角なら $O(n)$）の手間で、全体として全固有値が得られることが知られている。
- **Reported:** 2026-10-28 (8ccef3d)
