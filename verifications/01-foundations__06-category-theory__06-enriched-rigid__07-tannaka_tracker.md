# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/07-tannaka.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/07-tannaka.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the main theorem (End of forgetful functor is H), the coproduct reconstruction, the grouplike elements of k[G], and the finite-group Tannaka duality are all sound, and the hypcheck comments are accurate. The genuine problems are concentrated in the example and the 'known general form' remark: the D4/Q8 example misattributes the distinguishing datum to the associator (both associators are trivial), and the supplement's justification of the G-Set automorphism group via Yoneda is imprecise about the monoidality requirement and the direction (G^{op}). The historical attributions in the remark are mostly correct but the Tannaka/Krein split is conflated.

## Issues

### ISSUE-0001 [Open] G-Set self-automorphisms of forgetful functor: wrong direction / Yoneda justification
- **Category:** Supplement/remark error
- **Location:** supplement (cat:sec-tnk-viewpoint preceding supplement)
- **Detail:** The supplement claims that the group of automorphisms of the forgetful functor $G\text{-}\mathbf{Set}\to\mathbf{Set}$ (with product monoidal structure) is $G$, justified by 'the forgetful functor is represented by $G$'. The forgetful functor $G\text{-}\mathbf{Set}\to\mathbf{Set}$ is $\operatorname{Hom}_{G}(G,-)$ where $G$ acts on itself by left multiplication; by Yoneda, natural endomorphisms correspond to $\operatorname{End}_{G}(G)$, which is the set of $G$-equivariant maps $G\to G$, i.e. right multiplication by elements of $G$ — this gives $G^{\mathrm{op}}=G$ for the endomorphism monoid, so the automorphism group is indeed $G$. However the claim as stated ('the group of automorphisms of the forgetful functor is $G$') is only correct for the monoidal (product-preserving) automorphisms; arbitrary natural automorphisms of the underlying functor are not just $G$ in general. More importantly, the parenthetical justification 'the forgetful functor is represented by $G$' is imprecise: it is represented by $G$ acting on itself by left multiplication, and the representing object's endomorphism monoid is $G^{\mathrm{op}}$, not $G$ directly. The statement is essentially correct but the justification is misleading and the monoidality requirement is not stated.
- **Proposed fix:** State precisely: 'The forgetful functor $U:G\text{-}\mathbf{Set}\to\mathbf{Set}$ is $\operatorname{Hom}_{G}(G,-)$ (left regular action). By Yoneda, $\operatorname{End}(U)\cong\operatorname{End}_{G}(G)\cong G^{\mathrm{op}}$, and the monoidal (product-preserving) natural automorphisms form the group $G$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] D4 vs Q8: 'monoidal structure carries more information than character table (associator)'
- **Category:** Supplement/remark error
- **Location:** example D4 and Q8
- **Detail:** The example says the monoidal structure carries 'more information than the character table (the associator information)'. For these two groups the associators are both trivial (both are strict skeletal categories from groups), so the extra information distinguishing them is not the associator but the braiding/symmetry or rather the fusion rules together with the specific identification — actually the fusion rules (multiplicities of tensor decompositions) are the same for $D_{4}$ and $Q_{8}$, so the distinguishing datum is finer than fusion rules but is not 'associator information'. The parenthetical '(associator)' is a false attribution: the associativity constraints are trivial in both cases.
- **Proposed fix:** Replace '(the associator information)' with a correct statement: the two categories are distinguished not by fusion rules but by finer monoidal structure (e.g. the symmetric/braided structure or the specific tensor isomorphisms), and they are not monoidally equivalent even without a fiber functor (Frobenius–Schur indicator).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Tannaka–Krein attribution and statement (compact group, *-compatible automorphisms)
- **Category:** Unsupported fact
- **Location:** remark cat:tannaka-known item 1
- **Detail:** The remark attributes Tannaka–Krein duality to 'Tannaka Tadahiro (忠郎), 1939; M. Krein'. Tannaka's 1939 paper is by Tannaka Tadao (淡中忠郎 is a plausible rendering, but the standard romanization is Tadao Tannaka); the joint attribution to Krein is for the later 1949 work. More substantively, the statement 'compact group $G$ is recovered as the group of monoidal *-compatible natural automorphisms' is correct, but the parenthetical '(Tannaka Tadahiro, 1939; M. Krein)' conflates two separate results (Tannaka 1939 for the reconstruction, Krein 1949 for the duality with the algebra of representative functions). This is a historical attribution issue.
- **Proposed fix:** State: 'Tannaka (1939) proved the reconstruction; Krein (1949) gave the duality formulation.'
- **Reported:** 2026-10-28 (8ccef3d)
