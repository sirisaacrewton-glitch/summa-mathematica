# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/03-kan.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/03-kan.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Pointwise Kan extensions are not 'preserved by any functor'
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says pointwise Kan extensions have good properties such as being 'preserved by any functor' (任意の関手で「保存される」). This is false as stated: a pointwise right Kan extension is computed as a limit over a comma category, and a general functor does not preserve limits. What is true is that pointwise Kan extensions are preserved by any functor that preserves the relevant limits (e.g. a right adjoint, or more generally a limit-preserving functor), and that pointwise Kan extensions are characterized by being preserved by the representables / by the Yoneda embedding. The blanket 'any functor' claim is an overstatement.
- **Proposed fix:** Replace with: 「各点的なカン拡張は、対応する極限を保存する任意の関手（たとえば右随伴）で保存される。より正確には、各点カン拡張は米田埋め込み（表現可能関手による評価）で保存されることで特徴づけられる。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Discrete-category non-existence example is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The claim that when M, C, A are all discrete and K is not surjective, the Kan extension 'does not exist' because the value on C∖K(M) 'cannot be chosen universally in A' is imprecise. In the discrete (Set-valued, A = Set or a complete discrete target) case the pointwise formula still gives a value at every c: Ran_K T(c) = product over the fiber, Lan_K T(c) = coproduct over the fiber, and these exist in Set (the empty product is the terminal object, the empty coproduct the initial object). So a right/left Kan extension does exist in Set even when K is not surjective; what fails is only that it is not a genuine 'extension' in the sense of recovering T, or existence fails only when A lacks the relevant (co)products. The stated reason ('cannot choose universally') and the blanket non-existence are both wrong.
- **Proposed fix:** Replace with: 「$"mathbf{A}$ が必要な（余）積をもたないと、カン拡張は存在しないことがある。たとえば $"mathbf{A}$ が完備でないとき、$K$ が全射でなければ $c"in"mathbf{C}"setminus K("mathbf{M})$ 上の値は空の（余）積となり、これが存在しなければカン拡張も存在しない。$"mathbf{A}="mathbf{Set}$ の場合は空積・空余積が存在するので常に存在するが、$K$ が全射でなければ $T$ の真の拡張にはならない。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Left adjoint as right Kan extension: direction of the formula
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement states the adjoint functor theorem formula as 'the left adjoint of G is Fx = Lim((x↓G)→A)' and then says 'the left adjoint of G is the right Kan extension of the identity along G'. These two statements are inconsistent in their variance: the limit over (x↓G) computes a right Kan extension, and the standard result is that a right adjoint G has its left adjoint F given by the pointwise formula Fx = colim over (G↓x) (a left Kan extension), while the right Kan extension of the identity along G, Ran_G(1), equals the right adjoint when it exists. Presenting 'left adjoint = right Kan extension of identity along G computed as a limit over (x↓G)' conflates the two and is not correct as written.
- **Proposed fix:** Replace with: 「$G$ の左随伴 $F$ は $Fx="mathrm{Colim}((G"downarrow x)"to"mathbf{A})$（恒等関手の $G$ に沿った左カン拡張）で与えられ、右随伴は $\mathrm{Ran}_{G}(1)$（$(x"downarrow G)$ 上の極限）で与えられる。」
- **Reported:** 2026-10-28 (10fede1)
