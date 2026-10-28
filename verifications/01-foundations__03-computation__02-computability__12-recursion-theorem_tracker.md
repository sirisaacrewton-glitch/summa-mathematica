# Verification tracker: `01-foundations/03-computation/02-computability/12-recursion-theorem.html`

<!-- source: 01-foundations/03-computation/02-computability/12-recursion-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] MIN_TM infinite justification is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement justifies "MIN_TM is infinite" by saying "there are infinitely many languages, and machines recognizing different languages are different." This only shows there are infinitely many machines, not that there are infinitely many *minimal* machines. The actual argument needs: for each length n there is a minimal machine of length > n (take any language, its minimal machine exists; or take a language whose minimal machine is long). The proof in comp:min-tm uses the stronger fact that arbitrarily long minimal machines exist, which the supplement's stated reason does not establish.
- **Proposed fix:** For every length $n$ there is a minimal machine $M$ with $|\langle M\rangle|>n$: among all machines longer than $n$, pick one whose language has a shortest description; that shortest description is a minimal machine of length $>n$. Hence $\mathit{MIN}_{\mathsf{TM}}$ is infinite (indeed unbounded in length).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Data/program identification attributed to universal machine
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：引用と使用
- **Detail:** The supplement claims that "being able to represent data and programs by the same string (the existence of a universal machine) makes self-reference possible." The existence of a universal machine is not what enables self-reference here; what is used is the computability of the encoding/decoding (the smn/print-machine mechanism, i.e. that $q$ and the composition $AB$ are computable). A universal machine is not invoked in the SELF construction at all. This overstates the role of the universal machine.
- **Proposed fix:** What enables self-reference is that the encoding $\langle\cdot\rangle$ is computable and that machines can be composed computably (the print-machine lemma and the smn theorem): the same string $\langle B\rangle$ can be treated once as data (written by $A$) and once as a program (run by $B$).
- **Reported:** 2026-10-28 (10fede1)
