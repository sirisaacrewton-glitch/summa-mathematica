# Verification tracker: `02-algebra/02-group-theory/01-groups/03-cosets-lagrange.html`

<!-- source: 02-algebra/02-group-theory/01-groups/03-cosets-lagrange.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound overall: the proofs of the coset partition, coset size, Lagrange, index tower, product formula, units group, and Euler–Fermat are correct, and the hypcheck comments are accurate. The only genuine problem is in the supplement: the claim that Sylow's theorem guarantees subgroups of every prime-power order dividing $|G|$ is overstated (only the maximal prime power is guaranteed). The orbit-stabilizer remark is essentially correct.

## Issues

### ISSUE-0001 [Open] Prime-power divisors are not guaranteed by Sylow
- **Category:** Supplement/remark error
- **Location:** supplement (無限群の場合 / 逆は成り立たない), grp:sec-cl-index
- **Detail:** The supplement says 「素数冪の約数についてはシローの定理が存在を保証する」. Sylow's theorem guarantees, for each prime power $p^{a}$ dividing $|G|$, the existence of a subgroup of order $p^{a}$ only when $p^{a}$ is the full $p$-part of $|G|$ (a Sylow $p$-subgroup). For a general prime power $p^{a}\mid|G|$ with $a<v_{p}(|G|)$, existence is not guaranteed in general. So the statement is overstated: it should be restricted to the maximal prime power $p^{v_{p}(|G|)}$.
- **Proposed fix:** 素数冪については、$\abs{G}$ を割り切る素数 $p$ に対し $p$ の最大冪 $p^{v_{p}(\abs{G})}$（シロー $p$ 部分群の位数）についてはシローの定理が存在を保証する（\tref{grp:page-sylow}）。一般の素数冪 $p^{a}\mid\abs{G}$（$a<v_{p}(\abs{G})$）については、存在は保証されない。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Orbit-stabilizer description of the action is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点), grp:sec-cl-index
- **Detail:** The supplement states that $G$ acts on $G/H$ by left multiplication and that 「$H$ はこの作用で点 $eH$ を動かさない元全体である」, and that Lagrange is the case of orbit-stabilizer with a single orbit. The stabilizer of $eH$ under $g\cdot xH=gxH$ is indeed $H$, and the action is transitive, so the orbit-stabilizer relation gives $|G|=|G/H|\cdot|H|$. This part is correct. However, the phrase 「軌道が一つしかない場合にあたる」 is slightly imprecise: orbit-stabilizer gives $|G|=|\text{orbit}|\cdot|\text{stabilizer}|$ for each point, and Lagrange corresponds to the special case where the orbit is all of $G/H$ (transitive action) and the stabilizer is $H$. This is essentially what is said, so no genuine error. (No report.)
- **Proposed fix:** No change needed; optionally clarify that the orbit is all of $G/H$ and the stabilizer is $H$.
- **Reported:** 2026-10-28 (10fede1)
