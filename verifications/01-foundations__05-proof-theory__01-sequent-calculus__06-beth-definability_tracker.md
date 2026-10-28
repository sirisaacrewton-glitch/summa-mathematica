# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/06-beth-definability.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/06-beth-definability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Finite structures: Beth fails but interpolation holds
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 / 有限構造
- **Detail:** The supplement claims that restricting to finite structures makes both interpolation and Beth's theorem fail in general. This is wrong for interpolation: Craig interpolation holds in finite model theory (the finite version of Craig's theorem is valid, e.g. via the finite model property of the interpolant or standard arguments). It is Beth's definability theorem that fails over finite structures (the finite Beth property fails; there are finite structures where implicit definability does not yield explicit definability). So the sentence conflates the two and overstates the failure of interpolation.
- **Proposed fix:** 構造を有限のものに制限すると、ベートの定義可能性定理は一般には成り立たなくなる（有限ベート性の失敗）ことが知られている。一方、クレイグの補間定理は有限構造の意味論でも成り立つ（有限モデル理論。本サイトでは扱わない）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Categorical restatement of implicit definability
- **Category:** Supplement/remark error
- **Location:** supplement / 圏論的に言い直すと
- **Detail:** The supplement says that implicit definability corresponds to the forgetful functor from the category of models of $T$ to the category of $\mathcal{L}$-structures being injective on objects. Implicit definability says that any two models of $T$ with the same $\mathcal{L}$-reduct have the same $P$-interpretation, i.e. the forgetful functor is injective on objects only up to the fact that two distinct $T$-models cannot share the same $\mathcal{L}$-reduct unless they are literally equal. That is indeed injectivity on objects, but the phrase '対象について単射' is acceptable. However the second half, 'then $T$ is a definitional expansion of some $\mathcal{L}$-theory', is imprecise: Beth gives that $T$ is equivalent to a definitional expansion of $T\restr{\mathcal{L}}$ (its $\mathcal{L}$-reduct theory), not merely 'some $\mathcal{L}$-theory'. As stated ('ある理論') it is too weak/vague and slightly misstates the result.
- **Proposed fix:** 忘却関手が対象について単射である（暗の定義）ならば、$T$ はその $\mathcal{L}$ への縮小 $T\restr{\mathcal{L}}$ の定義による拡大になっている（明示的な定義）、ということである。
- **Reported:** 2026-10-28 (8ccef3d)
