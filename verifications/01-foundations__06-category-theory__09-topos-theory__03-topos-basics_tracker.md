# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/03-topos-basics.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/03-topos-basics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (pullback pasting, subobject representation, mono-is-equalizer, balancedness, power object, singleton map monic) are proved correctly and the cited labels match their use. The only genuine problem found is in the supplement: the remark on abelian categories attributes their balancedness to the same 'monos are regular' mechanism as in a topos, which is imprecise since abelian categories lack a subobject classifier and the actual reason is the kernel/cokernel description. Everything else, including the hypcheck comments and the problem solutions, checks out.

## Issues

### ISSUE-0001 [Open] Abelian categories are not balanced via monos being regular
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理 (second bullet)
- **Detail:** The supplement claims that balancedness holds in abelian categories and that both cases follow from 'monos are regular (equalizers)' in the same way. In an abelian category a mono is a kernel (hence a regular mono), but the argument used for toposes (mono = equalizer of χ_m and true_X, plus a subobject classifier) does not transfer: abelian categories have no subobject classifier. The actual reason abelian categories are balanced is different (e.g. every mono is a kernel and every epi a cokernel, and a mono that is epi has zero kernel and zero cokernel, hence is iso). The phrase 'どちらも「モノ射が正則（等化子）」であることから従う点で同じ形をしている' overstates the analogy and is imprecise/misleading.
- **Proposed fix:** Replace with: 'Balancedness also holds in abelian categories, but for a different reason: there every mono is a kernel and every epi a cokernel, so a map that is both mono and epi has trivial kernel and cokernel and is therefore an isomorphism. The topos argument (mono = equalizer of $\chi_{m}$ and $\mathrm{true}_{X}$, using the subobject classifier) does not apply, since abelian categories have no subobject classifier.'
- **Reported:** 2026-10-28 (8ccef3d)
