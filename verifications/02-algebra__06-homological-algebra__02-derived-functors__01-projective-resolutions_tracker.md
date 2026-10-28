# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/01-projective-resolutions.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/01-projective-resolutions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the comparison theorem, its proof, the hypcheck, and the corollary are correct, and the problems and solutions are valid. The only issues are minor imprecisions in the supplement/remark: the bar resolution statement should specify the category of $\mathbb{Z}G$-modules, and the roadmap remark's list of shared facts could be worded more precisely. No genuine logical gaps, missing hypotheses, overpowered theorems, improper links, or unsupported facts were found.

## Issues

### ISSUE-0001 [Open] Bar resolution is a free resolution of the trivial module, but the comparison theorem applies to projective resolutions of an object in an abelian category
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the bar resolution (\ref{cat:bar-resolution-exact}) is a free (hence projective) resolution of the trivial module $\mathbb{Z}$, and that by the comparison theorem group cohomology (\ref{cat:group-cohomology}) can be computed using any other projective resolution. This is essentially correct, but the phrase '自明な加群 $\mathbb{Z}$ の自由分解' is imprecise: the bar resolution is a resolution in the category of $\mathbb{Z}G$-modules (or of $G$-modules), and $\mathbb{Z}$ here is the trivial $\mathbb{Z}G$-module, not a module over $\mathbb{Z}$. As stated it could be read as a resolution in $\mathbf{Ab}$, where $\mathbb{Z}$ is projective and the resolution would be trivial. The comparison theorem requires the ambient abelian category to be fixed; the statement should specify the category $\mathbb{Z}G\text{-}\mathbf{Mod}$.
- **Proposed fix:** 群環 $\mathbb{Z}G$ 上の加群の圏において、棒分解（\ref{cat:bar-resolution-exact}）は自明な $\mathbb{Z}G$ 加群 $\mathbb{Z}$ の自由（したがって射影）分解であり、比較定理（この圏は十分な射影対象をもつ）から、群のコホモロジー（\ref{cat:group-cohomology}）は他のどの射影分解を使って計算しても同じになる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] The remark's claim that tensor product and Hom adjunction is treated in the symmetric monoidal closed category page is a non-logical pointer, but the phrasing 'テンソル積と Hom の随伴の圏論的な意味' is fine; however the remark lists '射影加群' as a fact appearing in both module theory and homological algebra, which is not literally true in the homological algebra series
- **Category:** Supplement/remark error
- **Location:** remark ホモロジー代数の道案内
- **Detail:** The remark states that facts appearing in both 1 (module theory) and 2 (homological algebra) include '完全列・五項補題・$\Hom$ の左完全性・射影加群'. In the homological algebra series, projective objects are treated in general abelian categories (\ref{ha:projective}), and projective modules are only mentioned via \ref{mod:projective-characterization}. This is a minor imprecision rather than a mathematical error; the claim that both series prove these facts is essentially accurate for exact sequences, the five lemma, and Hom left-exactness, and projective modules are indeed discussed in both (module theory concretely, homological algebra via the general notion). No correction strictly needed, but the wording '射影加群' could be '射影対象（射影加群）'.
- **Proposed fix:** 1 と 2 の両方に現れる事実（完全列・五項補題・$\Hom$ の左完全性・射影対象（射影加群））は、1 が加群での具体的な証明、2 が一般のアーベル圏での証明で、どちらを先に読んでもよい。
- **Reported:** 2026-10-28 (10fede1)
