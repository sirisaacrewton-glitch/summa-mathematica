# Verification tracker: `01-foundations/03-computation/02-computability/12-recursion-theorem.html`

<!-- source: 01-foundations/03-computation/02-computability/12-recursion-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] MIN_TM infinite justification is wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement justifies that $\mathit{MIN}_{\mathsf{TM}}$ is infinite by saying 'there are infinitely many languages, and machines recognizing different languages are different'. This only shows there are infinitely many machines (or infinitely many equivalence classes), not that there are infinitely many *minimal* machines. The argument as stated does not establish that $\mathit{MIN}_{\mathsf{TM}}$ is infinite; the correct reason is that for each length bound there is a minimal machine longer than it (e.g. a language whose shortest recognizer exceeds any given length, which follows from the existence of languages requiring arbitrarily long machines). The stated reasoning is a non sequitur.
- **Proposed fix:** Replace with: 'For every $n$ there is a minimal machine with $\lvert\langle M\rangle\rvert > n$: since there are only finitely many machines of length $\le n$ but infinitely many decidable languages, some decidable language has no recognizer of length $\le n$; among its recognizers take one of minimal length, which is minimal and longer than $n$. Hence $\mathit{MIN}_{\mathsf{TM}}$ is infinite.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Data/program identification attributed to universal machine existence
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：引用と使用
- **Detail:** The supplement claims that 'being able to represent data and programs by the same string (the existence of a universal machine) is what makes self-reference possible'. This overstates the role of the universal machine. Self-reference in the recursion theorem relies on the smn theorem / the ability to compute $q$ and to construct machines that write their own description; a universal machine is not needed (the SELF construction uses only $q$ and composition, not a universal TM). The identification of data and program strings is a coding fact, not the existence of a universal machine.
- **Proposed fix:** Replace with: 'The key is that a machine's description is itself a string that can be written as data and also interpreted as a program; this coding of machines by strings, together with the computability of $q$ (and the smn theorem), is what enables self-reference. A universal machine is not required for this.'
- **Reported:** 2026-10-28 (8ccef3d)
