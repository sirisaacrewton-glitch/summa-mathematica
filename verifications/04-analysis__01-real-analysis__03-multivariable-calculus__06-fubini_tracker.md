# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/06-fubini.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/06-fubini.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 2

## Summary of the last run

The two improper-link issues are resolved by the corrected label table and the bare-label convention. The Cavalieri attribution in the supplement remains imprecise and is still open. The proofs (Fubini, the continuous corollary, the counterexamples, and the normal-domain theorem) are logically sound, and the hypcheck comments and counterexamples check out; the only genuine remaining problem is the supplement's attribution of the slice formula to Cavalieri's principle.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Reference to nonexistent label calc:fubini-counterexamples.2
- **Category:** Improper link
- **Location:** calc:fubini (hypcheck) and supplement
- **Detail:** The hypcheck of the Fubini theorem cites \ref{calc:fubini-counterexamples.2}, and the supplement also cites \ref{calc:fubini-counterexamples.2}. The label table only lists calc:fubini-counterexamples.1 (counterexample 6.3). The counterexample environment is labeled calc:fubini-counterexamples, and item 2 is the example where f is integrable but a section is not. The citation target .2 is not in the table, so the link is broken/improper.
- **Proposed fix:** Change both citations to \ref{calc:fubini-counterexamples} item 2 (or add the label calc:fubini-counterexamples.2 to item 2 of the counterexample environment).
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now quotes calc:fubini-counterexamples.2 and it is exactly the example where f is integrable but a section is not, so the citation is proper.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). calc:fubini-counterexamples.2 is the example where $f$ is integrable but a section is not.

### ISSUE-0002 [Ignored: Valid Rebuttal] Reference to nonexistent label calc:jordan-additivity in solution
- **Category:** Improper link
- **Location:** calc:prob-fu-tetrahedron solution
- **Detail:** The solution cites \ref{calc:jordan-additivity}, but the label table only contains calc:jordan-additivity.1 (proposition 5.15, additivity of the integral over regions). The bare label calc:jordan-additivity is not listed, so the link is improper.
- **Proposed fix:** Replace \ref{calc:jordan-additivity} with \ref{calc:jordan-additivity.1} (or the correct label for the additivity proposition).
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — calc:jordan-additivity is a valid bare label for proposition 5.15 (additivity of the integral over regions), which is what the solution uses.
**Opus Rebuttal:** calc:jordan-additivity is a valid label (the proposition); bare-label citations are allowed.

### ISSUE-0003 [Open] Cavalieri's principle attribution in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says that Fubini's theorem, in volume language, is 'cut the solid into thin slabs and integrate the slab areas to get the volume (Cavalieri's principle)'. Cavalieri's principle is the statement that two solids with equal cross-sectional areas at every height have equal volumes; it is not the statement that volume equals the integral of cross-sectional area. The latter is the slice/volume formula (a consequence of Fubini), not Cavalieri's principle. This is an imprecise/overstated attribution.
- **Proposed fix:** Replace with: '体積の言葉では、立体を薄い板に切って、板の面積を積分すれば体積になる（断面積の積分表示）。これはカヴァリエリの原理（等高さでの断面積が等しい二立体は体積が等しい）と同値な内容を含む。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says volume equals the integral of slab areas is 'Cavalieri's principle'; that is the slice/volume formula, while Cavalieri's principle compares two solids with equal cross-sections. The imprecise attribution remains.

### ISSUE-0004 [Open] Cavalieri's principle misattributed to the slice formula
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement states that Fubini's theorem, in volume language, is 'cut the solid into thin slabs and integrate the slab areas to get the volume (Cavalieri's principle)'. Cavalieri's principle is the statement that two solids whose cross-sectional areas at every height are equal have equal volumes; it is not the identity $v(E)=\int A(t)\,dt$. The latter is the slice (volume-by-sections) formula, a consequence of Fubini. The attribution is imprecise/overstated.
- **Proposed fix:** Replace with: '体積の言葉では、立体を薄い板に切って、板の面積を積分すれば体積になる（断面積による体積の公式）。これはカヴァリエリの原理（各高さでの断面積が等しい 2 つの立体は体積が等しい）から導かれる。'
- **Reported:** 2026-10-28 (048145a)
