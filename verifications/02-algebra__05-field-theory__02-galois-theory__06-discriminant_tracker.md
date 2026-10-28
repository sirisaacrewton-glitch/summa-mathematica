# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/06-discriminant.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/06-discriminant.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically solid: the proofs of the fundamental theorem of symmetric polynomials, the discriminant properties, the $A_{n}$ criterion, the cubic and quartic Galois group classifications, and Cardano's formula are all correct, and the cited labels match their uses. The only genuine issues are in the supplement: the Chevalley–Shephard–Todd statement omits the finite-dimensional linear representation setting (and the invertibility of $|G|$), and the Ferrari-method remark overstates the correspondence with the normal series $S_{4}\trianglerighteq A_{4}\trianglerighteq V_{4}\trianglerighteq\{1\}$. Both are minor imprecisions in side comments, not errors in the main results.

## Issues

### ISSUE-0001 [Open] Chevalley–Shephard–Todd stated without the essential 'finite group' hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says '有限群の不変式環が多項式環になるのは、標数 0 では鏡映群のときである'. The word 有限群 is present, so the finite-group hypothesis is there; however the statement as written omits that the group must act on a finite-dimensional vector space over a field (the invariant ring being a polynomial ring is a statement about $K[V]$ for a linear representation $G\subset GL(V)$). More importantly, the claim is stated for '標数 0' but the theorem requires $|G|$ invertible in $K$; over a field of characteristic $p$ dividing $|G|$ the equivalence fails. Since the surrounding context is a general commutative ring $A$ and arbitrary field $K$, the unqualified '標数 0 では' is acceptable but the missing 'linear representation on a finite-dimensional vector space' is a genuine imprecision. This is a minor but real overstatement.
- **Proposed fix:** 有限次元ベクトル空間 $V$ 上の有限線形群 $G\subset GL(V)$ で $|G|$ が $K$ で可逆なとき、不変式環 $K[V]^{G}$ が多項式環になるのは $G$ が鏡映群（pseudo-reflection group）のときに限る（シュヴァレー＝シェパード＝トッド）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Ferrari's method correspondence to the normal series is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (フェラーリの解法)
- **Detail:** The supplement claims the quartic solution corresponds to the normal series $S_{4}\trianglerighteq A_{4}\trianglerighteq V_{4}\trianglerighteq\{1\}$. But Ferrari's method uses the resolvent cubic, whose root $\theta$ generates the fixed field of $G\cap V_{4}$; the tower obtained is $K\subset K(\theta)\subset K(\theta,\sqrt{D})\subset\dots$, corresponding to $S_{4}\trianglerighteq V_{4}$-type subgroups, not literally to the displayed series $S_{4}\trianglerighteq A_{4}\trianglerighteq V_{4}\trianglerighteq\{1\}$. The series $S_{4}\trianglerighteq A_{4}\trianglerighteq V_{4}\trianglerighteq\{1\}$ is a composition series with abelian factors, but Ferrari's actual tower of radicals does not follow this series step by step (the step $A_{4}\trianglerighteq V_{4}$ has quotient $C_{3}$, and the step $S_{4}\trianglerighteq A_{4}$ quotient $C_{2}$ corresponds to adjoining $\sqrt{D}$, while the resolvent cubic corresponds to $V_{4}$). The claim 'これと対応する' is thus an oversimplification: the resolvent cubic corresponds to the subgroup $V_{4}$ (or $G\cap V_{4}$), not to the full displayed series.
- **Proposed fix:** 4 次方程式のフェラーリの解法は、分解 3 次式の根 $\theta$（$V_{4}$ に対応）と $\sqrt{D}$（$A_{4}$ に対応）を順に添加する塔 $K\subset K(\theta)\subset K(\theta,\sqrt{D})\subset\dots$ に対応する。これは $S_{4}\trianglerighteq A_{4}\trianglerighteq V_{4}\trianglerighteq\{1\}$ の可解列を反映するが、各段階がそのまま正規列の各因子に対応するわけではない。
- **Reported:** 2026-10-28 (10fede1)
