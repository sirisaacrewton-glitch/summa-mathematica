# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/07-rationals-characterization.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/07-rationals-characterization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its supporting lemmas (clopen partitions, lexicographic order, order-topology agreement) are logically sound, and the hypcheck comments are accurate. The genuine problems are confined to the supplement: the counterexample for dropping metrizability (a countable non-first-countable space) is impossible since countable spaces are first-countable, and the non-countable characterization paragraph states the Alexandrov–Urysohn/Brouwer conditions too loosely (zero-dimensionality alone does not characterize the irrationals).

## Issues

### ISSUE-0001 [Open] Irreducible space is not a counterexample to dropping metrizability
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that dropping metrizability makes the conclusion fail, citing 'a countable space without isolated points that is not first-countable'. But a countable space is always first-countable (each point has only countably many neighborhoods, so the singletons' complements give a countable local base). So the parenthetical example is impossible as stated. Moreover, the standard counterexample to 'countable + no isolated points ⇒ ≅ ℚ' without metrizability is an irreducible countable space (e.g. a countable set with the co-countable topology): it has no isolated points but is not even Hausdorff, hence not homeomorphic to ℚ. The claim as written is true in spirit but the example is wrong.
- **Proposed fix:** 距離化可能性を外すと結論は成り立たない。たとえば可算無限集合に補可算位相を入れると孤立点はないが、ハウスドルフでないので $\mathbb{Q}$ とは同相でない。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Baire space is not the irrationals; and 'zero-dimensional everywhere non-meager' characterization
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement identifies '無理数全体' with 'ベール空間 $\N^{\N}$'. The irrationals are homeomorphic to the Baire space $\N^{\N}$ (Alexandrov–Urysohn), so calling the irrationals 'the Baire space $\N^{\N}$' is acceptable, but the phrasing '無理数全体（ベール空間 $\N^{\N}$）' as if they are literally the same set is imprecise; more importantly the characterization attributed to Alexandrov–Urysohn is stated loosely. The genuine Alexandrov–Urysohn theorem: a space is homeomorphic to the irrationals iff it is a nonempty Polish space that is zero-dimensional (or: nowhere locally compact, or: a countable intersection of open sets...) — the exact hypotheses matter. The phrase '零次元で至るところ非可算などの条件' is vague and not a correct statement of the theorem (zero-dimensional alone does not suffice; e.g. the Cantor set is zero-dimensional compact and is not the irrationals).
- **Proposed fix:** 非可算な場合には、たとえば「空でないポーランド空間で、孤立点をもたず、コンパクトでない開集合をもつ（同値に、至るところ局所コンパクトでない）」ものが無理数全体と同相である（アレクサンドロフ–ウリゾーンの定理）。カントール集合は「空でないコンパクト距離化可能・完全不連結・孤立点なし」で特徴づけられる（ブラウワーの定理 \ref{top:brouwer-cantor}）。
- **Reported:** 2026-10-28 (8ccef3d)
