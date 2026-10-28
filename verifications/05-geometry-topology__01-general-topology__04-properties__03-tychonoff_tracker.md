# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/03-tychonoff.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/03-tychonoff.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof via ultrafilters, the Hausdorff corollary, and Kelley's theorem are logically sound: the ultrafilter-lemma step, the choice of coordinate limits, and the finite-intersection argument are all correctly justified, and the hypcheck comments about the product vs. box topology and about the Hausdorff case are accurate. The only genuine problem is in the closing supplement, whose final sentence overstates the result by claiming the Tychonoff theorem 'has the same strength as the axiom of choice' without restricting to the non-Hausdorff/arbitrary case, contradicting the page's own (correct) remark that the Hausdorff version is strictly weaker than AC. The remark about the Hausdorff Tychonoff theorem being ZF-equivalent to the ultrafilter lemma is correct and needs no change.

## Issues

### ISSUE-0001 [Open] Kelley's theorem does not make Tychonoff 'the same strength' as AC
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から...), last sentence
- **Detail:** The supplement concludes: 'コンパクト性は「有限の情報で全体を押さえる」性質なので、無限個の自由度を一度に扱うこの定理は、選択公理と同じ強さをもつ。' This is false as stated. Kelley's theorem shows that the full Tychonoff theorem (for arbitrary, possibly non-Hausdorff, compact spaces) implies AC over ZF, and Tychonoff is provable from AC, so the *full* Tychonoff theorem is indeed equivalent to AC. However the sentence is embedded in a passage that earlier (in the remark and hypcheck) correctly distinguishes the Hausdorff version (equivalent to the ultrafilter lemma, strictly weaker than AC). Read in context the blanket claim 'this theorem has the same strength as AC' is at best imprecise and contradicts the page's own remark that the Hausdorff Tychonoff theorem is strictly weaker than AC. The 'finite information' heuristic also does not justify equivalence with AC.
- **Proposed fix:** Replace the final sentence with: 'コンパクト性は「有限の情報で全体を押さえる」性質であり、任意個（ハウスドルフ性を仮定しない）の直積に対するチコノフの定理は選択公理と同値である（ケリーの定理と、選択公理からチコノフの定理が従うことによる）。ただしハウスドルフ空間に限ったチコノフの定理は超フィルター補題と同値で、選択公理より真に弱い（上の注意を参照）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Remark: 'Hausdorff Tychonoff iff ultrafilter lemma' attribution/strength
- **Category:** Supplement/remark error
- **Location:** remark (top:tychonoff-hausdorff の後)
- **Detail:** The remark states: '「コンパクトなハウスドルフ空間の直積はコンパクト」から超フィルター補題が導かれることが知られている（つまり両者は ZF 上同値）'. The direction 'Hausdorff Tychonoff ⇒ ultrafilter lemma' is a genuine theorem (e.g. via the standard equivalence of the ultrafilter lemma with compactness of products of compact Hausdorff spaces / the Boolean prime ideal theorem). The converse (ultrafilter lemma ⇒ Hausdorff Tychonoff) is exactly what the corollary top:tychonoff-hausdorff proves on this page, so 'ZF 上同値' is correct. This is fine; no error. (Checked and retained as correct.)
- **Proposed fix:** No change needed; the remark is correct.
- **Reported:** 2026-10-28 (10fede1)
