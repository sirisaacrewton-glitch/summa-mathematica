# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/02-day-convolution.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/02-day-convolution.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (enriched Yoneda lemma, Day convolution monoidal closed structure, monoids for Day convolution) are essentially correct and well supported by the cited results. The problems concentrate in the supplement and side remarks: the uniqueness claim for the Day monoidal structure is stated too strongly (missing the unit/coherence conditions), the extension statement for strong monoidal functors omits uniqueness qualifications, the complexity/cardinality remark conflates the two examples, the group-convolution analogy is only valid for the discrete monoidal category on the group, and the species/operad remark should specify the substitution product. None of these affect the proved theorems, but they should be corrected for precision.

## Issues

### ISSUE-0001 [Open] Uniqueness of the monoidal structure making y strong monoidal and cocontinuous
- **Category:** Supplement/remark error
- **Location:** supplement / 普遍性
- **Detail:** The supplement claims that Day convolution is the *unique* monoidal structure on $\widehat{\mathbf{C}}$ such that $\mathbf{y}$ is strong monoidal and $\circledast$ preserves colimits in each variable. As stated this is not correct: the monoidal structure is only determined up to the coherence data, and more importantly the claim that a strong monoidal $\mathbf{y}$ plus cocontinuity in each variable pins down the tensor product is only true when one also requires the unit to be $\mathbf{y}I$ and the associator/unit constraints to be compatible with those of $\mathbf{C}$ via $\mathbf{y}$. Without the unit condition there are other monoidal structures (e.g. tensoring with a fixed invertible object / twisting). The uniqueness should be stated for the pair (tensor, unit $\mathbf{y}I$) together with the requirement that the coherence isomorphisms are the canonical ones induced by $\mathbf{y}$.
- **Proposed fix:** State: 'Among monoidal structures $(\circledast, \mathbf{y}I, \alpha^{\circledast}, \lambda^{\circledast}, \varrho^{\circledast})$ on $\widehat{\mathbf{C}}$ for which $\mathbf{y}$ is strong monoidal with the canonical coherence constraints (i.e. the comparison maps are the isomorphisms $\mathbf{y}a\circledast\mathbf{y}b\cong\mathbf{y}(a\otimes b)$ and $\mathbf{y}I$), and for which $\circledast$ preserves colimits in each variable, Day convolution is the unique one.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Extension of strong monoidal functors requires more than cocontinuity of the target tensor
- **Category:** Supplement/remark error
- **Location:** supplement / 普遍性
- **Detail:** The supplement says a strong monoidal functor $\mathbf{C}\to\mathbf{M}$ (with $\mathbf{M}$ cocomplete and $\otimes$ cocontinuous in each variable) extends uniquely to a cocontinuous strong monoidal functor $\widehat{\mathbf{C}}\to\mathbf{M}$. This is essentially the standard result, but as stated it omits the requirement that the extension be computed by the left Kan extension along $\mathbf{y}$ and that $\mathbf{M}$'s tensor preserve the relevant colimits; more importantly the uniqueness is only up to the naturality of the comparison, and the statement 'unique' should be qualified: the extension is unique up to unique isomorphism compatible with the given functor on $\mathbf{C}$. Also the parenthetical '(left Kan extension)' is fine, but the claim as written is slightly stronger than what is proved/known without the cocontinuity of $\mathbf{M}$'s unit and the symmetry compatibility.
- **Proposed fix:** State: 'A strong monoidal functor $\mathbf{C}\to\mathbf{M}$ with $\mathbf{M}$ cocomplete and $\otimes$ cocontinuous in each variable extends to a cocontinuous strong monoidal functor $\widehat{\mathbf{C}}\to\mathbf{M}$, uniquely up to unique monoidal natural isomorphism compatible with the given functor; the extension is the left Kan extension along $\mathbf{y}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Complexity claim O(n^2) for truncated Day convolution
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement claims that computing up to degree $n$ takes $O(n^{2})$ integer operations. For the Cauchy product in example 2, each degree-$m$ output is a sum over $p+q=m$ of terms involving binomial coefficients, and computing all degrees up to $n$ requires $\sum_{m\le n}(m+1)=O(n^{2})$ multiplications, which is consistent; however the phrase 'the size of each degree is the convolution sum of $|F_{a}||G_{b}|$' is imprecise for example 2, where the cardinality is $\sum_{p+q=n}\binom{n}{p}|F(p)||G(q)|$, not simply a convolution of the cardinalities. The statement conflates the two examples.
- **Proposed fix:** Rewrite: 'In example 1 the cardinality of $(F\circledast G)_{n}$ is $\sum_{a+b=n}|F_{a}||G_{b}|$ (an ordinary convolution), while in example 2 it is $\sum_{p+q=n}\binom{n}{p}|F(p)||G(q)|$ (the exponential-generating-function product). Computing all degrees up to $n$ takes $O(n^{2})$ integer operations in either case.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Remark on group convolution: sum over ab=c vs coend
- **Category:** Supplement/remark error
- **Location:** remark 「関数の畳み込み」の圏化
- **Detail:** The remark says the group convolution $(f*g)(c)=\sum_{ab=c}f(a)g(b)$ is obtained from the Day formula by replacing the sum by a coend and '$a\otimes b=c$' by the set of morphisms $c\to a\otimes b$. For a group regarded as a one-object category this is only correct if the group is regarded as a discrete monoidal category (each element an object), in which case $\mathbf{C}(c,a\otimes b)$ is a point when $c=ab$ and empty otherwise, giving exactly the sum. But the remark's phrasing 'the set of morphisms $c\to a\otimes b$' suggests a one-object category, where there is a single object and the formula would not reproduce the pointwise sum. The identification is only valid for the discrete monoidal category on $G$.
- **Proposed fix:** Clarify: 'Viewing $G$ as the discrete monoidal category (objects the elements of $G$, only identity morphisms, $\otimes$ the group product), $\mathbf{C}(c,a\otimes b)$ is a point iff $c=ab$, so the coend reduces to the sum $\sum_{ab=c}f(a)g(b)$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Species / Cauchy product description of Day convolution
- **Category:** Unsupported fact
- **Location:** example / day-examples item 2
- **Detail:** The example states that for $\mathbf{C}=\Sigma$ (finite sets and bijections, $\otimes$ disjoint union) presheaves are species and Day convolution is the Cauchy product $(F\circledast G)(n)\cong\coprod_{p+q=n}\Sigma_{n}\times_{\Sigma_{p}\times\Sigma_{q}}(F(p)\times G(q))$. This is correct, but the parenthetical 'オペラッドはこの上の別のモノイダル構造（合成積）のモノイドとして定義される' (operads are defined as monoids for a different monoidal structure, the substitution product, on this category) is a side claim that is true for the *substitution* (composition) product on species, but the phrase 'on this' (この上の) is ambiguous: the substitution product is a monoidal structure on species, and operads are monoids therein, which is correct. However, the claim that this is 'another monoidal structure' on the same category of species is correct only for the substitution product, and the reference to the operads page is a pointer, not a proof. This is acceptable as a pointer but the statement should be precise that it is the substitution/composition product, not merely 'another' structure.
- **Proposed fix:** State precisely: 'Operads are the monoids for the substitution (composition) product on species, a different monoidal structure on $[\Sigma^{\mathrm{op}},\mathbf{Set}]$ (see the operads page).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Hypcheck: symmetry used only for sigma orientation
- **Category:** Supplement/remark error
- **Location:** hypcheck
- **Detail:** The hypcheck says symmetry of $\mathbf{V}$ is used for 'the orientation reversal $\sigma$' in the action. This is essentially right, but the enriched Yoneda lemma also uses symmetry to identify $\mathbf{A}(a,b)\otimes x\otimes Fa$ orderings and to transpose; the statement is not false but understates where symmetry enters (e.g. the definition of $\rho$ via transpose and symmetry, and the naturality in $x$). This is a minor imprecision rather than a falsehood; still, the hypcheck should mention that symmetry is needed to define the action $\rho$ from the enriched functor and to compare tensor orderings throughout.
- **Proposed fix:** Amend: 'Symmetry of $\mathbf{V}$ is used to define the action $\rho_{a,b}$ from the enriched functor (transpose plus symmetry) and to reorder tensor factors such as $\mathbf{A}(a,b)\otimes x\otimes Fa$ in the elementwise formulation.'
- **Reported:** 2026-10-28 (10fede1)
