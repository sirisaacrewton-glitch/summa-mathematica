# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/11-parity-games.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/11-parity-games.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof via Zielonka's algorithm, the attractor/trap lemmas, the one-player lemma, and the NP ∩ coNP corollary are all logically sound, and the cited labels match their uses. The only genuine problem is in the intuition block, where the least/greatest fixpoint correspondence to even/odd priorities is stated in the reversed direction.

## Issues

### ISSUE-0001 [Open] Incorrect nesting direction of fixpoints in intuition
- **Category:** Supplement/remark error
- **Location:** intuition (高い視点：入れ子の不動点としての勝利領域)
- **Detail:** The intuition states that for the player who prefers priority $d$, the fixpoint is greatest if $d$ is even and least if $d$ is odd. This is backwards. In the standard μ-calculus / fixpoint characterization of parity game winning regions, the player who wants the maximum priority to be even (player 0) wins via a *least* fixpoint at even priorities and a *greatest* fixpoint at odd priorities (the alternation starts with a least fixpoint for the smallest priority, and even priorities correspond to least fixpoints, odd to greatest). Equivalently, the winning region of the player who benefits from the top priority being even is expressed with a least fixpoint at that even priority, not a greatest one. As written, the parity of the fixpoint operator is swapped.
- **Proposed fix:** For the player who benefits from priority $d$: if $d$ is even the corresponding fixpoint is a **least** fixpoint, and if $d$ is odd it is a **greatest** fixpoint (the nesting alternates, starting from the least fixpoint at the smallest priority).
- **Reported:** 2026-10-28 (8ccef3d)
