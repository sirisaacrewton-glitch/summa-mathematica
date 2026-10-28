# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/12-mu-model-checking.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/12-mu-model-checking.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proof (correctness of the evaluation game) and the NP ∩ coNP corollary are sound, and the problem solutions check out. The only genuine problems are in the side remark on complexity: the stated naive-iteration bound uses nesting depth $k$ rather than alternation depth, which is both non-standard and internally inconsistent with the following sentence, and the Emerson–Lei attribution is imprecise. No issues in the definitions, lemmas, or the correctness theorem were found.

## Issues

### ISSUE-0001 [Open] Incorrect complexity bound for naive iteration
- **Category:** Supplement/remark error
- **Location:** remark (after logic:mu-model-checking-np-conp), item 1
- **Detail:** The remark claims the naive iteration costs about $O(|A|\cdot|S|^{k}\cdot(|S|+\sum_{a}|R_{a}|))$ where $k$ is the nesting depth of $\mu$/$\nu$. This is not the standard bound. The standard naive algorithm (Emerson–Lei / iterative fixpoint) has complexity $O(|A|\cdot|S|^{d+1}\cdot(|S|+\sum_{a}|R_{a}|))$ where $d$ is the alternation depth (number of alternations between $\mu$ and $\nu$), not the nesting depth. For nested fixpoints of the same type (no alternation), the inner iteration need not be redone from scratch, so the cost is polynomial of degree depending on alternation depth, not nesting depth. The stated bound with $k$ = nesting depth overcounts for non-alternating nesting, contradicting the very next sentence which says non-alternating nesting can be improved. The two sentences are inconsistent: if the bound already used nesting depth $k$, then non-alternating nesting would already be handled.
- **Proposed fix:** The naive iteration costs about $O(|A|\cdot|S|^{d+1}\cdot(|S|+\sum_{a}|R_{a}|))$ where $d$ is the alternation depth (the number of alternations between least and greatest fixpoints). For non-alternating nesting the inner iteration can be restarted from the previous stage's result, giving a lower degree (Emerson–Lei 1986).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Emerson–Lei attribution for non-alternating nesting improvement
- **Category:** Supplement/remark error
- **Location:** remark (after logic:mu-model-checking-np-conp), item 1
- **Detail:** The remark attributes to Emerson–Lei 1986 the improvement for non-alternating nesting. Emerson–Lei 1986 ('Efficient model checking in fragments of the propositional mu-calculus') is the source of the $O(|A|\cdot|S|^{d+1})$ alternation-depth algorithm, i.e. the improvement concerns alternation depth, not merely non-alternating nesting. The claim as phrased is imprecise about what Emerson–Lei actually established.
- **Proposed fix:** Emerson–Lei (1986) gave an algorithm whose complexity is polynomial of degree determined by the alternation depth, improving on the naive iteration that redoes inner fixpoints at every outer stage.
- **Reported:** 2026-10-28 (10fede1)
