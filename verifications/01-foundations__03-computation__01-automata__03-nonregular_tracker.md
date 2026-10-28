# Verification tracker: `01-foundations/03-computation/01-automata/03-nonregular.html`

<!-- source: 01-foundations/03-computation/01-automata/03-nonregular.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] M_A is not a terminal object in the category of reachable DFAs
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：普遍的なオートマトン
- **Detail:** The supplement claims that the Myhill–Nerode automaton $M_{A}$ is the **terminal object** of the category of reachable DFAs recognizing $A$, i.e. that from any reachable DFA $M$ there is exactly one transition-preserving map $M\to M_{A}$. This is false. The map $h$ constructed in the proof of \ref{comp:minimal-dfa-unique} goes $Q\to Q_{A}$ and exists for any reachable DFA, but it is not unique in general: if $M$ has more states than $M_{A}$, several distinct states of $M$ map to the same class, and one can alter $h$ on unreachable-from-$q_{0}$-in-a-distinguishing-way states... more concretely, uniqueness of a transition-preserving map into $M_{A}$ requires $M_{A}$ to be reachable and the map to be determined by $h(q_{0})$, which holds only when $M$ is itself minimal. For a non-minimal reachable $M$ there are multiple transition-preserving maps $M\to M_{A}$ (e.g. $M$ with a duplicated state). Also, strictly, $M_{A}$ is the *initial* object in the appropriate sense (it is the quotient/minimal DFA, and there is a unique map *from* $M_{A}$ *to* any reachable DFA recognizing $A$ that preserves the start state and acceptance—this is the correct universal property). The direction stated is reversed.
- **Proposed fix:** Replace with: 「$M_{A}$ は、$A$ を認識する到達可能な DFA のなかで最小であり、任意の到達可能な DFA $M$（$A$ を認識）から $M_{A}$ への遷移を保ち $q_{0}\mapsto q_{A}$, $F\mapsto F_{A}$ を満たす全射準同型 $h$ が存在する（\ref{comp:minimal-dfa-unique}）。$M$ が最小のとき、かつそのときに限り $h$ は全単射（同型）になる。」 (i.e. state only the existence of the surjective morphism, and that it is an isomorphism iff $M$ is minimal; do not call $M_{A}$ a terminal object.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Syntactic monoid equivalence misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 統語モノイド
- **Detail:** The supplement says the syntactic congruence is 'a congruence compatible with concatenation from both sides ($xuy\in A\iff xvy\in A$)' and that its quotient is a finite monoid iff $A$ is regular. The displayed condition $xuy\in A\iff xvy\in A$ is only the definition of $u\sim_{A}v$ (the syntactic congruence) when quantified over *all* $x,y\in\Sigma^{\ast}$; as written it is ambiguous but the intended statement is correct. However the phrase 'left-right compatible equivalence relation' is imprecise: the syntactic congruence is the *coarsest* congruence saturating $A$, and the equivalence '$A$ regular $\iff$ syntactic monoid finite' is correct. The real problem is the Schützenberger attribution: the supplement says 'Schützenberger's theorem connects aperiodicity with star-free expressibility, as is known' — this is correct, but it is stated as a vague aside ('と知られている') without the necessary hypothesis that $A$ be regular (star-free expressions define only regular languages, and aperiodicity of the syntactic monoid presupposes the monoid is finite, i.e. $A$ regular). Without that hypothesis the statement is false/ill-posed.
- **Proposed fix:** 「$A$ を正規言語とし、その統語モノイドを $M_{A}$ とする。$M_{A}$ が有限であることと $A$ が正規であることは同値。シュッツェンベルガーの定理：$A$ が正規のとき、$M_{A}$ が非周期的（すべての元がある冪で冪等、すなわち群を含まない）であることと、$A$ がスターなし正規表現で書けることは同値。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Minimization algorithm remark is fine but the 'distinguishability table' claim needs the reachable-state hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The bullet says the minimal DFA 'can actually be computed from a given DFA by computing a table of distinguishability of pairs of states (minimization algorithm)'. This is essentially correct (Hopcroft/Moore table-filling), but the standard table-filling algorithm computes the minimal DFA only after first removing unreachable states; applied directly to an arbitrary DFA with unreachable states it yields the minimal *complete* DFA of the reachable part, not of the given automaton. As stated ('from a given DFA') it omits the reachability step, which is exactly the hypothesis used in \ref{comp:minimal-dfa-unique}.
- **Proposed fix:** 「与えられた DFA から、まず到達不能な状態を取り除き、その後、状態の対の区別可能性を表で計算する（Moore の表埋め法／Hopcroft の分割細分化）ことで最小 DFA が実際に求められる。」
- **Reported:** 2026-10-28 (10fede1)
