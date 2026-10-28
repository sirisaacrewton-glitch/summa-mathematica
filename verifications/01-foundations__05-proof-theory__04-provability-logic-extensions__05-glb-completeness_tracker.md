# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/05-glb-completeness.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/05-glb-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful and largely correct development of the arithmetical completeness of GLB following Dzhaparidze/Ignatiev. The proofs (lemmas on least ω-proof sentences, path exclusivity, path extension, destinations, provability properties, embedding lemma, and the main completeness theorems) are logically sound and the cited results are used appropriately. The genuine problems are confined to side comments: the example in the GLP section and the remark on GLP contain historical/comparative claims attributed to Boolos that are stated more strongly than the literature supports and are not verified on the page, and the supplement contains an imprecise methodological claim about Boolos's use of Σ₃ completeness. These are kind-5/6 issues and should be softened or removed.

## Issues

### ISSUE-0001 [Open] Misattribution of the ω-inconsistency example to Boolos
- **Category:** Supplement/remark error
- **Location:** example pt:sec-glp (自分の矛盾性を主張する文)
- **Detail:** The example states: "Boolos によれば、同様に、自分の ω 矛盾性を主張する文は偽で ω 無矛盾だが、次の段階の無矛盾性（下の $\PA^{++}$ についての無矛盾性）をもたない。" This is a historical/attribution claim stated without proof. The claim that a sentence asserting its own ω-inconsistency is false but ω-consistent is a standard GLP fact, but the specific attribution to Boolos and the precise formulation ("次の段階の無矛盾性をもたない") are stated more strongly than the literature supports and are not verified anywhere on the page. The example is a side comment (kind 5/6) and the attribution is imprecise.
- **Proposed fix:** Either remove the Boolos attribution and state the fact as a known GLP result, or replace with: "同様に、自分の ω 矛盾性を主張する文 $S'$（$\vdash S'\leftrightarrow[1]\neg S'$）は偽で $\PA+S'$ は ω 無矛盾だが、$\PA^{+}$ についての無矛盾性をもたない（GLP の標準的な事実）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated claim that GLB→GLP extension is easier than GL→GLB
- **Category:** Supplement/remark error
- **Location:** remark GLP
- **Detail:** The remark states: "Boolos によれば、$\mathsf{GLB}$ から $\mathsf{GLP}$ への拡張は、$\mathsf{GL}$ から $\mathsf{GLB}$ への拡張ほどの困難を含まない。" This is a comparative difficulty claim attributed to Boolos that is stated without proof and is not a precise mathematical statement. It is a side comment (kind 5) and is stated more strongly than the source supports; the difficulty comparison is informal and not established on the page.
- **Proposed fix:** Soften to: "Boolos は、$\mathsf{GLB}$ から $\mathsf{GLP}$ への拡張は $\mathsf{GL}$ から $\mathsf{GLB}$ への拡張に比べて技術的な困難が少ないと述べている（本サイトでは証明していない）。" or remove the sentence.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Imprecise claim about Boolos using Σ₃ completeness for C_h
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討)
- **Detail:** The supplement states: "Boolos は $C_{h}$ が Σ₃ であることから一般の Σ₃ 完全性で済ませているが、本ページでは Σ₃ の階層の一般論を使わずに、必要な形の文について直接 ω 公理を組み立てた。" This is a historical/methodological claim about Boolos's proof that is stated without verification. The precise complexity of $C_{h}$ and whether Boolos used general Σ₃ completeness is not established on the page, and the claim is stated more strongly than the literature supports.
- **Proposed fix:** Replace with a neutral statement: "本ページでは $C_{h}$ の形の文について直接 ω 公理を組み立てることで、$[1]$ の下への持ち上げを示した。" and drop the specific attribution to Boolos's use of Σ₃ completeness.
- **Reported:** 2026-10-28 (8ccef3d)
