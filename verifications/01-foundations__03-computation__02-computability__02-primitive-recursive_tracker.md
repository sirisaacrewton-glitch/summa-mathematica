# Verification tracker: `01-foundations/03-computation/02-computability/02-primitive-recursive.html`

<!-- source: 01-foundations/03-computation/02-computability/02-primitive-recursive.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, closure proposition, pairing, simultaneous recursion, and the two directions of PR = for-computable) is logically sound. The only concerns are in the supplement: the Robinson parameter-free recursion remark is overstated, and the Meyer–Ritchie/Grzegorczyk indexing is imprecise. Both are minor and confined to side remarks.

## Issues

### ISSUE-0001 [Open] Robinson's restriction claim misstated
- **Category:** Supplement/remark error
- **Location:** supplement, 前提の検討 first bullet
- **Detail:** The claim that restricting to parameter-free primitive recursion (f(0)=c, f(y+1)=h(y,f(y))) still yields the same class using tuple coding is not correct as stated: parameter-free recursion alone (with composition) does not give the full class of primitive recursive functions without additional closure properties; the standard result (Robinson) concerns a specific restricted schema and requires care. Stated as 'same class' it is overstated.
- **Proposed fix:** Replace with: 'It is known (Robinson) that a restricted form of recursion without parameters, combined with suitable closure properties, yields the same class; the precise statement is not verified on this site.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Loop-depth hierarchy indexing
- **Category:** Supplement/remark error
- **Location:** supplement, ループの深さの階層
- **Detail:** The claim that classes L_n (nesting depth ≤ n) coincide with the Grzegorczyk class E^{n+1} for n≥2 has an off-by-one/indexing issue: Meyer–Ritchie's LOOP hierarchy is usually matched with Grzegorczyk classes with a shift; stating 'E^{n+1}' for depth n≥2 without specifying conventions is imprecise and likely misindexed.
- **Proposed fix:** State the correspondence with explicit indexing convention, e.g. 'the class of functions computable by for-programs of nesting depth ≤ n coincides with the Grzegorczyk class E^{n+1} (with E^0 the linear functions), for n≥2', or drop the precise index.
- **Reported:** 2026-10-28 (8ccef3d)
