# Verification tracker: `01-foundations/03-computation/04-complexity/03-np-complete-problems.html`

<!-- source: 01-foundations/03-computation/04-complexity/03-np-complete-problems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The proofs (CLIQUE, IS/VC, SUBSET-SUM reductions) are logically sound, the digit/no-carry argument is correct, and the hypcheck items are accurate. The main genuine problems are in the supplement: the categorical claim that NP-complete problems are a greatest element/terminal object of NP is false (they form a maximum equivalence class, and a greatest element would require reductions to all NP problems), and the binary-search bullet conflates an oracle-based optimization with polynomial-time solvability. The fixed-k CLIQUE bullet is correct.

## Issues

### ISSUE-0001 [Open] NP-complete problems are not a greatest element/terminal object
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から：還元は翻訳辞書)
- **Detail:** The supplement claims that in the preorder whose morphisms are polynomial-time reductions, NP-complete problems are the 最大元 (終対象, terminal object) of the part NP. This is wrong. A terminal object would require a reduction from every NP problem *to* the NP-complete problem, which is true, but a greatest element also requires that the NP-complete problem reduces to every other element, which is false (e.g. no reduction from an NP-complete problem to a problem in P unless P=NP). Moreover, NP-complete problems are mutually reducible, so they form a *maximum equivalence class* (a greatest class in the quotient), not a single terminal object; and the direction of ≤_P makes them minimal, not maximal, depending on convention. The statement as written is false.
- **Proposed fix:** Replace with: 「多項式時間還元を射とする前順序（の同値類への商）の中で、NP 完全問題は NP 全体を下から支配する同値類、すなわち NP の『最も難しい』類をなす（すべての NP 問題からそこへの射をもち、その類の任意の二つは互いに還元し合う）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Binary search claim for minimum vertex cover needs decision oracle, not just NP-completeness
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討, second bullet)
- **Detail:** The bullet says the minimum vertex cover optimization problem can be solved by binary search using the NP-complete decision problem. This is imprecise: binary search on k using the decision problem VC (does G have a vertex cover of size ≤ k) finds the *minimum size* in polynomial time given an oracle, but actually computing a minimum vertex cover (the set itself) requires self-reduction, and more importantly the statement conflates 'NP-complete decision problem' with 'having a polynomial-time algorithm'. As written it could be read as claiming the optimization problem is solvable in polynomial time, which is false unless P=NP. The intended meaning (an oracle for the decision version yields the optimum via binary search) should be stated explicitly.
- **Proposed fix:** 「頂点被覆の大きさを『最小』とした最適化問題は、判定問題 VC のオラクルがあれば二分探索で最適値を求められる（ただしオラクル自体は多項式時間で計算できるとは限らないので、これは P=NP を主張しない）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] k-CLIQUE fixed-parameter claim: O(N^k) is polynomial only for fixed k, wording ok but 'polynomial time' ambiguous
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討, first bullet)
- **Detail:** The bullet states that fixing k as a constant makes k-CLIQUE decidable in polynomial time by checking binom(N,k)=O(N^k) subsets. This is correct for each fixed constant k (the exponent depends on k). The statement is essentially fine, but 'k を定数に固定した' should be understood as k not part of the input; the phrasing is acceptable. No error to report here beyond noting it is correct.
- **Proposed fix:** No change needed; statement is correct for fixed constant k.
- **Reported:** 2026-10-28 (10fede1)
