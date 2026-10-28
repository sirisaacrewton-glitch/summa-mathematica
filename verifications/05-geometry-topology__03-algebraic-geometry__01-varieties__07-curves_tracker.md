# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/07-curves.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/07-curves.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the DVR/nonsingularity equivalence, normalization, valuation lemmas, extension theorem and the birational-isomorphism corollary are all sound, and the hypcheck comments are accurate. The only genuine concerns are in the closing remark on Nagata compactification, where the statement conflates 'complete model' with 'nonsingular projective model' (which the page itself says is unproved) and omits the Noetherian base hypothesis, and a minor imprecision in the supplement about the indeterminacy locus (target projectivity). Both are medium-confidence supplement/remark issues; no logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Nagata compactification attribution and statement
- **Category:** Supplement/remark error
- **Location:** remark 抽象曲線と永田の完備化, item 3
- **Detail:** The remark attributes the compactification theorem (every separated finite-type scheme embeds as an open subscheme of a complete/proper scheme) to Nagata 1962. Nagata's compactification theorem is indeed due to Nagata (1962, 'Imbedding of an abstract variety in a complete variety'), so the attribution is essentially correct. However the parenthetical '有限型の分離スキーム' omits the standard hypothesis that the base is Noetherian (or at least that the morphism is of finite type and separated over a Noetherian base / quasi-compact quasi-separated). More importantly, the claim '曲線では非特異射影モデルがその役割を果たす' is stated as if it always holds, but the existence of a nonsingular projective model is exactly what the page explicitly says is NOT proved (see the top note '非特異射影モデルの存在は本ページでは証明しない'). Presenting it here as a consequence of Nagata compactification is misleading: Nagata gives a complete model, and one must then normalize/desingularize (for curves, normalization suffices) to get a nonsingular projective model. The sentence conflates 'complete' with 'nonsingular projective'.
- **Proposed fix:** State: '永田の完備化定理（1962）：ネーター基底上の有限型分離スキームは完備スキームの開部分スキームとして埋め込める。曲線の場合、完備モデルをとり正規化すれば非特異射影曲線が得られる（正規化は有限で、曲線は正規＝非特異）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Indeterminacy locus claim needs normality and is stated too strongly
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement says '高次元では、射影多様体への有理写像の不確定点は余次元 2 以上の閉集合に限られる（正規多様体なら）'. The correct statement is that for a rational map from a nonsingular (or normal) variety to a projective variety, the indeterminacy locus has codimension at least 2. The parenthetical '(正規多様体なら)' is imprecise: the standard theorem requires the source to be normal (or nonsingular) AND the target projective; also the phrase '余次元 2 以上' should be '余次元 2 以上（すなわち codim ≥ 2）'. As written it is essentially correct but the hypothesis on the source being normal is buried and the target projectivity is not mentioned. This is borderline; the main genuine imprecision is that the source must be normal/nonsingular, which is stated, so this is acceptable. Not reporting as a separate issue beyond noting the target projectivity.
- **Proposed fix:** Clarify: '正規（または非特異）多様体 $X$ から射影多様体 $Y$ への有理写像の不確定点集合は余次元 2 以上の閉集合に含まれる。'
- **Reported:** 2026-10-28 (8ccef3d)
