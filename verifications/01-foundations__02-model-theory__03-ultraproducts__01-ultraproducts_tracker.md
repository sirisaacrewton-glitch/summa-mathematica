# Verification tracker: `01-foundations/02-model-theory/03-ultraproducts/01-ultraproducts.html`

<!-- source: 01-foundations/02-model-theory/03-ultraproducts/01-ultraproducts.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the ultrafilter lemma, Łoś's theorem, and the semantic compactness proof are sound, and the hypchecks are accurate. The main genuine problem is in the final supplement, where the reduced product is incorrectly described as the colimit of the restriction system of partial products (the restriction maps point the wrong way; the correct statement involves the dual/reverse-inclusion system or a quotient description). A secondary minor imprecision concerns the propositional-logic comparison, where the phrase about the quotient being unnecessary is slightly misleading though not false. No issues were found in the proofs, definitions, or the stated examples.

## Issues

### ISSUE-0001 [Open] Reduced product as colimit: direction of the directed system is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から) at end of page
- **Detail:** The supplement claims that the reduced product is the colimit (direct limit) of the directed system of partial products $\prod_{i\in X}\mathcal{M}_{i}$ with restriction maps $\prod_{i\in X}\to\prod_{i\in Y}$ for $X\supset Y$. But with restriction maps going from larger $X$ to smaller $Y$, the natural universal object is a *limit* (inverse limit), not a colimit. Indeed the reduced product is the quotient of the full product by the filter, which is the colimit of the *dual* system (or equivalently a quotient/coequalizer), not the colimit of the restriction system. The stated identification is mathematically incorrect as written.
- **Proposed fix:** Replace with: 'The reduced product $\prod_{i}M_{i}/\mathcal{F}$ is the quotient of $\prod_{i}M_{i}$ by the equivalence relation "equal on some $X\in\mathcal{F}$"; equivalently it is the direct limit (colimit) of the system of products $\prod_{i\in X}\mathcal{M}_{i}$ indexed by $X\in\mathcal{F}$ ordered by *reverse* inclusion with the natural projections, i.e. the colimit over the filter viewed as a directed set under $\supset$ (not the inverse limit of the restriction maps).' Alternatively, simply state that two sequences are identified iff they agree on some member of $\mathcal{F}$, without the colimit claim.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Propositional case: ultrafilter on finite set is principal, but the claim about 'no quotient needed' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (命題論理との対応)
- **Detail:** The supplement says the propositional construction corresponds to taking the ultrapower of the truth-value set $\{0,1\}$ and that 'the ultrapower of a finite set is the same as the original set (problem model:prob-ultrapower-finite), so no quotient was needed.' This is essentially correct in conclusion, but the parenthetical reasoning conflates two things: the ultrapower of a finite *set* being isomorphic to the original requires the diagonal map to be surjective, which holds for any ultrafilter on any index set (as problem model:prob-ultrapower-finite shows). The statement is acceptable, but the phrase 'the quotient was unnecessary' is slightly misleading since the quotient is still formed; it just happens to be canonically isomorphic to the original. This is a minor imprecision rather than a falsehood, so it is borderline.
- **Proposed fix:** Rephrase: 'the ultrapower of a finite set is canonically isomorphic to the original set (problem model:prob-ultrapower-finite), so the quotient, though formed, is canonically identified with $\{0,1\}$ and introduces nothing new.'
- **Reported:** 2026-10-28 (10fede1)
