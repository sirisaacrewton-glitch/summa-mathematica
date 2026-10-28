# Verification tracker: `05-geometry-topology/02-algebraic-topology/01-homotopy/06-hurewicz-whitehead.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/01-homotopy/06-hurewicz-whitehead.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (Hurewicz n=1, Eilenberg subcomplex, homotopy addition theorem, Hurewicz theorem, compression lemma, Whitehead theorem, CW approximation) are sound and cite appropriate results. Among the stated-only material, the only genuine error found is in the supplement: the claim that $S^{\infty}$ has two cells in each dimension is false (it has one cell per dimension). The Freudenthal range quoted ($k<2n-1$ for isomorphism) is the standard correct range, so it is not reported. No logical gaps, missing hypotheses, improper links, or unsupported facts were found in the main body.

## Issues

### ISSUE-0001 [Open] S^∞ has one cell in each dimension, not two
- **Category:** Supplement/remark error
- **Location:** supplement (無限 CW 複体 bullet)
- **Detail:** The supplement states that $S^{\infty}=\bigcup_{n}S^{n}$ has "2 cells in each dimension" (各次元に 2 個ずつの胞体). The standard CW structure of $S^{\infty}=\bigcup_{n}S^{n}$ with $S^{n-1}\subset S^{n}$ as the equator has exactly one cell in each dimension $n\ge0$ (one 0-cell and one $n$-cell for each $n\ge1$). The claim of two cells per dimension is false.
- **Proposed fix:** Replace "（各次元に 2 個ずつの胞体）" with "（各次元に 1 個ずつの胞体をもつ CW 複体）".
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Freudenthal range misstated as k < 2n-1
- **Category:** Supplement/remark error
- **Location:** supplement (相対フレヴィッツの定理・フロイデンタールの懸垂定理 bullet)
- **Detail:** The supplement says the suspension map $\pi_{k}(S^{n})\to\pi_{k+1}(S^{n+1})$ is an isomorphism for $k<2n-1$. The Freudenthal suspension theorem gives that this map is an isomorphism for $k<2n-1$ only when the source is $(2n-1)$-connected in the appropriate sense; for spheres the correct statement is that $\pi_{k}(S^{n})\to\pi_{k+1}(S^{n+1})$ is an isomorphism for $k<2n-1$ and a surjection for $k=2n-1$ — but this requires $n\ge1$ and, more importantly, the standard range is $k\le 2n-2$ for isomorphism. As written with strict $k<2n-1$ the isomorphism range is correct, but the accompanying phrase "により、球面の安定ホモトピー群が定まる" is fine; however the precise classical statement is isomorphism for $k<2n-1$ and epimorphism for $k=2n-1$. The statement as given (isomorphism for $k<2n-1$) is actually correct, so this is not an error. No issue.
- **Proposed fix:** No change needed; the isomorphism range $k<2n-1$ is the standard Freudenthal range for spheres.
- **Reported:** 2026-10-28 (10fede1)
