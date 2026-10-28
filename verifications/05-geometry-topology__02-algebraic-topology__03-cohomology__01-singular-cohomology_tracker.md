# Verification tracker: `05-geometry-topology/02-algebraic-topology/03-cohomology/01-singular-cohomology.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/03-cohomology/01-singular-cohomology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the universal coefficient theorem, its corollary, the cohomology axioms, the sheaf facts (H)/(S), the computations, the transfer sequence, the odd-map degree theorem and Borsuk–Ulam are all sound, and the cited labels match their uses. The only genuine problems are in the supplement: the transfer/degree statement for general finite covers is imprecise, the Smith-theory attribution is loose, and the Lusternik–Schnirelmann phrasing should specify distinct antipodal points. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Transfer map π_*τ_* equals covering degree only for connected/finite covers with care
- **Category:** Supplement/remark error
- **Location:** supplement (転送とボルスク–ウラムの定理)
- **Detail:** The supplement states that for a finite cover E→B the transfer τ sends each simplex to the sum of all its lifts and that 'π_*τ_* is multiplication by the covering degree'. For a general finite covering this is only true when the cover is connected (or, more precisely, when the number of sheets equals the degree and the cover is a genuine n-fold cover); for a disconnected finite cover the composite π_*τ_* is multiplication by the number of sheets, which is not the 'degree' in the usual connected sense. The statement is imprecise as written.
- **Proposed fix:** For a finite covering $E\to B$ of degree $d$ (i.e. every fiber has $d$ points), the transfer $\tau$ sends a singular simplex to the sum of its $d$ lifts, and $\pi_{*}\tau_{*}$ is multiplication by $d$ on $H_{*}(B;\mathbb{Z}/2)$ (and by $d$ on integral homology when orientations allow).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Smith theory attribution overstated
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the $\mathbb{Z}/2$ coefficient exact sequence is 'the prototype of Smith theory (study of fixed point sets of $\mathbb{Z}/p$ actions)'. The transfer sequence for the double cover $S^{n}\to\mathbb{R}P^{n}$ is a special case of the Cartan–Leray / covering spectral sequence, not really the prototype of Smith theory; Smith theory concerns the homology of fixed-point sets of group actions and uses different (Smith) sequences. The attribution is loose and potentially misleading.
- **Proposed fix:** The transfer exact sequence for the double cover $S^{n}\to\mathbb{R}P^{n}$ is a special case of the Cartan–Leray spectral sequence for a covering; it is analogous to, but distinct from, the Smith sequences used to study fixed-point sets of $\mathbb{Z}/p$ actions.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Ham sandwich / Lusternik–Schnirelmann consequences stated without the needed hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement (応用と一般化)
- **Detail:** The supplement claims that from Borsuk–Ulam it follows that n bounded measurable sets in R^n can be simultaneously bisected by one hyperplane, and that covering S^n by n+1 closed sets forces one set to contain an antipodal pair. The ham sandwich statement requires the sets to be measurable (or at least nice) and is usually stated for bounded measurable sets — this is fine — but the Lusternik–Schnirelmann statement requires the sets to be closed (or open) and to cover S^n; the text says 'n+1 closed sets', which is correct, but the phrase 'ある集合は対蹠点の組を含む' should specify that the pair consists of distinct antipodal points. Minor imprecision, but the statements as given are essentially correct; the main issue is that the ham sandwich claim needs the sets to be measurable and bounded, which is stated. This is borderline; flagging the Lusternik–Schnirelmann phrasing.
- **Proposed fix:** If $S^{n}$ is covered by $n+1$ closed sets, then at least one of them contains a pair of antipodal points $\{x,-x\}$ with $x\neq -x$.
- **Reported:** 2026-10-28 (10fede1)
