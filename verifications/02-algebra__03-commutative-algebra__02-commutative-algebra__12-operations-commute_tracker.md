# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/12-operations-commute.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/12-operations-commute.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well-supported. The main genuine problem is in the supplement: it asserts that flatness alone yields commutation with finite limits (kernels, finite intersections, finite products), which is false — that requires finite presentation, exactly the content of the page's theorems. A secondary imprecision conflates compactness with the product-commutation property of finitely presented modules. Proofs and counterexamples check out.

## Issues

### ISSUE-0001 [Open] Flatness does not imply commuting with finite limits / finite products
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that localization, being flat, commutes with finite limits (kernels, finite intersections, finite products). This is false: flatness preserves finite limits only when the functor is also left exact in the relevant sense; a flat module need not be finitely presented, and $S^{-1}A\otimes_A-$ does not preserve kernels in general (e.g. $\Z\to\Z$, multiplication by $p$, localized at $S=\Z\setminus\{0\}$: kernel of $\Q\xrightarrow{p}\Q$ is $0$, but $S^{-1}$ of the kernel of $\Z\xrightarrow{p}\Z$ is $0$ — that part is fine, but for a general flat $B$ the kernel can grow). More concretely, the claim that flatness gives finite products is wrong: $\Q\otimes_{\Z}\prod_{n}\Z/p_n$ vs $\prod_n \Q\otimes \Z/p_n$ shows localization (which is flat) fails to commute with infinite products, and even finite products fail for a general flat module that is not finitely presented. The statement conflates 'flat' with 'commutes with finite limits', which requires finite presentation (Lazard / the very theorem proved on this page).
- **Proposed fix:** Replace with: 'Localization is flat, so it preserves finite limits that are computed as kernels of maps between finitely presented modules (e.g. finite intersections of ideals, ideal quotients by finitely generated ideals), as proved above. Flatness alone does not guarantee commutation with all finite limits or with products; one needs finite presentation (cf. \ref{ring:tensor-product-commutes}).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Finitely presented = compact object characterization is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says finitely presented modules correspond to compact objects, defined as '$\Hom(M,-)$ commutes with filtered colimits'. This is correct for the compactness statement, but the preceding sentence says '$\Hom(M,-)$ or $M\otimes-$ commute when $M$ is finitely presented because $M$ is a finite colimit of finite free modules'. For $M\otimes-$ the relevant property is that $M$ is finitely presented (so $M\otimes-$ commutes with products), which is a different categorical property (not compactness). The text conflates the two, suggesting compactness explains both. Also '$\Hom(M,-)$ commutes with filtered colimits' is the definition of compact, but the page's theorem is about $\Hom$ and localization (a reflective localization, not a filtered colimit), so the connection is loose but not false. The main imprecision is attributing the product-commutation of $M\otimes-$ to compactness.
- **Proposed fix:** Clarify: '$\Hom(M,-)$ commuting with filtered colimits is compactness of $M$; the commutation of $M\otimes-$ with products (\ref{ring:tensor-product-commutes}) is a different finiteness condition (finite presentation), not compactness.'
- **Reported:** 2026-10-28 (8ccef3d)
