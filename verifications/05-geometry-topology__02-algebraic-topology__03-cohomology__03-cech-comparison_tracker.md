# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/03-cech-comparison.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/03-cech-comparison.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Alexander–Spanier cohomology is not sensitive to local pathology in the claimed way
- **Category:** Supplement/remark error
- **Location:** supplement (アレクサンダー–スパニエのコホモロジー)
- **Detail:** The supplement claims that Alexander–Spanier cohomology, being defined via tuples of points, is 'sensitive to local properties like Cech theory' and 'belongs to the side that disagrees with singular theory' in the counterexamples of the next page. This is misleading: Alexander–Spanier cohomology agrees with Cech cohomology on paracompact Hausdorff spaces and with singular cohomology on locally contractible spaces; on the standard pathological examples (e.g. the topologist's sine curve, the Warsaw circle) Alexander–Spanier cohomology agrees with singular cohomology, not with Cech. The claim that it 'disagrees with singular theory' on the next page's examples is false.
- **Proposed fix:** Replace the last sentence with: 'This theory agrees with Cech cohomology on paracompact Hausdorff spaces and with singular cohomology on locally contractible spaces; in fact on the examples of the next page Alexander–Spanier cohomology agrees with singular cohomology, so it does not detect the same pathology as Cech theory.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Godement attribution for Cech = sheaf cohomology needs paracompactness of all open subsets / fine resolution
- **Category:** Supplement/remark error
- **Location:** fact at:cw-local-properties, item 3
- **Detail:** Item 3 states that for paracompact Hausdorff spaces and any sheaf F, Cech cohomology equals sheaf cohomology, citing Godement. The standard Godement result requires that the space be paracompact (and typically that the cover be such that the Cech-to-derived spectral sequence degenerates), and the equality Cech = sheaf cohomology for arbitrary sheaves on paracompact Hausdorff spaces holds when one uses the colimit over all covers; this is correct for paracompact Hausdorff spaces. However the statement as written ('任意の層 F について') is the standard theorem and is fine; the issue is that the page elsewhere (theorem at:cohomology-agreement.2) requires all open subsets paracompact, while item 3 drops this. For a paracompact Hausdorff space all open subsets need not be paracompact, and the Cech = sheaf equality for arbitrary sheaves can fail without this. The claim should carry the hypothesis that open subsets are paracompact (or that the space is hereditarily paracompact).
- **Proposed fix:** State item 3 as: 'For a paracompact Hausdorff space all of whose open subsets are paracompact, and any sheaf F, Cech cohomology equals sheaf cohomology (Godement).' Alternatively note that the general statement requires the space to be hereditarily paracompact.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Item 4 attribution to Bredon and hypothesis on local contractibility
- **Category:** Unsupported fact
- **Location:** fact at:cw-local-properties, item 4
- **Detail:** Item 4 asserts that for paracompact Hausdorff locally contractible spaces, sheaf cohomology of the constant sheaf equals singular cohomology, citing Bredon. This is correct, but the parenthetical remark that 'the site's cat:sheaf-singular-comparison assumes paracompactness of open subsets' is a side comment that should be checked: the cited theorem cat:sheaf-singular-comparison is stated for spaces where open subsets are paracompact. The claim itself is fine; the side remark is accurate. No error.
- **Proposed fix:** No change needed; the statement is correct as given.
- **Reported:** 2026-10-28 (10fede1)
