# Verification tracker: `01-foundations/06-category-theory/01-basics/07-adjunctions.html`

<!-- source: 01-foundations/06-category-theory/01-basics/07-adjunctions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definition, unit/counit theorem, equivalence-of-forms theorem, universal-arrow construction, uniqueness, and composition are all sound, and the proofs check out. The main genuine concern is in the supplement, where the Galois-theory bullet calls a contravariant Galois connection 'a special case of adjunction' without passing to opposite categories, which is imprecise given the covariant notion defined on the page. Other supplements (free algebra, best-approximation intuition, Grp forgetful functor not preserving coproducts) are acceptable.

## Issues

### ISSUE-0001 [Open] Galois correspondence is contravariant, not an adjunction between posets as stated
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理 (ガロア理論)
- **Detail:** The supplement says the Galois correspondence between field extensions and subgroups is a '(contravariant) Galois connection between posets, a special case of adjunction'. But the adjunction/Galois connection defined in this page (example 5, problem) is between posets with monotone maps f⊣g satisfying f(p)≤q ⟺ p≤g(q); that is a covariant notion. A contravariant Galois connection (order-reversing) is an adjunction on the opposite category, i.e. between P and Q^{op}, not literally an adjunction of the posets P,Q as categories. Stating it is 'a special case of adjunction' without passing to opposite categories is imprecise/overstated.
- **Proposed fix:** 体の拡大と部分群の間のガロア対応は、順序を反転する（反変な）ガロア接続である。これは半順序を圏とみなすとき、$P$ と $Q^{\mathrm{op}}$ の間の（共変な）随伴、すなわち $f\colon P\to Q^{\mathrm{op}}$, $g\colon Q^{\mathrm{op}}\to P$ に対する $f\dashv g$ の特別な場合である。
- **Reported:** 2026-10-28 (8ccef3d)
