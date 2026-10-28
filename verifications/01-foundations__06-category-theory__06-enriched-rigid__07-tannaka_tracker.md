# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/07-tannaka.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/07-tannaka.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page's main theorems (reconstruction of H from End(ω), coproduct from monoidal structure, finite-group Tannaka duality) are correct and well supported. The problems concentrate in the supplement and the D4/Q8 example: the claim that permutation representations recover G is false, the G-Set automorphism statement omits monoidality and misidentifies the representing object's endomorphism monoid, and the '(associator)' attribution for D4/Q8 is false since both associators are trivial. The previously reported historical attribution issue is resolved by the valid rebuttal.

## Issues

### ISSUE-0001 [Open] G-Set self-automorphisms of forgetful functor: wrong direction / Yoneda justification
- **Category:** Supplement/remark error
- **Location:** supplement (cat:sec-tnk-viewpoint preceding supplement)
- **Detail:** The supplement claims that the group of automorphisms of the forgetful functor $G\text{-}\mathbf{Set}\to\mathbf{Set}$ (with product monoidal structure) is $G$, justified by 'the forgetful functor is represented by $G$'. The forgetful functor $G\text{-}\mathbf{Set}\to\mathbf{Set}$ is $\operatorname{Hom}_{G}(G,-)$ where $G$ acts on itself by left multiplication; by Yoneda, natural endomorphisms correspond to $\operatorname{End}_{G}(G)$, which is the set of $G$-equivariant maps $G\to G$, i.e. right multiplication by elements of $G$ — this gives $G^{\mathrm{op}}=G$ for the endomorphism monoid, so the automorphism group is indeed $G$. However the claim as stated ('the group of automorphisms of the forgetful functor is $G$') is only correct for the monoidal (product-preserving) automorphisms; arbitrary natural automorphisms of the underlying functor are not just $G$ in general. More importantly, the parenthetical justification 'the forgetful functor is represented by $G$' is imprecise: it is represented by $G$ acting on itself by left multiplication, and the representing object's endomorphism monoid is $G^{\mathrm{op}}$, not $G$ directly. The statement is essentially correct but the justification is misleading and the monoidality requirement is not stated.
- **Proposed fix:** State precisely: 'The forgetful functor $U:G\text{-}\mathbf{Set}\to\mathbf{Set}$ is $\operatorname{Hom}_{G}(G,-)$ (left regular action). By Yoneda, $\operatorname{End}(U)\cong\operatorname{End}_{G}(G)\cong G^{\mathrm{op}}$, and the monoidal (product-preserving) natural automorphisms form the group $G$.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says the automorphism group of the forgetful functor G-Set→Set is G, justified by 'the forgetful functor is represented by G', without restricting to monoidal automorphisms; the imprecision about the representing object and the monoidality requirement remains.

### ISSUE-0002 [Open] D4 vs Q8: 'monoidal structure carries more information than character table (associator)'
- **Category:** Supplement/remark error
- **Location:** example D4 and Q8
- **Detail:** The example says the monoidal structure carries 'more information than the character table (the associator information)'. For these two groups the associators are both trivial (both are strict skeletal categories from groups), so the extra information distinguishing them is not the associator but the braiding/symmetry or rather the fusion rules together with the specific identification — actually the fusion rules (multiplicities of tensor decompositions) are the same for $D_{4}$ and $Q_{8}$, so the distinguishing datum is finer than fusion rules but is not 'associator information'. The parenthetical '(associator)' is a false attribution: the associativity constraints are trivial in both cases.
- **Proposed fix:** Replace '(the associator information)' with a correct statement: the two categories are distinguished not by fusion rules but by finer monoidal structure (e.g. the symmetric/braided structure or the specific tensor isomorphisms), and they are not monoidally equivalent even without a fiber functor (Frobenius–Schur indicator).
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The example still states that the monoidal structure carries 'more information than the character table (associator information)'; for D4 and Q8 the associators are trivial, so the parenthetical attribution to the associator is still false.

### ISSUE-0003 [Ignored: Valid Rebuttal] Tannaka–Krein attribution and statement (compact group, *-compatible automorphisms)
- **Category:** Unsupported fact
- **Location:** remark cat:tannaka-known item 1
- **Detail:** The remark attributes Tannaka–Krein duality to 'Tannaka Tadahiro (忠郎), 1939; M. Krein'. Tannaka's 1939 paper is by Tannaka Tadao (淡中忠郎 is a plausible rendering, but the standard romanization is Tadao Tannaka); the joint attribution to Krein is for the later 1949 work. More substantively, the statement 'compact group $G$ is recovered as the group of monoidal *-compatible natural automorphisms' is correct, but the parenthetical '(Tannaka Tadahiro, 1939; M. Krein)' conflates two separate results (Tannaka 1939 for the reconstruction, Krein 1949 for the duality with the algebra of representative functions). This is a historical attribution issue.
- **Proposed fix:** State: 'Tannaka (1939) proved the reconstruction; Krein (1949) gave the duality formulation.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: the text writes 淡中忠郎 (Tadao Tannaka), not 'Tadahiro', and citing Tannaka 1939 together with Krein is standard; no factual error remains.
**Opus Rebuttal:** 淡中忠郎 is the correct name (Tadao Tannaka); 'Tadahiro' does not occur in the text. The citation lists Tannaka 1939 and Krein, which is standard.

### ISSUE-0004 [Open] Permutation representations do not recover G via Aut^⊗
- **Category:** Supplement/remark error
- **Location:** supplement (cat:sec-tnk-viewpoint preceding supplement)
- **Detail:** The supplement claims that using only permutation representations (linearizations of G-sets) still gives Aut^⊗(ω)=G. But the category of permutation representations is not closed under tensor products of representations in a way that makes the forgetful functor monoidal with the group-ring coproduct: the tensor product of two permutation representations is a permutation representation only when the diagonal G-action is used, and with that structure the monoidal natural automorphisms of the forgetful functor are not G but the group of 1-dimensional characters (as the problem on k^G shows), or more precisely the monoidal structure does not match k[G]-mod. The claim as stated is false.
- **Proposed fix:** Replace with: 'Using the category of permutation representations with tensor product and the forgetful functor, the monoidal natural automorphisms of the forgetful functor are the 1-dimensional characters G→k^{×}, not G itself; to recover G one must use all finite-dimensional representations (or restrict to the fiber functor on Rep_k(G)).'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0005 [Open] G-Set automorphisms: monoidality and representing object imprecision
- **Category:** Supplement/remark error
- **Location:** supplement
- **Detail:** The supplement states that the automorphism group of the forgetful functor G-Set→Set (with product monoidal structure) is G, justified by 'the forgetful functor is represented by G'. The forgetful functor is represented by G acting on itself by left multiplication, and by Yoneda its endomorphism monoid is End_G(G)=G^{op}; the automorphism group is G only for monoidal (product-preserving) automorphisms, and the justification omits this and the direction issue.
- **Proposed fix:** State: 'The group of monoidal natural automorphisms of the forgetful functor G-Set→Set (product monoidal structure) is G; the forgetful functor is represented by G acting on itself by left multiplication, and by Yoneda its monoidal endomorphisms correspond to G^{op}=G.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] D4/Q8: 'associator information' is false
- **Category:** Supplement/remark error
- **Location:** example D4 and Q8
- **Detail:** The example says the monoidal structure carries 'more information than the character table (the associator information)'. For D4 and Q8 the associators are both trivial (both are strict skeletal categories from groups), so the extra information distinguishing them is not the associator but the fiber functor / the specific identification of the fusion rules with the group structure. The parenthetical '(associator)' is a false attribution.
- **Proposed fix:** Replace '(結合子の情報)' with '(ファイバー関手との両立の情報)' and state that the associators are trivial in both cases, so the distinguishing datum is the compatibility with the fiber functor, not the associator.
- **Reported:** 2026-10-28 (048145a)
