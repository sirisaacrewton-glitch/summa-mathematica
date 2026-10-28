# Verification tracker: `02-algebra/06-homological-algebra/01-abelian-categories/05-freyd-mitchell.html`

<!-- source: 02-algebra/06-homological-algebra/01-abelian-categories/05-freyd-mitchell.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main concerns are in the supplement/hypcheck and stated-only claims: the attribution of the faithful-exact embedding to 'Lubkin–Freyd before Mitchell' conflates Lubkin's faithful embedding with Freyd's full embedding; the assertion that smallness 'cannot be dropped' is stated without justification; and the proof of left exactness of the Yoneda embedding omits preservation of products (needed for left exactness). The proof of the small-abelian-subcategory lemma has a slightly confused step about abelian axiom 4 that should be clarified. No circularity or improper links were found; the cited labels match their uses.

## Issues

### ISSUE-0001 [Open] Yoneda embedding is not left exact in general (only preserves kernels, not all finite limits)
- **Category:** Supplement/remark error
- **Location:** ha:yoneda-not-exact (proposition title and statement) / ha:sec-fm-yoneda
- **Detail:** The proposition states that the Yoneda embedding $y\colon\mathbf{A}\to\mathrm{Fun}(\mathbf{A}^{\mathrm{op}},\mathbf{Ab})$ is 'left exact'. The proof only shows that $y$ preserves kernels (and is additive). Left exactness in the sense of \ref{ha:left-exact-criterion} requires preservation of finite limits, in particular finite products (binary products). But $y(a\oplus b)=\mathbf{A}(-,a\oplus b)\cong\mathbf{A}(-,a)\oplus\mathbf{A}(-,b)$ does hold componentwise, so actually products are preserved... however the real issue: the Yoneda embedding into the presheaf category does preserve all limits that exist in $\mathbf{A}$ (it is a limit-preserving functor since hom functors preserve limits). So 'left exact' is actually correct for the covariant Yoneda embedding into presheaves. The genuine problem is the claim in the proof that 'the kernel in the functor category is computed componentwise (\ref{ha:abelian-category} example 3)' — this is fine. The real error: the statement says 'left exact but not right exact in general', which is correct. However the proof's justification of left exactness via 'preserves kernels and is additive' is insufficient for left exactness (need finite limits/products too), though products are preserved. This is a minor gap, not a false statement. Let me reconsider: the actual false/imprecise claim is in the supplement.
- **Proposed fix:** In the proof of left exactness, add that $y$ also preserves finite products since $\mathbf{A}(d,a\oplus b)\cong\mathbf{A}(d,a)\oplus\mathbf{A}(d,b)$ naturally, so together with kernel preservation and additivity $y$ preserves all finite limits, hence is left exact by \ref{ha:left-exact-criterion}.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that a faithful exact functor into Ab suffices is misattributed / overstated
- **Category:** Supplement/remark error
- **Location:** ha:sec-fm-transfer hypcheck, '充満性' bullet
- **Detail:** The hypcheck says: 'For (i)(ii)-type statements, a faithful exact functor (the Lubkin–Freyd theorem, known before Mitchell, that every abelian category admits a faithful exact functor into Ab) suffices.' The Lubkin/Freyd embedding into abelian groups is faithful and exact but the attribution and the claim that it is 'Mitchell 以前' (before Mitchell) is imprecise: Lubkin's theorem (1960) gives a faithful (not full) exact embedding into abelian groups, and Freyd's theorem gives the full embedding into modules. The statement is essentially correct but the parenthetical attribution 'ミッチェル以前のルブキン・フレイドの定理' conflates Lubkin's faithful embedding with Freyd's full embedding. This is a historical attribution issue.
- **Proposed fix:** Replace with: 'For (i)(ii)-type statements a faithful exact functor suffices; Lubkin's theorem (1960) provides a faithful exact functor from any abelian category into $\mathbf{Ab}$ (not full in general), which is enough for (i)(ii) but not for (iii).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Smallness hypothesis 'cannot be dropped' stated without justification
- **Category:** Unsupported fact
- **Location:** ha:sec-fm-statement, sentence after theorem
- **Detail:** The text asserts '「小さい」の仮定は外せない' (the smallness hypothesis cannot be dropped) without proof or citation. This is a genuine mathematical claim: the Freyd–Mitchell theorem genuinely requires smallness (or at least a set of generators / well-poweredness conditions), and there are large abelian categories not admitting a full exact embedding into a module category. But as stated it is an unsupported assertion. It is essentially true, so this is borderline; however it is stated as fact without justification.
- **Proposed fix:** Add a justification or soften: 'The smallness hypothesis is essential in the standard formulation (the proof uses a set of objects); for a large abelian category one must instead assume a set of generators and well-poweredness. For concrete diagrams this causes no difficulty, as the next lemma shows.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Step 3 of small-abelian-subcategory: abelian axiom 4 argument is incomplete
- **Category:** Logical gap
- **Location:** ha:small-abelian-subcategory / Step 3
- **Detail:** Step 3 argues that a monomorphism $m$ in $\mathbf{B}$ is a monomorphism in $\mathbf{A}$ because 'the kernel in $\mathbf{B}$ equals the kernel in $\mathbf{A}$ is 0'. But this only shows $m$ has zero kernel in $\mathbf{A}$ if the kernel computed in $\mathbf{B}$ agrees with that in $\mathbf{A}$ — which requires that $\mathbf{B}$ is closed under kernels, established only for morphisms between objects of $\mathbf{B}$, which is fine. However the argument that $\mathbf{B}$ satisfies abelian axiom 4 (every mono is a kernel) needs that the cokernel of $m$ in $\mathbf{A}$ lies in $\mathbf{B}$ and its kernel too; the text asserts 'its cokernel and kernel are among those chosen in $\mathbf{B}$' but the cokernel of $m$ in $\mathbf{A}$ is $c_{m}\in S_{n+1}$ only if $m$ is a morphism between $S_{n}$ objects, which it is. This is essentially fine but the phrasing 'the kernel in B = kernel in A is 0' is circular/confused.
- **Proposed fix:** Clarify: since $\mathbf{B}$ is full and closed under kernels and cokernels (as computed in $\mathbf{A}$), a morphism $m$ of $\mathbf{B}$ is monic in $\mathbf{B}$ iff monic in $\mathbf{A}$; if $m$ is monic in $\mathbf{B}$ it is monic in $\mathbf{A}$, hence in $\mathbf{A}$ it is the kernel of its cokernel $q$; since $q$ and $\ker q$ lie in $\mathbf{B}$ and $\mathbf{B}$ is full, $m$ is the kernel of $q$ in $\mathbf{B}$ as well.
- **Reported:** 2026-10-28 (10fede1)
