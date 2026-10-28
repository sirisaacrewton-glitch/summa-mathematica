# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/06-beta-n.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/06-beta-n.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (disjoint closures, no nontrivial convergent sequences, independent family, cardinality $2^{\mathfrak{c}}$) are correct and the proofs are sound. The only issues are in the supplement: the attribution to Pospíšil's theorem is loose (it concerns uniform ultrafilters), and the Parovicenko remark is imprecise about what depends on set-theoretic axioms. Both are minor and confined to side remarks.

## Issues

### ISSUE-0001 [Open] 超フィルターの個数とポスピシル
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that in ultrafilter language, there are exactly $2^{\mathfrak{c}}$ ultrafilters on $\N$, and calls this 'a special case of Pospíšil's theorem'. Pospíšil's theorem states that for an infinite set $X$ of cardinality $\kappa$, the number of uniform ultrafilters on $X$ is $2^{2^{\kappa}}$; for $\kappa=\aleph_{0}$ this gives $2^{2^{\aleph_{0}}}=2^{\mathfrak{c}}$, so the count itself is correct. However, the attribution is imprecise: the standard statement of Pospíšil concerns uniform ultrafilters, and the count of all ultrafilters on $\N$ is usually derived from it (or stated separately). More importantly, the sentence '超フィルターの言葉では、$\N$ 上の超フィルターがちょうど $2^{\mathfrak{c}}$ 個あることになる' is fine, but the parenthetical attribution is loose enough to be misleading.
- **Proposed fix:** Replace with: '超フィルターの言葉では、$\N$ 上の超フィルターがちょうど $2^{\mathfrak{c}}$ 個あることになる（ポスピシルの定理：無限集合 $X$ 上の一様超フィルターの個数は $2^{2^{|X|}}$ であり、$X=\N$ の場合が本ページの結果にあたる）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] パロヴィチェンコの定理とCH
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says '$\beta\N\setminus\N$ の位相は集合論の仮定に強く依存し、CH のもとでの特徴づけ（パロヴィチェンコの定理）などが知られている'. Parovicenko's theorem characterizes $\omega^{*}=\beta\N\setminus\N$ under CH (or OCA/MA-type axioms): under CH, every compact Hausdorff space of weight $\le\aleph_{1}$ that is a continuous image of $\omega^{*}$ and has no isolated points is homeomorphic to $\omega^{*}$. The phrasing 'CH のもとでの特徴づけ' is acceptable, but the claim that the topology 'strongly depends on set-theoretic assumptions' is an overstatement in this context: the space $\omega^{*}$ itself is fixed, and what depends on axioms is which spaces are homeomorphic to it. This is a side remark, but it is imprecise.
- **Proposed fix:** Replace with: 'パロヴィチェンコの定理は CH のもとで $\omega^{*}=\beta\N\setminus\N$ を特徴づける（CH の下では、孤立点をもたず、$\omega^{*}$ の連続像となるような、重み $\aleph_{1}$ 以下のコンパクトハウスドルフ空間は $\omega^{*}$ に同相である）。'
- **Reported:** 2026-10-28 (8ccef3d)
