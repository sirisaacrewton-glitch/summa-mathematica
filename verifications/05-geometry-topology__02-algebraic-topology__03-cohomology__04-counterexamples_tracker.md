# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/04-counterexamples.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/04-counterexamples.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (sine curve, Cantor set, Warsaw circle singular and sheaf cohomology, Hawaiian earring $H_{1}$) are essentially correct. The problems concentrate in the stated-only `fact` about the Hawaiian earring and in the closing supplement: the Cech cohomology of the Hawaiian earring is the uncountable product $\prod_{n\ge1}\mathbb{Z}$, not the countable direct sum, which also invalidates the summary table entry and the stated surjectivity of the singular-to-Cech map; and the 'continuity axiom' for Cech cohomology is stated in a generality that is false without ANR/Vietoris–Begle hypotheses.

## Issues

### ISSUE-0001 [Open] Cech cohomology of the Hawaiian earring is not a countable direct sum
- **Category:** Unsupported fact
- **Location:** at:hawaiian-facts, item 1
- **Detail:** The claim $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\bigoplus_{n\ge1}\mathbb{Z}$ is false. The Hawaiian earring is the inverse limit of the bouquets $\bigvee_{n\le N}C_{n}$, and Cech cohomology of a compact Hausdorff space is the direct limit of the cohomologies of its open covers (or of an inverse system of ANRs), giving $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\prod_{n\ge1}\mathbb{Z}$, which is uncountable, not the countable direct sum. The stated justification (continuity moving inverse limits to direct limits) is also misapplied: continuity gives $\check H^{*}(\varprojlim X_{i})\cong\varinjlim\check H^{*}(X_{i})$ only when the $X_{i}$ form an inverse system with the limit, and here $\check H^{1}(\bigvee_{n\le N}C_{n})=\mathbb{Z}^{N}$ whose direct limit is $\bigoplus\mathbb{Z}$ only if one uses cofinal finite sub-bouquets with retractions, which is not the case; the correct computation yields the product. This also contradicts the summary table row claiming $\check H^{1}$ of $\mathbb{H}$ is countable.
- **Proposed fix:** Replace item 1 with: $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\prod_{n\ge1}\mathbb{Z}$ (uncountable), since $\mathbb{H}$ is the inverse limit of the bouquets $\bigvee_{n\le N}C_{n}$ and Cech cohomology of a compact Hausdorff space is computed as the direct limit over open covers (equivalently over ANR approximations), giving the product $\prod_{n\ge1}\mathbb{Z}$. Correspondingly, in the summary table change the Hawaiian earring's Cech entry from 'countable' to 'uncountable product $\prod_{n\ge1}\mathbb{Z}$' and adjust the 'reason' column.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Map from singular to Cech homology is not a surjection onto the product
- **Category:** Unsupported fact
- **Location:** at:hawaiian-facts, item 3
- **Detail:** The statement that the natural map $H_{1}(\mathbb{H})\to\check H_{1}(\mathbb{H})\cong\mathbb{Z}^{\mathbb{N}}$ is surjective but not injective is inconsistent with the (correct) fact that $\check H_{1}(\mathbb{H})\cong\prod_{n\ge1}\mathbb{Z}$ and with the known result of Eda–Kawamura: the canonical map from singular homology to Cech homology (or the inverse-limit/Shape homology) is injective on $H_{1}$ in the relevant formulation, and the attribution 'Eda–Kawamura' with 'surjective but not injective' is not what those papers establish. As stated (with the wrong target group and the wrong injectivity claim) it is false/misattributed.
- **Proposed fix:** Replace item 3 with: 'The natural map $H_{1}(\mathbb{H})\to\check H_{1}(\mathbb{H})\cong\prod_{n\ge1}\mathbb{Z}$ (singular to Cech homology) is not an isomorphism; the precise failure of injectivity/surjectivity is due to Eda–Kawamura and is not proved here.' If a definite statement is desired, cite the correct theorem (Eda–Kawamura: the singular homology $H_{1}(\mathbb{H})$ maps onto the inverse limit of the finitely generated parts, and the Cech/Shape homology is the inverse limit $\prod\mathbb{Z}$) without asserting surjectivity onto the full product.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Continuity axiom for Cech cohomology misstated
- **Category:** Supplement/remark error
- **Location:** at:sec-hc-summary, supplement '連続性の公理'
- **Detail:** The supplement asserts that Cech cohomology satisfies $\check H^{*}(\varprojlim X_{i})\cong\varinjlim\check H^{*}(X_{i})$ for compact Hausdorff inverse limits. This is not a general theorem: Cech cohomology is continuous only under additional hypotheses (e.g. the $X_{i}$ are compact ANRs/neighborhood retracts with the inverse system having the limit, or one uses the Vietoris–Begle / Milnor-type conditions). Applied naively to $K=\varprojlim\{0,1\}^{n}$ it would give $\check H^{0}(K)\cong\varinjlim H^{0}(\{0,1\}^{n})$, which happens to be correct here, but the general statement as written is false (e.g. for arbitrary inverse systems of compacta the direct limit can fail to compute $\check H^{*}$). The claim 'singular theory does not satisfy this' is also imprecise: singular cohomology does satisfy a Mayer–Vietoris/continuity statement for nested closed sets under suitable hypotheses.
- **Proposed fix:** Restate as: 'For an inverse system of compact Hausdorff spaces $X_{i}$ that are ANRs (or under the Vietoris–Begle hypotheses), Cech cohomology satisfies $\check H^{*}(\varprojlim X_{i})\cong\varinjlim\check H^{*}(X_{i})$. In the examples $K=\varprojlim\{0,1\}^{n}$ and $W=\bigcap$ annuli this continuity computes $\check H^{0}(K)$ and $\check H^{1}(W)$; singular cohomology does not commute with such limits in these examples ($H^{0}_{\mathrm{sing}}(K)$ is uncountable while $\varinjlim H^{0}(\{0,1\}^{n})$ is countable, and $H^{1}_{\mathrm{sing}}(W)=0$).'
- **Reported:** 2026-10-28 (10fede1)
