# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/04-jordan-brouwer.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/04-jordan-brouwer.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main theorems and their proofs are essentially correct. The recurring problems are in the side remarks: the hypcheck of the Jordan–Brouwer theorem still asserts that each complementary component has vanishing reduced homology (in tension with its own horned-sphere remark), and the supplement still states Alexander duality without reduced Čech cohomology, which is false for $K$ a point. Two further medium-confidence issues concern an overstated 'homology commutes with colimits' remark and a skipped chart identification in the sphere-embedding problem solution. ISSUE-0004 is correctly rebutted and should be closed.

## Issues

### ISSUE-0001 [Open] Alexander duality stated with wrong indexing/coefficients
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement states Alexander duality as $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ for compact $K$. The standard statement is $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K;\mathbb{Z})$ only when using reduced Čech cohomology; with ordinary (unreduced) Čech cohomology the correct form is $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ where the right side must be reduced Čech cohomology, or equivalently $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ fails for $i=n-1$ unless reduced. For $K$ a point, $S^{n}\setminus K\simeq\mathbb{R}^{n}$ has $\tilde H_{i}=0$ for all $i$, while unreduced $\check H^{n-i-1}(\mathrm{pt})=\mathbb{Z}$ for $i=n-1$, so the stated formula is false as written. Also the claim that for $K$ a disk/sphere the right side 'agrees with singular cohomology' needs $K$ locally contractible, which is fine, but the indexing error is the real problem.
- **Proposed fix:** State it as $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ with $\check H$ denoting *reduced* Čech cohomology (equivalently $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K;\mathbb{Z})$ for reduced Čech), and note that for $K$ a point both sides vanish.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still states Alexander duality as $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ without specifying reduced Čech cohomology; for $K$ a point this is false as written (left side 0, right side $\mathbb{Z}$ at $i=n-1$).

### ISSUE-0002 [Open] Claim that homology of each component is 0 is imprecise
- **Category:** Supplement/remark error
- **Location:** at:jordan-brouwer hypcheck
- **Detail:** The hypcheck says 'what homology sees is the number of components and that the reduced homology of each component is 0 (by the argument of \ref{at:complement-disk} componentwise)'. But \ref{at:complement-disk} gives $\tilde H_{i}(S^{n}\setminus h(D^{k}))=0$ for the complement of a *disk*, not for the individual complementary components of an embedded sphere. For $n=2$ the components are disks (Jordan-Schoenflies) so their reduced homology vanishes, but for $n\ge3$ the complement of an embedded $(n-1)$-sphere has two components whose individual reduced homology need not vanish (e.g. Alexander horned sphere exterior is not simply connected, so $\tilde H_{1}\neq0$). The parenthetical 'by the argument of complement-disk componentwise' is therefore false in general.
- **Proposed fix:** Replace with: 'what homology sees is the number of components (and the fact that $\tilde H_{i}$ of the whole complement vanishes for $i\neq0$); it does not see the individual homology of the components, which for $n\ge3$ need not vanish.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The hypcheck still says homology sees 'the number of components and that each component's reduced homology is 0 (by the argument of complement-disk componentwise)', which is not what complement-disk gives for the individual complementary components of an embedded sphere in $n\ge3$.

### ISSUE-0003 [Open] Alexander horned sphere exterior not simply connected but claim about homology
- **Category:** Supplement/remark error
- **Location:** at:jordan-brouwer hypcheck
- **Detail:** The hypcheck correctly notes the exterior of Alexander's horned sphere is not simply connected, but then concludes that homology only sees 'the number of components and that each component's reduced homology is 0'. This is inconsistent: if the exterior is not simply connected it may still have $\tilde H_{1}=0$ (the horned sphere complement is in fact homotopy equivalent to a wedge issue), but the assertion that each component has vanishing reduced homology is not established and is generally false for wild embeddings in higher dimensions. The statement overstates what the theorem provides.
- **Proposed fix:** Delete the clause 'and that the reduced homology of each component is 0'; state only that the theorem determines the number of components and that $\tilde H_{i}(S^{n}\setminus h(S^{n-1}))=0$ for $i\neq0$.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — Same hypcheck sentence remains; the claim that each component has vanishing reduced homology is not established and is generally false for wild embeddings in higher dimensions.

### ISSUE-0004 [Ignored: Valid Rebuttal] Schoenflies attribution for n=2 stated as known but not proved
- **Category:** Unsupported fact
- **Location:** at:jordan-brouwer hypcheck
- **Detail:** The hypcheck asserts 'for $n=2$ it holds (known as the Schoenflies theorem)'. This is a correct attribution, but it is stated as a bare fact with no proof and no citation, and it is used to support the claim that components are disks. Since the page's theorem only gives homology, invoking Schoenflies here is an unsupported side claim. It is true, so this is borderline; but the phrasing 'the two components are each homeomorphic to a disk' is only true for tame (i.e. all) embeddings in $n=2$ by Schoenflies, which is correct. No error in truth value, but it is an uncited substantial theorem.
- **Proposed fix:** Either cite a reference for the Schoenflies theorem or soften to 'for $n=2$ this is the classical Schoenflies theorem (not proved here)' to make clear it is not derived from the results on this page.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The Schoenflies attribution is explicitly flagged as a known result not proved here and is not used as a proof step; the rebuttal is correct.
**Opus Rebuttal:** The hypcheck names the Schoenflies theorem explicitly as a known result not proved here; it is not used as a step of any proof on the page.

### ISSUE-0005 [Open] Hypcheck claims exterior of horned sphere is not simply connected but also that each component has vanishing reduced homology
- **Category:** Supplement/remark error
- **Location:** at:jordan-brouwer hypcheck
- **Detail:** The hypcheck states both that the exterior of Alexander's horned sphere is not simply connected and that 'homology sees the number of components and that each component's reduced homology is 0'. These are in tension: a non-simply-connected component can still have $\tilde H_{1}=0$, but the assertion that every component has vanishing reduced homology is not a consequence of the theorem and is false in general for wild embeddings. The parenthetical justification '(by the argument of \ref{at:complement-disk} componentwise)' does not apply, since complement-disk concerns complements of disks, not the complementary components of an embedded sphere.
- **Proposed fix:** Replace the last sentence with: 'What the theorem and \ref{at:complement-sphere} give is only the number of components (two) and that $S^{n}\setminus h(S^{n-1})$ has the reduced homology of $S^{0}$; nothing is asserted about the reduced homology of the individual components, which need not vanish (e.g. the exterior of Alexander's horned sphere is not simply connected).'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Alexander duality stated without reduced Čech cohomology
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement writes $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ for compact $K$ with 'right side is Čech cohomology'. With unreduced Čech cohomology this fails, e.g. $K=\{\mathrm{pt}\}$: the left side is $0$ for all $i$ while $\check H^{0}(\mathrm{pt})=\mathbb{Z}$. The correct statement uses reduced Čech cohomology on the right.
- **Proposed fix:** State: '$\tilde H_{i}(S^{n}\setminus K)\cong\check{\tilde H}^{n-i-1}(K)$ for compact $K$, where the right side is reduced Čech cohomology.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0007 [Open] Claim that homology is the colimit over increasing open covers is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says \ref{at:compact-support} shows 'homology commutes with the colimit of an increasing sequence of open sets'. Lemma \ref{at:compact-support} only shows that a cycle in $Y_{1}$ which bounds in $Y=\bigcup Y_{m}$ bounds already in some $Y_{m}$; this gives that $H_{*}(Y)=\varinjlim H_{*}(Y_{m})$ only when the $Y_{m}$ are open and the sequence is increasing, and only for homology of the specific chain-level kind, not for arbitrary colimits. The phrasing 'ホモロジーは開集合の増大列の余極限と交換する' overstates the lemma, which is a compact-support statement about a single cycle, not a general exactness/colimit-commutation theorem.
- **Proposed fix:** Rephrase: '\ref{at:compact-support} shows that a cycle which bounds in the union already bounds in some member of the increasing open cover; this is the compact-support property of singular chains, and it is what lets the limiting argument in Step 5 go through.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0008 [Open] Problem solution asserts $f(S^{n})$ is open using invariance of domain on hemispheres without checking hypotheses
- **Category:** Unsupported fact
- **Location:** at:prob-sphere-no-embedding solution
- **Detail:** The solution says 'the upper hemisphere interior is homeomorphic to an open ball, so by invariance of domain $f(\{x_{n+1}>0\})$ is open in $\mathbb{R}^{n}$'. Invariance of domain requires the map to be a continuous injection from an open subset of $\mathbb{R}^{n}$ into $\mathbb{R}^{n}$; here the domain $\{x_{n+1}>0\}\subset S^{n}$ is an open subset of $S^{n}$, which is locally $\mathbb{R}^{n}$ but not literally an open subset of $\mathbb{R}^{n}$. One must first choose a stereographic chart, and the conclusion '$f$ is an open map near every point, hence $f(S^{n})$ is open' also needs the argument that a neighborhood of each image point lies in $f(S^{n})$ — which is fine but is not spelled out. As written the step skips the chart identification.
- **Proposed fix:** Insert: 'Using a stereographic chart, $\{x_{n+1}>0\}$ is an open subset of $\mathbb{R}^{n}$ and $f$ restricted to it is a continuous injection into $\mathbb{R}^{n}$; invariance of domain then gives that $f(\{x_{n+1}>0\})$ is open in $\mathbb{R}^{n}$. Since every point of $S^{n}$ lies in some open hemisphere, $f(S^{n})$ is a union of open sets, hence open.'
- **Reported:** 2026-10-28 (048145a)
