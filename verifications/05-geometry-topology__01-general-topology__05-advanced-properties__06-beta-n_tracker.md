# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/06-beta-n.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/06-beta-n.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proof of $|\beta\N|=2^{\mathfrak{c}}$ is sound, and the lemmas and propositions are correctly argued. The only genuine issue found is in the supplement: the attribution of the number of ultrafilters on $\N$ to Pospíšil's theorem is imprecise (it is an instance, not merely 'regarded as a special case'), and the description of Parovicenko's theorem is vague. The citation for $\{0,1\}^{\mathcal{P}(\N)}$ not being sequentially compact could not be verified from the label table alone, so it is not reported as a definite error. No logical gaps, missing hypotheses, overpowered theorems, or improper links were found in the proofs.

## Issues

### ISSUE-0001 [Open] Misattribution of the number of ultrafilters to Pospíšil
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that the fact that there are exactly $2^{\mathfrak{c}}$ ultrafilters on $\N$ is 'regarded as a special case of Pospíšil's theorem' (ポスピシルの定理の特別な場合とされる). Pospíšil's theorem (1937) states that for any infinite set $X$ of cardinality $\kappa$, there are $2^{2^{\kappa}}$ ultrafilters on $X$; the case $X=\N$ gives $2^{\mathfrak{c}}$ ultrafilters. So the statement is actually an instance of Pospíšil's theorem, not merely 'regarded as' a special case, and the phrasing is imprecise/overstated in a way that misattributes the result. More importantly, the page proves $|\beta\N|=2^{\mathfrak{c}}$ itself, so calling it a special case of a theorem is fine, but the attribution should be exact.
- **Proposed fix:** Replace with: '超フィルターの言葉では、$\N$ 上の超フィルターがちょうど $2^{\mathfrak{c}}$ 個あることになる（これはポスピシルの定理の $X=\N$ の場合にあたる）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Parovicenko's theorem characterization under CH is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says 'CH のもとでの特徴づけ（パロヴィチェンコの定理）などが知られている'. Parovicenko's theorem states that under CH, every compact Hausdorff space of weight at most $\aleph_{1}$ that is a continuous image of $\beta\N\setminus\N$ ... more precisely, it characterizes $\omega^{*}=\beta\N\setminus\N$: under CH, every compact Hausdorff space of weight $\le\aleph_{1}$ is a continuous image of $\omega^{*}$, and $\omega^{*}$ is the unique (up to homeomorphism) compact Hausdorff space of weight $\aleph_{1}$ with no isolated points in which every nonempty $G_{\delta}$ has nonempty interior. The phrase 'CH のもとでの特徴づけ' is vague but not strictly false; however, it is imprecise because Parovicenko's theorem is a characterization of $\omega^{*}$ under CH, and the statement as written could be read as a characterization of the topology of $\beta\N\setminus\N$ in general. This is a minor imprecision; I will not report it as a separate issue to avoid over-reporting.
- **Proposed fix:** If desired, clarify: 'CH のもとで $\omega^{*}=\beta\N\setminus\N$ は、重さ $\aleph_{1}$ の孤立点をもたないコンパクトハウスドルフ空間で、空でない $G_{\delta}$ が内点をもつものとして一意に特徴づけられる（パロヴィチェンコの定理）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that $\{0,1\}^{\mathcal{P}(\N)}$ is not sequentially compact is cited but the citation is to an example about countable compactness
- **Category:** Unsupported fact
- **Location:** supplement (似た定理)
- **Detail:** The supplement cites \ref{top:compactness-variants-examples.2} for the claim that $\{0,1\}^{\mathcal{P}(\N)}$ is not sequentially compact. The cited label is 'example 含意が逆向きに成り立たない例' on the countable compactness page. It is plausible that this example indeed shows $\{0,1\}^{\mathcal{P}(\N)}$ is not sequentially compact, but the label table does not confirm the exact content. Since the citation is to an example on a different page and the claim is a side remark, this is a potential improper link. However, without the source of that example, I cannot verify. I will not report it as a definite error.
- **Proposed fix:** Verify that \ref{top:compactness-variants-examples.2} indeed states that $\{0,1\}^{\mathcal{P}(\N)}$ is not sequentially compact; if not, replace with a correct citation or add a proof sketch.
- **Reported:** 2026-10-28 (10fede1)
