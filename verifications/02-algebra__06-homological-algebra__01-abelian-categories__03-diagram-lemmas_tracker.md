# Verification tracker: `02-algebra/06-homological-algebra/01-abelian-categories/03-diagram-lemmas.html`

<!-- source: 02-algebra/06-homological-algebra/01-abelian-categories/03-diagram-lemmas.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of the pullback-epi proposition, the member chasing rules, the five lemma, the connecting morphism lemma, and the snake lemma all appear logically sound, with hypotheses properly used and citations matching their targets. The main concern is in the supplement: the precise attribution of the naturality of the connecting morphism to "Mac Lane Chapter VIII §4 Exercise 4" is an unverifiable and likely misattributed specific claim. The short five lemma remark is correct. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Incorrect attribution of the long exact sequence exercise to Mac Lane
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement states that the connecting morphism is natural and attributes this to "Mac Lane Chapter VIII §4 Exercise 4". Mac Lane's CWM Chapter VIII §4 does discuss the snake lemma and the long exact sequence, but the specific claim that naturality of the connecting morphism is "Exercise 4" is a precise attribution that is not verifiable and is likely misattributed. More importantly, the supplement says the long exact sequence is obtained "by applying the snake lemma at each degree", which is correct, but the parenthetical attribution to a specific exercise number is an unsupported precise claim.
- **Proposed fix:** Remove the specific exercise attribution, or replace with: "連結射の自然性は標準的な事実である（Mac Lane, Categories for the Working Mathematician, 第 VIII 章 §4 を参照）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Short five lemma described as a special case of the five lemma requiring only end isomorphisms
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement says the short five lemma is a special case of the five lemma: "短完全列の射で、両端が同型なら中央も同型". This is correct as stated (both ends isomorphic implies middle isomorphic), and it is indeed a special case of the five lemma. However, the phrasing "五項補題の特別な場合" together with "両端が同型なら中央も同型" is fine. No error here on re-reading. Actually this is correct.
- **Proposed fix:** No change needed; statement is correct.
- **Reported:** 2026-10-28 (10fede1)
