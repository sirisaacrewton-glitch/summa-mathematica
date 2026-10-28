# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/15-luzin-sets.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/15-luzin-sets.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Luzin set need not have measure zero
- **Category:** Supplement/remark error
- **Location:** supplement / 「前提を変えると」
- **Detail:** The supplement claims "ルジンの集合は測度 0 であり" (a Luzin set has measure zero). This is false as stated: a Luzin set is defined purely topologically (uncountable, meets every meager set countably), and there exist Luzin sets of full outer measure (e.g. under CH one can construct a Luzin set that is not null; more precisely, being a Luzin set does not force measure zero). The claim that a Luzin set is null is not a theorem. What is true is that a Sierpinski set is null and a Luzin set is meager (not first category), and these are different notions; the sentence conflates them.
- **Proposed fix:** Replace with: "ルジンの集合は第一類でなく（\ref{set:luzin-basic.2}）、シェルピンスキーの集合は測度 $0$ である。しかしルジンの集合が測度 $0$ になるとは限らず、シェルピンスキーの集合が第一類になるとは限らない（両者は独立な概念である）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Sierpinski set is not necessarily meager
- **Category:** Supplement/remark error
- **Location:** supplement / 「前提を変えると」
- **Detail:** The supplement states "シェルピンスキーの集合は第一類であることが知られている". This is not correct in general: a Sierpinski set is defined as an uncountable set meeting every null set countably; it is null, but it need not be meager. The parenthetical justification ("R decomposes into a meager set and a null set") does not yield that a Sierpinski set is meager. The correct dual statement is that a Sierpinski set has measure zero and a Luzin set is non-meager; the cross-properties (Luzin null, Sierpinski meager) are not automatic.
- **Proposed fix:** Replace with: "シェルピンスキーの集合は測度 $0$ であり、ルジンの集合は第一類でない。ルジンの集合が測度 $0$ であることやシェルピンスキーの集合が第一類であることは一般には成り立たない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] MA(aleph_1) does not make aleph_1 points coverable by one meager set
- **Category:** Supplement/remark error
- **Location:** supplement / 「高い視点から」
- **Detail:** The metaphor says "MA のもとでは $\aleph_{1}$ 匹の魚の群れは一つの網（第一類集合）でまとめて捕まえられてしまう". Under MA(aleph_1), an arbitrary set of size $\aleph_{1}$ need NOT be contained in a single meager set (e.g. a set of $\aleph_{1}$ reals can be non-meager; indeed MA implies every set of reals of size $<2^{\aleph_0}$ is meager only if it is, which is false in general — a set of size $\aleph_1$ can be non-meager). The actual argument in \ref{set:luzin-ma} uses that a Luzin set's $\aleph_1$-subset, being a union of $\aleph_1$ singletons, is meager by \ref{set:ma-baire}; this relies on the specific structure (union of singletons), not on any $\aleph_1$-sized set being meager. The metaphor overstates the conclusion.
- **Proposed fix:** Replace with: "MA のもとでは $\aleph_{1}$ 個の一点集合の和（つまり濃度 $\aleph_{1}$ の集合で、各点が疎集合）は第一類になる（\ref{set:ma-baire}）ので、ルジンの集合から濃度 $\aleph_{1}$ の部分を取ると、それが一つの第一類集合に含まれてしまい、ルジン性に反する。"
- **Reported:** 2026-10-28 (10fede1)
