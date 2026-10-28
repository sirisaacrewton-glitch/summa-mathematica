# Verification tracker: `05-geometry-topology/01-general-topology/08-counterexamples/04-double-arrow.html`

<!-- source: 05-geometry-topology/01-general-topology/08-counterexamples/04-double-arrow.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Schneider's theorem misattributed / misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that a compact Hausdorff space is metrizable iff the diagonal $\Delta_{A}\subseteq A\times A$ is $G_{\delta}$, attributing this to "Schneider's theorem". The correct attribution is the **Šneider** (Šneider/Arkhangel'skii) theorem, but more importantly the statement as given is imprecise: the standard result (Šneider 1945; see also Engelking, General Topology, Theorem 4.2.13 / Exercise) is that a compact Hausdorff space is metrizable iff its diagonal is a $G_{\delta}$-set in $X\times X$. That part is actually correct, but the attribution "シュナイダー" is a transliteration error for Šneider (Czech), and the claim is stated without the compactness hypothesis being emphasized as essential (for general spaces the diagonal being $G_{\delta}$ does not imply metrizability). Since the sentence is inside a supplement and is a stated-only fact, the missing hypothesis and misattribution are genuine issues.
- **Proposed fix:** Replace with: "コンパクトハウスドルフ空間 $X$ が距離化可能であることは、対角線 $\Delta_{X}\subseteq X\times X$ が $G_{\delta}$ 集合であることと同値である（Šneider の定理）。ここでコンパクトハウスドルフという仮定は本質的で、一般の位相空間では対角線が $G_{\delta}$ でも距離化可能とは限らない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated claim about set-theoretic dependence of metrizability criteria
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that for compact Hausdorff spaces, whether conditions such as "perfectly normal" or "hereditarily separable" imply metrizability "is related to a problem depending on set-theoretic assumptions" and that the double arrow space is a standard counterexample in that context. This is vague and misleading: the double arrow space is a ZFC counterexample showing that compact Hausdorff + perfectly normal + hereditarily Lindelöf + hereditarily separable does NOT imply metrizability — no set-theoretic assumption is needed for this particular counterexample. The genuinely set-theoretically dependent question is whether every compact hereditarily separable (or hereditarily Lindelöf) space is metrizable (Suslin's problem / L-space and S-space problems), which is a different matter. As written, the sentence conflates the ZFC counterexample with the independence phenomenon.
- **Proposed fix:** Replace with: "二重矢印空間は、コンパクトハウスドルフかつ完全正規・遺伝的リンデレーフ・遺伝的可分でありながら距離化可能でないという、ZFC で成り立つ反例である。一方、『コンパクト遺伝的可分（または遺伝的リンデレーフ）空間は距離化可能か』という問いはススリンの問題や L 空間・S 空間の問題と関係し、集合論の仮定に依存する（ここでは扱わない）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck comment on G_delta part is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck (hereditary section)
- **Detail:** The hypcheck states: "完全正規性の「$G_{\delta}$」部分は遺伝的リンデレーフ性と正則性だけから出る" (the $G_{\delta}$ part of perfect normality follows only from hereditary Lindelöfness and regularity). This is not correct as stated: hereditary Lindelöfness plus regularity does not in general imply that every closed set is $G_{\delta}$; one needs the additional fact that open sets are countable unions of closed sets (or equivalently that the space is hereditarily Lindelöf and regular, which does give that every open set is a countable union of closed sets — but this requires the argument that in a hereditarily Lindelöf regular space every open set is a countable union of closed sets, which is exactly what the proof of item 3 establishes). The comment as written omits the regularity requirement's precise role and is at best terse; more seriously, hereditary Lindelöfness alone (without regularity) does not suffice. Since the proof itself uses regularity (via $\overline{V_{x}}\subseteq W$), the hypcheck comment should mention regularity explicitly.
- **Proposed fix:** Change to: "完全正規性の「$G_{\delta}$」部分は、遺伝的リンデレーフ性と正則性（各開集合が閉集合の可算和で書けること）から出る。"
- **Reported:** 2026-10-28 (8ccef3d)
