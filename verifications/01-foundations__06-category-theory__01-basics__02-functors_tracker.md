# Verification tracker: `01-foundations/06-category-theory/01-basics/02-functors.html`

<!-- source: 01-foundations/06-category-theory/01-basics/02-functors.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Natural transformation as functor C×2→D does not match the stated boundary conditions
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement claims that a natural transformation τ: S⇒T is the same as a functor C×2→D that restricts to S on C×{0} and to T on C×{1}. This is imprecise: a functor H: C×2→D with H(−,0)=S and H(−,1)=T corresponds to a natural transformation S⇒T only if the arrow 0→1 in 2 is sent to the correct direction. With the convention that 2 has an arrow 0→1, the component H(c, 0→1): Sc→Tc gives τ_{c}: Sc→Tc, which is consistent, but the statement as written ('C×{0} で S、C×{1} で T になるものと同じ') omits that the arrow 0→1 must be sent to τ_{c}, and more importantly the identification requires the naturality square to commute, which is exactly the functoriality of H. The claim is essentially correct but stated too loosely; the phrase 'same thing' without specifying the arrow component is an overstatement.
- **Proposed fix:** A natural transformation τ: S⇒T is the same as a functor H: C×2→D such that H(c,0)=Sc, H(c,1)=Tc, and H(c, 0→1)=τ_{c}: Sc→Tc; the naturality of τ is exactly the functoriality of H on the commuting squares c×2.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that epimorphisms in Grp are surjective attributed to Mac Lane exercise
- **Category:** Supplement/remark error
- **Location:** hypcheck of cat:monic-epic-examples
- **Detail:** The hypcheck says 'In Grp too, epimorphisms coincide with surjective homomorphisms, but the image need not be normal, so a different argument is needed (Mac Lane Chapter I §5 exercise).' The statement that epis in Grp are surjective is true, but the parenthetical remark that 'the image need not be normal' is misleading: for a homomorphism e: A→B, the image e[A] is always a subgroup, and the argument that epis are surjective in Grp does not proceed via normality of the image. The remark suggests a false reason (that the failure is due to non-normality of the image), which is not the actual obstruction. The actual proof uses that if e is not surjective, one can construct two homomorphisms from B agreeing on e[A] using the action on cosets of the (not necessarily normal) subgroup e[A], e.g. via permutation representations.
- **Proposed fix:** In Grp, epis are also surjective, but the argument differs from the abelian case: since e[A] need not be normal, one cannot form the quotient B/e[A]; instead one uses that a proper subgroup H<B gives two distinct homomorphisms B→S_{B/H} (the action on cosets) agreeing on H (both fix the coset H), so a non-surjective e is not epic.
- **Reported:** 2026-10-28 (8ccef3d)
