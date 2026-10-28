# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/04-jordan-brouwer.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/04-jordan-brouwer.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are essentially correct. The genuine problems are concentrated in the supplement and hypcheck: the Alexander duality formula is stated with unreduced Čech cohomology, which is false (e.g. for a point), and the hypcheck overstates what the homology computation determines about individual complementary components, claiming their reduced homology vanishes, which is not established and is false for wild embeddings in higher dimensions. A minor uncited invocation of the Schoenflies theorem is also noted.

## Issues

### ISSUE-0001 [Open] Alexander duality stated with wrong indexing/coefficients
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement states Alexander duality as $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ for compact $K$. The standard statement is $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K;\mathbb{Z})$ only when using reduced Čech cohomology; with ordinary (unreduced) Čech cohomology the correct form is $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ where the right side must be reduced Čech cohomology, or equivalently $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ fails for $i=n-1$ unless reduced. For $K$ a point, $S^{n}\setminus K\simeq\mathbb{R}^{n}$ has $\tilde H_{i}=0$ for all $i$, while unreduced $\check H^{n-i-1}(\mathrm{pt})=\mathbb{Z}$ for $i=n-1$, so the stated formula is false as written. Also the claim that for $K$ a disk/sphere the right side 'agrees with singular cohomology' needs $K$ locally contractible, which is fine, but the indexing error is the real problem.
- **Proposed fix:** State it as $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ with $\check H$ denoting *reduced* Čech cohomology (equivalently $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K;\mathbb{Z})$ for reduced Čech), and note that for $K$ a point both sides vanish.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that homology of each component is 0 is imprecise
- **Category:** Supplement/remark error
- **Location:** at:jordan-brouwer hypcheck
- **Detail:** The hypcheck says 'what homology sees is the number of components and that the reduced homology of each component is 0 (by the argument of \ref{at:complement-disk} componentwise)'. But \ref{at:complement-disk} gives $\tilde H_{i}(S^{n}\setminus h(D^{k}))=0$ for the complement of a *disk*, not for the individual complementary components of an embedded sphere. For $n=2$ the components are disks (Jordan-Schoenflies) so their reduced homology vanishes, but for $n\ge3$ the complement of an embedded $(n-1)$-sphere has two components whose individual reduced homology need not vanish (e.g. Alexander horned sphere exterior is not simply connected, so $\tilde H_{1}\neq0$). The parenthetical 'by the argument of complement-disk componentwise' is therefore false in general.
- **Proposed fix:** Replace with: 'what homology sees is the number of components (and the fact that $\tilde H_{i}$ of the whole complement vanishes for $i\neq0$); it does not see the individual homology of the components, which for $n\ge3$ need not vanish.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Alexander horned sphere exterior not simply connected but claim about homology
- **Category:** Supplement/remark error
- **Location:** at:jordan-brouwer hypcheck
- **Detail:** The hypcheck correctly notes the exterior of Alexander's horned sphere is not simply connected, but then concludes that homology only sees 'the number of components and that each component's reduced homology is 0'. This is inconsistent: if the exterior is not simply connected it may still have $\tilde H_{1}=0$ (the horned sphere complement is in fact homotopy equivalent to a wedge issue), but the assertion that each component has vanishing reduced homology is not established and is generally false for wild embeddings in higher dimensions. The statement overstates what the theorem provides.
- **Proposed fix:** Delete the clause 'and that the reduced homology of each component is 0'; state only that the theorem determines the number of components and that $\tilde H_{i}(S^{n}\setminus h(S^{n-1}))=0$ for $i\neq0$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Schoenflies attribution for n=2 stated as known but not proved
- **Category:** Unsupported fact
- **Location:** at:jordan-brouwer hypcheck
- **Detail:** The hypcheck asserts 'for $n=2$ it holds (known as the Schoenflies theorem)'. This is a correct attribution, but it is stated as a bare fact with no proof and no citation, and it is used to support the claim that components are disks. Since the page's theorem only gives homology, invoking Schoenflies here is an unsupported side claim. It is true, so this is borderline; but the phrasing 'the two components are each homeomorphic to a disk' is only true for tame (i.e. all) embeddings in $n=2$ by Schoenflies, which is correct. No error in truth value, but it is an uncited substantial theorem.
- **Proposed fix:** Either cite a reference for the Schoenflies theorem or soften to 'for $n=2$ this is the classical Schoenflies theorem (not proved here)' to make clear it is not derived from the results on this page.
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** The hypcheck names the Schoenflies theorem explicitly as a known result not proved here; it is not used as a step of any proof on the page.
