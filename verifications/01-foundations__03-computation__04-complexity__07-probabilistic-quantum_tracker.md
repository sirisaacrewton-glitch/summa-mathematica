# Verification tracker: `01-foundations/03-computation/04-complexity/07-probabilistic-quantum.html`

<!-- source: 01-foundations/03-computation/04-complexity/07-probabilistic-quantum.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the amplification lemma, Schwartz–Zippel, BPP ⊆ PSPACE, BPP ⊆ BQP, and BQP ⊆ PSPACE proofs are sound, and the hypcheck comments are accurate. The main genuine problems are in the supplement: the Grover optimality result is misattributed to BBHT (the lower bound is due to BBBV/Boyer–Brassard–Høyer–Tapp/Zalka), and the BQP-vs-NP discussion is imprecise about the known oracle separation. The mid-circuit measurement remark is acceptable as stated.

## Issues

### ISSUE-0001 [Open] Grover optimality misattributed to BBHT
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (Grover)
- **Detail:** The supplement says the Θ(√N) optimality of the number of queries is known by Bennett–Bernstein–Brassard–Vazirani. BBHT (1996) gave a bounded-error algorithm with O(√N) queries but did not prove optimality. The matching lower bound Ω(√N) is due to Bennett–Bernstein–Brassard–Vazirani (1997) for the exact case and to Boyer–Brassard–Høyer–Tapp (1998) / Zalka (1999) for the bounded-error case. Attributing the optimality result to BBHT alone is a misattribution.
- **Proposed fix:** The Θ(√N) optimality of the query complexity is known (lower bound by Bennett–Bernstein–Brassard–Vazirani 1997 for exact search, and by Boyer–Brassard–Høyer–Tapp 1998 / Zalka 1999 for bounded-error search).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] BQP vs NP: 'neither known' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (BQP と NP)
- **Detail:** The text states that whether BQP contains NP and whether NP contains BQP are both unknown. The second is actually known: NP ⊄ BQP is not known, but more importantly it is known that BQP ⊆ PSPACE and there are oracle separations; however the claim 'NP が BQP を含むかは知られていない' is technically true but the phrasing 'どちらも知られていない' alongside the first is misleading because it is known that BQP does not contain NP relative to an oracle (Bennett–Bernstein–Brassard–Vazirani), and unconditionally NP ⊆ BQP would imply NP ⊆ PSPACE which is not known to be false but is widely believed false. The stronger issue: the sentence implies symmetry of ignorance, but relative to an oracle NP ⊄ BQP is proven, so the two questions are not on equal footing.
- **Proposed fix:** Whether NP ⊆ BQP is open. Whether BQP ⊆ NP is also open. However, there is an oracle relative to which NP ⊄ BQP (Bennett–Bernstein–Brassard–Vazirani 1997), so the two questions are not symmetric.
- **Reported:** 2026-10-28 (8ccef3d)
