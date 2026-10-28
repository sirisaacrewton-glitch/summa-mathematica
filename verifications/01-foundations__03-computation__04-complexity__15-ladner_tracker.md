# Verification tracker: `01-foundations/03-computation/04-complexity/15-ladner.html`

<!-- source: 01-foundations/03-computation/04-complexity/15-ladner.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] NP degrees dense claim misattributed / overstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that 'the NP degrees under polynomial-time mapping reductions are dense' is known (attributed to Ladner). Ladner's theorem gives that if P≠NP there is an NP-intermediate set, and one can build infinitely many incomparable NP-intermediate degrees, but the standard statement is not that the NP degrees (or the NP-intermediate degrees) are dense in the strong order-theoretic sense. The precise known result (Ladner) is that there are infinitely many pairwise incomparable NP-intermediate languages, and that NP-intermediate degrees are not a single degree; 'dense' is an overstatement unless carefully qualified (and it is not a standard attribution to Ladner in this form).
- **Proposed fix:** Replace with: 'the same delayed diagonalization shows that, assuming P≠NP, there are infinitely many pairwise incomparable NP-intermediate languages (equivalently, NP-intermediate degrees are not unique); this is due to Ladner.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Padding 'too long makes problem easy' claim imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says 'if the padding is too long the problem becomes easy (solvable by brute force on the short problem)'. This is imprecise: SAT_H with a very long padding is not in general solvable in polynomial time by brute force; brute force on ψ costs 2^{|ψ|}, which is polynomial in the padded length only when the padding is at least exponential in |ψ| (i.e. H(n) ≥ n suffices, but 'too long' must be quantified). As stated ('余白が長すぎれば問題は簡単になる') it is an overstatement without the quantitative condition.
- **Proposed fix:** Replace with: 'if the padding is long enough that n^{H(n)} ≥ 2^{n} (e.g. H(n) ≥ n), then SAT_H is solvable in polynomial time by brute-force search over assignments to ψ, since 2^{n} ≤ |padded input|.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Friedberg–Muchnik description as 'recognizable sets' with degrees other than 0 and 0'
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement describes Friedberg–Muchnik as showing 'recognizable sets have Turing degrees other than 0 and 0''. The theorem states there exist two computably enumerable sets that are Turing-incomparable, hence there are c.e. degrees strictly between 0 and 0'. Saying 'other than 0 and 0'' is vague but the real issue is the analogy claim 'Ladner's theorem is the complexity version' combined with 'Ladner's theorem only holds under P≠NP' — the latter is fine, but the analogy is stated as fact. More importantly, the phrase '認識可能な集合のチューリング次数に 0 と 0' 以外がある' is acceptable, but the claim that Ladner's theorem is 'the complexity version' of Friedberg–Muchnik is a loose analogy presented as established; it is a reasonable remark but the precise correspondence (density of c.e. degrees vs. existence of intermediate) is not exact.
- **Proposed fix:** Soften to: 'Friedberg–Muchnik shows there are two Turing-incomparable c.e. sets, so there are c.e. degrees strictly between 0 and 0'; Ladner's theorem is often viewed as an analogue in complexity theory, though the precise correspondence is only heuristic.'
- **Reported:** 2026-10-28 (8ccef3d)
