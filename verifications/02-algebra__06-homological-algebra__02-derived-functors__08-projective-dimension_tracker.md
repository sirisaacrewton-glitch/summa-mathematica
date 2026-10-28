# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/08-projective-dimension.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/08-projective-dimension.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (Schanuel's lemma, dimension shifting, the Ext characterization of projective dimension, and the Z corollary) are correctly proved and cited. The only genuine problems are in the supplement: the claim that global dimension equals the supremum of pd(R/I) over cyclic modules needs a noetherian hypothesis, and the attribution of the exact global dimension n of a polynomial ring to Hilbert's syzygy theorem alone is slightly overstated (the equality also needs the residue field computation).

## Issues

### ISSUE-0001 [Open] Global dimension equals sup of pd of cyclic modules R/I — needs finite global dimension / noetherian hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that the global dimension of R coincides with the supremum of the projective dimensions of the cyclic modules R/I, attributed to Auslander. As stated for an arbitrary ring this is false: the equality gl.dim R = sup_I pd(R/I) requires R to be (left) noetherian (Auslander's theorem is usually stated for noetherian rings; for non-noetherian rings finitely generated modules can have infinite projective dimension while all cyclic modules have bounded pd). The statement is stated more strongly than the literature supports.
- **Proposed fix:** Restrict to noetherian rings: 'If $R$ is left noetherian, then the left global dimension of $R$ equals $\sup_{I} \mathrm{pd}(R/I)$ over left ideals $I$ (Auslander).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hilbert syzygy theorem attribution: polynomial ring global dimension n
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says 'polynomial ring $k[x_1,\dots,x_n]$ has global dimension $n$ (Hilbert's syzygy theorem)'. Hilbert's syzygy theorem states that $k[x_1,\dots,x_n]$ over a field has finite global dimension (every module has a finite free resolution of length $\le n$); the exact value $n$ follows additionally from the fact that the residue field $k$ has projective dimension exactly $n$ (e.g. via the Koszul complex / regular sequence $x_1,\dots,x_n$). The attribution as stated conflates the theorem with its corollary. This is a minor imprecision but the exact equality is not what the syzygy theorem alone gives.
- **Proposed fix:** Rephrase: 'By Hilbert's syzygy theorem $k[x_1,\dots,x_n]$ has global dimension at most $n$; since the residue field $k$ has projective dimension $n$ (Koszul complex on $x_1,\dots,x_n$), the global dimension is exactly $n$.'
- **Reported:** 2026-10-28 (8ccef3d)
