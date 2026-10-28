# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/02-derived-functors.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/02-derived-functors.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definition, well-definedness, $L_{0}\cong F$, horseshoe lemma, and long exact sequence are all sound, and the cited results match their uses. The main genuine issue is in the supplement, where the claim that contravariant $\mathrm{Hom}(-,b)$ uses projective resolutions for right derived functors is imprecise (injective resolutions are the standard tool, or one uses the other variable). The hypcheck remark about $P'_{n}$ projectivity is acceptable. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Contravariant Hom(-,b) does not use projective resolutions for right derived functors
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that for a contravariant functor like $\mathrm{Hom}(-,b)$ one can form right derived functors using projective resolutions. This is wrong: for a contravariant functor, a projective resolution $P\to a$ gives a complex $\mathrm{Hom}(P,b)$ whose homology is $\mathrm{Ext}^{n}(a,b)$, i.e. the *right* derived functors of the contravariant $\mathrm{Hom}(-,b)$ are computed via *injective* resolutions (or equivalently, projective resolutions of the first variable give Ext, which are the derived functors of the covariant $\mathrm{Hom}(a,-)$ / contravariant $\mathrm{Hom}(-,b)$ but this requires care). The statement as written conflates the variance: projective resolutions compute right derived functors of the covariant Hom in the second slot, and for the contravariant Hom one uses injective resolutions (or projective resolutions in the other variable). The claim is imprecise/misleading.
- **Proposed fix:** Replace with: 反変関手 $\mathrm{Hom}(-,b)$ の右導来関手は入射分解を用いて定義される（あるいは第一変数の射影分解により $\mathrm{Ext}^{n}(a,b)$ が得られる）。
- **Reported:** 2026-10-28 (8ccef3d)
