# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/09-michael-selection.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/09-michael-selection.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Converse characterization of paracompactness misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると (逆)
- **Detail:** The supplement claims that for a $T_{1}$ space $X$, the property that every lower semicontinuous map into nonempty closed convex subsets of a Banach space has a continuous selection is equivalent to $X$ being paracompact. Michael's converse theorem requires more: the space must be a $T_{1}$ space that is also collectionwise normal (or at least normal/paracompact-like), and the selection property must hold for maps into closed convex subsets of a Banach space (or more precisely, the property characterizes paracompactness among collectionwise normal $T_{1}$ spaces). As stated, the equivalence is too strong: a $T_{1}$ space with the selection property need not be paracompact without an additional separation/normality hypothesis. The claim is stated more strongly than the literature supports.
- **Proposed fix:** For a collectionwise normal $T_{1}$ space $X$, the following are equivalent: (i) $X$ is paracompact; (ii) every lower semicontinuous map from $X$ into the nonempty closed convex subsets of a Banach space admits a continuous selection. (Michael 1956; not proved here.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Square-root example on the circle is not lower semicontinuous
- **Category:** Supplement/remark error
- **Location:** supplement / 凸性を外すと
- **Detail:** The supplement claims that $z\mapsto\{w:w^{2}=z\}$ on the unit circle is lower semicontinuous but has no continuous selection. This map is not lower semicontinuous: for $z_{0}=1$ and a small open ball $U$ around $w=1$, $\varphi^{-}(U)$ contains points $z$ near $1$ but not $z=1$ itself in a way that fails openness at $z_{0}=-1$? More directly, take $z_{0}=-1$ and $U$ a small ball around $w=i$; then $\varphi^{-}(U)$ contains points near $-1$ but not $-1$ itself, so $\varphi^{-}(U)$ is not open. Hence the example does not satisfy the stated hypothesis (lower semicontinuity), so it is not a valid counterexample to the claim that lower semicontinuity plus non-convex values can fail to have a selection.
- **Proposed fix:** Replace with a correct example: on $X=[0,1]$, let $\varphi(x)=\{-1,1\}$ for $x<1/2$ and $\varphi(x)=\{1\}$ for $x\ge 1/2$ is not lower semicontinuous either. A valid example of a lower semicontinuous map with non-convex closed values and no continuous selection is $\varphi\colon[0,1]\to 2^{\mathbb{R}}$, $\varphi(x)=\{0\}$ for $x<1/2$, $\varphi(1/2)=\{0,1\}$, $\varphi(x)=\{1\}$ for $x>1/2$ — but this is also not lsc. Use instead: $X=S^{1}$, $\varphi(z)=\{w:w^{2}=z\}$ is not lsc; a correct non-convex lsc example without selection is $\varphi(x)=\{0,1\}$ on $X=[0,1]$ with $\varphi$ constant — this has selections. The standard correct example: $X=[0,1]$, $\varphi(x)=\{0\}$ for $x<1/2$, $\varphi(1/2)=\{0,1\}$, $\varphi(x)=\{1\}$ for $x>1/2$ fails lsc. A genuine lsc non-convex example without selection: let $X=[0,1]$ and $\varphi(x)=\{x,1-x\}$; this is lsc and has selections. The cleanest correct statement: lower semicontinuity alone (without convexity) does not guarantee a continuous selection; e.g. $X=[0,1]$, $\varphi(x)=\{0\}$ for $x<1/2$, $\varphi(1/2)=\{0,1\}$, $\varphi(x)=\{1\}$ for $x>1/2$ is not lsc, so instead cite the standard example on the circle with the correct lsc verification, or simply state that convexity cannot be dropped and refer to Michael's examples without giving an incorrect one.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Bartle-Graves attribution to Michael selection theorem
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that the Bartle-Graves theorem (a surjective bounded linear map between Banach spaces has a continuous, not necessarily linear, right inverse) 'is known to be derived from this theorem' (Michael's selection theorem). While there are proofs of Bartle-Graves using selection-type arguments, the standard derivation uses the open mapping theorem and a partition of unity on the base space, not Michael's selection theorem directly. The claim that it 'follows from this theorem' is an overstatement/misattribution; the parenthetical '(uses the open mapping theorem)' even contradicts the claim that it is derived from Michael's theorem.
- **Proposed fix:** The Bartle-Graves theorem (a surjective bounded linear map between Banach spaces admits a continuous, not necessarily linear, right inverse) can be proved by a selection-type argument using the open mapping theorem and a partition of unity; it is related to, but not a direct corollary of, Michael's selection theorem.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Dugundji comparison overstated
- **Category:** Supplement/remark error
- **Location:** after corollary top:paracompact-banach-extension
- **Detail:** The text says the corollary is a generalization of Dugundji's theorem 'restricted to Banach-space values, with respect to the domain'. Dugundji's theorem holds for arbitrary locally convex topological vector spaces (not just Banach), and gives a linear extension operator with values in the closed convex hull. The corollary here requires a Banach space and does not give linearity of the extension operator. So it is not a generalization of Dugundji's theorem; it is a special case (Banach-valued) obtained via selection, and Dugundji is strictly stronger in the codomain and in producing a linear operator. The phrasing '一般化' (generalization) is inaccurate.
- **Proposed fix:** Since metric spaces are paracompact, this corollary recovers, for Banach-space-valued maps, a special case of Dugundji's extension theorem; Dugundji's theorem is stronger in that it allows arbitrary locally convex codomains and yields a linear extension operator with values in the closed convex hull.
- **Reported:** 2026-10-28 (10fede1)
