# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/03-kripke-semantics.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/03-kripke-semantics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the frame correspondence theorem, soundness, the continuity theorem, and the undefinability results are all properly proved and the cited labels match their uses. The only genuine problems are in the closing supplement, where the relationship between Löb's axiom, transitivity, and converse well-foundedness is described imprecisely (suggesting transitivity is what enables modal definability of converse well-foundedness, when in fact the axiom defines the conjunction and converse well-foundedness alone is not definable), and where the comparison to the guarded fragment conflates bounded and guarded quantifiers. Both are medium-confidence side-comment issues; no errors were found in the proofs or in the stated facts.

## Issues

### ISSUE-0001 [Open] Incorrect claim that converse well-foundedness needs transitivity to be modally definable
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says that converse well-foundedness is a property that 'can only be written in combination with transitivity' via Löb's axiom. This is misleading: the frame correspondence theorem (item 5) shows that Löb's axiom defines the conjunction 'transitive and converse well-founded', not converse well-foundedness alone. The supplement's phrasing suggests that adding transitivity is what makes converse well-foundedness modally definable, which is false—the modal formula defines the conjunction, and proposition 3.17 shows converse well-foundedness alone is not modally definable. The statement conflates 'definable in combination' with 'definable alone' and is imprecise about what the correspondence actually gives.
- **Proposed fix:** Replace with: '反射性・推移性のように一階で書ける性質もあれば、逆整礎性のように一階では書けない性質もある。レーブの公理は「推移的かつ逆整礎」という性質をちょうど特徴づける（\ref{logic:frame-correspondence.5}）が、逆整礎性だけを様相論理式で特徴づけることはできない（\ref{logic:cwf-not-modal}）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated claim that modal logic is 'close to' the guarded fragment
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement states that modal logic is 'close to' the guarded fragment of first-order logic using only bounded quantifiers. While basic modal logic does translate into the guarded fragment (this is a known result), the statement as written is vague and potentially misleading: the standard translation of modal logic into first-order logic uses restricted quantifiers of the form ∀y(xRy → ...), which are guarded, but the claim that modal logic 'is' or is 'close to' the guarded fragment without qualification overstates the relationship. More importantly, the parenthetical '有界な量化子だけを使う一階論理の断片（ガードされた断片）' conflates bounded quantifiers with guarded quantifiers, which are distinct notions.
- **Proposed fix:** Replace with: 'モデル理論でいえば、様相論理の標準翻訳はガードされた量化子（\exists y(xRy\wedge\cdots), \forall y(xRy\to\cdots)）だけを用いる一階論理の断片（ガードされた断片）に属する。'
- **Reported:** 2026-10-28 (8ccef3d)
