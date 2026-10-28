# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/03-properties.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/03-properties.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

I checked every supplement, remark, intuition, hypcheck comment, counterexample and stated-only fact on the page. The counterexample ag:noetherian-space-not-scheme is correct (one point, non-noetherian). The fiber product examples, the Gaussian integer fibers, the base-change properties, and the Nagata/EGA remarks are essentially correct. The only genuine imprecision I found is in remark item 3: 'over a perfect field, reduced and geometrically reduced coincide' is stated without the locally-finite-type hypothesis, which is needed; I report it as a medium-confidence supplement/remark error. All other checked statements are correct or appropriately hedged, so no further issues are reported.

## Issues

### ISSUE-0001 [Open] Geometrically reduced equals reduced over perfect fields: needs finite type / finite presentation
- **Category:** Supplement/remark error
- **Location:** remark グロタンディークの設計, item 3
- **Detail:** The remark says 'over a perfect field, reduced and geometrically reduced coincide'. For a scheme locally of finite type over a perfect field this is true. But stated for arbitrary k-schemes it can fail: e.g. a scheme that is reduced but whose base change to a purely inseparable extension becomes non-reduced can occur without finite type hypotheses (the standard statement requires X locally of finite type over k). The remark does not state the finite type hypothesis, so as written it is overstated.
- **Proposed fix:** State it as: 'If $X$ is a scheme locally of finite type over a perfect field $k$, then $X$ is reduced iff $X$ is geometrically reduced.' (the finite type hypothesis is needed).
- **Reported:** 2026-10-28 (8ccef3d)
