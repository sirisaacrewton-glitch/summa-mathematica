# Verification tracker: `01-foundations/02-model-theory/03-ultraproducts/02-ultrapower-saturation.html`

<!-- source: 01-foundations/02-model-theory/03-ultraproducts/02-ultrapower-saturation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are correct: the countably incomplete ultrafilter is used exactly to make the descending sequence of large sets have empty intersection, and Los's theorem is applied correctly. The corollary, cardinality lemma, and CH isomorphism theorem are sound. The genuine problems are confined to the supplement: the good-ultrafilter generalization omits the language-cardinality hypothesis, and the claim that CH cannot be dropped is stated too vaguely and without support. The nonstandard-analysis bullet is acceptable.

## Issues

### ISSUE-0001 [Open] Good ultrafilter saturation claim: wrong cardinal and missing countability
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement states that an ultraproduct by a good countably incomplete ultrafilter on $I$ with $|I|=\kappa$ is $\kappa^{+}$-saturated. The standard Keisler result is: if $U$ is a good countably incomplete ultrafilter on $I$ with $|I|=\kappa$, then the ultraproduct is $\kappa^{+}$-saturated only when the language is of size $\le\kappa$ (and typically stated for $\kappa$ infinite). As written, the language size hypothesis is dropped, and the statement is imprecise. Also, for the theorem on this page ($\kappa=\aleph_{0}$), the countably incomplete good ultrafilter gives $\aleph_{1}$-saturation, consistent, but the general statement needs the language cardinality bound.
- **Proposed fix:** State: "If $U$ is a good countably incomplete ultrafilter on $I$ with $|I|=\kappa$ and the language $\mathcal{L}$ has cardinality $\le\kappa$, then $\prod_{i}\mathcal{M}_{i}/U$ is $\kappa^{+}$-saturated (Keisler)."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] CH cannot be dropped: overstated/unsupported claim
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that CH cannot be removed from \ref{model:ch-ultrapowers-isomorphic}, citing an unverified example. This is a strong independence-type assertion stated without proof and hedged only by "と言われている（本サイトでは確かめていない）". The known Keisler–Shelah theorem actually shows that elementarily equivalent structures have isomorphic ultrapowers in ZFC (with possibly different index sets/ultrafilters), so the failure of CH does not prevent isomorphic ultrapowers in general; the specific claim about two non-principal ultrafilters on $\N$ giving non-isomorphic ultrapowers of $(\N,<)$ is a genuine consistency result (e.g. via cardinal invariants), but as stated it is too vague and the attribution is unsupported. Reporting as an unsupported/overstated side claim.
- **Proposed fix:** Either remove the claim or state precisely: "It is consistent with $\neg\mathrm{CH}$ that there exist non-principal ultrafilters $U,V$ on $\N$ such that $(\N,<)^{\N}/U\not\cong(\N,<)^{\N}/V$; hence the CH hypothesis in \ref{model:ch-ultrapowers-isomorphic} cannot be replaced by ZFC alone for a fixed pair of ultrafilters."
- **Reported:** 2026-10-28 (8ccef3d)
