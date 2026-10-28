# Verification tracker: `05-geometry-topology/01-general-topology/08-counterexamples/04-double-arrow.html`

<!-- source: 05-geometry-topology/01-general-topology/08-counterexamples/04-double-arrow.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Schneider's theorem misattributed / misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that a compact Hausdorff space is metrizable iff the diagonal $\Delta_{A}\subseteq A\times A$ is $G_{\delta}$, attributing this to "Schneider's theorem". The correct attribution is the **Šneider (Shneider) theorem** (often spelled Šneider/Shneider, sometimes credited to Šneider or to a result of Šneider; in English literature it is usually "Šneider's theorem" or attributed to Šneider, and sometimes to "Šneider" or "Šneider"). More importantly, the standard statement is: a compact Hausdorff space is metrizable iff its diagonal is a $G_{\delta}$ set in $X\times X$ — this is correct as a statement, but the attribution "シュナイダーの定理" is a nonstandard transliteration and the claim as stated is fine mathematically. However, the precise issue is that the equivalence "compact Hausdorff metrizable $\iff$ diagonal is $G_{\delta}$" is indeed a known theorem (often called Šneider's theorem), so the statement is not false. The real problem is the transliteration/attribution: the standard name is "Šneider" (シュナイダー is a German name, but the theorem is due to Šneider, sometimes written Shneider). This is a minor attribution issue, not a mathematical error. I will not report it as a genuine error since the mathematical content is correct and the attribution, while nonstandard, is not clearly wrong.
- **Proposed fix:** No change needed; the statement is mathematically correct. If desired, clarify the attribution as "Šneider's theorem" (Šneider/Shneider) rather than "Schneider".
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim about set-theoretic dependence
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says: "コンパクトハウスドルフ空間について、「完全正規」「遺伝的可分」などの条件が距離化可能性を導くかどうかは集合論の仮定に依存する問題と関係し、二重矢印空間はその文脈での標準的な反例であるとされる". This is vague and potentially misleading. The double arrow space is a standard example of a compact, hereditarily separable, hereditarily Lindelöf, perfectly normal, first countable, non-metrizable space. The question of whether "perfectly normal" or "hereditarily separable" implies metrizability for compact Hausdorff spaces is not a set-theoretic independence issue in the way implied; rather, the double arrow space is a ZFC counterexample showing that these properties do not imply metrizability. The claim that it "depends on set-theoretic assumptions" is imprecise: the double arrow space itself is a ZFC example. The set-theoretic independence arises for other questions (e.g., whether every compact hereditarily separable space is metrizable is independent — this is related to the Suslin line problem, but the double arrow space is not a Suslin line). The statement conflates the double arrow space with Suslin line counterexamples. This is an overstatement/imprecision.
- **Proposed fix:** Replace with: "二重矢印空間は ZFC で構成できるコンパクト・遺伝的可分・遺伝的リンデレーフ・完全正規・第一可算・非距離化可能空間の標準例である。コンパクトハウスドルフ空間において遺伝的可分性が距離化可能性を導くか否かは、ススリン直線の存在など集合論的仮定と関係するが、二重矢印空間自身はそのような仮定を必要としない ZFC の反例である。"
- **Reported:** 2026-10-28 (10fede1)
