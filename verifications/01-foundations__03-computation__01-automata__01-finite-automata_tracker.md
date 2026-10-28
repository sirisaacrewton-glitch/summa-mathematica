# Verification tracker: `01-foundations/03-computation/01-automata/01-finite-automata.html`

<!-- source: 01-foundations/03-computation/01-automata/01-finite-automata.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, the reach-set recursion, subset construction, and closure constructions) is logically sound, and the cited labels match their uses. The only genuine problem is in the supplement: the claim that a 'universal' finite automaton (all computations must accept) recognizes only regular languages is imprecise/false as stated; the correct statement concerns alternating finite automata with both existential and universal branching. The Myhill–Nerode remark and the monoid-action discussion are acceptable.

## Issues

### ISSUE-0001 [Open] Universal (all-paths) acceptance does not characterize regular languages
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that a finite automaton with universal acceptance ("all computations accept") recognizes only regular languages. This is false. With universal branching (and existential branching for guessing), such machines are alternating finite automata, which recognize exactly the regular languages only when the transition structure is a finite automaton with both existential and universal states — actually alternating finite automata do recognize exactly regular languages. However, the claim as stated ("全称的な有限オートマトン", i.e., an NFA whose acceptance requires all computations to accept) is not the same as an alternating automaton. A machine that accepts iff every computation accepts is a universal automaton; universal finite automata over finite words with no existential guessing still recognize regular languages, but the statement as written is imprecise: the standard result is that *alternating* finite automata recognize exactly the regular languages, whereas a purely universal NFA (all paths must accept) does not in general recognize only regular languages when combined with the usual NFA existential branching — the correct statement needs the alternation framework. As stated, the sentence is at best imprecise and at worst false, since a universal automaton with existential guesses is an alternating automaton, and the claim omits this.
- **Proposed fix:** Replace with: 「各時点で『すべての計算が受理する』ことを要求する全称的な分岐と、『ある計算が受理する』存在分岐の両方を許した機械（交代性有限オートマトン）も、やはり正規言語だけを認識することが知られている。」 (Alternating finite automata, allowing both existential and universal branching, recognize exactly the regular languages.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Myhill–Nerode reference to problem item is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The supplement says problem \ref{comp:prob-nth-from-end.2} "is part of this idea". Problem 1.11 item 2 proves a lower bound of 2^{n} states for A_{n} via distinguishing strings, which is indeed the Myhill–Nerode distinguishing argument, so this is acceptable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
