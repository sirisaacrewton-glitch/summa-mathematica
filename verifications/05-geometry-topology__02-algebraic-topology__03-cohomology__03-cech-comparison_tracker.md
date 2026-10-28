# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/03-cech-comparison.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/03-cech-comparison.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proof (double complex comparison, generalized Mayer–Vietoris, good-cover Cech = singular) is sound, and the hypcheck correctly notes the weaker hypothesis needed. The only genuine issue is a slightly overstated/imprecise remark in the Alexander–Spanier supplement about that theory being 'sensitive to local properties' and belonging to the disagreeing side; the precise relation (Alexander–Spanier = Cech on paracompact Hausdorff, = singular on locally contractible) should be stated. Other checked items (nerve theorem, Godement attribution, Bredon) are acceptable as stated.

## Issues

### ISSUE-0001 [Open] Alexander–Spanier cohomology is not 'sensitive to local structure' in the claimed way
- **Category:** Supplement/remark error
- **Location:** supplement (アレクサンダー–スパニエのコホモロジー)
- **Detail:** The supplement claims that Alexander–Spanier cohomology, being defined via 'tuples of points', is 'like Cech theory sensitive to local properties' and 'belongs to the side that disagrees with singular theory' in the counterexamples of the next page. This is misleading: Alexander–Spanier cohomology agrees with Cech cohomology on paracompact Hausdorff spaces and with singular cohomology on locally contractible spaces; on the standard counterexamples (e.g. the topologist's sine curve, the Hawaiian earring) it is the Cech-type theory that differs from singular, but the phrase 'sensitive to local properties' and 'belongs to the disagreeing side' is imprecise and could be read as claiming Alexander–Spanier is a genuinely different theory from Cech. The precise statement is that Alexander–Spanier = Cech on paracompact Hausdorff spaces, and both can differ from singular on locally bad spaces.
- **Proposed fix:** Replace the last sentence with: 'This theory agrees with Cech cohomology on paracompact Hausdorff spaces and with singular cohomology on locally contractible spaces; hence on the examples of the next page it agrees with Cech cohomology and can differ from singular cohomology.'
- **Reported:** 2026-10-28 (8ccef3d)
