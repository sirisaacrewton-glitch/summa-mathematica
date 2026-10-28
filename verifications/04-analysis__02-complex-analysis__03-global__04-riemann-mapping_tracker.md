# Verification tracker: `04-analysis/02-complex-analysis/03-global/04-riemann-mapping.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/04-riemann-mapping.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are logically sound: the extremal argument, Koebe square-root step, Hurwitz injectivity, and uniqueness are all correctly justified, and the equivalences in Theorem 4.2 are properly derived. The only genuine concern is a historical imprecision in the supplement regarding the attribution of the normal-family proof (Fejér–Riesz vs. the Koebe–Carathéodory extremal method actually used). Everything else checked out.

## Issues

### ISSUE-0001 [Open] Incorrect historical attribution of the normal-family proof
- **Category:** Supplement/remark error
- **Location:** supplement (歴史)
- **Detail:** The supplement says the normal-family proof in its current form is due to Fejér and Riesz. The standard attribution is that Fejér and F. Riesz gave a proof via normal families (Fejér–Riesz, 1922), but the extremal-problem/normal-family method is usually credited to Koebe and Carathéodory, and the Fejér–Riesz proof is not the extremal-derivative argument used here. The sentence conflates the two and is historically imprecise.
- **Proposed fix:** The normal-family method goes back to Koebe and Carathéodory; a proof via normal families was also given by Fejér and F. Riesz (1922). The extremal-problem proof presented here (maximizing |f'(z_0)|) is the Koebe–Carathéodory approach, combined with Koebe's square-root trick.
- **Reported:** 2026-10-28 (8ccef3d)
