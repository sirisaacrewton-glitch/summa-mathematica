# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/07-cw-topology.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/07-cw-topology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Metrizability criterion for CW complexes is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, second bullet)
- **Detail:** The supplement claims that a CW complex is metrizable iff it is locally finite (each point has a neighborhood meeting only finitely many cells). This is false. The correct classical criterion (Hatcher, Appendix A) is that a CW complex is metrizable iff it is locally finite AND has countably many cells. A locally finite CW complex with uncountably many cells (e.g. an uncountable wedge of circles, or an uncountable discrete set of 0-cells) is locally finite but not metrizable, since a metrizable space with a discrete closed subset is second countable there, contradicting uncountability. The stated criterion is strictly stronger than the truth and is contradicted by these examples.
- **Proposed fix:** Replace with: "A CW complex is metrizable if and only if it is locally finite and has countably many cells (equivalently, it is locally finite and second countable). In particular the countable wedge of circles (CW topology) is metrizable, while an uncountable wedge of circles is locally finite but not metrizable."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hawaiian earring is not a CW complex with the subspace topology
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that putting the subspace topology of R^2 on the set of countably many circles joined at a point gives the Hawaiian earring, and that it is 'compact but meets infinitely many cells'. The set-theoretic description is fine, but the phrase '無限個の胞体と交わる' (meets infinitely many cells) is only meaningful if the space is regarded as a cell decomposition; the point being made (compactness vs. finitely many cells) is correct for the subspace topology. However the sentence as written can be read as asserting that the Hawaiian earring is a CW complex (with that cell decomposition) which is compact yet infinite — this contradicts the theorem at:cw-finite-subcomplex.3 (compact CW complex is finite). The intended contrast is precisely that the subspace topology is NOT the CW (weak) topology, so the space is not a CW complex. The wording should make this explicit to avoid asserting a false statement.
- **Proposed fix:** Rewrite: "The Hawaiian earring (the union of the circles of radius 1/n in R^2, with the subspace topology) is compact but is not a CW complex with the obvious cell decomposition: the subspace topology is strictly finer than the weak (CW) topology on the same cells, and with the CW topology the space would fail to be compact since it has infinitely many cells (at:cw-finite-subcomplex.3)."
- **Reported:** 2026-10-28 (10fede1)
