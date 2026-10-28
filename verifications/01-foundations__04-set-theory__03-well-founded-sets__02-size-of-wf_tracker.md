# Verification tracker: `01-foundations/04-set-theory/03-well-founded-sets/02-size-of-wf.html`

<!-- source: 01-foundations/04-set-theory/03-well-founded-sets/02-size-of-wf.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are sound. The problems concentrate in the supplements: the claim that ZF proves AC equivalent to well-orderability of all P(α) is too strong, the Quine-atom counterexample is not a counterexample, the Kaye–Wong remark is misstated, and the rank computations in the example are asserted without justification and appear off by one. No issues in the core proofs were found.

## Issues

### ISSUE-0001 [Open] Incorrect claim that ZF proves AC equivalent to all P(α) well-orderable
- **Category:** Supplement/remark error
- **Location:** supplement after set:r-omega-plus-alpha
- **Detail:** The supplement states that in ZF (with Foundation) AC is equivalent to 'for every ordinal α, P(α) is well-orderable'. This is false: the statement 'P(α) is well-orderable for every ordinal α' is strictly weaker than AC (it is a consequence of, e.g., the well-orderable-power-set principle and does not imply AC in ZF). The cited Kunen exercise does not support this equivalence as stated. Also the claim that |R(ω+1)| 'is not determined in general' is imprecise: P(ω) always has a cardinal in the Scott sense; what fails is that it need not be an aleph.
- **Proposed fix:** Replace with: 'In ZF, AC is equivalent to the statement that $\mathcal{P}(\alpha)$ is well-orderable for every ordinal $\alpha$ **together with** the assumption that every set is equipotent to a subset of some $\mathcal{P}(\alpha)$; the mere well-orderability of all $\mathcal{P}(\alpha)$ is strictly weaker than AC. What fails without AC is only that $\lvert R(\omega+1)\rvert$ need not be an aleph.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Quine atoms are not a counterexample to being equipotent with a WF element
- **Category:** Supplement/remark error
- **Location:** supplement after set:wf-structures
- **Detail:** The supplement claims that without Foundation there can be a set (e.g. a non-well-orderable set of Quine atoms) not equipotent to any element of WF, and uses this to argue AC cannot be dropped. But a Quine atom $a=\{a\}$ is equipotent with $\{\varnothing\}\in\mathbf{WF}$ via the map $a\mapsto\varnothing$, so it is not a counterexample. The genuine failure of the theorem without AC concerns structures whose underlying set cannot be well-ordered (e.g. a group on a non-well-orderable set), not Quine atoms.
- **Proposed fix:** Replace the example with: 'Without AC there can be a group whose underlying set is not well-orderable (e.g. on an amorphous set), and such a group need not be isomorphic to any group in $\mathbf{WF}$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Kaye–Wong remark is misstated
- **Category:** Supplement/remark error
- **Location:** supplement after set:r-omega-countable
- **Detail:** The supplement says that dropping the transitive-closure assumption 'collapses' the correspondence between finite set theory and PA, citing Kaye–Wong. The Kaye–Wong result concerns which fragments of finite set theory are bi-interpretable with PA; the precise statement given here (that removing transitive closure destroys the translation) is not what the cited literature establishes and is stated too strongly.
- **Proposed fix:** Replace with: 'The precise strength of finite set theory without transitive closure relative to PA is delicate; see Kaye–Wong for the known bi-interpretability results.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Rank computations in the example are off by one
- **Category:** Supplement/remark error
- **Location:** example after set:number-systems-wf
- **Detail:** The example computes $\rank(\Z)=\omega+1$, $\rank(\Q)=\omega+4$, $\rank(\R)=\omega+5$, $\rank(\C)=\omega+7$ and concludes $\R\in R(\omega+6)\setminus R(\omega+5)$. With the stated ranks, $\rank(\R)=\omega+5$ means $\R\in R(\omega+6)\setminus R(\omega+5)$ is consistent, but the individual rank values are not justified: elements of $\Z$ are equivalence classes which are subsets of $\omega\times\omega$, so their rank is $\omega$, giving $\rank(\Z)=\omega+1$ only if the classes are unbounded in rank, which is asserted without proof; similarly the jumps to $\omega+4$ and $\omega+5$ skip the intermediate $+1$ steps without argument.
- **Proposed fix:** Either supply the rank computation for each class (showing the classes are unbounded in rank below $\omega$) or weaken the example to only assert $\R\in R(\omega+\omega)$ without the precise off-by-one values.
- **Reported:** 2026-10-28 (8ccef3d)
