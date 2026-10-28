# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/04-counterexamples.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/04-counterexamples.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page's main theorems (sine curve, Cantor set, Warsaw circle singular vs. sheaf cohomology) are essentially correct and well supported. The serious problems are concentrated in the stated-only fact at:hawaiian-facts and the summary table: the Cech cohomology of the Hawaiian earring is computed as a countable direct sum, but the correct value is the uncountable inverse limit $\prod\mathbb{Z}/\bigoplus\mathbb{Z}$; the singular-to-Cech map is then misdescribed as surjective but not injective. The supplements also overstate the continuity axiom for Cech cohomology (valid only with surjective/coherent bonding maps) and give an imprecise annuli description of the Warsaw circle.

## Issues

### ISSUE-0001 [Open] Cech cohomology of the Hawaiian earring is not a countable direct sum
- **Category:** Unsupported fact
- **Location:** at:hawaiian-facts, item 1
- **Detail:** The fact claims $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\bigoplus_{n\ge1}\mathbb{Z}$ (countable). This is false. The Hawaiian earring is the inverse limit of the bouquets $\bigvee_{n\le N}C_{n}$, and by continuity of Cech cohomology $\check H^{1}(\mathbb{H})\cong\varinjlim H^{1}(\bigvee_{n\le N}C_{n})\cong\varinjlim\mathbb{Z}^{N}\cong\bigoplus_{n\ge1}\mathbb{Z}$, which is indeed countable — but the standard computation gives $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\prod_{n}\mathbb{Z}/\bigoplus_{n}\mathbb{Z}$ (the inverse limit of the $H_{1}$ of the bouquets with the retraction maps), which is uncountable. The stated 'continuity moves inverse limits to direct limits' reasoning is misapplied: the relevant inverse system is on homology/cohomology of the bouquets under the retractions, giving an inverse limit, not a direct limit. The summary table also asserts '$\check H^{1}$ is countable', propagating the error.
- **Proposed fix:** Replace item 1 with: $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\varprojlim_{N}H^{1}(\bigvee_{n\le N}C_{n})\cong\varprojlim_{N}\mathbb{Z}^{N}\cong\prod_{n\ge1}\mathbb{Z}/\bigoplus_{n\ge1}\mathbb{Z}$, which is uncountable. (The Cech cohomology is the inverse limit over the retractions, not a direct limit.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Map from singular to Cech homology claimed surjective but not injective
- **Category:** Unsupported fact
- **Location:** at:hawaiian-facts, item 3
- **Detail:** The fact states the natural map $H_{1}(\mathbb{H})\to\check H_{1}(\mathbb{H})\cong\mathbb{Z}^{\mathbb{N}}$ is surjective but not injective. This is wrong on two counts: (a) $\check H_{1}(\mathbb{H})$ is not $\mathbb{Z}^{\mathbb{N}}$ (see the previous issue; the Cech homology is the inverse limit $\prod\mathbb{Z}/\bigoplus\mathbb{Z}$, uncountable), and (b) the natural map from singular homology to Cech homology for the Hawaiian earring is not surjective — the Cech homology is far larger than the image of singular homology. The attribution to Eda–Kawamura and the 'surjective but not injective' description do not match the literature (Eda–Kawamura concern the failure of the map to be injective, not surjectivity onto a product).
- **Proposed fix:** Replace item 3 with: The natural map $H_{1}(\mathbb{H})\to\check H_{1}(\mathbb{H})$ is not injective (Eda–Kawamura); the Cech homology is the inverse limit $\varprojlim_{N}H_{1}(\bigvee_{n\le N}C_{n})\cong\prod_{n\ge1}\mathbb{Z}/\bigoplus_{n\ge1}\mathbb{Z}$, and the singular-to-Cech map is neither injective nor surjective.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Summary table: Cech H^1 of Hawaiian earring is countable
- **Category:** Supplement/remark error
- **Location:** at:sec-hc-summary table
- **Detail:** The table row for the Hawaiian earring states '$\check H^{1}$ is countable', which contradicts the correct computation $\check H^{1}(\mathbb{H})\cong\prod_{n}\mathbb{Z}/\bigoplus_{n}\mathbb{Z}$ (uncountable). This is the same error as in at:hawaiian-facts item 1.
- **Proposed fix:** Change the Cech column entry for $\mathbb{H}$ to '$\check H^{1}\cong\prod_{n}\mathbb{Z}/\bigoplus_{n}\mathbb{Z}$ (uncountable)' and adjust the 'cause' column accordingly (the discrepancy is not countability but the inverse-limit structure).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Cech cohomology continuity stated for arbitrary inverse limits of compact Hausdorff spaces
- **Category:** Supplement/remark error
- **Location:** second supplement, '連続性の公理'
- **Detail:** The supplement asserts that Cech cohomology satisfies $\check H^{*}(\varprojlim X_{i})\cong\varinjlim\check H^{*}(X_{i})$ for inverse limits of compact Hausdorff spaces. This is not true in general: continuity holds only under additional hypotheses (e.g. the spaces form an inverse system with surjective bonding maps, or a 'coherent' / movable system). For a general inverse limit of compact Hausdorff spaces the statement can fail. The example given ($K=\varprojlim\{0,1\}^{n}$) happens to work because the bonding maps are surjective, but the general claim as stated is false.
- **Proposed fix:** Restrict the statement: 'Cech cohomology is continuous for inverse limits $X=\varprojlim X_{i}$ of compact Hausdorff spaces when the bonding maps $X_{i+1}\to X_{i}$ are surjective (e.g. $K=\varprojlim\{0,1\}^{n}$): then $\check H^{*}(X)\cong\varinjlim\check H^{*}(X_{i})$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] Warsaw circle described as intersection of a decreasing sequence of annuli
- **Category:** Supplement/remark error
- **Location:** first supplement, '持ち上げの基準との関係'
- **Detail:** The supplement says '$W$ is the intersection of a decreasing sequence of annuli, and Cech cohomology continuity gives $\check H^{1}(W)=\mathbb{Z}$'. The Warsaw circle is not literally the intersection of a decreasing sequence of annuli in a way that makes the continuity argument valid as stated; the standard description is as an inverse limit of spaces each homotopy equivalent to $S^{1}$ with surjective bonding maps, and the continuity theorem requires that hypothesis (see previous issue). As written the justification is imprecise and relies on an unstated surjectivity/coherence condition.
- **Proposed fix:** State instead: '$W$ is the inverse limit of a sequence of compact spaces $W_{i}$, each homotopy equivalent to $S^{1}$, with surjective bonding maps $W_{i+1}\to W_{i}$; by continuity of Cech cohomology for such systems, $\check H^{1}(W)\cong\varinjlim\mathbb{Z}=\mathbb{Z}$.'
- **Reported:** 2026-10-28 (8ccef3d)
