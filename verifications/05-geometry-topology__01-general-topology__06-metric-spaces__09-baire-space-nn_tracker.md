# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/09-baire-space-nn.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/09-baire-space-nn.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, lemma, corollary and problems are logically sound: the Alexandrov-Urysohn proof correctly uses completeness (Cantor intersection), separability (countable splitting), zero-dimensionality (clopen pieces) and the empty-interior-of-compacta hypothesis (non-compactness of each node), and the hypcheck accurately tracks each hypothesis. The irrationals corollary and the continuous-image theorem are correct. The only genuine issues are minor imprecisions in the supplement: the Brouwer characterization is stated with 'totally disconnected' where a clopen base (zero-dimensionality) is required, and the Sierpinski theorem omits the metrizability hypothesis. Both are medium-confidence supplement wording issues; no proof-level errors were found.

## Issues

### ISSUE-0001 [Open] Brouwer characterization misstated as 'zero-dimensional (totally disconnected)'
- **Category:** Supplement/remark error
- **Location:** supplement / コンパクトな場合
- **Detail:** The supplement says: replacing 'compact sets have empty interior' by '$X$ is compact with no isolated points' gives that a nonempty zero-dimensional (完全不連結) compact metrizable space with no isolated points is homeomorphic to $2^{\N}$ (citing \ref{top:brouwer-cantor}). The standard Brouwer theorem requires the space to be compact, metrizable, totally disconnected (i.e. the clopen sets form a base — zero-dimensional), and perfect (no isolated points). The parenthetical '完全不連結' is weaker than '零次元' in general (total disconnectedness does not imply a clopen base without compactness/dimension hypotheses), so stating the hypothesis as '完全不連結' is imprecise. The correct hypothesis is zero-dimensional (clopen base).
- **Proposed fix:** Replace '空でない零次元（完全不連結）コンパクト距離化可能空間で孤立点のないもの' with '空でない零次元（閉開集合が開基をなす）コンパクト距離化可能空間で孤立点のないもの' — i.e. require a clopen base, not merely total disconnectedness.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Sierpinski theorem hypothesis stated loosely
- **Category:** Supplement/remark error
- **Location:** supplement / 可算な場合
- **Detail:** The supplement says: replacing completeness by 'countable' and assuming no isolated points yields $\mathbb{Q}$ (Sierpinski's theorem). The precise Sierpinski theorem is: every nonempty countable metrizable space with no isolated points is homeomorphic to $\mathbb{Q}$. The phrase '完備性を「可算」に替え' is loose but the intended statement (countable, metrizable, no isolated points) is essentially correct; however '可算' alone without '距離化可能' (metrizable) is insufficient. As written it omits the metrizability requirement.
- **Proposed fix:** State: '可算で距離化可能、孤立点をもたない空でない空間は $\mathbb{Q}$ と同相である（シェルピンスキーの定理）' — explicitly requiring metrizability.
- **Reported:** 2026-10-28 (8ccef3d)
