# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/01-alpha-equivalence.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/01-alpha-equivalence.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Claim that substitution preserves only some properties is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says substitution 'has only some of these properties (capture, invariance of bound variables)'. This is imprecise: capture-avoiding substitution (the one used in the site, φ[s/x]) does preserve logical complexity and does not change bound variables (BV(φ[s/x]) = BV(φ)), and it preserves free variables up to the standard formula FV(φ[s/x]) ⊆ (FV(φ)\{x}) ∪ var(s). The real reason substitution is awkward for the definition is that it does not commute with the binding operation uniformly (it may capture, and it removes x), not that it fails to preserve complexity or bound variables. As stated the parenthetical is misleading.
- **Proposed fix:** 代入は論理的複雑さや束縛変数の集合を保つが、束縛子の下では捕獲が起こりうるうえ、代入した変数 x が自由変数から除かれるため、束縛に関する一様な取り扱いが崩れる。そのため定義に使うと補題の証明で場合分けが増える。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Orbit description of alpha equivalence is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：名前の対称性
- **Detail:** The text says alpha equivalence corresponds to 'the orbit of moving only bound variables' under the action of the permutation group. Strictly, alpha equivalence is not a single orbit of the permutation action: a permutation acts on all variables including free ones, and two alpha-equivalent formulas are related by a permutation that fixes the free variables pointwise (a 'bound-variable-only' permutation), not by an arbitrary group element. The phrase '軌道に当たる' (corresponds to an orbit) is an overstatement; the correct statement is that φ ≡ ψ iff some permutation fixing FV(φ) pointwise maps φ to ψ.
- **Proposed fix:** α 同値は、自由変数を動かさない置換（束縛変数だけを動かす置換）で移り合うことと同値である、と言い換えられる。すなわち φ≡ψ であることと、FV(φ) 上で恒等的な置換 π で π·φ=ψ となるものが存在することは同値である。
- **Reported:** 2026-10-28 (10fede1)
