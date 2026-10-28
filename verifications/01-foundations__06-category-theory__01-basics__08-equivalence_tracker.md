# Verification tracker: `01-foundations/06-category-theory/01-basics/08-equivalence.html`

<!-- source: 01-foundations/06-category-theory/01-basics/08-equivalence.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the main theorem on right adjoints and counits, the reflective subcategory results, the equivalence characterization, and the skeleton propositions are all sound, and the proofs check out (the 3⇒2 argument correctly uses fullness/faithfulness and reflection of isomorphisms, and the hypcheck on the axiom of choice is reasonable). The only concerns are in the side material: the supplement's list of reflection examples is slightly imprecise about the ambient morphism classes (notably completion), and the Gelfand–Naimark duality fact omits the unital/*-homomorphism hypotheses. Both are minor and of medium confidence.

## Issues

### ISSUE-0001 [Open] Reflective subcategory claim about sheafification and T0-ization is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement lists '層化（前層から層へ）' (sheafification) and 'T_{0} 化' (T0-ization) as examples of reflections. Sheafification is indeed a reflection (presheaves into sheaves), and T0-ization (Kolmogorov quotient) is a reflection of Top onto T0 spaces — these are fine. However the sentence lumps '完備化' (completion) together with these as reflections; completion of metric spaces is a reflection onto complete metric spaces only when the morphisms are uniformly continuous (as stated in example 3), but for plain continuous maps it is not a reflection. The blanket claim '「ある性質をもつ最良のもの」を作る構成の多くは反射である' is acceptable as informal. The more concrete problem: the claim that these are all reflections is stated without the caveat that the ambient category/morphism class matters. This is borderline; the individual examples are standard. I flag only the completion item as potentially misleading since the morphism class is not specified here.
- **Proposed fix:** Specify the ambient categories: 'sheafification (presheaves → sheaves), T_{0}-ization (Top → T_{0} spaces), abelianization (groups → abelian groups), and completion (metric spaces with uniformly continuous maps → complete ones) are all reflections.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Gelfand–Naimark duality stated as contravariant equivalence without hypotheses
- **Category:** Unsupported fact
- **Location:** example 3 (双対定理)
- **Detail:** The example states that Gelfand–Naimark duality (compact Hausdorff spaces and commutative C*-algebras) is an equivalence between a category and the opposite of another. This is correct when the C*-algebra side is taken to be commutative unital C*-algebras with *-homomorphisms (unital), and the space side compact Hausdorff spaces with continuous maps. As stated it omits 'unital' and '*' on the algebra side, which is a genuine hypothesis: without unitality one gets locally compact spaces. The statement is stated more strongly/imprecisely than the literature supports.
- **Proposed fix:** State: 'Gelfand–Naimark duality gives an equivalence between the opposite of the category of compact Hausdorff spaces (continuous maps) and the category of commutative unital C*-algebras (unital *-homomorphisms).'
- **Reported:** 2026-10-28 (8ccef3d)
