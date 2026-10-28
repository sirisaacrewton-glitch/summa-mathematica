# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/04-intuitionistic.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/04-intuitionistic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the NJ system, soundness, Lindenbaum–Tarski construction, completeness, and the non-derivability corollary are all sound, and the hypcheck comments are accurate. The main issues are in the supplement: the identification of Heyting algebras with cartesian closed preorders omits the finite-coproduct requirement, the Glivenko statement should be explicitly restricted to propositional logic given the surrounding first-order discussion, and the finite model property is invoked to conclude decidability without an effective bound. These are precision issues in side remarks rather than errors in the proved results.

## Issues

### ISSUE-0001 [Open] Heyting algebras are not 'preorders viewed as cartesian closed categories'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that a Heyting algebra 'is nothing but a preorder viewed as a cartesian closed category', with $\wedge$ the product, $\Rightarrow$ the exponential, $\vee$ the coproduct, $0$ the initial object. A preorder viewed as a category is cartesian closed iff it is a Heyting algebra (with finite products/coproducts), so the identification of $\wedge,\Rightarrow$ is fine, but the claim that $\vee$ is the coproduct and $0$ the initial object requires the preorder to have all finite coproducts, i.e. a bottom element and binary joins — which a general Heyting algebra does have. However the statement as written ('前順序をデカルト閉圏と見たものにほかならない') is imprecise: a cartesian closed preorder need not have a bottom element or binary joins, so it need not be a Heyting algebra. The identification should require finite (co)completeness.
- **Proposed fix:** A Heyting algebra is exactly a preorder that, viewed as a category, is cartesian closed and has finite coproducts (an initial object $0$ and binary coproducts $\vee$); then $\wedge$ is the product and $\Rightarrow$ the exponential.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Gödel–Gentzen translation direction stated for propositional logic
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理 (グリヴェンコの定理)
- **Detail:** The supplement states Glivenko's theorem as: if $\vdash_{\mathsf{K}}\varphi$ then $\vdash_{\mathsf{I}}\neg\neg\varphi$. This is correct for propositional logic. However it is presented as if it were the general Glivenko theorem; the general Glivenko theorem (for predicate logic) requires $\varphi$ to be a formula without $\exists$ or $\vee$ in negative position, and the unrestricted statement fails for first-order logic. Since the supplement's first bullet explicitly discusses first-order intuitionistic logic, the unqualified statement risks being read as holding there too. The propositional restriction should be made explicit.
- **Proposed fix:** Glivenko's theorem (propositional logic): for every propositional formula $\varphi$, if $\vdash_{\mathsf{K}}\varphi$ then $\vdash_{\mathsf{I}}\neg\neg\varphi$. (This does not extend verbatim to first-order logic without restrictions on $\varphi$.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Finite model property justification for decidability is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 有限モデル性
- **Detail:** The supplement says: if $\varphi$ is not derivable in NJ then there is a finite Heyting algebra in which it does not take value $1$, 'and from this the derivability in NJ is decidable'. The finite model property alone does not immediately give decidability, because one must also bound the size of the finite Heyting algebra (or the number of variables) effectively in terms of $\varphi$. As stated, the implication 'finite model property $\Rightarrow$ decidability' is a gap: the finite model property guarantees a finite countermodel but does not by itself give an algorithm unless the search space is bounded.
- **Proposed fix:** If $\varphi$ is not derivable in NJ, there is a finite Heyting algebra (of size bounded effectively in terms of $\varphi$, e.g. via the finite model property with a bound on the number of elements) in which $\varphi$ does not take value $1$; searching over all such finite algebras gives an algorithm deciding derivability in NJ.
- **Reported:** 2026-10-28 (8ccef3d)
