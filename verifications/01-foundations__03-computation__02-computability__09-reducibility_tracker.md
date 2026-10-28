# Verification tracker: `01-foundations/03-computation/02-computability/09-reducibility.html`

<!-- source: 01-foundations/03-computation/02-computability/09-reducibility.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reduction direction stated backwards in 'difficulty propagation'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：困難の伝播
- **Detail:** The supplement says: reducing $A$ to $B$ shows '$B$ is about as hard as $A$', and then says 'from the one hard problem $A_{\mathsf{TM}}$, by tracing the reduction arrows in the reverse direction, difficulty propagates one after another.' These two statements are inconsistent. If $A \le B$ (A reduces to B), then $B$ is at least as hard as $A$, so difficulty flows from $A$ to $B$ along the arrow direction (forward), not in reverse. The page's own reductions go $A_{\mathsf{TM}} \le E_{\mathsf{TM}}$, $A_{\mathsf{TM}} \le \mathit{REGULAR}_{\mathsf{TM}}$, etc., i.e. difficulty propagates forward from $A_{\mathsf{TM}}$ to the new problems. 'Tracing arrows in the reverse direction' would go from the derived problems back to $A_{\mathsf{TM}}$, which is not how the undecidability is transferred.
- **Proposed fix:** 還元 $A \le B$ は「$B$ は $A$ と少なくとも同じくらい難しい」ことを意味する。$A_{\mathsf{TM}}$ という一つの難しい問題から、還元の矢印を**順方向に**たどることで（$A_{\mathsf{TM}} \le E_{\mathsf{TM}}$, $A_{\mathsf{TM}} \le \mathit{REGULAR}_{\mathsf{TM}}$ など）、困難が次々に伝播していく。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Rice-Shapiro is not an analogue of recognizability
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, last bullet
- **Detail:** The supplement says $\{\langle M\rangle : L(M)\neq\varnothing\}$ is recognizable and then claims 'the analogue for recognizability is \ref{comp:rice-shapiro}'. Rice-Shapiro's theorem characterizes which index sets are computably enumerable (recognizable): a set of partial computable functions is c.e. iff it is effectively open (contains a finite approximation of each of its members). It is not merely 'the recognizability analogue of Rice's theorem' in the loose sense implied; more importantly, the cited theorem is about c.e. index sets, and the sentence overstates/misdescribes it as the analogue for recognizability of the specific example. The claim as phrased is imprecise about what Rice-Shapiro asserts.
- **Proposed fix:** 認識可能性については、ライス–シャピロの定理（\ref{comp:rice-shapiro}）が、指数集合が計算可能枚挙可能（認識可能）であるための必要十分条件を与える：$P$ が認識可能であるのは、$P$ が「効果的に開」であるとき、すなわち各 $\langle M\rangle\in P$ に対し有限近似 $\langle M'\rangle\in P$（$L(M')\subseteq L(M)$ が有限）がとれるときに限る。
- **Reported:** 2026-10-28 (8ccef3d)
