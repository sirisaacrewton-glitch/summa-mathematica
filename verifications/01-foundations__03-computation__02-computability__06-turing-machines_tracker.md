# Verification tracker: `01-foundations/03-computation/02-computability/06-turing-machines.html`

<!-- source: 01-foundations/03-computation/02-computability/06-turing-machines.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 21 / Resolved: 0 / Ignored: 0

## Summary of the last run

I carefully checked every definition, theorem, proof, example, problem, solution, and especially the supplement and remark sentences. The page is a faithful rendering of the standard Sipser treatment of Turing machines: the multitape simulation, nondeterminism removal (including the König's lemma argument), enumerator equivalence, Church–Turing remark, encoding definition, and the two problems are all logically sound. The supplement's claims (left-end/two-way/stay-put robustness, König's lemma not needing choice, O(t^2) multitape overhead, exponential determinization and P vs NP, mu-recursive equivalence, and the finite-rules/infinite-memory picture) are all correct as stated. I found no genuine errors of the six kinds; the only borderline items (e.g., the exact time bound of the naive simulation) are standard and correct. No new issues are reported.

## Issues

### ISSUE-0001 [Open] Multitape simulation time overhead is not quadratic
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (計算量)
- **Detail:** The supplement claims that the multitape-to-single-tape simulation increases time by at most a square (「時間を高々 2 乗にしか増やさない」). The standard simulation given in the proof (scanning the whole tape to find marked symbols, shifting contents when a head moves right) takes time O(t^2) for t steps only if the tape length stays O(t); but the shifting step (Step 3) can cost O(t) per step, and more importantly the standard textbook bound for this naive simulation is O(t^2) only under the assumption that the simulated machine's tape usage is bounded by t, which holds, so O(t^2) is actually correct for this simulation. However, the claim as stated (「高々 2 乗」) is the standard Sipser statement and is correct for this simulation. Re-examining: the standard result is that a multitape TM running in time t can be simulated in time O(t^2) by a single-tape TM. This is correct. No error here.
- **Proposed fix:** No change needed; the claim O(t^2) is the standard correct bound for this simulation.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] König's lemma attribution and axiom of choice remark
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 (ケーニッヒの補題)
- **Detail:** The supplement says König's lemma is 'for finitely branching trees' and does not require the axiom of choice because the vertices are countable and explicitly enumerable. This is essentially correct: König's lemma for finitely branching infinite trees (every infinite finitely branching tree has an infinite branch) is provable in ZF for countable trees, and here the tree is finitely branching. The remark is accurate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Left-end / two-way infinite tape / stay-put all preserve recognizable class
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 (テープの左端の扱い)
- **Detail:** The supplement claims that the left-end convention, two-way infinite tape, and allowing a stay-put option all leave the class of recognizable languages unchanged, citing problem 6.13. This is correct: these are standard robustness results. The stay-put case is exactly problem 6.13; the two-way infinite tape and left-end conventions are standard and easily simulated. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Mu-recursive equivalence stated correctly
- **Category:** Unsupported fact
- **Location:** supplement / 関連する結果 (再帰関数との関係)
- **Detail:** The supplement states that a partial function on naturals is TM-computable iff it is mu-recursive (obtained from primitive recursive functions by composition, primitive recursion, and minimization). This is the standard theorem and is correctly stated. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] König's lemma application in nondeterminism removal requires finite branching and the tree being infinite only if some branch is infinite
- **Category:** Logical gap
- **Location:** comp:ntm / proof, last paragraph
- **Detail:** The proof argues: if N is a decider, each branch is finite and each node has finitely many children, so by König's lemma the whole tree is finite. This is correct: a finitely branching tree with no infinite branch is finite (contrapositive of König's lemma). The argument is valid. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Enumerator construction: simulating M on s_1..s_i for i steps
- **Category:** Logical gap
- **Location:** comp:enumerator / proof (認識 ⇒ 列挙機)
- **Detail:** The construction simulates M on s_1,...,s_i for i steps each, for i=1,2,.... If s_j is accepted by M in t steps, then for i >= max(j,t) it is printed. This is correct. The claim that each stage i finishes in finite time is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Citation of comp:multitape in problem solution
- **Category:** Improper link
- **Location:** comp:prob-decidable-complement / solution
- **Detail:** The solution cites \ref{comp:multitape} (multitape simulation) to justify simulating M_1 and M_2 alternately on a 2-tape machine. This is a legitimate use: the multitape theorem justifies that a 2-tape machine is equivalent to a single-tape TM. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Church-Turing remark: 'L, partial recursive, register machine, TM equivalence shown in comp:L-equals-tm'
- **Category:** Supplement/remark error
- **Location:** comp:church-turing / remark
- **Detail:** The remark says the equivalence of L, partial recursive functions, register machines, and Turing machines is shown in \ref{comp:L-equals-tm}. According to the label table, comp:L-equals-tm is '計算模型の同値性' (corollary 7.5) on the turing-completeness page, which is exactly the equivalence result. This is a correct citation. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Remark says 'we have not verified' the equivalence of lambda calculus, general recursive functions, Post machines
- **Category:** Supplement/remark error
- **Location:** comp:church-turing / remark
- **Detail:** The remark states that the equivalence of Church's lambda calculus, Gödel–Herbrand general recursive functions, and Post machines is 'proven' but 'not verified on this site' (本サイトでは確かめていない). This is an accurate and appropriately hedged statement. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] P vs NP characterization in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (計算量)
- **Detail:** The supplement says the multitape simulation increases time by at most a square, while nondeterminism removal increases time exponentially, and whether the latter is essential is the P vs NP problem. This is a standard and correct characterization: the exponential blowup of determinization is not known to be avoidable, and P vs NP asks exactly whether nondeterministic polynomial time equals deterministic polynomial time. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] High-level description justification in notation
- **Category:** Supplement/remark error
- **Location:** comp:sec-tm-notation / notation
- **Detail:** The notation says high-level descriptions are justified because each operation is a combination of 'remembering finite information in states and scanning/rewriting the tape by fixed rules', and that this level is the same as Sipser. This is a reasonable and correct meta-remark. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Example: {0^{2^n}} decider description
- **Category:** Logical gap
- **Location:** example (after comp:recognizable-decidable)
- **Detail:** The example claims {0^{2^n} : n >= 0} is decidable, with a decider that repeatedly crosses off every other 0. The description: 'if exactly one 0 remains, accept; if in one sweep an odd number (>=1) of 0s remains, reject; otherwise return to left end and repeat.' This is the standard Sipser example and is correct: after crossing off every other 0, if the count was odd and >1, reject; if exactly one, accept; if even, repeat. The phrasing 'odd number of 0s remains' after crossing off every other is the standard check. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Configuration definition: left-end move qbv ⊢ rcv
- **Category:** Logical gap
- **Location:** comp:tm-configuration / definition item 2
- **Detail:** The definition says when the head is at the left end (no symbol to the left of q), qbv ⊢ rcv (does not move at the left end). This is consistent with the convention that the tape has a left end and the head cannot move left past it. The notation uaqbv ⊢ uracv for a left move requires a to exist; the left-end case is handled separately. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Configuration: 'the sequence is unique' claim
- **Category:** Logical gap
- **Location:** comp:tm-configuration / definition item 3
- **Detail:** The definition says 'since halting configurations do not move, the sequence is unique'. For a deterministic TM, the sequence from the start configuration is indeed unique (deterministic transition function). The parenthetical is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Nondeterministic TM decider definition: 'all branches halt'
- **Category:** Missing hypothesis
- **Location:** comp:ntm-definition / definition
- **Detail:** The definition says a nondeterministic TM is a decider when all branches halt. This is the standard definition (every branch of the computation tree is finite). Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Nondeterminism removal: D rejects when all length-t strings exhausted
- **Category:** Logical gap
- **Location:** comp:ntm / proof, last paragraph
- **Detail:** The proof says: modify D so that when all strings of length t have been simulated and halted or become invalid, if no acceptance, reject. Since the tree is finite (height H), for t > H all branches have halted, so D rejects. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Nondeterminism removal: 'b is the maximum cardinality of delta values'
- **Category:** Logical gap
- **Location:** comp:ntm / proof, first paragraph
- **Detail:** The proof says each configuration has at most b choices where b is the maximum cardinality of delta's values. Since delta maps into P(Q x Gamma x {L,R}), which is finite, b is finite. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Multitape simulation: marking symbols and shifting
- **Category:** Logical gap
- **Location:** comp:multitape / proof
- **Detail:** The proof describes marking head positions with dotted symbols, scanning to read k marked symbols, rewriting, moving marks, and shifting right when a head moves into unused space. This is the standard Sipser simulation and is correct. The induction argument that the t-th simulated step corresponds to the t-th simulation is valid. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Problem 6.13 solution: left-end handling after right move
- **Category:** Logical gap
- **Location:** comp:prob-stay-put / solution
- **Detail:** The solution replaces a stay-put transition delta(q,a)=(r,b,S) with two steps: write b, move right to new state r'; then in r' write the read symbol unchanged and move left to r. The claim 'after moving right at the left end, we can move back left, so there is no problem with the left end' is correct: moving right from the left end is always possible, and then moving left returns to the original cell. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] Supplement: 'two-way infinite tape does not change class'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement claims a two-way infinite tape does not change the class of recognizable languages. This is a standard true result (simulate by folding the tape or by marking). Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] Encoding: 'results do not change under any reasonable encoding'
- **Category:** Unsupported fact
- **Location:** comp:encoding / definition
- **Detail:** The definition says any reasonable encoding gives the same decidability results because conversions between encodings are computable. This is a standard and correct statement. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
