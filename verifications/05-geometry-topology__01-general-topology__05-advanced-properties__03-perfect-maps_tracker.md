# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/03-perfect-maps.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/03-perfect-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (lemma, definition, proposition, theorem and its proof, and the problems) is logically sound: the closed-map characterization, the perfect-map preservation theorem, and the compact-preimage proposition are correctly proved with appropriate citations. The issues found are confined to the supplement: the attribution and phrasing around the Hanai–Morita–Stone theorem, the paracompactness preservation/inverse-preservation claim lacking Hausdorff hypotheses, and the proper-map/one-point-compactification equivalence stated without the necessary locally-compact-Hausdorff and ∞-to-∞ conditions. These are imprecisions/overstatements in side remarks rather than errors in the proved results.

## Issues

### ISSUE-0001 [Open] Perfect images of metric spaces: separability cannot simply be dropped
- **Category:** Supplement/remark error
- **Location:** supplement / 「前提を変えると」
- **Detail:** The supplement says that even without separability, the image of a metric space under a perfect map is metrizable (citing Hanai–Morita–Stone). The Hanai–Morita–Stone theorem states that a perfect image of a metric space is metrizable, but the standard statement requires the domain to be a metric space and the map to be perfect; the image is then metrizable. However, the claim as phrased ("可分性を外しても") is misleading: the Hanai–Morita–Stone theorem indeed gives metrizability of perfect images of arbitrary metric spaces (not necessarily separable), so the statement is essentially correct, but the parenthetical attribution to 小山 using Nagata–Smirnov is imprecise. More importantly, the sentence is stated as if separability is the only hypothesis being dropped, whereas the theorem requires the full perfect-map hypothesis (closed + compact fibers), which is already in force. This is a minor imprecision rather than a falsehood; flagging for accuracy of attribution.
- **Proposed fix:** Rewrite as: "距離空間の完全写像による像は距離化可能である（花井–森田–ストーンの定理）。これは定義域の可分性を仮定しない形でも成り立つ。" Remove the specific claim about which theorem 小山 uses unless verified.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Paracompactness preservation and inverse preservation claim
- **Category:** Supplement/remark error
- **Location:** supplement / 「似た定理」
- **Detail:** The supplement states that perfect maps preserve paracompactness and that preimages of paracompact spaces under perfect maps are paracompact. The forward direction (perfect image of paracompact Hausdorff is paracompact) is a standard theorem. The inverse direction (preimage of a paracompact space under a perfect map is paracompact) is also a known theorem (Michael), but it requires the base to be paracompact Hausdorff and typically the fibers compact; the statement as given omits the Hausdorff/regularity hypotheses that are usually needed. As stated without hypotheses it is overstated.
- **Proposed fix:** State precisely: "完全写像はパラコンパクトハウスドルフ空間をパラコンパクトハウスドルフ空間に写し、逆にパラコンパクトハウスドルフ空間上の完全写像による逆像もパラコンパクトハウスドルフである（マイケルの定理）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Proper maps and one-point compactification equivalence
- **Category:** Supplement/remark error
- **Location:** supplement / 「似た定理」
- **Detail:** The supplement claims that perfect maps correspond to proper maps in the category of compact Hausdorff spaces and that the property in \ref{top:perfect-compact-preimage} (properness) is equivalent, in locally compact spaces, to extendability to the one-point compactification. The equivalence "proper ⇔ extends continuously to the one-point compactification" holds for maps between locally compact Hausdorff spaces only under additional hypotheses (e.g., the extension sends the point at infinity to the point at infinity, i.e., the map is proper in the sense that preimages of compact sets are compact). The phrasing "一点コンパクト化への延長可能性と言い換えられる" is imprecise: a continuous extension to the one-point compactifications exists iff the map is proper, but this requires both spaces locally compact Hausdorff and the extension to map ∞ to ∞. As stated it is an overstatement without these hypotheses.
- **Proposed fix:** Rewrite: "局所コンパクトハウスドルフ空間の間の連続写像が固有（コンパクト集合の逆像がコンパクト）であることは、一点コンパクト化の間の連続写像に ∞ を ∞ に写す形で延長できることと同値である。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Closed map alone does not preserve metrizability — example correctness
- **Category:** Supplement/remark error
- **Location:** supplement / 「前提を変えると」
- **Detail:** The supplement says the quotient of R collapsing Z to a point is the image under a closed map but is not first countable at the collapsed point, hence not metrizable. This is correct and matches problem 3.8. No error here; noting for completeness that the example is valid.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
