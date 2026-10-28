# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/01-elementary-substructures.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/01-elementary-substructures.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Skolemization does not make elementary substructures exactly the closed subsets
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement claims that if all Skolem functions are added to the language (Skolemization), then elementary substructures are exactly the subsets closed under all operations, i.e. the algebraic substructures. This is false. Closure under Skolem functions gives only the Tarski–Vaught condition for the *Skolemized* language, and even then one must also require closure under the original constants/functions and non-emptiness; more importantly, being a substructure of the Skolemized expansion closed under the Skolem functions yields an elementary substructure of the original structure only when the Skolem functions are the ones built from the original language's formulas (which is the case), but the identification 'elementary substructure = closed subset' is imprecise: a subset closed under all operations of the Skolemized language is a substructure of the Skolem hull, and it is elementary in the original M, but the converse direction (every elementary substructure is closed under the Skolem functions) requires the Skolem functions to be *definable* / chosen so that they take values in every elementary substructure, which is not automatic for an arbitrary choice of Skolem functions. As stated ('exactly'), the claim is overstated.
- **Proposed fix:** Replace with: 'If one adds to the language Skolem functions chosen so that each Skolem function is definable (or at least so that every elementary substructure is closed under them), then a subset containing the constants and closed under all functions of the expanded language is the universe of an elementary substructure of the original structure; this is the content of the Tarski–Vaught argument used in the downward theorem.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] DC claim in the choice remark is asserted without justification and is imprecise
- **Category:** Supplement/remark error
- **Location:** model:downward-ls-choice-remark
- **Detail:** The remark states that the countable case (countable language, countable A) can be proved with DC instead of AC, adding '本サイトでは未確認'. This is a stated-only claim about a nontrivial set-theoretic fact. It is essentially correct in the literature (the downward LS theorem for countable languages is provable in DC), but the remark also says the proof above uses a choice function on all subsets of M rather than 'countable choice', which is accurate; however the parenthetical '(本サイトでは未確認)' combined with the assertion is a side comment making an unverified mathematical claim. Since it is flagged as unverified, it is borderline; but the precise statement 'provable in DC' should be attributed or hedged more carefully, and the claim that the weak form needs no choice at all ('選択公理は要らない') for logic:ls-downward-weak is itself a substantive claim that may need qualification (it typically needs some choice or is provable in ZF for countable languages via Henkin construction, which is fine).
- **Proposed fix:** Either remove the DC claim or state it as: 'It is known (but not verified here) that the existence of a countable elementary substructure for a countable language and countable A is provable in ZF + DC.'
- **Reported:** 2026-10-28 (8ccef3d)
