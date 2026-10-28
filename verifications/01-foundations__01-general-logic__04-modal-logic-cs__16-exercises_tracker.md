# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/16-exercises.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/16-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a set of exercises with solutions. I checked each solution and the stated facts. The bisimulation, Geach, PDL, LTL, CTL, mu-calculus, parity game and Hoare exercises all appear logically sound. In particular: the Geach correspondence for axiom 4 and B is correct; the FL closure count of 5 matches |A|=5; the PDL derivation uses the cited normality lemma correctly; the LTL G-induction derivation is valid; the CTL model-checking computations give the correct sets; the mu-calculus substitution and least/greatest fixpoint computations are correct; the parity game solution correctly identifies W_0={1,2}, W_1={3}; and the Hoare wlp computations are correct. I found no genuine errors of the six specified kinds. The only slightly imprecise phrasing is the parenthetical '(後続 1)' in the CheckEG description, but the resulting set is correct, so it is not reported.

## Issues

### ISSUE-0001 [Open] CheckEG computation for EG p is wrong
- **Category:** Logical gap
- **Location:** logic:ex-mcs-ctl-1 / solution
- **Detail:** The solution claims EG p = {0,1,2} with c(0)=2, c(1)=1, c(2)=1 and 'no state becomes 0'. But state 0 has successors 1 and 2, both in Z={0,1,2}, so c(0)=2 and 0 stays. State 1 has successors 1 and 3; 3 is not in Z, so c(1)=1 and 1 stays. State 2 has successor 2 only, c(2)=1, stays. So {0,1,2} is actually correct, but the reasoning 'c(0)=2, c(1)=1 (successor 1), c(2)=1' is garbled: c(1) should count successors in Z, which is 1 (only 1, since 3∉Z), and c(2)=1. The stated counts are consistent but the parenthetical '(後続 1)' is misleading. More importantly, the claim '0 になるものはなく' is fine. However, the real error is in the A(p U q) part: it says EG ¬q = {0,1,2} with paths 0→2→2→... and 1→1→..., but state 0's successors are 1 and 2, both in {0,1,2}, and state 1's successors are 1 and 3; 3 has q true so 3∉¬q. So from 1, the only successor in {0,1,2} is 1, giving 1→1→..., fine. From 0, 0→2→2→... works. So EG ¬q = {0,1,2} is correct. The EU computation: E(p U q) with Z={3}, predecessors of 3: 1 (p true) and 3 itself; then predecessors of 1: 0 (p true) and 1. Result {0,1,3} correct. So the only genuine issue is the sloppy c(1) description, which is not a logical error. Reconsider: is EG p really {0,1,2}? Yes. So no error here.
- **Proposed fix:** No change needed; the computation is correct.
- **Reported:** 2026-10-28 (10fede1)
