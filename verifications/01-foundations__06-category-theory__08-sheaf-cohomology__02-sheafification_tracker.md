# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/02-sheafification.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/02-sheafification.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main body (etale space construction, sheafification universal property, and the sheaf/etale-space equivalence) is logically sound: the steps are justified by the cited results (basis criterion, germs-determine-sections, stalkwise criteria, adjunction-from-universal), and the problem/solution about the skyscraper sheaf's non-Hausdorff etale space is correct. The only genuine problems are the two previously reported supplement overstatements (left-exactness of sheafification and the '+ construction' on general sites), which remain open; the third prior issue is resolved by a valid rebuttal. No new issues are found.

## Issues

### ISSUE-0001 [Open] Sheafification does not preserve all finite limits in general
- **Category:** Supplement/remark error
- **Location:** supplement / 有限の極限の保存
- **Detail:** The supplement claims that sheafification preserves finite limits (is left exact). This is false in general: sheafification preserves finite limits only when the site is 'left exact' (e.g. the site of open sets of a topological space, or more generally a site whose underlying category has finite limits and the topology is subcanonical in the appropriate sense). For a general site (which the same supplement explicitly invokes via \ref{cat:page-sites}), sheafification is only left exact when the topology is 'finitary and the site has the requisite limits'; in general it preserves finite products but not equalizers/kernels. The justification given ('taking stalks is a filtered colimit and commutes with finite limits') is also wrong: filtered colimits commute with finite limits in Set, but stalks are not available on a general site, and even on a space the argument does not establish left exactness of sheafification as a functor on presheaves in the stated generality. The claim as stated (unqualified) is overstated.
- **Proposed fix:** Restrict the claim to the case at hand: 'On a topological space $X$ (more generally on a site whose underlying category has finite limits and whose topology is such that the associated sheaf functor is left exact), sheafification preserves finite limits. For a general site this can fail; left exactness of sheafification requires additional hypotheses on the site.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still asserts unconditionally that sheafification preserves finite limits (left exact) and justifies it via stalks being filtered colimits; this is false for a general site and the stated justification is invalid, so the problem remains.

### ISSUE-0002 [Open] The '+' construction does not literally give a sheaf in one step on a general site
- **Category:** Supplement/remark error
- **Location:** supplement / 層化の別の構成
- **Detail:** The supplement says $F^{\dagger}$ (colimit over covers of matching families) 'becomes separated' and that applying it twice gives the sheafification, and that this '+ construction' generalizes verbatim to a general site. The standard $+$-construction gives a separated presheaf in one step and a sheaf in two steps only for the case of a topological space (or a site where covers are 'stable' in the required sense); on a general site the double-$+$ is a sheaf only under additional hypotheses (e.g. the topology being 'finitary'/locally connected in the needed sense, or passing to a suitable hypercover). The blanket assertion 'generalizes as-is to a general site' is imprecise/overstated.
- **Proposed fix:** State: 'For a topological space $X$, $F^{\dagger}$ is separated and $F^{\dagger\dagger}$ is the sheafification. On a general site the same colimit-over-covers construction yields the associated sheaf after (at most) two steps provided the topology is such that this holds (e.g. for the canonical topology on a site with the required stability); in full generality one uses hypercovers or the plus-construction iterated transfinitely.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still claims the '+ construction' generalizes verbatim to a general site and that F^dagger is separated in one step; this is only valid for spaces (or sites with the requisite stability), so the overstatement remains.

### ISSUE-0003 [Ignored: Valid Rebuttal] Reference to cat:presheaf-examples.4 in the constant-presheaf example
- **Category:** Improper link
- **Location:** example / item 1
- **Detail:** The example cites \ref{cat:presheaf-examples.4} for 'the sheaf of locally constant functions', but the label table only lists cat:presheaf-examples.2 (continuous sections form a sheaf) on the presheaves-sheaves page; item .4 is not among the cited labels and there is no evidence it states that the locally constant functions form the constant sheaf. The citation is used to support a claim (constant sheaf = locally constant functions) that the referenced item may not contain.
- **Proposed fix:** Either cite the correct item that defines the constant sheaf as locally constant functions, or replace the citation with a direct justification: 'the constant sheaf $\underline{A}$ is by definition the sheaf of locally constant $A$-valued functions, and its stalks are all $A$.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal correctly notes that cat:presheaf-examples.4 is the constant sheaf of locally constant functions, which is exactly what the example uses; the citation is appropriate.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). cat:presheaf-examples.4 is the constant sheaf $\underline{A}(U)=C(U,A)$ of locally constant functions.
