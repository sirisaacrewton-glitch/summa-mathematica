# Verification tracker: `01-foundations/03-computation/04-complexity/06-hierarchy.html`

<!-- source: 01-foundations/03-computation/04-complexity/06-hierarchy.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (space/time hierarchy, separations, Baker–Gill–Solovay) and their proofs are essentially correct, and the cited labels match their uses. The genuine problems are concentrated in the supplement: the attribution of the $\log t(n)$ loss to the Henie–Sterns simulation is wrong (it comes from the counter update cost), the explanation of why the nondeterministic hierarchy theorem is hard is imprecise, and the description of the natural-proofs/algebrization barriers overgeneralizes what those barriers exclude.

## Issues

### ISSUE-0001 [Open] 時間階層定理の log 損失の由来に関する記述が誤り
- **Category:** Supplement/remark error
- **Location:** supplement「前提の検討」第2項目
- **Detail:** 「時間階層定理の $\log t(n)$ の損失は、多テープ機械の模倣の効率（ヘニー–スターンズ）に由来し」とあるが、これは誤り。本文の証明自身が述べている通り、$\log t(n)$ の損失は単一テープ機械 $M$ を模倣する際に、計数器（$O(\log t(n))$ ビット）をヘッドの近くに保ちながら一段ごとに更新する費用に由来する。ヘニー–スターンズの定理は多テープ機械を単一テープで $O(t\log t)$ 時間で模倣できるという結果であり、これを持ち出して「模型を変えると改善できる」とするのは文脈に合わない。実際、時間階層定理の $\log$ 因子は本質的で、模型を変えても一般には除去できない。
- **Proposed fix:** The $\log t(n)$ loss in the time hierarchy theorem comes from the cost of updating the step counter (of $O(\log t(n))$ bits) at each simulated step while keeping it near the tape head; it is not a consequence of the Henie–Sterns multitape simulation. This $\log$ factor is essential and cannot in general be removed by changing the machine model.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 非決定性時間階層定理の証明困難の理由づけが不正確
- **Category:** Supplement/remark error
- **Location:** supplement「前提の検討」第1項目
- **Detail:** 「対角化で『逆の答えを出す』のが非決定性では難しいので、証明は工夫を要する」とあるが、非決定性時間階層定理（Cook 1969, Seiferas–Fischer–Meyer 1978）の証明の困難さは、単に「逆の答えを出す」ことではなく、非決定性機械の対角化では受理/拒否の反転が計算木全体の反転を意味し、補集合を取ると NP の枠を出てしまう点にある。記述は理由づけとして不正確で、読者に誤解を与える。
- **Proposed fix:** The nondeterministic time hierarchy theorem also holds (Cook; Seiferas–Fischer–Meyer). The difficulty is not merely 'outputting the opposite answer': for a nondeterministic machine, flipping the answer means flipping the whole computation tree, which leaves the class of nondeterministic computations, so the diagonalization requires a more elaborate argument (e.g. a lazy diagonalization).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 自然な証明の壁・代数化の壁の説明が不正確
- **Category:** Supplement/remark error
- **Location:** supplement「関連する結果」第1項目
- **Detail:** 「回路の下界や相対化しない議論についても、P 対 NP を解くのに使えない手法の種類が知られている」とあるが、自然な証明の壁（Razborov–Rudich）が排除するのは『自然な証明』という特定の形の回路下界証明であり、代数化の壁（Aaronson–Wigderson）が排除するのは代数化する証明である。これらは『相対化しない議論』一般を排除するものではなく、記述は過度に一般化されている。
- **Proposed fix:** The natural proofs barrier (Razborov–Rudich) rules out a broad class of 'natural' circuit lower-bound proofs, and the algebrization barrier (Aaronson–Wigderson) rules out proofs that algebrize (including relativizing and some non-relativizing arguments). These identify specific classes of techniques that cannot resolve P vs NP, not all non-relativizing arguments.
- **Reported:** 2026-10-28 (8ccef3d)
