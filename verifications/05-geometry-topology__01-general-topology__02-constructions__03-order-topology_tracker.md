# Verification tracker: `05-geometry-topology/01-general-topology/02-constructions/03-order-topology.html`

<!-- source: 05-geometry-topology/01-general-topology/02-constructions/03-order-topology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Suslin problem mischaracterized as being about order topologies
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement states that the Suslin problem is a question 'about spaces with the order topology'. The Suslin problem is a purely order-theoretic question: whether every dense complete linear order with the countable chain condition is isomorphic to $\R$. It is not a question about order topologies; the connection to topology (Suslin lines give Suslin spaces, counterexamples to the Suslin line / non-separable ccc LOTS) is indirect. The phrasing '順序位相をもつ空間についての問い' is imprecise/overstated.
- **Proposed fix:** Replace with: 'ススリンの問題（\ref{set:page-suslin-problem}）は「可算鎖条件をもつ稠密で完備な全順序は $\R$ と同型か」という順序についての問いであり、ZFC から独立である。これに反例を与える順序（ススリン線）は、順序位相を入れると可分でない ccc 空間（ススリン空間）を与える。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Lexicographic square claimed first countable and non-metrizable without justification; compactness criterion imprecise
- **Category:** Supplement/remark error
- **Location:** top:lexicographic-square
- **Detail:** The example asserts the lexicographic square is compact 'because an ordered set with the order topology that has a sup and max/min is compact' — this is not a correct general criterion (e.g. $[0,1)$ has a min and sups but is not compact). The actual reason compactness holds here is that $I^{2}$ is a complete linear order with both endpoints, and for LOTS completeness plus endpoints gives compactness. Also the claim 'first countable' is true but the parenthetical justification is missing; and 'non-metrizable' is asserted without argument (it follows from compact + metrizable ⇒ separable, contradicting non-separability). These are stated-only claims that are true but the stated reason for compactness is wrong.
- **Proposed fix:** Replace the compactness justification with: 'この空間は完備（任意の空でない部分集合が上限をもつ）で最小元・最大元をもつ全順序である。完備かつ両端をもつ全順序の順序位相はコンパクトである（順序位相のコンパクト性の判定法）。' And justify non-metrizability: 'コンパクト距離空間は可分であるから、非可分なこの空間は距離化不能である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck claim that omega_1 is sequentially compact but not compact is stated without the needed choice caveat and conflates with compactness example
- **Category:** Supplement/remark error
- **Location:** top:omega-one-space / hypcheck
- **Detail:** The hypcheck says $\omega_{1}$ is 'sequentially compact but not compact' and calls it 'the standard example of the difference between compactness and sequential compactness'. This is misleading: (i) sequential compactness of $\omega_{1}$ requires the countable choice used in part 3, which the hypcheck itself flags only for parts 2 and 3; (ii) more importantly, $\omega_{1}$ is not the standard example distinguishing compact from sequentially compact — the standard example is $[0,\omega_{1})$ being sequentially compact but not compact, which is exactly what is claimed, but the framing 'difference between compactness and sequential compactness' is fine only if sequential compactness is correctly attributed. The real issue: the open cover $\{[0,\beta):\beta<\omega_{1}\}$ does not cover $\omega_{1}$ itself if the space is $\omega_{1}$ (which excludes $\omega_{1}$), so as written the cover is not an open cover of the space $\omega_{1}$; it covers $\omega_{1}$ only as a subset, and $[0,\beta)$ are not open in $\omega_{1}$ in the required sense at $0$ unless handled. The cover should be $\{[0,\beta]:\beta<\omega_{1}\}$ or $\{(-\infty,\beta):\beta<\omega_{1}\}$ with the correct open sets.
- **Proposed fix:** Correct the cover: '開被覆 $\{[0,\beta):\beta<\omega_{1}\}\cup\{\omega_{1}\}$（$\omega_{1}+1$ の場合）' or for the space $\omega_{1}$ use $\{[0,\beta]:\beta<\omega_{1}\}$ where $[0,\beta]$ is open in $\omega_{1}$ only when $\beta$ is a successor; more simply state: '$\omega_{1}$ は点列コンパクトだがコンパクトでない（開被覆 $\{(\leftarrow,\beta):\beta<\omega_{1}\}$ は $\omega_{1}$ を覆うが、有限部分被覆をもたない）'.
- **Reported:** 2026-10-28 (10fede1)
