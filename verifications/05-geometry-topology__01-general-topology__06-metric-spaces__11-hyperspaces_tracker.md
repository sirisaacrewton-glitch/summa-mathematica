# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/11-hyperspaces.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/11-hyperspaces.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the completeness and compactness proofs, the Hausdorff-metric formula, the Vietoris-equals-Hausdorff theorem, and the closed-bounded proposition are all correct, and the hypcheck is accurate. The only concerns are in the supplement: the claim that $X\mapsto\mathcal{K}(X)$ forms the Vietoris monad is stated for arbitrary metric spaces when the Vietoris monad lives on compact Hausdorff spaces, which is an overstatement worth qualifying. The Curtis–Schori remark is essentially correct. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Vietoris monad requires compact Hausdorff X, not arbitrary metric X
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that $X\mapsto\mathcal{K}(X)$ with union $\mathcal{K}(\mathcal{K}(X))\to\mathcal{K}(X)$ and singletons $X\to\mathcal{K}(X)$ forms a monad (the Vietoris monad). The Vietoris monad is defined on the category of compact Hausdorff spaces (or on compacta), not on arbitrary metric spaces. For a general metric space $X$, $\mathcal{K}(X)$ is the space of nonempty compact subsets, and the union map $\mathcal{K}(\mathcal{K}(X))\to\mathcal{K}(X)$ is fine set-theoretically, but the construction is not the standard Vietoris monad and the monad laws/topology are not the usual statement. The claim as stated (for arbitrary metric $X$) is overstated.
- **Proposed fix:** Restrict the claim: 'On the category of compact Hausdorff spaces (in particular compact metric spaces), $X\mapsto\mathcal{K}(X)$ with the union map and the singleton map forms a monad, the Vietoris monad (not verified here).'
- **Reported:** 2026-10-28 (8ccef3d)
