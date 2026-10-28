# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/07-constructions.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/07-constructions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proof of the constructible number characterization, the classical impossibility results, Gauss-Wantzel, the fundamental theorem of algebra via Galois theory, and the normal basis theorem are all sound. The only genuine issue is in the supplement: the claim that origami constructions can solve cubic equations and are characterized by extension degrees is overstated, since origami cannot solve all cubics and the characterization is by towers of degree at most 3, not arbitrary degree towers.

## Issues

### ISSUE-0001 [Open] Origami constructions do not solve all cubics
- **Category:** Supplement/remark error
- **Location:** supplement (作図の一般化)
- **Detail:** The supplement claims that origami (folding) constructions can solve cubic equations and that the constructible numbers for such constructions are characterized by extension degrees. While origami can solve some cubics (e.g. doubling the cube, trisecting angles), it cannot solve all cubics: the set of origami-constructible numbers is not closed under solving arbitrary cubics, and the characterization is not simply by degrees of towers. The statement is overstated.
- **Proposed fix:** Replace with: 'Origami (paper-folding) constructions can solve certain cubic equations (e.g. doubling the cube and trisecting angles become possible), and the origami-constructible numbers form a field characterized by towers of extensions of degree at most 3 (not all cubics are solvable by origami).'
- **Reported:** 2026-10-28 (8ccef3d)
