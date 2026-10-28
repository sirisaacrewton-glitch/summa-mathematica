# Verification tracker: `01-foundations/03-computation/02-computability/01-language-L.html`

<!-- source: 01-foundations/03-computation/02-computability/01-language-L.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Bounded-counter model is not equivalent to finite automata
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that if variable values are bounded by N (saturating addition), the state space is finite and 'what can be computed is essentially the same as finite automata'. This is imprecise/false. A finite automaton recognizes languages (decides membership with a single input word), whereas an L program with bounded counters computes a function N^k -> N (or decides a set) with k numeric inputs. With a fixed bound N the number of states is finite, so the computed function is finite-state in the sense of being computable by a finite-state transducer / read-only machine, but it is not 'the same as a DFA'. Moreover the number of inputs k is unbounded, so the class is not literally finite automata. The comparison to DFA (\ref{comp:dfa}) is a mechanically inserted, misleading link.
- **Proposed fix:** Replace with: 'If we bound the values of variables by a fixed N (e.g. saturating addition at N), the set of states becomes finite, so every L program then computes a function recognizable by a finite-state device (a finite automaton with output / finite transducer); in particular only finitely many distinct input-output behaviours per fixed arity are possible. This is much weaker than the unbounded model.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Two-register machine claim needs input/output coding caveat stated correctly
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The bullet says 'with 2 registers, if inputs and outputs are suitably coded, all computable functions can be computed (Minsky)'. Minsky's theorem is that two-counter machines (with a specific instruction set including conditional decrement/zero-test) are universal. But the statement as phrased ('if inputs and outputs are coded') is vague: universality holds for the coded function, and the coding (e.g. pairing via 2^a 3^b) must be fixed and computable. As stated it is essentially correct but the phrase 'if inputs and outputs are suitably coded' understates that the machine computes the *coded* function, not the original function on N^k directly. This is borderline; the main concern is that it is stated as established fact without the precise hypothesis (the register machine must allow zero-test on a register, which L's while does).
- **Proposed fix:** State precisely: 'A register machine with only two registers (two-counter machine) is universal: for a suitable computable coding of tuples into a single natural number, every computable function can be computed by a two-counter machine. This requires a zero-test instruction, which corresponds to L's while loop.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Denotational/small-step semantics claim stated without qualification
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, second bullet
- **Detail:** The bullet asserts that small-step and denotational semantics 'give the same partial map [[P]]'. For small-step this is fine, but for denotational semantics to coincide one needs a suitable domain (e.g. the flat/partial-map order with the fixed-point construction described later in the same supplement) and a proof; asserting equality without qualification is an unsupported claim. It is not false, but it is stated more strongly than justified here (no proof, no reference).
- **Proposed fix:** Weaken to: 'Small-step operational semantics and a denotational semantics based on the least-fixed-point construction described below yield the same partial map [[P]]; the agreement is proved by induction on derivations / by the fixed-point characterization.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Kleene fixed point: Phi^n(empty) description
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から, fixed-point paragraph
- **Detail:** The text says 'Phi^n(empty) knows only executions terminating within n iterations'. More precisely, the n-th approximant corresponds to executions that terminate after at most n unfoldings of the while rule, i.e. at most n loop iterations *along the whole computation including nested loops*, not merely 'n iterations of this loop'. For a single while loop it is n iterations, but the parenthetical is stated generally and can mislead. Also the claim that the least fixed point equals the union of the chain is correct (Kleene), so no error there; only the gloss is imprecise.
- **Proposed fix:** Replace the parenthetical with: 'Phi^n(empty) is defined exactly on states from which the loop terminates using at most n applications of the while rule (for a single loop, at most n iterations).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Functoriality remark is informal and slightly wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から, last sentence
- **Detail:** The sentence 'categorically, [[P;Q]] = [[Q]] o [[P]], so the semantics behaves like a functor into the category of partial maps' is informal. It is essentially correct (L's programs form a category / the semantics is a functor to the category of sets and partial maps), but 'behaves like a functor' is vague and the direction of composition is stated correctly. This is a minor imprecision rather than a mathematical error; flagging as overstated ('behaves like' vs 'is').
- **Proposed fix:** State: 'The semantics is a functor from the category whose objects are natural numbers (numbers of variables) and whose morphisms are L programs (up to extensional equality) to the category of sets and partial maps, since [[P;Q]] = [[Q]] o [[P]] and identities are respected.'
- **Reported:** 2026-10-28 (10fede1)
