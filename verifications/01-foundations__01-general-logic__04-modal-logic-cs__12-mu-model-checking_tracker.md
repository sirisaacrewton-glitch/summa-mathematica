# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/12-mu-model-checking.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/12-mu-model-checking.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the corollary, and the worked problems are logically sound: the polarity lemma, the play-winner lemma, the general-strategy lemma, and the correctness proof via approximants and positional determinacy are correctly argued, and the citations match their targets. The only genuine problems are in the side remark on complexity: the stated naive-iteration bound is missing a factor of $|S|$ (exponent should be $k+1$, not $k$), and the Emerson–Lei attribution for the non-alternating optimization is imprecise. Both are medium-confidence supplement/remark errors; no logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Incorrect complexity bound for naive iteration
- **Category:** Supplement/remark error
- **Location:** remark (after logic:mu-model-checking-np-conp), item 1
- **Detail:** The remark claims the naive iteration costs about $O(|A|\cdot|S|^{k}\cdot(|S|+\sum_{a}|R_{a}|))$ where $k$ is the nesting depth of $\mu$/$\nu$. This is not the standard bound. The standard naive algorithm (Emerson–Lei / iterative fixpoint) runs in time $O(|A|\cdot|S|^{d+1}\cdot(|S|+\sum_{a}|R_{a}|))$ where $d$ is the alternation depth, or more precisely the number of nested fixpoints; the exponent should be $k+1$ (one extra factor of $|S|$ for the outer iteration over subsets), not $k$. As written, the bound omits one factor of $|S|$ and is therefore too small.
- **Proposed fix:** The naive iteration costs about $O(|A|\cdot|S|^{k+1}\cdot(|S|+\sum_{a}|R_{a}|))$, where $k$ is the nesting depth of $\mu$/$\nu$ (one factor of $|S|$ per fixpoint iteration, plus one for the outer loop).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Emerson–Lei attribution for improving nested fixpoints
- **Category:** Supplement/remark error
- **Location:** remark (after logic:mu-model-checking-np-conp), item 1
- **Detail:** The remark says that for non-alternating nesting the computation can be improved by restarting from the previous stage's result, attributing this to Emerson–Lei 1986. Emerson–Lei 1986 is the paper introducing the general fixpoint-iteration model checking algorithm with complexity measured in alternation depth; the specific optimization of reusing the previous stage's result for non-alternating nesting is a standard observation but the attribution as stated is imprecise. This is a side-comment attribution issue.
- **Proposed fix:** For non-alternating nesting the computation can be improved by restarting each inner iteration from the previous stage's result (a standard optimization; see Emerson–Lei 1986 for the alternation-depth analysis).
- **Reported:** 2026-10-28 (8ccef3d)
