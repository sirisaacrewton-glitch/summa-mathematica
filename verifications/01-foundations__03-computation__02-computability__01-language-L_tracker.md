# Verification tracker: `01-foundations/03-computation/02-computability/01-language-L.html`

<!-- source: 01-foundations/03-computation/02-computability/01-language-L.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Bounded-variable model is not 'essentially a finite automaton'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that if variable values are bounded by N (saturating addition at N), the state space is finite and 'what can be computed is essentially the same as a finite automaton (\ref{comp:dfa})'. This is imprecise/overstated. A finite automaton recognizes languages (decides membership with a one-way read-only input); a bounded-counter program with saturating arithmetic over a fixed finite state space computes exactly the functions computable by a finite-state transducer / finite automaton with output, i.e. functions whose value depends only on a bounded amount of information. But the input is still read as a natural number, and with a fixed bound N the program can still perform a number of steps depending on the input length (e.g. iterate over the input value), so it is not literally 'the same as a DFA'. The identification of the model with DFAs is not justified and conflates decision (languages) with computation (functions).
- **Proposed fix:** Replace with: 'If we bound the variable values by $N$ (saturating addition at $N$, etc.), the state space becomes finite, and the computable functions are exactly those computable by a finite-state machine with output (a finite automaton equipped with output); in particular the decision problems solvable are exactly the regular languages (\ref{comp:dfa}).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Two-register machine claim needs the input/output coding caveat stated precisely
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The bullet says 'in register machines, even with 2 registers ... all computable functions can be computed (Minsky)'. As stated this is misleading: with only two registers one cannot directly hold k inputs and an output; the standard Minsky result is that two registers suffice provided inputs and outputs are encoded (e.g. by a pairing/Gödel coding) into a single number. The parenthetical 'if inputs and outputs are coded cleverly' partially covers this, but the sentence 'all computable functions can be computed' with 2 registers is literally false without the coding hypothesis, since a 2-register machine computes functions of one argument (on coded inputs).
- **Proposed fix:** State: 'With two registers, using a pairing (Gödel) coding of the input tuple into one number and decoding the output, every computable function can be computed (Minsky); without such coding a two-register machine computes only functions of a single argument.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Kleene fixed-point / least-fixed-point description of while
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：while は最小不動点
- **Detail:** The claim that the while semantics is the least fixed point of $\Phi$ obtained as the union of $\varnothing\sqsubseteq\Phi(\varnothing)\sqsubseteq\cdots$ is essentially correct, but the accompanying statement '$\Phi^{n}(\varnothing)$ knows only executions terminating within $n$ rounds' is imprecise: $\Phi^{n}(\varnothing)$ captures executions that terminate after at most $n$ iterations of the while loop, which is correct, but the text also asserts the whole thing is 'the same form as the least solution of language equations (\ref{comp:page-fixed-points})' and 'a functor-like behavior'. The 'functor' remark is informal and the direction of composition $[\![P;Q]\!]=[\![Q]\!]\circ[\![P]\!]$ is stated correctly, but calling it 'functor-like' while the category of partial maps is only mentioned loosely is an overstatement. More importantly, the claim that $\mathcal{D}$ with the extension order 'has suprema of increasing chains' is true, but the text does not note that $\Phi$ must be continuous (it is, since it is built from $[\![P]\!]$ and case distinction), which is needed for Kleene's theorem; without continuity the union formula need not give the least fixed point.
- **Proposed fix:** Add: '$\Phi$ is continuous (monotone and preserving suprema of increasing chains), because it is defined by composition with the fixed partial map $[\![P]\!]$ and a case distinction; hence by Kleene's fixed point theorem the least fixed point is $\bigsqcup_{n}\Phi^{n}(\varnothing)$.'
- **Reported:** 2026-10-28 (8ccef3d)
