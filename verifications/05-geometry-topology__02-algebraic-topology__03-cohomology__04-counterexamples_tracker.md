# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/04-counterexamples.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/04-counterexamples.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 5 / Resolved: 1 / Ignored: 2

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Cech cohomology of the Hawaiian earring is not a countable direct sum
- **Category:** Unsupported fact
- **Location:** at:hawaiian-facts, item 1
- **Detail:** The fact claims $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\bigoplus_{n\ge1}\mathbb{Z}$ (countable). This is false. The Hawaiian earring is the inverse limit of the bouquets $\bigvee_{n\le N}C_{n}$, and by continuity of Cech cohomology $\check H^{1}(\mathbb{H})\cong\varinjlim H^{1}(\bigvee_{n\le N}C_{n})\cong\varinjlim\mathbb{Z}^{N}\cong\bigoplus_{n\ge1}\mathbb{Z}$, which is indeed countable — but the standard computation gives $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\prod_{n}\mathbb{Z}/\bigoplus_{n}\mathbb{Z}$ (the inverse limit of the $H_{1}$ of the bouquets with the retraction maps), which is uncountable. The stated 'continuity moves inverse limits to direct limits' reasoning is misapplied: the relevant inverse system is on homology/cohomology of the bouquets under the retractions, giving an inverse limit, not a direct limit. The summary table also asserts '$\check H^{1}$ is countable', propagating the error.
- **Proposed fix:** Replace item 1 with: $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\varprojlim_{N}H^{1}(\bigvee_{n\le N}C_{n})\cong\varprojlim_{N}\mathbb{Z}^{N}\cong\prod_{n\ge1}\mathbb{Z}/\bigoplus_{n\ge1}\mathbb{Z}$, which is uncountable. (The Cech cohomology is the inverse limit over the retractions, not a direct limit.)
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: Čech cohomology is continuous on compact Hausdorff spaces, so $\check H^{1}(\mathbb{H})\cong\varinjlim\mathbb{Z}^{N}\cong\bigoplus_{n}\mathbb{Z}$ is countable; the product appears for Čech homology, not cohomology.
**Opus Rebuttal:** Čech cohomology is continuous: $\check H^{1}(\varprojlim X_{N})\cong\varinjlim H^{1}(X_{N})=\varinjlim\mathbb{Z}^{N}=\bigoplus_{n}\mathbb{Z}$, countable. The product $\prod\mathbb{Z}$ appears for Čech HOMOLOGY ($\check H_{1}=\varprojlim H_{1}(X_{N})=\prod\mathbb{Z}$), not cohomology. The page is correct.

### ISSUE-0002 [Ignored: Valid Rebuttal] Map from singular to Cech homology claimed surjective but not injective
- **Category:** Unsupported fact
- **Location:** at:hawaiian-facts, item 3
- **Detail:** The fact states the natural map $H_{1}(\mathbb{H})\to\check H_{1}(\mathbb{H})\cong\mathbb{Z}^{\mathbb{N}}$ is surjective but not injective. This is wrong on two counts: (a) $\check H_{1}(\mathbb{H})$ is not $\mathbb{Z}^{\mathbb{N}}$ (see the previous issue; the Cech homology is the inverse limit $\prod\mathbb{Z}/\bigoplus\mathbb{Z}$, uncountable), and (b) the natural map from singular homology to Cech homology for the Hawaiian earring is not surjective — the Cech homology is far larger than the image of singular homology. The attribution to Eda–Kawamura and the 'surjective but not injective' description do not match the literature (Eda–Kawamura concern the failure of the map to be injective, not surjectivity onto a product).
- **Proposed fix:** Replace item 3 with: The natural map $H_{1}(\mathbb{H})\to\check H_{1}(\mathbb{H})$ is not injective (Eda–Kawamura); the Cech homology is the inverse limit $\varprojlim_{N}H_{1}(\bigvee_{n\le N}C_{n})\cong\prod_{n\ge1}\mathbb{Z}/\bigoplus_{n\ge1}\mathbb{Z}$, and the singular-to-Cech map is neither injective nor surjective.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: $\check H_{1}(\mathbb{H})=\varprojlim\mathbb{Z}^{N}=\mathbb{Z}^{\mathbb{N}}$, the map from singular $H_{1}$ is surjective (realize any winding sequence by shrinking loops) and non-injective (Eda–Kawamura).
**Opus Rebuttal:** $\check H_{1}(\mathbb{H})=\varprojlim\mathbb{Z}^{N}=\mathbb{Z}^{\mathbb{N}}$, and $H_{1}(\mathbb{H})\to\check H_{1}(\mathbb{H})$ is surjective (any sequence of winding numbers is realized by a loop that winds $n_{k}$ times around the $k$-th circle in time $2^{-k}$, continuous because the circles shrink) and not injective (Eda–Kawamura). The page is correct.

### ISSUE-0003 [Resolved] Summary table: Cech H^1 of Hawaiian earring is countable
- **Category:** Supplement/remark error
- **Location:** at:sec-hc-summary table
- **Detail:** The table row for the Hawaiian earring states '$\check H^{1}$ is countable', which contradicts the correct computation $\check H^{1}(\mathbb{H})\cong\prod_{n}\mathbb{Z}/\bigoplus_{n}\mathbb{Z}$ (uncountable). This is the same error as in at:hawaiian-facts item 1.
- **Proposed fix:** Change the Cech column entry for $\mathbb{H}$ to '$\check H^{1}\cong\prod_{n}\mathbb{Z}/\bigoplus_{n}\mathbb{Z}$ (uncountable)' and adjust the 'cause' column accordingly (the discrepancy is not countability but the inverse-limit structure).
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Resolved — The summary table now states '$\check H^{1}$ is countable', consistent with the correct computation $\bigoplus_{n}\mathbb{Z}$.

### ISSUE-0004 [Open] Cech cohomology continuity stated for arbitrary inverse limits of compact Hausdorff spaces
- **Category:** Supplement/remark error
- **Location:** second supplement, '連続性の公理'
- **Detail:** The supplement asserts that Cech cohomology satisfies $\check H^{*}(\varprojlim X_{i})\cong\varinjlim\check H^{*}(X_{i})$ for inverse limits of compact Hausdorff spaces. This is not true in general: continuity holds only under additional hypotheses (e.g. the spaces form an inverse system with surjective bonding maps, or a 'coherent' / movable system). For a general inverse limit of compact Hausdorff spaces the statement can fail. The example given ($K=\varprojlim\{0,1\}^{n}$) happens to work because the bonding maps are surjective, but the general claim as stated is false.
- **Proposed fix:** Restrict the statement: 'Cech cohomology is continuous for inverse limits $X=\varprojlim X_{i}$ of compact Hausdorff spaces when the bonding maps $X_{i+1}\to X_{i}$ are surjective (e.g. $K=\varprojlim\{0,1\}^{n}$): then $\check H^{*}(X)\cong\varinjlim\check H^{*}(X_{i})$.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The second supplement still asserts continuity $\check H^{*}(\varprojlim X_{i})\cong\varinjlim\check H^{*}(X_{i})$ for arbitrary inverse limits of compact Hausdorff spaces, which is false without a surjectivity/coherence hypothesis on the bonding maps.

### ISSUE-0005 [Open] Warsaw circle described as intersection of a decreasing sequence of annuli
- **Category:** Supplement/remark error
- **Location:** first supplement, '持ち上げの基準との関係'
- **Detail:** The supplement says '$W$ is the intersection of a decreasing sequence of annuli, and Cech cohomology continuity gives $\check H^{1}(W)=\mathbb{Z}$'. The Warsaw circle is not literally the intersection of a decreasing sequence of annuli in a way that makes the continuity argument valid as stated; the standard description is as an inverse limit of spaces each homotopy equivalent to $S^{1}$ with surjective bonding maps, and the continuity theorem requires that hypothesis (see previous issue). As written the justification is imprecise and relies on an unstated surjectivity/coherence condition.
- **Proposed fix:** State instead: '$W$ is the inverse limit of a sequence of compact spaces $W_{i}$, each homotopy equivalent to $S^{1}$, with surjective bonding maps $W_{i+1}\to W_{i}$; by continuity of Cech cohomology for such systems, $\check H^{1}(W)\cong\varinjlim\mathbb{Z}=\mathbb{Z}$.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The first supplement still says $W$ is the intersection of a decreasing sequence of annuli and invokes continuity, which requires the unstated surjectivity/coherence condition; the justification remains imprecise.

### ISSUE-0006 [Open] Hawaiian earring singular H_1 claimed uncountable via surjection to Z^N
- **Category:** Unsupported fact
- **Location:** at:hawaiian-h1 / Step 2
- **Detail:** The proposition claims the map $H_{1}(\mathbb{H})\to\prod_{n}H_{1}(C_{n})\cong\mathbb{Z}^{\mathbb{N}}$ is surjective, hence $H_{1}(\mathbb{H})$ uncountable. But the proof only constructs, for each integer sequence $(k_{n})$, a loop whose image under the retractions is $(k_{n})$; this shows the map is surjective onto $\mathbb{Z}^{\mathbb{N}}$, which is correct. However the statement 'とくに $H_{1}(\mathbb{H})$ は非可算' does not follow from surjectivity onto $\mathbb{Z}^{\mathbb{N}}$ alone unless one knows the map is well defined on homology classes and that distinct sequences give distinct classes — surjectivity onto an uncountable set does imply the source is uncountable, so this part is fine. The genuine problem is the parenthetical citation \ref{at:universal-necessary} for the definition of $\mathbb{H}$: that label is '普遍被覆の必要条件' (a necessary condition for universal covers), not a definition of the Hawaiian earring.
- **Proposed fix:** Replace the citation for the definition of $\mathbb{H}$ with a correct reference (or define $\mathbb{H}=\bigcup_{n\ge1}C_{n}$ with $C_{n}$ the circle of radius $1/n$ centered at $(1/n,0)$) instead of citing \ref{at:universal-necessary}.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0007 [Open] Warsaw circle pi_1 trivial but Cech H^1 = Z attributed to continuity
- **Category:** Supplement/remark error
- **Location:** first supplement, '持ち上げの基準との関係'
- **Detail:** The supplement states $\check H^{1}(W)=\mathbb{Z}$ 'because $W$ is the intersection of a decreasing sequence of annuli and by continuity of Cech cohomology'. This is the same unjustified continuity invocation as ISSUE-0005; moreover the value $\check H^{1}(W)=\mathbb{Z}$ is asserted without the required surjectivity hypothesis on the inverse system.
- **Proposed fix:** State instead: '$W$ is homotopy equivalent to $S^{1}$ in the sense that it is an inverse limit of spaces each homotopy equivalent to $S^{1}$ with surjective bonding maps, so by continuity of Čech cohomology with surjective bonding maps $\check H^{1}(W)=\mathbb{Z}$.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0008 [Open] Continuity axiom stated for arbitrary inverse limits of compact Hausdorff spaces
- **Category:** Supplement/remark error
- **Location:** second supplement, '連続性の公理'
- **Detail:** The supplement asserts $\check H^{*}(\varprojlim X_{i})\cong\varinjlim\check H^{*}(X_{i})$ for any inverse limit of compact Hausdorff spaces. This fails in general; continuity requires the bonding maps to be surjective (or a movability/coherence condition). The example $K=\varprojlim\{0,1\}^{n}$ works only because the bonding maps are surjective.
- **Proposed fix:** Add the hypothesis: 'for an inverse system of compact Hausdorff spaces with surjective bonding maps, $\check H^{*}(\varprojlim X_{i})\cong\varinjlim\check H^{*}(X_{i})$.'
- **Reported:** 2026-10-28 (048145a)
