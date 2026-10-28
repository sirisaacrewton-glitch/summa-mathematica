# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/01-separation-axioms.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/01-separation-axioms.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Regular + Lindelöf ⇒ normal needs T₁ (or at least T₀)
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement states "正則でリンデレーフな空間も正規である" without qualification. On this page 正則 and 正規 are defined WITHOUT T₁ (see the notation note and the 密着空間 example, which is regular and normal but not T₁). The standard theorem "regular + Lindelöf ⇒ normal" is true for the T₁ (or T₀) versions; in the T₁-free convention the claim fails: the excluded-point topology on an uncountable set (or the co-countable/co-finite style examples) is regular and Lindelöf but not normal in the T₁-free sense. Even in the T₁ convention the statement is fine, but as written on this page (T₁-free definitions) it is false without an extra hypothesis.
- **Proposed fix:** 正則かつリンデレーフな空間は、$T_{1}$（実際には $T_{0}$ で十分）を仮定すれば正規である。本サイトの $T_{1}$ を含まない定義では、この含意は一般には成り立たない（反例：不可算集合上の除外点位相は正則かつリンデレーフだが正規でない）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Urysohn lemma does not characterize normality without T₁
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says 正規性は閉集合を連続関数で分けられることと同値 (Urysohn). On this page normality is defined without T₁. The Urysohn lemma gives normal ⇒ continuous separation; the converse (continuous separation ⇒ normal) holds, but the equivalence as stated is only the standard T₄ version. More importantly, the direction "continuous separation ⇒ normal" is fine, but the claim as an equivalence of the T₁-free 正規 with the function-separation property is imprecise: the function-separation property implies normality (easy), and normality implies it (Urysohn), so the equivalence itself is acceptable; however the sentence should note that this is the T₄ statement and that 完全正則 sits between T₃ and T₄ only under T₁. As written, "$T_{3}$ と $T_{4}$ の間に入る" is correct only because T₃, T₄ include T₁, which is consistent; the potentially misleading part is calling the Urysohn characterization an equivalence for the T₁-free 正規.
- **Proposed fix:** 正規性（$T_{1}$ を仮定しない定義でも）は「交わらない閉集合を連続関数で分けられる」ことと同値である（ウリゾーンの補題）。完全正則性は $T_{1}$ と合わせると $T_{3}$ と $T_{4}$ の間に入る。
- **Reported:** 2026-10-28 (8ccef3d)
