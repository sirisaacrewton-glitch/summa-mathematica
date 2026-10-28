# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/08-dugundji.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/08-dugundji.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall. The main theorem, its proof, the shadow-point lemma, the partition-of-unity lemma, and the corollaries are correct, and the hypcheck is accurate. The only issues are in the supplement: the claim that Dugundji's original theorem for locally convex spaces is proved "the same way" as the normed-space proof here is imprecise, since the norm is used essentially; and the Phillips' theorem discussion, while correct in substance, has a minor imprecision about the identification C(βℕ)≅ℓ^{∞} and the kernel ≅c_{0}. No logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Dugundji's original theorem is stated for locally convex spaces, not just normed spaces
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると / 値域
- **Detail:** The supplement says "デュグンジのもとの定理は、値域を局所凸位相線形空間としている（Dugundji 1951）" and that the proof is the same as on this page. This is imprecise: Dugundji's 1951 theorem is stated for a locally convex topological vector space, but the proof on this page uses the norm essentially (the shadow-point estimate d(a_s,a)<4d(x,a) and the triangle inequality/positive homogeneity in Step 3). For a general locally convex space one needs a different argument (e.g. using a convex neighborhood of f(a) and the local convexity to control the convex combination), and the claim "証明は本ページと同じで、Step 3 で f(a) の凸な近傍を使えばよい" is not literally the same proof. Also the phrase "局所凸でない空間への拡張の可否については、ここでは確かめていない" is fine, but the preceding sentence overstates that the proof carries over verbatim.
- **Proposed fix:** Replace with: "デュグンジのもとの定理は、値域を局所凸位相線形空間としている（Dugundji 1951）。本ページのノルム空間の場合の証明をそのまま一般の局所凸空間に移すことはできず、Step 3 では f(a) の凸な近傍を用いる別の議論が必要である。局所凸でない空間への拡張の可否については、ここでは確かめていない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Phillips' theorem attribution and statement
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると / 定義域
- **Detail:** The supplement states "c_{0} は ℓ^{∞} で補完可能でないことが知られている（フィリップスの定理、R. S. Phillips 1940）". The non-complementability of c_{0} in ℓ^{∞} is usually attributed to Phillips (1940) in the form that c_{0} is not complemented in ℓ^{∞}, but the standard reference is Phillips' 1940 paper on the adjoint of a Banach space; the statement as given is correct in substance. However, the surrounding argument claims that a bounded linear extension operator Ext: C(βℕ∖ℕ)→C(βℕ) would give a bounded projection of ℓ^{∞} onto c_{0}; this requires that the restriction map ρ: C(βℕ)→C(βℕ∖ℕ) has kernel isomorphic to c_{0}, which is true, but the identification C(βℕ)≅ℓ^{∞} and the kernel ≅c_{0} should be stated with the caveat that the isomorphism is not canonical. This is a minor imprecision rather than a falsehood; the main mathematical content (Phillips' theorem) is correctly cited.
- **Proposed fix:** Keep the argument but add: "（C(βℕ)≅ℓ^{∞} および核 ≅c_{0} という同型は標準的だが非標準的な同一視である。）" and cite Phillips' theorem precisely as: "c_{0} は ℓ^{∞} の補完部分空間ではない（Phillips 1940）".
- **Reported:** 2026-10-28 (10fede1)
