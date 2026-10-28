# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/05-quasi-coherent.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/05-quasi-coherent.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main quasi-coherent sheaf theory (tilde construction, extension lemma, affine equivalence, closed subschemes, separated affine intersections) is sound. The only genuine concern is the Gabriel reconstruction remark, which states the theorem for noetherian schemes rather than the standard quasi-compact quasi-separated hypothesis; this is an imprecision in a side remark. Other supplements and examples (extension-by-zero counterexample, k(x) not finitely generated, Swan) check out.

## Issues

### ISSUE-0001 [Open] Gabriel reconstruction requires quasi-compact quasi-separated, not just noetherian
- **Category:** Supplement/remark error
- **Location:** remark セールとグロタンディーク：なぜ「準」連接か, item 3
- **Detail:** The remark states Gabriel's reconstruction theorem (1962) as: a noetherian scheme $X$ can be recovered up to isomorphism from the abelian category $\mathbf{QCoh}(X)$. Gabriel's theorem (des catégories abéliennes, 1962) reconstructs a quasi-compact quasi-separated scheme from its category of quasi-coherent sheaves; the standard statement requires quasi-compact and quasi-separated (or at least the scheme to be recovered from QCoh), and noetherian is a sufficient but not the natural hypothesis. More importantly, the claim as stated ("noetherian scheme is recovered from QCoh") is essentially correct for noetherian schemes, but the attribution and hypothesis are imprecise: the theorem is usually stated for quasi-compact quasi-separated schemes, and the year/attribution is fine. The real issue is that the statement is stated more strongly/imprecisely than the literature: it should say quasi-compact quasi-separated (noetherian being a special case).
- **Proposed fix:** **ガブリエルの再構成定理**（1962 年）：準コンパクトかつ準分離的なスキーム $X$（たとえばネータースキーム）は、準連接層のアーベル圏 $\mathbf{QCoh}(X)$ から同型を除いて復元できる（本サイト未収録）。
- **Reported:** 2026-10-28 (8ccef3d)
