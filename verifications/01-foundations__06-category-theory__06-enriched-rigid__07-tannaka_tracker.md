# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/07-tannaka.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/07-tannaka.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Claim that permutation representations alone recover G
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that using only permutation representations (linearizations of G-sets) as the representation category, Aut^⊗ of the forgetful functor is still G. This is false. The permutation representations form a semisimple category whose simple objects are the transitive G-sets G/H; the monoidal structure is not the tensor product of representations but the Cartesian product of G-sets (with diagonal action), and the fiber functor is the free-vector-space functor. The monoidal natural automorphisms of that fiber functor are not G but rather the group of 'multiplicative' endomorphisms compatible with the Cartesian monoidal structure; in particular the fiber functor on G-Set is representable by G, and Aut^⊗ of Hom(G,-) is the group of automorphisms of G as a monoid, i.e. Aut(G), not G. Even for the linearized permutation category, the monoidal structure is the Cartesian one, and the automorphism group is Aut(G) (or the group of monoid automorphisms), not G. The statement as written is false.
- **Proposed fix:** Replace with: 'If instead of all representations one uses only permutation representations (linearizations of G-sets) with the Cartesian monoidal structure, the monoidal natural automorphisms of the forgetful functor are the monoid automorphisms of G, i.e. Aut(G), not G. The correct statement is for the category G-Set itself: the group of monoidal natural automorphisms of the forgetful functor G-Set -> Set (with Cartesian product) is Aut(G), and equals G only when G has no nontrivial automorphisms.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Aut of forgetful functor on G-Set is G
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that the automorphism group of the forgetful functor G-Set -> Set (with Cartesian product monoidal structure) is G, citing Yoneda. By Yoneda, the forgetful functor is represented by G (the regular G-set), and natural automorphisms of Hom(G,-) correspond to automorphisms of the representing object G in the category of G-sets, i.e. G-equivariant bijections G -> G, which are exactly the elements of G acting by left multiplication. However, the monoidal structure here is the Cartesian product, and a monoidal natural automorphism must also be compatible with the monoidal structure. The natural automorphisms of the forgetful functor as a plain functor are indeed G (via left multiplication), but the monoidal ones (with respect to Cartesian product) are the monoid automorphisms of G, i.e. Aut(G). The claim that the monoidal automorphism group is G is therefore false in general (e.g. for G = C_2 x C_2, Aut(G) = GL(2,2) has order 6, not 4).
- **Proposed fix:** Correct to: 'The group of natural automorphisms of the forgetful functor G-Set -> Set is G (Yoneda: the functor is represented by G). The subgroup of monoidal natural automorphisms (with respect to Cartesian product) is Aut(G), the group of automorphisms of G.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] D4 and Q8 distinguished by fiber functor but not by monoidal structure
- **Category:** Supplement/remark error
- **Location:** example D_4 and Q_8
- **Detail:** The example claims that Rep(D_4) and Rep(Q_8) are not equivalent as monoidal categories even without requiring compatibility with the fiber functor, citing 'Frobenius-Schur indicator differences'. This is correct in spirit but the parenthetical attribution is imprecise: the standard invariant distinguishing them is the Frobenius-Schur indicator of the 2-dimensional irreducible representation (which is +1 for D_4 and -1 for Q_8), and this is a monoidal invariant. However, the earlier sentence 'the tensor product decompositions (fusion rules) also agree' is correct, and the claim that they are not monoidally equivalent is correct. The issue is the phrase '結合子の情報' (associator information): for these categories the associator is trivial (they are symmetric monoidal), so the distinguishing invariant is not the associator but the Frobenius-Schur indicator / symmetric structure. The statement 'モノイダル構造は、指標表（融合規則）より多くの情報（結合子の情報）を持っている' is misleading: the extra information is the symmetry (braiding), not the associator.
- **Proposed fix:** Replace '結合子の情報' with '対称性（組み紐）の情報、具体的にはフロベニウス–シュール指標'. State: 'The monoidal structure (specifically the symmetric structure, detected by the Frobenius-Schur indicator) carries more information than the character table (fusion rules).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck claim about infinite groups and End(omega)
- **Category:** Supplement/remark error
- **Location:** hypcheck (有限次元性)
- **Detail:** The hypcheck says that for infinite groups the End(omega) of the category of finite-dimensional representations is 'larger than the group algebra, something like a profinite completion'. This is imprecise/incorrect: for an infinite group G, the group algebra k[G] is infinite-dimensional, and End(omega) for finite-dimensional representations is the inverse limit of the finite-dimensional quotients, i.e. the 'finite dual' or the completion, which is not simply a profinite completion of G. The correct object recovered is the Hopf algebra of representative functions (matrix coefficients), as the text itself says. The phrase 'profinite completion' is misleading because End(omega) is a k-algebra, not a profinite group.
- **Proposed fix:** Replace with: 'For infinite groups, End(omega) of the category of finite-dimensional representations is not the (infinite-dimensional) group algebra but the Hopf algebra of representative functions (matrix coefficients), i.e. the finite dual; it is a completion of k[G] in the linear topology, not a profinite completion of G.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Deligne-Milne attribution and hypotheses for Tannaka categories
- **Category:** Unsupported fact
- **Location:** remark 知られている一般形, item 2
- **Detail:** Item 2 states: for a rigid symmetric monoidal k-linear abelian category T with End(I)=k and a faithful exact k-linear symmetric monoidal functor omega: T -> vect_k, T is equivalent to the representation category of the affine group scheme Aut^⊗(omega), attributed to 'P. Deligne–J. Milne, 1982'. The correct attribution for the reconstruction of an affine group scheme from a neutral Tannakian category is Deligne (for the general theorem) and Saavedra Rivano / Deligne, with the standard reference being Deligne–Milne 'Tannakian Categories' (1982) in LNM 900. However, the hypotheses as stated are incomplete: one needs T to be essentially small and the functor to be exact and faithful (which is stated), but also one typically requires that T be abelian and that End(I)=k (stated). The main issue is that the attribution 'P. Deligne–J. Milne, 1982' is acceptable, but the statement omits the requirement that the functor be k-linear and that T be essentially small; more importantly, the reconstruction gives an affine group scheme only when the functor is exact and faithful, which is stated. This is essentially correct. However, the phrase 'アフィン群スキーム Aut^⊗(omega) の表現の圏と同値' requires that Aut^⊗(omega) be an affine group scheme, which holds under the stated hypotheses. I will not report this as it is essentially correct.
- **Proposed fix:** No change needed; optionally add 'essentially small' and 'k-linear' explicitly.
- **Reported:** 2026-10-28 (10fede1)
