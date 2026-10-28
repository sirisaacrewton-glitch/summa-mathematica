# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/05-multiple-integrals.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/05-multiple-integrals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, lemmas, the multivariable Lebesgue criterion, Jordan measurability) is logically sound: citations match their targets, the choice-free constructions are consistent, and the proofs' steps follow. The only genuine issues are two imprecise statements in the closing supplement: the claim that Jordan volume is 'not countably additive' should be phrased as failure of countable additivity on the Jordan measurable sets, and the Riemann-to-Lebesgue comparison should carry the boundedness hypothesis explicitly. No previously reported issues are open.

## Issues

### ISSUE-0001 [Open] Countable additivity claim about Jordan volume is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says the Jordan volume is finitely additive but not countably additive, illustrating with example 3's E = Q²∩[0,1]² being a countable union of points each of volume 0 while E has no volume. The illustration is fine, but the phrasing '体積は有限加法的だが、可算加法的ではない' is slightly overstated: countable additivity is a property that only makes sense for a measure defined on a σ-algebra; for Jordan content the correct statement is that it is not countably additive on the class of Jordan measurable sets (a countable union of Jordan measurable sets need not be Jordan measurable, and even when it is, the volume need not equal the sum). As stated it could be read as claiming that for any countable family of Jordan measurable sets with Jordan measurable union the volume fails to add — which is not what is meant and is not literally true in all cases (e.g. finitely many nonzero-volume pieces plus null pieces).
- **Proposed fix:** ジョルダン測度は有限加法的だが、可算加法的ではない：ジョルダン可測集合の可算和はジョルダン可測とは限らず、また可測であっても体積が各項の体積の和に一致するとは限らない（例 3 の $E$ は 1 点集合の可算和で、各 1 点の体積は $0$ だが $E$ は体積をもたない）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Riemann integrable implies Lebesgue integrable needs boundedness/properness caveat
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement states 'リーマン積分可能な関数はルベーグ積分可能で値が一致する'. On this page Riemann integrability is only defined for bounded functions on boxes, so within that scope the statement is correct. However, stated without the boundedness hypothesis it is false for improper Riemann integrals (e.g. sin(x)/x on [0,∞) is improperly Riemann integrable but not Lebesgue integrable). Since the supplement is a general side remark, the missing hypothesis should be made explicit.
- **Proposed fix:** 有界な関数が（直方体上で）リーマン積分可能ならルベーグ積分可能で値が一致する（広義リーマン積分可能でもルベーグ積分可能とは限らない）。
- **Reported:** 2026-10-28 (10fede1)
