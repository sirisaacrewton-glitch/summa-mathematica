# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/01-projective-resolutions.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/01-projective-resolutions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Bar resolution is not a projective resolution of Z over ZG in the stated sense
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the bar resolution (\ref{cat:bar-resolution-exact}) is a free (hence projective) resolution of the trivial module $\mathbb{Z}$. The bar resolution is a resolution of $\mathbb{Z}$ by free $\mathbb{Z}G$-modules, so calling it a free resolution of $\mathbb{Z}$ is correct only if one says 'free over $\mathbb{Z}G$'. As written ('自明な加群 $\mathbb{Z}$ の自由分解') it is ambiguous but the surrounding context (projective resolutions in $R$-Mod) makes the intended category $\mathbb{Z}G$-Mod; the statement is acceptable if read that way. However the claim that group cohomology 'can be computed with any projective resolution' is correct. The real imprecision is that the bar resolution is a resolution by free $\mathbb{Z}G$-modules of the trivial module, and the phrase should specify the ring $\mathbb{Z}G$.
- **Proposed fix:** 群環 $\mathbb{Z}G$ 上の自明な加群 $\mathbb{Z}$ の自由（したがって射影）分解であり、比較定理から、群のコホモロジー（\ref{cat:group-cohomology}）は $\mathbb{Z}$ の他のどの射影分解を使って計算しても同じになる。
- **Reported:** 2026-10-28 (8ccef3d)
