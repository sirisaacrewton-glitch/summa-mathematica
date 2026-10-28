# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/11-parity-games.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/11-parity-games.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the attractor lemma, and the NP ∩ coNP corollary are logically sound; the hypcheck comments are accurate. The genuine problems are confined to the side material: the intuition reverses the least/greatest fixed-point assignment for even/odd priorities, and the two remarks contain a misattributed venue (STOC vs FOCS 2017) and an imprecise complexity statement. No previously reported issues exist.

## Issues

### ISSUE-0001 [Open] Incorrect nesting direction of fixed points in intuition
- **Category:** Supplement/remark error
- **Location:** intuition (sec-pg-complexity)
- **Detail:** The intuition states that for the player who prefers priority $d$, the fixed point is greatest if $d$ is even and least if $d$ is odd. This is backwards. In the standard μ-calculus / nested fixed-point characterization of parity game winning regions, the player who wins when the maximal priority seen infinitely often is even (player 0) corresponds to a *least* fixed point at even priorities and a *greatest* fixed point at odd priorities (the outermost operator corresponds to the largest priority, and for player 0 the even top priority gives a least fixed point). The text's parenthetical reverses this.
- **Proposed fix:** For the player who prefers priority $d$ (i.e. player 0 when $d$ is even), the operator at priority $d$ is a *least* fixed point when $d$ is even and a *greatest* fixed point when $d$ is odd; the winning region is written as an alternating nesting of least and greatest fixed points indexed by priority, with the outermost operator corresponding to the largest priority.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misattributed quasi-polynomial algorithm reference
- **Category:** Supplement/remark error
- **Location:** remark 1 (sec-pg-complexity)
- **Detail:** The remark attributes the quasi-polynomial time algorithm for parity games to "Calude–Jain–Khoussainov–Li–Stephan, STOC 2017". The quasi-polynomial algorithm is due to Calude, Jain, Khoussainov, Li, and Stephan, but it appeared in FOCS 2017 (not STOC 2017). The attribution of venue is incorrect.
- **Proposed fix:** The quasi-polynomial time algorithm is due to Calude, Jain, Khoussainov, Li, and Stephan (FOCS 2017).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Inaccurate complexity bound for Jurdziński's progress measure algorithm
- **Category:** Supplement/remark error
- **Location:** remark 2 (sec-pg-complexity)
- **Detail:** The remark states Jurdziński's progress measure algorithm (2000) runs in $O(d\,m\,(n/\lfloor d/2\rfloor)^{\lfloor d/2\rfloor})$. Jurdziński's small progress measures algorithm has complexity $O(d\,m\,(n/\lfloor d/2\rfloor)^{\lfloor d/2\rfloor})$ only under a specific formulation; the commonly cited bound is $O(d\,m\,(n/\lfloor d/2\rfloor)^{\lfloor d/2\rfloor})$ for the number of distinct priorities $d$, but the standard statement is $O(d\,m\,(n/\lfloor d/2\rfloor)^{\lfloor d/2\rfloor})$ which is correct as stated. However the surrounding claim "$O(m\cdot n^{d})$ 程度で解く方法" combined with the precise bound is imprecise: the precise bound is the one given, and the loose $O(m n^{d})$ is a weaker overstatement that does not match the cited algorithm. This is a minor imprecision; the precise bound is correct.
- **Proposed fix:** Replace the loose phrase with the precise bound: Jurdziński's progress measure algorithm (2000) solves the game in $O(d\,m\,(n/\lfloor d/2\rfloor)^{\lfloor d/2\rfloor})$ time, where $d$ is the number of distinct priorities, $n$ the number of vertices and $m$ the number of edges.
- **Reported:** 2026-10-28 (10fede1)
