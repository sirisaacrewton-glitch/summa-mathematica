# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/05-orientation.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/05-orientation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the boundary fundamental class formula $\partial[M]=[\partial M]$ is stated without specifying the induced boundary orientation, which makes it imprecise/false as written. The rest of the page (local homology lemma, orientation double cover, fundamental class lemma, top homology theorem, examples) appears logically sound and the citations match their targets.

## Issues

### ISSUE-0001 [Open] Boundary fundamental class formula is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says that for an orientable manifold with boundary, the fundamental class of the boundary is given by $\partial[M]=[\partial M]$. This is imprecise: the boundary orientation induced by an orientation of $M$ is the one for which $[\partial M]$ is the boundary of $[M]$, i.e. $\partial[M]=[\partial M]$ holds only with the *induced* boundary orientation. As written (without specifying the induced orientation) the equality is not well-defined, since $[\partial M]$ depends on a choice of orientation of $\partial M$ and the opposite orientation gives $- [\partial M]$.
- **Proposed fix:** For an oriented compact $n$-manifold with boundary, $H_{n}(M,\partial M)$ has a fundamental class $[M]$, and the boundary $\partial M$ inherits an induced orientation for which $\partial[M]=[\partial M]$ (the boundary orientation).
- **Reported:** 2026-10-28 (8ccef3d)
