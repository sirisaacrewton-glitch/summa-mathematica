# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/03-theorema-egregium.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/03-theorema-egregium.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the Gauss formula, Christoffel symbol formula, Gauss/Codazzi equations, theorema egregium, and the orthogonal-coordinate curvature formula are all properly proved and cited. The main concern is a supplement sentence overstating that both the Gauss and Codazzi-Mainardi equations express the flatness of R^3; only the Gauss equation does. Other checked items (examples, problems, fact on the fundamental theorem) appear sound.

## Issues

### ISSUE-0001 [Open] Codazzi-Mainardi as flatness of R^3 is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the Gauss and Codazzi-Mainardi equations are 'the flatness of R^3 written along the surface frame'. The Gauss equation expresses the flatness of the ambient connection (R^3 flat), but the Codazzi-Mainardi equations express the symmetry of the second fundamental form / that the shape operator is a genuine (Codazzi) tensor, not flatness of R^3. Attributing both to flatness is overstated.
- **Proposed fix:** The Gauss equation is the expression of the flatness of $\mathbb{R}^{3}$ (its curvature tensor vanishes) written in the surface frame; the Codazzi-Mainardi equations express the symmetry $h_{ij,l}-h_{il,j}+\dots=0$, i.e. that the derivative of the shape operator is symmetric (the second fundamental form is a Codazzi tensor).
- **Reported:** 2026-10-28 (8ccef3d)
