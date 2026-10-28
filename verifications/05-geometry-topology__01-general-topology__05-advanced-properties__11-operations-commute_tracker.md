# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/11-operations-commute.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/11-operations-commute.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement's '高い視点' paragraph, where the exponential bijection is incorrectly upgraded to an adjunction and then used to claim that $-\times Y$ preserves quotients, which is both mathematically unjustified (the bijection is not a natural homeomorphism in general) and in tension with the cited counterexample. A secondary imprecision concerns the box-topology remark in the hypcheck of top:oc-products, which should be restricted to the specific example. The Glicksberg fact and its table row are correct as stated.

## Issues

### ISSUE-0001 [Open] Exponential law does not make -×Y a left adjoint preserving quotients
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement claims that because $C(Z\times Y,W)\cong C(Z,C_{c}(Y,W))$ holds naturally in $Z,W$, the functor $-\times Y$ has a right adjoint $C_{c}(Y,-)$, and hence (being a left adjoint) preserves colimits, so it sends quotient maps to quotient maps, giving the categorical reason for Whitehead's theorem. This is wrong on several counts. (1) The exponential bijection $C(Z\times Y,W)\cong C(Z,C_{c}(Y,W))$ is only a bijection of hom-sets; it is not a natural homeomorphism in general, so it does not establish an adjunction. (2) Even granting an adjunction, a left adjoint preserves colimits (coproducts, coequalizers), but a quotient map $q\colon X\to X/{\sim}$ is not simply a coequalizer that $-\times Y$ automatically turns into a quotient map onto $X/{\sim}\times Y$; the product of a quotient map with $1_{Y}$ need not be a quotient map (this is exactly the content of the counterexample cited). The claim that $-\times Y$ 'sends quotient maps to quotient maps' whenever $Y$ is LCH contradicts nothing only because the adjunction does not actually exist as stated; as written the reasoning is circular/incorrect.
- **Proposed fix:** Replace with: 'When $Y$ is LCH, the compact-open topology gives a natural bijection $C(Z\times Y,W)\cong C(Z,C_{c}(Y,W))$ (\ref{top:exponential-bijective}); when moreover $Z$ is Hausdorff this is a homeomorphism (\ref{top:exponential-law}), i.e. $-\times Y$ is left adjoint to $C_{c}(Y,-)$ on the relevant category of Hausdorff spaces. A left adjoint preserves colimits, and this is the conceptual reason why $q\times 1_{Y}$ is a quotient map when $Y$ is LCH (\ref{top:whitehead-product}); without local compactness the adjunction fails and $q\times 1_{Y}$ need not be a quotient map (\ref{top:product-quotient-counterexample}).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Box topology claim in hypcheck: equality holds is imprecise
- **Category:** Supplement/remark error
- **Location:** top:oc-products / hypcheck
- **Detail:** The hypcheck says 'In the box topology $\prod_{n}(0,1)$ is open and equality holds.' The equality referred to is $(\prod_{i}A_{i})^{\circ}=\prod_{i}A_{i}^{\circ}$. In the box topology $\prod_{n}(0,1)$ is indeed open, so its interior is itself, and $\prod_{n}(0,1)^{\circ}=\prod_{n}(0,1)$, so equality does hold for this particular family. However the statement as phrased ('equality holds') suggests the general equality $(\prod A_{i})^{\circ}=\prod A_{i}^{\circ}$ holds in the box topology, which is false in general (e.g. take $A_{n}$ with empty interior but whose product has nonempty interior is not the issue; rather the box topology interior of a product can be strictly larger than the product of interiors when infinitely many factors are involved and the $A_{i}$ are not all open). The remark should be restricted to the specific example.
- **Proposed fix:** Restrict the claim to the example: 'In the box topology (\ref{top:box-topology}) the set $\prod_{n}(0,1)$ is itself open, so for this family $(\prod_{n}(0,1))^{\circ}=\prod_{n}(0,1)^{\circ}$; the failure of equality in the product topology is thus specific to that topology.'
- **Reported:** 2026-10-28 (8ccef3d)
