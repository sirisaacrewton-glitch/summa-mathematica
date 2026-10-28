# Verification tracker: `01-foundations/03-computation/04-complexity/13-primality-branching.html`

<!-- source: 01-foundations/03-computation/04-complexity/13-primality-branching.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proof (Miller-Rabin witness counting, PRIMES in coRP, read-once branching program arithmetization, EQ_ROBP in coRP) is logically sound. The problems are concentrated in the supplement: the claim that the witness fraction is at least 3/4 is false (n=9 gives only 1/4 witnesses), and the claim that polynomial-size branching programs capture L is imprecise (they capture NL in general).

## Issues

### ISSUE-0001 [Open] Witness fraction 3/4 claim is false
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that the fraction of witnesses (condition 2) is actually known to be at least 3/4. This is false: for n = 9 (p = 9, s = 1, l = 3), the witnesses among Z_9^+ = {1,...,8} are only a = 2, 5 (a^1 = 2, 5, then 4, 7, then 7, 4, then 1, 1; the last non-1 term is 7 or 4, not -1 = 8), so 2 out of 8 = 1/4 are witnesses, far below 3/4. The correct known bound for the strong (Miller-Rabin) test is that at most 1/4 of bases are non-witnesses, i.e. the witness fraction is at least 3/4 only for the strong liar bound in the standard formulation with the full set of bases, but even that standard result concerns non-witnesses <= 1/4 for odd composites; however for n=9 the non-witness fraction is 6/8 = 3/4, contradicting the claimed 3/4 witness fraction. The statement as written is false.
- **Proposed fix:** Replace with: 素数判定については、条件 2 の証人でない元（強擬素数）の割合は高々 1/4 であることが知られている（ここでは非証人の割合が 1/2 以下であることだけを示した）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Branching program equivalence coNP-complete attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that equivalence of general (non-read-once) branching programs is coNP-complete, citing Sipser problem 10.21. This is imprecise: equivalence of general branching programs (with no restriction) is actually in coNP and is coNP-complete only when the branching programs are allowed to be arbitrary (which they are), but the standard result is that equivalence of read-once branching programs is in coRP while equivalence of general branching programs is coNP-complete — this part is actually correct. However, the claim that polynomial-size branching programs capture L (logspace) is correct (Barrington's theorem relates to NC1, but polynomial-size branching programs with bounded width capture L; general polynomial-size branching programs capture L only for oblivious/width-bounded). The statement 'polynomial-size branching programs compute exactly the languages in L' is not accurate: polynomial-size branching programs (unrestricted width) capture NL, not L. This is a genuine error.
- **Proposed fix:** Correct to: 多項式サイズの分岐プログラム（幅を制限しないもの）は NL に属する言語を計算でき、幅を制限した分岐プログラムは L に対応する。
- **Reported:** 2026-10-28 (8ccef3d)
