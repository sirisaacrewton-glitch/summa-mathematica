# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/03-2-categories.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/03-2-categories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the Eckmann–Hilton argument, the middle-four interchange, the uniqueness of adjoints, the composition of adjunctions, the Kan extension in Ord, and the center-of-modules computation are all sound, and the cited labels match their uses. The genuine problems are confined to side remarks and stated-only claims: the 2-category definition's functor equalities are not literally well-typed without specifying the objects, the homotopy example is imprecise about strictness, the remark identifying 2-categories with Cat-enriched categories and 3-categories with 2-Cat-enriched ones overstates the strict case, and the single-set category definition asserts the equivalence of $x=sx$ and $x=tx$ without the short derivation. None of these affect the main theorems.

## Issues

### ISSUE-0001 [Open] 2 圏の定義の等式が関手の等式として不正確
- **Category:** Supplement/remark error
- **Location:** cat:2-category / definition item 4
- **Detail:** The definition says the data satisfy the associativity and unit laws "as equalities of functors": $\circ\circ(\circ\times1)=\circ\circ(1\times\circ)$ and $1_{b}\circ-=1=-\circ1_{a}$. But the two sides of the associativity equation have different domains: $\circ\circ(\circ\times1)$ is a functor $\mathbf{T}(c,d)\times\mathbf{T}(b,c)\times\mathbf{T}(a,b)\to\mathbf{T}(a,d)$ while $\circ\circ(1\times\circ)$ is a functor $\mathbf{T}(c,d)\times\mathbf{T}(b,c)\times\mathbf{T}(a,b)\to\mathbf{T}(a,d)$ — actually these do match, but the unit law as written mixes a functor $\mathbf{T}(a,b)\to\mathbf{T}(a,b)$ with the object $1$; more importantly the whiskering notation $1_{b}\circ-$ must be interpreted as the functor induced by the identity 1-cell, which the text does mention. The real imprecision is that the associativity is stated for a triple of composable hom-categories without specifying the three objects $a,b,c,d$, so the equation is not literally well-typed as written.
- **Proposed fix:** State the associativity for each quadruple $a,b,c,d$: the two functors $\mathbf{T}(c,d)\times\mathbf{T}(b,c)\times\mathbf{T}(a,b)\to\mathbf{T}(a,d)$ given by $\circ\circ(\circ\times1)$ and $\circ\circ(1\times\circ)$ are equal, and for each $a,b$ the functors $\mathbf{T}(a,b)\to\mathbf{T}(a,b)$ given by $1_{b}\circ-$ and $-\circ1_{a}$ equal the identity functor.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] ホモトピー 2 圏の記述が不正確
- **Category:** Supplement/remark error
- **Location:** example item 4
- **Detail:** The example says that spaces, continuous maps, and homotopy classes (by endpoint-fixed deformation) form a 2-category, and that homotopies themselves are not associative so one must pass to classes. But the standard 2-category has homotopies (not classes) as 2-cells, with vertical composition associative only up to the usual reparametrization; passing to homotopy classes relative to endpoints does give a 2-category, but the parenthetical "端点を固定した変形" describes homotopies rel endpoints, and the claim that "ホモトピーそのものの縦の合成は結合的でない" is misleading: homotopies rel endpoints do compose associatively on the nose only after reparametrization, and the honest statement is that the strict 2-category requires classes or a coherent choice. As stated it is imprecise about which structure is strict.
- **Proposed fix:** Replace with: "位相空間、連続写像、端点を固定したホモトピー類を 2 射とすると 2 圏をなす。ホモトピーそのものを 2 射とすると縦の合成は再パラメータ化を除いてしか結合的でなく、厳密な 2 圏にはならないので、ここでは類をとる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 3 圏の記述が過度に強く、また 2 圏の特徴づけが不正確
- **Category:** Supplement/remark error
- **Location:** remark after cat:2-functor
- **Detail:** The remark says "一般に、2 圏は『hom が Cat の対象である圏』（Cat 豊穣圏）であり、3 圏は hom が 2-Cat の対象である圏として定義できる". A Cat-enriched category is a strict 2-category, so the identification is only for strict 2-categories; and a 3-category is not simply a category enriched in 2-Cat in the naive sense — the hom-objects of a 3-category are 2-categories and the enrichment is over 2-Cat as a monoidal 2-category, which requires coherence data beyond ordinary enrichment. Stating it as "定義できる" without qualification overstates the result.
- **Proposed fix:** Say: "厳密 2 圏は hom が Cat の対象である圏（Cat 豊穣圏）と同一視でき、3 圏は hom が 2-Cat の対象である圏として（2-Cat 上の豊穣圏として、整合性データ込みで）定義される。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] 単一集合による圏構造の条件 4 の記述
- **Category:** Unsupported fact
- **Location:** cat:single-set-category / definition item 4
- **Detail:** Condition 4 states $ssx=sx=tsx$ and $ttx=tx=stx$ for all $x$. In the single-set axiomatization the identities $ssx=sx$, $tsx=sx$, $ttx=tx$, $stx=tx$ are the correct source/target idempotency laws, but the text also implicitly uses $sx$ and $tx$ as identity elements; the remark then claims "$x=sx$ なら 4 から $tx=tsx=sx=x$", which is correct. However condition 4 as written omits the requirement that $s$ and $t$ be idempotent in the form $ss=s$, $tt=t$ separately from the mixed identities, and the equivalence "$x=sx$ iff $x=tx$" is asserted without proof in the definition. This is a genuine gap in the stated-only claim.
- **Proposed fix:** Add the derivation: if $x=sx$ then $tx=t(sx)=(ts)x=sx=x$ using $ts=s$; conversely if $x=tx$ then $sx=s(tx)=(st)x=tx=x$ using $st=t$. Include $ss=s$, $tt=t$, $ts=s$, $st=t$ explicitly among the axioms.
- **Reported:** 2026-10-28 (8ccef3d)
