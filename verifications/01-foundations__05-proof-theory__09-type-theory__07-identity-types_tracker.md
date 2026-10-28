# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/07-identity-types.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/07-identity-types.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definition of the identity type and J, the derivations of symmetry/transitivity/ap/transport, the groupoid laws, functoriality of ap, apd, Σ-η, contractibility of the based path space, and the UIP fact are all sound. Two problems were found, both in side remarks: the remark claiming based path induction is equivalent to full path induction is false (based path induction is strictly weaker), and the supplement's claim that extensional type theory makes type checking undecidable is imprecise (it is type inference that becomes undecidable).

## Issues

### ISSUE-0001 [Open] Based path induction does not imply full path induction
- **Category:** Supplement/remark error
- **Location:** remark 基点付き道帰納法
- **Detail:** The remark claims that based path induction and full (Martin-Löf) path induction are equivalent, and that full path induction can be derived from based path induction. This is false: based path induction is strictly weaker than the full J rule. In the groupoid model, based path induction holds (based path spaces are contractible) while full J fails (UIP is not derivable), so the two are not inter-derivable. The forward direction (based path induction from contractibility of the based path space) is correct, but the converse claim is wrong.
- **Proposed fix:** Replace the last sentence with: "逆に、道帰納法（$J$）から基点付き道帰納法は直ちに導ける（$C$ を $x$ に依存しない族とみなす）。しかし逆向きは一般には成り立たず、基点付き道帰納法は道帰納法より真に弱い（亜群モデルでは基点付き道帰納法は成り立つが UIP は成り立たない）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Extensional type theory and decidability of type checking
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement states that in extensional type theory (with the reflection rule) type checking becomes undecidable. This is imprecise: with the reflection rule, type checking is decidable (it reduces to definitional equality, which is decidable in the presence of the reflection rule); what becomes undecidable is type inference / the general problem of deciding whether a given term has a given type without annotations, and in particular the reflection rule makes type checking depend on deciding equality of arbitrary terms. The blanket claim that 'type checking becomes undecidable' is not accurate as stated.
- **Proposed fix:** Rephrase: "外延的型理論では型検査（特に注釈なしの型推論）が決定不能になることが知られている" and clarify that the decidability lost is that of type inference, not of the fully annotated typing judgment.
- **Reported:** 2026-10-28 (8ccef3d)
