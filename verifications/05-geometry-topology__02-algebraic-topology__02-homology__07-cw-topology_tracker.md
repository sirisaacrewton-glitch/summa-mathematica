# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/07-cw-topology.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/07-cw-topology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (closed-set criterion, subcomplex properties, recognition lemma, product with $J$, partition of unity, compactness, local contractibility, HEP, good pair, cellular=single homology) is carefully argued and the citations match their targets. The genuine problems are confined to the supplement: the metrizability criterion for CW complexes is stated incorrectly (local finiteness alone is insufficient; countability of cells is also required, with the uncountable wedge as a counterexample), and the Hawaiian-earring remark is imprecise about that space not being a CW complex at all.

## Issues

### ISSUE-0001 [Open] Metrizability criterion for CW complexes is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, second bullet)
- **Detail:** The supplement claims that a CW complex is metrizable iff it is locally finite (each point has a neighborhood meeting only finitely many cells). This is false. The standard criterion is that a CW complex is metrizable iff it is locally finite AND has countably many cells (equivalently, it is first countable / the cells form a locally finite countable family). A counterexample to the stated claim: the uncountable wedge $\bigvee_{s\in S}S^{1}$ over an uncountable index set is locally finite (each point lies in finitely many cells, and each cell closure meets only the basepoint and itself), yet it is not metrizable (it is not first countable at the basepoint, since a neighborhood of the basepoint must contain all but finitely many circles). So local finiteness alone does not imply metrizability.
- **Proposed fix:** A CW complex is metrizable if and only if it is locally finite (each point has a neighborhood meeting only finitely many cells) **and** has at most countably many cells. In particular the countable wedge of circles (CW topology) is metrizable, while the uncountable wedge of circles is locally finite but not metrizable.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hawaiian earring is not a CW complex, so 'infinitely many cells' framing is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that putting the subspace topology of $\mathbb{R}^{2}$ on the union of circles of radius $1/n$ gives the Hawaiian earring, which is 'compact yet meets infinitely many cells'. This is acceptable as a statement about the subspace-topology space, but the phrasing 'same set with a different topology' alongside the CW discussion risks implying the Hawaiian earring is a CW complex with infinitely many cells. It is not a CW complex at all (it is not locally contractible at the origin, contradicting \ref{at:cw-locally-contractible}). The claim as literally stated (compact, meets infinitely many of the 'cells' $e_{\alpha}$) is true for the subspace topology, so this is a minor imprecision rather than a falsehood; flagging only the misleading identification.
- **Proposed fix:** The Hawaiian earring (the union of the circles of radius $1/n$ in $\mathbb{R}^{2}$ with the subspace topology) is compact but is **not** a CW complex: it is not locally contractible at the origin, so it cannot carry any CW structure, in contrast with \ref{at:cw-locally-contractible}.
- **Reported:** 2026-10-28 (8ccef3d)
