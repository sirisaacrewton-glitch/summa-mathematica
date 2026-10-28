# Verification tracker: `01-foundations/03-computation/01-automata/01-finite-automata.html`

<!-- source: 01-foundations/03-computation/01-automata/01-finite-automata.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main definitions, the subset construction, the closure proof, and the two problems are logically sound. The only genuine concern is in the supplement: the claim that a purely universal (all-computations-accept) finite automaton recognizes only regular languages is stated too loosely and, depending on interpretation (alternation), can be false or at least imprecise; it should be reformulated as the complement-of-NFA statement or restricted to alternating finite automata. The Myhill–Nerode statement and the monoid-action remarks are correct.

## Issues

### ISSUE-0001 [Open] Universal (all-path) acceptance does not characterize only regular languages
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement claims that a machine accepting a word iff *all* computations accept (a universal finite automaton) recognizes only regular languages. This is false: universal branching with existential nondeterminism (or with alternation) yields alternating finite automata, which recognize exactly the regular languages only when there is no alternation between existential and universal states. A purely universal NFA (all transitions must lead to acceptance) is actually equivalent to the *complement* of an NFA-recognizable language, hence still regular — but the statement as written ("全称的な有限オートマトンも正規言語だけを認識する") is at best imprecise and, if alternation is allowed, outright false (alternating finite automata with both ∃ and ∀ still give regular languages, but a universal machine alone recognizes co-regular = regular languages, so the claim needs the precise formulation). The sentence is stated too loosely to be correct as a characterization.
- **Proposed fix:** Replace with: "NFA の受理条件を『すべての計算が受理する』に変えた全称的な有限オートマトンが認識する言語は、NFA が認識する言語の補集合であり、したがってやはり正規言語である（正規言語は補集合で閉じているため）。存在状態と全称状態を混在させた交替性有限オートマトンも正規言語のみを認識することが知られている。"
- **Reported:** 2026-10-28 (8ccef3d)
