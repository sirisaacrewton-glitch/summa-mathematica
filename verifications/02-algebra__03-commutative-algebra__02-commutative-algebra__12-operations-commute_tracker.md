# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/12-operations-commute.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/12-operations-commute.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of the main propositions and theorems (localization commuting with direct sums, polynomial rings, radicals; localization and Hom; annihilator/quotient; tensor and products; flat base change; polynomial/power-series quotients) are sound, and the counterexamples are genuine. The only genuine problem is in the closing supplement, which overstates flatness as implying commutation with all finite limits; flatness only gives left exactness (kernels of module maps, finite intersections of submodules), which is what the page actually proves. The compact-object remark about finitely presented modules is correct.

## Issues

### ISSUE-0001 [Open] Flatness does not imply commuting with finite limits
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that localization, being flat, commutes with finite limits (kernels, finite intersections, finite products). This is false in general: a flat module need not preserve kernels of arbitrary maps (only injections, i.e. it is left exact as a functor on modules, but the kernel of a general map is not preserved unless the map's domain/codomain situation is special). Concretely, flatness gives exactness only for short exact sequences, so kernels of arbitrary homomorphisms are not preserved. The page's own results (flat-extension-intersection) only cover finite intersections of ideals and ideal quotients by finitely generated ideals, not arbitrary finite limits. The statement 'flat so commutes with finite limits' is an overstatement.
- **Proposed fix:** Replace with: 'Localization is flat, hence left exact: it preserves kernels of module homomorphisms and finite intersections of submodules (and finite products). It does not in general preserve arbitrary finite limits beyond these; the results above cover finite intersections of ideals and quotients by finitely generated ideals.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Finitely presented modules are not the compact objects for Hom in general
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says finitely presented modules are compact objects, i.e. Hom(M,-) commutes with filtered colimits. This is true for finitely presented modules over a ring (they are finitely presentable), so the identification is correct in this setting. However the phrasing '有限表示加群がコンパクト対象（Hom(M,-) がフィルター付き余極限と交換する）' is accurate for modules. No error here on reflection; but the preceding claim about finite limits is the genuine problem. (This item is noted only to confirm it is not an error.)
- **Proposed fix:** No change needed for the compact-object sentence; only fix the finite-limit claim.
- **Reported:** 2026-10-28 (10fede1)
