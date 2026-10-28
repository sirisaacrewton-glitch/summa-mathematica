# Verification tracker: `01-foundations/05-proof-theory/05-quantified-provability-logic/01-quantified-provability-logic.html`

<!-- source: 01-foundations/05-proof-theory/05-quantified-provability-logic/01-quantified-provability-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, Barcan proposition, relativized hierarchy, upper bounds, problems) is logically sound: the Barcan counterexample and the upper-bound arguments check out, and the cited labels match their uses. The genuine problems are confined to the supplement: the description of QGL as 'GL plus first-order logic' is imprecise, and the 'contrast' bullet claiming coincidence of valid/always-provable/always-true for pure predicate logic with a Hilbert–Bernays attribution is unsupported and overstated.

## Issues

### ISSUE-0001 [Open] QGL is not the system whose theorems are always provable
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (QGL)
- **Detail:** The supplement says "QGL. $\mathsf{GL}$ に一階述語論理を加えた体系の定理は常に証明可能だが…". QGL (quantified GL) is the system whose theorems are always provable; it is not simply "GL plus first-order predicate logic" — the quantified version requires the Barcan-type / constant-domain quantifier rules and the interaction of $\Box$ with quantifiers, and the claim that its theorems are always provable is the soundness of QGL, not of "GL + first-order logic". As stated the identification is imprecise/overstated.
- **Proposed fix:** Replace with: "*QGL.* The theorems of the quantified provability logic $\mathsf{QGL}$ (the quantified version of $\mathsf{GL}$ with the standard quantifier rules and the Barcan-type axioms) are always provable; Montagna (1984) gave an always-provable sentence not provable in this system, and by Valdanyan's (1985) theorem the set of always-provable sentences is not even recursively enumerable, as Boolos states."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that valid = always provable = always true for pure predicate logic
- **Category:** Supplement/remark error
- **Location:** supplement / 対照
- **Detail:** The supplement asserts that for pure predicate-logic sentences the three classes (valid, always provable, always true) coincide, attributed to a "Hilbert–Bernays arithmetic refinement of Löwenheim–Skolem". This is not correct as stated: "always provable" and "always true" are defined relative to realizations of predicate letters by arithmetic formulas, and for a pure predicate-logic sentence (no predicate letters, or with predicate letters realized arbitrarily) the coincidence of validity with arithmetic realizability is not a standard Hilbert–Bernays result; the attribution and the precise statement are unsupported.
- **Proposed fix:** Either delete this bullet, or restate precisely: "*Contrast.* For sentences of pure predicate logic without predicate letters, validity, always-provability and always-truth coincide trivially, since the translation is the sentence itself; the interesting case is when predicate letters are present."
- **Reported:** 2026-10-28 (8ccef3d)
