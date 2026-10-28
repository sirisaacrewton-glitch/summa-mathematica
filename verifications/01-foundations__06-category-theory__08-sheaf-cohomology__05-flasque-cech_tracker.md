# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/05-flasque-cech.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/05-flasque-cech.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cech H^1 equals sheaf H^1 only for paracompact (or similar) spaces
- **Category:** Supplement/remark error
- **Location:** supplement (被覆の細分と Cech(X,F))
- **Detail:** The supplement claims 'つねに $\check{H}^{1}(X,F)\cong H^{1}(X,F)$' (always, for any topological space). This is false in general. The standard result is that for paracompact Hausdorff spaces (or more generally spaces where every open cover has a refinement that is acyclic for the sheaf, e.g. numerable covers) the Cech-to-derived comparison holds in all degrees; the degree-1 comparison also requires some hypothesis on the space (e.g. paracompactness) or on the sheaf. Without any hypothesis on $X$ the statement can fail. The sentence as written is an overstatement.
- **Proposed fix:** Replace with: '被覆の細分についての余極限 $\check{H}^{p}(X,F)$ は、$X$ がパラコンパクト・ハウスドルフならすべての $p$ で $H^{p}(X,F)$ と一致する（本サイト未収録）。$p=1$ については、$X$ がパラコンパクト（あるいは各開被覆が非輪状な細分をもつ）という仮定のもとで $\check{H}^{1}(X,F)\cong H^{1}(X,F)$ が成り立つ。' i.e. attach the paracompactness hypothesis to the degree-1 statement as well, rather than asserting it unconditionally.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Smith normal form does not compute Cech cohomology of a complex in general
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The supplement says that for a finite cover and a sheaf whose values on intersections are finitely generated abelian groups, the Cech complex is a complex of (products of) finitely generated free abelian groups and its cohomology can be computed by Smith normal form of an integer matrix. Two problems: (i) the Cech complex involves products over all tuples $\sigma$, and for a finite cover these are finite products of finitely generated abelian groups, which are finitely generated but not necessarily free; more importantly (ii) Smith normal form computes the cohomology of a complex of free abelian groups only when the differentials are matrices between free modules and one wants the homology as a cokernel of a single map; for a general complex one needs to compute $\ker d/\operatorname{im} d$ which requires more than one Smith normal form, and the claim that the cohomology 'is computed by Smith normal form (primitive recursive)' is imprecise. The statement is at best a sketch and is stated too strongly.
- **Proposed fix:** Soften to: '有限な開被覆で、各交わり上の切断が有限生成アーベル群である層については、チェック複体の各項は有限生成アーベル群で、そのコホモロジーは（各微分の核と像を整数行列の標準形で計算することにより）有限の線形代数に帰着する。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Godement resolution and Cech complex 'without choice' claim
- **Category:** Supplement/remark error
- **Location:** notation (選択公理 bullet) and hypcheck
- **Detail:** The notation bullet and the hypcheck assert that the Godement resolution and the Cech complex are 'determined without choice' (選択なしに定まる). The Godement resolution is built from $\mathcal{G}^{0}(F)=\prod_{x\in X}(x_{*}F_{x})$, an infinite product over the points of $X$; forming this product sheaf and the maps requires the axiom of choice in general (the product of nonempty sets). So the claim that the Godement resolution is choice-free is not correct as stated. The Cech complex part is fine, but bundling the Godement resolution into the 'no choice' claim is an overstatement.
- **Proposed fix:** Restrict the claim to the Cech complex: 'チェック複体は選択なしに定まる。ゴドマン分解は点ごとの積 $\prod_{x\in X}F_{x}$ を含むため、一般には選択公理を要する。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Remark: Cech complex as alternating sum of a cosimplicial group
- **Category:** Supplement/remark error
- **Location:** remark 被覆の神経と単体的な見方
- **Detail:** The remark says '$p\mapsto\prod F(U_{\sigma})$ is a cosimplicial abelian group and the Cech complex is its alternating-sum complex'. This is imprecise: the assignment $\sigma\mapsto\prod_{\sigma}F(U_{\sigma})$ with all tuples (not just nondegenerate ones) is a cosimplicial abelian group, and the Cech differential is the alternating sum of coface maps — that part is correct. However the phrase 'coefficients varying by location' and the identification with cochains on the nerve (which uses only nonempty intersections) conflates the full Cech complex (all tuples) with the normalized one on the nerve. The two have the same cohomology (by the Dold-Kan / normalization argument) but are not literally the same complex. As stated ('coefficients varying by location ... is a cosimplicial abelian group, and the Cech complex is its alternating-sum complex') it is acceptable if read as the full complex, but the nerve description (only nonempty $U_{\sigma}$) does not match the definition which sums over all tuples. This is a minor imprecision rather than a falsehood; flagging for correction of the identification.
- **Proposed fix:** Clarify: '添字の組すべてをとった $p\mapsto\prod_{\sigma}F(U_{\sigma})$ は余単体的アーベル群で、チェック複体はその余面写像の交代和による複体である。被覆の神経（$U_{\sigma}\neq\emptyset$ の組のみ）上のコチェイン複体はこれの正規化（normalized）複体にあたり、両者は同じコホモロジーをもつ。'
- **Reported:** 2026-10-28 (10fede1)
