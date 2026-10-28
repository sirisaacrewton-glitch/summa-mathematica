# Verification tracker: `01-foundations/06-category-theory/01-basics/08-equivalence.html`

<!-- source: 01-foundations/06-category-theory/01-basics/08-equivalence.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 1 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reflective subcategory claim about sheafification and T0-ization is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement lists '層化（前層から層へ）' (sheafification) and 'T_{0} 化' (T0-ization) as examples of reflections. Sheafification is indeed a reflection (presheaves into sheaves), and T0-ization (Kolmogorov quotient) is a reflection of Top onto T0 spaces — these are fine. However the sentence lumps '完備化' (completion) together with these as reflections; completion of metric spaces is a reflection onto complete metric spaces only when the morphisms are uniformly continuous (as stated in example 3), but for plain continuous maps it is not a reflection. The blanket claim '「ある性質をもつ最良のもの」を作る構成の多くは反射である' is acceptable as informal. The more concrete problem: the claim that these are all reflections is stated without the caveat that the ambient category/morphism class matters. This is borderline; the individual examples are standard. I flag only the completion item as potentially misleading since the morphism class is not specified here.
- **Proposed fix:** Specify the ambient categories: 'sheafification (presheaves → sheaves), T_{0}-ization (Top → T_{0} spaces), abelianization (groups → abelian groups), and completion (metric spaces with uniformly continuous maps → complete ones) are all reflections.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still lists '完備化' (completion) among reflections without specifying the morphism class; completion is a reflection only in the category of metric spaces with uniformly continuous maps (as in example 3), not for continuous maps, so the blanket claim remains imprecise.

### ISSUE-0002 [Resolved] Gelfand–Naimark duality stated as contravariant equivalence without hypotheses
- **Category:** Unsupported fact
- **Location:** example 3 (双対定理)
- **Detail:** The example states that Gelfand–Naimark duality (compact Hausdorff spaces and commutative C*-algebras) is an equivalence between a category and the opposite of another. This is correct when the C*-algebra side is taken to be commutative unital C*-algebras with *-homomorphisms (unital), and the space side compact Hausdorff spaces with continuous maps. As stated it omits 'unital' and '*' on the algebra side, which is a genuine hypothesis: without unitality one gets locally compact spaces. The statement is stated more strongly/imprecisely than the literature supports.
- **Proposed fix:** State: 'Gelfand–Naimark duality gives an equivalence between the opposite of the category of compact Hausdorff spaces (continuous maps) and the category of commutative unital C*-algebras (unital *-homomorphisms).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Resolved — The example now explicitly states '単位的可換 C* 環と単位的 * 準同型の圏', supplying the unital and *-homomorphism hypotheses, so the Gelfand–Naimark statement is now correct.

### ISSUE-0003 [Open] Completion listed as a reflection without specifying morphisms
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says '完備化など、「ある性質をもつ最良のもの」を作る構成の多くは反射である'. Completion of metric spaces is a reflection onto complete metric spaces only in the category of metric spaces with uniformly continuous maps (as correctly stated in example 3); with plain continuous (or Lipschitz, etc.) maps it is not a reflection. Stated as a blanket example alongside sheafification and T0-ization, it is misleading because the ambient category/morphism class is essential.
- **Proposed fix:** Replace '完備化など' with '距離空間と一様連続写像の圏における完備化など' (or add the caveat: 'ただし完備化が反射になるのは一様連続写像の圏においてであり、連続写像の圏では反射にならない').
- **Reported:** 2026-10-28 (048145a)
