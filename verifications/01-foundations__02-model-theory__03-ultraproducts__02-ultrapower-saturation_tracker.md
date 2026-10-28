# Verification tracker: `01-foundations/02-model-theory/03-ultraproducts/02-ultrapower-saturation.html`

<!-- source: 01-foundations/02-model-theory/03-ultraproducts/02-ultrapower-saturation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Good ultrafilter saturation claim: wrong cardinality and missing countability
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement states that a good countably incomplete ultrafilter on $I$ with $|I|=\kappa$ yields a $\kappa^{+}$-saturated ultraproduct. The standard Keisler result is: if $U$ is a good countably incomplete ultrafilter on $I$ with $|I|=\kappa$, then the ultraproduct is $\kappa^{+}$-saturated **provided the language $\mathcal{L}$ has cardinality at most $\kappa$**. Without the language-size hypothesis the statement is false (the saturation bound depends on $|\mathcal{L}|$). Also the phrase "$|I|=\kappa$ 上の良い可算不完全な超フィルター" is imprecise about which cardinal bounds the language. As stated it is an overstatement.
- **Proposed fix:** For a language $\mathcal{L}$ with $|\mathcal{L}|\le\kappa$ and a good countably incomplete ultrafilter $U$ on a set $I$ with $|I|=\kappa$, the ultraproduct $\prod_{i}\mathcal{M}_{i}/U$ is $\kappa^{+}$-saturated (Keisler). The countably incomplete case $\kappa=\aleph_{0}$ recovers \ref{model:ultraproduct-saturated}.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] CH-independence of isomorphic ultrapowers is misattributed
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that CH cannot be removed, citing (vaguely, "it is said") models of $\neg$CH where two nonprincipal ultrapowers of $(\N,<)$ are non-isomorphic. This is misleading: the Keisler–Shelah theorem (stated correctly in the same supplement) says that for elementarily equivalent structures there always exist *some* ultrafilter and index set giving isomorphic ultrapowers, with no CH needed. What CH is used for here is only to make the *specific* ultrapowers over a *fixed* nonprincipal ultrafilter on $\N$ isomorphic. The claim as phrased suggests CH is indispensable for the Keisler–Shelah phenomenon, which contradicts the very next bullet. This is an overstated/imprecise side claim.
- **Proposed fix:** CH is used only to guarantee that, for a fixed nonprincipal ultrafilter $U$ on $\N$, the two ultrapowers $\mathcal{M}^{\N}/U$ and $\mathcal{N}^{\N}/U$ have the same cardinality $\aleph_{1}$ and are saturated. Without CH this specific conclusion can fail; however, by the Keisler–Shelah theorem, isomorphic ultrapowers always exist for some (possibly different) ultrafilter and index set, with no CH needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Ultraproduct as a filtered colimit is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement describes the ultraproduct as a "filtered colimit" (フィルター付き余極限) of the product, identifying along sets with small complement. This is not accurate: a filtered colimit over a filter (directed set) would identify two elements when they agree on *some* set in the filter, which is the reduced product by the filter, not the quotient by the ultrafilter. The ultraproduct is the quotient of the product by the equivalence relation "agree on a set in $U$"; it is not a filtered colimit in the usual categorical sense. The parenthetical gloss "(直積の、補集合が小さい部分での同一視)" also misdescribes the equivalence (it is agreement on a $U$-large set, not on a co-small set).
- **Proposed fix:** The ultraproduct is the quotient of the direct product $\prod_{i}\mathcal{M}_{i}$ by the equivalence relation $g\sim_{U}h\iff\{i:g(i)=h(i)\}\in U$; it is the reduced product by the ultrafilter $U$, not a filtered colimit.
- **Reported:** 2026-10-28 (10fede1)
