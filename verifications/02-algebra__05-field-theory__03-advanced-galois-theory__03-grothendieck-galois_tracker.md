# Verification tracker: `02-algebra/05-field-theory/03-advanced-galois-theory/03-grothendieck-galois.html`

<!-- source: 02-algebra/05-field-theory/03-advanced-galois-theory/03-grothendieck-galois.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the lemma on transitive G-sets, and the worked example are logically sound. The genuine problems are concentrated in the supplement: the covering-space analogy misstates the variance of the fiber functor (the covering fiber functor is covariant, while F(A)=Hom_K(A,L) is contravariant), and the infinite-version statement incorrectly says 'all etale algebras' rather than 'finite etale algebras' correspond to finite continuous G-sets. The 'higher viewpoint' remark is essentially correct and is not reported.

## Issues

### ISSUE-0001 [Open] Covering space correspondence requires connected base and is contravariant
- **Category:** Supplement/remark error
- **Location:** supplement (被覆空間との類似)
- **Detail:** The supplement says the category of covering spaces of an arcwise connected, locally nice space X is equivalent to the category of sets acted on by π_{1}(X,x). This is imprecise: the correct statement is that the category of covering spaces is equivalent to the category of (left) π_{1}(X,x)-sets, but the equivalence is contravariant in nature (the fiber functor is covariant only after passing to the opposite category / using right actions). More importantly, the equivalence with π_{1}-sets holds for the category of covering spaces of a connected, locally path-connected, semilocally simply connected space, and the fiber functor is covariant from covers to π_{1}-sets only when one uses the opposite convention. As stated ('同値で、対応は基点の上のファイバーをとる関手') the direction is not made precise, and the analogy with the anti-equivalence F(A)=Hom_{K}(A,L) (which is contravariant) is misleading: the covering-space fiber functor is covariant, not contravariant. This is a genuine mismatch in variance.
- **Proposed fix:** The category of covering spaces of a connected, locally path-connected, semilocally simply connected space X is equivalent to the category of left π_{1}(X,x)-sets via the covariant fiber functor (taking the fiber over x). Note that this functor is covariant, whereas F(A)=Hom_{K}(A,L) is contravariant; the analogy is with the anti-equivalence only after passing to opposite categories.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Infinite version: 'all etale algebras' should be finite etale algebras
- **Category:** Supplement/remark error
- **Location:** supplement (無限版)
- **Detail:** The supplement states that taking L=K^{sep}, the category of all etale algebras over K is anti-equivalent to the category of finite sets with continuous action of the absolute Galois group. This is false as stated: the category equivalent to finite continuous Gal(K^{sep}/K)-sets is the category of finite etale K-algebras (finite-dimensional etale algebras), not all etale algebras. General (possibly infinite-dimensional) etale algebras correspond to arbitrary (not necessarily finite) continuous G-sets, i.e. to pro-finite/discrete sets, not finite sets.
- **Proposed fix:** Taking L=K^{sep}, the category of finite etale K-algebras is anti-equivalent to the category of finite sets with a continuous action of the absolute Galois group Gal(K^{sep}/K) (a profinite group). (Allowing arbitrary etale algebras corresponds to arbitrary continuous G-sets, not just finite ones.)
- **Reported:** 2026-10-28 (8ccef3d)
