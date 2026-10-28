# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/06-singular-comparison.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/06-singular-comparison.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hawaiian earring is not a counterexample to local contractibility vs. cohomological local connectivity
- **Category:** Supplement/remark error
- **Location:** hypcheck / 局所可縮性 bullet
- **Detail:** The hypcheck claims the Hawaiian earring is not locally contractible and that its singular and sheaf cohomology differ. The Hawaiian earring is in fact locally contractible (it is the one-point union of circles of radius 1/n, and each point has arbitrarily small contractible neighbourhoods; only the wedge point needs care, and small neighbourhoods there are cones on finitely many circles, hence contractible). So it is not an example of a space failing local contractibility. Moreover, the supplement's claim that local contractibility can be weakened to cohomological local connectivity is a genuine theorem, but the hypcheck's illustration is wrong.
- **Proposed fix:** Replace the example: 'たとえば局所可縮でないがコホモロジー的に局所連結な空間では両者は一致しうる。逆に、コホモロジー的局所連結性を満たさない空間（例えばハワイの耳飾りは局所可縮だが、より複雑な例として）では一致しないことがある。' More precisely: remove the Hawaiian earring as a non-locally-contractible example, since it IS locally contractible; if an example of failure is desired, cite a space that is not cohomologically locally connected.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hawaiian earring singular cohomology vs sheaf cohomology claim
- **Category:** Supplement/remark error
- **Location:** hypcheck / 局所可縮性 bullet
- **Detail:** The statement that for the Hawaiian earring '特異コホモロジーと層コホモロジーが異なる' is misleading: since the space is locally contractible and its open subsets are paracompact (it is a compact metric space), the comparison theorem of this very page applies and the two cohomologies agree. So the claimed discrepancy is false.
- **Proposed fix:** Delete the sentence about the Hawaiian earring, or replace with a correct statement: 'ハワイの耳飾りは局所可縮（コンパクト距離空間）なので本定理の仮定を満たし、両コホモロジーは一致する。' If a genuine counterexample to weakening the hypothesis is wanted, cite a space that is not cohomologically locally connected.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Cech cohomology equals sheaf cohomology requires the cover to be acyclic, not merely that finite intersections are contractible or empty for a good cover of a compact manifold
- **Category:** Supplement/remark error
- **Location:** supplement / チェックコホモロジーとの関係
- **Detail:** The supplement states that for spaces with a good cover (all finite intersections contractible or empty), e.g. compact smooth manifolds, sheaf, singular, and Cech cohomology of the good cover all agree. This is essentially correct via Leray, but the phrase '有限の計算である' (finite computation) is imprecise: the nerve of a good cover of a compact manifold is a finite simplicial complex only if the cover is finite, which requires compactness plus a locally finite cover—true, but the statement as written glosses over that the cover must be finite and that Leray's theorem requires the cover to be acyclic for the constant sheaf, which good covers are. The claim is essentially fine; the only imprecision is 'finite computation' which holds only for a finite good cover.
- **Proposed fix:** Clarify: 'コンパクト多様体は有限個の可縮な開集合からなる良い被覆をもつので、神経は有限単体複体であり、チェックコホモロジーは有限の計算で求まる。'
- **Reported:** 2026-10-28 (10fede1)
