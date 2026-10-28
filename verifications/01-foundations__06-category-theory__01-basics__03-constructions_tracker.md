# Verification tracker: `01-foundations/06-category-theory/01-basics/03-constructions.html`

<!-- source: 01-foundations/06-category-theory/01-basics/03-constructions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cat is not a 2-category with small categories as objects
- **Category:** Supplement/remark error
- **Location:** supplement (一般化) in cat:interchange-law
- **Detail:** The supplement says "小さい圏・関手・自然変換は…2 圏といい、$\mathbf{Cat}$ はその典型例である". But $\mathbf{Cat}$ is the category of *small* categories, and the collection of small categories is not small, so $\mathbf{Cat}$ is not itself an object of $\mathbf{Cat}$ and its hom-categories $[\mathbf{C},\mathbf{D}]$ are not small. Hence $\mathbf{Cat}$ is only a *large* 2-category (or a bicategory-like structure), not a 2-category in the strict sense used here (where hom-collections must be small categories). The claim is imprecise/overstated.
- **Proposed fix:** Replace with: "小さい圏を対象、関手を射、自然変換を 2-射とすると 2 圏 $\mathbf{Cat}$ が得られる。ただし $\mathbf{Cat}$ 自身は大きい（対象の集まりが小さい集合でない）ので、厳密には大きい 2 圏である。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Currying bijection requires D locally small / smallness of hom-categories
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から：カリー化) in cat:interchange-law
- **Detail:** The supplement states that for small categories $\mathbf{B},\mathbf{C},\mathbf{D}$ the functors $\mathbf{B}\times\mathbf{C}\to\mathbf{D}$ and $\mathbf{B}\to[\mathbf{C},\mathbf{D}]$ are in bijection, and concludes $\mathbf{Cat}$ is cartesian closed. This is correct for small categories, but the phrase "$\mathbf{Cat}$ がデカルト閉圏であることを示している" is imprecise: $\mathbf{Cat}$ (of small categories) is cartesian closed, but the argument as stated only covers small $\mathbf{B},\mathbf{C},\mathbf{D}$; the general cartesian-closedness of $\mathbf{Cat}$ requires the exponential $[\mathbf{C},\mathbf{D}]$ to exist for all small $\mathbf{C},\mathbf{D}$, which is fine, but the supplement's phrasing conflates the small-case bijection with the full cartesian-closed structure. More importantly, the cited \ref{cat:cartesian-closed} defines cartesian closed categories, and the claim that the currying bijection "shows" $\mathbf{Cat}$ is cartesian closed is only a sketch, not a proof; it omits verification of the naturality/uniqueness needed for the exponential universal property.
- **Proposed fix:** Soften to: "これは $\mathbf{Cat}$（小さい圏の圏）がデカルト閉圏であることの一側面を与える。厳密には、評価射とカリー化の普遍性（自然性を含む）を確かめる必要がある。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck claim that only σ' naturality is used in interchange law
- **Category:** Supplement/remark error
- **Location:** cat:interchange-law / hypcheck
- **Detail:** The hypcheck says "交換法則で使ったもの：$\sigma'$ の自然性を一回だけ。$\tau'$, $\sigma$, $\tau$ の自然性は使っていない". However, the proof of part 3 uses part 1's formula $(\tau'\cdot\sigma')_{Tc}\circ R'(\tau\cdot\sigma)_{c}=\tau'_{Tc}\circ\sigma'_{Tc}\circ R'\tau_{c}\circ R'\sigma_{c}$, which relies on the definition of horizontal composition and on $\tau'\cdot\sigma'$ being a natural transformation (part 1), whose proof uses $\tau'$'s naturality. Also the equality $(\tau'\circ\tau)_{c}\circ(\sigma'\circ\sigma)_{c}=\tau'_{Tc}\circ S'\tau_{c}\circ\sigma'_{Sc}\circ R'\sigma_{c}$ uses the definition, and the identification of the two sides uses $\sigma'$'s naturality at $\tau_{c}$. Strictly, the interchange law as an equation of composites of 2-cells does not require any naturality beyond what defines the composites, but the specific component computation given does invoke the naturality of $\sigma'$ only; the claim that $\tau'$'s naturality is not used is misleading because part 1 (used to expand the left side) does use $\tau'$'s naturality. This is a minor imprecision in a side comment.
- **Proposed fix:** Change to: "交換法則の成分計算では $\sigma'$ の自然性を一回使う。ただし左辺の展開に用いた 1 の公式は $\tau'$ の自然性から従う。"
- **Reported:** 2026-10-28 (10fede1)
