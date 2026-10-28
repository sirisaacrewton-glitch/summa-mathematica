# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/03-2-categories.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/03-2-categories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound. The definitions, the middle-four interchange proposition and its proof, the Eckmann–Hilton argument, the uniqueness of adjoints theorem and its proof, the single-set definition and the source/target composition rules all check out. The examples (Cat, strict monoidal categories, Ord, homotopy) and the remarks (center of a category, modules over a ring, 2-Cat and 3-categories) are correct as stated, with appropriate caveats where the text says it has not verified something. The problems and solutions (composition of adjunctions, Kan extension in Ord, center of R-Mod) are correct. The supplement's claims about bicategories, pseudofunctors, monads in a 2-category and the 'formal category theory' viewpoint are accurate. No genuine logical gaps, missing hypotheses, overpowered theorems, improper links, or false supplements/facts were found.

## Issues

### ISSUE-0001 [Open] Wrong direction of the triangle identity in the hypcheck
- **Category:** Supplement/remark error
- **Location:** cat:adjoint-unique-2-category / hypcheck
- **Detail:** The hypcheck says the triangle identities used are `$\varepsilon'f\cdot f\eta'=1$` and `$g\varepsilon\cdot\eta g=1$`. But the first triangle identity of $(f,g',\eta',\varepsilon')$ is $(\varepsilon' f)\cdot(f\eta')=1_{f}$, and the second triangle identity of $(f,g,\eta,\varepsilon)$ is $(g\varepsilon)\cdot(\eta g)=1_{g}$. The hypcheck writes `$\varepsilon'f\cdot f\eta'=1$` and `$g\varepsilon\cdot\eta g=1$` without the whiskering notation, which is ambiguous but the second one is written as `$g\varepsilon\cdot\eta g$` rather than `$(g\varepsilon)\cdot(\eta g)$`; more importantly the first is written as `$\varepsilon'f\cdot f\eta'$` which is the correct identity. Actually the real problem: the hypcheck claims the first triangle identity used is `$\varepsilon'f\cdot f\eta'=1$`, but in the proof the identity used is $(\varepsilon'f)\cdot(f\eta')=1_{f}$ applied inside $g\,((\varepsilon'f)\cdot(f\eta'))\,g$. This is consistent. However the hypcheck also says `$g\varepsilon\cdot\eta g=1$` — the second triangle identity is $(g\varepsilon)\cdot(\eta g)=1_{g}$, which is what is used. So the hypcheck is essentially correct but imprecisely written (missing parentheses/whiskering). This is a wording issue, not a mathematical error. Not reporting.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
