# Verification tracker: `01-foundations/03-computation/01-automata/03-nonregular.html`

<!-- source: 01-foundations/03-computation/01-automata/03-nonregular.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The core results (pumping lemma, Myhill–Nerode theorem, minimal-DFA uniqueness, the examples and the problem solutions) are correct and properly justified. The genuine problems are confined to the closing supplement: the claim that $M_{A}$ is a terminal object in the category of reachable DFAs is false (the map exists and is unique only for minimal DFAs; in general it is a quotient map, not a terminal object), and the description of the syntactic monoid conflates the two-sided syntactic congruence with the merely right-congruence $\equiv_{A}$. Both should be corrected.

## Issues

### ISSUE-0001 [Open] M_A is not a terminal object in the category of reachable DFAs
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：普遍的なオートマトン
- **Detail:** The supplement claims that $M_{A}$ is the **terminal object** of the category of reachable DFAs recognizing $A$, i.e. that from any reachable DFA $M$ there is exactly one transition-preserving map $M\to M_{A}$. This is false. The map $h$ constructed in the proof of \ref{comp:minimal-dfa-unique} goes $Q\to Q_{A}$ and exists only when $M$ is minimal (it is a bijection there). For a non-minimal reachable DFA there are in general *several* transition-preserving maps into $M_{A}$ (e.g. $A=\{w:\lvert w\rvert\text{ even}\}$ with a 4-state reachable DFA: several states can be sent to the same class), so uniqueness fails; and the direction/uniqueness statement as written is simply wrong. $M_{A}$ is the minimal DFA, which is a *quotient* (a co-limit / initial-ish object under state-merging), not a terminal object.
- **Proposed fix:** Replace with: 「$M_{A}$ は $A$ を認識する DFA のうち状態数最小のものであり、任意の到達可能な DFA $M$ から $M_{A}$ への遷移を保つ全射準同型 $h\colon Q\to Q_{A}$ が存在する（$h(\hat\delta(q_{0},u))=[u]$）。これは状態を $\equiv_{A}$ の類にマージする商であり、$M$ が最小のとき、かつそのときに限り $h$ は全単射（同型）になる。」 (i.e. $M_{A}$ is the minimal quotient, not a terminal object; do not claim uniqueness of the map for non-minimal $M$.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Syntactic monoid condition stated with wrong equivalence relation
- **Category:** Supplement/remark error
- **Location:** supplement / 統語モノイド
- **Detail:** The supplement describes the syntactic congruence as 「左右からの連接に両立する同値関係（$xuy\in A\iff xvy\in A$）」. The displayed condition $xuy\in A\iff xvy\in A$ (for all $x,y$) is the correct syntactic congruence, but it is *not* the same as 「左右からの連接に両立する同値関係」 in general: the Myhill–Nerode relation $\equiv_{A}$ is only a *right* congruence (compatible with concatenation on the right, see \ref{comp:nerode-basic}), not a two-sided one. Identifying the two-sided syntactic congruence with the right congruence $\equiv_{A}$ is imprecise/incorrect; the syntactic monoid is the quotient by the two-sided congruence, whose finiteness is equivalent to regularity, but this is a different (finer in general) relation than $\equiv_{A}$.
- **Proposed fix:** Rewrite: 「統語合同関係 $u\sim_{A}v \iff (\forall x,y\in\Sigma^{\ast},\ xuy\in A\iff xvy\in A)$ による商 $\Sigma^{\ast}/\sim_{A}$ を統語モノイドといい、$A$ が正規であることと統語モノイドが有限であることは同値である（$\sim_{A}$ は $\equiv_{A}$ より細かい両側合同関係であることに注意）。」
- **Reported:** 2026-10-28 (8ccef3d)
