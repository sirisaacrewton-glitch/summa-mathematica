# Verification tracker: `01-foundations/06-category-theory/03-monads/03-beck.html`

<!-- source: 01-foundations/06-category-theory/03-monads/03-beck.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Dual of Beck's theorem and descent theory
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says the dual of Beck's theorem (comonads/coalgebras) is the framework of descent theory, with flat descent as a typical example. This is imprecise: descent theory is the theory of the *Eilenberg–Moore adjunction of a comonad* (comonadic descent), and the relevant statement is that the base-change functor is comonadic (a comonadicity criterion, the dual of monadicity). Flat descent is the typical instance of *comonadicity* of extension of scalars, not merely of 'the dual of Beck's theorem' as a framework. As stated it is vague but not strictly false; however the phrase '降下理論の圏論的な骨組み' attributed to the dual of Beck's theorem overstates the identification. This is borderline; the claim that flat descent is 'typical' is standard and correct.
- **Proposed fix:** The dual of Beck's monadicity theorem (the comonadicity theorem for comonads and their coalgebras) underlies comonadic descent: extension of scalars along a faithfully flat ring map is comonadic, and flat descent (Grothendieck) is the typical instance.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Condition 3 characterization of non-monadicity
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The sentence '忘却関手が構造（位相）を「余等化子から復元できない」とき、モナド的でない' is stated as a general equivalence, but it is only a heuristic. Non-monadicity means failure of condition 3 (or 2), i.e. failure to create the relevant coequalizers; it is not literally that the structure 'cannot be recovered from coequalizers'. The phrasing '条件 3 は「A の構造は、G で分裂する余等化子に沿って一意に運べる」ことを要求している' is a loose paraphrase. This is a side comment stated more strongly than warranted.
- **Proposed fix:** When the forgetful functor fails to create the coequalizers of pairs whose images are split (or absolute) coequalizers, the adjunction is not monadic; condition 3 requires precisely that the structure of A can be transported uniquely along coequalizers that split after applying G.
- **Reported:** 2026-10-28 (10fede1)
