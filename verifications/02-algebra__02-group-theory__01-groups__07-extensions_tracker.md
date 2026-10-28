# Verification tracker: `02-algebra/02-group-theory/01-groups/07-extensions.html`

<!-- source: 02-algebra/02-group-theory/01-groups/07-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Sylow p-subgroup application: commutativity of P is not needed and the coprime condition is misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 応用
- **Detail:** The supplement claims: 'If a Sylow p-subgroup P is commutative and normal, then G ≅ P ⋊ (G/P).' The commutativity hypothesis is superfluous (Schur–Zassenhaus needs only gcd(|P|,(G:P))=1, which holds automatically for a Sylow subgroup), so the statement is not false but is stated with an unnecessary hypothesis that suggests it is needed. More importantly, the example '位数 pq の群が半直積になることは、この定理からもわかる' is imprecise: the abelian-case theorem requires the normal subgroup to be abelian and coprime to its index; for |G|=pq one must know which Sylow subgroup is normal and that it is abelian (both Sylow subgroups are abelian here since prime order), so the citation is acceptable, but the general phrasing 'Sylow p 部分群 P が可換で正規なら' overstates the role of commutativity.
- **Proposed fix:** Replace with: 'シロー $p$ 部分群 $P$ が正規なら（$\gcd(|P|,(G:P))=1$ は自動的に成り立つので）、$G\cong P\rtimes(G/P)$。例えば位数 $pq$ の群では正規なシロー部分群は素数位数で可換なので、この定理から半直積になることがわかる。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Conjugacy claim in general Schur–Zassenhaus attributed to Feit–Thompson
- **Category:** Unsupported fact
- **Location:** grp:schur-zassenhaus-general
- **Detail:** The fact states that if one of N or G/N is solvable then all complements are conjugate, and that the general case of the conjugacy claim uses the Feit–Thompson theorem. This is essentially correct (the solvable-case conjugacy is Schur–Zassenhaus; the general case requires Feit–Thompson for the odd-order case), but the phrasing 'N または G/N の一方が可解なら' combined with '共役の主張の一般の場合はファイト–トンプソンの定理を使う' is slightly imprecise: the standard statement is that conjugacy holds when N or G/N is solvable, and the remaining case (both non-solvable) is reduced to Feit–Thompson. This is acceptable as a stated fact, but the attribution should be precise.
- **Proposed fix:** State: 'さらに $N$ または $G/N$ の一方が可解なら補群はすべて互いに共役である。可解でない場合の共役性はファイト–トンプソンの定理（奇数位数の群は可解）に帰着される。'
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** The fact as written ('N または G/N の一方が可解なら補群は共役。一般の場合はファイト–トンプソン') is the standard statement.
