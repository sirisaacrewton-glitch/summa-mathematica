# Verification tracker: `05-geometry-topology/04-differential-geometry/01-curves/01-curves-frenet.html`

<!-- source: 05-geometry-topology/04-differential-geometry/01-curves/01-curves-frenet.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well organized. The main genuine problem is in the supplement: for a C^n curve the last Frenet vector e_n is only continuous (C^0), not C^1 as claimed, since it is built from cofactors of e_1,…,e_{n-1} and e_{n-1} is only C^1. All other checked statements (Frenet–Serret, curvature invariance, fundamental theorem, plane/space curve results, helix, local canonical form, problems) appear correct.

## Issues

### ISSUE-0001 [Open] Smoothness of e_n in the C^n supplement is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (前提を弱めると)
- **Detail:** The supplement claims that for a C^n curve, e_k (k ≤ n-1) is C^{n-k} and e_n is C^{1}. But e_n is built from the cofactors of e_1,…,e_{n-1}, which are polynomials in their components; since e_{n-1} is only C^{1}, the cofactor w (hence e_n) is only C^{0} in general, not C^{1}. So the stated regularity of e_n is too strong.
- **Proposed fix:** Replace "$e_{n}$ はその余因子から作るので $C^{1}$ 級になり" by "$e_{n}$ はその余因子から作るので $C^{0}$ 級（連続）になり". (The Frenet–Serret formula still holds with continuous coefficients.)
- **Reported:** 2026-10-28 (8ccef3d)
