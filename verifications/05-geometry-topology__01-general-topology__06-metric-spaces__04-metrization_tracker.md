# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/04-metrization.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/04-metrization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is in good shape: the proofs of the countable-product metrization, the regular-second-countable-normal lemma, Urysohn's metrization theorem, the perfect-image theorem, and Stone's theorem (Rudin's proof) are logically sound, and the hypchecks are accurate. The only genuine problems are in the supplement: the parenthetical about ω₁ and ω₁+1 being non-paracompact is imprecise (ω₁+1 is compact hence paracompact; only ω₁ is non-paracompact), and the Smirnov theorem is listed alongside the Nagata–Smirnov/Bing equivalences without noting it is a separate sufficient criterion. Both are minor and confined to side remarks.

## Issues

### ISSUE-0001 [Open] ω₁+1 is not paracompact but the supplement's parenthetical is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says ω₁ (order topology) and its one-point compactification ω₁+1 are T₄ but not metrizable, and adds 'パラコンパクトでないものもある' (some are not paracompact). This is imprecise: ω₁+1 is compact Hausdorff, hence paracompact (and normal), so it is NOT an example of a non-paracompact space. Only ω₁ itself is non-paracompact (it is countably compact but not compact, and not paracompact). The phrasing leaves the reader unable to tell which of the two is non-paracompact, and could be read as claiming ω₁+1 is non-paracompact, which is false.
- **Proposed fix:** Replace with: 'ω_{1}（順序位相）は $T_{4}$ だが距離化可能でなく、パラコンパクトでもない。その一点コンパクト化 $\omega_{1}+1$ はコンパクトハウスドルフ（したがってパラコンパクト）だが距離化可能でない（\ref{top:compact-metrizable} より、距離化可能なら第二可算でなければならないが、開部分空間 $\omega_{1}$ が第二可算でない）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Smirnov's theorem statement omits the paracompactness/local metrizability precision
- **Category:** Supplement/remark error
- **Location:** supplement (距離化定理の一般形)
- **Detail:** The supplement states 'パラコンパクトなハウスドルフ空間が局所的に距離化可能なら距離化可能である（スミルノフの定理）'. As stated this is correct (Smirnov's metrization theorem: a paracompact Hausdorff space that is locally metrizable is metrizable). However, the surrounding list presents the Nagata–Smirnov and Bing theorems as characterizations '同値である' of metrizability, and then appends Smirnov's theorem in the same breath without noting it is a different (sufficient) criterion, not one of the equivalences. This is a mild imprecision but the statement itself is true, so no correction of the mathematical content is required beyond clarifying it is a separate sufficient condition.
- **Proposed fix:** Add a clarifying clause: 'これは上記の同値条件とは別の（十分条件を与える）定理である。'
- **Reported:** 2026-10-28 (8ccef3d)
