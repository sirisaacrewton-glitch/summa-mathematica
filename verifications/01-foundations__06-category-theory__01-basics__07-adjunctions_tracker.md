# Verification tracker: `01-foundations/06-category-theory/01-basics/07-adjunctions.html`

<!-- source: 01-foundations/06-category-theory/01-basics/07-adjunctions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Forgetful functor Grp→Set does preserve coproducts on underlying sets
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that $U\colon\mathbf{Grp}\to\mathbf{Set}$ has no right adjoint because a right adjoint preserves colimits but $U$ does not preserve coproducts, since "the underlying set of a free product is not the disjoint union of the underlying sets". This is wrong: the forgetful functor $U\colon\mathbf{Grp}\to\mathbf{Set}$ is a left adjoint (free group functor), and left adjoints preserve colimits. The coproduct in $\mathbf{Grp}$ is the free product, and $U$ does preserve it: $U(G*H)=U(G)\sqcup U(H)$ as sets (the free product is words in the disjoint union of the generators). So the stated reason is false. The conclusion (no right adjoint) is true, but the justification must be changed: e.g. $U$ does not preserve the initial object (the trivial group is not initial in $\mathbf{Set}$), or $U$ does not preserve coequalizers/quotients.
- **Proposed fix:** Replace with: "...右随伴はもたない：右随伴をもつ関手は余極限を保つ（\ref{cat:adjoints-preserve-limits}）が、$U$ は始対象を保たない（$\mathbf{Grp}$ の始対象は自明群で、その台集合は一元集合ではなく空集合でもない。あるいは $U$ は余等化子を保たない）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Galois correspondence is contravariant, not an ordinary (covariant) adjunction
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理, ガロア理論)
- **Detail:** The supplement says the Galois correspondence between field extensions and subgroups is "a (contravariant) Galois connection, a special case of an adjunction". A contravariant Galois connection is an adjunction between $P$ and $Q^{\mathrm{op}}$ (or between $P^{\mathrm{op}}$ and $Q$), not an adjunction $f\dashv g$ between the ordered sets as stated in the example. Calling it "a special case of an adjunction" without specifying the opposite category is imprecise; the covariant adjunction formulation requires passing to opposite posets.
- **Proposed fix:** State: "体の拡大と部分群の間のガロア対応は反変ガロア接続、すなわち $P$ と $Q^{\mathrm{op}}$ の間の（共変な）随伴 $f\dashv g$ の特別な場合である。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Discrete/indiscrete topology listed as two approximations of the same forgetful functor alongside free group
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The sentence "自由群と密着位相、離散位相と忘却関手のように、同じ忘却関手の両側に二つの近似が並ぶことがある" is muddled: for $U\colon\mathbf{Top}\to\mathbf{Set}$ the left adjoint is the discrete topology functor $D$ and the right adjoint is the indiscrete topology functor $I$; the phrasing pairs "自由群" with "密着位相" and "離散位相" with "忘却関手", which does not correctly identify the two-sided adjoints. The correct pairing is $D\dashv U\dashv I$.
- **Proposed fix:** Rewrite: "...同じ忘却関手 $U\colon\mathbf{Top}\to\mathbf{Set}$ の両側に、左随伴（離散位相）と右随伴（密着位相）という二つの近似が並ぶ。"
- **Reported:** 2026-10-28 (10fede1)
