# Verification tracker: `01-foundations/05-proof-theory/06-second-order-arithmetic/02-aca0-conservativity.html`

<!-- source: 01-foundations/05-proof-theory/06-second-order-arithmetic/02-aca0-conservativity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall. The proofs of arithmetical induction, the translation lemma, the definable-expansion lemma, conservativity, and the Con(PA) corollary are correct. The only genuine error found is in the supplement's analogy with set theory: it claims NBG is a conservative extension of ZF for set-theoretic statements, which is false because NBG proves Con(ZF). All other remarks, the hypcheck, and the stated facts were checked and found correct.

## Issues

### ISSUE-0001 [Open] NBG is not a conservative extension of ZF
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (NBG)
- **Detail:** The supplement claims that NBG is a conservative extension of ZF for statements about sets. This is false: NBG proves Con(ZF) (via the satisfaction/truth predicate for sets, using class comprehension and class induction), so NBG is not conservative over ZF. The correct classical result is that NBG is a conservative extension of ZF *without* the axiom of choice (or more precisely, NBG is conservative over ZF for set-theoretic statements only when one restricts to the fragment; the standard statement is that NBG is a conservative extension of ZFC for set-theoretic statements, but NBG proves Con(ZF), so it cannot be conservative over ZF). Actually the precise correct statement: NBG is conservative over ZF for set-theoretic sentences *if* one drops the global choice / uses the version without the axiom of choice; with the axiom of choice NBG is conservative over ZFC. But NBG proves Con(ZF), so it is NOT conservative over ZF. The analogy drawn here is therefore wrong.
- **Proposed fix:** Replace with: '集合論では、クラスを扱う NBG 集合論は、選択公理を含む形では ZFC の保存拡大である（集合についての文に関して）ことが知られている。ただし NBG は Con(ZF) を証明できるので、ZF の保存拡大ではない（ACA₀ が Con(PA) を証明しないのとは対照的である）。'
- **Reported:** 2026-10-28 (8ccef3d)
