# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/10-cech-completeness.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/10-cech-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Locally compact spaces: remainder compact claim and 'one closed lid' metaphor
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says that for a locally compact space the whole set of holes is a single closed lid (the remainder is compact). But the remainder $\beta X\setminus X$ of a locally compact space need not be compact: e.g. $X=\mathbb{R}$ has $\beta\mathbb{R}\setminus\mathbb{R}$ non-compact (it is not even countably compact in general; $\beta\mathbb{R}\setminus\mathbb{R}$ contains a copy of $\beta\mathbb{N}\setminus\mathbb{N}$-type structure and is far from compact). What is true is that $X$ is open in $\beta X$, so $\beta X\setminus X$ is closed, and $X$ is $G_{\delta}$ because it is open. The claim 'the remainder is compact' is false.
- **Proposed fix:** Replace with: '局所コンパクト空間では $X$ は $\beta X$ の開集合であり、剰余 $\beta X\setminus X$ は閉集合（一枚の閉じた蓋）になる。' (i.e. the remainder is closed, not compact).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Complete metric spaces: 'layers of holes of diameter ≥ 1/n' as closed lids
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that for a complete metric space the 'holes of diameter $\ge 1/n$' form one lid per $n$, referring to the complement of $U_{n}$ in \ref{top:complete-dense-gdelta}. But $U_{n}$ is defined as the union of open sets $V$ with $\operatorname{diam}(V\cap X)<1/n$; its complement in $Y$ is not in general a compact set, nor is it a 'lid' covering holes of diameter $\ge 1/n$ in any precise sense. The complement $Y\setminus U_{n}$ consists of points every neighborhood of which meets $X$ in a set of diameter $\ge 1/n$; this set need not be compact (e.g. $X=\mathbb{R}$, $Y=\beta\mathbb{R}$). Calling these 'closed lids' (蓋) misrepresents the argument, which uses $G_{\delta}$ via open $U_{n}$, not compact covers.
- **Proposed fix:** Replace with: '完備距離空間では $X=\bigcap_{n}U_{n}$ と、開集合 $U_{n}$（直径 $<1/n$ の断片で覆える点全体）の可算共通部分として表される（\ref{top:complete-dense-gdelta}）。' Avoid claiming the complements are compact lids.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Cech-completeness characterized as remainder being F_sigma / covered by countably many compact sets
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement states that Cech-completeness requires the remainder $\beta X\setminus X$ to be coverable by countably many compact sets (be $F_{\sigma}$). This is not equivalent to Cech-completeness in general. Cech-completeness means $X$ is $G_{\delta}$ in $\beta X$, i.e. $\beta X\setminus X$ is a countable union of closed sets (an $F_{\sigma}$), but those closed sets need not be compact. Conversely a remainder that is a countable union of compact sets does give $X$ as $G_{\delta}$ only if each compact set is closed (true in Hausdorff), so that direction is fine, but the stated equivalence 'requires the remainder to be $F_{\sigma}$' conflates '$F_{\sigma}$' with 'countable union of compacta'. The phrase '可算個のコンパクト集合で覆える（$F_{\sigma}$ である）' is imprecise/false as an identification.
- **Proposed fix:** Replace with: 'チェック完備性は、剰余 $\beta X\setminus X$ が可算個の閉集合の和（$F_{\sigma}$）であることと同値である。' (drop the 'compact' cover claim).
- **Reported:** 2026-10-28 (8ccef3d)
