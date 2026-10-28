# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/04-jordan-brouwer.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/04-jordan-brouwer.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are essentially correct: the induction in at:complement-disk and at:complement-sphere, the separation theorem, invariance of domain, and the corollary on non-existence of injections are logically sound, and the cited labels match their uses. The genuine problems are confined to the supplement and hypcheck side remarks: the Alexander duality formula is stated without reducedness (making it false for e.g. a point), and the hypcheck overstates what the homology computation shows about the individual components. These should be corrected; the rest of the page needs no change.

## Issues

### ISSUE-0001 [Open] Alexander duality stated with wrong indexing / missing reducedness and hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement (一般化) in at:sec-jb-applications
- **Detail:** The supplement states Alexander duality as $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ for compact $K$. For a compact subset $K\subset S^{n}$ the correct statement is $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ only when the right side is reduced Čech cohomology; with ordinary (unreduced) Čech cohomology the formula fails, e.g. $K$ a point: $S^{n}\setminus\{pt\}\simeq\mathbb{R}^{n}$ has $\tilde H_{i}=0$ for all $i$, while $\check H^{n-i-1}(\{pt\})=\mathbb{Z}$ for $i=n-1$ and $0$ otherwise, so the unreduced version gives a spurious $\mathbb{Z}$ in degree $n-1$. Also the claim that for $K$ a disk or sphere 'the right side agrees with singular cohomology' needs $K$ to be a nice (e.g. locally contractible / ENR) space; the parenthetical 'コンパクトで局所可縮とは限らない' is fine but the reducedness is essential and omitted.
- **Proposed fix:** State: for compact $K\subset S^{n}$, $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$ where $\check H^{\bullet}$ denotes **reduced** Čech cohomology. If $K$ is a finite CW complex (in particular a disk or sphere), reduced Čech cohomology coincides with reduced singular cohomology, and the formula reproduces the two theorems above.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that homology of each component is 0 is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck of at:jordan-brouwer
- **Detail:** The hypcheck says 'ホモロジーが見ているのは成分の数と、各成分の（被約）ホモロジーが $0$ であること'. This is not what the cited results give: \ref{at:complement-sphere} gives $\tilde H_{0}(S^{n}\setminus C)\cong\mathbb{Z}$ (two components) and $\tilde H_{i}=0$ for $i\ne0$, which says nothing about the homology of the individual components $U,V$ (indeed for a wild knot exterior $H_{1}\ne0$). The parenthetical '(\ref{at:complement-disk} の議論を成分ごとに)' does not justify it either, since \ref{at:complement-disk} concerns complements of disks, not the components themselves.
- **Proposed fix:** Replace with: 'What the homology computes is the number of components (via $\tilde H_{0}\cong\mathbb{Z}$) and the vanishing of $\tilde H_{i}(S^{n}\setminus C)$ for $i\ne0$; it gives no information about the individual homology of $U$ or $V$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Schoenflies attribution for n=2 and Alexander horned sphere claim
- **Category:** Supplement/remark error
- **Location:** hypcheck of at:jordan-brouwer
- **Detail:** The statement 'n=2 では成り立つ（シェーンフリースの定理）' is correct, and the claim that the outside of Alexander's horned sphere is not simply connected is correct. However the sentence '分離される 2 成分がそれぞれ「円板と同相」とは限らない' combined with the horned-sphere example is slightly overstated as written: for the horned sphere the *inside* is a ball and the *outside* is not simply connected, so the correct contrast is that one side fails to be a ball/simply connected. As stated it is acceptable but the example should be tied explicitly to the outside component to avoid the impression that neither side is a ball.
- **Proposed fix:** Clarify: 'For $n=2$ both components are homeomorphic to open disks (Schoenflies). For $n=3$ the inside of Alexander's horned sphere is a ball but the outside component is not simply connected, so the components need not be disks/balls in general.'
- **Reported:** 2026-10-28 (10fede1)
