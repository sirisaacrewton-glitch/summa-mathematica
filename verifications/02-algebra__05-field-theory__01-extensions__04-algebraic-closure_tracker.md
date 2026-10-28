# Verification tracker: `02-algebra/05-field-theory/01-extensions/04-algebraic-closure.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/04-algebraic-closure.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions, Artin's construction, existence, embedding and uniqueness theorems) is logically sound: hypotheses of cited results (Kronecker, splitting field existence, transitivity, relative algebraic closure, Zorn, maximal ideal existence, extension lemma) are properly verified, and the proofs are correct. The only genuine problem is in the supplement, where the claim that the axiom of choice can be avoided for countable fields is overstated/imprecise.

## Issues

### ISSUE-0001 [Open] Countable field case still needs some choice
- **Category:** Supplement/remark error
- **Location:** supplement / 選択公理について
- **Detail:** The supplement claims that for a countable field one can avoid the axiom of choice by arranging the variables countably and carrying out the construction concretely. This is overstated. Even with countably many variables, the construction uses the existence of a maximal ideal (Krull's theorem, which relies on Zorn/AC) and, in the countable case, a countable choice to pick roots or to pick maximal ideals at each stage. The standard fact is that 'every field has an algebraic closure' is not provable in ZF alone; only in specific well-orderable/concrete situations (e.g. using a fixed algebraic closure of a countable field built via a specific enumeration with dependent choices) can one reduce the use of choice, but not eliminate it in the naive way described. The blanket claim '選択公理を避けられる' is imprecise/false as stated.
- **Proposed fix:** Replace with: '可算体 $K$ の場合でも、極大イデアルの存在や各段階での根の選択に選択公理（の弱い形）を用いる。ただし $K$ を可算に列挙して構成を具体的に書き下せば、使う選択の形を従属選択公理程度に弱められる。'
- **Reported:** 2026-10-28 (8ccef3d)
