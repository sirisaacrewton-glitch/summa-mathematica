# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/11-hyperspaces.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/11-hyperspaces.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Vietoris monad requires compact Hausdorff spaces, not arbitrary metric spaces
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that $X\mapsto\mathcal{K}(X)$ with union $\mathcal{K}(\mathcal{K}(X))\to\mathcal{K}(X)$ and singletons $X\to\mathcal{K}(X)$ forms a monad (the Vietoris monad). This is true on the category of compact Hausdorff spaces (with continuous maps), but not on arbitrary metric spaces with continuous maps: the hyperspace functor is not even well behaved as an endofunctor there (e.g. $\mathcal{K}(X)$ need not be compact, and the monad laws/continuity fail in general). Since the page works with arbitrary metric spaces, the statement as written is false/overstated.
- **Proposed fix:** On the category of compact Hausdorff spaces (with continuous maps), $X\mapsto\mathcal{K}(X)$ together with the union map $\mathcal{K}(\mathcal{K}(X))\to\mathcal{K}(X)$ and the singleton map $X\to\mathcal{K}(X)$ forms a monad (the Vietoris monad). This is not asserted for arbitrary metric spaces.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Curtis–Schori theorem needs a nondegenerate Peano continuum; statement about Hilbert cube is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that if $X$ is a nondegenerate Peano continuum then $\mathcal{K}(X)$ is homeomorphic to the Hilbert cube. The Curtis–Schori theorem indeed gives that $\mathcal{K}(X)$ is homeomorphic to the Hilbert cube for a nondegenerate Peano continuum $X$; however the claim as phrased ('とされる', 'here we do not treat') is acceptable but the precise hypothesis (nondegenerate, i.e. more than one point, Peano continuum = compact connected locally connected metric space) should be stated. As written it is essentially correct but the hypothesis 'Peano continuum' is not defined on the page and the nondegeneracy is essential (a single point gives a one-point hyperspace). This is a minor imprecision rather than a clear error; flagging for the missing definition/hypothesis.
- **Proposed fix:** If $X$ is a nondegenerate Peano continuum (a compact, connected, locally connected metric space with more than one point), then $\mathcal{K}(X)$ is homeomorphic to the Hilbert cube (Curtis–Schori theorem).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Blaschke selection theorem attribution: bounded convex bodies vs compact sets
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says theorem 11.4 (compactness of the hyperspace) is known in convex geometry as the Blaschke selection theorem: a sequence of bounded convex bodies in $\R^{n}$ has a subsequence converging in the Hausdorff distance. This is correct in substance, but the Blaschke selection theorem specifically concerns bounded closed (or compact) convex sets and requires boundedness to get relative compactness; the general hyperspace compactness theorem requires the ambient space to be compact. The phrasing 'is known as' slightly overstates the identification: theorem 11.4 is a generalization, and the Blaschke version needs the boundedness restriction (a bounded subset of $\R^{n}$ has compact closure). This is a mild imprecision.
- **Proposed fix:** Theorem 11.4 generalizes the Blaschke selection theorem: for a bounded sequence of nonempty compact convex subsets of $\R^{n}$, the hyperspace of their compact closure is compact, so the sequence has a subsequence converging in the Hausdorff distance.
- **Reported:** 2026-10-28 (10fede1)
