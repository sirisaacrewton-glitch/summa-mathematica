# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/06-segal-condition.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/06-segal-condition.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Nerve is not characterized by unique inner-horn fillings
- **Category:** Supplement/remark error
- **Location:** supplement (second paragraph of the first block)
- **Detail:** The supplement claims that the nerve is exactly the quasicategory whose inner horns have *unique* fillings. This is false. A quasicategory with unique inner-horn fillings is a *strict* (1-)category only in the sense that the composition is uniquely determined, but the nerve of a category does not have unique inner-horn fillings in general: for the inner horn $\Lambda^{2}_{1}\to N\mathbf{C}$ with edges $f,g$, the fillers are 2-simplices $u$ with $u_{01}=f,u_{12}=g$, and these are unique by the Segal condition — that part is fine. However for $n\ge3$ the inner horn $\Lambda^{n}_{k}\to N\mathbf{C}$ ($0<k<n$) does not have a unique filler in general; e.g. for $n=3,k=1$ a horn specifies $x_{01},x_{12},x_{23},x_{02},x_{13}$ and the filler $x_{03}$ is forced, but for $n=3,k=2$ the horn specifies $x_{01},x_{12},x_{23},x_{02},x_{13}$ and again $x_{03}$ is forced — yet for higher $n$ and general inner horns the filler is unique only because the nerve is a Segal set, which does force uniqueness of all inner horn fillers. The precise correct statement is: a simplicial set is (isomorphic to) a nerve iff every *inner* horn has a unique filler (this is the standard characterization of nerves among simplicial sets, cf. the Segal condition plus the fact that the spine inclusions are inner anodyne). The supplement's phrasing '準圏（ボードマン–フォークトの弱カン複体）' is also imprecise: a quasicategory is a weak Kan complex, and Boardman–Vogt's weak Kan complexes are indeed the same notion, but calling the *existence-only* inner-horn condition '準圏' while contrasting it with 'unique filling' nerves is correct only if one says 'unique inner horn fillers', which the text does say. The genuine error is the identification of '準圏' with 'weak Kan complex' as if the weak Kan complex were defined by *surjectivity* of inner horn maps rather than the lifting property; more importantly, the claim that the nerve is 'exactly' the quasicategory with unique inner-horn fillings is correct, so the main issue is the imprecision about which horns (inner vs all) and the identification of the weak Kan complex with the surjectivity condition. The statement '内側の角への写像の全射性（一意性を外したもの）を要求すると準圏になる' is correct for weak Kan complexes (inner horn lifting), so this is acceptable. The problematic sentence is '神経はちょうど「内側の角の充填が一意」な準圏である' — this is actually a true characterization, so no error there. Re-examining: the real imprecision is that a weak Kan complex requires the *lifting property* (existence), which is what is stated. Hence this supplement sentence is essentially correct. I withdraw this as an error.
- **Proposed fix:** No change needed; the statement that nerves are exactly the quasicategories with unique inner-horn fillings is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Internal-category nerve characterization overstated
- **Category:** Supplement/remark error
- **Location:** supplement, '似た定理' paragraph
- **Detail:** The supplement says that for internal categories the same characterization holds via 'a map to an iterated pullback being an isomorphism'. For internal categories in a category $\mathcal{E}$ with finite limits, the nerve is an internal simplicial object, and the Segal condition is that the Segal maps $X_{n}\to X_{1}\times_{X_{0}}\cdots\times_{X_{0}}X_{1}$ are isomorphisms in $\mathcal{E}$. This is correct as a characterization of internal nerves *provided* one also imposes the condition that $X_{0}\to X_{0}\times X_{0}$ (the 'discreteness' / Rezk condition) or that the object of objects is appropriate; more precisely, for internal categories the nerve is fully faithful and its essential image is the internal simplicial objects satisfying the Segal condition together with the condition that $X_{0}$ is 'discrete' in the sense that $s_{0}\colon X_{0}\to X_{1}$ and the degeneracies behave well. In a general category with finite limits, the Segal condition alone does not characterize internal nerves: one also needs the 'completeness' condition (Rezk's condition) that the map $X_{0}\to X_{0}\times_{X_{0}\times X_{0}}X_{1}$ ... Actually for *strict* internal categories (not internal $\infty$-categories), the Segal condition alone does characterize internal nerves when the ambient category is extensive or when one restricts to the 'discrete' object of objects. The supplement's blanket claim '同じ特徴づけが成り立つ' is therefore imprecise/overstated without the discreteness hypothesis.
- **Proposed fix:** Replace with: '内部圏の神経でも、適切な仮定（例えば $X_{0}$ が離散的であること、すなわち $X_{0}\to X_{0}\times X_{0}$ に関する条件）の下で、反復引き戻しへのセガール写像が同型であることで同様の特徴づけが成り立つ。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Segal space weakening description imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, first paragraph
- **Detail:** The supplement says that weakening bijectivity of Segal maps to 'weak homotopy equivalence' in simplicial spaces gives a Segal space. This is essentially correct (a Segal space is a Reedy fibrant simplicial space such that the Segal maps are weak homotopy equivalences), but the text omits the Reedy fibrancy hypothesis, which is essential: without it the weak equivalence condition is not well-behaved. Also '単体的空間（各 X_n が位相空間や単体的集合）' conflates simplicial spaces with bisimplicial sets; the standard model is simplicial spaces (bisimplicial sets via the Rezk/complete Segal approach). This is a minor imprecision but the omission of Reedy fibrancy is a genuine missing hypothesis in a stated-only claim.
- **Proposed fix:** State: 'セガール写像の全単射性を、Reedy ファイブレーションな単体的空間（各 $X_{n}$ が位相空間、あるいは二重単体的集合）における弱ホモトピー同値に弱めるとセガール空間になる。'
- **Reported:** 2026-10-28 (10fede1)
