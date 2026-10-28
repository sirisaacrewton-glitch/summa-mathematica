# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/01-alpha-equivalence.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/01-alpha-equivalence.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definition, equivalence-relation proof, characterization, substitution compatibility, semantic and derivability invariance) is logically sound and the citations match their targets; the hypcheck comments are accurate. The only genuine issue is a slightly inaccurate remark in the supplement about which properties substitution fails to preserve. No serious logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Claim that substitution preserves only some properties is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says substitution 'has only some of these properties (capture, invariance of bound variables)'. But the basic substitution φ[s/x] does preserve logical complexity c(φ[s/x])=c(φ) (logic:substitution-basic), and it does not change bound variables in the sense that BV(φ[s/x])=BV(φ) (logic:substitution-basic.4). The real defect of substitution as a definition device is that it is not a bijection on variables and can capture free variables, so it does not commute with the structural recursion uniformly. The stated reason ('束縛変数の不変') is misleading: invariance of bound variables is actually a property substitution does have, and it is not a defect.
- **Proposed fix:** Replace with: '代入は変数上の全単射ではないため、束縛変数の付け替えを一様に扱えず、また自由変数の捕獲が起こりうる。そのため定義に使うと補題の証明で場合分けが増える（複雑さや束縛変数の集合自体は代入で保たれる）。'
- **Reported:** 2026-10-28 (8ccef3d)
