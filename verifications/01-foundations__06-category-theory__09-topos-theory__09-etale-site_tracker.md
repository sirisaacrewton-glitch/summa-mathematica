# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/09-etale-site.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/09-etale-site.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that finite G-sets with surjective topology equal all G-sets
- **Category:** Supplement/remark error
- **Location:** supplement (分類トポス)
- **Detail:** The supplement says: if $G$ is finite (discrete), then $\mathbf{B}G$ is the presheaf topos $\widehat{G}$, and \ref{cat:sheaves-continuous-gsets} becomes the statement 'sheaves on finite $G$-sets with the surjective topology = all $G$-sets'. This is wrong. On the site $\mathbf{C}_{G}$ of finite $G$-sets with jointly surjective coverings, the sheaf condition is nontrivial: a sheaf is exactly a presheaf on finite $G$-sets that is a filtered colimit-compatible extension, and the equivalence $\mathbf{B}G\simeq\mathbf{Sh}(\mathbf{C}_{G},J)$ says sheaves correspond to *all* $G$-sets via $Y\mapsto\mathbf{B}G(-,Y)$. But the presheaf topos $\widehat{G}$ (presheaves on the one-object category $G$) is presheaves on finite $G$-sets *without* the sheaf condition; these are not the same as sheaves. Indeed $\widehat{G}\simeq\mathbf{Set}^{G^{\mathrm{op}}}$ is all $G$-sets with arbitrary (not necessarily continuous) action, whereas $\mathbf{B}G$ uses continuous actions; for finite $G$ every action is continuous so $\mathbf{B}G\simeq\mathbf{Set}^{G}$, but the sheaf topos $\mathbf{Sh}(\mathbf{C}_{G},J)$ is *equivalent* to $\mathbf{B}G$, not equal to the presheaf topos $\widehat{G}$ on the site. The identification '$\mathbf{B}G$ is the presheaf topos $\widehat{G}$' is only true when $G$ is regarded as a one-object category and one takes presheaves on that category, which is a different site from $\mathbf{C}_{G}$; the sentence conflates the two and asserts an equality of toposes that does not hold as stated.
- **Proposed fix:** Replace with: 'If $G$ is finite (discrete), then $\mathbf{B}G\simeq\mathbf{Set}^{G}$ is the topos of all $G$-sets (every action is continuous), and \ref{cat:sheaves-continuous-gsets} says that sheaves on the site $\mathbf{C}_{G}$ of finite $G$-sets with jointly surjective coverings are equivalent to all $G$-sets. This is *not* the presheaf topos on the one-object category $G$; the sheaf condition on $\mathbf{C}_{G}$ is essential.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hilbert 90 general form stated for H^1(G, Ω^×) without continuity/limit qualification
- **Category:** Supplement/remark error
- **Location:** remark エタールコホモロジーとガロアコホモロジー
- **Detail:** The remark states '$H^{1}(G,\Omega^{\times})=0$ (the general form of Hilbert's Theorem 90)'. For infinite Galois extensions, Galois cohomology of the continuous $G$-module $\Omega^{\times}$ is computed with continuous cochains; the statement $H^{1}(G,\Omega^{\times})=0$ is correct for the continuous (discrete) cohomology, but the remark has just identified etale cohomology with 'the right derived functor of invariants on continuous $G$-modules', and for that derived-functor cohomology the vanishing $H^{1}(G,\Omega^{\times})=0$ requires $\Omega^{\times}$ to be treated as a continuous module and the cohomology to be the continuous one. As written it is at least imprecise: the derived functor of $M\mapsto M^{G}$ on all continuous modules does give Galois cohomology, and $H^{1}(G,\Omega^{\times})=0$ does hold (infinite Hilbert 90 / Speiser's lemma), so the mathematical content is correct, but the parenthetical attribution '巡回の場合は \ref{fld:hilbert-90}' is fine. No error of substance; the only issue is that the vanishing is stated without noting it is the continuous cohomology, which the preceding sentence already establishes. This is borderline; I flag it only as imprecision, not a falsehood.
- **Proposed fix:** Make explicit: '$H^{1}(G,\Omega^{\times})=0$ for the continuous Galois cohomology (Speiser's lemma / Hilbert 90 in the infinite case; the cyclic case is \ref{fld:hilbert-90}).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Standard etale K-algebra description imprecise
- **Category:** Supplement/remark error
- **Location:** remark エタール位相について知られていること, first bullet
- **Detail:** The remark says: 'a standard etale $K$-algebra is a localization of a product $K[x]/(f)$ of the separable part, and is an etale algebra in the sense of \ref{fld:etale-equivalent}'. A standard etale $K$-algebra is $(K[x]/(f))_{g}$ with $f$ monic and $f'$ invertible in the localization. Over a field $K$, $f'$ invertible in $(K[x]/(f))_{g}$ means $f$ is separable (since $\gcd(f,f')=1$), so $K[x]/(f)$ is a finite etale $K$-algebra, and localization by $g$ is etale; but the phrase 'localization of the product $K[x]/(f)$ of the separable part' is garbled: $K[x]/(f)$ is not a 'product of the separable part', and a localization $(K[x]/(f))_{g}$ of a finite-dimensional $K$-algebra is a product of fields only if $g$ is a unit modulo nilpotents; since $K[x]/(f)$ is already a product of finite separable field extensions, localizing by $g$ gives a product of some of these fields (those where $g\neq0$), which is again finite etale. The statement is essentially correct but the wording 'product of the separable part' is imprecise and could mislead. Not a substantive mathematical error.
- **Proposed fix:** Rewrite: 'Over a field $K$, a standard etale $K$-algebra $(K[x]/(f))_{g}$ with $f$ monic and $f'$ invertible has $f$ separable, so $K[x]/(f)$ is a finite etale $K$-algebra (a product of finite separable field extensions), and localizing by $g$ selects a subproduct; hence it is a finite etale $K$-algebra in the sense of \ref{fld:etale-equivalent}.'
- **Reported:** 2026-10-28 (10fede1)
