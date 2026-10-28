# Verification tracker: `01-foundations/06-category-theory/01-basics/01-categories.html`

<!-- source: 01-foundations/06-category-theory/01-basics/01-categories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Elementary topos is not an axiomatization of the category of all sets
- **Category:** Supplement/remark error
- **Location:** supplement (一階の理論として)
- **Detail:** The supplement says that axiomatizing the 'category' of all sets as a first-order theory gives an elementary topos. This is imprecise: an elementary topos is a first-order axiomatization of the category of sets (or of a 'set-like' category), not of the category of *all* sets in the sense of a proper class. Moreover, the category of all sets (a large category) is not itself an elementary topos in the usual sense, since an elementary topos is required to be (at least) locally small / have a subobject classifier as a set. The claim as stated is overstated.
- **Proposed fix:** すべての集合の圏（集合論の宇宙）の性質を圏論的に取り出したものが初等トポスであり、圏論による集合論の基礎づけの一つになる（\ref[トポス]{cat:page-elementary-topos}）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] CAT is not locally small — needs justification / is imprecise
- **Category:** Supplement/remark error
- **Location:** remark 1
- **Detail:** The remark asserts that $\mathbf{CAT}$ (with objects the categories built from subsets of $\mathcal{U}$) is a set but is not locally small. This is stated without proof and is at least imprecise: the collection of functors between two large categories is not a small set in general, so 'not locally small' is plausible, but the parenthetical description '対象を $\mathcal{U}$ の部分集合で作られる圏とする' does not pin down a well-defined category, and the non-local-smallness claim is asserted rather than argued. As a side remark it is an unsupported/overstated claim.
- **Proposed fix:** 大きな圏を対象とする圏 $\mathbf{CAT}$（対象を $\mathcal{U}$ の元を台集合として作られる圏、射をその間の関手とする）も集合として作れるが、二つの大きな圏の間の関手の全体は一般に小さい集合にならないため、$\mathbf{CAT}$ は局所小ではない。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Rank bound for product/pair claimed as ≤ μ+2
- **Category:** Unsupported fact
- **Location:** cat:universe-from-inaccessible / proof 1, 条件 2
- **Detail:** The proof states that for $\mu=\max(\rank u,\rank v)$, the ranks of $\{u,v\}$, $(u,v)$, $u\times v$ are all at most $\mu+2$. For the ordered pair $(u,v)=\{\{u\},\{u,v\}\}$ and for $u\times v$ the rank is bounded by $\mu+2$ (indeed $\rank(u,v)\le\mu+2$ and $\rank(u\times v)\le\mu+2$), so the bound is correct, but it is cited to \ref{set:rank-operations.3} and \ref[5]{set:rank-operations.5}; the latter label (item 5 of set:rank-operations) is not in the provided label table, so the citation cannot be verified. This is a citation-verification concern rather than a mathematical error; flagging only because the referenced item is unverifiable from the table.
- **Proposed fix:** Verify that \ref[5]{set:rank-operations.5} indeed states the rank bound for ordered pairs and Cartesian products; if not, replace with the correct item or add the short argument: $\rank(u,v)\le\mu+2$ and $\rank(u\times v)\le\mu+2$ since both are built by at most two power-set/union steps from $u,v$.
- **Reported:** 2026-10-28 (10fede1)
