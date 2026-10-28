# Verification tracker: `04-analysis/02-complex-analysis/02-residues/01-winding-number.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/01-winding-number.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof (Dixon's argument), the winding-number properties, and the simply-connected corollaries are logically sound and the citations match their targets. The genuine problems are confined to side remarks: the 'higher viewpoint' supplement conflates the winding number with the H_1(U)-class rather than the image under inclusion into H_1(C\{a}), and the example's assertion that C^- is star-shaped with respect to 1 is geometrically false (the correct star center is any point on the positive real axis, and 1 does work only for the ray direction... the segment from 1 to a point just above the negative axis crosses the cut). Both are correctable with small edits.

## Issues

### ISSUE-0001 [Open] Homology class of a cycle in C\{a} vs. H_1(U)
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the winding number is the class of Γ in H_1(C\{a}) ≅ Z, and that 'homologous to zero' corresponds to that class being 0 in H_1(U). This is imprecise: n(Γ,a) is the image of the class [Γ] ∈ H_1(U) under the map H_1(U) → H_1(C\{a}) induced by inclusion, not the class of Γ in H_1(C\{a}) itself (Γ need not lie in C\{a} as a cycle in that space in a canonical way, and the statement as written conflates the two). Also the claim that 'the class in H_1(U) is 0 iff all winding numbers about points outside U vanish' is the correct statement (a form of Alexander duality), but the text phrases it as if the winding number itself is the H_1(U)-class.
- **Proposed fix:** The winding number n(Γ,a) is the image of the homology class [Γ] ∈ H_1(U) under the homomorphism H_1(U) → H_1(C\setminus\{a\}) ≅ Z induced by inclusion. Γ is homologous to zero in U iff [Γ] maps to 0 in H_1(C\setminus\{a\}) for every a ∉ U, i.e. iff all winding numbers about points outside U vanish (a 2-dimensional case of Alexander duality).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] C^- is star-shaped with respect to 1
- **Category:** Supplement/remark error
- **Location:** example (cx:holomorphic-log example)
- **Detail:** The example states that C^- = C \ (-∞,0] is star-shaped with respect to 1. This is false: for z ∈ C^- with, e.g., z = -1 + εi (small ε>0), the segment from 1 to z crosses the negative real axis, so it leaves C^-. C^- is star-shaped with respect to any point on the positive real axis, e.g. 1 is on the boundary ray removed... actually 1 ∈ C^- and the segment [1,z] for z near the negative axis passes through points with negative real part and small imaginary part, which are in C^- only if not on (-∞,0]; the segment from 1 to z=-1+εi passes through 0+... it crosses the negative real axis near -1, leaving C^-. So the claim is wrong.
- **Proposed fix:** C^- is star-shaped with respect to any point on the positive real axis (e.g. 1 is fine only if we mean the ray from 1 stays in C^-; correct statement: C^- is star-shaped with respect to 1? No — replace by: C^- is star-shaped with respect to any point r>0 on the positive real axis, hence contractible).
- **Reported:** 2026-10-28 (8ccef3d)
