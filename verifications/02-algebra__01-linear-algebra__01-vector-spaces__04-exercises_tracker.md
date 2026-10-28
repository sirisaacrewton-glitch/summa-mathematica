# Verification tracker: `02-algebra/01-linear-algebra/01-vector-spaces/04-exercises.html`

<!-- source: 02-algebra/01-linear-algebra/01-vector-spaces/04-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The exercise page is largely correct: all computational solutions check out (independence of $v_1,v_2,v_3$, the subspace bases, the change-of-basis matrix, the commutator kernel/image, the dual basis, the row-reduction general solution, the LU decomposition, the inverse, and Sylvester's inequality). Two genuine issues were found: the idempotent-map solution omits the final trace argument that the problem explicitly requests, and a parenthetical remark in the parameterized-rank exercise makes an overstated general claim about determinants and rank. No improper links or missing hypotheses were found; the cited dimension formula is used appropriately.

## Issues

### ISSUE-0001 [Open] Missing trace conclusion in idempotent solution
- **Category:** Logical gap
- **Location:** lin:ex-lm-5 / solution
- **Detail:** The problem asks to show in particular that $\mathrm{tr}\,T=\mathrm{rank}\,T\cdot 1$ (as an element of the field). The solution constructs a basis in which the matrix is $\mathrm{diag}(1,\dots,1,0,\dots,0)$ with $\mathrm{rank}\,T$ ones, but never states that the trace equals the sum of diagonal entries, so the final claim is not actually derived.
- **Proposed fix:** Add: 'Since the trace is the sum of the diagonal entries of any representing matrix, in this basis $\mathrm{tr}\,T = 1+\cdots+1+0+\cdots+0 = \mathrm{rank}\,T$ (as an element of $k$).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misleading parenthetical about rank when det A = 0
- **Category:** Supplement/remark error
- **Location:** lin:ex-re-2 / solution
- **Detail:** The remark '($\det A=0$ でも階数が $2$ にならないことに注意。)' is imprecise: it is true only for this specific matrix, but stated as a general caution it suggests that a vanishing determinant never gives rank 2, which is false (e.g. $\mathrm{diag}(1,1,0)$ has determinant $0$ and rank $2$). As a side comment it is an overstated claim.
- **Proposed fix:** Replace with: 'For this particular matrix, when $a=1$ all entries are $1$, so the rank drops all the way to $1$ (not $2$); in general a vanishing determinant can of course still give rank $2$.'
- **Reported:** 2026-10-28 (10fede1)
