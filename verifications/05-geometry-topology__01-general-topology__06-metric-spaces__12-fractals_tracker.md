# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/12-fractals.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/12-fractals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (Propositions 12.1, 12.2, Hutchinson's theorem, and the two problems) are logically sound and correctly cite the hyperspace results. The issues found are confined to the supplement and hypcheck: the remark on countably many contractions is imprecise about why the closure is needed, the attribution of the OSC dimension formula is slightly imprecise, and the categorical remark is vague and unsupported. None of these affect the proofs.

## Issues

### ISSUE-0001 [Open] Countably many contractions: closure correction claim is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck / 有限個
- **Detail:** The hypcheck says that for countably many contractions with sup of Lipschitz constants < 1, the union may fail to be closed so a closure correction is needed. This is misleading: if the constants are uniformly bounded by c<1, the map A ↦ closure(∪_i f_i(A)) is still a contraction on K(X) and has a unique attractor; the closure is part of the definition of the operator, not a 'correction' needed because the union fails to be closed. Moreover the union of countably many compact sets need not be compact, so one must take the closure to land in K(X) regardless. The statement as written suggests the Hutchinson theorem fails without modification, which overstates the issue.
- **Proposed fix:** For countably many contractions with $\sup_{i}c_{i}=c<1$, the map $A\mapsto\overline{\bigcup_{i}f_{i}(A)}$ is a contraction on $\mathcal{K}(X)$ (the closure is needed because a countable union of compact sets need not be compact), so a unique attractor still exists; only when $\sup_{i}c_{i}=1$ can existence/uniqueness fail.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Open set condition attribution and statement
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that when the pieces 'hardly overlap' (open set condition), the similarity dimension equals the Hausdorff dimension, attributing this to Hutchinson 1981 and Moran. The correct classical statement (Hutchinson 1981, building on Moran 1946) requires the open set condition precisely; the phrase 'ほとんど重ならない' is vague but the parenthetical '(開集合条件)' pins it down, so the mathematical content is essentially correct. However, the attribution 'モランによる' for the equality of dimensions is imprecise: Moran's theorem concerns the Hausdorff dimension of a set defined by a separation condition, and the equality with similarity dimension under OSC is Hutchinson's formulation. This is a minor attribution imprecision rather than a false claim.
- **Proposed fix:** Under the open set condition, the similarity dimension $s$ (satisfying $\sum_{i}c_{i}^{s}=1$) equals the Hausdorff dimension of the attractor (Hutchinson 1981, based on Moran's earlier work on dimensional regularity).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Categorical/monad remark is vague and unsupported
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The claim that $\mathcal{K}$ 'has a monad-like structure (with the image operation and union)' and that $F$ 'reads as an algebra action on it' is stated without proof and is imprecise: the hyperspace functor is a monad on compact metric spaces (the 'Vietoris monad'), but the text does not establish this and the phrase 'algebra action' is not a precise mathematical statement. As a side comment it risks being an overstated claim.
- **Proposed fix:** The hyperspace construction $\mathcal{K}$ is the functor part of the Vietoris monad on compact metric spaces; the Hutchinson operator $F$ is a $\mathcal{K}$-algebra structure map, and its fixed point is the corresponding algebra.
- **Reported:** 2026-10-28 (10fede1)
