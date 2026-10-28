# Verification tracker: `01-foundations/06-category-theory/01-basics/01-categories.html`

<!-- source: 01-foundations/06-category-theory/01-basics/01-categories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the claim that the category of all sets axiomatized as a first-order theory is an elementary topos is false/misleading — an elementary topos axiomatizes the category of (small) sets, not the large category of all sets. The remark about CAT is essentially correct though the parenthetical is loose; I did not report it as an error. All proofs, hypchecks and examples checked out.

## Issues

### ISSUE-0001 [Open] Elementary topos is not an axiomatization of the category of all sets
- **Category:** Supplement/remark error
- **Location:** supplement (一階の理論として)
- **Detail:** The supplement claims that 'the "category" of all sets axiomatized as a first-order theory is an elementary topos'. This is wrong: an elementary topos is a first-order axiomatization of the category of sets (or of a 'universe of sets'), not of the category of *all* sets as a large category. Moreover, the category of all sets (with all functions between them) is not an elementary topos in the usual sense, since an elementary topos is required to be locally small / to have small hom-sets and a subobject classifier; the category of all sets in ZFC is a proper class and does not satisfy these requirements as an object of the first-order theory. The sentence overstates and misidentifies the role of elementary toposes.
- **Proposed fix:** Replace with: '集合の圏（小さい集合とその間の写像）を一階の理論として公理化したものが初等トポスであり、圏論による集合論の基礎づけの一つになる。' (An elementary topos is a first-order axiomatization of the category of sets, i.e. of a universe of sets, not of the large category of all sets.)
- **Reported:** 2026-10-28 (8ccef3d)
