# Verification tracker: `02-algebra/02-group-theory/01-groups/07-extensions.html`

<!-- source: 02-algebra/02-group-theory/01-groups/07-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 1

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Sylow p-subgroup application: commutativity of P is not needed and the coprime condition is misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 応用
- **Detail:** The supplement claims: 'If a Sylow p-subgroup P is commutative and normal, then G ≅ P ⋊ (G/P).' The commutativity hypothesis is superfluous (Schur–Zassenhaus needs only gcd(|P|,(G:P))=1, which holds automatically for a Sylow subgroup), so the statement is not false but is stated with an unnecessary hypothesis that suggests it is needed. More importantly, the example '位数 pq の群が半直積になることは、この定理からもわかる' is imprecise: the abelian-case theorem requires the normal subgroup to be abelian and coprime to its index; for |G|=pq one must know which Sylow subgroup is normal and that it is abelian (both Sylow subgroups are abelian here since prime order), so the citation is acceptable, but the general phrasing 'Sylow p 部分群 P が可換で正規なら' overstates the role of commutativity.
- **Proposed fix:** Replace with: 'シロー $p$ 部分群 $P$ が正規なら（$\gcd(|P|,(G:P))=1$ は自動的に成り立つので）、$G\cong P\rtimes(G/P)$。例えば位数 $pq$ の群では正規なシロー部分群は素数位数で可換なので、この定理から半直積になることがわかる。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says 'if a Sylow p-subgroup P is commutative and normal then G ≅ P ⋊ (G/P)', where commutativity is automatic for a Sylow subgroup and the coprime condition (automatic) is not mentioned; the phrasing still overstates the role of commutativity.

### ISSUE-0002 [Ignored: Valid Rebuttal] Conjugacy claim in general Schur–Zassenhaus attributed to Feit–Thompson
- **Category:** Unsupported fact
- **Location:** grp:schur-zassenhaus-general
- **Detail:** The fact states that if one of N or G/N is solvable then all complements are conjugate, and that the general case of the conjugacy claim uses the Feit–Thompson theorem. This is essentially correct (the solvable-case conjugacy is Schur–Zassenhaus; the general case requires Feit–Thompson for the odd-order case), but the phrasing 'N または G/N の一方が可解なら' combined with '共役の主張の一般の場合はファイト–トンプソンの定理を使う' is slightly imprecise: the standard statement is that conjugacy holds when N or G/N is solvable, and the remaining case (both non-solvable) is reduced to Feit–Thompson. This is acceptable as a stated fact, but the attribution should be precise.
- **Proposed fix:** State: 'さらに $N$ または $G/N$ の一方が可解なら補群はすべて互いに共役である。可解でない場合の共役性はファイト–トンプソンの定理（奇数位数の群は可解）に帰着される。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The fact's statement ('if N or G/N is solvable then complements are conjugate; the general case uses Feit–Thompson') is the standard formulation, and the rebuttal is correct.
**Opus Rebuttal:** The fact as written ('N または G/N の一方が可解なら補群は共役。一般の場合はファイト–トンプソン') is the standard statement.

### ISSUE-0003 [Open] Central extension example 5: D_4 is not a non-split extension by V
- **Category:** Supplement/remark error
- **Location:** grp:split-nonsplit-examples / item 5
- **Detail:** Item 5 claims D_4 is a non-split central extension of V by Z(D_4)={e,r^2}. But D_4 has order 8 and V has order 4, so the kernel would need order 2, and indeed {e,r^2} has order 2 with quotient of order 4. However the quotient D_4/{e,r^2} is isomorphic to V, and the subgroup ⟨r⟩={e,r,r^2,r^3} is a complement (order 4, intersects {e,r^2} trivially, product is all of D_4). So this extension DOES split, contradicting the claim 'こちらも分裂しない'. The argument given ('if it split then D_4 ≅ Z/2Z × V would be abelian') is wrong because a split central extension is a direct product N × H where H ≅ G/N, but here H ≅ V and N ≅ Z/2Z, giving Z/2Z × V which is abelian — yet D_4 is not abelian, so the premise 'split' must be false; but the complement ⟨r⟩ shows it does split. The error is that D_4/{e,r^2} ≅ V but the complement ⟨r⟩ ≅ Z/4Z, not V, so D_4 ≅ Z/2Z ⋊ Z/4Z, not Z/2Z × V. The claim that D_4 and Q_8 give non-isomorphic extensions with the same N and Q is also wrong for this pair: for Q_8 the quotient is Z/2Z (by ⟨i⟩), not V.
- **Proposed fix:** Replace item 5 with a correct example. For instance: 'D_{4} is a central extension of V by Z(D_{4})={e,r^{2}}, but this extension splits: ⟨r⟩ is a complement, so D_{4}≅Z/2Z⋊Z/4Z (not a direct product, since the complement is cyclic of order 4, not V). A correct pair of non-isomorphic extensions with the same N and Q is Q_{8} and D_{4} as extensions of Z/2Z by Z/2Z: both have a normal subgroup of order 2 with quotient Z/2Z, but Q_{8} has a unique element of order 2 while D_{4} has five, so they are not isomorphic.'
- **Reported:** 2026-10-28 (048145a)
