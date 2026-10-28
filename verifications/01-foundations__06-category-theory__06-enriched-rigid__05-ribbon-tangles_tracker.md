# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/05-ribbon-tangles.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/05-ribbon-tangles.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Parity twist on super vector spaces is not a ribbon structure
- **Category:** Supplement/remark error
- **Location:** example (cat:sec-tng-ribbon), item 2
- **Detail:** The example claims that on the category of super vector spaces, $\theta_{V}=(-1)^{|v|}$ (parity) is a ribbon structure, and that with it the quantum dimension equals the ordinary dimension. The parity map $v\mapsto(-1)^{|v|}v$ is not a natural transformation: for an odd linear map $f:V\to W$ we have $f(\theta_{V}v)=-\theta_{W}f(v)$, so naturality fails. Hence it is not a twist in the sense of the definition. (The correct ribbon structure on super vector spaces is the identity twist, which is already item 2's first sentence; the parity twist is the pivotal/spherical structure, not a twist.)
- **Proposed fix:** Delete the sentence "$\theta_{V}=(-1)^{|v|}$ (parity) is also a ribbon structure...". If a comparison with \ref{cat:pivotal-trace} is wanted, say instead: "The parity map $\theta_{V}=(-1)^{|v|}$ is not natural (it fails for odd maps), so it is not a twist; it is the pivotal/spherical structure, under which the quantum dimension equals the ordinary dimension (cf. Example 2 of \ref{cat:pivotal-trace})."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Reidemeister III other cases not derivable from II alone
- **Category:** Supplement/remark error
- **Location:** cat:jones-invariant / Step 2
- **Detail:** Step 2 says "the other orientations/over-under combinations of Reidemeister III are obtained by combining with Reidemeister II and the form above". This is imprecise: the remaining Reidemeister III moves cannot be derived from Reidemeister II and the single braid relation alone; one also needs the naturality of the braiding (sliding strands past cups/caps) and invertibility, i.e. the full braided structure. As stated the justification is incomplete.
- **Proposed fix:** Replace with: "The remaining over/under combinations of Reidemeister III follow from the braid relation together with naturality of the braiding and invertibility (the Yang–Baxter equation \ref{cat:yang-baxter} and the naturality of $\gamma$), not from Reidemeister II alone."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] TL with general delta: rigidity claim and 'only when' claim
- **Category:** Supplement/remark error
- **Location:** supplement, '前提を変えると'
- **Detail:** Two problems. (1) The claim that $\mathbf{TL}$ with a general $\delta\in k$ is a rigid monoidal category is not justified and can fail: self-duality of object $1$ requires the zig-zag, which holds formally, but the statement as written asserts rigidity for arbitrary $\delta$ without the usual non-degeneracy; more importantly (2) the assertion that $\bar\sigma$ is the inverse of $\sigma$ 'only when $\delta=-A^{2}-A^{-2}$' is stated too strongly: $\sigma\bar\sigma=1+(A^{2}+A^{-2}+\delta)e$, and this equals $1$ iff $A^{2}+A^{-2}+\delta=0$ (assuming $e\neq0$), which is correct, but the accompanying claim that 'Reidemeister III holds under the same condition' is not established and is not literally true for all $\delta$ (the braid relation needs the specific relation among $A,\delta$).
- **Proposed fix:** Restrict the statement: "For general $\delta\in k$, $\sigma\bar\sigma=1+(A^{2}+A^{-2}+\delta)e$, so $\bar\sigma$ is a two-sided inverse of $\sigma$ iff $\delta=-A^{2}-A^{-2}$ (when $e\neq0$). The Reidemeister III relation $\sigma_{1}\sigma_{2}\sigma_{1}=\sigma_{2}\sigma_{1}\sigma_{2}$ likewise holds precisely under this same relation among $A$ and $\delta$." Only assert rigidity when the relevant non-degeneracy (e.g. $\delta$ invertible or the standard TL parameters) is assumed.
- **Reported:** 2026-10-28 (10fede1)
