# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/03-topos-basics.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/03-topos-basics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page's proofs (pullback pasting, Sub(X) ≅ E(X,Ω), mono = equalizer, balancedness, power object, singleton map monic) are logically sound and the cited labels match their uses. The hypcheck comments are accurate. The only concerns are in the supplement: the attribution of finite cocompleteness to 'Mac Lane §IV.10' is imprecise (should be Paré / Mac Lane–Moerdijk), and the analogy with abelian categories slightly overstates that balancedness 'follows from monics being regular', which is not a valid general implication. Both are minor and confined to side remarks.

## Issues

### ISSUE-0001 [Open] Pare's theorem attribution and Mac Lane reference
- **Category:** Supplement/remark error
- **Location:** supplement / 余極限
- **Detail:** The supplement states that a topos has finite colimits (Pare's theorem) and that 'Mac Lane §IV.10 also mentions it'. Pare's theorem (1967/1974) indeed states that every elementary topos is finitely cocomplete, so the mathematical claim is correct. However, the attribution to 'Mac Lane §IV.10' is imprecise: Mac Lane's *Categories for the Working Mathematician* §IV.10 is about 'Colimits' in general, and the finite-cocompleteness of topoi is not the standard content of that section (it is usually attributed to Pare and discussed in Johnstone's *Topos Theory* or Mac Lane–Moerdijk). This is a borderline historical/attribution issue; if the reference is meant as a pointer it is acceptable, but as stated it risks misattribution.
- **Proposed fix:** Replace with: 'トポスは有限余極限ももつことが知られている（Paré の定理）。これは Mac Lane–Moerdijk *Sheaves in Geometry and Logic* などで扱われている。' (i.e., attribute to Paré and cite Mac Lane–Moerdijk rather than Mac Lane §IV.10).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Abelian categories: monic = kernel, epic = cokernel, and 'regular' claim
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理 (平衡性)
- **Detail:** The supplement says: '平衡性は、アーベル圏でも成り立つ（モノ射は核、エピ射は余核）。どちらも「モノ射が正則（等化子）」であることから従う点で同じ形をしている。' In an abelian category every monic is a kernel and every epic is a cokernel, and abelian categories are balanced — both correct. But the parenthetical justification 'both follow from monics being regular (equalizers)' is imprecise for the abelian case: in an abelian category a monic is a kernel (hence a regular mono, being an equalizer of the zero map and the cokernel), and the balancedness follows from the factorization into mono/epi plus the fact that a mono-epi is iso, which is a consequence of the (co)kernel structure, not literally of 'monics are regular'. The claim that balancedness 'follows from monics being regular' is not a correct general implication: regularity of monics alone does not imply balancedness in an arbitrary category. This is an overstated structural analogy.
- **Proposed fix:** Rewrite as: '平衡性はアーベル圏でも成り立つ（モノ射は核、エピ射は余核として実現され、モノ射かつエピ射な射は零射の核かつ余核となり同型）。トポスではモノ射が等化子（正則モノ）であることを通じて同様の議論ができる、という点で形が似ている。' — i.e., do not claim that regularity of monics alone yields balancedness.
- **Reported:** 2026-10-28 (10fede1)
