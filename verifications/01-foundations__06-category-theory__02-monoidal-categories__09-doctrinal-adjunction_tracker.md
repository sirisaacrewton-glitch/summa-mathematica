# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/09-doctrinal-adjunction.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/09-doctrinal-adjunction.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Claim that monoidal structure on U corresponds one-to-one with comonoidal structure on F
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that for an adjunction F ⊣ U, monoidal-functor structures on U correspond one-to-one (via mates/transposes) with comonoidal-functor structures on F. This is imprecise: the mate correspondence gives a bijection between lax monoidal structures on U and colax (opmonoidal) structures on F only when the coherence data are matched correctly, and crucially the correspondence requires F to be strong (or at least the comparison maps to be invertible) to translate the monoidal axioms of U into comonoidal axioms of F. Without invertibility of F's structure maps, a lax monoidal structure on U does not in general correspond to a comonoidal structure on F; the mate of U_{2} is a map F(Ua □ Ub) → FUa □' FUb, which is a comonoidal comparison only after composing with F of the counit-related maps, and the axioms do not transfer unless F_{2} is invertible. The statement as written overstates the generality.
- **Proposed fix:** More precisely: when F is strong monoidal, lax monoidal structures on U correspond bijectively (via mates) to comonoidal (colax monoidal) structures on F whose comparison maps are the inverses of F_{2}, F_{0}; equivalently, the adjunction F ⊣ U lifts to an adjunction in the 2-category of monoidal categories, strong monoidal functors and monoidal natural transformations iff F is strong monoidal and U carries the induced lax monoidal structure.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Attribution of the general mate correspondence to Kelly 1974 as 'doctrinal adjunction'
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement attributes the general one-to-one correspondence between monoidal structures on U and comonoidal structures on F, and the equivalence with the adjunction being internal to the 2-category of monoidal categories, to Kelly 1974's 'doctrinal adjunction'. Kelly's doctrinal adjunction theorem concerns the lifting of adjunctions to the 2-category of T-algebras for a 2-monad T, and the special case for monoidal categories is a corollary; the bare mate correspondence between lax monoidal and colax monoidal structures is elementary and predates Kelly. Presenting the whole correspondence as 'Kelly 1974's doctrinal adjunction' is a misattribution/overstatement.
- **Proposed fix:** The general mate correspondence between lax monoidal structures on U and colax monoidal structures on F is elementary; the statement that this makes F ⊣ U an adjunction in the 2-category of monoidal categories (equivalently, that strong monoidal F gives lax monoidal U) is the monoidal case of Kelly's doctrinal adjunction (1974), which concerns lifting adjunctions along a 2-monad.
- **Reported:** 2026-10-28 (10fede1)
