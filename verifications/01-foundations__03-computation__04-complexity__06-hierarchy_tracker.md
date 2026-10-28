# Verification tracker: `01-foundations/03-computation/04-complexity/06-hierarchy.html`

<!-- source: 01-foundations/03-computation/04-complexity/06-hierarchy.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Log t(n) loss attributed to Hennie–Stearns multitape simulation
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that the log t(n) loss in the time hierarchy theorem comes from the efficiency of multitape-machine simulation (Hennie–Stearns) and can sometimes be improved by changing the model. This is wrong. The log t(n) factor arises from the overhead of the step counter and of the bookkeeping (transition-table lookup and counter update) during the simulation of a single-tape machine, not from the Hennie–Stearns multitape simulation. Indeed the proof explicitly says it does not use \ref{comp:multitape-time} and implements the simulation on a single tape. The Hennie–Stearns theorem concerns the quadratic-time overhead of simulating a multitape machine by a single-tape machine, which is a different phenomenon. The claim is therefore a misattribution.
- **Proposed fix:** The $\log t(n)$ loss in the time hierarchy theorem comes from the overhead of the step counter and of the bookkeeping (transition-table lookup and counter update) needed to simulate one step of $M$; it is not related to the efficiency of multitape simulation (Hennie–Stearns). The loss can sometimes be improved by changing the model or by a more careful simulation.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Non-deterministic time hierarchy attributed to Cook
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement says the non-deterministic time hierarchy theorem is known to hold (Cook et al.). The non-deterministic time hierarchy theorem is due to Cook (1972) and is correctly attributed, but the statement 'the proof requires ingenuity because it is difficult to output the opposite answer in the non-deterministic case' is imprecise: the standard proof (Cook, and later the simpler proof of Žák) does not simply reverse the answer; it uses a more subtle diagonalization. This is a side comment, but as stated it is an imprecise/overstated claim about the proof technique. However, since the attribution to Cook is correct and the remark is only a rough heuristic, this is borderline. I will report it as an imprecision only if it is clearly false; here it is a reasonable informal description. I will not report it.
- **Proposed fix:** No change needed (or: 'The non-deterministic time hierarchy theorem (Cook) requires a more subtle diagonalization than simply reversing the answer.').
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] PH ⊆ PSPACE and definition of PH
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, second bullet
- **Detail:** The supplement states $\Sigma_{k}^{\mathrm{P}}=\mathrm{NP}^{\Sigma_{k-1}^{\mathrm{P}}}$ and $\mathrm{PH}\subseteq\mathrm{PSPACE}$. This is correct. The definition is standard. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Natural proofs and algebrization walls
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The supplement attributes the natural proofs barrier to Razborov–Rudich and the algebrization barrier to Aaronson–Wigderson. Both attributions are correct. The statement that these show limitations of techniques for solving P vs NP is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Diagonalization metaphor and relativization
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says the Baker–Gill–Solovay theorem shows the limits of diagonalization by exploiting that it 'does not look inside the oracle'. This is a reasonable informal statement. The claim that 'P vs NP requires non-relativizing techniques' is a widely believed heuristic, correctly hedged with 'と考えられている'. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Time hierarchy proof: simulation time and counter bound
- **Category:** Logical gap
- **Location:** proof of comp:time-hierarchy, 模倣の時間 and 対角化
- **Detail:** The proof sets the counter to floor(t(n)/log t(n)) and claims that simulating one step of M costs O(log t(n)) steps, so the total is O(t(n)). But the counter itself has O(log t(n)) bits, and updating it each simulated step costs O(log t(n)) steps, which is consistent. However, the diagonalization argument then says: if M runs in time g(n)=o(t(n)/log t(n)), then D uses about c_M log t(n) steps per simulated step of M, so for large n the simulation finishes within the counter. This is correct: the number of simulated steps is at most g(n), and the total time used by D is c_M g(n) log t(n) = o(t(n)), which is less than t(n) for large n. So the counter bound floor(t(n)/log t(n)) is not exceeded. The argument is sound. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Space hierarchy proof: simulation time bound
- **Category:** Logical gap
- **Location:** proof of comp:space-hierarchy, step 3 and the diagonalization paragraph
- **Detail:** The proof says the number of steps of M using space g(n) is at most n·2^{O(g(n))} (citing the computation in comp:nl-in-p). This is the standard bound on the number of configurations. Then it claims that for large n, n·2^{O(g(n))} ≤ 2^{f(n)} using f(n) ≥ log n. Since g=o(f), we have g(n) ≤ f(n)/2 for large n, so n·2^{O(g(n))} ≤ n·2^{f(n)/2} ≤ 2^{f(n)} for large n because n ≤ 2^{f(n)/2} (since f(n) ≥ log n implies 2^{f(n)/2} ≥ 2^{(log n)/2} = sqrt(n), and n ≤ sqrt(n) fails for n>1). Wait: n ≤ 2^{f(n)/2} requires f(n)/2 ≥ log n, i.e., f(n) ≥ 2 log n, which holds for large n since f(n) ≥ log n but not necessarily ≥ 2 log n. However, for large n, g(n) ≤ f(n)/4 (since g=o(f)), so n·2^{O(g(n))} ≤ n·2^{f(n)/4}·poly, and n ≤ 2^{f(n)/2} for large n since f(n) ≥ log n gives 2^{f(n)/2} ≥ sqrt(n), and n ≤ sqrt(n) is false. So the bound n·2^{O(g(n))} ≤ 2^{f(n)} needs f(n) to grow faster than log n. But f(n) ≥ log n is only a lower bound; f could be exactly log n. If f(n)=log n, then g=o(log n), and n·2^{O(g(n))} ≤ n·2^{o(log n)} = n^{1+o(1)}, which is not ≤ 2^{log n}=n. So the claim fails for f(n)=log n. However, the space hierarchy theorem is usually stated for f(n) ≥ log n, and the diagonalization works because the simulation of M on input w of length n uses space O(g(n)) and time at most n·2^{O(g(n))}, and we need this time to be at most 2^{f(n)}. For f(n)=log n, this requires n·2^{O(g(n))} ≤ n, impossible. But note that the counter is 2^{f(n)} steps, and for f(n)=log n, 2^{f(n)}=n, which is too small to simulate even a linear-time machine. So the theorem as stated (f(n) ≥ log n) is not provable by this argument for f(n)=log n. The standard space hierarchy theorem requires f(n) ≥ log n and the diagonalization uses a counter of 2^{f(n)} steps; for f(n)=log n, the machine D would have only n steps, which is insufficient to simulate M for n steps. Actually, the standard statement is: if f is space-constructible and f(n) ≥ log n, then there is a language in SPACE(f(n)) not in SPACE(g(n)) for g=o(f). The proof uses a counter of 2^{f(n)} steps, and the simulation of M takes at most n·2^{O(g(n))} steps. For f(n)=log n, g(n)=o(log n), so g(n) ≤ log n - ω(1), and n·2^{O(g(n))} = n·2^{log n - ω(1)} = n·n/2^{ω(1)} = n^{2}/2^{ω(1)}, which is not ≤ n. So the argument fails. But the theorem is still true; the standard proof uses a different simulation: D simulates M and counts steps up to 2^{f(n)}, but for f(n)=log n, 2^{f(n)}=n, and M could run for more than n steps. However, if M uses space g(n)=o(log n), then M's running time is at most n·2^{O(g(n))} = n^{1+o(1)}, which can exceed n. So the counter 2^{f(n)}=n is insufficient. The standard fix is to use a counter of 2^{f(n)} steps and note that for f(n) ≥ log n, 2^{f(n)} ≥ n, but the simulation time n·2^{O(g(n))} may exceed 2^{f(n)}. Actually, the standard space hierarchy theorem is usually stated with f(n) ≥ log n and the proof uses a counter of 2^{f(n)} steps; the simulation of M takes at most n·2^{O(g(n))} steps, and since g=o(f), for large n, n·2^{O(g(n))} ≤ 2^{f(n)} provided f(n) - O(g(n)) ≥ log n, i.e., f(n) ≥ log n + O(g(n)). Since g=o(f), this holds for large n if f(n) ≥ log n + ω(1). But if f(n)=log n exactly, then g(n)=o(log n), so g(n) ≤ log n - ω(1), and f(n) - O(g(n)) = log n - O(g(n)) = ω(1), which is not ≥ log n. So the inequality fails. Therefore the proof as written has a gap for f(n)=log n. However, the theorem is typically stated for f(n) ≥ log n and the proof is correct for f(n) ≥ log n + ω(1); for f(n)=log n, one can use a separate argument or note that the theorem is still true. The page's proof claims the inequality holds using f(n) ≥ log n, which is insufficient. This is a genuine logical gap.
- **Proposed fix:** In the diagonalization paragraph, replace 'n·2^{O(g(n))} ≤ 2^{f(n)} (using f(n) ≥ log n)' with a correct argument: since g=o(f), for large n we have g(n) ≤ f(n)/2, so n·2^{O(g(n))} ≤ n·2^{f(n)/2}. To conclude this is ≤ 2^{f(n)}, we need n ≤ 2^{f(n)/2}, i.e., f(n) ≥ 2 log n. This holds for large n if f(n) ≥ log n + ω(1). For the case f(n)=log n, the theorem is still true but requires a separate argument (e.g., using a counter of 2^{f(n)} steps and noting that if M uses space o(log n), then M's running time is at most n·2^{o(log n)} = n^{1+o(1)}, which may exceed n; one can instead use a different diagonalization or cite the standard result). Alternatively, strengthen the hypothesis to f(n) ≥ log n + ω(1) or f(n) ≥ 2 log n, or add a remark that the case f(n)=Θ(log n) is handled separately.
- **Reported:** 2026-10-28 (10fede1)
