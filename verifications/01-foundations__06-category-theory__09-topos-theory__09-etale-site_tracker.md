# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/09-etale-site.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/09-etale-site.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the equivalence between sheaves on the small étale site of a field and continuous G-sets, the Galois correspondence, and the Zariski exactness proposition are all sound, and the proofs check out. The main genuine issue is in the remark on the étale topology of a ring, where the description of standard étale algebras over a field as 'localizations of products K[x]/(f)' is imprecise and does not correctly characterize finite étale algebras; this should be corrected. The Hilbert 90 remark is acceptable given the standing Galois hypothesis on Ω/K.

## Issues

### ISSUE-0001 [Open] Incorrect claim that standard étale K-algebras are localizations of K[x]/(f)
- **Category:** Supplement/remark error
- **Location:** remark エタール位相について知られていること (cat:etale-topology-ring remark), first bullet
- **Detail:** The remark says: '標準エタール $K$ 代数は、$f$ が分離的な部分の積 $K[x]/(f)$ の局所化で、\ref{fld:etale-equivalent} のエタール代数'. For a field $K$, a standard étale algebra is $(K[x]/(f))_{g}$ with $f$ monic and $f'$ invertible in the localization. Since $K[x]/(f)$ is already a product of finite separable field extensions (when $f$ is separable), localizing at $g$ only removes factors; it does not produce anything new, and the phrase '局所化で' suggests localizations give more general objects, which is misleading. More importantly, the identification with 'étale algebras' via fld:etale-equivalent is imprecise: the standard étale algebras over a field are exactly the finite products of finite separable field extensions (i.e., finite étale algebras), but the statement as written ('$f$ が分離的な部分の積 $K[x]/(f)$ の局所化') is garbled and does not correctly describe the class. The claim that the étale topology of item 3 agrees with the small étale site is correct, but the parenthetical justification is imprecise.
- **Proposed fix:** Replace the parenthetical with: 'For $A=K$ a field, every étale $K$-algebra is a finite product of finite separable field extensions, i.e. a finite étale algebra in the sense of \ref{fld:etale-algebra}; a standard étale $K$-algebra $(K[x]/(f))_{g}$ is just such a finite product (localization only discards factors), and the topology in 3 agrees with the small étale site above.'
- **Reported:** 2026-10-28 (8ccef3d)
