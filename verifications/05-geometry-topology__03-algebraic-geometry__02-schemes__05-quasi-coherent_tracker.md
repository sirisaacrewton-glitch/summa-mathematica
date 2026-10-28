# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/05-quasi-coherent.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/05-quasi-coherent.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (tilde properties, extension lemma, affine quasi-coherent theorem, closed subscheme theorem, separated affine intersection) are sound and cite appropriate results. The main genuine issue is in the historical remark: the Gabriel reconstruction theorem is stated for arbitrary noetherian schemes without the quasi-separated/quasi-compact hypothesis usually required, and the recovery is from the abelian (tensor) category, not merely 'up to isomorphism' of categories. The Swan's theorem supplement is correct. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Gabriel reconstruction requires quasi-separated (or similar) hypothesis
- **Category:** Supplement/remark error
- **Location:** remark セールとグロタンディーク：なぜ「準」連接か, item 3
- **Detail:** The remark states that a noetherian scheme $X$ can be recovered from $\mathbf{QCoh}(X)$. Gabriel's reconstruction theorem (des catégories abéliennes, 1962) recovers a scheme from its category of quasi-coherent sheaves under hypotheses such as quasi-separated and quasi-compact (or at least quasi-separated); for a general noetherian scheme the statement as written is stronger than the literature supports. Also the phrase 'from $\mathbf{QCoh}(X)$ up to isomorphism' is imprecise: one recovers $X$ from the abelian category $\mathbf{QCoh}(X)$ (as a $k$-linear / tensor category), not merely from an isomorphism class of categories without extra structure.
- **Proposed fix:** **ガブリエルの再構成定理**（1962 年）：準分離的（例えば準コンパクトかつ準分離、あるいはネーター）スキーム $X$ は、準連接層のアーベル圏 $\mathbf{QCoh}(X)$（テンソル圏の構造を含む）から復元できることが知られている（本サイト未収録）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Swan's theorem needs finitely generated projective, not just finite rank bundles over arbitrary compact Hausdorff
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says finite-rank vector bundles on a compact Hausdorff space $X$ correspond to finitely generated projective $C(X)$-modules. This is correct (Swan) for complex (or real) vector bundles, but the statement omits that the correspondence is with finitely generated projective modules, and that it holds for the ring of continuous functions; as written 'finite rank vector bundles' vs 'finitely generated projective' is fine, but the claim that the affine-scheme analogue is 'its algebraic version' is slightly overstated: over a general (non-noetherian) affine scheme, locally free of finite rank corresponds to finitely generated projective modules, which is correct, so this is acceptable. No error.
- **Proposed fix:** No change needed; statement is correct.
- **Reported:** 2026-10-28 (10fede1)
