# Verification tracker: `02-algebra/06-homological-algebra/01-abelian-categories/01-additive.html`

<!-- source: 02-algebra/06-homological-algebra/01-abelian-categories/01-additive.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that infinite products and coproducts do not coincide in Ab
- **Category:** Supplement/remark error
- **Location:** supplement (一般化) / ha:page-additive
- **Detail:** The supplement states 「無限の積と余積は一般に一致しない（$\mathbf{Ab}$ で $\bigoplus\mathbb{Z}\to\prod\mathbb{Z}$ は同型でない）」. The parenthetical is correct: the canonical map $\bigoplus\mathbb{Z}\to\prod\mathbb{Z}$ is not an isomorphism. However, the general claim as phrased ("infinite products and coproducts generally do not coincide") is fine, but the example is presented as if it demonstrates non-coincidence of product and coproduct in $\mathbf{Ab}$; in fact $\mathbf{Ab}$ is an abelian category with all products and coproducts, and the canonical map is the natural comparison, so the example is valid. The real issue is that the sentence is stated without the necessary hypothesis that the comparison map is the canonical one; as written it could be read as claiming that $\mathbf{Ab}$ has no infinite biproducts, which is false. The statement should clarify that the canonical comparison map fails to be an isomorphism, not that products and coproducts fail to exist or coincide in the categorical sense.
- **Proposed fix:** 無限の積と余積は一般に一致しない：$\mathbf{Ab}$ では標準的な比較射 $\bigoplus_{n}\mathbb{Z}\to\prod_{n}\mathbb{Z}$ は全射だが単射でなく、同型でない（たとえば $(1,1,\dots)$ は有限台をもたない）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim that preadditive categories are exactly Ab-enriched categories
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から) / ha:page-additive
- **Detail:** The supplement says 「前加法圏は「$\mathbf{Ab}$ 上の豊穣圏」にほかならない」. This is essentially correct: a preadditive category is precisely a category enriched over $\mathbf{Ab}$ (with the monoidal structure given by tensor product). However, the cited reference \ref{cat:closed-category} is '閉圏と豊穣圏' (closed categories and enriched categories), which does discuss enriched categories, so the citation is appropriate. The statement is not false. No issue.
- **Proposed fix:** No change needed; the statement is correct and the citation is appropriate.
- **Reported:** 2026-10-28 (10fede1)
