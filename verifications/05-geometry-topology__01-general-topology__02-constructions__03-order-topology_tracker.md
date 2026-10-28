# Verification tracker: `05-geometry-topology/01-general-topology/02-constructions/03-order-topology.html`

<!-- source: 05-geometry-topology/01-general-topology/02-constructions/03-order-topology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The core definitions, propositions and proofs (order topology base, Hausdorff, ordinal closure/sup, omega_1 space, order-vs-subspace) are essentially correct. The main genuine error is in the lexicographic square example: it is claimed to be first countable, which is false (it is the standard compact, non-separable, non-metrizable, non-first-countable example). The supplement also imprecisely frames the Suslin problem as being about order topologies rather than about complete dense ccc linear orders, and contains a misdirected pointer regarding hereditary normality.

## Issues

### ISSUE-0001 [Open] Lexicographic square is not first countable
- **Category:** Supplement/remark error
- **Location:** top:lexicographic-square
- **Detail:** The example claims the lexicographic square $I^{2}$ is first countable. This is false. At a point $(a,0)$ with $0<a\le1$ (or more precisely at points $(a,b)$ where $a$ is not the successor of a point in the first coordinate and $b=0$), there is no countable local base: any neighborhood of $(a,0)$ must contain a whole interval $\{a'\}\times[0,1]$ for $a'$ approaching $a$ from below, and uncountably many such vertical lines are needed. Indeed the lexicographic square is the standard example of a compact, non-separable, non-metrizable space that is *not* first countable (it is first countable only at points $(a,b)$ with $b>0$ or $a=0$). The claim 'first countable' is wrong.
- **Proposed fix:** Replace '第一可算である' with: 'この空間は第一可算ではない（例えば $(a,0)$（$0<a\le1$）は可算な基本近傍系をもたない）。コンパクト・非可分・距離化不能な空間の例として使われる。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Suslin problem mischaracterized as about order topologies / independence phrasing
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement states the Suslin problem as a question 'about spaces with the order topology' and that it is 'independent of ZFC'. The Suslin problem is a purely order-theoretic question: does every dense complete linear order with the countable chain condition (ccc) isomorphic to $\R$? It is not a question about order topologies per se. Also, the independence is a theorem of ZFC (Suslin's hypothesis is independent), which is fine, but the framing as 'a question about spaces with the order topology' is imprecise/misleading. The precise statement should be about complete dense linear orders with ccc.
- **Proposed fix:** Rewrite: 'ススリンの問題とは「可算鎖条件をもち稠密で完備な全順序は $\R$ と順序同型か」という全順序についての問いであり、その解答（ススリンの仮説）は ZFC から独立である。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hereditarily normal claim for LOTS needs care
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement asserts that every linearly ordered topological space is normal and 'more strongly hereditarily normal'. LOTS are indeed monotonically normal hence hereditarily normal (and collectionwise normal), so the claim is true. However the parenthetical '\ref{top:hausdorff} の後で扱う' points to the Hausdorff definition page, which does not treat hereditary normality; this is a misdirected pointer. The mathematical claim is correct, so this is only a link issue, but the pointer is to the wrong target.
- **Proposed fix:** Remove or correct the pointer: state '順序位相をもつ空間は（単調正規ゆえ）遺伝的に正規である' without citing \ref{top:hausdorff} as the place where this is treated.
- **Reported:** 2026-10-28 (8ccef3d)
