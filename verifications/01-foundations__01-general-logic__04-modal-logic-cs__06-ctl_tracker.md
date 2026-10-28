# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/06-ctl.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/06-ctl.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the expressiveness remark: the claim that $\mathbf{AF}\,\mathbf{AG}\,p$ is 'strictly stronger' than $\mathbf{A}\mathbf{F}\mathbf{G}p$ is stated without the correct implication direction and without noting that $\mathbf{AF}\,\mathbf{AG}\,p \Rightarrow \mathbf{A}\mathbf{F}\mathbf{G}p$ is valid while the converse fails (the latter being exactly what Problem 6.31 demonstrates). All other supplements, remarks, facts and proofs were checked (the fulfilment lemma, fragment construction, truth lemma, soundness/completeness, decidability, and the LTL-separation arguments) and found acceptable.

## Issues

### ISSUE-0001 [Open] AF AG p is not strictly stronger than A F G p
- **Category:** Supplement/remark error
- **Location:** remark (sec-ctl-expressiveness), item 2
- **Detail:** The remark claims that $\mathbf{AF}\,\mathbf{AG}\,p$ is strictly stronger than $\mathbf{A}\mathbf{F}\mathbf{G}p$. In fact $\mathbf{AF}\,\mathbf{AG}\,p \to \mathbf{A}\mathbf{F}\mathbf{G}p$ is valid: if some state on every path satisfies $\mathbf{AG}p$, then on every path there is a position from which $p$ holds forever, i.e. $\mathbf{F}\mathbf{G}p$ holds. So $\mathbf{AF}\,\mathbf{AG}\,p$ implies $\mathbf{A}\mathbf{F}\mathbf{G}p$; it is not 'strictly stronger' in the sense of implying something incomparable or being a strictly stronger property that fails where the other holds. The intended point (that the converse fails, i.e. $\mathbf{A}\mathbf{F}\mathbf{G}p \not\to \mathbf{AF}\,\mathbf{AG}\,p$) is what problem 6.31's example shows. The wording '真に強い' (strictly stronger) is at best imprecise and, read as 'implies but is not implied', is actually correct only in the direction $\mathbf{AF}\,\mathbf{AG}\,p \Rightarrow \mathbf{A}\mathbf{F}\mathbf{G}p$; but the sentence as written suggests $\mathbf{AF}\,\mathbf{AG}\,p$ is the stronger of the two, which is the correct direction, yet the surrounding context (comparing with the LTL formula $\mathbf{F}\mathbf{G}p$) makes the claim ambiguous. The real error is that the remark does not state the correct relationship: $\mathbf{AF}\,\mathbf{AG}\,p$ implies $\mathbf{A}\mathbf{F}\mathbf{G}p$ but not conversely.
- **Proposed fix:** Replace with: '$\mathbf{AF}\,\mathbf{AG}\,p$ implies $\mathbf{A}\mathbf{F}\mathbf{G}p$ (if every path eventually reaches a state satisfying $\mathbf{AG}p$, then every path eventually satisfies $\mathbf{G}p$), but the converse fails: in the model of Problem 6.31, $\mathbf{A}\mathbf{F}\mathbf{G}p$ holds at $0$ while $\mathbf{AF}\,\mathbf{AG}\,p$ does not. Hence $\mathbf{AF}\,\mathbf{AG}\,p$ is strictly stronger than $\mathbf{A}\mathbf{F}\mathbf{G}p$.'
- **Reported:** 2026-10-28 (8ccef3d)
