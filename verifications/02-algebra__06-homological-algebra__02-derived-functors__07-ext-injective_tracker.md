# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/07-ext-injective.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/07-ext-injective.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (definition, vanishing lemma, balancing theorem, injective criterion, and the two problems) are logically sound: the dimension-shifting argument is correctly structured, the long exact sequences are applied with the right hypotheses, and the injectivity criterion proof is valid. The only genuine issue is a slightly overstated side comment in the supplement about deriving Ext^n = 0 (n≥2) over Z from the freeness of subgroups of free abelian groups, which by itself only gives projective dimension ≤ 1 and needs the dimension-shifting step to conclude vanishing for all n≥2.

## Issues

### ISSUE-0001 [Open] Incorrect claim about global dimension of Z via free subgroups
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that the vanishing Ext^n_Z = 0 (n≥2) can equivalently be obtained on the projective side from the fact that subgroups of free abelian groups are free. But the projectivity of subgroups of free abelian groups only gives that Z has global dimension ≤ 1 (i.e. Ext^2 = 0 via projective resolutions of length 1). It does not by itself give Ext^n = 0 for all n≥2 without the general fact that Ext^n = 0 for n > projective dimension; the statement as phrased ("同じ結論が得られる") is imprecise/overstated because the cited fact alone yields only Ext^2 = 0, and the extension to all n≥2 requires the dimension-shifting/vanishing argument. This is a side comment making a stronger claim than the cited fact supports.
- **Proposed fix:** Replace with: "$\mathbb{Z}$ 上で $\mathrm{Ext}^{n}=0$（$n\ge2$）となること（\ref{ha:prob-ei-dimension}）は、$\mathbb{Z}$ の大域次元が $1$ であることの表れである。射影分解の側では、自由アーベル群の部分群が自由であることから $\mathbb{Z}$ 加群の射影次元が高々 $1$ であることが従い、これと次元ずらしを合わせて同じ結論が得られる。"
- **Reported:** 2026-10-28 (8ccef3d)
