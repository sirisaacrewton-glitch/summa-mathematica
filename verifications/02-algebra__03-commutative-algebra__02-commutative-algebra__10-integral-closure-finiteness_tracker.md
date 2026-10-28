# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/10-integral-closure-finiteness.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/10-integral-closure-finiteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Z[i] is not isomorphic to Z^2 as a ring
- **Category:** Supplement/remark error
- **Location:** Introduction paragraph (before 記法と定義の確認)
- **Detail:** The introduction says 「代数的整数環 O_L が Z^{[L:Q]} と同型になるのはこの特別な場合である」. As rings, O_L is never isomorphic to Z^{n} for n>1 (Z^{n} has zero divisors and is not a domain). The intended statement is that O_L is a free Z-module of rank [L:Q], i.e. isomorphic to Z^{[L:Q]} as an abelian group / Z-module. As written it is false.
- **Proposed fix:** Replace with: 「代数的整数環 $\mathcal{O}_{L}$ が $\Z$ 加群として $\Z^{[L:\Q]}$ と同型（階数 $[L:\Q]$ の自由 $\Z$ 加群）になるのはこの特別な場合である。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] AC is used in the Noether finiteness theorem via algebraic closure / maximal ideals
- **Category:** Supplement/remark error
- **Location:** notation (選択公理) and hypcheck of ring:noether-finiteness
- **Detail:** The notation block asserts 「有限性の定理には使わない」 and the hypcheck says 「選択公理：使っていない（代数閉包の代わりに十分大きな分解体の中で議論できる）」. But the proof of ring:noether-finiteness invokes ring:integral-closure-finite, whose proof uses the nondegeneracy of the trace form via Dedekind's lemma and, more importantly, the whole development relies on taking algebraic closures and on the existence of maximal ideals (which itself needs AC in general). Even granting the 'sufficiently large splitting field' workaround, the claim that AC is not used is at best imprecise and overstated; the standard statement of Noether's finiteness theorem is in ZF plus some choice, and the page's own proof of Step 3 uses an algebraic closure. The blanket assertion 'not used' is not justified.
- **Proposed fix:** Soften to: 「選択公理：付値環の存在（ツォルンの補題）と極大イデアルの存在で使う。有限性の定理の証明では代数閉包（ないし十分大きな分解体）と極大イデアルの存在を用いるが、ツォルンの補題を本質的に使うのは付値環の構成のみである。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Nagata example attribution in hypcheck is vague/misleading
- **Category:** Supplement/remark error
- **Location:** hypcheck of ring:noether-finiteness
- **Detail:** The hypcheck says 「一般のネーター整域では整閉包は有限とは限らない（\ref{ring:nagata-examples} に関連する永田の例）」. The cited fact 9.4 is titled 「正規化がネーターでない例（ナガタ）」, which is about non-Noetherian normalization, not directly about the integral closure failing to be finite over a Noetherian domain. The pointer is a non-logical \ref used as if it supported the claim; the actual Nagata counterexample (a Noetherian domain whose integral closure in a finite extension of its fraction field is not finite) is a different example. This is an imprecise side comment.
- **Proposed fix:** Replace with: 「一般のネーター整域では整閉包は有限生成とは限らない（永田の反例。体上有限生成という仮定が本質的である）。」 and drop the \ref to ring:nagata-examples, or cite a source that actually states the Nagata counterexample about non-finite integral closure.
- **Reported:** 2026-10-28 (8ccef3d)
